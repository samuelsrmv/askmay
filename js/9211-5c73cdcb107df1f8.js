"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [9211], {
      47685: function (t, e) {
         e.Z = {
            src: "/_next/static/media/appIcon.8a73aef2.png",
            height: 1024,
            width: 1024,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAABE0lEQVR4nAEIAff+AFFb1gBWYdwVUFvaQD5M1z8/Tdg/Ul3aQFhj3BVSXNYAAE1XzBVNWNXbU1/Z/3uH5P+Bjub/VmPb/0xX1dxOWMwWAEtUyUJAS8v/eYLd/vD1//7////+usDv/khT0P9ETcZCADlDvEFFTcb/ZGnY/pKf6f3k7f79+vv+/mZu0v8iLbZBADU+tUA4QLv/UVHU/lNX1v1/juX9ztX3/llgxf8dJ69BAC83rUIvN7D/Oz7B/kZGyv5LTsb+VVu9/jE4sf8tNKxDACctmhcoMKfeJy6k/yctov8qMKT/Iimj/ygvp98oLpkYACgupQAdIocZIiiXRiEol0QgJ5ZEJi2ZRh8khxopMKUA8rKEB7z2NTcAAAAASUVORK5CYII=",
            blurWidth: 8,
            blurHeight: 8
         }
      },
      75837: function (t, e, n) {
         n.d(e, {
            W: function () {
               return i
            }
         });
         var r = n(23382),
            a = n(65124),
            i = function () {
               function t() {
                  (0, r.Z)(this, t)
               }
               return t.score = function (t) {
                  var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                  return Array.isArray(t) ? 0 === t.length ? 0 : (e = Math).max.apply(e, (0, a.Z)(t.map((function (t) {
                     return h(t, n, d(t), d(n))
                  })))) : h(t, n, d(t), d(n))
               }, t.prioritize = function (t) {
                  return 1.01 * t * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
               }, t.deprioritize = function (t) {
                  return .99 * t * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1)
               }, t
            }(),
            s = /[\\\/_+.#"@\[\(\{&]/,
            o = /[\\\/_+.#"@\[\(\{&]/g,
            c = /[\s-]/,
            l = /[\s-]/g;

         function h(t, e, n, r) {
            var a, i, d, u, p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
               f = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
               x = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {};
            if (f === e.length) return p === t.length ? 1 : .99;
            var g = "".concat(p, ",").concat(f);
            if (void 0 !== x[g]) return x[g];
            for (var m = r.charAt(f), j = n.indexOf(m, p), y = 0; j >= 0;)(a = h(t, e, n, r, j + 1, f + 1, x)) > y && (j === p ? a *= 1 : s.test(t.charAt(j - 1)) ? (a *= .8, (d = t.slice(p, j - 1).match(o)) && p > 0 && (a *= Math.pow(.999, d.length))) : c.test(t.charAt(j - 1)) ? (a *= .9, (u = t.slice(p, j - 1).match(l)) && p > 0 && (a *= Math.pow(.999, u.length))) : (a *= .17, p > 0 && (a *= Math.pow(.999, j - p))), t.charAt(j) !== e.charAt(f) && (a *= .9999)), (a < .1 && n.charAt(j - 1) === r.charAt(f + 1) || r.charAt(f + 1) === r.charAt(f) && n.charAt(j - 1) !== r.charAt(f)) && .1 * (i = h(t, e, n, r, j + 1, f + 2, x)) > a && (a = .1 * i), a > y && (y = a), j = n.indexOf(m, j + 1);
            return x[g] = y, y
         }

         function d(t) {
            return t.toLowerCase().replace(l, " ")
         }
      },
      89896: function (t, e, n) {
         n.d(e, {
            A: function () {
               return o
            }
         });
         var r = n(53796),
            a = n(56367),
            i = n(35250);
         n(70079);
         var s = n(82432),
            o = function (t) {
               return (0, i.jsx)(s.J, (0, a.Z)((0, r.Z)({}, t), {
                  children: (0, i.jsx)("svg", {
                     width: "16",
                     height: "16",
                     viewBox: "0 0 16 16",
                     fill: "none",
                     children: (0, i.jsx)("path", {
                        d: "m14.768 6.542-.02-.052-1.906-5.164a.496.496 0 0 0-.948.054l-1.287 4.087h-5.21L4.11 1.38a.5.5 0 0 0-.752-.3.516.516 0 0 0-.196.246l-1.91 5.162-.018.052a3.808 3.808 0 0 0-.097 2.327 3.68 3.68 0 0 0 1.27 1.92l.007.005.018.013 2.902 2.257L6.77 14.19l.875.686a.575.575 0 0 0 .712 0l.875-.686 1.436-1.129 2.92-2.27.007-.007a3.682 3.682 0 0 0 1.268-1.918 3.809 3.809 0 0 0-.095-2.324Z"
                     })
                  })
               }))
            }
      },
      48008: function (t, e, n) {
         n.d(e, {
            n: function () {
               return o
            }
         });
         var r = n(53796),
            a = n(56367),
            i = n(35250);
         n(70079);
         var s = n(82432),
            o = function (t) {
               return (0, i.jsx)(s.J, (0, a.Z)((0, r.Z)({}, t), {
                  children: (0, i.jsx)("svg", {
                     width: "16",
                     height: "16",
                     fill: "none",
                     xmlns: "http://www.w3.org/2000/svg",
                     children: (0, i.jsx)("path", {
                        d: "M12.1 15H15L15 9.87c0-2.519-.542-4.454-3.48-4.454-1.121-.042-2.218.54-2.784 1.51V5.648H5.953V15h2.899v-4.626c0-1.22.23-2.4 1.74-2.4 1.489 0 1.508 1.395 1.508 2.48V15ZM1 2.685c0 .924.76 1.685 1.682 1.685.923 0 1.682-.761 1.682-1.686C4.364 1.76 3.604 1 2.682 1 1.76 1 1 1.76 1 2.685ZM1.23 15h2.902V5.648H1.23V15Z"
                     })
                  })
               }))
            }
      },
      44520: function (t, e, n) {
         n.d(e, {
            k: function () {
               return i
            }
         });
         var r = n(35250);
         n(70079);
         var a = n(68438);

         function i(t) {
            var e = (0, a.Fg)();
            return (0, r.jsx)("svg", {
               width: "16",
               height: "16",
               viewBox: "0 0 16 16",
               fill: e.color.labelMuted,
               className: t.className,
               children: (0, r.jsx)("path", {
                  d: "M8 1C4.13401 1 1 3.262 1 7C1 8.83211 1.75288 10.3096 2.97581 11.3401C2.22526 13.7801 2.07619 15 2.52874 15C2.93754 15 3.96564 14.2301 5.61306 12.6902C6.35802 12.8937 7.16181 13 8 13C11.866 13 15 10.6678 15 7C15 3.33217 11.866 1 8 1Z"
               })
            })
         }
      },
      76815: function (t, e, n) {
         n.d(e, {
            aU: function () {
               return x
            },
            WM: function () {
               return k
            },
            fW: function () {
               return m
            },
            WK: function () {
               return f
            },
            PQ: function () {
               return j
            },
            _0: function () {
               return v
            },
            pJ: function () {
               return w
            },
            Bq: function () {
               return A
            }
         });
         var r = n(23382),
            a = n(53796),
            i = n(35250),
            s = n(70079),
            o = n(96594),
            c = n.n(o),
            l = n(65124),
            h = n(99872),
            d = new Set(["shift", "control", "meta", "alt"]);

         function u(t) {
            var e = String.fromCharCode(t.keyCode),
               n = t.key;
            return (t.keyCode >= 65 && t.keyCode <= 90 || t.keyCode >= 97 && t.keyCode <= 122) && (n = e), t.altKey && 1 === t.key.length && (n = e), t.ctrlKey && e.match(/[0-9]/) && (n = e), n.toLowerCase()
         }
         var p = n(643),
            f = function t(e) {
               (0, r.Z)(this, t), Object.assign(this, e)
            },
            x = function t(e) {
               (0, r.Z)(this, t), Object.assign(this, e)
            },
            g = function () {
               function t(e) {
                  (0, r.Z)(this, t), this.actions = new Map, this.listeners = new Set, this.allActions = [], this.context = e, this.helpers = new j(e)
               }
               var e = t.prototype;
               return e.subscribe = function (t) {
                  var e = this;
                  return this.listeners.add(t),
                     function () {
                        e.listeners.delete(t)
                     }
               }, e.notify = function () {
                  var t = this;
                  this.listeners.forEach((function (e) {
                     return e(t)
                  }))
               }, e.register = function (t) {
                  var e = this,
                     n = Array.isArray(t) ? t : [t];
                  return n.forEach((function (t) {
                        e.actions.set(t.id, t)
                     })), this.allActions = c()(Array.from(this.actions.values()), "id"), this.notify(),
                     function () {
                        n.forEach((function (t) {
                           e.actions.delete(t.id)
                        })), e.allActions = c()(Array.from(e.actions.values()), "id"), e.notify()
                     }
               }, e.applicableActions = function (t, e) {
                  var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
                     r = this;
                  return t.map((function (t) {
                     var n;
                     return {
                        score: null !== (n = null == e ? void 0 : e(t, r.context)) && void 0 !== n ? n : 1,
                        action: t
                     }
                  })).filter((function (t) {
                     var e, a, i;
                     return (null === (i = null === (a = (e = t.action).applicable) || void 0 === a ? void 0 : a.call(e, r.context)) || void 0 === i || i) && t.score > n
                  })).sort((function (t, e) {
                     var n, a;
                     return 1e3 * (null !== (n = r.helpers.resolve(e.action.priority)) && void 0 !== n ? n : 0) + e.score - (1e3 * (null !== (a = r.helpers.resolve(t.action.priority)) && void 0 !== a ? a : 0) + t.score)
                  })).map((function (t) {
                     return t.action
                  }))
               }, e.applicableGroupedActions = function (t) {
                  var e = this,
                     n = t.reduce((function (t, e) {
                        var n = t.get(e.group);
                        return n ? n.push(e) : t.set(e.group, [e]), t
                     }), new Map),
                     r = new Map;
                  return Array.from(n.keys()).sort((function (t, n) {
                     var r, a;
                     return (null !== (r = e.helpers.resolve(n.priority)) && void 0 !== r ? r : 0) - (null !== (a = e.helpers.resolve(t.priority)) && void 0 !== a ? a : 0)
                  })).forEach((function (t) {
                     r.set(t, n.get(t))
                  })), r
               }, e.actionForKeyboardEvent = function (t) {
                  var e = this;
                  return this.applicableActions(this.allActions).find((function (n) {
                     var r = e.helpers.resolve(n.shortcuts);
                     return !!r && r.some((function (e) {
                        return j.shortcutMatchesSequence(e, t)
                     }))
                  }))
               }, t
            }(),
            m = function t(e) {
               (0, r.Z)(this, t), Object.assign(this, e)
            },
            j = function () {
               function t(e) {
                  (0, r.Z)(this, t), this.context = e
               }
               var e = t.prototype;
               return e.resolve = function (t) {
                  return t instanceof Function ? t(this.context) : t
               }, e.actionScoreString = function (t) {
                  var e = this.resolve(t.name),
                     n = this.resolve(t.keywords);
                  return "".concat(e, " ").concat(n)
               }, e.execute = function (t, e) {
                  var n;
                  return this.context.event = e, null === (n = t.execute) || void 0 === n || n.call(t, this.context), this.resolve(t.children)
               }, t.generateId = function () {
                  return Math.random().toString(16).slice(2)
               }, t.mergeActions = function () {
                  for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                  return c()(e.flat(), "id")
               }, t.modifier = function (t, e) {
                  return (t || !1) === (e || !1)
               }, t.shortcutMatchesSequence = function (e, n) {
                  var r = (!!p.V5 || !!p._1) && e.metaKey,
                     a = p.V5 || p._1 ? e.ctrlKey : e.metaKey || e.ctrlKey,
                     i = !p.V5 && !p._1 && n.shift && t.normalizedShiftKey[n.lastEvent.code],
                     s = Array.isArray(e.key) ? e.key : [e.key],
                     o = s[0];
                  return s.length === n.keys.length && (s.join("_").toLowerCase() === n.keys.join("_") || s.join("_").toLowerCase() === i) && (o && t.modifierLessKeys.has(o.toLowerCase()) && !n.meta && !n.alt && !n.ctrl || (r || !1) === n.meta && (e.altKey || !1) === n.alt && (a || !1) === n.ctrl && (e.shiftKey || !1) === n.shift)
               }, t
            }();
         j.normalizedShiftKey = {
            Period: ".",
            Comma: ","
         }, j.modifierLessKeys = new Set(["!", '"', "#", "%", "&", "/", "(", ")", "=", "+", "?", "_", "<", ">"]);
         var y = s.createContext(),
            k = function (t) {
               var e, n = s.useRef(t.context),
                  r = s.useMemo((function () {
                     return new g(n.current)
                  }), []);
               return s.useEffect((function () {
                     return r.register(null !== (e = t.actions) && void 0 !== e ? e : [])
                  }), [t.actions]),
                  function (t, e, n, r) {
                     var a = s.useRef(new Set),
                        i = s.useRef([]),
                        o = s.useRef(0),
                        c = s.useRef(null),
                        p = s.useRef(n);
                     s.useEffect((function () {
                        i.current = [], o.current = 0
                     }), [t, e]), p.current = n, (0, h.p)((function () {
                        return !0
                     }), (function (n) {
                        if (!n.repeat) {
                           (o.current < Date.now() - e || c.current !== n.target) && (i.current = []), o.current = Date.now(), c.current = n.target;
                           var r = u(n);
                           if (d.has(r)) return void(p.current({
                              keys: i.current.filter((function (t) {
                                 return a.current.has(t)
                              })),
                              shift: n.shiftKey,
                              meta: n.metaKey,
                              ctrl: n.ctrlKey,
                              alt: n.altKey,
                              lastEvent: n
                           }) && (i.current = []));
                           for (i.current.push(r), a.current.add(r); i.current.length > t;) i.current.shift();
                           p.current({
                              keys: (0, l.Z)(i.current),
                              shift: n.shiftKey,
                              meta: n.metaKey,
                              ctrl: n.ctrlKey,
                              alt: n.altKey,
                              lastEvent: n
                           }) && (i.current = [])
                        }
                     }), (function (t) {
                        if (!t.repeat) {
                           var e = u(t);
                           d.has(e) || a.current.delete(e)
                        }
                     }), r)
                  }(10, 1200, (function (t) {
                     var e = "nativeEvent" in t.lastEvent ? t.lastEvent.nativeEvent : t.lastEvent;
                     if (e.isComposing) return !1;
                     n.current.event = e;
                     var a = r.actionForKeyboardEvent(t);
                     return !!a && (e.stopPropagation(), e.preventDefault(), r.helpers.execute(a, e), !0)
                  })), (0, i.jsx)(y.Provider, {
                     value: r,
                     children: t.children
                  })
            },
            v = function (t) {
               return b(t.action), null
            },
            w = function () {
               return s.useContext(y)
            },
            b = function (t) {
               var e = w();
               s.useEffect((function () {
                  if (e) return e.register(null != t ? t : [])
               }), [t, e])
            },
            A = function (t, e) {
               t.metadata = (0, a.Z)({}, t.metadata, e)
            }
      },
      30817: function (t, e, n) {
         n.d(e, {
            D: function () {
               return o
            }
         });
         var r = n(40508),
            a = n(68438),
            i = n(39073);

         function s() {
            var t = (0, r.Z)(["\n  display: flex;\n  align-items: center;\n  height: 28px;\n  padding: 0 12px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.05);\n  border-radius: var(--rounded-full);\n  color: ", ";\n  backdrop-filter: blur(12px);\n\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 28px;\n  white-space: nowrap;\n\n  transition: 260ms;\n  transition-property: background, width;\n\n  & > svg {\n    :first-child {\n      margin-right: 4px;\n    }\n\n    :last-child {\n      margin-left: 4px;\n    }\n  }\n\n  & > span {\n    background: rgba(255, 255, 255, 0.05);\n    height: 20px;\n    padding: 0 8px;\n    transition: inherit;\n\n    :first-child {\n      margin-left: -8px;\n      margin-right: 8px;\n    }\n\n    :last-child {\n      margin-right: -8px;\n      margin-left: 8px;\n    }\n\n    display: flex;\n    align-items: center;\n    border-radius: var(--rounded-full);\n  }\n\n  a&:hover,\n  button&:hover {\n    cursor: pointer;\n    color: inherit;\n    background: rgba(255, 255, 255, 0.2);\n\n    & > span {\n      background: rgba(255, 255, 255, 0.1);\n    }\n  }\n"]);
            return s = function () {
               return t
            }, t
         }
         var o = (0, a.ZP)(i.WV.div).withConfig({
            componentId: "sc-65bed84c-0"
         })(s(), (function (t) {
            return t.theme.color.labelTitle
         }))
      },
      43910: function (t, e, n) {
         n.d(e, {
            V: function () {
               return j
            },
            W: function () {
               return g
            }
         });
         var r = n(53796),
            a = n(56367),
            i = n(86075),
            s = n(40508),
            o = n(35250),
            c = n(70079),
            l = n(68438),
            h = n(643),
            d = n(3348),
            u = n(45360);

         function p() {
            var t = (0, s.Z)(["\n        font-size: 14px;\n\n        & span {\n          display: inline-block;\n          min-width: 24px;\n          min-height: 24px;\n          border-radius: 4px;\n          font-weight: 500;\n          color: ", ";\n          background: ", ";\n          border: 1px solid ", ";\n        }\n\n        & span + span {\n          margin-left: 4px;\n        }\n      "]);
            return p = function () {
               return t
            }, t
         }

         function f() {
            var t = (0, s.Z)(['\n      & span[title="Shift"],\n      & span[title="Command"],\n      & span[title="Control"],\n      & span[title="Ctrl"],\n      & span[title="Alt"] {\n        min-width: 48px;\n        text-align: left;\n      }\n    ']);
            return f = function () {
               return t
            }, t
         }

         function x() {
            var t = (0, s.Z)(['\n  display: inline-flex;\n  align-items: center;\n  text-transform: uppercase;\n\n  background: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n\n  & span {\n    padding: 0 4px;\n\n    /* Spelling out "Ctrl" for Windows users can be pretty long, make the font smaller */\n    &[title="Ctrl"] {\n      font-size: 10px;\n    }\n  }\n\n  ', "\n\n  ", "\n  ", "\n"]);
            return x = function () {
               return t
            }, t
         }
         var g = c.forwardRef((function (t, e) {
               var n = t.meta,
                  s = t.shift,
                  c = t.alt,
                  l = t.control,
                  h = t.children,
                  d = (0, i.Z)(t, ["meta", "shift", "alt", "control", "children"]);
               return (0, o.jsxs)(m, (0, a.Z)((0, r.Z)({
                  ref: e
               }, d), {
                  children: [n && (0, o.jsx)(y, {}), s && (0, o.jsx)("span", {
                     title: "Shift",
                     children: "⇧"
                  }), c && (0, o.jsx)("span", {
                     title: "Alt",
                     children: "⌥"
                  }), l && (0, o.jsx)("span", {
                     title: "Control",
                     children: "⌃"
                  }), h && (0, o.jsx)("span", {
                     children: h
                  })]
               }))
            })),
            m = l.ZP.kbd.withConfig({
               componentId: "sc-a97aaf64-0"
            })(x(), (function (t) {
               return t.widthAware && (0, l.iv)(f())
            }), (function (t) {
               return t.size, ""
            }), (function (t) {
               return t.kind, (0, l.iv)(p(), (function (t) {
                  return t.theme.color.labelBase
               }), (function (t) {
                  return t.theme.color.bgBase
               }), (function (t) {
                  return t.theme.color.bgBorder
               }))
            })),
            j = function (t) {
               var e = c.Children.count(t.children);
               return (0, o.jsx)(d.k, (0, a.Z)((0, r.Z)({}, t), {
                  children: c.Children.map(t.children, (function (t, n) {
                     return (0, o.jsxs)(c.Fragment, {
                        children: [t, n !== e - 1 && (0, o.jsx)(u.x, {
                           kind: "bodyMini",
                           margin: "0 4px",
                           color: "labelMuted",
                           children: "then"
                        })]
                     }, "chord-key-".concat(n))
                  }))
               }))
            },
            y = function () {
               var t;
               return t = h.ED ? "Ctrl" : "⌘", (0, o.jsx)("span", {
                  title: "Ctrl" === t ? "Ctrl" : "Command",
                  children: t
               })
            }
      },
      91019: function (t, e, n) {
         n.d(e, {
            L: function () {
               return l
            }
         });
         var r, a, i = n(40508),
            s = n(68438),
            o = n(73871);

         function c() {
            var t = (0, i.Z)(["\n  --height: ", ";\n  --width: ", ";\n  display: block;\n  width: 1px;\n  height: 1px;\n  min-width: 1px;\n  min-height: 1px;\n  user-select: none;\n  margin-top: calc(var(--height) - 1px);\n  margin-left: calc(var(--width) - 1px);\n"]);
            return c = function () {
               return t
            }, t
         }
         var l = s.ZP.div.withConfig({
            shouldForwardProp: function () {
               return !1
            }
         }).withConfig({
            componentId: "sc-97525727-0"
         })(c(), (function (t) {
            return null !== (r = (0, o.a)(t.height)) && void 0 !== r ? r : "0px"
         }), (function (t) {
            return null !== (a = (0, o.a)(t.width)) && void 0 !== a ? a : "0px"
         }))
      },
      2126: function (t, e, n) {
         n.d(e, {
            L: function () {
               return r
            }
         });
         var r = n(95129).L
      },
      49211: function (t, e, n) {
         n.r(e), n.d(e, {
            default: function () {
               return ai
            }
         });
         var r = n(87006),
            a = n(1244),
            i = n(40508),
            s = n(35250),
            o = n(70079),
            c = n(96437),
            l = n(66507),
            h = n(85572),
            d = n(74611),
            u = n(68438),
            p = n(63665),
            f = n(26793),
            x = n(37711),
            g = n(61935),
            m = n(76332),
            j = n(45360),
            y = n(94016);

         function k() {
            var t = (0, i.Z)(["\n  display: grid;\n  grid: auto / repeat(var(--columns), minmax(0, 1fr));\n  place-items: center;\n  row-gap: var(--row-gap);\n  column-gap: var(--column-gap);\n\n  --row-gap: 32px;\n  --column-gap: 24px;\n  --columns: 6;\n\n  & svg {\n    max-width: 160px;\n  }\n\n  @media (max-width: 768px) {\n    --columns: 2;\n  }\n"]);
            return k = function () {
               return t
            }, t
         }

         function v() {
            var t = (0, i.Z)(["\n  margin: 0 auto;\n  margin-bottom: 48px;\n"]);
            return v = function () {
               return t
            }, t
         }
         var w = function () {
               return (0, s.jsxs)(m.b, {
                  as: y.Ig,
                  children: [(0, s.jsxs)(A, {
                     as: "p",
                     align: "center",
                     margin: "0 0 72px 0",
                     children: [(0, s.jsx)(j.x, {
                        color: "#B4BCD0",
                        children: "The truth of what works,"
                     }), (0, s.jsx)(y.sw, {
                        as: "br"
                     }), " not what we think works."]
                  }), (0, s.jsxs)(b, {
                     children: [(0, s.jsx)(g.V, {
                        children: (0, s.jsx)(x.V, {})
                     }), (0, s.jsx)(y.sw, {
                        as: g.V,
                        children: (0, s.jsx)(x.vV, {})
                     }), (0, s.jsx)(g.V, {
                        children: (0, s.jsx)(x.Y9, {})
                     }), (0, s.jsx)(y.sw, {
                        as: g.V,
                        children: (0, s.jsx)(x.Fh, {})
                     }), (0, s.jsx)(g.V, {
                        children: (0, s.jsx)(x.KO, {})
                     }), (0, s.jsx)(g.V, {
                        children: (0, s.jsx)(x.Ho, {})
                     }), (0, s.jsx)(g.V, {
                        children: (0, s.jsx)(x.O1, {})
                     }), (0, s.jsx)(g.V, {
                        children: (0, s.jsx)(x.wn, {})
                     }), (0, s.jsx)(y.sw, {
                        as: g.V,
                        children: (0, s.jsx)(x.v1, {})
                     }), (0, s.jsx)(y.sw, {
                        as: g.V,
                        children: (0, s.jsx)(x.k6, {})
                     }), (0, s.jsx)(y.sw, {
                        as: g.V,
                        children: (0, s.jsx)(x.hM, {})
                     }), (0, s.jsx)(y.sw, {
                        as: g.V,
                        children: (0, s.jsx)(x.vS, {})
                     })]
                  })]
               })
            },
            b = u.ZP.div.withConfig({
               componentId: "sc-71acc092-0"
            })(k()),
            A = (0, u.ZP)(y.IV).withConfig({
               componentId: "sc-71acc092-1"
            })(v()),
            C = n(19841),
            z = n(55283);

         function M(t) {
            var e = (0, u.Fg)();
            return (0, s.jsxs)("svg", {
               width: "16",
               height: "16",
               viewBox: "0 0 16 16",
               fill: e.color.labelMuted,
               className: t.className,
               children: [(0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V10C15 10.5523 14.5523 11 14 11H2C1.44772 11 1 10.5523 1 10V2ZM10.9656 3C10.6092 3 10.4308 3.43086 10.6827 3.68284L10.9696 3.96968L9.08285 5.8564C8.99488 5.94437 8.85561 5.95427 8.75608 5.87962L8.08747 5.37817C7.43463 4.88854 6.53004 4.91512 5.90707 5.44224L3.26546 7.67746C2.94925 7.94502 2.90982 8.41825 3.17737 8.73446C3.44493 9.05066 3.91816 9.0901 4.23437 8.82254L6.87599 6.58732C6.96498 6.51202 7.09421 6.50822 7.18747 6.57817L7.85608 7.07962C8.55279 7.60216 9.5277 7.53287 10.1435 6.91706L12.0302 5.03034L12.3171 5.31716C12.569 5.56914 12.9999 5.39068 12.9999 5.03431V3.4C12.9999 3.17909 12.8208 3 12.5999 3H10.9656Z"
               }), (0, s.jsx)("path", {
                  d: "M7 12V13.5854C6.4174 13.7913 6 14.3469 6 15H10C10 14.3469 9.5826 13.7913 9 13.5854V12H7Z"
               })]
            })
         }
         var Z = n(53796),
            O = n(56367),
            L = n(86075);

         function V(t) {
            var e = t.outline,
               n = (0, L.Z)(t, ["outline"]),
               r = (0, u.Fg)();
            return (0, s.jsx)("svg", (0, O.Z)((0, Z.Z)({
               width: "16",
               height: "16",
               viewBox: "0 0 16 16",
               fill: r.color.labelMuted
            }, n), {
               children: e ? (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)("path", {
                     d: "M8.75 5C8.75 4.58579 8.41421 4.25 8 4.25C7.58579 4.25 7.25 4.58579 7.25 5V8C7.25 8.41421 7.58579 8.75 8 8.75H11C11.4142 8.75 11.75 8.41421 11.75 8C11.75 7.58579 11.4142 7.25 11 7.25H8.75V5Z"
                  }), (0, s.jsx)("path", {
                     fillRule: "evenodd",
                     clipRule: "evenodd",
                     d: "M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8Z"
                  })]
               }) : (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 4C7.55786 4 7.25 5.58579 7.25 6V8C7.25 8.41421 7.58579 8.75 8 8.75L8.97545 8.74938C10.0284 8.74341 13 8.67969 13 8C13 7.25 9.16421 7.25 8.75 7.25V6C8.75 5.58579 8.44214 4 8 4Z"
               })
            }))
         }

         function I(t) {
            var e = (0, u.Fg)();
            return (0, s.jsx)("svg", {
               width: "16",
               height: "16",
               viewBox: "0 0 16 16",
               fill: e.color.labelMuted,
               className: t.className,
               children: (0, s.jsx)("path", {
                  d: "M8.58 1C8.82391 1.00174 9.03098 1.17922 9.07 1.42L9.32 2.9C9.35158 3.0778 9.47838 3.22382 9.65 3.28C9.82917 3.3387 10.0031 3.41229 10.17 3.5C10.3266 3.59544 10.5234 3.59544 10.68 3.5L11.9 2.63C12.0854 2.47558 12.3546 2.47558 12.54 2.63L13.36 3.45C13.5295 3.62306 13.5506 3.89272 13.41 4.09L12.54 5.31C12.4446 5.4666 12.4446 5.6634 12.54 5.82C12.6277 5.98689 12.7013 6.16083 12.76 6.34C12.8162 6.51162 12.9622 6.63842 13.14 6.67L14.62 6.92C14.8608 6.95902 15.0383 7.16609 15.04 7.41V8.58C15.0383 8.82391 14.8608 9.03098 14.62 9.07L13.14 9.32C12.9622 9.35158 12.8162 9.47838 12.76 9.65C12.7013 9.82917 12.6277 10.0031 12.54 10.17C12.4446 10.3266 12.4446 10.5234 12.54 10.68L13.41 11.9C13.5506 12.0973 13.5295 12.3669 13.36 12.54L12.54 13.36C12.3669 13.5295 12.0973 13.5506 11.9 13.41L10.68 12.54C10.5234 12.4446 10.3266 12.4446 10.17 12.54C10.0031 12.6277 9.82917 12.7013 9.65 12.76C9.47838 12.8162 9.35158 12.9622 9.32 13.14L9.07 14.62C9.03098 14.8608 8.82391 15.0383 8.58 15.04H7.42C7.17609 15.0383 6.96902 14.8608 6.93 14.62L6.68 13.1C6.64842 12.9222 6.52162 12.7762 6.35 12.72C6.17083 12.6613 5.99689 12.5877 5.83 12.5C5.6734 12.4046 5.4766 12.4046 5.32 12.5L4.1 13.37C3.90272 13.5106 3.63306 13.4895 3.46 13.32L2.64 12.5C2.48558 12.3146 2.48558 12.0454 2.64 11.86L3.51 10.64C3.60544 10.4834 3.60544 10.2866 3.51 10.13C3.42229 9.96311 3.3487 9.78917 3.29 9.61C3.23382 9.43838 3.0878 9.31158 2.91 9.28L1.42 9.07C1.17922 9.03098 1.00174 8.82391 1 8.58V7.42C1.00174 7.17609 1.17922 6.96902 1.42 6.93L2.9 6.68C3.0778 6.64842 3.22382 6.52162 3.28 6.35C3.3387 6.17083 3.41229 5.99689 3.5 5.83C3.59544 5.6734 3.59544 5.4766 3.5 5.32L2.59 4.1C2.43558 3.91461 2.43558 3.64539 2.59 3.46L3.41 2.64C3.59539 2.48558 3.86461 2.48558 4.05 2.64L5.27 3.51C5.4266 3.60544 5.6234 3.60544 5.78 3.51C5.94689 3.42229 6.12083 3.3487 6.3 3.29C6.47162 3.23382 6.59842 3.0878 6.63 2.91L6.93 1.42C6.96902 1.17922 7.17609 1.00174 7.42 1H8.58ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6Z"
               })
            })
         }

         function H(t) {
            var e = (0, u.Fg)();
            return (0, s.jsx)("svg", {
               width: "16",
               height: "16",
               viewBox: "0 0 16 16",
               fill: e.color.labelMuted,
               className: t.className,
               children: (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9 2C9 2.37014 8.7989 2.69331 8.5 2.86622V3.5C8.5 3.77614 8.72386 4 9 4H9.5C10.8978 4 11.5967 4 12.1481 4.22836C12.8831 4.53284 13.4672 5.11687 13.7716 5.85195C14 6.40326 14 7.10218 14 8.5C14 9.89782 14 10.5967 13.7716 11.1481C13.4672 11.8831 12.8831 12.4672 12.1481 12.7716C11.7135 12.9516 11.1872 12.9898 10.2992 12.9978C10.1339 12.9993 10 13.1333 10 13.2986V13.7C10 13.8657 10.1343 14 10.3 14H10.5C10.7761 14 11 14.2239 11 14.5V14.8C11 14.9105 10.9105 15 10.8 15H5.2C5.08954 15 5 14.9105 5 14.8V14.5C5 14.2239 5.22386 14 5.5 14H5.7C5.86569 14 6 13.8657 6 13.7V13.2986C6 13.1333 5.86611 12.9993 5.70078 12.9978C4.81279 12.9898 4.28652 12.9516 3.85195 12.7716C3.11687 12.4672 2.53284 11.8831 2.22836 11.1481C2 10.5967 2 9.89782 2 8.5C2 7.10218 2 6.40326 2.22836 5.85195C2.53284 5.11687 3.11687 4.53284 3.85195 4.22836C4.40326 4 5.10218 4 6.5 4H7C7.27614 4 7.5 3.77614 7.5 3.5V2.86622C7.2011 2.69331 7 2.37014 7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2ZM5 8C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8ZM12 7C12 7.55228 11.5523 8 11 8C10.4477 8 10 7.55228 10 7C10 6.44772 10.4477 6 11 6C11.5523 6 12 6.44772 12 7ZM6.4 9C6.17909 9 6 9.17909 6 9.4V10.1C6 10.3209 6.17909 10.5 6.4 10.5H9.6C9.82091 10.5 10 10.3209 10 10.1V9.4C10 9.17909 9.82091 9 9.6 9H6.4Z"
               })
            })
         }
         var W = n(63048),
            U = n(16969),
            E = n(40223),
            P = {
               src: "/_next/static/media/cycles.987d1e41.png",
               height: 1028,
               width: 2168,
               blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nAGEAHv/AOfo7QPk5u8E////AHVUGQB8WAEAztDYAbCyuwSbpawCAHZ+xwLk4NQF2M/CAsKykwnBspYIipGuA6SrqAO0oqkEAISL1AKon6AGrZ6LB6udjQmil5kFoqy5AZWbpAG2rbICALS30QGqs+4B/+IHAKubgwB9XUIAy8zRAamstgCftbwAJatAmAY+DrgAAAAASUVORK5CYII=",
               blurWidth: 8,
               blurHeight: 4
            },
            S = function () {
               var t = o.useRef(null),
                  e = (0, l.Y)(t, {
                     amount: "some",
                     margin: "0% 0% -60% 0%"
                  });
               return (0, s.jsxs)(y.$K, {
                  $rgb: "40, 87, 255",
                  className: (0, C.Z)({
                     visible: e
                  }),
                  style: {
                     zIndex: 8
                  },
                  children: [(0, s.jsx)(y.vT, {
                     style: (0, r.Z)({}, "--bottom", "#303a75")
                  }), (0, s.jsxs)(y.zP, {
                     id: "cycles",
                     ref: t,
                     children: [(0, s.jsxs)(y.wo, {
                        as: "h2",
                        margin: "0 0 16px 0",
                        align: "center",
                        gradient: "radial-gradient(ellipse 40% 70% at 50% 100%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))",
                        children: ["Gain traction", (0, s.jsx)("br", {}), " with Phases"]
                     }), (0, s.jsxs)(y.Q0, {
                        style: {
                           width: 1084,
                           aspectRatio: "1084 / 515",
                           padding: "0 24px"
                        },
                        children: [(0, s.jsx)(y.VA, {}), (0, s.jsx)(U.Ee, {
                           src: P,
                           alt: "The cycles interface in Linear. One cycle is completed with a 29% success rate, one cycle is ongoing with 115 points of scope, 44 points started, 18 points completed, and one cycle is upcoming with 3% of available capacity."
                        })]
                     })]
                  }), (0, s.jsx)(E.r, {
                     children: (0, s.jsx)(E.M, {
                        children: (0, s.jsx)(y.Rn, {
                           as: "h3",
                           align: "center",
                           style: {
                              maxWidth: 700
                           },
                           margin: "32px 0 0 0",
                           children: "Phases center your team on upcoming needs and insights. A robust rhythm to sustain momentum and achieve significant strides."
                        })
                     })
                  }), (0, s.jsx)(y.JU, {}), (0, s.jsx)(E.r, {
                     children: (0, s.jsxs)(y.AN, {
                        children: [(0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(H, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Auto-monitoring."
                              }), " Initiated needs and insights are integrated into the present phase."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(V, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Planned."
                              }), " Incomplete tasks transition to the subsequent phase by default."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(I, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Highly customizable."
                              }), " Define start date, end date, duration, and more."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(z.z, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Forecast setbacks."
                              }), " Obtain notifications for potential lags."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(M, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Drift detection."
                              }), " Identify tasks introduced during the phase."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(W.Q, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Stay ahead."
                              }), " Plan tasks early with forthcoming phases."]
                           })]
                        })]
                     })
                  })]
               })
            },
            _ = n(15041),
            B = n(61727),
            D = n(76514),
            F = n(35004),
            R = n(73582),
            G = n(82260),
            K = n(12907),
            Q = n(62164),
            N = n(413),
            T = n(24245),
            Y = n(7517),
            X = n(67128),
            J = n(82566);

         function q() {
            var t = (0, i.Z)(["\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]);
            return q = function () {
               return t
            }, t
         }
         var $ = (0, u.ZP)("div").withConfig({
               componentId: "sc-2b06b6db-0"
            })(q(), (function (t) {
               return t.hollow ? "border: solid 1px ".concat(t.color ? t.color : t.theme.color.labelMuted) : "background: ".concat(t.color ? t.color : t.theme.color.labelMuted)
            }), (function (t) {
               return "tiny" === t.size && "\n    width: 7px;\n    height: 7px;\n  "
            }), (function (t) {
               return "small" === t.size && "\n    width: 9px;\n    height: 9px;\n  "
            })),
            tt = n(41714),
            et = n(75883),
            nt = n(19570),
            rt = n(91530),
            at = n.n(rt),
            it = n(76403),
            st = n(75837),
            ot = n(65124),
            ct = n(83881),
            lt = n.n(ct),
            ht = n(9972),
            dt = n(63054),
            ut = n(47752),
            pt = n(11797),
            ft = n(65684),
            xt = n(72185),
            gt = n(98402),
            mt = n(39278),
            jt = n(92158),
            yt = n(24845),
            kt = n(15266);

         function vt(t) {
            var e = (0, u.Fg)();
            return (0, s.jsx)("svg", {
               width: "16",
               height: "16",
               viewBox: "0 0 16 16",
               fill: e.color.labelMuted,
               className: t.className,
               children: (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M3.44964 2.7921C3.60721 2.03925 4.27101 1.5 5.04016 1.5H11.7143C11.9211 1.5 12.1172 1.5919 12.2495 1.75081C12.3818 1.90973 12.4367 2.11923 12.3992 2.32259L10.7742 11.144C10.7052 11.5188 10.3481 11.7678 9.97357 11.7046C9.93569 11.711 9.89676 11.7143 9.85706 11.7143H3.58927C3.20464 11.7143 2.89284 12.0261 2.89284 12.4107C2.89284 12.7953 3.20464 13.1071 3.58927 13.1071H10.4096C10.9668 13.1071 11.4455 12.7111 11.5498 12.1636L13.1193 3.92327C13.1913 3.54544 13.5559 3.29749 13.9338 3.36945C14.3116 3.44142 14.5595 3.80606 14.4876 4.18389L12.918 12.4242C12.6886 13.6286 11.6356 14.5 10.4096 14.5H3.58927C2.4354 14.5 1.5 13.5646 1.5 12.4107C1.5 12.3611 1.50173 12.312 1.50512 12.2633C1.49608 12.1894 1.49881 12.1128 1.51491 12.0359L3.44964 2.7921ZM5.54811 3.35714C5.34826 3.35714 5.17084 3.48502 5.10765 3.67461L4.95289 4.13889C4.85268 4.43953 5.07645 4.75 5.39334 4.75H9.05737C9.25721 4.75 9.43463 4.62212 9.49782 4.43253L9.65258 3.96825C9.75279 3.66761 9.52902 3.35714 9.21213 3.35714H5.54811Z"
               })
            })
         }
         var wt = n(91177),
            bt = n(58056),
            At = n(57090);

         function Ct(t) {
            var e = (0, u.Fg)();
            return (0, s.jsx)("svg", {
               width: "16",
               height: "16",
               viewBox: "0 0 16 16",
               fill: e.color.labelMuted,
               className: t.className,
               children: (0, s.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M6.75 1V6.75C6.75 7.5297 7.34489 8.17045 8.10554 8.24313L8.25 8.25H14V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V3C2 1.89543 2.89543 1 4 1H6.75ZM8 1L14 7.03022H9C8.44772 7.03022 8 6.5825 8 6.03022V1Z"
               })
            })
         }
         var zt = n(35714),
            Mt = n(48008),
            Zt = n(34182),
            Ot = n(30542),
            Lt = n(76815),
            Vt = new Lt.WK({
               name: "Navigation"
            }),
            It = new Lt.WK({
               name: "Blog"
            }),
            Ht = new Lt.WK({
               name: "App"
            }),
            Wt = new Lt.WK({
               name: "Help"
            }),
            Ut = new Lt.WK({
               name: "Social"
            }),
            Et = new Lt.WK({
               name: "Hidden"
            }),
            Pt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Home",
               shortcuts: [{
                  key: ["g", "h"]
               }],
               keywords: "open home",
               group: Vt,
               applicable: function () {
                  return "/" !== lt().asPath
               },
               execute: function () {
                  lt().push("/")
               },
               metadata: {
                  icon: (0, s.jsx)(ft.t, {})
               }
            }),
            St = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Features",
               shortcuts: [{
                  key: ["g", "m"]
               }],
               keywords: "open feature why",
               group: Vt,
               applicable: function () {
                  return "/features" !== lt().asPath
               },
               execute: function () {
                  lt().push("/features")
               },
               metadata: {
                  icon: (0, s.jsx)(gt.D, {})
               }
            }),
            _t = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Linear Method",
               shortcuts: [{
                  key: ["g", "m"]
               }],
               keywords: "open principles manifesto",
               group: Vt,
               applicable: function () {
                  return "/method" !== lt().asPath
               },
               execute: function () {
                  lt().push("/method")
               },
               metadata: {
                  icon: (0, s.jsx)(vt, {})
               }
            }),
            Bt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Changelog",
               keywords: "open changes",
               shortcuts: [{
                  key: ["g", "c"]
               }],
               group: Vt,
               applicable: function () {
                  return "/changelog" !== lt().asPath
               },
               execute: function () {
                  lt().push("/changelog")
               },
               metadata: {
                  icon: (0, s.jsx)(Ct, {})
               }
            }),
            Dt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Customers",
               keywords: "open testimonial stories",
               group: Vt,
               applicable: function () {
                  return "/customers" !== lt().asPath
               },
               execute: function () {
                  lt().push("/customers")
               },
               metadata: {
                  icon: (0, s.jsx)(kt.w, {})
               }
            }),
            Ft = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to About",
               keywords: "open team about",
               shortcuts: [{
                  key: ["g", "a"]
               }],
               group: Vt,
               applicable: function () {
                  return "/about" !== lt().asPath
               },
               execute: function () {
                  lt().push("/about")
               },
               metadata: {
                  icon: (0, s.jsx)(mt.y, {})
               }
            }),
            Rt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Pricing",
               keywords: "open cost plan subscription team billing stripe money",
               shortcuts: [{
                  key: ["g", "p"]
               }],
               group: Vt,
               applicable: function () {
                  return "/pricing" !== lt().asPath
               },
               execute: function () {
                  lt().push("/pricing")
               },
               metadata: {
                  icon: (0, s.jsx)(ut.c, {})
               }
            }),
            Gt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Blog",
               keywords: "open post essay news announcements",
               shortcuts: [{
                  key: ["g", "b"]
               }],
               group: Vt,
               applicable: function () {
                  return "/blog" !== lt().asPath
               },
               execute: function () {
                  lt().push("/blog")
               },
               metadata: {
                  icon: (0, s.jsx)(At.Y, {})
               }
            }),
            Kt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Careers",
               keywords: "open apply jobs opening hiring",
               group: Vt,
               applicable: function () {
                  return "/careers" !== lt().asPath
               },
               execute: function () {
                  lt().push("/careers")
               },
               metadata: {
                  icon: (0, s.jsx)(wt.V, {})
               }
            }),
            Qt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Readme",
               keywords: "open hiring",
               group: Vt,
               applicable: function () {
                  return "/readme" !== lt().asPath
               },
               execute: function () {
                  lt().push("/readme")
               },
               metadata: {
                  icon: (0, s.jsx)(jt.T, {})
               }
            }),
            Nt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Download",
               keywords: "open app desktop macos windows linux ios",
               shortcuts: [{
                  key: ["g", "d"]
               }],
               group: Vt,
               applicable: function () {
                  return "/download" !== lt().asPath
               },
               execute: function () {
                  lt().push("/download")
               },
               metadata: {
                  icon: (0, s.jsx)(pt._, {})
               }
            }),
            Tt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Documentation",
               keywords: "open docs help tutorial guide",
               group: Vt,
               applicable: function () {
                  return "/docs" !== lt().asPath
               },
               execute: function () {
                  lt().push("/docs")
               },
               metadata: {
                  icon: (0, s.jsx)(vt, {})
               }
            }),
            Yt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Open Linear status",
               keywords: "open",
               group: Vt,
               execute: function () {
                  window.open("https://linearstatus.com", "_blank")
               },
               metadata: {
                  icon: (0, s.jsx)(z.z, {})
               }
            }),
            Xt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Go to Brand",
               keywords: "open assets logo wordmark design",
               group: Vt,
               applicable: function () {
                  return "/brand" !== lt().asPath
               },
               execute: function () {
                  lt().push("/brand")
               },
               metadata: {
                  icon: (0, s.jsx)(bt.s, {})
               }
            }),
            Jt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Linear on Twitter",
               keywords: "open social tweet tweets share changelog",
               group: Ut,
               execute: function () {
                  window.open("https://twitter.com/linear", "_blank")
               },
               metadata: {
                  icon: (0, s.jsx)(yt.Z, {})
               }
            }),
            qt = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Linear on GitHub",
               keywords: "open social source code api developer",
               group: Ut,
               execute: function () {
                  window.open("https://github.com/linear", "_blank")
               },
               metadata: {
                  icon: (0, s.jsx)(zt.f, {})
               }
            }),
            $t = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Linear on LinkedIn",
               keywords: "open social hiring careers",
               group: Ut,
               execute: function () {
                  window.open("https://github.com/linear", "_blank")
               },
               metadata: {
                  icon: (0, s.jsx)(Mt.n, {})
               }
            }),
            te = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Login to Linear",
               keywords: "auth",
               group: Ht,
               applicable: function () {
                  try {
                     return !Ot.K.local.get("userSettings")
                  } catch (t) {
                     return !1
                  }
               },
               execute: function () {
                  window.open("/login")
               },
               metadata: {
                  icon: (0, s.jsx)(D.j, {})
               }
            }),
            ee = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Sign up to Linear",
               keywords: "auth register",
               group: Ht,
               applicable: function () {
                  try {
                     return !Ot.K.local.get("userSettings")
                  } catch (t) {
                     return !1
                  }
               },
               execute: function () {
                  window.open("/signup")
               },
               metadata: {
                  icon: (0, s.jsx)(D.j, {})
               }
            }),
            ne = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Return to Linear",
               keywords: "auth register app",
               group: Ht,
               applicable: function () {
                  try {
                     return !!Ot.K.local.get("userSettings")
                  } catch (t) {
                     return !1
                  }
               },
               execute: function () {
                  window.open("/login")
               },
               metadata: {
                  icon: (0, s.jsx)(xt.r, {})
               }
            }),
            re = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Open API Documentation",
               keywords: "sdk help code",
               group: Wt,
               execute: function () {
                  window.open("https://developers.linear.app", "_blank")
               },
               metadata: {
                  icon: (0, s.jsx)(ht.M, {})
               }
            }),
            ae = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Join Slack community",
               keywords: "help",
               group: Wt,
               execute: function () {
                  window.open("https://linear.app/join-slack", "_blank")
               },
               metadata: {
                  icon: (0, s.jsx)(Zt.m, {})
               }
            }),
            ie = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Copy current URL",
               keywords: "path",
               group: Wt,
               execute: function () {
                  try {
                     navigator.clipboard.writeText(window.location.href)
                  } catch (t) {}
               },
               metadata: {
                  icon: (0, s.jsx)(dt.O, {})
               }
            }),
            se = new Lt.aU({
               id: Lt.PQ.generateId(),
               name: "Share blog post on Twitter",
               keywords: "",
               group: It,
               applicable: function () {
                  return lt().pathname.startsWith("/blog/[")
               },
               execute: function () {
                  window.open("https://twitter.com/intent/tweet?text=".concat(window.location.href), "_blank")
               }
            });
         (0, ot.Z)([Pt, St, _t, Bt, Ft, Rt, Gt, Nt, Tt, Dt, Kt, Qt, Xt, Yt]).concat((0, ot.Z)([te, ee, ne]), (0, ot.Z)([Jt, qt, $t]), (0, ot.Z)([re, ae, ie]), (0, ot.Z)([se]));
         var oe = n(43910),
            ce = n(2126),
            le = n(23335);

         function he() {
            var t = (0, i.Z)(["\n  from { opacity: 0; }\n  to { opacity: 1; }"]);
            return he = function () {
               return t
            }, t
         }

         function de() {
            var t = (0, i.Z)(["\n  from { opacity: 1; }\n  to { opacity: 0;}"]);
            return de = function () {
               return t
            }, t
         }

         function ue() {
            var t = (0, i.Z)(["\n  from { opacity: 0; transform: scale(0.95); }\n  to { opacity: 1; transform: none; }"]);
            return ue = function () {
               return t
            }, t
         }

         function pe() {
            var t = (0, i.Z)(["\n  from { opacity: 1; transform: none; }\n  to { opacity: 0; transform: scale(0.95); }"]);
            return pe = function () {
               return t
            }, t
         }

         function fe() {
            var t = (0, i.Z)(['\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.4);\n  z-index: var(--layer-command-menu);\n\n  &[data-state="open"] {\n    animation: ', ' 200ms forwards;\n  }\n\n  &[data-state="closed"] {\n    animation: ', " 200ms forwards;\n  }\n"]);
            return fe = function () {
               return t
            }, t
         }

         function xe() {
            var t = (0, i.Z)(["\n  outline: none;\n  box-shadow: none;\n  position: fixed;\n  top: ", ';\n  left: 50%;\n  transform: translate(-50%);\n  z-index: var(--layer-command-menu);\n\n  &[data-state="closed"] {\n    animation: ', " 200ms both;\n  }\n"]);
            return xe = function () {
               return t
            }, t
         }

         function ge() {
            var t = (0, i.Z)(["\n  50% {\n    transform: scale(0.98);\n  }\n"]);
            return ge = function () {
               return t
            }, t
         }

         function me() {
            var t = (0, i.Z)(["\n  --transition-duration: 100ms;\n  --input-height: 62px;\n\n  width: 90vw;\n  max-width: 640px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: ", ";\n  background: ", ';\n\n  [data-state="open"] & {\n    animation: ', ' 200ms both;\n  }\n\n  [data-state="closed"] & {\n    animation: ', " 200ms both;\n  }\n\n  &.bounce {\n    animation: ", " 240ms;\n  }\n"]);
            return me = function () {
               return t
            }, t
         }

         function je() {
            var t = (0, i.Z)(["\n  user-select: none;\n  height: 46px;\n  background-color: transparent;\n  color: ", ";\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  flex-basis: 100%;\n  flex-grow: 0;\n  cursor: pointer;\n  margin: 0;\n  padding: 0 20px;\n  font-size: 14px;\n\n  &:hover {\n    background: ", ';\n  }\n\n  &[aria-selected="true"] {\n    color: ', ";\n    background: ", ";\n  }\n"]);
            return je = function () {
               return t
            }, t
         }

         function ye() {
            var t = (0, i.Z)(["\n  width: 16px;\n  margin-right: 12px;\n  display: flex;\n\n  & svg {\n    width: 16px;\n    height: 16px;\n    fill: ", ";\n  }\n\n  ", '[aria-selected="true"] & svg {\n    fill: ', ";\n  }\n"]);
            return ye = function () {
               return t
            }, t
         }

         function ke() {
            var t = (0, i.Z)([""]);
            return ke = function () {
               return t
            }, t
         }

         function ve() {
            var t = (0, i.Z)(["\n  margin: 0 8px;\n\n  ais-highlight-0000000000 {\n    color: ", ";\n    text-decoration: currentColor dotted underline;\n    text-underline-offset: 2px;\n  }\n"]);
            return ve = function () {
               return t
            }, t
         }

         function we() {
            var t = (0, i.Z)(["\n  margin-left: auto;\n"]);
            return we = function () {
               return t
            }, t
         }

         function be() {
            var t = (0, i.Z)(["\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n  overflow-y: auto;\n\n  &:not(:empty) {\n    box-shadow: 0 -1px 0 0 ", ";\n  }\n"]);
            return be = function () {
               return t
            }, t
         }

         function Ae() {
            var t = (0, i.Z)(["\n  appearance: none;\n  border: none;\n  background: none;\n  margin: 0;\n  width: 100%;\n  padding: 20px;\n  height: var(--input-height);\n  font: inherit;\n  caret-color: ", ";\n\n  && {\n    outline: none;\n    box-shadow: none;\n  }\n\n  &::placeholder {\n    color: transparent;\n  }\n"]);
            return Ae = function () {
               return t
            }, t
         }

         function Ce() {
            var t = (0, i.Z)(["\n  position: relative;\n  font-size: 18px;\n"]);
            return Ce = function () {
               return t
            }, t
         }

         function ze() {
            var t = (0, i.Z)(["\n  pointer-events: none;\n  user-select: none;\n  position: absolute;\n  top: 0;\n  left: 20px;\n  height: var(--input-height);\n  display: flex;\n  align-items: center;\n  font: inherit;\n  color: ", ";\n  opacity: 0;\n  transform: translateX(20px);\n\n  transition: 160ms;\n  transition-property: opacity, transform;\n\n  ", ":placeholder-shown ~ & {\n    opacity: 1;\n    transform: none;\n  }\n"]);
            return ze = function () {
               return t
            }, t
         }

         function Me() {
            var t = (0, i.Z)(["\n  color: ", ";\n  height: 24px;\n  width: 100%;\n  font-size: 12px;\n  padding: 0 20px;\n\n  display: flex;\n  align-items: center;\n"]);
            return Me = function () {
               return t
            }, t
         }

         function Ze() {
            var t = (0, i.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  max-height: min(400px, calc(var(--height, 9999px) + var(--input-height)));\n\n  transition: 80ms;\n  transition-property: max-height;\n"]);
            return Ze = function () {
               return t
            }, t
         }
         var Oe = "web-menu-label",
            Le = "web-menu-input",
            Ve = "web-menu-list",
            Ie = "Type a command or search…",
            He = {
               search: "",
               open: !1,
               selected: 0,
               parentAction: void 0
            };

         function We(t, e) {
            switch (e.type) {
               case "open":
                  return (0, O.Z)((0, Z.Z)({}, t), {
                     open: !0
                  });
               case "close":
                  return (0, O.Z)((0, Z.Z)({}, t), {
                     open: !1
                  });
               case "toggle":
                  return (0, O.Z)((0, Z.Z)({}, t), {
                     open: !t.open
                  });
               case "rerender":
                  return (0, Z.Z)({}, t);
               case "update":
                  return (0, Z.Z)({}, t, e.state);
               case "reset":
                  return (0, Z.Z)({}, He);
               default:
                  throw new it.SL(e)
            }
         }
         var Ue = o.createContext([He, at()]),
            Ee = function (t) {
               t.dialog;
               var e, n, r, i, c = t.children,
                  l = t.disabled,
                  h = (0, L.Z)(t, ["dialog", "children", "disabled"]),
                  u = (0, a.Z)(o.useContext(Ue), 2),
                  p = u[0],
                  f = u[1],
                  x = o.useRef(null),
                  g = o.useRef(null),
                  m = o.useRef(null),
                  j = o.useRef(null),
                  y = o.useRef(null),
                  k = (0, Lt.pJ)();
               (0, Lt.Bq)(k.context, {
                  search: p.search,
                  parentAction: p.parentAction
               }), o.useEffect((function () {
                  return k.subscribe((function () {
                     return f({
                        type: "rerender"
                     })
                  }))
               }), []);
               var v = k.applicableActions(k.allActions, (function (t) {
                     var e, n, r;
                     return p.parentAction && !(null === (e = t.metadata) || void 0 === e ? void 0 : e.parent) || (null === (n = t.metadata) || void 0 === n ? void 0 : n.parent) && t.metadata.parent !== p.parentAction || (null === (r = t.metadata) || void 0 === r ? void 0 : r.hidden) ? 0 : st.W.score(k.helpers.actionScoreString(t), p.search)
                  })),
                  w = k.applicableGroupedActions(v),
                  b = o.useMemo((function () {
                     return Array.from(w.values()).reduce((function (t, e) {
                        return t.concat(e)
                     }), [])
                  }), [w]);
               ! function (t) {
                  var e = o.useRef(0),
                     n = o.useRef(0),
                     r = function (t) {
                        e.current = Math.max(e.current, t.touches.length), 0 === n.current && (n.current = Date.now())
                     },
                     a = function (r) {
                        2 === e.current && 0 === r.touches.length && Date.now() < n.current + 300 && (r.preventDefault(), t()), 0 === r.touches.length && (n.current = 0, e.current = 0)
                     },
                     i = function (t) {
                        t.scale && 1 !== t.scale && (n.current = 0)
                     },
                     s = function (t) {
                        n.current = 0, e.current = 0
                     };
                  o.useEffect((function () {
                     return window.addEventListener("touchstart", r), window.addEventListener("touchend", a), window.addEventListener("touchmove", i), window.addEventListener("touchcancel", s),
                        function () {
                           window.removeEventListener("touchstart", r), window.removeEventListener("touchend", a), window.removeEventListener("touchmove", i), window.removeEventListener("touchcancel", s)
                        }
                  }), [])
               }((function () {
                  return f({
                     type: "open"
                  })
               }));
               var A = o.useMemo((function () {
                     return new Lt.aU({
                        id: Lt.PQ.generateId(),
                        name: "Toggle Command Menu",
                        group: Et,
                        shortcuts: [{
                           key: "k",
                           metaKey: !0
                        }],
                        execute: function () {
                           return f({
                              type: "toggle"
                           })
                        },
                        metadata: {
                           hidden: !0
                        }
                     })
                  }), []),
                  C = function (t) {
                     var e = k.helpers.execute(t);
                     e ? (k.register(e), f({
                        type: "update",
                        state: {
                           parentAction: t,
                           search: "",
                           selected: 0
                        }
                     })) : f({
                        type: "close"
                     })
                  },
                  z = (e = (0, tt.Z)((function (t) {
                     var e, n;

                     function r() {
                        t.preventDefault(), e = t.metaKey ? b.length - 1 : p.selected + 1
                     }

                     function a() {
                        t.preventDefault(), e = t.metaKey ? 0 : p.selected - 1
                     }
                     return (0, et.__generator)(this, (function (i) {
                        if (!open) return [2];
                        if ("Backspace" === t.key && p.parentAction && !p.search) return f({
                           type: "update",
                           state: {
                              parentAction: void 0,
                              selected: 0
                           }
                        }), [2];
                        switch (e = p.selected, t.key) {
                           case "j":
                           case "n":
                              t.ctrlKey && r();
                              break;
                           case "ArrowDown":
                              r();
                              break;
                           case "k":
                           case "p":
                              t.ctrlKey && a();
                              break;
                           case "ArrowUp":
                              a();
                              break;
                           case "Tab":
                              if (p.selected === b.length - 1) return [2];
                              t.stopPropagation(), t.shiftKey ? a() : r();
                              break;
                           case "Home":
                              t.preventDefault(), e = 0;
                              break;
                           case "End":
                              t.preventDefault(), e = b.length - 1;
                              break;
                           case "Enter":
                              if (t.preventDefault(), !(n = b[p.selected])) break;
                              return C(n), [2]
                        }
                        return void 0 !== e && f({
                           type: "update",
                           state: {
                              selected: Math.max(0, Math.min(e, b.length - 1))
                           }
                        }), [2]
                     }))
                  })), function (t) {
                     return e.apply(this, arguments)
                  });
               o.useEffect((function () {
                  var t = g.current;
                  if (t) {
                     var e = t,
                        n = t.closest('[role="group"]');
                     (null == n ? void 0 : n.firstElementChild) === t && (null == (e = n.previousElementSibling) || e.scrollIntoView({
                        block: "nearest",
                        inline: "nearest"
                     })), t.scrollIntoView({
                        block: "nearest",
                        inline: "nearest"
                     })
                  }
               }), [p.selected]), o.useEffect((function () {
                  if (!p.open) {
                     var t = setTimeout((function () {
                        f({
                           type: "update",
                           state: He
                        })
                     }), 400);
                     return function () {
                        return clearTimeout(t)
                     }
                  }
               }), [p.open]), (0, ce.L)((function () {
                  var t, e, n;
                  null === (t = m.current) || void 0 === t || t.style.setProperty("--height", (null !== (n = null === (e = j.current) || void 0 === e ? void 0 : e.scrollHeight) && void 0 !== n ? n : 0) + "px")
               }), [b]), (0, ce.L)((function () {
                  x.current && (x.current.classList.remove("bounce"), x.current.offsetWidth, x.current.classList.add("bounce"))
               }), [p.parentAction]);
               var M = (null === (r = p.parentAction) || void 0 === r || null === (i = r.metadata) || void 0 === i ? void 0 : i.placeholder) || Ie,
                  V = (0, s.jsx)(Ge, {
                     ref: x,
                     children: (0, s.jsxs)(en, (0, O.Z)((0, Z.Z)({}, h), {
                        ref: m,
                        role: "combobox",
                        "aria-expanded": !0,
                        "aria-haspopup": "listbox",
                        "aria-labelledby": Oe,
                        "aria-owns": Ve,
                        onKeyDown: z,
                        children: [c, (0, s.jsxs)(qe, {
                           noValidate: !0,
                           role: "search",
                           onSubmit: function (t) {
                              return t.preventDefault()
                           },
                           children: [(0, s.jsx)(d.Z, {
                              as: "label",
                              id: Oe,
                              htmlFor: Le,
                              children: Ie
                           }), (0, s.jsx)(Je, {
                              ref: y,
                              type: "text",
                              "aria-autocomplete": "both",
                              "aria-labelledby": Oe,
                              id: Le,
                              autoComplete: "off",
                              autoCorrect: "off",
                              autoCapitalize: "off",
                              enterKeyHint: "go",
                              spellCheck: !1,
                              placeholder: M,
                              maxLength: 512,
                              value: p.search,
                              disabled: l,
                              onChange: function (t) {
                                 f({
                                    type: "update",
                                    state: {
                                       selected: 0,
                                       search: t.target.value
                                    }
                                 })
                              }
                           }), (0, s.jsx)($e, {
                              "aria-hidden": !0,
                              children: M
                           })]
                        }), (0, s.jsx)(Xe, {
                           ref: j,
                           role: "listbox",
                           "aria-labelledby": Oe,
                           id: Ve,
                           children: (n = 0, (0, s.jsx)(s.Fragment, {
                              children: Array.from(w.entries()).map((function (t) {
                                 var e = (0, a.Z)(t, 2),
                                    r = e[0],
                                    i = e[1],
                                    o = k.helpers.resolve(r.name),
                                    c = "group-".concat(o);
                                 return (0, s.jsxs)("div", {
                                    role: "presentation",
                                    children: [(0, s.jsx)(tn, {
                                       "aria-hidden": !0,
                                       id: c,
                                       children: o
                                    }), (0, s.jsx)("div", {
                                       role: "group",
                                       "aria-labelledby": c,
                                       children: i.map((function (t) {
                                          var e, r, a, i, o = n++,
                                             c = p.selected === o,
                                             l = k.helpers.resolve(t.shortcuts) || [],
                                             h = null !== (a = k.helpers.resolve(null === (e = t.metadata) || void 0 === e ? void 0 : e.detail)) && void 0 !== a ? a : null;
                                          return (0, s.jsxs)(Ke, {
                                             ref: c ? g : void 0,
                                             role: "option",
                                             "aria-selected": c,
                                             onClick: function () {
                                                return C(t)
                                             },
                                             children: [(0, s.jsx)(Qe, {
                                                children: null !== (i = k.helpers.resolve(null === (r = t.metadata) || void 0 === r ? void 0 : r.icon)) && void 0 !== i ? i : null
                                             }), (0, s.jsx)(Ne, {
                                                children: k.helpers.resolve(t.name)
                                             }), h && (0, s.jsx)(Te, {
                                                children: h
                                             }), l.length > 0 ? (0, s.jsx)(Ye, {
                                                children: l.map((function (t) {
                                                   return (Array.isArray(t.key) ? t.key : [t.key]).map((function (e) {
                                                      return (0, s.jsx)(oe.W, {
                                                         meta: t.metaKey,
                                                         alt: t.altKey,
                                                         shift: t.shiftKey,
                                                         children: e
                                                      })
                                                   }))
                                                }))
                                             }) : null]
                                          }, t.id)
                                       }))
                                    })]
                                 }, o)
                              }))
                           }))
                        })]
                     }))
                  });
               return !1 === t.dialog ? V : (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(Lt._0, {
                     action: A
                  }), (0, s.jsx)(nt.fC, {
                     open: p.open,
                     onOpenChange: function (t) {
                        return f({
                           type: "update",
                           state: {
                              open: t
                           }
                        })
                     },
                     children: (0, s.jsxs)(nt.h_, {
                        children: [(0, s.jsx)(De, {}), (0, s.jsx)(Fe, {
                           children: V
                        })]
                     })
                  })]
               })
            },
            Pe = (0, u.F4)(he()),
            Se = (0, u.F4)(de()),
            _e = (0, u.F4)(ue()),
            Be = (0, u.F4)(pe()),
            De = (0, u.ZP)(nt.aV).withConfig({
               componentId: "sc-68013836-0"
            })(fe(), Pe, Se),
            Fe = (0, u.ZP)(nt.VY).withConfig({
               componentId: "sc-68013836-1"
            })(xe(), (0, p.EO)(), (0, le.U6)()),
            Re = (0, u.F4)(ge()),
            Ge = u.ZP.div.withConfig({
               componentId: "sc-68013836-2"
            })(me(), (function (t) {
               return t.theme.shadowHigh
            }), (function (t) {
               return t.theme.color.bgBase
            }), _e, Be, Re),
            Ke = u.ZP.li.withConfig({
               componentId: "sc-68013836-3"
            })(je(), (function (t) {
               return t.theme.color.labelTitle
            }), (function (t) {
               return t.theme.color.bgShade
            }), (function (t) {
               return t.theme.color.labelTitle
            }), (function (t) {
               return t.theme.color.bgBaseHover
            })),
            Qe = u.ZP.div.withConfig({
               componentId: "sc-68013836-4"
            })(ye(), (function (t) {
               return t.theme.color.labelMuted
            }), Ke, (function (t) {
               return t.theme.color.labelTitle
            })),
            Ne = (0, u.ZP)(j.x).withConfig({
               componentId: "sc-68013836-5"
            })(ke()),
            Te = (0, u.ZP)(j.x).attrs({
               truncate: !0,
               color: "labelMuted",
               kind: "bodyMini",
               fontSize: 13
            }).withConfig({
               componentId: "sc-68013836-6"
            })(ve(), (function (t) {
               return t.theme.color.labelBase
            })),
            Ye = (0, u.ZP)(oe.V).withConfig({
               componentId: "sc-68013836-7"
            })(we()),
            Xe = u.ZP.ul.withConfig({
               componentId: "sc-68013836-8"
            })(be(), (function (t) {
               return t.theme.color.bgBorder
            })),
            Je = u.ZP.input.withConfig({
               componentId: "sc-68013836-9"
            })(Ae(), (function (t) {
               return t.theme.color.controlBaseHighlight
            })),
            qe = u.ZP.form.withConfig({
               componentId: "sc-68013836-10"
            })(Ce()),
            $e = u.ZP.div.withConfig({
               componentId: "sc-68013836-11"
            })(ze(), (function (t) {
               return t.theme.color.labelMuted
            }), Je),
            tn = u.ZP.div.withConfig({
               componentId: "sc-68013836-12"
            })(Me(), (function (t) {
               return t.theme.color.labelMuted
            })),
            en = u.ZP.div.withConfig({
               componentId: "sc-68013836-13"
            })(Ze());

         function nn() {
            var t = (0, i.Z)(["\n  50% {\n    visibility: hidden;\n  }\n"]);
            return nn = function () {
               return t
            }, t
         }

         function rn() {
            var t = (0, i.Z)([""]);
            return rn = function () {
               return t
            }, t
         }

         function an() {
            var t = (0, i.Z)(["\n  align-self: flex-start;\n  border-radius: 4px;\n  padding: 0 8px;\n  margin: 8px 8px 0 16px;\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.05);\n"]);
            return an = function () {
               return t
            }, t
         }

         function sn() {
            var t = (0, i.Z)(["\n  width: 2px;\n  height: 24px;\n  background: ", ";\n  border-radius: 2px;\n  left: 20px;\n  top: 52px;\n  animation: ", " 1s steps(1) 0s infinite;\n\n  ", ":focus-within & {\n    display: none;\n  }\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"]);
            return sn = function () {
               return t
            }, t
         }

         function on() {
            var t = (0, i.Z)(["\n  && {\n    grid-column: 3 / -1;\n    justify-content: flex-start;\n  }\n\n  & ", ' {\n    outline: none;\n    box-shadow: none;\n    position: absolute;\n    left: 50%;\n    opacity: 0.6;\n    transform: translate(-50%, 128px);\n    transition: 240ms;\n    transition-property: opacity, transform;\n\n    ~ * {\n      transition: opacity 120ms;\n    }\n\n    :focus,\n    :focus-within {\n      opacity: 1;\n      transform: translate(-50%, 24px);\n\n      ~ * {\n        opacity: 0;\n      }\n    }\n\n    div[role="combobox"] {\n      max-height: min(400px, calc(var(--height, 9999px) + 96px));\n    }\n\n    > div {\n      border: 1px solid rgba(255, 255, 255, 0.1);\n      background: rgba(255, 255, 255, 0.1);\n    }\n\n    ul[role="listbox"] {\n      box-shadow: 0 -1px 0 0 rgba(255, 255, 255, 0.1);\n    }\n\n    div[role="presentation"] > div:first-child {\n      display: none;\n    }\n\n    li[role="option"] {\n      background: rgba(255, 255, 255, 0);\n\n      :hover {\n        background: rgba(255, 255, 255, 0.05);\n      }\n    }\n\n    li[role="option"][aria-selected="true"] {\n      background: rgba(255, 255, 255, 0.15);\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: 32px 24px;\n\n    & ', " {\n      width: 80%;\n      top: 64px;\n    }\n  }\n"]);
            return on = function () {
               return t
            }, t
         }
         var cn = new Lt.WK({
               name: "Issue actions"
            }),
            ln = new Lt.WK({
               name: "People"
            }),
            hn = new Lt.WK({
               name: "Issue status"
            }),
            dn = new Lt.WK({
               name: "Issue status"
            }),
            un = new Lt.WK({
               name: "Issue labels"
            }),
            pn = new Lt.fW({}),
            fn = function () {
               var t = o.useReducer(We, He),
                  e = (0, a.Z)(t, 2)[1],
                  n = (0, _.Z)("(max-width: 768px)", !1);

               function r() {
                  var t;
                  e({
                     type: "reset"
                  }), null === (t = document.activeElement) || void 0 === t || t.blur()
               }
               var i = o.useMemo((function () {
                  var t = new Lt.aU({
                        id: Lt.PQ.generateId(),
                        group: cn,
                        name: "Assign to…",
                        children: function () {
                           return [new Lt.aU({
                              id: "assign-to-jori",
                              group: ln,
                              name: "Jori",
                              metadata: {
                                 icon: (0, s.jsx)(D.j, {}),
                                 parent: t
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "assign-to-karri",
                              group: ln,
                              name: "Karri",
                              metadata: {
                                 icon: (0, s.jsx)(D.j, {}),
                                 parent: t
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "assign-to-tuomas",
                              group: ln,
                              name: "Tuomas",
                              metadata: {
                                 icon: (0, s.jsx)(D.j, {}),
                                 parent: t
                              },
                              execute: r
                           })]
                        },
                        metadata: {
                           icon: (0, s.jsx)(B.m, {})
                        }
                     }),
                     e = new Lt.aU({
                        id: Lt.PQ.generateId(),
                        group: cn,
                        name: "Change status…",
                        children: function () {
                           return [new Lt.aU({
                              id: "status-backlog",
                              group: hn,
                              name: "Backlog",
                              metadata: {
                                 icon: (0, s.jsx)(F.M, {}),
                                 parent: e
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "status-todo",
                              group: hn,
                              name: "Todo",
                              metadata: {
                                 icon: (0, s.jsx)("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "currentColor",
                                    children: (0, s.jsx)("g", {
                                       opacity: "0.9",
                                       children: (0, s.jsx)("path", {
                                          "fill-rule": "evenodd",
                                          "clip-rule": "evenodd",
                                          d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z"
                                       })
                                    })
                                 }),
                                 parent: e
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "status-inprogress",
                              group: hn,
                              name: "In Progress",
                              metadata: {
                                 icon: (0, s.jsx)(J.J, {}),
                                 parent: e
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "status-done",
                              group: hn,
                              name: "Done",
                              metadata: {
                                 icon: (0, s.jsx)(X.H, {
                                    color: "currentColor"
                                 }),
                                 parent: e
                              },
                              execute: r
                           })]
                        },
                        metadata: {
                           icon: (0, s.jsx)(J.J, {})
                        }
                     }),
                     n = new Lt.aU({
                        id: Lt.PQ.generateId(),
                        group: cn,
                        name: "Change priority…",
                        children: function () {
                           return [new Lt.aU({
                              id: "priority-none",
                              group: dn,
                              name: "No priority",
                              metadata: {
                                 icon: (0, s.jsx)(G.z, {}),
                                 parent: n
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "priority-urgent",
                              group: dn,
                              name: "Urgent",
                              metadata: {
                                 icon: (0, s.jsx)(K.W, {}),
                                 parent: n
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "priority-high",
                              group: dn,
                              name: "High",
                              metadata: {
                                 icon: (0, s.jsx)(Q.K, {}),
                                 parent: n
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "priority-medium",
                              group: dn,
                              name: "Medium",
                              metadata: {
                                 icon: (0, s.jsx)(N.p, {}),
                                 parent: n
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "priority-low",
                              group: dn,
                              name: "Low",
                              metadata: {
                                 icon: (0, s.jsx)(T.Z, {}),
                                 parent: n
                              },
                              execute: r
                           })]
                        },
                        metadata: {
                           icon: (0, s.jsx)(Y.b, {})
                        }
                     }),
                     a = new Lt.aU({
                        id: Lt.PQ.generateId(),
                        group: cn,
                        name: "Add labels…",
                        children: function () {
                           return [new Lt.aU({
                              id: "label-bug",
                              group: un,
                              name: "Bug",
                              metadata: {
                                 icon: (0, s.jsx)($, {
                                    color: "#eb5757",
                                    size: "small"
                                 }),
                                 parent: a
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "label-feature",
                              group: un,
                              name: "Feature",
                              metadata: {
                                 icon: (0, s.jsx)($, {
                                    color: "#bb87fc",
                                    size: "small"
                                 }),
                                 parent: a
                              },
                              execute: r
                           }), new Lt.aU({
                              id: "label-improvement",
                              group: un,
                              name: "Improvement",
                              metadata: {
                                 icon: (0, s.jsx)($, {
                                    color: "#4da7fc",
                                    size: "small"
                                 }),
                                 parent: a
                              },
                              execute: r
                           })]
                        },
                        metadata: {
                           icon: (0, s.jsx)(R.v, {})
                        }
                     });
                  return [t, e, n, a]
               }), []);
               return (0, s.jsxs)(yn, {
                  children: [(0, s.jsx)(gn, {
                     tabIndex: n ? void 0 : 0,
                     onKeyDown: function (t) {
                        "Escape" === t.key && r()
                     },
                     children: (0, s.jsx)(Lt.WM, {
                        actions: i,
                        context: pn,
                        children: (0, s.jsx)(Ue.Provider, {
                           value: t,
                           children: (0, s.jsxs)(Ee, {
                              disabled: n,
                              dialog: !1,
                              children: [(0, s.jsx)(mn, {
                                 children: "LIN-111 Walkway lighting"
                              }), (0, s.jsx)(jn, {})]
                           })
                        })
                     })
                  }), (0, s.jsx)(y.Ar, {
                     as: "h3",
                     children: "Segment by use cases"
                  }), (0, s.jsx)(y.JM, {
                     as: "p",
                     children: "Categorize by specific scenarios or applications to better understand usage patterns and optimize performance."
                  })]
               })
            },
            xn = (0, u.F4)(nn()),
            gn = u.ZP.div.withConfig({
               componentId: "sc-7bed7831-0"
            })(rn()),
            mn = u.ZP.div.withConfig({
               componentId: "sc-7bed7831-1"
            })(an()),
            jn = (0, u.ZP)(y.u_).withConfig({
               componentId: "sc-7bed7831-2"
            })(sn(), (function (t) {
               return t.theme.color.labelMuted
            }), xn, gn),
            yn = (0, u.ZP)(y.Kn).withConfig({
               componentId: "sc-7bed7831-3"
            })(on(), gn, gn);

         function kn() {
            return (0, s.jsxs)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               width: "425",
               height: "518",
               fill: "none",
               children: [(0, s.jsxs)("g", {
                  strokeWidth: "18",
                  filter: "url(#filter0_f_1706_102550)",
                  opacity: "0.4",
                  children: [(0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M223.031 111.534a2.535 2.535 0 012.534-2.534h8.869a2.535 2.535 0 110 5.068h-8.869a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M201.492 405.481c0 1.4-1.134 2.535-2.534 2.535h-8.869a2.534 2.534 0 010-5.069h8.869c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M211.628 121.67a2.535 2.535 0 012.534-2.534h30.409a2.535 2.535 0 010 5.068h-30.409a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M212.895 395.345c0 1.4-1.134 2.534-2.534 2.534h-30.408a2.533 2.533 0 110-5.068h30.408c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M204.026 131.806a2.535 2.535 0 012.534-2.534h38.011a2.535 2.535 0 010 5.068H206.56a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M220.497 385.209c0 1.4-1.134 2.534-2.534 2.534h-38.01a2.533 2.533 0 110-5.068h38.01c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M196.424 141.942a2.535 2.535 0 012.534-2.534h45.613a2.535 2.535 0 010 5.068h-45.613a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M228.099 375.073c0 1.4-1.134 2.534-2.534 2.534h-45.612a2.533 2.533 0 110-5.068h45.612c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M188.822 152.079c0-1.4 1.134-2.535 2.534-2.535h53.215a2.535 2.535 0 010 5.069h-53.215a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M235.702 364.937c0 1.4-1.135 2.534-2.535 2.534h-53.214a2.533 2.533 0 110-5.068h53.214c1.4 0 2.535 1.135 2.535 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M181.22 162.215c0-1.4 1.134-2.534 2.534-2.534h60.817a2.534 2.534 0 110 5.068h-60.817a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M243.304 354.801a2.535 2.535 0 01-2.534 2.534h-60.817a2.534 2.534 0 110-5.068h60.817a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M172.351 172.351c0-1.4 1.134-2.534 2.534-2.534h69.686a2.534 2.534 0 110 5.068h-69.686a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M252.173 344.665a2.535 2.535 0 01-2.534 2.534h-69.686a2.534 2.534 0 110-5.068h69.686a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M164.749 182.487c0-1.4 1.134-2.534 2.534-2.534h77.288a2.534 2.534 0 110 5.068h-77.288a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M259.775 334.529a2.535 2.535 0 01-2.534 2.534h-77.288a2.534 2.534 0 110-5.068h77.288a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M157.147 192.623c0-1.4 1.134-2.534 2.534-2.534h84.89a2.534 2.534 0 110 5.068h-84.89a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M267.377 324.393a2.535 2.535 0 01-2.534 2.534h-84.89a2.534 2.534 0 110-5.069h84.89a2.535 2.535 0 012.534 2.535z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M149.544 202.759a2.535 2.535 0 012.535-2.534h92.492a2.535 2.535 0 010 5.068h-92.492a2.534 2.534 0 01-2.535-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M274.979 314.256c0 1.4-1.135 2.534-2.534 2.534h-92.492a2.533 2.533 0 110-5.068h92.492a2.535 2.535 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M141.942 212.895a2.535 2.535 0 012.534-2.534h100.095a2.535 2.535 0 010 5.068H144.476a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M282.581 304.12c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h100.094c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M134.34 223.031a2.535 2.535 0 012.534-2.534h107.697a2.535 2.535 0 010 5.068H136.874a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M290.183 293.984c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h107.696c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M126.738 233.167a2.535 2.535 0 012.534-2.534h115.299a2.535 2.535 0 010 5.069H129.272a2.535 2.535 0 01-2.534-2.535z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M297.785 283.848c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h115.298c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M119.136 243.304c0-1.4 1.135-2.534 2.534-2.534h190.052a2.533 2.533 0 110 5.068H121.67a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M111.534 253.44c0-1.4 1.135-2.534 2.534-2.534h198.921a2.533 2.533 0 110 5.068H114.068a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M109 263.576c0-1.4 1.135-2.534 2.534-2.534h195.12a2.533 2.533 0 110 5.068h-195.12a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M120.403 273.712c0-1.4 1.135-2.534 2.534-2.534h183.717a2.533 2.533 0 110 5.068H122.937a2.535 2.535 0 01-2.534-2.534z"
                  })]
               }), (0, s.jsxs)("g", {
                  strokeOpacity: "0.2",
                  strokeWidth: "2",
                  opacity: "0.4",
                  children: [(0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M223.031 111.534a2.535 2.535 0 012.534-2.534h8.869a2.535 2.535 0 110 5.068h-8.869a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M201.492 405.481c0 1.4-1.134 2.535-2.534 2.535h-8.869a2.534 2.534 0 010-5.069h8.869c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M211.628 121.67a2.535 2.535 0 012.534-2.534h30.409a2.535 2.535 0 010 5.068h-30.409a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M212.895 395.345c0 1.4-1.134 2.534-2.534 2.534h-30.408a2.533 2.533 0 110-5.068h30.408c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M204.026 131.806a2.535 2.535 0 012.534-2.534h38.011a2.535 2.535 0 010 5.068H206.56a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M220.497 385.209c0 1.4-1.134 2.534-2.534 2.534h-38.01a2.533 2.533 0 110-5.068h38.01c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M196.424 141.942a2.535 2.535 0 012.534-2.534h45.613a2.535 2.535 0 010 5.068h-45.613a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M228.099 375.073c0 1.4-1.134 2.534-2.534 2.534h-45.612a2.533 2.533 0 110-5.068h45.612c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M188.822 152.079c0-1.4 1.134-2.535 2.534-2.535h53.215a2.535 2.535 0 010 5.069h-53.215a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M235.702 364.937c0 1.4-1.135 2.534-2.535 2.534h-53.214a2.533 2.533 0 110-5.068h53.214c1.4 0 2.535 1.135 2.535 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M181.22 162.215c0-1.4 1.134-2.534 2.534-2.534h60.817a2.534 2.534 0 110 5.068h-60.817a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M243.304 354.801a2.535 2.535 0 01-2.534 2.534h-60.817a2.534 2.534 0 110-5.068h60.817a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M172.351 172.351c0-1.4 1.134-2.534 2.534-2.534h69.686a2.534 2.534 0 110 5.068h-69.686a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M252.173 344.665a2.535 2.535 0 01-2.534 2.534h-69.686a2.534 2.534 0 110-5.068h69.686a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M164.749 182.487c0-1.4 1.134-2.534 2.534-2.534h77.288a2.534 2.534 0 110 5.068h-77.288a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M259.775 334.529a2.535 2.535 0 01-2.534 2.534h-77.288a2.534 2.534 0 110-5.068h77.288a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M157.147 192.623c0-1.4 1.134-2.534 2.534-2.534h84.89a2.534 2.534 0 110 5.068h-84.89a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M267.377 324.393a2.535 2.535 0 01-2.534 2.534h-84.89a2.534 2.534 0 110-5.069h84.89a2.535 2.535 0 012.534 2.535z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M149.544 202.759a2.535 2.535 0 012.535-2.534h92.492a2.535 2.535 0 010 5.068h-92.492a2.534 2.534 0 01-2.535-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M274.979 314.256c0 1.4-1.135 2.534-2.534 2.534h-92.492a2.533 2.533 0 110-5.068h92.492a2.535 2.535 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M141.942 212.895a2.535 2.535 0 012.534-2.534h100.095a2.535 2.535 0 010 5.068H144.476a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M282.581 304.12c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h100.094c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M134.34 223.031a2.535 2.535 0 012.534-2.534h107.697a2.535 2.535 0 010 5.068H136.874a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M290.183 293.984c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h107.696c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M126.738 233.167a2.535 2.535 0 012.534-2.534h115.299a2.535 2.535 0 010 5.069H129.272a2.535 2.535 0 01-2.534-2.535z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M297.785 283.848c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h115.298c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M119.136 243.304c0-1.4 1.135-2.534 2.534-2.534h190.052a2.533 2.533 0 110 5.068H121.67a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M111.534 253.44c0-1.4 1.135-2.534 2.534-2.534h198.921a2.533 2.533 0 110 5.068H114.068a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M109 263.576c0-1.4 1.135-2.534 2.534-2.534h195.12a2.533 2.533 0 110 5.068h-195.12a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     d: "M120.403 273.712c0-1.4 1.135-2.534 2.534-2.534h183.717a2.533 2.533 0 110 5.068H122.937a2.535 2.535 0 01-2.534-2.534z"
                  })]
               }), (0, s.jsxs)("g", {
                  children: [(0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M223.031 111.534a2.535 2.535 0 012.534-2.534h8.869a2.535 2.535 0 110 5.068h-8.869a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M201.492 405.481c0 1.4-1.134 2.535-2.534 2.535h-8.869a2.534 2.534 0 010-5.069h8.869c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M211.628 121.67a2.535 2.535 0 012.534-2.534h30.409a2.535 2.535 0 010 5.068h-30.409a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M212.895 395.345c0 1.4-1.134 2.534-2.534 2.534h-30.408a2.533 2.533 0 110-5.068h30.408c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M204.026 131.806a2.535 2.535 0 012.534-2.534h38.011a2.535 2.535 0 010 5.068H206.56a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M220.497 385.209c0 1.4-1.134 2.534-2.534 2.534h-38.01a2.533 2.533 0 110-5.068h38.01c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M196.424 141.942a2.535 2.535 0 012.534-2.534h45.613a2.535 2.535 0 010 5.068h-45.613a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M228.099 375.073c0 1.4-1.134 2.534-2.534 2.534h-45.612a2.533 2.533 0 110-5.068h45.612c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M188.822 152.079c0-1.4 1.134-2.535 2.534-2.535h53.215a2.535 2.535 0 010 5.069h-53.215a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M235.702 364.937c0 1.4-1.135 2.534-2.535 2.534h-53.214a2.533 2.533 0 110-5.068h53.214c1.4 0 2.535 1.135 2.535 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M181.22 162.215c0-1.4 1.134-2.534 2.534-2.534h60.817a2.534 2.534 0 110 5.068h-60.817a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M243.304 354.801a2.535 2.535 0 01-2.534 2.534h-60.817a2.534 2.534 0 110-5.068h60.817a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M172.351 172.351c0-1.4 1.134-2.534 2.534-2.534h69.686a2.534 2.534 0 110 5.068h-69.686a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M252.173 344.665a2.535 2.535 0 01-2.534 2.534h-69.686a2.534 2.534 0 110-5.068h69.686a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M164.749 182.487c0-1.4 1.134-2.534 2.534-2.534h77.288a2.534 2.534 0 110 5.068h-77.288a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M259.775 334.529a2.535 2.535 0 01-2.534 2.534h-77.288a2.534 2.534 0 110-5.068h77.288a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M157.147 192.623c0-1.4 1.134-2.534 2.534-2.534h84.89a2.534 2.534 0 110 5.068h-84.89a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M267.377 324.393a2.535 2.535 0 01-2.534 2.534h-84.89a2.534 2.534 0 110-5.069h84.89a2.535 2.535 0 012.534 2.535z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M149.544 202.759a2.535 2.535 0 012.535-2.534h92.492a2.535 2.535 0 010 5.068h-92.492a2.534 2.534 0 01-2.535-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M274.979 314.256c0 1.4-1.135 2.534-2.534 2.534h-92.492a2.533 2.533 0 110-5.068h92.492a2.535 2.535 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M141.942 212.895a2.535 2.535 0 012.534-2.534h100.095a2.535 2.535 0 010 5.068H144.476a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M282.581 304.12c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h100.094c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M134.34 223.031a2.535 2.535 0 012.534-2.534h107.697a2.535 2.535 0 010 5.068H136.874a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M290.183 293.984c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h107.696c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M126.738 233.167a2.535 2.535 0 012.534-2.534h115.299a2.535 2.535 0 010 5.069H129.272a2.535 2.535 0 01-2.534-2.535z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M297.785 283.848c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h115.298c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M119.136 243.304c0-1.4 1.135-2.534 2.534-2.534h190.052a2.533 2.533 0 110 5.068H121.67a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M111.534 253.44c0-1.4 1.135-2.534 2.534-2.534h198.921a2.533 2.533 0 110 5.068H114.068a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M109 263.576c0-1.4 1.135-2.534 2.534-2.534h195.12a2.533 2.533 0 110 5.068h-195.12a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#bolt-stroke)",
                     strokeOpacity: "0.2",
                     strokeWidth: "8",
                     d: "M120.403 273.712c0-1.4 1.135-2.534 2.534-2.534h183.717a2.533 2.533 0 110 5.068H122.937a2.535 2.535 0 01-2.534-2.534z"
                  })]
               }), (0, s.jsxs)("g", {
                  children: [(0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 0),
                     stroke: "url(#bolt-radial)",
                     d: "M223.031 111.534a2.535 2.535 0 012.534-2.534h8.869a2.535 2.535 0 110 5.068h-8.869a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 1),
                     stroke: "url(#bolt-radial)",
                     d: "M211.628 121.67a2.535 2.535 0 012.534-2.534h30.409a2.535 2.535 0 010 5.068h-30.409a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 2),
                     stroke: "url(#bolt-radial)",
                     d: "M204.026 131.806a2.535 2.535 0 012.534-2.534h38.011a2.535 2.535 0 010 5.068H206.56a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 3),
                     stroke: "url(#bolt-radial)",
                     d: "M196.424 141.942a2.535 2.535 0 012.534-2.534h45.613a2.535 2.535 0 010 5.068h-45.613a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 4),
                     stroke: "url(#bolt-radial)",
                     d: "M188.822 152.079c0-1.4 1.134-2.535 2.534-2.535h53.215a2.535 2.535 0 010 5.069h-53.215a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 5),
                     stroke: "url(#bolt-radial)",
                     d: "M181.22 162.215c0-1.4 1.134-2.534 2.534-2.534h60.817a2.534 2.534 0 110 5.068h-60.817a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 6),
                     stroke: "url(#bolt-radial)",
                     d: "M172.351 172.351c0-1.4 1.134-2.534 2.534-2.534h69.686a2.534 2.534 0 110 5.068h-69.686a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 7),
                     stroke: "url(#bolt-radial)",
                     d: "M164.749 182.487c0-1.4 1.134-2.534 2.534-2.534h77.288a2.534 2.534 0 110 5.068h-77.288a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 8),
                     stroke: "url(#bolt-radial)",
                     d: "M157.147 192.623c0-1.4 1.134-2.534 2.534-2.534h84.89a2.534 2.534 0 110 5.068h-84.89a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 9),
                     stroke: "url(#bolt-radial)",
                     d: "M149.544 202.759a2.535 2.535 0 012.535-2.534h92.492a2.535 2.535 0 010 5.068h-92.492a2.534 2.534 0 01-2.535-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 10),
                     stroke: "url(#bolt-radial)",
                     d: "M141.942 212.895a2.535 2.535 0 012.534-2.534h100.095a2.535 2.535 0 010 5.068H144.476a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 11),
                     stroke: "url(#bolt-radial)",
                     d: "M134.34 223.031a2.535 2.535 0 012.534-2.534h107.697a2.535 2.535 0 010 5.068H136.874a2.534 2.534 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 12),
                     stroke: "url(#bolt-radial)",
                     d: "M126.738 233.167a2.535 2.535 0 012.534-2.534h115.299a2.535 2.535 0 010 5.069H129.272a2.535 2.535 0 01-2.534-2.535z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 13),
                     stroke: "url(#bolt-radial)",
                     d: "M119.136 243.304c0-1.4 1.135-2.534 2.534-2.534h190.052a2.533 2.533 0 110 5.068H121.67a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 14),
                     stroke: "url(#bolt-radial)",
                     d: "M111.534 253.44c0-1.4 1.135-2.534 2.534-2.534h198.921a2.533 2.533 0 110 5.068H114.068a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 15),
                     stroke: "url(#bolt-radial)",
                     d: "M109 263.576c0-1.4 1.135-2.534 2.534-2.534h195.12a2.533 2.533 0 110 5.068h-195.12a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 16),
                     stroke: "url(#bolt-radial)",
                     d: "M120.403 273.712c0-1.4 1.135-2.534 2.534-2.534h183.717a2.533 2.533 0 110 5.068H122.937a2.535 2.535 0 01-2.534-2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 17),
                     stroke: "url(#bolt-radial)",
                     d: "M297.785 283.848c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h115.298c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 18),
                     stroke: "url(#bolt-radial)",
                     d: "M290.183 293.984c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h107.696c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 19),
                     stroke: "url(#bolt-radial)",
                     d: "M282.581 304.12c0 1.4-1.134 2.534-2.534 2.534H179.953a2.533 2.533 0 110-5.068h100.094c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 20),
                     stroke: "url(#bolt-radial)",
                     d: "M274.979 314.256c0 1.4-1.135 2.534-2.534 2.534h-92.492a2.533 2.533 0 110-5.068h92.492a2.535 2.535 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 21),
                     stroke: "url(#bolt-radial)",
                     d: "M267.377 324.393a2.535 2.535 0 01-2.534 2.534h-84.89a2.534 2.534 0 110-5.069h84.89a2.535 2.535 0 012.534 2.535z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 22),
                     stroke: "url(#bolt-radial)",
                     d: "M259.775 334.529a2.535 2.535 0 01-2.534 2.534h-77.288a2.534 2.534 0 110-5.068h77.288a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 23),
                     stroke: "url(#bolt-radial)",
                     d: "M252.173 344.665a2.535 2.535 0 01-2.534 2.534h-69.686a2.534 2.534 0 110-5.068h69.686a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 24),
                     stroke: "url(#bolt-radial)",
                     d: "M243.304 354.801a2.535 2.535 0 01-2.534 2.534h-60.817a2.534 2.534 0 110-5.068h60.817a2.534 2.534 0 012.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 25),
                     stroke: "url(#bolt-radial)",
                     d: "M235.702 364.937c0 1.4-1.135 2.534-2.535 2.534h-53.214a2.533 2.533 0 110-5.068h53.214c1.4 0 2.535 1.135 2.535 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 26),
                     stroke: "url(#bolt-radial)",
                     d: "M228.099 375.073c0 1.4-1.134 2.534-2.534 2.534h-45.612a2.533 2.533 0 110-5.068h45.612c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 27),
                     stroke: "url(#bolt-radial)",
                     d: "M220.497 385.209c0 1.4-1.134 2.534-2.534 2.534h-38.01a2.533 2.533 0 110-5.068h38.01c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 28),
                     stroke: "url(#bolt-radial)",
                     d: "M212.895 395.345c0 1.4-1.134 2.534-2.534 2.534h-30.408a2.533 2.533 0 110-5.068h30.408c1.4 0 2.534 1.135 2.534 2.534z"
                  }), (0, s.jsx)("path", {
                     style: (0, r.Z)({}, "--index", 29),
                     stroke: "url(#bolt-radial)",
                     d: "M201.492 405.481c0 1.4-1.134 2.535-2.534 2.535h-8.869a2.534 2.534 0 010-5.069h8.869c1.4 0 2.534 1.135 2.534 2.534z"
                  })]
               }), (0, s.jsxs)("defs", {
                  children: [(0, s.jsxs)("linearGradient", {
                     id: "bolt-stroke",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        offset: "0",
                        stopColor: "#7877C6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "1"
                     })]
                  }), (0, s.jsxs)("radialGradient", {
                     id: "bolt-radial",
                     cx: "0",
                     cy: "0",
                     r: "1",
                     gradientTransform: "rotate(90 36 176.262) scale(288.739 199.426)",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#fff"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#fff",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("filter", {
                     id: "filter0_f_1706_102550",
                     width: "424.523",
                     height: "517.016",
                     x: "0",
                     y: "0",
                     colorInterpolationFilters: "sRGB",
                     filterUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                     }), (0, s.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "BackgroundImageFix",
                        result: "shape"
                     }), (0, s.jsx)("feGaussianBlur", {
                        result: "effect1_foregroundBlur_1706_102550",
                        stdDeviation: "50"
                     })]
                  })]
               })]
            })
         }

         function vn() {
            var t = (0, i.Z)(["\n  0%, 9%, 11%, 100% {\n    fill: transparent;\n  }\n\n  10% {\n    fill: rgba(255, 255, 255, 0.2);\n    fill: #fff;\n  }\n"]);
            return vn = function () {
               return t
            }, t
         }

         function wn() {
            var t = (0, i.Z)(["\n  && {\n    grid-column: auto / span 2;\n    --order: 1;\n  }\n\n  & ", " {\n    position: absolute;\n    top: -92px;\n    mask-image: linear-gradient(to bottom, black, transparent 70%);\n  }\n\n  & ", " svg g:last-of-type path {\n    fill: transparent;\n    animation: ", " 2250ms linear infinite;\n    animation-delay: calc(var(--index) * 20ms);\n  }\n\n  @media (max-width: 768px) {\n    padding: 32px;\n\n    & ", " svg g:last-of-type path {\n      animation: none;\n    }\n  }\n"]);
            return wn = function () {
               return t
            }, t
         }
         var bn = function () {
               return (0, s.jsxs)(Cn, {
                  children: [(0, s.jsx)(y.tR, {
                     children: (0, s.jsx)(kn, {})
                  }), (0, s.jsx)(y.Ar, {
                     as: "h3",
                     children: "Understand their most recurrent problems"
                  }), (0, s.jsx)(y.JM, {
                     as: "p",
                     children: "Quickly categorize customer issues by analyzing data."
                  })]
               })
            },
            An = (0, u.F4)(vn()),
            Cn = (0, u.ZP)(y.Kn).withConfig({
               componentId: "sc-95041f02-0"
            })(wn(), y.tR, y.tR, An, y.tR),
            zn = n(13038),
            Mn = n(30817),
            Zn = n(11102),
            On = function () {
               var t = (0, a.Z)(o.useState(), 2),
                  e = t[0],
                  n = t[1];
               return o.useEffect((function () {
                  n(Zn.A.os)
               }), []), e
            };

         function Ln() {
            var t = On();
            return (0, s.jsxs)("svg", {
               viewBox: "0 0 709 227",
               fill: "none",
               children: [(0, s.jsx)("rect", {
                  width: "708.683",
                  height: "227",
                  fill: "#838383",
                  fillOpacity: "0.1",
                  rx: "12"
               }), (0, s.jsxs)("g", {
                  "data-key": "pageup",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "660.695",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M669.234 75v-6.486h2.191c.509 0 .925.092 1.248.276.325.181.566.427.722.737.156.31.234.657.234 1.04a2.3 2.3 0 01-.234 1.041 1.742 1.742 0 01-.716.748c-.323.183-.737.275-1.241.275h-1.571v-.697h1.546c.348 0 .628-.06.839-.18.211-.12.364-.283.459-.488a1.63 1.63 0 00.146-.7c0-.26-.049-.492-.146-.697a1.04 1.04 0 00-.462-.48c-.214-.12-.497-.178-.849-.178h-1.381V75h-.785zm7.47 1.925a2.77 2.77 0 01-.931-.139 1.98 1.98 0 01-.649-.36 1.965 1.965 0 01-.408-.476l.595-.418c.068.089.153.19.257.304.103.116.244.216.424.3.182.088.419.13.712.13.393 0 .717-.094.973-.284.255-.19.383-.488.383-.893V74.1h-.063a3.92 3.92 0 01-.235.329 1.332 1.332 0 01-.43.345c-.186.1-.437.149-.754.149a2.03 2.03 0 01-1.058-.279 1.96 1.96 0 01-.738-.81c-.179-.355-.269-.786-.269-1.293 0-.498.088-.932.263-1.301a2.03 2.03 0 01.731-.862 1.933 1.933 0 011.083-.307c.317 0 .568.053.754.159.188.103.332.221.431.354a5.4 5.4 0 01.234.323h.076v-.772h.722v5.003c0 .418-.095.758-.285 1.02a1.623 1.623 0 01-.76.58 2.866 2.866 0 01-1.058.186zm-.025-2.672c.3 0 .553-.069.76-.206.207-.138.364-.335.472-.593a2.38 2.38 0 00.162-.924c0-.35-.053-.66-.159-.928a1.394 1.394 0 00-.468-.63c-.207-.152-.463-.228-.767-.228-.317 0-.58.08-.792.24a1.46 1.46 0 00-.471.646c-.104.27-.156.57-.156.9 0 .338.053.636.159.896.107.258.266.46.475.608.211.146.473.219.785.219zm7.854-5.739h.786v4.294c0 .444-.105.84-.314 1.188-.207.346-.499.62-.877.82-.378.199-.821.298-1.33.298-.509 0-.952-.1-1.33-.298a2.22 2.22 0 01-.881-.82 2.28 2.28 0 01-.31-1.188v-4.294h.785v4.231c0 .317.07.599.209.846.14.245.338.438.596.58.259.139.57.208.931.208.361 0 .671-.07.931-.209.259-.141.458-.334.595-.58.14-.246.209-.528.209-.845v-4.23zm2.253 8.31v-6.688h.722v.772h.088c.055-.084.131-.192.228-.323.1-.133.241-.251.425-.354.186-.106.437-.159.754-.159.409 0 .77.103 1.083.307.312.205.556.495.731.871.175.376.263.82.263 1.33 0 .516-.088.962-.263 1.34a2.074 2.074 0 01-.728.874 1.906 1.906 0 01-1.074.307c-.312 0-.562-.051-.75-.155a1.387 1.387 0 01-.434-.358 4.642 4.642 0 01-.235-.335h-.063v2.571h-.747zm.734-4.256c0 .367.054.691.162.972.108.279.265.497.472.656.207.156.46.234.76.234.312 0 .573-.082.782-.247.211-.167.37-.39.475-.672a2.62 2.62 0 00.162-.943c0-.342-.053-.65-.159-.925a1.42 1.42 0 00-.472-.656c-.209-.162-.471-.243-.788-.243-.304 0-.56.077-.767.23a1.389 1.389 0 00-.468.64 2.62 2.62 0 00-.159.954z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "660.945",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "pagedown",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "660.695",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M669.943 117v-6.486h2.191c.509 0 .925.092 1.248.276.325.181.566.427.722.738.156.31.234.656.234 1.038a2.3 2.3 0 01-.234 1.042 1.741 1.741 0 01-.716.748c-.323.183-.737.275-1.241.275h-1.571v-.697h1.546c.348 0 .628-.06.839-.18.211-.12.364-.283.459-.488a1.63 1.63 0 00.146-.7c0-.259-.049-.492-.146-.696a1.04 1.04 0 00-.462-.482c-.214-.118-.497-.177-.849-.177h-1.381V117h-.785zm7.471 1.926c-.362 0-.672-.047-.932-.14a1.982 1.982 0 01-.649-.361 1.967 1.967 0 01-.408-.475l.595-.418c.068.089.153.19.257.304.103.116.244.216.424.301.182.086.419.13.713.13.392 0 .716-.095.972-.285.255-.19.383-.488.383-.893v-.988h-.063a4.06 4.06 0 01-.235.329 1.325 1.325 0 01-.43.345c-.186.099-.437.149-.754.149a2.03 2.03 0 01-1.058-.279 1.958 1.958 0 01-.738-.81c-.179-.355-.269-.786-.269-1.293 0-.498.088-.932.263-1.301a2.03 2.03 0 01.731-.862 1.94 1.94 0 011.084-.307c.316 0 .567.053.753.159.188.103.332.221.431.354a5.4 5.4 0 01.234.323h.076v-.772h.722v5.003c0 .418-.095.758-.285 1.02a1.626 1.626 0 01-.76.58 2.874 2.874 0 01-1.057.187zm-.026-2.673c.3 0 .553-.069.76-.206.207-.137.364-.335.472-.592.108-.258.162-.566.162-.925 0-.351-.053-.66-.159-.928a1.393 1.393 0 00-.468-.63c-.207-.152-.463-.228-.767-.228-.317 0-.58.08-.792.24a1.464 1.464 0 00-.471.646 2.49 2.49 0 00-.156.9c0 .338.053.636.159.896.107.258.266.46.475.608.211.146.473.219.785.219zm5.599.747h-2.001v-6.486h2.09c.629 0 1.168.13 1.615.39.448.257.791.628 1.029 1.111.239.482.358 1.058.358 1.729 0 .676-.12 1.258-.361 1.745-.24.486-.591.86-1.051 1.121-.46.26-1.02.39-1.679.39zm-1.216-.697h1.166c.536 0 .98-.103 1.333-.31.353-.207.615-.502.789-.884.173-.382.259-.837.259-1.365 0-.523-.085-.974-.256-1.352a1.894 1.894 0 00-.767-.874c-.34-.205-.763-.307-1.27-.307h-1.254v5.092zm6.271-2.229V117h-.748v-4.864h.722v.76h.064c.114-.247.287-.446.519-.596.232-.152.532-.228.9-.228.329 0 .617.068.864.203.247.133.439.336.577.608.137.27.205.612.205 1.026V117h-.747v-3.04c0-.382-.099-.68-.298-.893-.198-.216-.471-.323-.817-.323-.238 0-.452.051-.639.155a1.107 1.107 0 00-.441.453 1.502 1.502 0 00-.161.722z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "660.945",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "enter",
                  children: [(0, s.jsx)("rect", {
                     width: "105.195",
                     height: "38.756",
                     x: "551.812",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M562.886 117.347v-6.486h2.191c.507 0 .923.087 1.248.26.325.171.566.407.722.706.156.3.234.641.234 1.023 0 .382-.078.721-.234 1.017a1.65 1.65 0 01-.719.697c-.323.166-.736.25-1.238.25h-1.774v-.71h1.749c.346 0 .624-.05.836-.152a.957.957 0 00.462-.43c.097-.188.146-.412.146-.672a1.51 1.51 0 00-.146-.681.987.987 0 00-.466-.449c-.213-.108-.495-.162-.845-.162h-1.381v5.789h-.785zm3.053-2.913l1.596 2.913h-.912l-1.571-2.913h.887zm4.537 3.015c-.469 0-.873-.104-1.213-.311a2.081 2.081 0 01-.782-.874c-.182-.375-.272-.813-.272-1.311s.09-.937.272-1.317c.184-.382.439-.68.766-.893.33-.216.714-.323 1.153-.323.253 0 .504.042.751.126.247.085.471.222.674.412.203.188.364.437.485.747.12.311.18.693.18 1.147v.317h-3.749v-.647h2.989a1.59 1.59 0 00-.165-.734 1.226 1.226 0 00-.462-.51 1.29 1.29 0 00-.703-.187c-.298 0-.555.074-.773.222a1.45 1.45 0 00-.497.57 1.674 1.674 0 00-.174.754v.43c0 .368.063.679.19.934.129.254.307.447.535.58.228.131.493.196.795.196.196 0 .374-.027.532-.082.161-.057.299-.141.415-.253a1.15 1.15 0 00.269-.425l.722.203c-.076.245-.204.46-.383.646a1.867 1.867 0 01-.665.431 2.476 2.476 0 01-.89.152zm5.267-4.966v.633h-2.521v-.633h2.521zm-1.786-1.165h.747v4.636c0 .211.031.369.092.475a.476.476 0 00.24.209c.1.034.204.051.314.051.082 0 .15-.005.203-.013l.126-.025.152.671a1.568 1.568 0 01-.557.089 1.52 1.52 0 01-.621-.136c-.2-.091-.367-.23-.5-.415-.131-.186-.196-.42-.196-.703v-4.839zm5.976 4.041v-2.876h.747v4.864h-.747v-.823h-.051a1.592 1.592 0 01-.532.63c-.241.171-.545.257-.912.257-.304 0-.575-.067-.811-.2a1.398 1.398 0 01-.557-.608c-.135-.272-.203-.615-.203-1.029v-3.091h.747v3.04c0 .355.1.638.298.849.201.211.456.317.766.317.186 0 .375-.048.567-.143.195-.095.357-.241.488-.437.133-.196.2-.446.2-.75zm2.116 1.988v-4.864h.722v.735h.051c.088-.241.249-.436.481-.586.232-.15.494-.225.785-.225l.206.003c.083.002.145.005.187.01v.76a1.938 1.938 0 00-.174-.029 1.697 1.697 0 00-.282-.022c-.236 0-.448.05-.633.149a1.09 1.09 0 00-.596.991v3.078h-.747zm4.065-2.926v2.926h-.747v-4.864h.722v.76h.063c.114-.247.288-.445.52-.595.232-.152.532-.228.899-.228.33 0 .618.067.865.202.247.133.439.336.576.608.137.271.206.613.206 1.026v3.091h-.747v-3.04c0-.382-.1-.68-.298-.893-.199-.215-.471-.323-.817-.323a1.31 1.31 0 00-.64.155 1.117 1.117 0 00-.44.453 1.493 1.493 0 00-.162.722z"
                  }), (0, s.jsx)("rect", {
                     width: "104.695",
                     height: "38.256",
                     x: "552.062",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "pipe",
                  children: [(0, s.jsx)("rect", {
                     width: "65.516",
                     height: "38.756",
                     x: "591.492",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M603.815 60.504V71.17h-.634V60.504h.634zm.888 21.97l-2.09-7.765h.684l2.091 7.765h-.685z"
                  }), (0, s.jsx)("rect", {
                     width: "65.016",
                     height: "38.256",
                     x: "591.742",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "backspace",
                  children: [(0, s.jsx)("rect", {
                     width: "92",
                     height: "39",
                     x: "565",
                     y: "9",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M575.811 32.226V25.74h2.267c.452 0 .825.078 1.118.234.294.154.512.362.656.624.143.26.215.548.215.865 0 .278-.049.509-.149.69a1.16 1.16 0 01-.386.43 1.75 1.75 0 01-.516.235v.063c.198.013.398.083.598.21.201.126.369.308.504.544.135.237.203.526.203.868 0 .325-.074.618-.222.877-.148.26-.381.466-.7.618-.319.152-.734.228-1.245.228h-2.343zm.785-.697h1.558c.513 0 .878-.1 1.093-.298a.956.956 0 00.326-.728c0-.22-.056-.422-.168-.608a1.214 1.214 0 00-.478-.45 1.5 1.5 0 00-.735-.17h-1.596v2.254zm0-2.939h1.457c.236 0 .45-.046.64-.14a1.12 1.12 0 00.456-.392c.114-.169.171-.367.171-.595a.985.985 0 00-.298-.726c-.198-.2-.513-.3-.944-.3h-1.482v2.153zm6.345 3.75c-.308 0-.588-.058-.839-.174a1.445 1.445 0 01-.599-.51 1.444 1.444 0 01-.221-.811c0-.279.055-.505.164-.678.11-.175.257-.312.441-.411.183-.1.386-.174.608-.222.223-.05.448-.09.674-.12.296-.038.535-.067.719-.086.186-.021.321-.056.405-.104.087-.049.13-.133.13-.254v-.025c0-.313-.085-.555-.256-.729-.169-.173-.426-.26-.77-.26-.357 0-.636.079-.839.235a1.391 1.391 0 00-.428.5l-.709-.253c.127-.295.296-.526.507-.69.213-.167.445-.283.696-.349.254-.067.503-.1.748-.1.156 0 .336.018.538.056.205.036.402.11.592.225.193.114.352.286.479.516.126.23.19.538.19.925v3.205h-.748v-.659h-.038c-.05.106-.135.219-.253.339-.118.12-.276.223-.472.307a1.818 1.818 0 01-.719.127zm.114-.672c.296 0 .545-.058.748-.174a1.191 1.191 0 00.62-1.029v-.684c-.031.038-.101.073-.209.105a3.887 3.887 0 01-.367.079 16.57 16.57 0 01-.716.095 2.87 2.87 0 00-.545.123.946.946 0 00-.405.25c-.101.11-.152.26-.152.45 0 .26.096.456.288.59.195.13.44.195.738.195zm5.456.66c-.456 0-.849-.109-1.178-.324a2.104 2.104 0 01-.76-.89 3.02 3.02 0 01-.266-1.295c0-.494.091-.93.272-1.308a2.15 2.15 0 01.767-.89 2.055 2.055 0 011.152-.323c.342 0 .651.063.925.19.275.127.499.304.675.532.175.228.284.494.326.798h-.748a1.155 1.155 0 00-.38-.589c-.194-.173-.456-.26-.785-.26-.291 0-.547.076-.766.229a1.48 1.48 0 00-.51.636 2.347 2.347 0 00-.181.96c0 .375.059.703.178.981.12.28.289.495.506.65.22.154.477.23.773.23.194 0 .371-.033.529-.1a1.094 1.094 0 00.636-.748h.748a1.727 1.727 0 01-.969 1.32 2.1 2.1 0 01-.944.2zm3.702-1.876l-.012-.924h.152l2.128-2.167h.924l-2.267 2.293h-.063l-.862.798zm-.697 1.774V25.74h.748v6.486h-.748zm3.091 0l-1.9-2.407.532-.52 2.318 2.927h-.95zm5.206-3.775l-.671.19a1.28 1.28 0 00-.187-.326.903.903 0 00-.33-.266 1.193 1.193 0 00-.535-.105c-.297 0-.546.069-.744.206-.196.135-.295.307-.295.516 0 .186.068.333.203.44.135.108.346.198.634.27l.722.177c.435.105.759.267.972.485.213.215.32.492.32.832 0 .28-.08.528-.241.748-.158.22-.38.393-.665.52-.285.126-.616.19-.994.19-.497 0-.907-.109-1.232-.324-.326-.215-.531-.53-.618-.944l.709-.177c.068.262.196.458.384.59.19.13.438.195.744.195.348 0 .625-.073.83-.221.207-.15.31-.33.31-.539a.566.566 0 00-.177-.424c-.119-.116-.3-.203-.545-.26l-.811-.19c-.445-.105-.773-.269-.982-.49a1.193 1.193 0 01-.31-.84c0-.274.077-.517.231-.728.157-.211.369-.377.637-.497.27-.12.576-.18.918-.18.482 0 .86.105 1.134.316.277.21.473.49.589.836zm1.214 5.599v-6.689h.722v.773h.089c.054-.084.13-.192.228-.323a1.33 1.33 0 01.424-.355c.186-.105.437-.158.754-.158.409 0 .77.103 1.083.307.312.205.556.495.731.871.176.376.263.82.263 1.33 0 .515-.087.962-.263 1.34a2.074 2.074 0 01-.728.874c-.31.205-.668.307-1.074.307-.312 0-.562-.052-.75-.155a1.387 1.387 0 01-.434-.358 4.579 4.579 0 01-.234-.336h-.064v2.572h-.747zm.735-4.256c0 .367.053.691.161.972.108.279.265.497.472.655.207.157.46.235.76.235.312 0 .573-.083.782-.247.211-.167.37-.39.475-.672.108-.283.162-.597.162-.943 0-.342-.053-.65-.159-.925a1.425 1.425 0 00-.471-.656c-.209-.162-.472-.244-.789-.244-.304 0-.559.078-.766.232a1.384 1.384 0 00-.469.64 2.62 2.62 0 00-.158.953zm6.131 2.546c-.308 0-.588-.058-.839-.174a1.439 1.439 0 01-.599-.51 1.437 1.437 0 01-.222-.811c0-.279.055-.505.165-.678a1.16 1.16 0 01.44-.411c.184-.1.387-.174.608-.222.224-.05.449-.09.675-.12.295-.038.535-.067.719-.086.185-.021.321-.056.405-.104.087-.049.13-.133.13-.254v-.025c0-.313-.086-.555-.257-.729-.169-.173-.425-.26-.769-.26-.357 0-.637.079-.839.235a1.382 1.382 0 00-.428.5l-.709-.253c.126-.295.295-.526.506-.69.214-.167.446-.283.697-.349.253-.067.503-.1.747-.1.157 0 .336.018.539.056.205.036.402.11.592.225.192.114.352.286.478.516.127.23.19.538.19.925v3.205h-.747v-.659h-.038a1.327 1.327 0 01-.253.339c-.119.12-.276.223-.472.307a1.821 1.821 0 01-.719.127zm.114-.672c.295 0 .544-.058.747-.174a1.188 1.188 0 00.621-1.029v-.684c-.032.038-.101.073-.209.105a3.957 3.957 0 01-.367.079 17.371 17.371 0 01-.716.095 2.87 2.87 0 00-.545.123.934.934 0 00-.405.25c-.102.11-.152.26-.152.45 0 .26.096.456.288.59.194.13.44.195.738.195zm5.456.66c-.456 0-.849-.109-1.178-.324a2.106 2.106 0 01-.761-.89 3.02 3.02 0 01-.266-1.295c0-.494.091-.93.273-1.308.183-.38.439-.677.766-.89a2.06 2.06 0 011.153-.323c.342 0 .65.063.925.19.274.127.499.304.674.532.176.228.284.494.326.798h-.747a1.161 1.161 0 00-.38-.589c-.194-.173-.456-.26-.785-.26-.292 0-.547.076-.767.229-.217.15-.387.362-.51.636-.12.272-.18.592-.18.96 0 .375.059.703.177.981.121.28.289.495.507.65.219.154.477.23.773.23.194 0 .37-.033.529-.1.158-.068.292-.165.402-.292a1.12 1.12 0 00.234-.456h.747a1.725 1.725 0 01-.969 1.32c-.27.134-.584.2-.943.2zm5.045 0c-.469 0-.873-.104-1.213-.311a2.086 2.086 0 01-.783-.874c-.181-.376-.272-.813-.272-1.311 0-.499.091-.938.272-1.318.184-.382.44-.68.767-.893a2.056 2.056 0 011.153-.323c.253 0 .503.042.75.127.247.084.472.221.675.411.202.188.364.438.484.748.121.31.181.692.181 1.146v.317h-3.75v-.646h2.99c0-.275-.055-.52-.165-.735a1.246 1.246 0 00-.462-.51 1.296 1.296 0 00-.703-.186 1.34 1.34 0 00-.773.221 1.452 1.452 0 00-.497.57 1.677 1.677 0 00-.175.754v.43c0 .368.064.68.19.935.129.253.308.446.536.58.228.13.493.196.795.196.196 0 .373-.028.532-.083.16-.057.298-.141.414-.253a1.15 1.15 0 00.27-.424l.722.202c-.076.245-.204.46-.383.646-.18.184-.402.328-.666.431a2.46 2.46 0 01-.889.152z"
                  }), (0, s.jsx)("rect", {
                     width: "91.5",
                     height: "38.5",
                     x: "565.25",
                     y: "9.25",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "]",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "549.047",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M568.965 66.33v.393c-.353 0-.6.074-.741.222-.139.148-.209.395-.209.741V68.7c0 .29-.029.543-.086.757a1.21 1.21 0 01-.272.528c-.127.14-.295.243-.507.31a2.59 2.59 0 01-.782.102v-.62c.245 0 .437-.04.577-.118a.623.623 0 00.297-.351c.059-.159.089-.361.089-.608v-1.267c0-.165.021-.315.063-.45a.762.762 0 01.241-.348c.116-.097.281-.172.494-.225.215-.053.494-.08.836-.08zm-2.597-4.04c.311 0 .571.033.782.101.212.068.38.171.507.31.127.14.218.316.272.53.057.212.086.465.086.756v1.014c0 .346.07.593.209.74.141.148.388.222.741.222v.393a3.54 3.54 0 01-.836-.08 1.222 1.222 0 01-.494-.224.762.762 0 01-.241-.348 1.51 1.51 0 01-.063-.45v-1.267c0-.247-.03-.45-.089-.608a.623.623 0 00-.297-.355c-.14-.076-.332-.114-.577-.114v-.62zm2.597 3.673v.76h-.747v-.76h.747zm-.722 8.747v8.107h-1.875v-.621h1.166V75.33h-1.166v-.62h1.875z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "549.297",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "'",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "509.367",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M527.24 107.213v-.57c0-.173.031-.357.092-.551a2.38 2.38 0 01.272-.567c.121-.184.265-.343.434-.478l.406.329c-.133.19-.249.389-.349.596a1.514 1.514 0 00-.145.658v.583h-.71zm1.622 0v-.57c0-.173.03-.357.092-.551a2.38 2.38 0 01.272-.567 2.02 2.02 0 01.434-.478l.405.329c-.133.19-.249.389-.348.596a1.515 1.515 0 00-.146.658v.583h-.709zm-.89 12.419v-.57c0-.173.031-.356.092-.551.063-.196.154-.385.272-.566.121-.184.265-.344.434-.479l.406.33c-.134.19-.25.388-.349.595a1.52 1.52 0 00-.146.659v.582h-.709z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "509.617",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "/",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "485.375",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M505.173 152.441v-.038c.004-.404.046-.724.127-.963.08-.239.194-.432.342-.58.147-.147.325-.284.532-.408.124-.076.236-.166.335-.269a1.185 1.185 0 00.323-.821.98.98 0 00-.145-.538.972.972 0 00-.39-.351 1.17 1.17 0 00-.541-.124c-.174 0-.34.036-.501.108a.961.961 0 00-.402.339c-.108.154-.17.355-.187.604h-.798a1.79 1.79 0 01.279-.921c.171-.256.396-.451.674-.586.281-.135.593-.203.935-.203.371 0 .694.074.969.222.276.148.49.35.639.608a1.7 1.7 0 01.228.88c0 .233-.035.443-.107.631-.07.188-.171.355-.304.503a2.078 2.078 0 01-.475.393 1.985 1.985 0 00-.447.367 1.168 1.168 0 00-.244.453 2.57 2.57 0 00-.082.656v.038h-.76zm.405 1.875a.549.549 0 01-.402-.168.549.549 0 01-.168-.402.55.55 0 01.168-.403.549.549 0 01.402-.168c.157 0 .291.056.402.168a.55.55 0 01.168.403.537.537 0 01-.079.285.597.597 0 01-.206.209.547.547 0 01-.285.076zm.544 5.578l-2.09 7.766h-.684l2.09-7.766h.684z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "485.625",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": ".",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "442.922",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M464.258 151.985l-4.079 2.077v-.811l3.129-1.507-.026.051v-.127l.026.051-3.129-1.508v-.811l4.079 2.078v.507zm-1.156 14.75a.549.549 0 01-.402-.168.549.549 0 01-.168-.402c0-.156.056-.29.168-.402a.549.549 0 01.402-.168.55.55 0 01.403.168.551.551 0 01.167.402.581.581 0 01-.285.494.538.538 0 01-.285.076z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "443.172",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": ",",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "400.477",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M417.585 151.985v-.507l4.079-2.078v.811l-3.129 1.508.026-.051v.127l-.026-.051 3.129 1.507v.811l-4.079-2.077zm3.472 13.813l-.051.342c-.036.24-.091.498-.164.772-.072.275-.147.533-.225.776-.078.243-.143.436-.194.58h-.57l.108-.535a20.442 20.442 0 00.247-1.581l.038-.354h.811z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "400.727",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": ";",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "466.914",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M486.86 111.723a.549.549 0 01-.402-.168.549.549 0 01-.168-.402c0-.156.056-.291.168-.402a.549.549 0 01.402-.168c.156 0 .29.056.402.168a.547.547 0 01.168.402.537.537 0 01-.079.285.597.597 0 01-.206.209.547.547 0 01-.285.076zm0-3.611a.548.548 0 01-.402-.167.55.55 0 01-.168-.403c0-.156.056-.29.168-.402a.549.549 0 01.402-.168c.156 0 .29.056.402.168a.549.549 0 01.168.402.532.532 0 01-.079.285.581.581 0 01-.206.209.538.538 0 01-.285.076zm.548 15.093l-.05.342a6.922 6.922 0 01-.165.773c-.072.274-.147.533-.225.775-.078.243-.142.436-.193.58h-.57l.108-.535c.044-.222.088-.47.133-.744.046-.273.084-.551.114-.836l.038-.355h.81zm-.456-2.673a.549.549 0 01-.402-.168.549.549 0 01-.168-.402c0-.156.056-.29.168-.402a.549.549 0 01.402-.168.55.55 0 01.403.168.548.548 0 01.167.402.589.589 0 01-.285.494.538.538 0 01-.285.076z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "467.164",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "l",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "424.469",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M442.09 117.736v-6.486h.785v5.789h3.015v.697h-3.8z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "424.719",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "m",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "358.031",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M374.279 153.698h.938l2.204 5.383h.076l2.204-5.383h.938v6.486h-.735v-4.928h-.063l-2.027 4.928h-.71l-2.027-4.928h-.063v4.928h-.735v-6.486z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "358.281",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "n",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "315.586",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M339.001 153.698v6.486h-.76l-3.535-5.093h-.063v5.093h-.785v-6.486h.76l3.547 5.105h.063v-5.105h.773z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "315.836",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "b",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "273.141",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M290.37 160.184v-6.486h2.267c.452 0 .825.078 1.118.234.294.154.512.362.656.624.143.26.215.548.215.865 0 .278-.05.508-.149.69a1.169 1.169 0 01-.386.431 1.797 1.797 0 01-.516.234v.063c.198.013.398.083.598.209.201.127.369.309.504.545.135.236.202.526.202.868 0 .325-.074.617-.221.877-.148.26-.381.466-.7.618-.319.152-.734.228-1.245.228h-2.343zm.785-.697h1.558c.513 0 .877-.099 1.093-.298a.955.955 0 00.326-.728c0-.22-.056-.422-.168-.608a1.215 1.215 0 00-.478-.45 1.5 1.5 0 00-.735-.171h-1.596v2.255zm0-2.939h1.457c.236 0 .45-.047.64-.139a1.12 1.12 0 00.456-.393c.114-.169.171-.367.171-.595a.99.99 0 00-.298-.726c-.199-.2-.513-.301-.944-.301h-1.482v2.154z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "273.391",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "v",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "230.688",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M249.569 153.698l1.926 5.46h.076l1.925-5.46h.824l-2.382 6.486h-.811l-2.381-6.486h.823z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "230.938",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "c",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "188.242",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M211.846 155.725h-.785a1.647 1.647 0 00-.662-1.027 1.801 1.801 0 00-.542-.266 2.161 2.161 0 00-.62-.088c-.393 0-.749.099-1.067.297-.317.199-.569.491-.757.878-.186.386-.279.86-.279 1.422 0 .561.093 1.035.279 1.422.188.386.44.678.757.877a1.98 1.98 0 001.067.298c.215 0 .422-.03.62-.089.199-.059.379-.147.542-.263a1.66 1.66 0 00.662-1.029h.785a2.604 2.604 0 01-.323.89c-.156.261-.35.484-.582.668-.233.181-.493.32-.783.415a2.913 2.913 0 01-.921.142 2.722 2.722 0 01-1.476-.405 2.78 2.78 0 01-1.017-1.153c-.247-.498-.37-1.089-.37-1.773 0-.684.123-1.276.37-1.774a2.787 2.787 0 011.017-1.153c.431-.27.923-.405 1.476-.405.327 0 .634.048.921.143.29.095.55.234.783.418.232.181.426.403.582.665.157.259.264.556.323.89z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "188.492",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "x",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "145.797",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M163.445 153.698l1.672 2.698h.051l1.672-2.698h.925l-2.04 3.243 2.04 3.243h-.925l-1.672-2.648h-.051l-1.672 2.648h-.925l2.091-3.243-2.091-3.243h.925z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "146.047",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "z",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "103.352",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M120.478 160.184v-.57l3.497-5.22h-3.535v-.696h4.472v.57l-3.496 5.219h3.534v.697h-4.472z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "103.602",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "shift",
                  children: [(0, s.jsx)("rect", {
                     width: "90.431",
                     height: "38.756",
                     x: "9.227",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M23.913 154.136a.996.996 0 00-.462-.748c-.27-.177-.602-.266-.995-.266-.287 0-.538.047-.753.139a1.2 1.2 0 00-.5.384.917.917 0 00-.178.554.79.79 0 00.123.446 1.1 1.1 0 00.323.308c.131.08.269.146.412.199.144.051.276.092.396.124l.659.177c.169.044.357.106.564.184.209.078.408.184.598.32.192.133.35.304.475.513.125.209.187.465.187.769 0 .351-.092.667-.276.95a1.877 1.877 0 01-.798.675c-.348.167-.771.25-1.27.25-.464 0-.866-.075-1.206-.225a1.925 1.925 0 01-.798-.627 1.788 1.788 0 01-.327-.934h.811c.021.245.104.447.247.608.146.158.33.276.551.355.224.076.465.114.722.114.3 0 .57-.049.808-.146.239-.099.428-.237.567-.412a.974.974 0 00.209-.62.76.76 0 00-.18-.526 1.335 1.335 0 00-.476-.33 5.007 5.007 0 00-.636-.221l-.798-.228c-.507-.146-.908-.354-1.204-.624-.295-.27-.443-.624-.443-1.061 0-.363.098-.68.294-.95.199-.273.465-.484.799-.634.335-.152.71-.228 1.124-.228.418 0 .79.075 1.114.225.326.148.583.351.773.608.192.258.294.55.304.878h-.76zm2.786 1.938V159h-.747v-6.486h.747v2.382h.064c.114-.252.285-.451.513-.599.23-.15.536-.225.918-.225.332 0 .622.067.871.2.25.131.442.332.58.605.139.27.209.614.209 1.032V159h-.748v-3.04c0-.387-.1-.685-.3-.897-.2-.213-.475-.319-.827-.319-.245 0-.465.051-.659.155a1.128 1.128 0 00-.456.453 1.47 1.47 0 00-.165.722zM31.221 159v-4.864h.747V159h-.747zm.38-5.675a.533.533 0 01-.377-.149.479.479 0 01-.155-.358.48.48 0 01.155-.358.533.533 0 01.377-.149c.146 0 .27.05.374.149a.474.474 0 01.158.358.474.474 0 01-.158.358.522.522 0 01-.374.149zm3.903.811v.633H32.88v-.633h2.623zM33.666 159v-5.536c0-.279.065-.511.196-.697.13-.185.3-.325.51-.418.209-.092.43-.139.662-.139a1.71 1.71 0 01.71.127l-.216.646a3.177 3.177 0 00-.159-.048.964.964 0 00-.26-.028c-.246 0-.425.062-.535.187-.107.124-.161.307-.161.548V159h-.747zm5-4.864v.633h-2.521v-.633h2.52zm-1.787-1.166h.748v4.637c0 .211.03.369.091.475a.479.479 0 00.241.209c.1.033.204.05.314.05.082 0 .15-.004.202-.012l.127-.026.152.672a1.573 1.573 0 01-.557.088 1.5 1.5 0 01-.621-.136 1.235 1.235 0 01-.5-.415c-.131-.186-.197-.42-.197-.703v-4.839z"
                  }), (0, s.jsx)("rect", {
                     width: "89.931",
                     height: "38.256",
                     x: "9.477",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "k",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "382.023",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M399.252 117.736v-6.486h.785v3.218h.076l2.914-3.218h1.026l-2.724 2.926 2.724 3.56h-.95l-2.255-3.015-.811.912v2.103h-.785z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "382.273",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "j",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "339.578",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M361.191 111.25h.785v4.637c0 .413-.076.765-.228 1.054a1.55 1.55 0 01-.643.659c-.276.15-.602.225-.978.225-.355 0-.671-.065-.947-.193a1.555 1.555 0 01-.652-.558 1.52 1.52 0 01-.238-.858h.773c0 .184.045.344.136.481a.935.935 0 00.38.317c.16.076.343.114.548.114.226 0 .418-.047.576-.142a.897.897 0 00.361-.419c.085-.185.127-.412.127-.68v-4.637z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "339.828",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "h",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "297.133",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M315.461 117.736v-6.486h.786v2.888h3.458v-2.888h.785v6.486h-.785v-2.901h-3.458v2.901h-.786z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "297.383",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "g",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "254.68",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M277.429 113.277a2.305 2.305 0 00-.276-.573 1.769 1.769 0 00-.402-.437 1.682 1.682 0 00-.526-.276 2.1 2.1 0 00-.646-.095c-.384 0-.733.099-1.048.298-.315.198-.565.491-.751.877-.185.387-.278.861-.278 1.422 0 .562.094 1.036.282 1.422.188.386.442.679.763.877.321.199.682.298 1.083.298.372 0 .699-.079.982-.237.285-.161.506-.387.665-.678.16-.294.24-.639.24-1.036l.241.051h-1.951v-.697h2.47v.697c0 .534-.114.999-.342 1.393a2.36 2.36 0 01-.937.919c-.397.215-.853.323-1.368.323-.574 0-1.079-.135-1.514-.406a2.729 2.729 0 01-1.013-1.152c-.241-.499-.361-1.09-.361-1.774 0-.513.068-.974.206-1.384.139-.412.335-.762.589-1.051.253-.29.553-.511.899-.665a2.78 2.78 0 011.143-.232c.342 0 .661.052.957.156a2.575 2.575 0 011.38 1.102c.157.257.264.543.323.858h-.81z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "254.93",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "f",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "212.234",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M229.754 117.736v-6.486h3.889v.697h-3.103v2.191h2.812v.697h-2.812v2.901h-.786z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "212.484",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "d",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "169.789",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M190.215 117.736h-2.002v-6.486h2.09c.63 0 1.168.13 1.616.39.447.257.79.628 1.029 1.111.238.482.358 1.058.358 1.729 0 .676-.121 1.258-.361 1.745-.241.486-.591.86-1.052 1.122-.46.259-1.019.389-1.678.389zm-1.216-.697h1.165c.536 0 .981-.103 1.333-.31.353-.207.616-.501.789-.884.173-.382.26-.837.26-1.365 0-.523-.086-.974-.257-1.352a1.892 1.892 0 00-.766-.874c-.34-.205-.764-.307-1.27-.307h-1.254v5.092z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "170.039",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "s",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "127.344",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M148.176 112.872a.996.996 0 00-.462-.748c-.27-.177-.602-.266-.994-.266-.288 0-.539.047-.754.14a1.2 1.2 0 00-.501.383.918.918 0 00-.177.554.79.79 0 00.124.447c.084.122.192.224.323.307.131.08.268.146.411.199.144.051.276.092.396.124l.659.177c.169.044.357.106.564.184a2.6 2.6 0 01.598.32c.192.133.351.304.475.513.125.209.187.465.187.769 0 .351-.092.667-.275.95a1.882 1.882 0 01-.798.675c-.349.167-.772.25-1.27.25-.465 0-.867-.075-1.207-.225a1.921 1.921 0 01-.798-.627 1.785 1.785 0 01-.326-.934h.81c.022.245.104.448.247.608.146.158.33.277.551.355.224.076.465.114.723.114.299 0 .569-.049.807-.146.239-.099.428-.236.567-.412a.976.976 0 00.209-.62.762.762 0 00-.18-.526 1.324 1.324 0 00-.476-.329 4.833 4.833 0 00-.636-.222l-.798-.228c-.507-.146-.908-.354-1.204-.624-.295-.27-.443-.624-.443-1.061 0-.363.098-.68.295-.95.198-.272.464-.484.798-.633.335-.152.71-.229 1.124-.229.418 0 .79.075 1.115.225.325.148.582.351.772.608.193.258.294.55.304.878h-.76z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "127.594",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "a",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "84.891",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M102.538 117h-.823l2.381-6.486h.811l2.381 6.486h-.823l-1.938-5.46h-.051l-1.938 5.46zm.304-2.534h3.319v.697h-3.319v-.697z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "85.141",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "caps",
                  children: [(0, s.jsx)("rect", {
                     width: "71.976",
                     height: "38.756",
                     x: "9.227",
                     y: "94.122",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M25.545 112.541h-.786a1.634 1.634 0 00-.662-1.026 1.753 1.753 0 00-.541-.266 2.133 2.133 0 00-.62-.089c-.394 0-.75.099-1.068.298-.317.198-.57.49-.757.877-.186.386-.279.86-.279 1.422 0 .561.093 1.035.279 1.422.188.386.44.679.757.877.319.198.674.298 1.067.298.215 0 .422-.03.62-.089.2-.059.38-.147.542-.263a1.666 1.666 0 00.662-1.029h.786c-.06.331-.167.628-.323.89a2.433 2.433 0 01-1.365 1.083 2.916 2.916 0 01-.922.142 2.72 2.72 0 01-1.476-.405c-.43-.27-.77-.654-1.016-1.153-.247-.498-.37-1.089-.37-1.773 0-.684.123-1.275.37-1.774a2.78 2.78 0 011.016-1.152 2.714 2.714 0 011.476-.406c.327 0 .635.048.922.143.289.095.55.234.782.418.232.181.426.403.583.665a2.6 2.6 0 01.323.89zm2.599 4.573c-.308 0-.588-.058-.84-.174a1.45 1.45 0 01-.598-.51 1.439 1.439 0 01-.222-.811c0-.279.055-.505.165-.678a1.16 1.16 0 01.44-.411c.184-.1.387-.174.608-.222.224-.051.449-.091.675-.12.296-.038.535-.067.719-.086.186-.021.32-.056.405-.105.087-.048.13-.133.13-.253v-.025c0-.313-.085-.555-.257-.729-.168-.173-.425-.259-.77-.259-.356 0-.636.078-.838.234a1.385 1.385 0 00-.428.5l-.71-.253a1.7 1.7 0 01.508-.69c.213-.167.445-.283.696-.349.254-.067.503-.101.748-.101.156 0 .335.019.538.057.205.036.402.111.592.225.192.114.352.286.478.516.127.23.19.538.19.925V117h-.747v-.659h-.038c-.05.106-.135.219-.253.339a1.46 1.46 0 01-.472.307 1.808 1.808 0 01-.72.127zm.114-.672c.296 0 .545-.058.747-.174a1.184 1.184 0 00.621-1.029v-.684c-.032.038-.101.073-.209.104-.106.03-.228.056-.367.08a17.959 17.959 0 01-.716.095 2.83 2.83 0 00-.545.123.94.94 0 00-.405.25c-.102.11-.152.26-.152.45 0 .26.096.456.288.589.194.131.44.196.738.196zm3.48 2.382v-6.689h.722v.773h.088c.055-.084.131-.192.228-.323.1-.133.241-.251.425-.355.185-.105.437-.158.754-.158.41 0 .77.102 1.083.307.312.205.556.495.731.871.175.376.263.819.263 1.33 0 .515-.088.962-.263 1.34a2.073 2.073 0 01-.728.874c-.31.205-.668.307-1.074.307-.312 0-.563-.052-.75-.155a1.397 1.397 0 01-.434-.358 4.703 4.703 0 01-.235-.336h-.063v2.572h-.747zm.734-4.256c0 .367.054.691.162.972.108.278.265.497.472.655.207.157.46.235.76.235.312 0 .573-.083.782-.247.211-.167.37-.391.475-.672.108-.283.162-.597.162-.943a2.55 2.55 0 00-.159-.925 1.43 1.43 0 00-.472-.656c-.209-.162-.472-.244-.788-.244-.304 0-.56.077-.767.232a1.387 1.387 0 00-.468.639c-.106.273-.159.59-.159.954zm8.146-1.343l-.672.19a1.236 1.236 0 00-.186-.326.896.896 0 00-.33-.266 1.191 1.191 0 00-.535-.105c-.298 0-.546.069-.744.206-.197.135-.295.307-.295.516 0 .186.068.333.203.44.135.108.346.198.633.27l.722.177c.435.105.76.267.972.484.214.216.32.493.32.833 0 .279-.08.528-.24.748-.159.219-.38.392-.665.519-.285.127-.617.19-.995.19-.496 0-.907-.108-1.232-.323-.325-.215-.53-.53-.617-.944l.71-.177c.067.262.194.458.382.589.19.131.438.196.745.196.348 0 .625-.074.83-.221.206-.15.31-.33.31-.539 0-.169-.06-.31-.178-.424-.118-.116-.3-.203-.544-.26l-.811-.19c-.446-.105-.773-.269-.982-.491a1.186 1.186 0 01-.31-.839c0-.274.077-.517.23-.728.157-.211.37-.377.638-.498.27-.12.576-.18.918-.18.481 0 .86.106 1.134.317.276.211.473.489.589.836z"
                  }), (0, s.jsx)("rect", {
                     width: "71.476",
                     height: "38.256",
                     x: "9.477",
                     y: "94.372",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "[",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "506.594",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M523.792 66.356v-.393c.353 0 .599-.074.738-.221.141-.148.212-.395.212-.741v-1.014c0-.291.027-.544.082-.757.057-.213.149-.39.276-.529a1.14 1.14 0 01.507-.31 2.59 2.59 0 01.782-.101v.62c-.245 0-.438.038-.58.114a.639.639 0 00-.297.355 1.821 1.821 0 00-.086.608v1.267c0 .165-.022.314-.066.45a.741.741 0 01-.238.348 1.224 1.224 0 01-.497.225 3.562 3.562 0 01-.833.079zm2.597 4.041a2.59 2.59 0 01-.782-.101 1.133 1.133 0 01-.507-.31 1.248 1.248 0 01-.276-.53 3.06 3.06 0 01-.082-.756v-1.014c0-.346-.071-.593-.212-.74-.139-.149-.385-.223-.738-.223v-.392c.342 0 .62.026.833.079.215.053.381.128.497.225a.74.74 0 01.238.348c.044.135.066.285.066.45V68.7c0 .247.029.45.086.608a.639.639 0 00.297.351c.142.078.335.117.58.117v.621zm-2.597-3.674v-.76h.747v.76h-.747zm.722 16.094v-8.108h1.875v.62h-1.166v6.867h1.166v.62h-1.875z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "506.844",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "p",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "464.148",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M481.447 75.29v-6.487h2.192c.508 0 .924.092 1.247.276.326.181.566.428.723.738.156.31.234.656.234 1.039a2.3 2.3 0 01-.234 1.041 1.748 1.748 0 01-.716.748c-.323.184-.737.275-1.242.275h-1.57v-.696h1.545c.348 0 .628-.06.839-.18.211-.121.364-.284.459-.489.098-.206.146-.44.146-.7 0-.26-.048-.491-.146-.696a1.04 1.04 0 00-.462-.482c-.213-.118-.496-.177-.849-.177h-1.38v5.79h-.786z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "464.398",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "o",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "421.703",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M444.799 72.046c0 .684-.124 1.276-.371 1.774a2.784 2.784 0 01-1.016 1.153 2.72 2.72 0 01-1.476.405 2.72 2.72 0 01-1.476-.405 2.777 2.777 0 01-1.016-1.153c-.247-.498-.371-1.09-.371-1.774 0-.684.124-1.275.371-1.773a2.777 2.777 0 011.016-1.153 2.72 2.72 0 011.476-.405 2.72 2.72 0 011.476.405c.43.27.769.655 1.016 1.153s.371 1.09.371 1.773zm-.76 0c0-.561-.094-1.035-.282-1.422-.186-.386-.438-.678-.757-.877a1.963 1.963 0 00-1.064-.297c-.393 0-.749.099-1.067.297-.317.199-.569.491-.757.877-.186.387-.279.86-.279 1.422 0 .562.093 1.036.279 1.422.188.387.44.68.757.878.318.198.674.297 1.067.297.393 0 .747-.099 1.064-.297.319-.199.571-.491.757-.878.188-.386.282-.86.282-1.422z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "421.953",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "i",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "379.258",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M399.727 68.803v6.486h-.786v-6.486h.786z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "379.508",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "u",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "336.805",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M358.776 68.803h.785v4.295c0 .443-.104.839-.313 1.187-.207.347-.5.62-.878.82-.378.2-.821.298-1.33.298-.509 0-.952-.099-1.33-.297a2.216 2.216 0 01-.88-.82 2.28 2.28 0 01-.311-1.188v-4.295h.786v4.231c0 .317.069.599.209.846a1.5 1.5 0 00.595.58c.26.139.57.209.931.209.361 0 .672-.07.931-.21.26-.14.458-.334.596-.579.139-.247.209-.529.209-.846v-4.23z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "337.055",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "y",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "294.359",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M310.349 68.803h.899l1.799 3.028h.076l1.799-3.028h.899l-2.344 3.813v2.673h-.785v-2.673l-2.343-3.813z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "294.609",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "t",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "251.914",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M268.218 69.5v-.697h4.865v.697h-2.04v5.79h-.785V69.5h-2.04z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "252.164",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "r",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "209.469",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M226.136 75.29v-6.487h2.192c.507 0 .922.087 1.248.26.325.171.565.406.722.706.156.3.234.641.234 1.023 0 .382-.078.721-.234 1.017a1.656 1.656 0 01-.719.697c-.323.166-.736.25-1.239.25h-1.773v-.71h1.748c.346 0 .625-.05.836-.152a.963.963 0 00.463-.43c.097-.188.145-.412.145-.672a1.5 1.5 0 00-.145-.68 1 1 0 00-.466-.45c-.213-.108-.495-.162-.846-.162h-1.38v5.79h-.786zm3.053-2.914l1.596 2.913h-.912l-1.571-2.913h.887z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "209.719",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "e",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "167.016",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M183.87 75.29v-6.487h3.915v.697h-3.129v2.192h2.926v.696h-2.926v2.205h3.179v.696h-3.965z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "167.266",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "w",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "124.57",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M142.606 75.29l-1.774-6.487h.798l1.356 5.283h.063l1.381-5.283h.887l1.381 5.283h.063l1.355-5.283h.798l-1.773 6.486h-.811l-1.431-5.168h-.051l-1.431 5.168h-.811z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "124.82",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "q",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "82.125",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M101.245 72.973h.861l.723.95.19.254 1.076 1.431h-.861l-.709-.95-.178-.24-1.102-1.445zm3.116-1.216c0 .684-.123 1.275-.37 1.773a2.78 2.78 0 01-1.017 1.153c-.43.27-.922.406-1.476.406a2.714 2.714 0 01-1.475-.406 2.779 2.779 0 01-1.017-1.153c-.247-.498-.37-1.089-.37-1.773 0-.684.123-1.275.37-1.773a2.779 2.779 0 011.017-1.153c.43-.27.922-.406 1.475-.406.554 0 1.046.136 1.476.406.431.27.77.654 1.017 1.153.247.498.37 1.089.37 1.773zm-.76 0c0-.562-.094-1.035-.282-1.422a2.04 2.04 0 00-.756-.877 1.966 1.966 0 00-1.065-.298c-.392 0-.748.1-1.067.298-.317.198-.569.49-.757.877-.186.387-.278.86-.278 1.422 0 .562.093 1.036.278 1.422.188.386.44.679.757.877a1.98 1.98 0 001.067.298c.393 0 .748-.1 1.065-.298a2.04 2.04 0 00.756-.877c.188-.386.282-.86.282-1.422z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "82.375",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "tab",
                  children: [(0, s.jsx)("rect", {
                     width: "69.207",
                     height: "38.756",
                     x: "9.227",
                     y: "51.675",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M19.962 69.21v-.696h4.865v.697h-2.04V75h-.785v-5.79h-2.04zm6.745 5.904c-.308 0-.588-.058-.839-.174a1.44 1.44 0 01-.599-.51 1.438 1.438 0 01-.221-.81c0-.28.055-.505.164-.678.11-.176.257-.313.44-.412.184-.1.387-.173.609-.222a7.8 7.8 0 01.674-.12c.296-.038.535-.067.72-.086.185-.02.32-.056.404-.104.087-.049.13-.133.13-.254v-.025c0-.312-.085-.555-.256-.728-.17-.174-.426-.26-.77-.26-.357 0-.636.078-.839.234a1.384 1.384 0 00-.428.5l-.709-.253c.127-.295.296-.525.507-.69.213-.167.445-.283.697-.348a2.87 2.87 0 01.747-.102c.156 0 .336.02.538.057.205.036.402.111.593.225.192.114.351.286.478.516.126.23.19.539.19.925V75h-.748v-.659h-.038a1.31 1.31 0 01-.253.34 1.46 1.46 0 01-.472.306 1.817 1.817 0 01-.719.127zm.114-.671c.296 0 .545-.058.748-.175a1.186 1.186 0 00.62-1.029v-.684c-.031.038-.101.073-.209.105-.105.03-.228.056-.367.079a16.796 16.796 0 01-.716.095 2.853 2.853 0 00-.544.123.94.94 0 00-.406.25c-.101.11-.152.26-.152.45 0 .26.096.456.288.59.195.13.44.196.738.196zm3.581.557v-6.486h.748v2.394h.063a6.4 6.4 0 01.228-.323c.1-.133.24-.251.424-.354.186-.106.437-.159.754-.159.41 0 .77.103 1.083.307.313.205.556.495.732.871.175.376.263.82.263 1.33 0 .516-.088.962-.263 1.34a2.075 2.075 0 01-.729.874 1.9 1.9 0 01-1.073.307c-.313 0-.563-.051-.75-.155a1.393 1.393 0 01-.435-.358 4.795 4.795 0 01-.234-.335h-.089V75h-.722zm.735-2.432c0 .367.054.691.162.972.107.279.264.497.471.656.207.156.46.234.76.234.313 0 .574-.082.783-.247.21-.167.37-.39.475-.672.107-.282.161-.597.161-.943 0-.342-.053-.65-.158-.925a1.43 1.43 0 00-.472-.656c-.209-.162-.472-.243-.789-.243-.304 0-.56.077-.766.23a1.388 1.388 0 00-.469.64c-.105.273-.158.59-.158.954z"
                  }), (0, s.jsx)("rect", {
                     width: "68.707",
                     height: "38.256",
                     x: "9.477",
                     y: "51.925",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "escape",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "9.227",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M21.8 32v-6.486h3.914v.697h-3.129v2.191h2.927v.697h-2.927v2.204h3.18V32H21.8zm8.674-3.775l-.671.19a1.248 1.248 0 00-.187-.326.908.908 0 00-.33-.266 1.196 1.196 0 00-.535-.105c-.297 0-.545.069-.744.206-.196.135-.294.307-.294.516a.53.53 0 00.202.44c.135.108.347.198.634.27l.722.177c.435.106.759.267.972.485.213.215.32.493.32.832 0 .28-.08.528-.24.748-.16.22-.38.393-.666.52-.285.126-.616.19-.994.19-.497 0-.907-.108-1.232-.324-.325-.215-.531-.53-.618-.943l.71-.178c.067.262.195.458.383.59.19.13.438.196.744.196.348 0 .625-.074.83-.222.207-.15.31-.33.31-.538 0-.17-.059-.31-.177-.425-.118-.116-.3-.203-.545-.26l-.81-.19c-.446-.105-.773-.269-.982-.49a1.189 1.189 0 01-.31-.84c0-.274.076-.517.23-.728.157-.211.369-.377.637-.497.27-.12.576-.18.918-.18.482 0 .86.105 1.134.316.277.211.473.49.59.836zm3.19 3.876c-.456 0-.849-.107-1.178-.323a2.105 2.105 0 01-.76-.89 3.016 3.016 0 01-.266-1.295c0-.494.09-.93.272-1.308.184-.38.44-.677.767-.89a2.058 2.058 0 011.152-.323c.342 0 .65.064.925.19.275.127.5.304.675.532.175.228.284.494.326.798h-.747a1.158 1.158 0 00-.38-.589c-.195-.173-.457-.26-.786-.26-.291 0-.547.077-.766.229a1.48 1.48 0 00-.51.636 2.36 2.36 0 00-.18.96c0 .376.058.703.177.981.12.28.289.496.506.65.22.154.477.23.773.23.194 0 .37-.033.529-.1a1.092 1.092 0 00.637-.748h.747a1.731 1.731 0 01-.97 1.32c-.27.134-.584.2-.943.2z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "9.477",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "1",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "51.984",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M72.15 20l-.064 4.662h-.734L71.288 20h.862zm-.43 6.537a.55.55 0 01-.403-.168.549.549 0 01-.168-.402c0-.156.056-.29.168-.402a.549.549 0 01.402-.168c.156 0 .29.056.402.168a.549.549 0 01.168.402.592.592 0 01-.285.494.543.543 0 01-.285.076zm.956 5.883v6.486h-.786v-5.663h-.038l-1.583 1.052v-.798l1.621-1.077h.786z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "52.234",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "2",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "94.742",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M115.104 28.197c-.646 0-1.217-.09-1.713-.267a3.252 3.252 0 01-1.251-.775 3.309 3.309 0 01-.766-1.258c-.173-.496-.26-1.064-.26-1.703 0-.62.088-1.172.263-1.66a3.39 3.39 0 01.769-1.241 3.347 3.347 0 011.229-.783c.484-.18 1.031-.269 1.641-.269.593 0 1.112.097 1.558.291a3.28 3.28 0 011.799 1.888c.152.41.228.832.228 1.267 0 .306-.015.616-.045.93a3.504 3.504 0 01-.186.869 1.412 1.412 0 01-.441.633c-.196.16-.462.24-.798.24-.148 0-.31-.023-.487-.069a1.275 1.275 0 01-.472-.231.638.638 0 01-.244-.434h-.038a1.126 1.126 0 01-.643.611 1.528 1.528 0 01-.611.086 1.652 1.652 0 01-.726-.184 1.572 1.572 0 01-.525-.462 2.164 2.164 0 01-.317-.681c-.07-.26-.104-.54-.104-.84 0-.285.042-.545.126-.782.085-.236.202-.443.352-.62a1.825 1.825 0 011.194-.624c.211-.021.403-.012.576.028.173.038.316.096.428.174a.5.5 0 01.212.254h.038v-.355h.671v2.863c0 .177.05.334.149.469a.505.505 0 00.434.202c.215 0 .38-.074.494-.221.116-.148.195-.376.237-.684.045-.309.067-.704.067-1.185 0-.283-.039-.561-.117-.836a2.74 2.74 0 00-.349-.776 2.536 2.536 0 00-.585-.637 2.724 2.724 0 00-.833-.43 3.413 3.413 0 00-1.08-.159c-.496 0-.941.078-1.334.232a2.67 2.67 0 00-.997.668c-.272.291-.48.646-.624 1.064a4.408 4.408 0 00-.212 1.419c0 .538.071 1.016.212 1.434.144.419.355.771.633 1.058a2.71 2.71 0 001.042.653c.414.15.891.224 1.432.224.232 0 .461-.022.687-.066a6 6 0 00.599-.146c.173-.053.297-.092.373-.117l.178.583c-.131.055-.302.11-.513.165a6.35 6.35 0 01-.672.136 4.512 4.512 0 01-.678.053zm-.367-2.521c.283 0 .512-.057.687-.171a.967.967 0 00.383-.517c.081-.23.121-.52.121-.87 0-.355-.045-.632-.133-.83a.797.797 0 00-.393-.418 1.515 1.515 0 00-.64-.12c-.24 0-.446.063-.617.19a1.204 1.204 0 00-.39.5 1.714 1.714 0 00-.133.677c0 .27.036.525.108.764.072.236.189.428.351.576.163.146.382.219.656.219zm-3.023 13.23v-.57l2.141-2.344c.251-.274.458-.513.62-.716a2.63 2.63 0 00.361-.576c.081-.181.121-.372.121-.57a1.051 1.051 0 00-.608-.979 1.438 1.438 0 00-.634-.136 1.32 1.32 0 00-.652.155 1.072 1.072 0 00-.428.428 1.341 1.341 0 00-.149.646h-.747a1.817 1.817 0 01.979-1.672c.304-.16.645-.24 1.023-.24.38 0 .716.08 1.01.24.293.16.523.377.69.65.167.271.25.574.25.908 0 .239-.043.472-.129.7a3.12 3.12 0 01-.444.757c-.209.276-.499.614-.871 1.013l-1.456 1.558v.051h3.014v.697h-4.091z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "94.992",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "3",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "137.492",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M156.931 26.486L157.995 20h.634l-1.064 6.486h-.634zm-2.951-1.799l.101-.633h4.839l-.101.634h-4.839zm.671 1.8L155.715 20h.633l-1.064 6.486h-.633zm-.291-4.054l.101-.634h4.839l-.101.634h-4.839zm2.304 16.561a2.76 2.76 0 01-1.118-.215 1.912 1.912 0 01-.775-.599 1.61 1.61 0 01-.311-.896h.798a.94.94 0 00.216.542c.126.15.292.266.497.348.205.083.432.124.681.124.278 0 .525-.049.741-.146.215-.097.384-.232.506-.405.123-.173.184-.374.184-.602a1.13 1.13 0 00-.177-.63 1.175 1.175 0 00-.52-.431 2.023 2.023 0 00-.836-.155h-.519v-.697h.519c.258 0 .484-.046.678-.14a1.053 1.053 0 00.627-.988c0-.219-.048-.41-.146-.573a.996.996 0 00-.411-.38 1.332 1.332 0 00-.621-.136 1.62 1.62 0 00-.633.124c-.197.08-.357.197-.482.351a.915.915 0 00-.202.551h-.76a1.54 1.54 0 01.307-.893c.192-.257.443-.458.753-.602a2.44 2.44 0 011.03-.215c.401 0 .745.081 1.032.244.287.16.508.373.662.637.154.263.231.548.231.855 0 .365-.096.676-.288.934-.19.258-.449.436-.776.535v.05c.41.068.73.242.96.523.23.279.345.624.345 1.036 0 .352-.096.67-.288.95a1.96 1.96 0 01-.779.659c-.33.16-.704.24-1.125.24z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "137.742",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "4",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "180.25",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M199.288 27.297V19.19h.519v8.107h-.519zm1.748-5.675a.993.993 0 00-.463-.747c-.27-.178-.601-.267-.994-.267-.287 0-.538.047-.754.14-.213.093-.38.22-.5.383a.92.92 0 00-.178.554c0 .173.042.322.124.447.084.122.192.225.323.307.131.08.268.147.412.2.143.05.275.091.396.123l.658.177c.169.045.357.106.564.184.209.078.409.185.599.32.192.133.35.304.475.513.124.209.186.466.186.77 0 .35-.091.667-.275.95a1.88 1.88 0 01-.798.674c-.348.167-.772.25-1.27.25-.465 0-.867-.075-1.207-.225a1.926 1.926 0 01-.798-.627 1.787 1.787 0 01-.326-.934h.811c.021.245.103.448.247.608.146.159.329.277.551.355.224.076.464.114.722.114.3 0 .569-.049.808-.146.238-.099.427-.236.566-.411a.972.972 0 00.209-.621c0-.216-.06-.39-.18-.526a1.324 1.324 0 00-.475-.33 4.968 4.968 0 00-.637-.22l-.798-.229c-.506-.146-.908-.354-1.203-.624-.296-.27-.444-.624-.444-1.06 0-.364.099-.68.295-.95a1.95 1.95 0 01.798-.634c.336-.152.71-.228 1.124-.228.418 0 .79.075 1.115.225.325.147.583.35.773.608.192.257.293.55.304.877h-.76zm-3.831 15.954v-.646l2.851-4.51h.468v1h-.316l-2.154 3.408v.05h3.838v.698h-4.687zm3.053 1.33v-6.487h.748v6.487h-.748z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "180.5",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "5",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "223.008",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M242.878 25.27v-.342c0-.236.049-.453.146-.649.099-.198.243-.357.431-.475.19-.12.42-.18.69-.18.274 0 .505.06.69.18.186.118.327.277.422.475.095.196.142.413.142.65v.341c0 .237-.049.454-.146.653a1.149 1.149 0 01-.424.475 1.25 1.25 0 01-.684.177c-.275 0-.506-.06-.694-.177a1.17 1.17 0 01-.427-.475 1.466 1.466 0 01-.146-.653zm.646-.342v.342c0 .197.047.373.14.53.092.153.253.23.481.23.222 0 .378-.077.469-.23.093-.157.139-.333.139-.53v-.342c0-.196-.044-.371-.133-.526-.089-.156-.247-.234-.475-.234-.222 0-.381.078-.478.235a.982.982 0 00-.143.525zm-3.876-3.37v-.341c0-.237.048-.453.146-.65.099-.198.242-.357.43-.475.19-.12.42-.18.691-.18.274 0 .504.06.69.18.186.119.326.277.421.475.095.197.143.413.143.65v.342c0 .236-.049.453-.146.652a1.149 1.149 0 01-.424.475 1.25 1.25 0 01-.684.177 1.28 1.28 0 01-.694-.177 1.17 1.17 0 01-.427-.475 1.452 1.452 0 01-.146-.652zm.646-.341v.342c0 .196.046.372.139.528.093.155.254.232.482.232.221 0 .378-.077.468-.232.093-.156.14-.332.14-.528v-.343a1.04 1.04 0 00-.133-.525c-.089-.156-.247-.235-.475-.235-.222 0-.381.079-.479.235a.981.981 0 00-.142.526zm-.405 5.27L244.348 20h.722l-4.459 6.486h-.722zm2.542 12.507c-.372 0-.707-.074-1.004-.221a1.859 1.859 0 01-.716-.608 1.662 1.662 0 01-.295-.88h.761c.029.293.162.536.399.728.238.19.523.285.855.285a1.324 1.324 0 001.2-.7c.12-.22.18-.468.18-.744 0-.283-.062-.536-.186-.757a1.379 1.379 0 00-1.245-.726 2.026 2.026 0 00-.611.092c-.209.062-.381.14-.516.238l-.735-.089.393-3.192h3.369v.697h-2.711l-.228 1.912h.038c.133-.105.3-.193.501-.262.2-.07.409-.105.627-.105a1.992 1.992 0 011.795 1.058c.18.327.27.7.27 1.12 0 .415-.093.784-.279 1.11a2.04 2.04 0 01-.76.766 2.172 2.172 0 01-1.102.278z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "223.258",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "6",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "265.766",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M285.269 20.558h.228v.317h-.228v-.317zm-1.622 2.381l1.305-2.736h.862l1.304 2.736h-.747l-1.026-2.191h.076l-1.014 2.191h-.76zm.817 16.055a2.427 2.427 0 01-.798-.152 1.905 1.905 0 01-.728-.49c-.22-.233-.396-.546-.529-.941-.133-.397-.2-.895-.2-1.495 0-.574.054-1.083.162-1.526a3.46 3.46 0 01.469-1.125 2.1 2.1 0 01.741-.696 2.02 2.02 0 01.985-.238c.363 0 .686.073.969.219.285.143.517.344.696.601.18.258.296.555.349.89h-.773a1.434 1.434 0 00-.418-.725c-.207-.192-.481-.288-.823-.288-.503 0-.899.218-1.188.656-.287.437-.432 1.05-.434 1.84h.051a1.89 1.89 0 011.596-.862c.371 0 .711.093 1.02.279.308.183.555.438.741.763.186.323.278.694.278 1.112 0 .4-.089.768-.269 1.102a2.048 2.048 0 01-.757.791c-.323.195-.703.29-1.14.285zm0-.696c.266 0 .505-.067.716-.2.213-.133.381-.311.504-.535.124-.224.186-.473.186-.747a1.5 1.5 0 00-.18-.732 1.375 1.375 0 00-.491-.529 1.297 1.297 0 00-.709-.196c-.201 0-.388.04-.561.12a1.448 1.448 0 00-.456.323 1.56 1.56 0 00-.304.472 1.494 1.494 0 00.57 1.818c.213.137.455.206.725.206z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "266.016",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "7",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "308.516",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M326.989 26.575c-.427 0-.794-.078-1.102-.234a1.734 1.734 0 01-.713-.643 1.76 1.76 0 01-.25-.934c0-.27.057-.51.171-.72a2.22 2.22 0 01.478-.585c.205-.182.441-.363.707-.545l.937-.697c.184-.12.33-.249.44-.386.112-.137.168-.317.168-.538 0-.165-.073-.325-.218-.479a.74.74 0 00-.567-.23.768.768 0 00-.437.126.9.9 0 00-.295.316.8.8 0 00-.104.393.99.99 0 00.123.463c.085.154.191.312.32.475l.405.494 2.977 3.635h-.899l-2.458-2.964-.62-.747a3.56 3.56 0 01-.444-.662 1.543 1.543 0 01-.165-.706c0-.292.065-.547.194-.767.131-.221.313-.394.548-.516.236-.125.513-.187.829-.187.325 0 .605.063.84.19.234.125.414.29.541.497.127.205.19.428.19.669 0 .31-.077.58-.231.807-.154.228-.364.44-.63.637l-1.292.962c-.292.216-.489.425-.593.627-.103.203-.155.349-.155.438 0 .202.053.391.159.566.105.176.254.317.446.425.192.107.417.161.675.161.245 0 .483-.051.715-.155.233-.105.443-.258.631-.456.19-.198.34-.437.449-.716a2.5 2.5 0 00.168-.94h.722c0 .43-.049.782-.149 1.054a2.252 2.252 0 01-.335.64c-.125.154-.225.27-.301.345a1.137 1.137 0 00-.07.095 1.17 1.17 0 01-.07.095 1.91 1.91 0 01-.791.526 2.794 2.794 0 01-.944.171zm-1.342 12.331l2.901-5.739v-.05h-3.344v-.697h4.155v.735l-2.889 5.75h-.823z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "308.766",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "8",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "351.273",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M370.891 23.649l.051-1.394-1.178.748-.304-.532 1.241-.646-1.241-.646.304-.532 1.178.747-.051-1.394h.608l-.05 1.394 1.178-.747.304.532-1.242.646 1.242.646-.304.532-1.178-.748.05 1.394h-.608zm-.655 15.345c-.435 0-.82-.077-1.153-.23a1.887 1.887 0 01-.776-.644 1.615 1.615 0 01-.276-.937 1.723 1.723 0 01.612-1.346c.192-.158.406-.259.642-.3v-.039a1.254 1.254 0 01-.741-.522 1.589 1.589 0 01-.272-.922c-.002-.33.081-.624.25-.884a1.76 1.76 0 01.697-.614c.298-.15.637-.225 1.017-.225.375 0 .711.075 1.007.225.295.15.527.355.696.614.171.26.258.555.26.884a1.604 1.604 0 01-.282.922 1.247 1.247 0 01-.731.522v.038c.234.042.445.143.633.301a1.757 1.757 0 01.621 1.346c-.002.35-.097.663-.285.937a1.893 1.893 0 01-.776.643c-.33.154-.711.231-1.143.231zm0-.696c.293 0 .546-.048.76-.143.213-.095.378-.229.494-.402.116-.173.175-.376.177-.608a1.162 1.162 0 00-.19-.65 1.295 1.295 0 00-.51-.443 1.6 1.6 0 00-.731-.161c-.277 0-.524.054-.742.161a1.285 1.285 0 00-.509.444 1.14 1.14 0 00-.181.649c-.002.232.054.435.168.608.116.173.282.307.497.402.216.095.471.143.767.143zm0-3.079c.232 0 .438-.046.617-.139.182-.093.324-.223.428-.39.103-.166.156-.361.158-.585a1.084 1.084 0 00-.155-.574 1.013 1.013 0 00-.421-.38 1.375 1.375 0 00-.627-.136 1.42 1.42 0 00-.637.136.978.978 0 00-.421.38 1.062 1.062 0 00-.146.574 1.09 1.09 0 00.149.586c.103.166.246.296.428.39.181.092.39.138.627.138z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "351.523",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "9",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "394.031",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M412.381 23.75c0-.798.104-1.532.311-2.2a6.846 6.846 0 01.893-1.854h.659a4.08 4.08 0 00-.428.773 7.495 7.495 0 00-.345 1.004 9.768 9.768 0 00-.235 1.128 8.346 8.346 0 00-.082 1.15c0 .502.049 1.011.146 1.529.097.517.228.997.393 1.44.164.444.348.805.551 1.084h-.659a6.857 6.857 0 01-.893-1.85 7.452 7.452 0 01-.311-2.204zm.698 8.581c.266.002.532.053.798.152.266.1.509.264.728.494.22.228.396.54.529.934.133.395.2.89.2 1.486 0 .576-.055 1.088-.165 1.536a3.491 3.491 0 01-.469 1.127c-.203.306-.45.539-.741.697a2.008 2.008 0 01-.982.237 2.13 2.13 0 01-.972-.215 1.912 1.912 0 01-.697-.605 2.116 2.116 0 01-.345-.902h.773c.07.297.208.543.415.738.209.192.484.288.826.288.501 0 .896-.219 1.185-.656.291-.437.437-1.054.437-1.853h-.051c-.118.178-.258.33-.421.46a1.857 1.857 0 01-1.175.402 1.97 1.97 0 01-1.023-.276 2.094 2.094 0 01-.741-.763 2.223 2.223 0 01-.276-1.115c0-.397.089-.76.267-1.09.179-.33.43-.594.753-.79.325-.197.708-.292 1.147-.286zm0 .697a1.33 1.33 0 00-.719.2c-.211.13-.379.308-.504.532a1.505 1.505 0 00-.183.737c0 .27.059.517.177.738.12.22.284.395.491.526.209.129.446.193.712.193a1.349 1.349 0 001.014-.443c.131-.14.233-.297.307-.472a1.445 1.445 0 00-.073-1.267 1.456 1.456 0 00-.5-.538 1.295 1.295 0 00-.722-.206z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "394.281",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "0",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "436.789",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M456.618 23.75c0 .798-.105 1.533-.314 2.204a6.79 6.79 0 01-.89 1.85h-.658a3.97 3.97 0 00.424-.773c.133-.304.249-.638.348-1a9.118 9.118 0 00.317-2.28c0-.503-.049-1.013-.146-1.53a8.856 8.856 0 00-.392-1.442 4.563 4.563 0 00-.551-1.083h.658a6.78 6.78 0 01.89 1.853c.209.67.314 1.403.314 2.201zm-.587 15.244c-.477 0-.883-.13-1.219-.39-.336-.26-.592-.64-.77-1.136-.177-.498-.266-1.1-.266-1.805 0-.701.089-1.3.266-1.796.18-.498.437-.878.773-1.14.338-.264.743-.396 1.216-.396s.877.132 1.213.396c.338.262.596.642.773 1.14.179.496.269 1.095.269 1.796 0 .705-.089 1.307-.266 1.805-.177.496-.434.875-.769 1.137-.336.26-.743.39-1.22.39zm0-.696c.473 0 .841-.228 1.102-.684.262-.456.393-1.107.393-1.951 0-.562-.06-1.04-.18-1.435-.119-.395-.29-.696-.514-.902a1.13 1.13 0 00-.801-.31c-.468 0-.835.23-1.099.693-.264.46-.396 1.111-.396 1.954 0 .561.06 1.039.178 1.431.118.393.288.692.51.896.223.205.493.308.807.308z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "437.039",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "-",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "479.547",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M501.923 26.486v.697h-4.053v-.697h4.053zm-.605 9.291v.697h-2.837v-.697h2.837z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "479.797",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "=",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "522.297",
                     y: "9.228",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M540.559 26.043v-4.18h.709v4.18h-.709zm-1.736-1.735v-.71h4.181v.71h-4.181zm.14 11.469v-.684h3.902v.684h-3.902zm0 1.875v-.684h3.902v.684h-3.902z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "522.547",
                     y: "9.478",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "fn",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "660.695",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M676.086 159v-6.486h3.889v.697h-3.104v2.191h2.813v.697h-2.813V159h-.785zm5.828-2.926V159h-.747v-4.864h.722v.76h.063c.114-.247.287-.446.519-.596.233-.152.532-.228.9-.228.329 0 .617.068.864.203.247.133.44.336.577.608.137.27.206.612.206 1.026V159h-.748v-3.04c0-.382-.099-.68-.297-.893-.199-.216-.471-.323-.818-.323-.238 0-.451.051-.639.155a1.099 1.099 0 00-.44.453 1.49 1.49 0 00-.162.722z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "660.945",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "arrowright",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "660.695",
                     y: "179.016",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M677.256 202.811v-8.108l6.891 4.054-6.891 4.054z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "660.945",
                     y: "179.266",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "arrowdown",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "618.25",
                     y: "179.016",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M641.811 195.258l-4.054 6.892-4.054-6.892h8.108z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "618.5",
                     y: "179.266",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "arrowleft",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "575.805",
                     y: "179.016",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M598.742 202.811l-6.892-4.054 6.892-4.054v8.108z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "576.055",
                     y: "179.266",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), "windows" === t ? (0, s.jsxs)("g", {
                  children: [(0, s.jsxs)("g", {
                     "data-key": "meta",
                     children: [(0, s.jsx)("rect", {
                        x: "57",
                        y: "179",
                        width: "44",
                        height: "39",
                        rx: "3",
                        fill: "#fff",
                        fillOpacity: "0.08"
                     }), (0, s.jsx)("path", {
                        d: "M78.766 193.5H74.5V197.766H78.766V193.5Z",
                        fill: "white"
                     }), (0, s.jsx)("path", {
                        d: "M83.5 193.5H79.234V197.766H83.5V193.5Z",
                        fill: "white"
                     }), (0, s.jsx)("path", {
                        d: "M78.766 198.234H74.5V202.5H78.766V198.234Z",
                        fill: "white"
                     }), (0, s.jsx)("path", {
                        d: "M83.5 198.234H79.234V202.5H83.5V198.234Z",
                        fill: "white"
                     }), (0, s.jsx)("rect", {
                        x: "57.25",
                        y: "179.25",
                        width: "43.5",
                        height: "38.5",
                        rx: "2.75",
                        stroke: "url(#keyboard-stroke)",
                        "stroke-opacity": "0.1",
                        "stroke-width": "0.5"
                     })]
                  }), (0, s.jsxs)("g", {
                     "data-key": "alt",
                     children: [(0, s.jsx)("rect", {
                        x: "105",
                        y: "179",
                        width: "44",
                        height: "39",
                        rx: "3",
                        fill: "#fff",
                        fillOpacity: "0.08"
                     }), (0, s.jsx)("path", {
                        d: "M122.36 202H121.537L123.918 195.514H124.729L127.11 202H126.287L124.349 196.54H124.298L122.36 202ZM122.664 199.466H125.983V200.163H122.664V199.466ZM128.767 195.514V202H128.019V195.514H128.767ZM132.251 197.136V197.769H129.73V197.136H132.251ZM130.465 195.97H131.212V200.607C131.212 200.818 131.243 200.976 131.304 201.082C131.368 201.185 131.448 201.255 131.545 201.291C131.644 201.324 131.749 201.341 131.858 201.341C131.941 201.341 132.008 201.337 132.061 201.329C132.114 201.318 132.156 201.31 132.188 201.303L132.34 201.975C132.289 201.994 132.218 202.013 132.128 202.032C132.037 202.053 131.922 202.063 131.782 202.063C131.571 202.063 131.364 202.018 131.162 201.927C130.961 201.836 130.794 201.698 130.661 201.512C130.53 201.326 130.465 201.092 130.465 200.809V195.97Z",
                        fill: "white"
                     }), (0, s.jsx)("rect", {
                        x: "105.25",
                        y: "179.25",
                        width: "43.5",
                        height: "38.5",
                        rx: "2.75",
                        stroke: "url(#keyboard-stroke)",
                        "stroke-opacity": "0.1",
                        "stroke-width": "0.5"
                     })]
                  }), (0, s.jsxs)("g", {
                     "data-key": "control",
                     children: [(0, s.jsx)("rect", {
                        x: "9",
                        y: "179",
                        width: "44",
                        height: "39",
                        rx: "3",
                        fill: "#fff",
                        fillOpacity: "0.08"
                     }), (0, s.jsx)("path", {
                        d: "M29.4233 197.541H28.6379C28.5914 197.315 28.5101 197.117 28.394 196.946C28.28 196.775 28.1406 196.631 27.976 196.515C27.8134 196.397 27.6329 196.308 27.4344 196.249C27.2359 196.19 27.029 196.16 26.8137 196.16C26.421 196.16 26.0652 196.259 25.7464 196.458C25.4297 196.656 25.1774 196.949 24.9895 197.335C24.8037 197.721 24.7108 198.195 24.7108 198.757C24.7108 199.319 24.8037 199.793 24.9895 200.179C25.1774 200.565 25.4297 200.858 25.7464 201.056C26.0652 201.255 26.421 201.354 26.8137 201.354C27.029 201.354 27.2359 201.324 27.4344 201.265C27.6329 201.206 27.8134 201.119 27.976 201.002C28.1406 200.884 28.28 200.74 28.394 200.569C28.5101 200.395 28.5914 200.197 28.6379 199.973H29.4233C29.3641 200.305 29.2565 200.601 29.1002 200.863C28.944 201.125 28.7498 201.348 28.5175 201.531C28.2853 201.713 28.0245 201.851 27.7353 201.946C27.4481 202.041 27.1409 202.089 26.8137 202.089C26.2605 202.089 25.7686 201.954 25.3379 201.683C24.9072 201.413 24.5683 201.029 24.3213 200.531C24.0743 200.032 23.9508 199.441 23.9508 198.757C23.9508 198.073 24.0743 197.482 24.3213 196.984C24.5683 196.485 24.9072 196.101 25.3379 195.831C25.7686 195.561 26.2605 195.425 26.8137 195.425C27.1409 195.425 27.4481 195.473 27.7353 195.568C28.0245 195.663 28.2853 195.802 28.5175 195.986C28.7498 196.168 28.944 196.389 29.1002 196.651C29.2565 196.911 29.3641 197.207 29.4233 197.541ZM32.7066 197.136V197.769H30.1857V197.136H32.7066ZM30.9204 195.97H31.6678V200.607C31.6678 200.818 31.6984 200.976 31.7597 201.082C31.823 201.185 31.9032 201.255 32.0004 201.291C32.0996 201.324 32.2041 201.341 32.3139 201.341C32.3962 201.341 32.4638 201.337 32.5166 201.329C32.5694 201.318 32.6116 201.31 32.6433 201.303L32.7953 201.975C32.7446 201.994 32.6739 202.013 32.5831 202.032C32.4923 202.053 32.3772 202.063 32.2379 202.063C32.0268 202.063 31.8198 202.018 31.6172 201.927C31.4166 201.836 31.2498 201.698 31.1168 201.512C30.9859 201.326 30.9204 201.092 30.9204 200.809V195.97ZM33.8309 202V197.136H34.5529V197.87H34.6036C34.6923 197.63 34.8527 197.434 35.085 197.284C35.3172 197.135 35.579 197.06 35.8704 197.06C35.9253 197.06 35.9939 197.061 36.0762 197.063C36.1586 197.065 36.2208 197.068 36.2631 197.072V197.832C36.2377 197.826 36.1797 197.816 36.0889 197.804C36.0002 197.789 35.9063 197.782 35.807 197.782C35.5706 197.782 35.3594 197.831 35.1736 197.93C34.99 198.028 34.8443 198.163 34.7366 198.336C34.631 198.507 34.5783 198.702 34.5783 198.922V202H33.8309ZM37.8964 195.514V202H37.149V195.514H37.8964Z",
                        fill: "white"
                     }), (0, s.jsx)("rect", {
                        x: "9.25",
                        y: "179.25",
                        width: "43.5",
                        height: "38.5",
                        rx: "2.75",
                        stroke: "url(#keyboard-stroke)",
                        "stroke-opacity": "0.1",
                        "stroke-width": "0.5"
                     })]
                  }), (0, s.jsxs)("g", {
                     "data-key": "altgr",
                     children: [(0, s.jsx)("rect", {
                        width: "54.443",
                        height: "38.756",
                        x: "500.141",
                        y: "179.016",
                        fill: "#fff",
                        fillOpacity: "0.08",
                        rx: "4"
                     }), (0, s.jsx)("path", {
                        d: "M522.36 202H521.537L523.918 195.514H524.729L527.11 202H526.287L524.349 196.54H524.298L522.36 202ZM522.664 199.466H525.983V200.163H522.664V199.466ZM528.767 195.514V202H528.019V195.514H528.767ZM532.251 197.136V197.769H529.73V197.136H532.251ZM530.465 195.97H531.212V200.607C531.212 200.818 531.243 200.976 531.304 201.082C531.368 201.185 531.448 201.255 531.545 201.291C531.644 201.324 531.749 201.341 531.858 201.341C531.941 201.341 532.008 201.337 532.061 201.329C532.114 201.318 532.156 201.31 532.188 201.303L532.34 201.975C532.289 201.994 532.218 202.013 532.128 202.032C532.037 202.053 531.922 202.063 531.782 202.063C531.571 202.063 531.364 202.018 531.162 201.927C530.961 201.836 530.794 201.698 530.661 201.512C530.53 201.326 530.465 201.092 530.465 200.809V195.97Z",
                        fill: "white"
                     }), (0, s.jsx)("rect", {
                        width: "53.943",
                        height: "38.256",
                        x: "500.391",
                        y: "179.266",
                        stroke: "url(#keyboard-stroke)",
                        strokeOpacity: "0.3",
                        strokeWidth: "0.5",
                        rx: "2.75"
                     })]
                  })]
               }) : (0, s.jsxs)("g", {
                  children: [(0, s.jsxs)("g", {
                     "data-key": "alt",
                     children: [(0, s.jsx)("rect", {
                        width: "44",
                        height: "39",
                        x: "57",
                        y: "179",
                        fill: "#fff",
                        fillOpacity: "0.08",
                        rx: "4"
                     }), (0, s.jsx)("path", {
                        d: "M79.7169 195.514H82.7509V196.211H79.7169V195.514ZM75.2515 196.211V195.514H77.7471L80.6733 201.303H82.7509V202H80.2553L77.329 196.211H75.2515Z",
                        fill: "white"
                     }), (0, s.jsx)("rect", {
                        width: "43.5",
                        height: "38.5",
                        x: "57.25",
                        y: "179.25",
                        stroke: "url(#keyboard-stroke)",
                        strokeOpacity: "0.3",
                        strokeWidth: "0.5",
                        rx: "2.75"
                     })]
                  }), (0, s.jsxs)("g", {
                     "data-key": "meta",
                     children: [(0, s.jsx)("rect", {
                        width: "44",
                        height: "39",
                        x: "105",
                        y: "179",
                        fill: "#fff",
                        fillOpacity: "0.08",
                        rx: "4"
                     }), (0, s.jsx)("path", {
                        d: "M125.488 202.146C125.237 202.146 125.006 202.084 124.797 201.962C124.588 201.837 124.422 201.671 124.297 201.462C124.175 201.253 124.113 201.022 124.113 200.771C124.113 200.518 124.175 200.287 124.297 200.078C124.422 199.869 124.588 199.702 124.797 199.577C125.006 199.453 125.237 199.39 125.488 199.39H126.223V198.117H125.488C125.237 198.117 125.006 198.056 124.797 197.934C124.588 197.809 124.422 197.643 124.297 197.436C124.175 197.227 124.113 196.996 124.113 196.743C124.113 196.49 124.175 196.259 124.297 196.052C124.422 195.843 124.588 195.678 124.797 195.555C125.006 195.431 125.237 195.368 125.488 195.368C125.741 195.368 125.972 195.431 126.181 195.555C126.39 195.678 126.557 195.843 126.682 196.052C126.806 196.259 126.869 196.49 126.869 196.743V197.471H128.142V196.743C128.142 196.49 128.203 196.259 128.325 196.052C128.45 195.843 128.616 195.678 128.823 195.555C129.032 195.431 129.263 195.368 129.516 195.368C129.77 195.368 130 195.431 130.207 195.555C130.416 195.678 130.581 195.843 130.704 196.052C130.828 196.259 130.891 196.49 130.891 196.743C130.891 196.996 130.828 197.227 130.704 197.436C130.581 197.643 130.416 197.809 130.207 197.934C130 198.056 129.77 198.117 129.516 198.117H128.788V199.39H129.516C129.77 199.39 130 199.453 130.207 199.577C130.416 199.702 130.581 199.869 130.704 200.078C130.828 200.287 130.891 200.518 130.891 200.771C130.891 201.022 130.828 201.253 130.704 201.462C130.581 201.671 130.416 201.837 130.207 201.962C130 202.084 129.77 202.146 129.516 202.146C129.263 202.146 129.032 202.084 128.823 201.962C128.616 201.837 128.45 201.671 128.325 201.462C128.203 201.253 128.142 201.022 128.142 200.771V200.036H126.869V200.771C126.869 201.022 126.806 201.253 126.682 201.462C126.557 201.671 126.39 201.837 126.181 201.962C125.972 202.084 125.741 202.146 125.488 202.146ZM125.488 201.5C125.623 201.5 125.745 201.467 125.855 201.401C125.967 201.336 126.056 201.248 126.121 201.139C126.189 201.027 126.223 200.904 126.223 200.771V200.036H125.488C125.355 200.036 125.232 200.07 125.12 200.138C125.011 200.203 124.923 200.292 124.858 200.404C124.792 200.514 124.759 200.636 124.759 200.771C124.759 200.904 124.792 201.027 124.858 201.139C124.923 201.248 125.011 201.336 125.12 201.401C125.232 201.467 125.355 201.5 125.488 201.5ZM125.488 197.471H126.223V196.743C126.223 196.608 126.189 196.485 126.121 196.375C126.056 196.266 125.967 196.178 125.855 196.113C125.745 196.047 125.623 196.014 125.488 196.014C125.355 196.014 125.232 196.047 125.12 196.113C125.011 196.178 124.923 196.266 124.858 196.375C124.792 196.485 124.759 196.608 124.759 196.743C124.759 196.878 124.792 197.001 124.858 197.113C124.923 197.223 125.011 197.311 125.12 197.376C125.232 197.44 125.355 197.471 125.488 197.471ZM128.788 197.471H129.516C129.651 197.471 129.774 197.44 129.884 197.376C129.993 197.311 130.081 197.223 130.146 197.113C130.212 197.001 130.245 196.878 130.245 196.743C130.245 196.608 130.212 196.485 130.146 196.375C130.081 196.266 129.993 196.178 129.884 196.113C129.774 196.047 129.651 196.014 129.516 196.014C129.381 196.014 129.258 196.047 129.146 196.113C129.036 196.178 128.948 196.266 128.883 196.375C128.819 196.485 128.788 196.608 128.788 196.743V197.471ZM129.516 201.5C129.651 201.5 129.774 201.467 129.884 201.401C129.993 201.336 130.081 201.248 130.146 201.139C130.212 201.027 130.245 200.904 130.245 200.771C130.245 200.636 130.212 200.514 130.146 200.404C130.081 200.292 129.993 200.203 129.884 200.138C129.774 200.07 129.651 200.036 129.516 200.036H128.788V200.771C128.788 200.904 128.819 201.027 128.883 201.139C128.948 201.248 129.036 201.336 129.146 201.401C129.258 201.467 129.381 201.5 129.516 201.5ZM126.869 199.39H128.142V198.117H126.869V199.39Z",
                        fill: "white"
                     }), (0, s.jsx)("rect", {
                        width: "43.5",
                        height: "38.5",
                        x: "105.25",
                        y: "179.25",
                        stroke: "url(#keyboard-stroke)",
                        strokeOpacity: "0.3",
                        strokeWidth: "0.5",
                        rx: "2.75"
                     })]
                  }), (0, s.jsxs)("g", {
                     "data-key": "control",
                     children: [(0, s.jsx)("rect", {
                        width: "44",
                        height: "39",
                        x: "9",
                        y: "179",
                        fill: "#fff",
                        fillOpacity: "0.08",
                        rx: "4"
                     }), (0, s.jsx)("path", {
                        d: "M28.8825 198.529L28.4011 198.048L30.998 195.451L33.5949 198.048L33.1135 198.529L30.998 196.42L28.8825 198.529Z",
                        fill: "white"
                     }), (0, s.jsx)("rect", {
                        width: "43.5",
                        height: "38.5",
                        x: "9.25",
                        y: "179.25",
                        stroke: "url(#keyboard-stroke)",
                        strokeOpacity: "0.3",
                        strokeWidth: "0.5",
                        rx: "2.75"
                     })]
                  }), (0, s.jsxs)("g", {
                     "data-key": "altgr",
                     children: [(0, s.jsx)("rect", {
                        width: "54.443",
                        height: "38.756",
                        x: "500.141",
                        y: "179.016",
                        fill: "#fff",
                        fillOpacity: "0.08",
                        rx: "4"
                     }), (0, s.jsx)("path", {
                        d: "M527.717 195.514H530.751V196.211H527.717V195.514ZM523.252 196.211V195.514H525.747L528.673 201.303H530.751V202H528.255L525.329 196.211H523.252Z",
                        fill: "white"
                     }), (0, s.jsx)("rect", {
                        width: "53.943",
                        height: "38.256",
                        x: "500.391",
                        y: "179.266",
                        stroke: "url(#keyboard-stroke)",
                        strokeOpacity: "0.3",
                        strokeWidth: "0.5",
                        rx: "2.75"
                     })]
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": " ",
                  children: [(0, s.jsx)("rect", {
                     width: "343.268",
                     height: "38.756",
                     x: "153.18",
                     y: "179.016",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("rect", {
                     width: "342.768",
                     height: "38.256",
                     x: "153.43",
                     y: "179.266",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "arrowup",
                  children: [(0, s.jsx)("rect", {
                     width: "38.756",
                     height: "38.756",
                     x: "618.25",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M633.189 158.742l4.054-6.892 4.054 6.892h-8.108z"
                  }), (0, s.jsx)("rect", {
                     width: "38.256",
                     height: "38.256",
                     x: "618.5",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsxs)("g", {
                  "data-key": "shift",
                  children: [(0, s.jsx)("rect", {
                     width: "86.74",
                     height: "38.756",
                     x: "527.82",
                     y: "136.569",
                     fill: "#fff",
                     fillOpacity: "0.08",
                     rx: "4"
                  }), (0, s.jsx)("path", {
                     fill: "#fff",
                     d: "M542.421 154.43a.993.993 0 00-.462-.747c-.271-.178-.602-.266-.995-.266-.287 0-.538.046-.753.139a1.204 1.204 0 00-.501.383.923.923 0 00-.177.555.79.79 0 00.123.446c.085.123.192.225.323.307.131.081.268.147.412.2.144.051.276.092.396.123l.659.178c.169.044.356.105.563.183.209.078.409.185.599.32.192.133.35.304.475.513.124.209.187.466.187.77 0 .35-.092.667-.276.95a1.862 1.862 0 01-.798.674c-.348.167-.771.251-1.27.251-.464 0-.866-.075-1.206-.225a1.921 1.921 0 01-.798-.627 1.789 1.789 0 01-.327-.934h.811c.021.244.104.447.247.608.146.158.329.276.551.354.224.076.465.114.722.114.3 0 .569-.048.808-.145.238-.1.427-.237.567-.412a.977.977 0 00.209-.621.76.76 0 00-.181-.526 1.323 1.323 0 00-.475-.329 5.142 5.142 0 00-.636-.222l-.798-.228c-.507-.145-.908-.353-1.204-.623-.295-.271-.443-.624-.443-1.061 0-.364.098-.68.294-.95a1.96 1.96 0 01.798-.634 2.699 2.699 0 011.125-.228c.418 0 .789.075 1.114.225.325.148.583.35.773.608.192.258.294.55.304.877h-.76zm2.786 1.938v2.927h-.747v-6.486h.747v2.381h.063c.115-.251.286-.45.514-.598.23-.15.536-.225.918-.225.331 0 .622.066.871.199.249.131.442.333.579.605.14.271.209.615.209 1.033v3.091h-.747v-3.041c0-.386-.1-.685-.301-.896-.198-.213-.474-.32-.826-.32-.245 0-.465.052-.659.155a1.142 1.142 0 00-.456.453c-.11.199-.165.44-.165.722zm4.522 2.927v-4.865h.747v4.865h-.747zm.38-5.675a.533.533 0 01-.377-.149.478.478 0 01-.155-.358c0-.14.051-.259.155-.358a.533.533 0 01.377-.149c.145 0 .27.05.374.149a.474.474 0 01.158.358.477.477 0 01-.158.358.524.524 0 01-.374.149zm3.902.81v.634h-2.622v-.634h2.622zm-1.837 4.865v-5.536c0-.279.066-.511.197-.697.131-.186.301-.325.51-.418.209-.093.429-.139.662-.139.183 0 .333.015.449.044.116.03.203.057.26.082l-.215.646a5.017 5.017 0 00-.159-.047.953.953 0 00-.259-.029c-.247 0-.426.063-.536.187-.107.125-.161.308-.161.548v5.359h-.748zm5-4.865v.634h-2.521v-.634h2.521zm-1.786-1.165h.748v4.636c0 .211.03.37.091.475a.477.477 0 00.241.209.961.961 0 00.314.051c.082 0 .149-.004.202-.013l.127-.025.152.671a1.568 1.568 0 01-.557.089 1.5 1.5 0 01-.621-.136 1.232 1.232 0 01-.501-.415c-.13-.186-.196-.42-.196-.703v-4.839z"
                  }), (0, s.jsx)("rect", {
                     width: "86.24",
                     height: "38.256",
                     x: "528.07",
                     y: "136.819",
                     stroke: "url(#keyboard-stroke)",
                     strokeOpacity: "0.3",
                     strokeWidth: "0.5",
                     rx: "2.75"
                  })]
               }), (0, s.jsx)("path", {
                  fill: "#fff",
                  fillOpacity: "0.2",
                  d: "M687.999 38.297c.225-.195.445-.4.659-.614 4.789-4.788 4.789-12.553 0-17.341-4.788-4.79-12.552-4.79-17.341 0a12.64 12.64 0 00-.614.659l17.296 17.296zm-1.461 1.085l-16.92-16.92a12.195 12.195 0 00-.881 1.664l16.137 16.137a12.157 12.157 0 001.664-.881zm-3.565 1.526l-14.881-14.881a12.301 12.301 0 00-.342 2.203l13.02 13.02a12.296 12.296 0 002.203-.342zm-4.868.222L667.87 30.895a12.208 12.208 0 003.447 6.788 12.206 12.206 0 006.788 3.447z"
               }), (0, s.jsx)("rect", {
                  width: "707.683",
                  height: "226",
                  x: "0.5",
                  y: "0.5",
                  stroke: "url(#board-stroke)",
                  strokeOpacity: "0.05",
                  rx: "11.5"
               }), (0, s.jsxs)("defs", {
                  children: [(0, s.jsxs)("linearGradient", {
                     id: "keyboard-stroke",
                     x1: "0",
                     x2: "0",
                     y1: "0",
                     y2: "1",
                     children: [(0, s.jsx)("stop", {
                        offset: "0",
                        stopColor: "#fff"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#fff",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "board-stroke",
                     x1: "0",
                     x2: "0",
                     y1: "0",
                     y2: "1",
                     children: [(0, s.jsx)("stop", {
                        offset: "0",
                        stopColor: "#fff",
                        stopOpacity: "0"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#fff"
                     })]
                  })]
               })]
            })
         }

         function Vn() {
            var t = (0, i.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  max-width: 100%;\n  overflow: auto;\n  ", '\n  scroll-snap-type: x mandatory;\n  mask-image: linear-gradient(to right, transparent, black 40%, black calc(100% - 40%), transparent 100%);\n  margin: 32px 0;\n\n  &::before,\n  &::after {\n    content: "";\n    min-height: 1px;\n    min-width: 200px;\n  }\n\n  & ', ' {\n    gap: 0;\n    backdrop-filter: none;\n    scroll-snap-align: center;\n    transition: opacity 120ms;\n\n    :not([data-active="true"]) {\n      opacity: 0.6;\n    }\n  }\n']);
            return Vn = function () {
               return t
            }, t
         }

         function In() {
            var t = (0, i.Z)(["\n  grid-column: auto / span 4;\n\n  ", ' {\n    width: 100%;\n    height: auto;\n    margin-top: -64px;\n    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.57) 33.98%, black 100%);\n\n    /* Only show keyboard activity on desktop */\n    @media (min-width: 768px) {\n      [data-key] :is(rect, path) {\n        transition: 240ms;\n        transition-property: fill-opacity, stroke-opacity;\n      }\n\n      [data-key][data-active="true"] {\n        rect:first-child {\n          fill-opacity: 0.4;\n        }\n\n        rect:last-child {\n          stroke-opacity: 1;\n        }\n\n        path {\n          fill-opacity: 1;\n        }\n      }\n\n      [data-key][data-pressed="true"] {\n        rect:first-child {\n          fill-opacity: 0.2;\n        }\n      }\n    }\n  }\n\n  & ', " {\n    max-width: 380px;\n  }\n\n  @media (max-width: 768px) {\n    ", " {\n      width: 200%;\n      transform: translate(30%, 10%);\n    }\n\n    ", " {\n      display: none;\n    }\n\n    > svg {\n      margin-bottom: 24px;\n      width: 250%;\n      align-self: flex-start;\n    }\n  }\n"]);
            return In = function () {
               return t
            }, t
         }
         var Hn = [{
               shortcut: ["meta", "k"],
               name: "Opens command line"
            }, {
               shortcut: ["i"],
               name: "Assign issue to me"
            }, {
               shortcut: ["a"],
               name: "Assign issue to"
            }, {
               shortcut: ["s"],
               name: "Change issue status"
            }, {
               shortcut: ["p"],
               name: "Set issue priority"
            }, {
               shortcut: ["l"],
               name: "Add issue labels"
            }, {
               shortcut: ["shift", "d"],
               name: "Set due date"
            }, {
               shortcut: ["shift", "meta", "p"],
               name: "Set parent issue"
            }, {
               shortcut: ["shift", "meta", "o"],
               name: "Add sub-issue"
            }, {
               shortcut: ["c"],
               name: "Create new issue"
            }, {
               shortcut: ["alt", "c"],
               name: "Create new issue from template"
            }, {
               shortcut: ["shift", "p"],
               name: "Move to project"
            }, {
               shortcut: ["meta", "."],
               name: "Copy issue ID to clipboard"
            }, {
               shortcut: ["shift", "meta", "."],
               name: "Copy git branch name to clipboard"
            }, {
               shortcut: ["meta", "c"],
               name: "Copy issues as a markdown list"
            }, {
               shortcut: ["meta", "backspace"],
               name: "Delete issue"
            }, {
               shortcut: ["meta", "f"],
               name: "Find in view"
            }, {
               shortcut: ["shift", "d"],
               name: "Set due date"
            }, {
               shortcut: ["r"],
               name: "Rename project or issue"
            }],
            Wn = function () {
               var t = o.useRef(null),
                  e = o.useRef(null),
                  n = o.useRef(null),
                  r = (0, a.Z)(o.useState(), 2),
                  i = r[0],
                  c = r[1],
                  h = o.useRef(),
                  d = (0, _.Z)("(max-width: 768px)", !1),
                  u = (0, l.Y)(t),
                  p = On();

               function f(t) {
                  return "meta" === t && "windows" === p ? "control" : "\\" === t ? "pipe" : t
               }
               var x = void 0 !== i ? Hn[i] : null;

               function g() {
                  c((function (t) {
                     return void 0 === t || t === Hn.length - 1 ? 0 : t + 1
                  }))
               }

               function m() {
                  clearInterval(h.current), h.current = setInterval(g, 2250)
               }
               return o.useEffect((function () {
                  return u && !d && (m(), g()),
                     function () {
                        clearInterval(h.current)
                     }
               }), [u, d]), o.useEffect((function () {
                  var t = null === (i = e.current) || void 0 === i ? void 0 : i.querySelectorAll('g[data-key][data-active="true"]');
                  if (null == t || t.forEach((function (t) {
                        return t.removeAttribute("data-active")
                     })), x) {
                     var n = !0,
                        r = !1,
                        a = void 0;
                     try {
                        for (var i, s, o = x.shortcut[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
                           var c, l = s.value,
                              h = null === (c = e.current) || void 0 === c ? void 0 : c.querySelector('g[data-key="'.concat(f(l), '"]'));
                           null == h || h.setAttribute("data-active", "true")
                        }
                     } catch (t) {
                        r = !0, a = t
                     } finally {
                        try {
                           n || null == o.return || o.return()
                        } finally {
                           if (r) throw a
                        }
                     }
                  }
               }), [i]), o.useEffect((function () {
                  function t(t) {
                     var n, r = t.key.toLowerCase(),
                        a = null === (n = e.current) || void 0 === n ? void 0 : n.querySelector('g[data-key="'.concat(f(r), '"]'));
                     null == a || a.setAttribute("data-pressed", "true")
                  }

                  function n(t) {
                     var n, r = t.key.toLowerCase(),
                        a = null === (n = e.current) || void 0 === n ? void 0 : n.querySelector('g[data-key="'.concat(f(r), '"]'));
                     null == a || a.removeAttribute("data-pressed")
                  }
                  return u && (document.addEventListener("keydown", t), document.addEventListener("keyup", n)),
                     function () {
                        document.removeEventListener("keydown", t), document.removeEventListener("keyup", n)
                     }
               }), [u]), o.useEffect((function () {
                  if (n.current) {
                     var t = n.current.querySelector('[data-active="true"]');
                     t && n.current.scrollTo({
                        left: t.offsetLeft - n.current.offsetWidth / 2 + t.offsetWidth / 2,
                        behavior: "smooth"
                     })
                  }
               }), [i]), (0, s.jsxs)(En, {
                  ref: t,
                  children: [(0, s.jsx)(y.tR, {
                     ref: e,
                     children: (0, s.jsx)(Ln, {})
                  }), (0, s.jsx)(Un, {
                     ref: n,
                     children: Hn.map((function (t, e) {
                        return (0, s.jsx)(Mn.D, {
                           "data-active": e === i,
                           asChild: !0,
                           children: (0, s.jsxs)(zn.z, {
                              tabIndex: -1,
                              onClick: function () {
                                 m(), c(e)
                              },
                              children: [(0, s.jsx)("span", {
                                 children: t.shortcut.map((function (t) {
                                    return "meta" === t ? "windows" === p ? "⌃" : "⌘" : "shift" === t ? "⇧" : "alt" === t ? "⌥" : "ctrl" === t ? "⌃" : "backspace" === t ? "⌫" : t.toUpperCase()
                                 }))
                              }), (0, s.jsx)("div", {
                                 children: t.name
                              })]
                           })
                        }, e)
                     }))
                  }), (0, s.jsx)(y.Ar, {
                     as: "h3",
                     children: "Identify who your customer is"
                  }), (0, s.jsx)(y.JM, {
                     as: "p",
                     children: "Meticulously crafted with precision, Askmay helps you pinpoint your ideal customer by analyzing your interviews with unparalleled accuracy."
                  })]
               })
            },
            Un = u.ZP.div.withConfig({
               componentId: "sc-29569ef1-0"
            })(Vn(), (0, p.KG)(), Mn.D),
            En = (0, u.ZP)(y.Kn).withConfig({
               componentId: "sc-29569ef1-1"
            })(In(), y.tR, y.Gn, y.tR, Mn.D),
            Pn = n(36395);

         function Sn() {
            return (0, s.jsxs)("svg", {
               viewBox: "0 0 557 557",
               width: "557",
               height: "557",
               fill: "none",
               children: [(0, s.jsxs)("g", {
                  strokeWidth: "18",
                  filter: "url(#filter0_f_1706_102555)",
                  opacity: "0.4",
                  children: [(0, s.jsx)("path", {
                     stroke: "url(#paint0_linear_1706_102555)",
                     d: "M113.68 319.368c-.932-3.783 3.561-6.164 6.316-3.409l121.045 121.045c2.755 2.755.374 7.248-3.409 6.316-60.948-15.028-108.924-63.004-123.952-123.952z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#paint1_linear_1706_102555)",
                     d: "M109.104 267.645a3.947 3.947 0 001.157 3.041l176.053 176.053a3.947 3.947 0 003.041 1.157 169.91 169.91 0 0022.262-2.906c3.061-.608 4.124-4.362 1.917-6.569L118.579 243.466c-2.207-2.207-5.961-1.144-6.569 1.917a169.91 169.91 0 00-2.906 22.262z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#paint2_linear_1706_102555)",
                     d: "M123.521 209.3a3.94 3.94 0 00.828 4.397l218.954 218.955a3.942 3.942 0 004.397.827 168.862 168.862 0 0016.539-8.539c2.214-1.302 2.554-4.336.738-6.152L138.212 192.023c-1.816-1.816-4.85-1.476-6.152.738a169.081 169.081 0 00-8.539 16.539z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#paint3_linear_1706_102555)",
                     d: "M152.384 170.657c-1.48-1.48-1.572-3.855-.173-5.412C183.262 130.715 228.284 109 278.377 109 372.057 109 448 184.943 448 278.623c0 50.093-21.715 95.115-56.245 126.166-1.557 1.399-3.931 1.307-5.412-.173L152.384 170.657z"
                  })]
               }), (0, s.jsxs)("g", {
                  strokeOpacity: "0.2",
                  strokeWidth: "2",
                  opacity: "0.4",
                  children: [(0, s.jsx)("path", {
                     stroke: "url(#paint4_linear_1706_102555)",
                     d: "M113.68 319.368c-.932-3.783 3.561-6.164 6.316-3.409l121.045 121.045c2.755 2.755.374 7.248-3.409 6.316-60.948-15.028-108.924-63.004-123.952-123.952z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#paint5_linear_1706_102555)",
                     d: "M109.104 267.645a3.947 3.947 0 001.157 3.041l176.053 176.053a3.947 3.947 0 003.041 1.157 169.91 169.91 0 0022.262-2.906c3.061-.608 4.124-4.362 1.917-6.569L118.579 243.466c-2.207-2.207-5.961-1.144-6.569 1.917a169.91 169.91 0 00-2.906 22.262z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#paint6_linear_1706_102555)",
                     d: "M123.521 209.3a3.94 3.94 0 00.828 4.397l218.954 218.955a3.942 3.942 0 004.397.827 168.862 168.862 0 0016.539-8.539c2.214-1.302 2.554-4.336.738-6.152L138.212 192.023c-1.816-1.816-4.85-1.476-6.152.738a169.081 169.081 0 00-8.539 16.539z"
                  }), (0, s.jsx)("path", {
                     stroke: "url(#paint7_linear_1706_102555)",
                     d: "M152.384 170.657c-1.48-1.48-1.572-3.855-.173-5.412C183.262 130.715 228.284 109 278.377 109 372.057 109 448 184.943 448 278.623c0 50.093-21.715 95.115-56.245 126.166-1.557 1.399-3.931 1.307-5.412-.173L152.384 170.657z"
                  })]
               }), (0, s.jsx)("path", {
                  stroke: "url(#paint8_linear_1706_102555)",
                  strokeOpacity: "0.2",
                  strokeWidth: "8",
                  d: "M113.68 319.368c-.932-3.783 3.561-6.164 6.316-3.409l121.045 121.045c2.755 2.755.374 7.248-3.409 6.316-60.948-15.028-108.924-63.004-123.952-123.952z"
               }), (0, s.jsx)("path", {
                  stroke: "url(#paint9_linear_1706_102555)",
                  strokeOpacity: "0.2",
                  strokeWidth: "8",
                  d: "M109.104 267.645a3.947 3.947 0 001.157 3.041l176.053 176.053a3.947 3.947 0 003.041 1.157 169.91 169.91 0 0022.262-2.906c3.061-.608 4.124-4.362 1.917-6.569L118.579 243.466c-2.207-2.207-5.961-1.144-6.569 1.917a169.91 169.91 0 00-2.906 22.262z"
               }), (0, s.jsx)("path", {
                  stroke: "url(#paint10_linear_1706_102555)",
                  strokeOpacity: "0.2",
                  strokeWidth: "8",
                  d: "M123.521 209.3a3.94 3.94 0 00.828 4.397l218.954 218.955a3.942 3.942 0 004.397.827 168.862 168.862 0 0016.539-8.539c2.214-1.302 2.554-4.336.738-6.152L138.212 192.023c-1.816-1.816-4.85-1.476-6.152.738a169.081 169.081 0 00-8.539 16.539z"
               }), (0, s.jsx)("path", {
                  stroke: "url(#paint11_linear_1706_102555)",
                  strokeOpacity: "0.2",
                  strokeWidth: "8",
                  d: "M152.384 170.657c-1.48-1.48-1.572-3.855-.173-5.412C183.262 130.715 228.284 109 278.377 109 372.057 109 448 184.943 448 278.623c0 50.093-21.715 95.115-56.245 126.166-1.557 1.399-3.931 1.307-5.412-.173L152.384 170.657z"
               }), (0, s.jsx)("path", {
                  stroke: "url(#paint12_radial_1706_102555)",
                  d: "M113.68 319.368c-.932-3.783 3.561-6.164 6.316-3.409l121.045 121.045c2.755 2.755.374 7.248-3.409 6.316-60.948-15.028-108.924-63.004-123.952-123.952z"
               }), (0, s.jsx)("path", {
                  stroke: "url(#paint13_radial_1706_102555)",
                  d: "M109.104 267.645a3.947 3.947 0 001.157 3.041l176.053 176.053a3.947 3.947 0 003.041 1.157 169.91 169.91 0 0022.262-2.906c3.061-.608 4.124-4.362 1.917-6.569L118.579 243.466c-2.207-2.207-5.961-1.144-6.569 1.917a169.91 169.91 0 00-2.906 22.262z"
               }), (0, s.jsx)("path", {
                  stroke: "url(#paint14_radial_1706_102555)",
                  d: "M123.521 209.3a3.94 3.94 0 00.828 4.397l218.954 218.955a3.942 3.942 0 004.397.827 168.862 168.862 0 0016.539-8.539c2.214-1.302 2.554-4.336.738-6.152L138.212 192.023c-1.816-1.816-4.85-1.476-6.152.738a169.081 169.081 0 00-8.539 16.539z"
               }), (0, s.jsx)("path", {
                  stroke: "url(#paint15_radial_1706_102555)",
                  d: "M152.384 170.657c-1.48-1.48-1.572-3.855-.173-5.412C183.262 130.715 228.284 109 278.377 109 372.057 109 448 184.943 448 278.623c0 50.093-21.715 95.115-56.245 126.166-1.557 1.399-3.931 1.307-5.412-.173L152.384 170.657z"
               }), (0, s.jsxs)("defs", {
                  children: [(0, s.jsxs)("linearGradient", {
                     id: "paint0_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "340",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6663F6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint1_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "340",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6663F6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint2_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "340",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6663F6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint3_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "340",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6663F6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint4_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "299",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6663F6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint5_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "299",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6663F6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint6_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "299",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6663F6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint7_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "299",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6663F6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#6663F6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint8_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "350.5",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#7877C6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#7877C6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint9_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "350.5",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#7877C6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#7877C6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint10_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "350.5",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#7877C6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#7877C6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "paint11_linear_1706_102555",
                     x1: "278.5",
                     x2: "278.5",
                     y1: "109",
                     y2: "350.5",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#7877C6"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#7877C6",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("radialGradient", {
                     id: "paint12_radial_1706_102555",
                     cx: "0",
                     cy: "0",
                     r: "1",
                     gradientTransform: "rotate(90 67.03 211.47) scale(233.062)",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#fff"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#fff",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("radialGradient", {
                     id: "paint13_radial_1706_102555",
                     cx: "0",
                     cy: "0",
                     r: "1",
                     gradientTransform: "rotate(90 67.03 211.47) scale(233.062)",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#fff"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#fff",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("radialGradient", {
                     id: "paint14_radial_1706_102555",
                     cx: "0",
                     cy: "0",
                     r: "1",
                     gradientTransform: "rotate(90 67.03 211.47) scale(233.062)",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#fff"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#fff",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("radialGradient", {
                     id: "paint15_radial_1706_102555",
                     cx: "0",
                     cy: "0",
                     r: "1",
                     gradientTransform: "rotate(90 67.03 211.47) scale(233.062)",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#fff"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#fff",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("filter", {
                     id: "filter0_f_1706_102555",
                     width: "556.906",
                     height: "556.904",
                     x: "0.094",
                     y: "0",
                     colorInterpolationFilters: "sRGB",
                     filterUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                     }), (0, s.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "BackgroundImageFix",
                        result: "shape"
                     }), (0, s.jsx)("feGaussianBlur", {
                        result: "effect1_foregroundBlur_1706_102555",
                        stdDeviation: "50"
                     })]
                  })]
               })]
            })
         }
         var _n = n(55671);

         function Bn() {
            var t = (0, i.Z)(["\n  && {\n    grid-column: auto / span 2;\n    padding: 48px;\n    --order: 2;\n  }\n\n  & > svg {\n    pointer-events: none;\n    user-select: none;\n    position: absolute;\n    top: -80px;\n    width: 130%;\n  }\n\n  & ", " {\n    position: absolute;\n    bottom: 200px;\n    opacity: 0;\n    transform: translateY(30%);\n    transition: 220ms;\n    transition-property: opacity, transform, background;\n  }\n\n  &:hover ", ", ", ":focus {\n    opacity: 1;\n    transform: none;\n  }\n\n  @media (hover: none) {\n    ", " {\n      opacity: 1;\n      transform: none;\n    }\n  }\n\n  @media (max-width: 768px) {\n    & > svg {\n      top: -128px;\n    }\n\n    && {\n      padding: 48px 32px;\n    }\n  }\n"]);
            return Bn = function () {
               return t
            }, t
         }
         var Dn = function () {
               return (0, s.jsxs)(Fn, {
                  children: [(0, s.jsx)(Sn, {}), (0, s.jsx)(y.Ar, {
                     as: "h3",
                     children: "Find out how and where they found you"
                  }), (0, s.jsx)(y.JM, {
                     as: "p",
                     children: "Discover the origin of your customers with ease."
                  }), (0, s.jsx)(Mn.D, {
                     asChild: !0,
                     children: (0, s.jsxs)(_n.r, {
                        href: "/method",
                        tab: !0,
                        children: [(0, s.jsx)("span", {
                           children: "Linear Method"
                        }), " Product Principles ", (0, s.jsx)(Pn.X, {})]
                     })
                  })]
               })
            },
            Fn = (0, u.ZP)(y.Kn).withConfig({
               componentId: "sc-4dcd7dd-0"
            })(Bn(), Mn.D, Mn.D, Mn.D, Mn.D);

         function Rn() {
            var t = (0, i.Z)(["\n  z-index: 10;\n  background: radial-gradient(ellipse 100% 40% at 50% 60%, rgba(102, 99, 246, 0.07), var(--transparent));\n"]);
            return Rn = function () {
               return t
            }, t
         }

         function Gn() {
            var t = (0, i.Z)(["\n  @media (max-width: 768px) {\n    ", "\n    display: flex;\n    align-items: stretch;\n    overflow: auto;\n    gap: 12px;\n    scroll-snap-type: x mandatory;\n  }\n"]);
            return Gn = function () {
               return t
            }, t
         }

         function Kn() {
            var t = (0, i.Z)(["\n  @media (max-width: 768px) {\n    font-size: 36px;\n  }\n"]);
            return Kn = function () {
               return t
            }, t
         }

         function Qn() {
            var t = (0, i.Z)(["\n  max-width: 680px;\n"]);
            return Qn = function () {
               return t
            }, t
         }
         var Nn = function () {
               return (0, s.jsxs)(Tn, {
                  children: [(0, s.jsxs)(m.b, {
                     children: [(0, s.jsxs)(Xn, {
                        as: "h2",
                        fontSize: 56,
                        fontWeight: 450,
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        align: "center",
                        children: ["Building Growth:", (0, s.jsx)("br", {}), " Product, Process, and Team"]
                     }), (0, s.jsx)(Jn, {
                        as: "p",
                        color: "#B4BCD0",
                        margin: "0 auto 48px auto",
                        align: "center",
                        children: "Classify, summarize, and interpret, user interviews, and sales conversations to help you craft better hypothesis-driven experiments in a fraction of the time and without the need for an army of PMs, Data Scientists, and Engineers."
                     })]
                  }), (0, s.jsxs)(Yn, {
                     children: [(0, s.jsx)(Wn, {}), (0, s.jsx)(bn, {}), (0, s.jsx)(Dn, {}), (0, s.jsx)(fn, {})]
                  })]
               })
            },
            Tn = (0, u.ZP)(y.Ig).withConfig({
               componentId: "sc-78039415-0"
            })(Rn()),
            Yn = (0, u.ZP)(E.r).withConfig({
               componentId: "sc-78039415-1"
            })(Gn(), (0, p.KG)()),
            Xn = (0, u.ZP)(j.x).withConfig({
               componentId: "sc-78039415-2"
            })(Kn()),
            Jn = (0, u.ZP)(y.IV).withConfig({
               componentId: "sc-78039415-3"
            })(Qn()),
            qn = n(49661),
            $n = n(78650),
            tr = n.n($n),
            er = n(39383),
            nr = n.n(er),
            rr = n(3348),
            ar = n(79340),
            ir = function (t) {
               return (0, s.jsx)("div", {
                  "data-nosnippet": !0,
                  children: t.children
               })
            },
            sr = {
               src: "/_next/static/media/hero@4x.15e3a396.jpg",
               height: 3104,
               width: 5480,
               blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAQKh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8Al+r2QBaC/9k=",
               blurWidth: 8,
               blurHeight: 5
            };

         function or() {
            var t = (0, i.Z)(["\n  overflow-x: hidden;\n  margin-top: calc(-1 * var(--header-height));\n  padding-top: var(--header-height);\n  padding-left: var(--page-padding-left);\n  padding-right: var(--page-padding-right);\n  margin-bottom: -164px;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), var(--transparent));\n\n  @media (max-width: 768px) {\n    margin-bottom: -92px;\n  }\n"]);
            return or = function () {
               return t
            }, t
         }

         function cr() {
            var t = (0, i.Z)(["\n  width: min(var(--page-max-width), 100%);\n  perspective: 2000px;\n  padding-bottom: 420px;\n  --base-delay: 0s;\n\n  @media (max-width: 768px) {\n    padding-bottom: 256px;\n  }\n"]);
            return cr = function () {
               return t
            }, t
         }

         function lr() {
            var t = (0, i.Z)(["\n  from {\n    opacity: 0;\n    transform: translateX(0);\n  }\n\n  20% {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translateX(800px);\n  }\n"]);
            return lr = function () {
               return t
            }, t
         }

         function hr() {
            var t = (0, i.Z)(["\n  from {\n    opacity: 0;\n    transform: translateY(0px);\n  }\n\n  20% {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translateY(300px);\n  }\n"]);
            return hr = function () {
               return t
            }, t
         }

         function dr() {
            var t = (0, i.Z)(["\n  animation: ", " 1200ms backwards;\n  animation-delay: 800ms;\n"]);
            return dr = function () {
               return t
            }, t
         }

         function ur() {
            var t = (0, i.Z)(["\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.01);\n  background-image: radial-gradient(ellipse 50% 80% at 20% 40%, rgba(93, 52, 221, 0.1), var(--transparent)),\n    radial-gradient(ellipse 50% 80% at 80% 50%, rgba(120, 119, 198, 0.15), var(--transparent));\n  ", ";\n  border-radius: var(--radius);\n\n  opacity: 0.2;\n  animation: ", " var(--base-delay) forwards;\n\n  ", ':hover ~ * &::after {\n    opacity: 1;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    inset: 0;\n    opacity: 0;\n    transition: opacity 480ms;\n\n    --alpha: 0.3;\n\n    background-image: radial-gradient(ellipse 50px 20px at 46% 0%, rgba(74, 101, 199, var(--alpha)), var(--transparent)),\n      radial-gradient(ellipse 50px 20px at 50% 0%, rgba(95, 75, 218, var(--alpha)), var(--transparent)),\n      radial-gradient(ellipse 50px 20px at 54% 0%, rgba(91, 45, 221, var(--alpha)), var(--transparent));\n  }\n']);
            return ur = function () {
               return t
            }, t
         }

         function pr() {
            var t = (0, i.Z)(['\n  position: absolute;\n  border-radius: 2px;\n  background: linear-gradient(var(--direction), #9d9bf2 0.43%, #7877c6 14.11%, rgba(120, 119, 198, 0) 62.95%);\n  z-index: 1;\n  opacity: 0;\n\n  &[data-orientation="vertical"] {\n    --direction: to top;\n    top: calc(1% * var(--start));\n    right: 0;\n    width: 1px;\n    height: calc(1px * var(--size));\n    animation: ', ' calc(var(--duration) * 1ms) linear forwards;\n    animation-delay: calc(var(--base-delay) + 400ms);\n  }\n\n  &[data-orientation="horizontal"] {\n    --direction: to left;\n    height: 1px;\n    top: 0;\n    left: calc(1% * var(--start));\n    width: calc(1px * var(--size));\n    animation: ', " calc(var(--duration) * 1ms) linear forwards;\n    animation-delay: calc(var(--base-delay) + 400ms);\n  }\n"]);
            return pr = function () {
               return t
            }, t
         }

         function fr() {
            var t = (0, i.Z)(["\n  from {\n    stroke-dashoffset: 1;\n  }\n\n  50% {\n    stroke-dashoffset: 0;\n  }\n\n  99% {\n    stroke-dashoffset: 0;\n  }\n\n  100% {\n    visibility: hidden;\n  }\n"]);
            return fr = function () {
               return t
            }, t
         }

         function xr() {
            var t = (0, i.Z)(["\n  --duration: 1200ms;\n\n  & path {\n    stroke-dasharray: 1;\n    stroke-dashoffset: 1;\n    stroke: white;\n    stroke-opacity: 0.2;\n  }\n\n  .visible & path {\n    animation: ", " var(--duration) ease-out forwards;\n    animation-delay: var(--base-delay);\n  }\n"]);
            return xr = function () {
               return t
            }, t
         }

         function gr() {
            var t = (0, i.Z)(["\n  0% {\n    opacity: 0;\n    animation-timing-function: cubic-bezier(0.74, 0.25, 0.76, 1);\n  }\n\n  10% {\n    opacity: 1;\n    animation-timing-function: cubic-bezier(0.12, 0.01, 0.08, 0.99);\n  }\n\n  100% {\n    opacity: 0.2;\n  }\n"]);
            return gr = function () {
               return t
            }, t
         }

         function mr() {
            var t = (0, i.Z)(["\n  opacity: 0;\n  background: conic-gradient(\n    from 230.29deg at 51.63% 52.16%,\n    #2400ff 0deg,\n    #0087ff 67.5deg,\n    #6c279d 198.75deg,\n    #1826a3 251.25deg,\n    #3667c4 301.88deg,\n    #691eff 360deg\n  );\n  filter: blur(160px);\n  transform: translateZ(0);\n\n  .visible & {\n    animation: ", " 4.1s ease-out forwards;\n    animation-delay: calc(var(--base-delay) + 600ms);\n  }\n"]);
            return mr = function () {
               return t
            }, t
         }

         function jr() {
            var t = (0, i.Z)(["\n  from {\n    opacity: 0;\n    mask: var(--mask-start);\n  }\n\n  to {\n    opacity: 1;\n    mask: var(--mask-end);\n  }\n"]);
            return jr = function () {
               return t
            }, t
         }

         function yr() {
            var t = (0, i.Z)(['\n  --mask-start: linear-gradient(to right, #000 25%, #000000e6 50%, #00000000) 150% 0 / 400% no-repeat;\n  --mask-end: linear-gradient(to right, #000 25%, #000000e6 50%, #00000000) 0 / 400% no-repeat;\n\n  grid-column: 1 / 1;\n  grid-row: 1 / 1;\n  border-radius: var(--radius);\n  max-width: unset;\n  width: 100%;\n  height: auto;\n  z-index: 1;\n  border: 1px solid rgba(255, 255, 255, 0.05);\n\n  opacity: 0;\n  mask: var(--mask-start);\n  filter: brightness(120%);\n\n  .visible &[data-loaded="true"] {\n    animation: ', " 400ms forwards;\n    animation-delay: calc(var(--base-delay) + 680ms);\n  }\n"]);
            return yr = function () {
               return t
            }, t
         }

         function kr() {
            var t = (0, i.Z)(["\n  0% {\n    transform: rotateX(25deg);\n  }\n\n  25% {\n    transform: rotateX(25deg) scale(0.9);\n  }\n\n  60%, to {\n    transform: none;\n  }\n"]);
            return kr = function () {
               return t
            }, t
         }

         function vr() {
            var t = (0, i.Z)(["\n  --radius: 8px;\n\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  transition: transform 400ms ease-out;\n\n  margin-top: 128px;\n\n  transform: rotateX(25deg);\n\n  &.visible {\n    animation: ", " 1400ms forwards;\n    animation-delay: calc(var(--base-delay) + 400ms);\n  }\n\n  & > * {\n    grid-row: 1 / 1;\n    grid-column: 1 / 1;\n  }\n\n  @media (max-width: 768px) {\n    margin-top: 72px;\n    --radius: 2px;\n  }\n"]);
            return vr = function () {
               return t
            }, t
         }

         function wr() {
            var t = (0, i.Z)(["\n  animation: ", " 1000ms backwards;\n\n  @media (max-width: 768px) {\n    br {\n      display: none;\n    }\n\n    font-size: 44px;\n    letter-spacing: -0.01em;\n  }\n"]);
            return wr = function () {
               return t
            }, t
         }

         function br() {
            var t = (0, i.Z)(["\n  animation: ", " 1200ms backwards;\n  animation-delay: 400ms;\n\n  @media (max-width: 768px) {\n    br {\n      display: none;\n    }\n  }\n"]);
            return br = function () {
               return t
            }, t
         }

         function Ar() {
            var t = (0, i.Z)(["\n  margin-top: 64px;\n"]);
            return Ar = function () {
               return t
            }, t
         }

         function Cr() {
            var t = (0, i.Z)(["\n  animation: ", " 1200ms backwards;\n  animation-delay: 00ms;\n"]);
            return Cr = function () {
               return t
            }, t
         }
         var zr = function () {
               var t = o.useRef(null),
                  e = (0, l.Y)(t, {
                     amount: .5,
                     once: !0
                  }),
                  n = (0, l.Y)(t, {
                     amount: "some"
                  }),
                  i = (0, qn.J)(),
                  c = (0, a.Z)(o.useState([]), 2),
                  h = c[0],
                  d = c[1];
               return o.useEffect((function () {
                  var t;
                  return !i && n && function e() {
                        t = setTimeout(e, tr()(500, 2e3));
                        var n = nr()();
                        d((function (t) {
                           return (0, ot.Z)(t).concat([{
                              id: n,
                              size: tr()(60, 180),
                              orientation: Math.random() > .5 ? "horizontal" : "vertical",
                              duration: tr()(600, 2e3)
                           }])
                        }))
                     }(),
                     function () {
                        clearTimeout(t)
                     }
               }), [n, i]), (0, s.jsxs)(Mr, {
                  children: [(0, s.jsx)(m.b, {
                     children: (0, s.jsxs)(Gr, {
                        column: !0,
                        align: "center",
                        children: [(0, s.jsx)(Kr, {
                           asChild: !0,
                           children: (0, s.jsxs)(_n.r, {
                              href: "/blog/series-b",
                              children: [(0, s.jsx)("div", {
                                 children: "Announcing our partnership with Techstars"
                              }), (0, s.jsx)(Pn.X, {
                                 style: {
                                    fill: "currentColor",
                                    marginRight: -6,
                                    width: 14,
                                    height: 14
                                 }
                              })]
                           })
                        }), (0, s.jsxs)(Fr, {
                           as: "h1",
                           fontSize: 80,
                           lineHeight: 1,
                           letterSpacing: "-0.02em",
                           fontWeight: 500,
                           align: "center",
                           margin: "24px 0 24px 0",
                           gradient: "linear-gradient(to bottom right, #FFFFFF 30%, rgba(255, 255, 255, 0.38))",
                           children: ["Accelerate your product", (0, s.jsx)("br", {}), " Growth"]
                        }), (0, s.jsxs)(Rr, {
                           as: "p",
                           color: "#B4BCD0",
                           margin: "0 0 48px 0",
                           align: "center",
                           children: ["AskMay accelerates your Hypothesis-Driven.", (0, s.jsx)("br", {}), " Experimentation for faster growth."]
                        })]
                     })
                  }), (0, s.jsxs)(Vr, {
                     size: "large",
                     children: [(0, s.jsx)("span", {
                        children: "Get started"
                     }), " ", (0, s.jsx)(Pn.X, {})]
                  }), (0, s.jsx)(Zr, {
                     children: (0, s.jsxs)(Dr, {
                        ref: t,
                        className: (0, C.Z)({
                           visible: e
                        }),
                        children: [(0, s.jsx)(Pr, {}), (0, s.jsx)(Ir, {
                           children: h.map((function (t) {
                              var e;
                              return (0, s.jsx)(Hr, {
                                 "data-orientation": t.orientation,
                                 style: (e = {}, (0, r.Z)(e, "--size", t.size), (0, r.Z)(e, "--duration", t.duration), e),
                                 onAnimationEnd: function () {
                                    d((function (e) {
                                       return e.filter((function (e) {
                                          return e.id !== t.id
                                       }))
                                    }))
                                 }
                              }, t.id)
                           }))
                        }), (0, s.jsxs)(Ur, {
                           width: "100%",
                           viewBox: "0 0 1499 778",
                           fill: "none",
                           children: [(0, s.jsx)("path", {
                              pathLength: 1,
                              d: "M1500 72L220 72"
                           }), (0, s.jsx)("path", {
                              pathLength: 1,
                              d: "M1500 128L220 128"
                           }), (0, s.jsx)("path", {
                              pathLength: 1,
                              d: "M1500 189L220 189"
                           }), (0, s.jsx)("path", {
                              pathLength: 1,
                              d: "M220 777L220 1"
                           }), (0, s.jsx)("path", {
                              pathLength: 1,
                              d: "M538 777L538 128"
                           })]
                        }), (0, s.jsx)(ir, {
                           children: (0, s.jsx)(_r, {
                              src: sr,
                              alt: "Screenshot of the Linear app showing the sidebar for the Encom workspace and a few of their projects in the roadmap.",
                              priority: !0
                           })
                        })]
                     })
                  })]
               })
            },
            Mr = u.ZP.div.withConfig({
               componentId: "sc-b3bb920f-0"
            })(or()),
            Zr = u.ZP.section.withConfig({
               componentId: "sc-b3bb920f-1"
            })(cr()),
            Or = (0, u.F4)(lr()),
            Lr = (0, u.F4)(hr()),
            Vr = (0, u.ZP)(ar.g).withConfig({
               componentId: "sc-b3bb920f-2"
            })(dr(), (0, le.e5)(10)),
            Ir = u.ZP.div.withConfig({
               componentId: "sc-b3bb920f-3"
            })(ur(), (0, p.AN)(1, "linear-gradient(to bottom, rgba(95, 106, 210, 0.2), var(--transparent))"), (0, le.Ji)(), Vr),
            Hr = u.ZP.div.withConfig({
               componentId: "sc-b3bb920f-4"
            })(pr(), Lr, Or),
            Wr = (0, u.F4)(fr()),
            Ur = u.ZP.svg.withConfig({
               componentId: "sc-b3bb920f-5"
            })(xr(), Wr),
            Er = (0, u.F4)(gr()),
            Pr = u.ZP.div.withConfig({
               componentId: "sc-b3bb920f-6"
            })(mr(), Er),
            Sr = (0, u.F4)(jr()),
            _r = (0, u.ZP)(U.Ee).withConfig({
               componentId: "sc-b3bb920f-7"
            })(yr(), Sr),
            Br = (0, u.F4)(kr()),
            Dr = (0, u.ZP)(y.UN).withConfig({
               componentId: "sc-b3bb920f-8"
            })(vr(), Br),
            Fr = (0, u.ZP)(j.x).withConfig({
               componentId: "sc-b3bb920f-9"
            })(wr(), (0, le.e5)(10)),
            Rr = (0, u.ZP)(y.IV).withConfig({
               componentId: "sc-b3bb920f-10"
            })(br(), (0, le.e5)(10)),
            Gr = (0, u.ZP)(rr.k).withConfig({
               componentId: "sc-b3bb920f-11"
            })(Ar()),
            Kr = (0, u.ZP)(Mn.D).withConfig({
               componentId: "sc-b3bb920f-12"
            })(Cr(), (0, le.e5)(10)),
            Qr = n(44520),
            Nr = n(88942),
            Tr = n(29812),
            Yr = n(93868),
            Xr = {
               src: "/_next/static/media/card-board.9af760e3.png",
               height: 1174,
               width: 2286,
               blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAcUlEQVR4nBXKMQ7CMBAEQD8CiIDKhCQIEIKG/38ocry+XZ9dIaae0Gmn7v5urS+SD9V9Z+QexQ4AjqFu6yDx694+pCaSY875IWksBfeQgJCRo6SbmS0ppSuAV611NivPsKU1ADhTms3sIin+I6VIcvoB4bxfxL27A7gAAAAASUVORK5CYII=",
               blurWidth: 8,
               blurHeight: 4
            },
            Jr = {
               src: "/_next/static/media/card-views.c4b25a64.png",
               height: 823,
               width: 1248,
               blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsElEQVR4nAGlAFr/AKSwqhnj5uQp4eDgI9LS0hrMzMwWxMTEFM7OzhSJiYkPALy+vST7+/s36urqNfn5+Sv19fUk8/PzJP///ySrq6scALy7uxW9vb0ip6eoGqOjoxaampoVnJycFZ+fnxaRkZENAP///wTn6e0I////Bf///wQAAAAAlZWVAIuLiwBmZmYAAOnp6QLNztACxcbGANja2gG2trYAX15eAIKCggBOTk4AetxaTDAnTugAAAAASUVORK5CYII=",
               blurWidth: 8,
               blurHeight: 5
            },
            qr = {
               src: "/_next/static/media/issues.82776632.png",
               height: 534,
               width: 1555,
               blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVR4nAFjAJz/AKurrSO5urwYAAAAACgqLQB3eHoAgoKDAJGYzQCKk+QAAK+wsR6sq6shpqWmHoOEhxJzdXcUiIiKDI+VygCFj+QAAC4vMAZCQUEHUlJSCEhJTAZ/gYkMgX5ABnmD2UJ3gdk4Sp8lDHHkoFcAAAAASUVORK5CYII=",
               blurWidth: 8,
               blurHeight: 3
            };

         function $r() {
            var t = (0, i.Z)(["\n  && {\n    top: 40%;\n    width: 200%;\n    max-width: unset;\n  }\n\n  @media (max-width: 768px) {\n    && {\n      top: 50%;\n    }\n  }\n"]);
            return $r = function () {
               return t
            }, t
         }

         function ta() {
            var t = (0, i.Z)(["\n  && {\n    top: 34%;\n    left: 24px;\n    width: 110%;\n    max-width: unset;\n  }\n\n  @media (max-width: 768px) {\n    && {\n      top: 40%;\n      left: 12px;\n    }\n  }\n"]);
            return ta = function () {
               return t
            }, t
         }
         var ea = function () {
               var t = o.useRef(null),
                  e = (0, l.Y)(t, {
                     amount: "some",
                     margin: "0% 0% -60% 0%"
                  });
               return (0, s.jsxs)(y.$K, {
                  $rgb: "194, 97, 254",
                  className: (0, C.Z)({
                     visible: e
                  }),
                  style: {
                     zIndex: 9
                  },
                  children: [(0, s.jsx)(y.vT, {
                     style: (0, r.Z)({}, "--bottom", "#352a4f")
                  }), (0, s.jsxs)(y.zP, {
                     id: "issues",
                     ref: t,
                     children: [(0, s.jsxs)(y.wo, {
                        as: "h2",
                        margin: "0 0 16px 0",
                        align: "center",
                        gradient: "radial-gradient(ellipse 40% 70% at 50% 100%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1))",
                        children: ["Effortless customer", (0, s.jsx)("br", {}), "needs tracking"]
                     }), (0, s.jsxs)(y.Q0, {
                        style: {
                           width: 777,
                           aspectRatio: "777 / 266"
                        },
                        children: [(0, s.jsx)(y.VA, {}), (0, s.jsx)(U.Ee, {
                           src: qr,
                           alt: "Creating an issue in Linear with the title 'Design assets' and a description 'we need to update the visual assets'."
                        })]
                     })]
                  }), (0, s.jsx)(E.r, {
                     children: (0, s.jsx)(E.M, {
                        children: (0, s.jsx)(y.Rn, {
                           as: "h3",
                           align: "center",
                           style: {
                              maxWidth: 600
                           },
                           margin: "64px 0 0 0",
                           children: "Translating to action: We log insights from client feedback and tally recurring themes for actionable outcomes."
                        })
                     })
                  }), (0, s.jsx)(y.JU, {}), (0, s.jsx)(E.r, {
                     children: (0, s.jsxs)(y.AN, {
                        children: [(0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Nr.R, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Core and minor needs."
                              }), " Break broad feedback into detailed insights."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(F.M, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Automated insight log."
                              }), " Askmay will create, auto-close and auto-archive insights."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(J.J, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Tailored processes."
                              }), " Set distinct issue stages for every team."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Tr.A, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Customizing."
                              }), " How information is shown with various perspectives and sorting options."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Qr.k, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Discussion."
                              }), " Collaborate on issues without losing context."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Yr.b, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Issue formats."
                              }), " Lead your team to draft precise needs."]
                           })]
                        })]
                     })
                  }), (0, s.jsxs)(y.oy, {
                     children: [(0, s.jsxs)(y.Zb, {
                        children: [(0, s.jsx)(y.y$, {
                           as: "h3",
                           margin: "0 0 8px 0",
                           children: "Table and panel"
                        }), (0, s.jsx)(y.Gn, {
                           as: "p",
                           color: "#B4BCD0",
                           children: "Switch between Table and panel layout to view work from any angle."
                        }), (0, s.jsx)(na, {
                           src: Xr,
                           alt: "The 'all issues' view in Linear, shown in a board layout with a few issues listed: 'hyperlink injections', 'update prosemirror packages'."
                        })]
                     }), (0, s.jsxs)(y.Zb, {
                        children: [(0, s.jsx)(y.y$, {
                           as: "h3",
                           margin: "0 0 8px 0",
                           children: "Personalize it"
                        }), (0, s.jsx)(y.Gn, {
                           as: "p",
                           color: "#B4BCD0",
                           children: "Swiftly use filters and operators to fine-tune your issue lists and craft personalized views."
                        }), (0, s.jsx)(ra, {
                           src: Jr,
                           alt: "A list of custom issue views in Linear, some favorited and some not, showing views named 'done past week', 'created by me', 'design bugs', 'feature requests', and more."
                        })]
                     })]
                  })]
               })
            },
            na = (0, u.ZP)(U.Ee).withConfig({
               componentId: "sc-ccf0ddc2-0"
            })($r()),
            ra = (0, u.ZP)(U.Ee).withConfig({
               componentId: "sc-ccf0ddc2-1"
            })(ta()),
            aa = n(70771),
            ia = n(16872),
            sa = n(47685);

         function oa() {
            var t = (0, i.Z)(["\n  max-width: 128px;\n  margin: 0 auto;\n"]);
            return oa = function () {
               return t
            }, t
         }

         function ca() {
            var t = (0, i.Z)(["\n  white-space: nowrap;\n\n  @media (max-width: 768px) {\n    && {\n      font-size: 40px;\n    }\n  }\n"]);
            return ca = function () {
               return t
            }, t
         }
         var la = {
               macos: "https://desktop.linear.app/mac",
               windows: "https://desktop.linear.app/windows/nsis/x64"
            },
            ha = function () {
               var t = (0, a.Z)(o.useState(), 2),
                  e = t[0],
                  n = t[1];
               return o.useEffect((function () {
                  n(Zn.A.os)
               }), []), (0, s.jsx)(m.b, {
                  children: (0, s.jsxs)(rr.k, {
                     column: !0,
                     gap: 36,
                     children: [(0, s.jsx)(da, {
                        src: sa.Z,
                        alt: "Linear desktop app icon"
                     }), (0, s.jsxs)(rr.k, {
                        gap: 64,
                        column: !0,
                        align: "center",
                        children: [(0, s.jsxs)(ua, {
                           as: "h2",
                           align: "center",
                           gradient: "radial-gradient(ellipse 40% 70% at 50% 0%, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 1))",
                           style: {
                              transform: "none"
                           },
                           children: ["Built for Growth.", (0, s.jsx)("br", {}), "Available Now."]
                        }), (0, s.jsxs)(rr.k, {
                           gap: 16,
                           align: "center",
                           children: [(0, s.jsx)(ar.g, {
                              size: "large",
                              children: "Sign up for free"
                           }), e && e in la ? (0, s.jsx)(y.sw, {
                              children: (0, s.jsx)(zn.z, {
                                 size: "large",
                                 kind: "secondary",
                                 asChild: !0,
                                 children: (0, s.jsxs)(_n.r, {
                                    download: !0,
                                    tab: !0,
                                    href: la[e],
                                    children: ["macos" === e ? (0, s.jsx)(aa.q, {}) : (0, s.jsx)(ia.W, {}), (0, s.jsx)("span", {
                                       children: "Download"
                                    })]
                                 })
                              })
                           }) : null]
                        })]
                     })]
                  })
               })
            },
            da = (0, u.ZP)(U.Ee).withConfig({
               componentId: "sc-965772ad-0"
            })(oa()),
            ua = (0, u.ZP)(y.wo).withConfig({
               componentId: "sc-965772ad-1"
            })(ca()),
            pa = n(69658),
            fa = n(13936),
            xa = n(69554),
            ga = {
               src: "/_next/static/media/card-roadmaps.2723f9bb.png",
               height: 692,
               width: 1130,
               blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAmElEQVR4nBXDXwfCUBgH4DfVRLHYzZguollE7FN3l67qg6R0mZmV/kgbrXPe8zu/9PAIybFVXX7aNnfOZSRn/3Wj6eHUZOLJkYcmrn3PASwAzElOz8Un3WyvudyfdqjWxtDvBB6J9z4mGRmD8PE0oTTKjt7ugSoCBQIAPZLd/bHur9bVQMoXxVQXUauizgnppShbISkS7eQHzaFz4L0mZbsAAAAASUVORK5CYII=",
               blurWidth: 8,
               blurHeight: 5
            },
            ma = {
               src: "/_next/static/media/card-updates.faf01ef5.png",
               height: 662,
               width: 1314,
               blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAj0lEQVR4nAGEAHv/ANXZ4QahoaIunJycN52dnTagoKA5paWmMsrLywXCw8MAAM7a3RG4vrxPr6+vS66urketra1LsrKzS9TU1hDS0tQAAOfo5Qq7vbw2sbGxOa2trTStra03tLS0MuHh4Qjc3NwAAP///wBAQUEKVVVVD15eXg9jY2MQX19fDQAAAAAfIB8A2P1BXaaXlkMAAAAASUVORK5CYII=",
               blurWidth: 8,
               blurHeight: 4
            },
            ja = {
               src: "/_next/static/media/roadmap.c462a185.png",
               height: 1090,
               width: 2168,
               blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nAGEAHv/APr6+QD8/P4DvrnDANXX5AKJjr0Mz9LlA////wLz8/gAAPP09wD4+PgH/fz7CPv6+ASws9kM0tToAv///wD8/P8AAAAAAAD68OoC+Pb0DP/++wmzl8EHWF3DAgAAAADDw+UAAO7t9ACpp7YA4e//AP//9QCFhMkBbnfOANvc2QHq6/MAA3dNsQTCPcUAAAAASUVORK5CYII=",
               blurWidth: 8,
               blurHeight: 4
            };

         function ya() {
            var t = (0, i.Z)(["\n  && {\n    top: 40%;\n    left: 7%;\n\n    @media (max-width: 768px) {\n      top: 50%;\n    }\n  }\n"]);
            return ya = function () {
               return t
            }, t
         }

         function ka() {
            var t = (0, i.Z)(["\n  && {\n    top: 40%;\n    left: 2%;\n\n    @media (max-width: 768px) {\n      top: 50%;\n    }\n  }\n"]);
            return ka = function () {
               return t
            }, t
         }
         var va = function () {
               var t = o.useRef(null),
                  e = (0, l.Y)(t, {
                     amount: "some",
                     margin: "0% 0% -60% 0%"
                  });
               return (0, s.jsxs)(y.$K, {
                  $rgb: "0, 225, 244",
                  className: (0, C.Z)({
                     visible: e
                  }),
                  style: {
                     zIndex: 7
                  },
                  children: [(0, s.jsx)(y.vT, {
                     style: (0, r.Z)({}, "--bottom", "#1F3140")
                  }), (0, s.jsxs)(y.zP, {
                     id: "roadmap",
                     ref: t,
                     children: [(0, s.jsxs)(y.wo, {
                        as: "h2",
                        margin: "0 0 16px 0",
                        align: "center",
                        gradient: "radial-gradient(ellipse 40% 70% at 50% 100%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1))",
                        children: ["Guide the journey ", (0, s.jsx)("br", {}), " with Roadmaps"]
                     }), (0, s.jsxs)(y.Q0, {
                        style: {
                           width: 1084,
                           aspectRatio: "1084 / 515"
                        },
                        children: [(0, s.jsx)(y.VA, {}), (0, s.jsx)(U.Ee, {
                           src: ja,
                           alt: "Linear's roadmap view in timeline mode, showing a list of projects and their associated start/end dates across the months of September, October, and November. Some of the project names are 'iOS app', 'advanced security features', 'wrap mode', and 'super sync'."
                        })]
                     })]
                  }), (0, s.jsx)(E.r, {
                     children: (0, s.jsx)(E.M, {
                        children: (0, s.jsx)(y.Rn, {
                           as: "h3",
                           align: "center",
                           style: {
                              maxWidth: 600
                           },
                           margin: "32px 0 0 0",
                           children: "Visualize planning, unite on cross-team tasks, and make informed choices with progress snapshots and project news."
                        })
                     })
                  }), (0, s.jsx)(y.JU, {}), (0, s.jsx)(E.r, {
                     children: (0, s.jsxs)(y.AN, {
                        children: [(0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(mt.y, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Cross-team endeavors."
                              }), " Join forces among teams and divisions."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Ct, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Project scripts."
                              }), " Draft briefs and specifications right in AskMay."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(fa.Q, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Tailored Roadmaps."
                              }), " Arrange tasks on diverse roadmaps."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(xa.A, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Chronology display."
                              }), " See the product's upcoming trajectory."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(M, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Project analytics."
                              }), " Monitor extent, pace, and advancement with time."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(pa.x, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Individual alerts."
                              }), " Remain informed about project movements and changes."]
                           })]
                        })]
                     })
                  }), (0, s.jsxs)(y.oy, {
                     children: [(0, s.jsxs)(y.Zb, {
                        children: [(0, s.jsx)(y.y$, {
                           as: "h3",
                           margin: "0 0 8px 0",
                           children: "Project progressions"
                        }), (0, s.jsx)(y.Gn, {
                           as: "p",
                           color: "#B4BCD0",
                           children: "Ensure all are informed about the status and advancement of projects."
                        }), (0, s.jsx)(wa, {
                           src: ma,
                           alt: "The project update panel in Linear, featuring an update for the 'iOS application' project by Jim with the following content: 'Great news: Apple has approved our app for TestFlight beta testing this morning.'"
                        })]
                     }), (0, s.jsxs)(y.Zb, {
                        children: [(0, s.jsx)(y.y$, {
                           as: "h3",
                           margin: "0 0 8px 0",
                           children: "Concentrate on the broader perspective"
                        }), (0, s.jsx)(y.Gn, {
                           as: "p",
                           color: "#B4BCD0",
                           children: "Review each growth project in a single view to discern areas requiring attention."
                        }), (0, s.jsx)(ba, {
                           src: ga,
                           alt: "A list of projects on an example 2023 roadmap, including 'advanced security', 'analytical reporting', and 'Linear 2022 Release'. Wonder what that last one could be."
                        })]
                     })]
                  })]
               })
            },
            wa = (0, u.ZP)(U.Ee).withConfig({
               componentId: "sc-b8301f2f-0"
            })(ya()),
            ba = (0, u.ZP)(U.Ee).withConfig({
               componentId: "sc-b8301f2f-1"
            })(ka()),
            Aa = n(89896),
            Ca = n(85855),
            za = n(8047),
            Ma = n(20635),
            Za = n(77315),
            Oa = n(37987),
            La = n(50405),
            Va = n(6358),
            Ia = n(92529),
            Ha = n(59139),
            Wa = n(91019);

         function Ua() {
            var t = (0, i.Z)(["\n  mask-image: none;\n\n  &::before {\n    background: linear-gradient(180deg, rgba(108, 56, 255, 0.3) 0%, rgba(139, 98, 255, 0.3) 100%);\n  }\n\n  &::after {\n    content: none;\n  }\n"]);
            return Ua = function () {
               return t
            }, t
         }

         function Ea() {
            var t = (0, i.Z)(["\n  && {\n    flex-shrink: 0;\n    margin: 0;\n    width: 148px;\n    height: 148px;\n    border-radius: 50%;\n    z-index: 2;\n  }\n"]);
            return Ea = function () {
               return t
            }, t
         }

         function Pa() {
            var t = (0, i.Z)(["\n  z-index: 1;\n  flex-shrink: 0;\n  --size: 72px;\n  width: var(--size);\n  height: var(--size);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transform: translateX(var(--x));\n  border-radius: 50%;\n  backdrop-filter: blur(8px);\n  transition: 480ms;\n  transition-property: transform, opacity;\n\n  & > * {\n    width: calc(var(--size) / 2);\n    height: calc(var(--size) / 2);\n  }\n\n  & svg {\n    fill: #fff;\n  }\n\n  background-repeat: no-repeat;\n  background-size: var(--size) var(--size);\n  background-image: url(\"data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='72' height='72' rx='36' fill='%238B62FF4D' fill-opacity='0.3'/%3E%3Crect x='.25' y='.25' width='71.5' height='71.5' rx='35.75' stroke='url(%23a)' stroke-opacity='.2' stroke-width='1'/%3E%3Cdefs%3E%3ClinearGradient id='a' x1='36' y1='0' x2='36' y2='90' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\");\n\n  .visible & {\n    opacity: 1;\n    transform: none;\n    transition-delay: calc(400ms + (var(--stagger, 0) * 150ms));\n  }\n\n  &:nth-child(1),\n  &:nth-child(2),\n  &:nth-child(3) {\n    --x: 10px;\n  }\n\n  &:nth-child(5),\n  &:nth-child(6),\n  &:nth-child(7) {\n    --x: -10px;\n  }\n\n  &:nth-child(1),\n  &:nth-child(7) {\n    --size: 40px;\n    --stagger: 2;\n  }\n\n  &:nth-child(2),\n  &:nth-child(6) {\n    --size: 56px;\n    --stagger: 1;\n  }\n\n  &:nth-child(3),\n  &:nth-child(5) {\n    --size: 72px;\n  }\n"]);
            return Pa = function () {
               return t
            }, t
         }

         function Sa() {
            var t = (0, i.Z)(["\n  margin-top: -48px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n"]);
            return Sa = function () {
               return t
            }, t
         }

         function _a() {
            var t = (0, i.Z)(["\n  from {\n    opacity: 0;\n    transform: translate(-50%, -50%) scale(0.9);\n  }\n\n  40%, 50% {\n    opacity: var(--opacity);\n    transform: translate(-50%, -50%) scale(1);\n  }\n\n  100% {\n    opacity: 0;\n  }\n"]);
            return _a = function () {
               return t
            }, t
         }

         function Ba() {
            var t = (0, i.Z)(["\n  position: absolute;\n  z-index: 0;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  overflow: visible;\n  width: 242px;\n  height: 242px;\n\n  && {\n    margin: 0;\n  }\n\n  & > div {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border-radius: 50%;\n    border: 1px solid #ac8eff;\n    opacity: 0;\n    background: linear-gradient(90deg, #150b30 0%, #5b39b8 100%);\n    transition: opacity 480ms;\n  }\n\n  .visible & div {\n    opacity: 1;\n    animation: ", " 3400ms infinite backwards;\n    animation-delay: calc(500ms + var(--delay, 0s));\n  }\n\n  & div:nth-child(1) {\n    --opacity: 0.3;\n    width: 210px;\n    height: 210px;\n    --delay: 0s;\n  }\n\n  & div:nth-child(2) {\n    --opacity: 0.2;\n    width: 280px;\n    height: 280px;\n    --delay: 0.4s;\n  }\n\n  & div:nth-child(3) {\n    --opacity: 0.15;\n    width: 360px;\n    height: 360px;\n    --delay: 0.8s;\n  }\n"]);
            return Ba = function () {
               return t
            }, t
         }
         var Da = function () {
               var t = o.useRef(null),
                  e = (0, l.Y)(t, {
                     amount: "some",
                     margin: "0% 0% -60% 0%"
                  });
               return (0, s.jsxs)(y.$K, {
                  $rgb: "62, 36, 118",
                  className: (0, C.Z)({
                     visible: e
                  }),
                  style: {
                     zIndex: 6
                  },
                  children: [(0, s.jsx)(y.vT, {
                     style: (0, r.Z)({}, "--bottom", "#3E2476")
                  }), (0, s.jsxs)(y.zP, {
                     id: "workflows",
                     children: [(0, s.jsx)(y.Ig, {
                        style: {
                           zIndex: 1
                        },
                        children: (0, s.jsxs)(y.wo, {
                           ref: t,
                           as: "h2",
                           margin: "0 0 16px 0",
                           align: "center",
                           children: ["Askmay processes:", (0, s.jsx)("br", {}), " Driving growth results."]
                        })
                     }), (0, s.jsxs)(Qa, {
                        children: [(0, s.jsx)(Ga, {
                           style: (0, r.Z)({}, "--size", "40px"),
                           children: (0, s.jsx)(Ma.Y, {
                              monochrome: !0
                           })
                        }), (0, s.jsx)(Ga, {
                           style: (0, r.Z)({}, "--size", "56px"),
                           children: (0, s.jsx)(Aa.A, {})
                        }), (0, s.jsx)(Ga, {
                           children: (0, s.jsx)(Ia.v, {})
                        }), (0, s.jsxs)(Ra, {
                           children: [(0, s.jsx)(Fa, {}), Ka]
                        }), (0, s.jsx)(Ga, {
                           children: (0, s.jsx)(Za.j, {})
                        }), (0, s.jsx)(Ga, {
                           style: (0, r.Z)({}, "--size", "56px"),
                           children: (0, s.jsx)(zt.f, {})
                        }), (0, s.jsx)(Ga, {
                           style: (0, r.Z)({}, "--size", "40px"),
                           children: (0, s.jsx)(Oa.p, {})
                        }), (0, s.jsxs)(Ta, {
                           children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {})]
                        })]
                     })]
                  }), (0, s.jsx)(E.r, {
                     children: (0, s.jsx)(E.M, {
                        children: (0, s.jsx)(y.Rn, {
                           as: "h3",
                           align: "center",
                           style: {
                              maxWidth: 650
                           },
                           margin: "96px 0 0 0",
                           children: "From customer interview integrations to powerful insight automations, Askmay streamlines the entire product growth development process."
                        })
                     })
                  }), (0, s.jsx)(Wa.L, {
                     height: "40px"
                  }), (0, s.jsx)(m.b, {
                     children: (0, s.jsx)(rr.k, {
                        justify: "center",
                        children: (0, s.jsx)(Mn.D, {
                           asChild: !0,
                           children: (0, s.jsxs)(_n.r, {
                              href: "/integrations",
                              children: [(0, s.jsx)("div", {
                                 children: "Explore Integrations."
                              }), (0, s.jsx)(Pn.X, {})]
                           })
                        })
                     })
                  }), (0, s.jsx)(Ha.Z, {
                     kind: "fading",
                     margin: "72px 0"
                  }), (0, s.jsx)(E.r, {
                     children: (0, s.jsxs)(y.AN, {
                        children: [(0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(zt.f, {}), (0, s.jsx)(Aa.A, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Gsuit."
                              }), " Sync Calendar and calls that record customer interviews."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Va.m, {
                              monochrome: !0
                           }), (0, s.jsx)(za.D, {
                              monochrome: !0
                           }), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Slack and Discord."
                              }), " Create issues and set up alerts."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(La.$, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "CRM."
                              }), " Log calls, transcription, and meeting notes into your CRM."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Ca.H, {
                              monochrome: !0
                           }), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Video conferencing."
                              }), " Record and transcribe meetings from Google Meet, Zoom and other apps."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Za.j, {}), (0, s.jsx)(Oa.p, {}), (0, s.jsx)(Ia.v, {}), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Collaboration."
                              }), " Automatically share meeting transcripts, notes, and recordings to a channel."]
                           })]
                        }), (0, s.jsxs)(y.L0, {
                           children: [(0, s.jsx)(Ma.Y, {
                              monochrome: !0
                           }), (0, s.jsxs)(y.Gn, {
                              as: "h4",
                              children: [(0, s.jsx)("span", {
                                 children: "Audio recording."
                              }), " Transcribe and save calls recorded through Zoom Cloud Recording."]
                           })]
                        })]
                     })
                  }), (0, s.jsx)(Wa.L, {
                     height: "140px"
                  })]
               })
            },
            Fa = (0, u.ZP)(y.VA).withConfig({
               componentId: "sc-57431cae-0"
            })(Ua()),
            Ra = (0, u.ZP)(y.Q0).withConfig({
               componentId: "sc-57431cae-1"
            })(Ea()),
            Ga = u.ZP.div.withConfig({
               componentId: "sc-57431cae-2"
            })(Pa()),
            Ka = (0, s.jsxs)("svg", {
               xmlns: "http://www.w3.org/2000/svg",
               width: "88",
               height: "88",
               fill: "none",
               children: [(0, s.jsx)("g", {
                  filter: "url(#a)",
                  children: (0, s.jsx)("path", {
                     fill: "url(#b)",
                     fillOpacity: "0.8",
                     fillRule: "evenodd",
                     d: "M43.809 81.206c20.656 0 37.402-16.746 37.402-37.403 0-20.656-16.746-37.402-37.402-37.402-20.657 0-37.403 16.745-37.403 37.402S23.152 81.206 43.81 81.206zm-.78-57.662a3.896 3.896 0 00-3.896 3.896v13.246H27.445a3.896 3.896 0 000 7.792h11.688v11.689a3.896 3.896 0 107.792 0V48.478h13.247a3.896 3.896 0 000-7.792H46.925V27.44a3.896 3.896 0 00-3.896-3.896z",
                     clipRule: "evenodd"
                  })
               }), (0, s.jsx)("path", {
                  stroke: "url(#c)",
                  strokeOpacity: "0.2",
                  strokeWidth: "1.558",
                  d: "M80.432 43.803c0 20.227-16.397 36.623-36.623 36.623-20.227 0-36.624-16.396-36.624-36.623C7.185 23.577 23.582 7.18 43.81 7.18c20.226 0 36.623 16.397 36.623 36.623zM43.029 22.764a4.675 4.675 0 00-4.675 4.676v12.467H27.445a4.675 4.675 0 100 9.35h10.91v10.91a4.675 4.675 0 109.35 0v-10.91h12.467a4.675 4.675 0 100-9.35H47.705V27.44a4.675 4.675 0 00-4.676-4.676z"
               }), (0, s.jsxs)("defs", {
                  children: [(0, s.jsxs)("linearGradient", {
                     id: "b",
                     x1: "43.809",
                     x2: "43.809",
                     y1: "6.401",
                     y2: "81.206",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#6C38FF"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#B59AFF"
                     })]
                  }), (0, s.jsxs)("linearGradient", {
                     id: "c",
                     x1: "43.809",
                     x2: "43.809",
                     y1: "6.401",
                     y2: "81.206",
                     gradientUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("stop", {
                        stopColor: "#fff"
                     }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: "#fff",
                        stopOpacity: "0"
                     })]
                  }), (0, s.jsxs)("filter", {
                     id: "a",
                     width: "74.805",
                     height: "74.805",
                     x: "6.406",
                     y: "6.401",
                     colorInterpolationFilters: "sRGB",
                     filterUnits: "userSpaceOnUse",
                     children: [(0, s.jsx)("feFlood", {
                        floodOpacity: "0",
                        result: "BackgroundImageFix"
                     }), (0, s.jsx)("feBlend", {
                        in: "SourceGraphic",
                        in2: "BackgroundImageFix",
                        result: "shape"
                     }), (0, s.jsx)("feColorMatrix", {
                        in: "SourceAlpha",
                        result: "hardAlpha",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                     }), (0, s.jsx)("feOffset", {
                        dy: "3.117"
                     }), (0, s.jsx)("feComposite", {
                        in2: "hardAlpha",
                        k2: "-1",
                        k3: "1",
                        operator: "arithmetic"
                     }), (0, s.jsx)("feColorMatrix", {
                        values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"
                     }), (0, s.jsx)("feBlend", {
                        in2: "shape",
                        result: "effect1_innerShadow_1678_93891"
                     })]
                  })]
               })]
            }),
            Qa = u.ZP.div.withConfig({
               componentId: "sc-57431cae-3"
            })(Sa()),
            Na = (0, u.F4)(_a()),
            Ta = u.ZP.div.withConfig({
               componentId: "sc-57431cae-4"
            })(Ba(), Na),
            Ya = n(24213),
            Xa = n(97361),
            Ja = n(55920),
            qa = n(13110);

         function $a() {
            var t = (0, i.Z)(["\n  && {\n    margin: -128px auto;\n  }\n"]);
            return $a = function () {
               return t
            }, t
         }

         function ti() {
            var t = (0, i.Z)(["\n  && {\n    margin: -64px auto;\n  }\n"]);
            return ti = function () {
               return t
            }, t
         }

         function ei() {
            var t = (0, i.Z)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: var(--header-height);\n  z-index: calc(var(--layer-header) - 2);\n  background: rgba(255, 255, 255, 0.01);\n\n  transition: 320ms;\n  transition-property: opacity, transform;\n\n  opacity: ", ";\n  transform: ", ";\n  backdrop-filter: ", ";\n\n  & > div {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    overflow: auto;\n    ", '\n    height: var(--header-height);\n\n    &::before {\n      content: "";\n      margin-left: var(--page-padding-left);\n      margin-right: var(--page-padding-right);\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      height: 1px;\n      background: rgba(255, 255, 255, 0.08);\n    }\n  }\n\n  & ', " {\n    overflow: hidden;\n    cursor: pointer;\n    background: rgba(255, 255, 255, 0.05);\n    width: var(--closed) !important;\n    text-shadow:\n      1px 1px 4px rgba(0, 0, 0, 0.3),\n      2px 2px 4px rgba(0, 0, 0, 0.1);\n    will-change: width;\n    backdrop-filter: none;\n\n    :hover {\n      background: rgba(255, 255, 255, 0.1);\n    }\n\n    span {\n      background: none;\n    }\n  }\n\n  & ", ".active {\n    span {\n      background: rgba(255, 255, 255, 0.2);\n    }\n\n    width: var(--open) !important;\n    background: rgba(255, 255, 255, 0.15);\n  }\n\n  @media (max-width: 768px) {\n    & > div {\n      gap: 4px;\n    }\n\n    ", ".active {\n      width: var(--closed) !important;\n\n      span {\n        background: none;\n      }\n\n      background: rgba(255, 255, 255, 0.3);\n    }\n  }\n"]);
            return ei = function () {
               return t
            }, t
         }

         function ni() {
            var t = (0, i.Z)(["\n  html {\n    scroll-behavior: smooth;\n    scroll-padding-top: calc(var(--header-height) * 2 + 64px);\n  }\n"]);
            return ni = function () {
               return t
            }, t
         }
         var ri = function () {
            return (0, s.jsxs)(Ya.A, {
               children: [(0, s.jsx)(hi, {}), (0, s.jsx)(Xa.N, {
                  title: "Linear – A better way to build products",
                  description: "Linear streamlines issues, sprints, and product roadmaps. It’s the new standard for modern software development.",
                  image: "https://linear.app/static/og/home.jpg",
                  structuredData: qa.Q
               }), (0, s.jsxs)(c.A, {
                  reducedMotion: "user",
                  children: [(0, s.jsx)(zr, {}), (0, s.jsx)(w, {}), (0, s.jsx)(ii, {
                     $color: "#7877C6",
                     children: (0, s.jsx)(f.O, {})
                  }), (0, s.jsx)(Nn, {}), (0, s.jsx)(ci, {}), (0, s.jsx)(Wa.L, {
                     height: "-128px"
                  }), (0, s.jsx)(si, {
                     style: {
                        transform: "rotate(180deg)"
                     },
                     $color: "#4e5cda",
                     children: (0, s.jsx)(f.O, {})
                  }), (0, s.jsx)(Wa.L, {
                     height: "-128px"
                  }), (0, s.jsx)(ha, {}), (0, s.jsx)(Wa.L, {
                     height: "128px"
                  })]
               }), (0, s.jsx)(d.Z, {
                  children: (0, s.jsx)("svg", {
                     "aria-hidden": !0,
                     children: (0, s.jsx)("filter", {
                        id: "noiseFilter",
                        children: (0, s.jsx)("feTurbulence", {
                           type: "fractalNoise",
                           baseFrequency: "6.29",
                           numOctaves: "6",
                           stitchTiles: "stitch"
                        })
                     })
                  })
               })]
            })
         };
         ri.theme = Ja.n.glass;
         var ai = ri,
            ii = (0, u.ZP)(y.Z2).withConfig({
               componentId: "sc-9d685d32-0"
            })($a()),
            si = (0, u.ZP)(y.Z2).withConfig({
               componentId: "sc-9d685d32-1"
            })(ti()),
            oi = {
               margin: "0px 0px 1000px 0px",
               amount: 0
            },
            ci = function () {
               var t, e, n, i, c = (0, a.Z)(o.useState("issues"), 2),
                  d = c[0],
                  u = c[1],
                  p = o.useRef(null),
                  f = (0, l.Y)(p, {
                     margin: "0% 0% -60% 0%"
                  }),
                  x = o.useRef(null),
                  g = o.useRef(null),
                  j = o.useRef(null),
                  y = o.useRef(null),
                  k = (0, l.Y)(x, oi),
                  v = (0, l.Y)(g, oi),
                  w = (0, l.Y)(j, oi),
                  b = (0, l.Y)(y, oi);
               return (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(li, {
                     $open: f,
                     tabIndex: f ? void 0 : -1,
                     children: (0, s.jsxs)(m.b, {
                        children: [(0, s.jsx)(_n.r, {
                           href: "#issues",
                           children: (0, s.jsxs)(Mn.D, {
                              style: (t = {}, (0, r.Z)(t, "--closed", "66px"), (0, r.Z)(t, "--open", "178px"), t),
                              className: "issues" === d ? "active" : void 0,
                              children: [(0, s.jsx)("span", {
                                 children: "Issues"
                              }), (0, s.jsx)("div", {
                                 children: "Track your work"
                              })]
                           })
                        }), (0, s.jsx)(_n.r, {
                           href: "#cycles",
                           children: (0, s.jsxs)(Mn.D, {
                              style: (e = {}, (0, r.Z)(e, "--closed", "68px"), (0, r.Z)(e, "--open", "183px"), e),
                              className: "cycles" === d ? "active" : void 0,
                              children: [(0, s.jsx)("span", {
                                 children: "Cycles"
                              }), (0, s.jsx)("div", {
                                 children: "Focus your team"
                              })]
                           })
                        }), (0, s.jsx)(_n.r, {
                           href: "#roadmap",
                           children: (0, s.jsxs)(Mn.D, {
                              style: (n = {}, (0, r.Z)(n, "--closed", "91px"), (0, r.Z)(n, "--open", "218px"), n),
                              className: "roadmap" === d ? "active" : void 0,
                              children: [(0, s.jsx)("span", {
                                 children: "Roadmaps"
                              }), (0, s.jsx)("div", {
                                 children: "Plan your product"
                              })]
                           })
                        }), (0, s.jsx)(_n.r, {
                           href: "#workflows",
                           children: (0, s.jsxs)(Mn.D, {
                              style: (i = {}, (0, r.Z)(i, "--closed", "92px"), (0, r.Z)(i, "--open", "226px"), i),
                              className: "workflows" === d ? "active" : void 0,
                              children: [(0, s.jsx)("span", {
                                 children: "Workflows"
                              }), (0, s.jsx)("div", {
                                 children: "Integrate your tools"
                              })]
                           })
                        })]
                     })
                  }), (0, s.jsxs)("div", {
                     ref: p,
                     children: [(0, s.jsx)(h.E.div, {
                        ref: x,
                        onViewportEnter: function () {
                           return u("issues")
                        },
                        viewport: {
                           margin: "-30% 0% -70% 0%"
                        },
                        className: k ? "enabled" : void 0,
                        children: (0, s.jsx)(ea, {})
                     }), (0, s.jsx)(h.E.div, {
                        ref: g,
                        onViewportEnter: function () {
                           return u("cycles")
                        },
                        viewport: {
                           margin: "-30% 0% -70% 0%"
                        },
                        className: v ? "enabled" : void 0,
                        children: (0, s.jsx)(S, {})
                     }), (0, s.jsx)(h.E.div, {
                        ref: j,
                        onViewportEnter: function () {
                           return u("roadmap")
                        },
                        viewport: {
                           margin: "-30% 0% -70% 0%"
                        },
                        className: w ? "enabled" : void 0,
                        children: (0, s.jsx)(va, {})
                     }), (0, s.jsx)(h.E.div, {
                        ref: y,
                        onViewportEnter: function () {
                           return u("workflows")
                        },
                        viewport: {
                           margin: "-30% 0% -70% 0%"
                        },
                        className: b ? "enabled" : void 0,
                        children: (0, s.jsx)(Da, {})
                     })]
                  })]
               })
            },
            li = u.ZP.nav.withConfig({
               componentId: "sc-9d685d32-2"
            })(ei(), (function (t) {
               return t.$open ? 1 : 0
            }), (function (t) {
               return t.$open ? "none" : "translateY(-100%)"
            }), (function (t) {
               return t.$open ? "blur(12px)" : "none"
            }), (0, p.KG)(), Mn.D, Mn.D, Mn.D),
            hi = (0, u.vJ)(ni())
      },
      13110: function (t, e, n) {
         n.d(e, {
            Q: function () {
               return r
            }
         });
         var r = {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Linear",
            legalName: "Linear Orbit Inc.",
            url: "https://linear.app",
            logo: "https://linear.app/static/brand/logotype-color.png?v=2",
            sameAs: ["https://twitter.com/linear", "https://github.com/linear"]
         }
      }
   }
]);