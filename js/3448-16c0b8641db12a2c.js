(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3448], {
       94840: function (e, t, n) {
          "use strict";
          n.d(t, {
             B: function () {
                return u
             }
          });
          var r = n(70079),
             o = n(36646),
             i = n(49270),
             a = n(94251);
 
          function u(e) {
             let t = e + "CollectionProvider",
                [n, u] = (0, o.b)(t),
                [s, c] = n(t, {
                   collectionRef: {
                      current: null
                   },
                   itemMap: new Map
                }),
                l = e + "CollectionSlot",
                d = r.forwardRef(((e, t) => {
                   let {
                      scope: n,
                      children: o
                   } = e, u = c(l, n), s = (0, i.e)(t, u.collectionRef);
                   return r.createElement(a.g7, {
                      ref: s
                   }, o)
                })),
                f = e + "CollectionItemSlot",
                v = "data-radix-collection-item",
                p = r.forwardRef(((e, t) => {
                   let {
                      scope: n,
                      children: o,
                      ...u
                   } = e, s = r.useRef(null), l = (0, i.e)(t, s), d = c(f, n);
                   return r.useEffect((() => (d.itemMap.set(s, {
                      ref: s,
                      ...u
                   }), () => {
                      d.itemMap.delete(s)
                   }))), r.createElement(a.g7, {
                      [v]: "",
                      ref: l
                   }, o)
                }));
             return [{
                Provider: e => {
                   let {
                      scope: t,
                      children: n
                   } = e, o = r.useRef(null), i = r.useRef(new Map).current;
                   return r.createElement(s, {
                      scope: t,
                      itemMap: i,
                      collectionRef: o
                   }, n)
                },
                Slot: d,
                ItemSlot: p
             }, function (t) {
                let n = c(e + "CollectionConsumer", t),
                   o = r.useCallback((() => {
                      let e = n.collectionRef.current;
                      if (!e) return [];
                      let t = Array.from(e.querySelectorAll(`[${v}]`)),
                         r = Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)));
                      return r
                   }), [n.collectionRef, n.itemMap]);
                return o
             }, u]
          }
       },
       83785: function (e, t, n) {
          "use strict";
          n.d(t, {
             VY: function () {
                return Pe
             },
             ck: function () {
                return Re
             },
             Uv: function () {
                return Se
             },
             fC: function () {
                return ye
             },
             Z0: function () {
                return Ce
             },
             xz: function () {
                return _e
             }
          });
          var r = n(45675),
             o = n(70079),
             i = n(72901),
             a = n(36646),
             u = n(80320),
             s = n(50644),
             c = n(94840),
             l = n(49270),
             d = n(28036),
             f = n(83609),
             v = n(54386),
             p = n(1557),
             m = (n(88817), n(49356)),
             g = n(98322),
             h = n(55691),
             b = n(88843),
             M = n(94251),
             w = n(9137),
             E = n(60382),
             y = n(16905);
          let _ = ["Enter", " "],
             S = ["ArrowUp", "PageDown", "End"],
             P = ["ArrowDown", "PageUp", "Home", ...S],
             R = "Menu",
             [C, A, F] = (0, c.B)(R),
             [O, k] = (0, a.b)(R, [F, m.D7, b.Pc]),
             x = (0, m.D7)(),
             T = (0, b.Pc)(),
             [L, N] = O(R),
             [B, I] = O(R),
             D = e => {
                let {
                   __scopeMenu: t,
                   open: n = !1,
                   children: r,
                   dir: i,
                   onOpenChange: a,
                   modal: u = !0
                } = e, s = x(t), [c, l] = (0, o.useState)(null), f = (0, o.useRef)(!1), v = (0, w.W)(a), p = (0, d.gm)(i);
                return (0, o.useEffect)((() => {
                   let e = () => {
                         f.current = !0, document.addEventListener("pointerdown", t, {
                            capture: !0,
                            once: !0
                         }), document.addEventListener("pointermove", t, {
                            capture: !0,
                            once: !0
                         })
                      },
                      t = () => f.current = !1;
                   return document.addEventListener("keydown", e, {
                      capture: !0
                   }), () => {
                      document.removeEventListener("keydown", e, {
                         capture: !0
                      }), document.removeEventListener("pointerdown", t, {
                         capture: !0
                      }), document.removeEventListener("pointermove", t, {
                         capture: !0
                      })
                   }
                }), []), (0, o.createElement)(m.fC, s, (0, o.createElement)(L, {
                   scope: t,
                   open: n,
                   onOpenChange: v,
                   content: c,
                   onContentChange: l
                }, (0, o.createElement)(B, {
                   scope: t,
                   onClose: (0, o.useCallback)((() => v(!1)), [v]),
                   isUsingKeyboardRef: f,
                   dir: p,
                   modal: u
                }, r)))
             },
             W = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeMenu: n,
                   ...r
                } = e, i = x(n);
                return (0, o.createElement)(m.ee, (0, s.Z)({}, i, r, {
                   ref: t
                }))
             })),
             V = "MenuPortal",
             [Z, j] = O(V, {
                forceMount: void 0
             }),
             K = e => {
                let {
                   __scopeMenu: t,
                   forceMount: n,
                   children: r,
                   container: i
                } = e, a = N(V, t);
                return (0, o.createElement)(Z, {
                   scope: t,
                   forceMount: n
                }, (0, o.createElement)(h.z, {
                   present: n || a.open
                }, (0, o.createElement)(g.h, {
                   asChild: !0,
                   container: i
                }, r)))
             },
             z = "MenuContent",
             [G, U] = O(z),
             q = (0, o.forwardRef)(((e, t) => {
                let n = j(z, e.__scopeMenu),
                   {
                      forceMount: r = n.forceMount,
                      ...i
                   } = e,
                   a = N(z, e.__scopeMenu),
                   u = I(z, e.__scopeMenu);
                return (0, o.createElement)(C.Provider, {
                   scope: e.__scopeMenu
                }, (0, o.createElement)(h.z, {
                   present: r || a.open
                }, (0, o.createElement)(C.Slot, {
                   scope: e.__scopeMenu
                }, u.modal ? (0, o.createElement)(H, (0, s.Z)({}, i, {
                   ref: t
                })) : (0, o.createElement)(X, (0, s.Z)({}, i, {
                   ref: t
                })))))
             })),
             H = (0, o.forwardRef)(((e, t) => {
                let n = N(z, e.__scopeMenu),
                   r = (0, o.useRef)(null),
                   a = (0, l.e)(t, r);
                return (0, o.useEffect)((() => {
                   let e = r.current;
                   if (e) return (0, E.Ry)(e)
                }), []), (0, o.createElement)(Y, (0, s.Z)({}, e, {
                   ref: a,
                   trapFocus: n.open,
                   disableOutsidePointerEvents: n.open,
                   disableOutsideScroll: !0,
                   onFocusOutside: (0, i.M)(e.onFocusOutside, (e => e.preventDefault()), {
                      checkForDefaultPrevented: !1
                   }),
                   onDismiss: () => n.onOpenChange(!1)
                }))
             })),
             X = (0, o.forwardRef)(((e, t) => {
                let n = N(z, e.__scopeMenu);
                return (0, o.createElement)(Y, (0, s.Z)({}, e, {
                   ref: t,
                   trapFocus: !1,
                   disableOutsidePointerEvents: !1,
                   disableOutsideScroll: !1,
                   onDismiss: () => n.onOpenChange(!1)
                }))
             })),
             Y = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeMenu: n,
                   loop: r = !1,
                   trapFocus: a,
                   onOpenAutoFocus: u,
                   onCloseAutoFocus: c,
                   disableOutsidePointerEvents: d,
                   onEntryFocus: g,
                   onEscapeKeyDown: h,
                   onPointerDownOutside: w,
                   onFocusOutside: E,
                   onInteractOutside: _,
                   onDismiss: R,
                   disableOutsideScroll: C,
                   ...F
                } = e, O = N(z, n), k = I(z, n), L = x(n), B = T(n), D = A(n), [W, V] = (0, o.useState)(null), Z = (0, o.useRef)(null), j = (0, l.e)(t, Z, O.onContentChange), K = (0, o.useRef)(0), U = (0, o.useRef)(""), q = (0, o.useRef)(0), H = (0, o.useRef)(null), X = (0, o.useRef)("right"), Y = (0, o.useRef)(0), Q = C ? y.Z : o.Fragment, $ = C ? {
                   as: M.g7,
                   allowPinchZoom: !0
                } : void 0;
                (0, o.useEffect)((() => () => window.clearTimeout(K.current)), []), (0, v.EW)();
                let J = (0, o.useCallback)((e => {
                   var t, n;
                   return X.current === (null === (t = H.current) || void 0 === t ? void 0 : t.side) && function (e, t) {
                      if (!t) return !1;
                      return function (e, t) {
                         let {
                            x: n,
                            y: r
                         } = e, o = !1;
                         for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                            let a = t[e].x,
                               u = t[e].y,
                               s = t[i].x,
                               c = t[i].y;
                            u > r != c > r && n < (s - a) * (r - u) / (c - u) + a && (o = !o)
                         }
                         return o
                      }({
                         x: e.clientX,
                         y: e.clientY
                      }, t)
                   }(e, null === (n = H.current) || void 0 === n ? void 0 : n.area)
                }), []);
                return (0, o.createElement)(G, {
                   scope: n,
                   searchRef: U,
                   onItemEnter: (0, o.useCallback)((e => {
                      J(e) && e.preventDefault()
                   }), [J]),
                   onItemLeave: (0, o.useCallback)((e => {
                      var t;
                      J(e) || (null === (t = Z.current) || void 0 === t || t.focus(), V(null))
                   }), [J]),
                   onTriggerLeave: (0, o.useCallback)((e => {
                      J(e) && e.preventDefault()
                   }), [J]),
                   pointerGraceTimerRef: q,
                   onPointerGraceIntentChange: (0, o.useCallback)((e => {
                      H.current = e
                   }), [])
                }, (0, o.createElement)(Q, $, (0, o.createElement)(p.M, {
                   asChild: !0,
                   trapped: a,
                   onMountAutoFocus: (0, i.M)(u, (e => {
                      var t;
                      e.preventDefault(), null === (t = Z.current) || void 0 === t || t.focus()
                   })),
                   onUnmountAutoFocus: c
                }, (0, o.createElement)(f.XB, {
                   asChild: !0,
                   disableOutsidePointerEvents: d,
                   onEscapeKeyDown: h,
                   onPointerDownOutside: w,
                   onFocusOutside: E,
                   onInteractOutside: _,
                   onDismiss: R
                }, (0, o.createElement)(b.fC, (0, s.Z)({
                   asChild: !0
                }, B, {
                   dir: k.dir,
                   orientation: "vertical",
                   loop: r,
                   currentTabStopId: W,
                   onCurrentTabStopIdChange: V,
                   onEntryFocus: (0, i.M)(g, (e => {
                      k.isUsingKeyboardRef.current || e.preventDefault()
                   }))
                }), (0, o.createElement)(m.VY, (0, s.Z)({
                   role: "menu",
                   "aria-orientation": "vertical",
                   "data-state": ce(O.open),
                   "data-radix-menu-content": "",
                   dir: k.dir
                }, L, F, {
                   ref: j,
                   style: {
                      outline: "none",
                      ...F.style
                   },
                   onKeyDown: (0, i.M)(F.onKeyDown, (e => {
                      let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                         n = e.ctrlKey || e.altKey || e.metaKey,
                         r = 1 === e.key.length;
                      t && ("Tab" === e.key && e.preventDefault(), !n && r && (e => {
                         var t, n;
                         let r = U.current + e,
                            o = D().filter((e => !e.disabled)),
                            i = document.activeElement,
                            a = null === (t = o.find((e => e.ref.current === i))) || void 0 === t ? void 0 : t.textValue,
                            u = o.map((e => e.textValue)),
                            s = function (e, t, n) {
                               var r;
                               let o = t.length > 1 && Array.from(t).every((e => e === t[0])),
                                  i = o ? t[0] : t,
                                  a = n ? e.indexOf(n) : -1,
                                  u = (r = Math.max(a, 0), e.map(((t, n) => e[(r + n) % e.length])));
                               1 === i.length && (u = u.filter((e => e !== n)));
                               let s = u.find((e => e.toLowerCase().startsWith(i.toLowerCase())));
                               return s !== n ? s : void 0
                            }(u, r, a),
                            c = null === (n = o.find((e => e.textValue === s))) || void 0 === n ? void 0 : n.ref.current;
                         ! function e(t) {
                            U.current = t, window.clearTimeout(K.current), "" !== t && (K.current = window.setTimeout((() => e("")), 1e3))
                         }(r), c && setTimeout((() => c.focus()))
                      })(e.key));
                      let o = Z.current;
                      if (e.target !== o || !P.includes(e.key)) return;
                      e.preventDefault();
                      let i = D().filter((e => !e.disabled)),
                         a = i.map((e => e.ref.current));
                      S.includes(e.key) && a.reverse(),
                         function (e) {
                            let t = document.activeElement;
                            for (let n of e)
                               if (n === t || (n.focus(), document.activeElement !== t)) return
                         }(a)
                   })),
                   onBlur: (0, i.M)(e.onBlur, (e => {
                      e.currentTarget.contains(e.target) || (window.clearTimeout(K.current), U.current = "")
                   })),
                   onPointerMove: (0, i.M)(e.onPointerMove, le((e => {
                      let t = e.target,
                         n = Y.current !== e.clientX;
                      if (e.currentTarget.contains(t) && n) {
                         let t = e.clientX > Y.current ? "right" : "left";
                         X.current = t, Y.current = e.clientX
                      }
                   })))
                })))))))
             })),
             Q = ((0, o.forwardRef)(((e, t) => {
                let {
                   __scopeMenu: n,
                   ...r
                } = e;
                return (0, o.createElement)(u.WV.div, (0, s.Z)({
                   role: "group"
                }, r, {
                   ref: t
                }))
             })), "MenuItem"),
             $ = "menu.itemSelect",
             J = (0, o.forwardRef)(((e, t) => {
                let {
                   disabled: n = !1,
                   onSelect: r,
                   ...a
                } = e, c = (0, o.useRef)(null), d = I(Q, e.__scopeMenu), f = U(Q, e.__scopeMenu), v = (0, l.e)(t, c), p = (0, o.useRef)(!1);
                return (0, o.createElement)(ee, (0, s.Z)({}, a, {
                   ref: v,
                   disabled: n,
                   onClick: (0, i.M)(e.onClick, (() => {
                      let e = c.current;
                      if (!n && e) {
                         let t = new CustomEvent($, {
                            bubbles: !0,
                            cancelable: !0
                         });
                         e.addEventListener($, (e => null == r ? void 0 : r(e)), {
                            once: !0
                         }), (0, u.jH)(e, t), t.defaultPrevented ? p.current = !1 : d.onClose()
                      }
                   })),
                   onPointerDown: t => {
                      var n;
                      null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), p.current = !0
                   },
                   onPointerUp: (0, i.M)(e.onPointerUp, (e => {
                      var t;
                      p.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                   })),
                   onKeyDown: (0, i.M)(e.onKeyDown, (e => {
                      let t = "" !== f.searchRef.current;
                      !n && (!t || " " !== e.key) && _.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                   }))
                }))
             })),
             ee = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeMenu: n,
                   disabled: r = !1,
                   textValue: a,
                   ...c
                } = e, d = U(Q, n), f = T(n), v = (0, o.useRef)(null), p = (0, l.e)(t, v), [m, g] = (0, o.useState)(!1), [h, M] = (0, o.useState)("");
                return (0, o.useEffect)((() => {
                   let e = v.current;
                   var t;
                   e && M((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                }), [c.children]), (0, o.createElement)(C.ItemSlot, {
                   scope: n,
                   disabled: r,
                   textValue: null != a ? a : h
                }, (0, o.createElement)(b.ck, (0, s.Z)({
                   asChild: !0
                }, f, {
                   focusable: !r
                }), (0, o.createElement)(u.WV.div, (0, s.Z)({
                   role: "menuitem",
                   "data-highlighted": m ? "" : void 0,
                   "aria-disabled": r || void 0,
                   "data-disabled": r ? "" : void 0
                }, c, {
                   ref: p,
                   onPointerMove: (0, i.M)(e.onPointerMove, le((e => {
                      if (r) d.onItemLeave(e);
                      else if (d.onItemEnter(e), !e.defaultPrevented) {
                         e.currentTarget.focus()
                      }
                   }))),
                   onPointerLeave: (0, i.M)(e.onPointerLeave, le((e => d.onItemLeave(e)))),
                   onFocus: (0, i.M)(e.onFocus, (() => g(!0))),
                   onBlur: (0, i.M)(e.onBlur, (() => g(!1)))
                }))))
             })),
             [te, ne] = O("MenuRadioGroup", {
                value: void 0,
                onValueChange: () => {}
             }),
             re = "MenuItemIndicator",
             [oe, ie] = O(re, {
                checked: !1
             }),
             ae = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeMenu: n,
                   ...r
                } = e;
                return (0, o.createElement)(u.WV.div, (0, s.Z)({
                   role: "separator",
                   "aria-orientation": "horizontal"
                }, r, {
                   ref: t
                }))
             })),
             [ue, se] = O("MenuSub");
 
          function ce(e) {
             return e ? "open" : "closed"
          }
 
          function le(e) {
             return t => "mouse" === t.pointerType ? e(t) : void 0
          }
          n(86004);
          let de = "ContextMenu",
             [fe, ve] = (0, a.b)(de, [k]),
             pe = k(),
             [me, ge] = fe(de),
             he = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeContextMenu: n,
                   disabled: a = !1,
                   ...s
                } = e, c = ge("ContextMenuTrigger", n), l = pe(n), d = (0, o.useRef)({
                   x: 0,
                   y: 0
                }), f = (0, o.useRef)({
                   getBoundingClientRect: () => DOMRect.fromRect({
                      width: 0,
                      height: 0,
                      ...d.current
                   })
                }), v = (0, o.useRef)(0), p = (0, o.useCallback)((() => window.clearTimeout(v.current)), []), m = e => {
                   d.current = {
                      x: e.clientX,
                      y: e.clientY
                   }, c.onOpenChange(!0)
                };
                return (0, o.useEffect)((() => p), [p]), (0, o.useEffect)((() => {
                   a && p()
                }), [a, p]), (0, o.createElement)(o.Fragment, null, (0, o.createElement)(W, (0, r.Z)({}, l, {
                   virtualRef: f
                })), (0, o.createElement)(u.WV.span, (0, r.Z)({
                   "data-state": c.open ? "open" : "closed",
                   "data-disabled": a ? "" : void 0
                }, s, {
                   ref: t,
                   style: {
                      WebkitTouchCallout: "none",
                      ...e.style
                   },
                   onContextMenu: a ? e.onContextMenu : (0, i.M)(e.onContextMenu, (e => {
                      p(), m(e), e.preventDefault()
                   })),
                   onPointerDown: a ? e.onPointerDown : (0, i.M)(e.onPointerDown, Ee((e => {
                      p(), v.current = window.setTimeout((() => m(e)), 700)
                   }))),
                   onPointerMove: a ? e.onPointerMove : (0, i.M)(e.onPointerMove, Ee(p)),
                   onPointerCancel: a ? e.onPointerCancel : (0, i.M)(e.onPointerCancel, Ee(p)),
                   onPointerUp: a ? e.onPointerUp : (0, i.M)(e.onPointerUp, Ee(p))
                })))
             })),
             be = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeContextMenu: n,
                   ...i
                } = e, a = ge("ContextMenuContent", n), u = pe(n), s = (0, o.useRef)(!1);
                return (0, o.createElement)(q, (0, r.Z)({}, u, i, {
                   ref: t,
                   side: "right",
                   sideOffset: 2,
                   align: "start",
                   onCloseAutoFocus: t => {
                      var n;
                      null === (n = e.onCloseAutoFocus) || void 0 === n || n.call(e, t), !t.defaultPrevented && s.current && t.preventDefault(), s.current = !1
                   },
                   onInteractOutside: t => {
                      var n;
                      null === (n = e.onInteractOutside) || void 0 === n || n.call(e, t), t.defaultPrevented || a.modal || (s.current = !0)
                   },
                   style: {
                      ...e.style,
                      "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                      "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
                      "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
                      "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
                      "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
                   }
                }))
             })),
             Me = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeContextMenu: n,
                   ...i
                } = e, a = pe(n);
                return (0, o.createElement)(J, (0, r.Z)({}, a, i, {
                   ref: t
                }))
             })),
             we = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeContextMenu: n,
                   ...i
                } = e, a = pe(n);
                return (0, o.createElement)(ae, (0, r.Z)({}, a, i, {
                   ref: t
                }))
             }));
 
          function Ee(e) {
             return t => "mouse" !== t.pointerType ? e(t) : void 0
          }
          let ye = e => {
                let {
                   __scopeContextMenu: t,
                   children: n,
                   onOpenChange: i,
                   dir: a,
                   modal: u = !0
                } = e, [s, c] = (0, o.useState)(!1), l = pe(t), d = (0, w.W)(i), f = (0, o.useCallback)((e => {
                   c(e), d(e)
                }), [d]);
                return (0, o.createElement)(me, {
                   scope: t,
                   open: s,
                   onOpenChange: f,
                   modal: u
                }, (0, o.createElement)(D, (0, r.Z)({}, l, {
                   dir: a,
                   open: s,
                   onOpenChange: f,
                   modal: u
                }), n))
             },
             _e = he,
             Se = e => {
                let {
                   __scopeContextMenu: t,
                   ...n
                } = e, i = pe(t);
                return (0, o.createElement)(K, (0, r.Z)({}, i, n))
             },
             Pe = be,
             Re = Me,
             Ce = we
       },
       28036: function (e, t, n) {
          "use strict";
          n.d(t, {
             gm: function () {
                return i
             }
          });
          var r = n(70079);
          let o = (0, r.createContext)(void 0);
 
          function i(e) {
             let t = (0, r.useContext)(o);
             return e || t || "ltr"
          }
       },
       54386: function (e, t, n) {
          "use strict";
          n.d(t, {
             EW: function () {
                return i
             }
          });
          var r = n(70079);
          let o = 0;
 
          function i() {
             (0, r.useEffect)((() => {
                var e, t;
                let n = document.querySelectorAll("[data-radix-focus-guard]");
                return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : a()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : a()), o++, () => {
                   1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), o--
                }
             }), [])
          }
 
          function a() {
             let e = document.createElement("span");
             return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e
          }
       },
       1557: function (e, t, n) {
          "use strict";
          let r;
          n.d(t, {
             M: function () {
                return f
             }
          });
          var o = n(50644),
             i = n(70079),
             a = n(49270),
             u = n(80320),
             s = n(9137);
          let c = "focusScope.autoFocusOnMount",
             l = "focusScope.autoFocusOnUnmount",
             d = {
                bubbles: !1,
                cancelable: !0
             },
             f = (0, i.forwardRef)(((e, t) => {
                let {
                   loop: n = !1,
                   trapped: r = !1,
                   onMountAutoFocus: f,
                   onUnmountAutoFocus: h,
                   ...b
                } = e, [M, w] = (0, i.useState)(null), E = (0, s.W)(f), y = (0, s.W)(h), _ = (0, i.useRef)(null), S = (0, a.e)(t, (e => w(e))), P = (0, i.useRef)({
                   paused: !1,
                   pause() {
                      this.paused = !0
                   },
                   resume() {
                      this.paused = !1
                   }
                }).current;
                (0, i.useEffect)((() => {
                   if (r) {
                      function e(e) {
                         if (P.paused || !M) return;
                         let t = e.target;
                         M.contains(t) ? _.current = t : m(_.current, {
                            select: !0
                         })
                      }
 
                      function t(e) {
                         P.paused || !M || M.contains(e.relatedTarget) || m(_.current, {
                            select: !0
                         })
                      }
                      return document.addEventListener("focusin", e), document.addEventListener("focusout", t), () => {
                         document.removeEventListener("focusin", e), document.removeEventListener("focusout", t)
                      }
                   }
                }), [r, M, P.paused]), (0, i.useEffect)((() => {
                   if (M) {
                      g.add(P);
                      let e = document.activeElement;
                      if (!M.contains(e)) {
                         let t = new CustomEvent(c, d);
                         M.addEventListener(c, E), M.dispatchEvent(t), t.defaultPrevented || (function (e, {
                            select: t = !1
                         } = {}) {
                            let n = document.activeElement;
                            for (let r of e)
                               if (m(r, {
                                     select: t
                                  }), document.activeElement !== n) return
                         }(v(M).filter((e => "A" !== e.tagName)), {
                            select: !0
                         }), document.activeElement === e && m(M))
                      }
                      return () => {
                         M.removeEventListener(c, E), setTimeout((() => {
                            let t = new CustomEvent(l, d);
                            M.addEventListener(l, y), M.dispatchEvent(t), t.defaultPrevented || m(null != e ? e : document.body, {
                               select: !0
                            }), M.removeEventListener(l, y), g.remove(P)
                         }), 0)
                      }
                   }
                }), [M, E, y, P]);
                let R = (0, i.useCallback)((e => {
                   if (!n && !r || P.paused) return;
                   let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                      o = document.activeElement;
                   if (t && o) {
                      let t = e.currentTarget,
                         [r, i] = function (e) {
                            let t = v(e);
                            return [p(t, e), p(t.reverse(), e)]
                         }(t);
                      r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && m(i, {
                         select: !0
                      })) : (e.preventDefault(), n && m(r, {
                         select: !0
                      })) : o === t && e.preventDefault()
                   }
                }), [n, r, P.paused]);
                return (0, i.createElement)(u.WV.div, (0, o.Z)({
                   tabIndex: -1
                }, b, {
                   ref: S,
                   onKeyDown: R
                }))
             }));
 
          function v(e) {
             let t = [],
                n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                   acceptNode: e => {
                      let t = "INPUT" === e.tagName && "hidden" === e.type;
                      return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                   }
                });
             for (; n.nextNode();) t.push(n.currentNode);
             return t
          }
 
          function p(e, t) {
             for (let n of e)
                if (! function (e, {
                      upTo: t
                   }) {
                      if ("hidden" === getComputedStyle(e).visibility) return !0;
                      for (; e && (void 0 === t || e !== t);) {
                         if ("none" === getComputedStyle(e).display) return !0;
                         e = e.parentElement
                      }
                      return !1
                   }(n, {
                      upTo: t
                   })) return n
          }
 
          function m(e, {
             select: t = !1
          } = {}) {
             if (e && e.focus) {
                var n;
                let r = document.activeElement;
                e.focus({
                   preventScroll: !0
                }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
             }
          }
          let g = (r = [], {
             add(e) {
                let t = r[0];
                e !== t && (null == t || t.pause()), (r = h(r, e)).unshift(e)
             },
             remove(e) {
                var t;
                null === (t = (r = h(r, e))[0]) || void 0 === t || t.resume()
             }
          });
 
          function h(e, t) {
             let n = [...e],
                r = n.indexOf(t);
             return -1 !== r && n.splice(r, 1), n
          }
       },
       22951: function (e, t, n) {
          "use strict";
          n.d(t, {
             VY: function () {
                return de
             },
             aV: function () {
                return ue
             },
             ck: function () {
                return se
             },
             fC: function () {
                return ae
             },
             l_: function () {
                return fe
             },
             rU: function () {
                return le
             },
             xz: function () {
                return ce
             }
          });
          var r = n(45675),
             o = n(70079),
             i = (n(99581), n(36646)),
             a = n(72901),
             u = n(80320),
             s = n(86004),
             c = n(49270),
             l = n(28036),
             d = n(55691),
             f = n(88817),
             v = n(94840),
             p = n(83609),
             m = n(41114),
             g = n(79388),
             h = n(9137),
             b = n(4810);
          let M = "NavigationMenu",
             [w, E, y] = (0, v.B)(M),
             [_, S, P] = (0, v.B)(M),
             [R, C] = (0, i.b)(M, [y, P]),
             [A, F] = R(M),
             [O, k] = R(M),
             x = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   value: i,
                   onValueChange: a,
                   defaultValue: d,
                   delayDuration: f = 200,
                   skipDelayDuration: v = 300,
                   orientation: p = "horizontal",
                   dir: m,
                   ...g
                } = e, [h, b] = (0, o.useState)(null), M = (0, c.e)(t, (e => b(e))), w = (0, l.gm)(m), E = (0, o.useRef)(0), y = (0, o.useRef)(0), _ = (0, o.useRef)(0), [S, P] = (0, o.useState)(!0), [R = "", C] = (0, s.T)({
                   prop: i,
                   onChange: e => {
                      "" !== e ? (window.clearTimeout(_.current), v > 0 && P(!1)) : (window.clearTimeout(_.current), _.current = window.setTimeout((() => P(!0)), v)), null == a || a(e)
                   },
                   defaultProp: d
                }), A = (0, o.useCallback)((() => {
                   window.clearTimeout(y.current), y.current = window.setTimeout((() => C("")), 150)
                }), [C]), F = (0, o.useCallback)((e => {
                   window.clearTimeout(y.current), C(e)
                }), [C]), O = (0, o.useCallback)((e => {
                   R === e ? window.clearTimeout(y.current) : E.current = window.setTimeout((() => {
                      window.clearTimeout(y.current), C(e)
                   }), f)
                }), [R, C, f]);
                return (0, o.useEffect)((() => () => {
                   window.clearTimeout(E.current), window.clearTimeout(y.current), window.clearTimeout(_.current)
                }), []), (0, o.createElement)(T, {
                   scope: n,
                   isRootMenu: !0,
                   value: R,
                   dir: w,
                   orientation: p,
                   rootNavigationMenu: h,
                   onTriggerEnter: e => {
                      window.clearTimeout(E.current), S ? O(e) : F(e)
                   },
                   onTriggerLeave: () => {
                      window.clearTimeout(E.current), A()
                   },
                   onContentEnter: () => window.clearTimeout(y.current),
                   onContentLeave: A,
                   onItemSelect: e => {
                      C((t => t === e ? "" : e))
                   },
                   onItemDismiss: () => C("")
                }, (0, o.createElement)(u.WV.nav, (0, r.Z)({
                   "aria-label": "Main",
                   "data-orientation": p,
                   dir: w
                }, g, {
                   ref: M
                })))
             })),
             T = e => {
                let {
                   scope: t,
                   isRootMenu: n,
                   rootNavigationMenu: r,
                   dir: i,
                   orientation: a,
                   children: u,
                   value: s,
                   onItemSelect: c,
                   onItemDismiss: l,
                   onTriggerEnter: d,
                   onTriggerLeave: v,
                   onContentEnter: p,
                   onContentLeave: g
                } = e, [b, M] = (0, o.useState)(null), [E, y] = (0, o.useState)(new Map), [_, S] = (0, o.useState)(null);
                return (0, o.createElement)(A, {
                   scope: t,
                   isRootMenu: n,
                   rootNavigationMenu: r,
                   value: s,
                   previousValue: (0, m.D)(s),
                   baseId: (0, f.M)(),
                   dir: i,
                   orientation: a,
                   viewport: b,
                   onViewportChange: M,
                   indicatorTrack: _,
                   onIndicatorTrackChange: S,
                   onTriggerEnter: (0, h.W)(d),
                   onTriggerLeave: (0, h.W)(v),
                   onContentEnter: (0, h.W)(p),
                   onContentLeave: (0, h.W)(g),
                   onItemSelect: (0, h.W)(c),
                   onItemDismiss: (0, h.W)(l),
                   onViewportContentChange: (0, o.useCallback)(((e, t) => {
                      y((n => (n.set(e, t), new Map(n))))
                   }), []),
                   onViewportContentRemove: (0, o.useCallback)((e => {
                      y((t => t.has(e) ? (t.delete(e), new Map(t)) : t))
                   }), [])
                }, (0, o.createElement)(w.Provider, {
                   scope: t
                }, (0, o.createElement)(O, {
                   scope: t,
                   items: E
                }, u)))
             },
             L = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   ...i
                } = e, a = F("NavigationMenuList", n), s = (0, o.createElement)(u.WV.ul, (0, r.Z)({
                   "data-orientation": a.orientation
                }, i, {
                   ref: t
                }));
                return (0, o.createElement)(u.WV.div, {
                   style: {
                      position: "relative"
                   },
                   ref: a.onIndicatorTrackChange
                }, (0, o.createElement)(w.Slot, {
                   scope: n
                }, a.isRootMenu ? (0, o.createElement)(Y, {
                   asChild: !0
                }, s) : s))
             })),
             [N, B] = R("NavigationMenuItem"),
             I = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   value: i,
                   ...a
                } = e, s = (0, f.M)(), c = (0, o.useRef)(null), l = (0, o.useRef)(null), d = (0, o.useRef)(null), v = (0, o.useRef)((() => {})), p = (0, o.useRef)(!1), m = (0, o.useCallback)(((e = "start") => {
                   if (c.current) {
                      v.current();
                      let t = J(c.current);
                      t.length && ee("start" === e ? t : t.reverse())
                   }
                }), []), g = (0, o.useCallback)((() => {
                   if (c.current) {
                      let e = J(c.current);
                      e.length && (v.current = (e.forEach((e => {
                         e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                      })), () => {
                         e.forEach((e => {
                            let t = e.dataset.tabindex;
                            e.setAttribute("tabindex", t)
                         }))
                      }))
                   }
                }), []);
                return (0, o.createElement)(N, {
                   scope: n,
                   value: i || s || "LEGACY_REACT_AUTO_VALUE",
                   triggerRef: l,
                   contentRef: c,
                   focusProxyRef: d,
                   wasEscapeCloseRef: p,
                   onEntryKeyDown: m,
                   onFocusProxyEnter: m,
                   onRootContentClose: g,
                   onContentFocusOutside: g
                }, (0, o.createElement)(u.WV.li, (0, r.Z)({}, a, {
                   ref: t
                })))
             })),
             D = "NavigationMenuTrigger",
             W = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   disabled: i,
                   ...s
                } = e, l = F(D, e.__scopeNavigationMenu), d = B(D, e.__scopeNavigationMenu), f = (0, o.useRef)(null), v = (0, c.e)(f, d.triggerRef, t), p = re(l.baseId, d.value), m = oe(l.baseId, d.value), g = (0, o.useRef)(!1), h = (0, o.useRef)(!1), M = d.value === l.value;
                return (0, o.createElement)(o.Fragment, null, (0, o.createElement)(w.ItemSlot, {
                   scope: n,
                   value: d.value
                }, (0, o.createElement)($, {
                   asChild: !0
                }, (0, o.createElement)(u.WV.button, (0, r.Z)({
                   id: p,
                   disabled: i,
                   "data-disabled": i ? "" : void 0,
                   "data-state": ne(M),
                   "aria-expanded": M,
                   "aria-controls": m
                }, s, {
                   ref: v,
                   onPointerEnter: (0, a.M)(e.onPointerEnter, (() => {
                      h.current = !1, d.wasEscapeCloseRef.current = !1
                   })),
                   onPointerMove: (0, a.M)(e.onPointerMove, ie((() => {
                      i || h.current || d.wasEscapeCloseRef.current || g.current || (l.onTriggerEnter(d.value), g.current = !0)
                   }))),
                   onPointerLeave: (0, a.M)(e.onPointerLeave, ie((() => {
                      i || (l.onTriggerLeave(), g.current = !1)
                   }))),
                   onClick: (0, a.M)(e.onClick, (() => {
                      l.onItemSelect(d.value), h.current = M
                   })),
                   onKeyDown: (0, a.M)(e.onKeyDown, (e => {
                      let t = {
                         horizontal: "ArrowDown",
                         vertical: "rtl" === l.dir ? "ArrowLeft" : "ArrowRight"
                      } [l.orientation];
                      M && e.key === t && (d.onEntryKeyDown(), e.preventDefault())
                   }))
                })))), M && (0, o.createElement)(o.Fragment, null, (0, o.createElement)(b.f, {
                   "aria-hidden": !0,
                   tabIndex: 0,
                   ref: d.focusProxyRef,
                   onFocus: e => {
                      let t = d.contentRef.current,
                         n = e.relatedTarget,
                         r = n === f.current,
                         o = null == t ? void 0 : t.contains(n);
                      (r || !o) && d.onFocusProxyEnter(r ? "start" : "end")
                   }
                }), l.viewport && (0, o.createElement)("span", {
                   "aria-owns": m
                })))
             })),
             V = "navigationMenu.linkSelect",
             Z = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   active: i,
                   onSelect: s,
                   ...c
                } = e;
                return (0, o.createElement)($, {
                   asChild: !0
                }, (0, o.createElement)(u.WV.a, (0, r.Z)({
                   "data-active": i ? "" : void 0,
                   "aria-current": i ? "page" : void 0
                }, c, {
                   ref: t,
                   onClick: (0, a.M)(e.onClick, (e => {
                      let t = e.target,
                         n = new CustomEvent(V, {
                            bubbles: !0,
                            cancelable: !0
                         });
                      if (t.addEventListener(V, (e => null == s ? void 0 : s(e)), {
                            once: !0
                         }), (0, u.jH)(t, n), !n.defaultPrevented) {
                         let e = new CustomEvent(G, {
                            bubbles: !0,
                            cancelable: !0
                         });
                         (0, u.jH)(t, e)
                      }
                   }), {
                      checkForDefaultPrevented: !1
                   })
                })))
             })),
             j = "NavigationMenuContent",
             K = (0, o.forwardRef)(((e, t) => {
                let {
                   forceMount: n,
                   ...i
                } = e, u = F(j, e.__scopeNavigationMenu), s = B(j, e.__scopeNavigationMenu), l = (0, c.e)(s.contentRef, t), f = s.value === u.value, v = {
                   value: s.value,
                   triggerRef: s.triggerRef,
                   focusProxyRef: s.focusProxyRef,
                   wasEscapeCloseRef: s.wasEscapeCloseRef,
                   onContentFocusOutside: s.onContentFocusOutside,
                   onRootContentClose: s.onRootContentClose,
                   ...i
                };
                return u.viewport ? (0, o.createElement)(z, (0, r.Z)({
                   forceMount: n
                }, v, {
                   ref: l
                })) : (0, o.createElement)(d.z, {
                   present: n || f
                }, (0, o.createElement)(U, (0, r.Z)({
                   "data-state": ne(f)
                }, v, {
                   ref: l,
                   onPointerEnter: (0, a.M)(e.onPointerEnter, u.onContentEnter),
                   onPointerLeave: (0, a.M)(e.onPointerLeave, ie(u.onContentLeave)),
                   style: {
                      pointerEvents: !f && u.isRootMenu ? "none" : void 0,
                      ...v.style
                   }
                })))
             })),
             z = (0, o.forwardRef)(((e, t) => {
                let n = F(j, e.__scopeNavigationMenu),
                   {
                      onViewportContentChange: r,
                      onViewportContentRemove: o
                   } = n;
                return (0, g.b)((() => {
                   r(e.value, {
                      ref: t,
                      ...e
                   })
                }), [e, t, r]), (0, g.b)((() => () => o(e.value)), [e.value, o]), null
             })),
             G = "navigationMenu.rootContentDismiss",
             U = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   value: i,
                   triggerRef: u,
                   focusProxyRef: s,
                   wasEscapeCloseRef: l,
                   onRootContentClose: d,
                   onContentFocusOutside: f,
                   ...v
                } = e, m = F(j, n), g = (0, o.useRef)(null), h = (0, c.e)(g, t), b = re(m.baseId, i), M = oe(m.baseId, i), w = E(n), y = (0, o.useRef)(null), {
                   onItemDismiss: _
                } = m;
                (0, o.useEffect)((() => {
                   let e = g.current;
                   if (m.isRootMenu && e) {
                      let t = () => {
                         var t;
                         _(), d(), e.contains(document.activeElement) && (null === (t = u.current) || void 0 === t || t.focus())
                      };
                      return e.addEventListener(G, t), () => e.removeEventListener(G, t)
                   }
                }), [m.isRootMenu, e.value, u, _, d]);
                let S = (0, o.useMemo)((() => {
                   let e = w().map((e => e.value));
                   "rtl" === m.dir && e.reverse();
                   let t = e.indexOf(m.value),
                      n = e.indexOf(m.previousValue),
                      r = i === m.value,
                      o = n === e.indexOf(i);
                   if (!r && !o) return y.current;
                   let a = (() => {
                      if (t !== n) {
                         if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                         if (o && -1 !== t) return t > n ? "to-start" : "to-end"
                      }
                      return null
                   })();
                   return y.current = a, a
                }), [m.previousValue, m.value, m.dir, w, i]);
                return (0, o.createElement)(Y, {
                   asChild: !0
                }, (0, o.createElement)(p.XB, (0, r.Z)({
                   id: M,
                   "aria-labelledby": b,
                   "data-motion": S,
                   "data-orientation": m.orientation
                }, v, {
                   ref: h,
                   onDismiss: () => {
                      var e;
                      let t = new Event(G, {
                         bubbles: !0,
                         cancelable: !0
                      });
                      null === (e = g.current) || void 0 === e || e.dispatchEvent(t)
                   },
                   onFocusOutside: (0, a.M)(e.onFocusOutside, (e => {
                      var t;
                      f();
                      let n = e.target;
                      null !== (t = m.rootNavigationMenu) && void 0 !== t && t.contains(n) && e.preventDefault()
                   })),
                   onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, (e => {
                      var t;
                      let n = e.target,
                         r = w().some((e => {
                            var t;
                            return null === (t = e.ref.current) || void 0 === t ? void 0 : t.contains(n)
                         })),
                         o = m.isRootMenu && (null === (t = m.viewport) || void 0 === t ? void 0 : t.contains(n));
                      (r || o || !m.isRootMenu) && e.preventDefault()
                   })),
                   onKeyDown: (0, a.M)(e.onKeyDown, (e => {
                      let t = e.altKey || e.ctrlKey || e.metaKey;
                      if ("Tab" === e.key && !t) {
                         let t = J(e.currentTarget),
                            r = document.activeElement,
                            o = t.findIndex((e => e === r));
                         var n;
                         if (ee(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length))) e.preventDefault();
                         else null === (n = s.current) || void 0 === n || n.focus()
                      }
                   })),
                   onEscapeKeyDown: (0, a.M)(e.onEscapeKeyDown, (e => {
                      l.current = !0
                   }))
                })))
             })),
             q = "NavigationMenuViewport",
             H = (0, o.forwardRef)(((e, t) => {
                let {
                   forceMount: n,
                   ...i
                } = e, a = F(q, e.__scopeNavigationMenu), u = Boolean(a.value);
                return (0, o.createElement)(d.z, {
                   present: n || u
                }, (0, o.createElement)(X, (0, r.Z)({}, i, {
                   ref: t
                })))
             })),
             X = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   children: i,
                   ...s
                } = e, l = F(q, n), f = (0, c.e)(t, l.onViewportChange), v = k(j, e.__scopeNavigationMenu), [p, m] = (0, o.useState)(null), [g, h] = (0, o.useState)(null), b = p ? (null == p ? void 0 : p.width) + "px" : void 0, M = p ? (null == p ? void 0 : p.height) + "px" : void 0, w = Boolean(l.value), E = w ? l.value : l.previousValue;
                return te(g, (() => {
                   g && m({
                      width: g.offsetWidth,
                      height: g.offsetHeight
                   })
                })), (0, o.createElement)(u.WV.div, (0, r.Z)({
                   "data-state": ne(w),
                   "data-orientation": l.orientation
                }, s, {
                   ref: f,
                   style: {
                      pointerEvents: !w && l.isRootMenu ? "none" : void 0,
                      "--radix-navigation-menu-viewport-width": b,
                      "--radix-navigation-menu-viewport-height": M,
                      ...s.style
                   },
                   onPointerEnter: (0, a.M)(e.onPointerEnter, l.onContentEnter),
                   onPointerLeave: (0, a.M)(e.onPointerLeave, ie(l.onContentLeave))
                }), Array.from(v.items).map((([e, {
                   ref: t,
                   forceMount: n,
                   ...i
                }]) => {
                   let a = E === e;
                   return (0, o.createElement)(d.z, {
                      key: e,
                      present: n || a
                   }, (0, o.createElement)(U, (0, r.Z)({}, i, {
                      ref: (0, c.F)(t, (e => {
                         a && e && h(e)
                      }))
                   })))
                })))
             })),
             Y = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   ...i
                } = e, a = F("FocusGroup", n);
                return (0, o.createElement)(_.Provider, {
                   scope: n
                }, (0, o.createElement)(_.Slot, {
                   scope: n
                }, (0, o.createElement)(u.WV.div, (0, r.Z)({
                   dir: a.dir
                }, i, {
                   ref: t
                }))))
             })),
             Q = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
             $ = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeNavigationMenu: n,
                   ...i
                } = e, s = S(n), c = F("FocusGroupItem", n);
                return (0, o.createElement)(_.ItemSlot, {
                   scope: n
                }, (0, o.createElement)(u.WV.button, (0, r.Z)({}, i, {
                   ref: t,
                   onKeyDown: (0, a.M)(e.onKeyDown, (e => {
                      if (["Home", "End", ...Q].includes(e.key)) {
                         let t = s().map((e => e.ref.current));
                         if (["rtl" === c.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), Q.includes(e.key)) {
                            let n = t.indexOf(e.currentTarget);
                            t = t.slice(n + 1)
                         }
                         setTimeout((() => ee(t))), e.preventDefault()
                      }
                   }))
                })))
             }));
 
          function J(e) {
             let t = [],
                n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                   acceptNode: e => {
                      let t = "INPUT" === e.tagName && "hidden" === e.type;
                      return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                   }
                });
             for (; n.nextNode();) t.push(n.currentNode);
             return t
          }
 
          function ee(e) {
             let t = document.activeElement;
             return e.some((e => e === t || (e.focus(), document.activeElement !== t)))
          }
 
          function te(e, t) {
             let n = (0, h.W)(t);
             (0, g.b)((() => {
                let t = 0;
                if (e) {
                   let r = new ResizeObserver((() => {
                      cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
                   }));
                   return r.observe(e), () => {
                      window.cancelAnimationFrame(t), r.unobserve(e)
                   }
                }
             }), [e, n])
          }
 
          function ne(e) {
             return e ? "open" : "closed"
          }
 
          function re(e, t) {
             return `${e}-trigger-${t}`
          }
 
          function oe(e, t) {
             return `${e}-content-${t}`
          }
 
          function ie(e) {
             return t => "mouse" === t.pointerType ? e(t) : void 0
          }
          let ae = x,
             ue = L,
             se = I,
             ce = W,
             le = Z,
             de = K,
             fe = H
       },
       39073: function (e, t, n) {
          "use strict";
          n.d(t, {
             WV: function () {
                return a
             }
          });
          var r = n(50644),
             o = n(70079);
          n(99581);
          var i = n(94251);
          let a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, t) => {
             let n = (0, o.forwardRef)(((e, n) => {
                let {
                   asChild: a,
                   ...u
                } = e, s = a ? i.g7 : t;
                return (0, o.useEffect)((() => {
                   window[Symbol.for("radix-ui")] = !0
                }), []), (0, o.createElement)(s, (0, r.Z)({}, u, {
                   ref: n
                }))
             }));
             return n.displayName = `Primitive.${t}`, {
                ...e,
                [t]: n
             }
          }), {})
       },
       88843: function (e, t, n) {
          "use strict";
          n.d(t, {
             Pc: function () {
                return E
             },
             ck: function () {
                return O
             },
             fC: function () {
                return F
             }
          });
          var r = n(50644),
             o = n(70079),
             i = n(72901),
             a = n(94840),
             u = n(49270),
             s = n(36646),
             c = n(88817),
             l = n(80320),
             d = n(9137),
             f = n(86004),
             v = n(28036);
          let p = "rovingFocusGroup.onEntryFocus",
             m = {
                bubbles: !1,
                cancelable: !0
             },
             g = "RovingFocusGroup",
             [h, b, M] = (0, a.B)(g),
             [w, E] = (0, s.b)(g, [M]),
             [y, _] = w(g),
             S = (0, o.forwardRef)(((e, t) => (0, o.createElement)(h.Provider, {
                scope: e.__scopeRovingFocusGroup
             }, (0, o.createElement)(h.Slot, {
                scope: e.__scopeRovingFocusGroup
             }, (0, o.createElement)(P, (0, r.Z)({}, e, {
                ref: t
             })))))),
             P = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeRovingFocusGroup: n,
                   orientation: a,
                   loop: s = !1,
                   dir: c,
                   currentTabStopId: g,
                   defaultCurrentTabStopId: h,
                   onCurrentTabStopIdChange: M,
                   onEntryFocus: w,
                   ...E
                } = e, _ = (0, o.useRef)(null), S = (0, u.e)(t, _), P = (0, v.gm)(c), [R = null, C] = (0, f.T)({
                   prop: g,
                   defaultProp: h,
                   onChange: M
                }), [F, O] = (0, o.useState)(!1), k = (0, d.W)(w), x = b(n), T = (0, o.useRef)(!1), [L, N] = (0, o.useState)(0);
                return (0, o.useEffect)((() => {
                   let e = _.current;
                   if (e) return e.addEventListener(p, k), () => e.removeEventListener(p, k)
                }), [k]), (0, o.createElement)(y, {
                   scope: n,
                   orientation: a,
                   dir: P,
                   loop: s,
                   currentTabStopId: R,
                   onItemFocus: (0, o.useCallback)((e => C(e)), [C]),
                   onItemShiftTab: (0, o.useCallback)((() => O(!0)), []),
                   onFocusableItemAdd: (0, o.useCallback)((() => N((e => e + 1))), []),
                   onFocusableItemRemove: (0, o.useCallback)((() => N((e => e - 1))), [])
                }, (0, o.createElement)(l.WV.div, (0, r.Z)({
                   tabIndex: F || 0 === L ? -1 : 0,
                   "data-orientation": a
                }, E, {
                   ref: S,
                   style: {
                      outline: "none",
                      ...e.style
                   },
                   onMouseDown: (0, i.M)(e.onMouseDown, (() => {
                      T.current = !0
                   })),
                   onFocus: (0, i.M)(e.onFocus, (e => {
                      let t = !T.current;
                      if (e.target === e.currentTarget && t && !F) {
                         let t = new CustomEvent(p, m);
                         if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                            let e = x().filter((e => e.focusable));
                            A([e.find((e => e.active)), e.find((e => e.id === R)), ...e].filter(Boolean).map((e => e.ref.current)))
                         }
                      }
                      T.current = !1
                   })),
                   onBlur: (0, i.M)(e.onBlur, (() => O(!1)))
                })))
             })),
             R = (0, o.forwardRef)(((e, t) => {
                let {
                   __scopeRovingFocusGroup: n,
                   focusable: a = !0,
                   active: u = !1,
                   tabStopId: s,
                   ...d
                } = e, f = (0, c.M)(), v = s || f, p = _("RovingFocusGroupItem", n), m = p.currentTabStopId === v, g = b(n), {
                   onFocusableItemAdd: M,
                   onFocusableItemRemove: w
                } = p;
                return (0, o.useEffect)((() => {
                   if (a) return M(), () => w()
                }), [a, M, w]), (0, o.createElement)(h.ItemSlot, {
                   scope: n,
                   id: v,
                   focusable: a,
                   active: u
                }, (0, o.createElement)(l.WV.span, (0, r.Z)({
                   tabIndex: m ? 0 : -1,
                   "data-orientation": p.orientation
                }, d, {
                   ref: t,
                   onMouseDown: (0, i.M)(e.onMouseDown, (e => {
                      a ? p.onItemFocus(v) : e.preventDefault()
                   })),
                   onFocus: (0, i.M)(e.onFocus, (() => p.onItemFocus(v))),
                   onKeyDown: (0, i.M)(e.onKeyDown, (e => {
                      if ("Tab" === e.key && e.shiftKey) return void p.onItemShiftTab();
                      if (e.target !== e.currentTarget) return;
                      let t = function (e, t, n) {
                         var r;
                         let o = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                         if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o) || "horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return C[o]
                      }(e, p.orientation, p.dir);
                      if (void 0 !== t) {
                         e.preventDefault();
                         let o = g().filter((e => e.focusable)),
                            i = o.map((e => e.ref.current));
                         if ("last" === t) i.reverse();
                         else if ("prev" === t || "next" === t) {
                            var n, r;
                            "prev" === t && i.reverse();
                            let o = i.indexOf(e.currentTarget);
                            i = p.loop ? (r = o + 1, (n = i).map(((e, t) => n[(r + t) % n.length]))) : i.slice(o + 1)
                         }
                         setTimeout((() => A(i)))
                      }
                   }))
                })))
             })),
             C = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
             };
 
          function A(e) {
             let t = document.activeElement;
             for (let n of e)
                if (n === t || (n.focus(), document.activeElement !== t)) return
          }
          let F = S,
             O = R
       },
       41114: function (e, t, n) {
          "use strict";
          n.d(t, {
             D: function () {
                return o
             }
          });
          var r = n(70079);
 
          function o(e) {
             let t = (0, r.useRef)({
                value: e,
                previous: e
             });
             return (0, r.useMemo)((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
          }
       },
       60382: function (e, t, n) {
          "use strict";
          n.d(t, {
             Ry: function () {
                return s
             }
          });
          var r = new WeakMap,
             o = new WeakMap,
             i = {},
             a = 0,
             u = function (e, t, n, u) {
                var s = Array.isArray(e) ? e : [e];
                i[n] || (i[n] = new WeakMap);
                var c = i[n],
                   l = [],
                   d = new Set,
                   f = new Set(s),
                   v = function (e) {
                      !e || d.has(e) || (d.add(e), v(e.parentNode))
                   };
                s.forEach(v);
                var p = function (e) {
                   !e || f.has(e) || Array.prototype.forEach.call(e.children, (function (e) {
                      if (d.has(e)) p(e);
                      else {
                         var t = e.getAttribute(u),
                            i = null !== t && "false" !== t,
                            a = (r.get(e) || 0) + 1,
                            s = (c.get(e) || 0) + 1;
                         r.set(e, a), c.set(e, s), l.push(e), 1 === a && i && o.set(e, !0), 1 === s && e.setAttribute(n, "true"), i || e.setAttribute(u, "true")
                      }
                   }))
                };
                return p(t), d.clear(), a++,
                   function () {
                      l.forEach((function (e) {
                         var t = r.get(e) - 1,
                            i = c.get(e) - 1;
                         r.set(e, t), c.set(e, i), t || (o.has(e) || e.removeAttribute(u), o.delete(e)), i || e.removeAttribute(n)
                      })), --a || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
                   }
             },
             s = function (e, t, n) {
                void 0 === n && (n = "data-aria-hidden");
                var r = Array.from(Array.isArray(e) ? e : [e]),
                   o = t || ("undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
                return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), u(r, o, n, "aria-hidden")) : function () {
                   return null
                }
             }
       },
       24803: function (e) {
          e.exports = function (e) {
             var t = {};
 
             function n(r) {
                if (t[r]) return t[r].exports;
                var o = t[r] = {
                   i: r,
                   l: !1,
                   exports: {}
                };
                return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
             }
             return n.m = e, n.c = t, n.d = function (e, t, r) {
                n.o(e, t) || Object.defineProperty(e, t, {
                   enumerable: !0,
                   get: r
                })
             }, n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                   value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                   value: !0
                })
             }, n.t = function (e, t) {
                if (1 & t && (e = n(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, "default", {
                      enumerable: !0,
                      value: e
                   }), 2 & t && "string" != typeof e)
                   for (var o in e) n.d(r, o, function (t) {
                      return e[t]
                   }.bind(null, o));
                return r
             }, n.n = function (e) {
                var t = e && e.__esModule ? function () {
                   return e.default
                } : function () {
                   return e
                };
                return n.d(t, "a", t), t
             }, n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
             }, n.p = "", n(n.s = 90)
          }({
             17: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var r = n(18),
                   o = function () {
                      function e() {}
                      return e.getFirstMatch = function (e, t) {
                         var n = t.match(e);
                         return n && n.length > 0 && n[1] || ""
                      }, e.getSecondMatch = function (e, t) {
                         var n = t.match(e);
                         return n && n.length > 1 && n[2] || ""
                      }, e.matchAndReturnConst = function (e, t, n) {
                         if (e.test(t)) return n
                      }, e.getWindowsVersionName = function (e) {
                         switch (e) {
                            case "NT":
                               return "NT";
                            case "XP":
                            case "NT 5.1":
                               return "XP";
                            case "NT 5.0":
                               return "2000";
                            case "NT 5.2":
                               return "2003";
                            case "NT 6.0":
                               return "Vista";
                            case "NT 6.1":
                               return "7";
                            case "NT 6.2":
                               return "8";
                            case "NT 6.3":
                               return "8.1";
                            case "NT 10.0":
                               return "10";
                            default:
                               return
                         }
                      }, e.getMacOSVersionName = function (e) {
                         var t = e.split(".").splice(0, 2).map((function (e) {
                            return parseInt(e, 10) || 0
                         }));
                         if (t.push(0), 10 === t[0]) switch (t[1]) {
                            case 5:
                               return "Leopard";
                            case 6:
                               return "Snow Leopard";
                            case 7:
                               return "Lion";
                            case 8:
                               return "Mountain Lion";
                            case 9:
                               return "Mavericks";
                            case 10:
                               return "Yosemite";
                            case 11:
                               return "El Capitan";
                            case 12:
                               return "Sierra";
                            case 13:
                               return "High Sierra";
                            case 14:
                               return "Mojave";
                            case 15:
                               return "Catalina";
                            default:
                               return
                         }
                      }, e.getAndroidVersionName = function (e) {
                         var t = e.split(".").splice(0, 2).map((function (e) {
                            return parseInt(e, 10) || 0
                         }));
                         if (t.push(0), !(1 === t[0] && t[1] < 5)) return 1 === t[0] && t[1] < 6 ? "Cupcake" : 1 === t[0] && t[1] >= 6 ? "Donut" : 2 === t[0] && t[1] < 2 ? "Eclair" : 2 === t[0] && 2 === t[1] ? "Froyo" : 2 === t[0] && t[1] > 2 ? "Gingerbread" : 3 === t[0] ? "Honeycomb" : 4 === t[0] && t[1] < 1 ? "Ice Cream Sandwich" : 4 === t[0] && t[1] < 4 ? "Jelly Bean" : 4 === t[0] && t[1] >= 4 ? "KitKat" : 5 === t[0] ? "Lollipop" : 6 === t[0] ? "Marshmallow" : 7 === t[0] ? "Nougat" : 8 === t[0] ? "Oreo" : 9 === t[0] ? "Pie" : void 0
                      }, e.getVersionPrecision = function (e) {
                         return e.split(".").length
                      }, e.compareVersions = function (t, n, r) {
                         void 0 === r && (r = !1);
                         var o = e.getVersionPrecision(t),
                            i = e.getVersionPrecision(n),
                            a = Math.max(o, i),
                            u = 0,
                            s = e.map([t, n], (function (t) {
                               var n = a - e.getVersionPrecision(t),
                                  r = t + Array(n + 1).join(".0");
                               return e.map(r.split("."), (function (e) {
                                  return Array(20 - e.length).join("0") + e
                               })).reverse()
                            }));
                         for (r && (u = a - Math.min(o, i)), a -= 1; a >= u;) {
                            if (s[0][a] > s[1][a]) return 1;
                            if (s[0][a] === s[1][a]) {
                               if (a === u) return 0;
                               a -= 1
                            } else if (s[0][a] < s[1][a]) return -1
                         }
                      }, e.map = function (e, t) {
                         var n, r = [];
                         if (Array.prototype.map) return Array.prototype.map.call(e, t);
                         for (n = 0; n < e.length; n += 1) r.push(t(e[n]));
                         return r
                      }, e.find = function (e, t) {
                         var n, r;
                         if (Array.prototype.find) return Array.prototype.find.call(e, t);
                         for (n = 0, r = e.length; n < r; n += 1) {
                            var o = e[n];
                            if (t(o, n)) return o
                         }
                      }, e.assign = function (e) {
                         for (var t, n, r = e, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                         if (Object.assign) return Object.assign.apply(Object, [e].concat(i));
                         for (t = 0, n = i.length; t < n; t += 1) ! function () {
                            var e = i[t];
                            "object" == typeof e && null !== e && Object.keys(e).forEach((function (t) {
                               r[t] = e[t]
                            }))
                         }();
                         return e
                      }, e.getBrowserAlias = function (e) {
                         return r.BROWSER_ALIASES_MAP[e]
                      }, e.getBrowserTypeByAlias = function (e) {
                         return r.BROWSER_MAP[e] || ""
                      }, e
                   }();
                t.default = o, e.exports = t.default
             },
             18: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.ENGINE_MAP = t.OS_MAP = t.PLATFORMS_MAP = t.BROWSER_MAP = t.BROWSER_ALIASES_MAP = void 0, t.BROWSER_ALIASES_MAP = {
                   "Amazon Silk": "amazon_silk",
                   "Android Browser": "android",
                   Bada: "bada",
                   BlackBerry: "blackberry",
                   Chrome: "chrome",
                   Chromium: "chromium",
                   Electron: "electron",
                   Epiphany: "epiphany",
                   Firefox: "firefox",
                   Focus: "focus",
                   Generic: "generic",
                   "Google Search": "google_search",
                   Googlebot: "googlebot",
                   "Internet Explorer": "ie",
                   "K-Meleon": "k_meleon",
                   Maxthon: "maxthon",
                   "Microsoft Edge": "edge",
                   "MZ Browser": "mz",
                   "NAVER Whale Browser": "naver",
                   Opera: "opera",
                   "Opera Coast": "opera_coast",
                   PhantomJS: "phantomjs",
                   Puffin: "puffin",
                   QupZilla: "qupzilla",
                   QQ: "qq",
                   QQLite: "qqlite",
                   Safari: "safari",
                   Sailfish: "sailfish",
                   "Samsung Internet for Android": "samsung_internet",
                   SeaMonkey: "seamonkey",
                   Sleipnir: "sleipnir",
                   Swing: "swing",
                   Tizen: "tizen",
                   "UC Browser": "uc",
                   Vivaldi: "vivaldi",
                   "WebOS Browser": "webos",
                   WeChat: "wechat",
                   "Yandex Browser": "yandex",
                   Roku: "roku"
                }, t.BROWSER_MAP = {
                   amazon_silk: "Amazon Silk",
                   android: "Android Browser",
                   bada: "Bada",
                   blackberry: "BlackBerry",
                   chrome: "Chrome",
                   chromium: "Chromium",
                   electron: "Electron",
                   epiphany: "Epiphany",
                   firefox: "Firefox",
                   focus: "Focus",
                   generic: "Generic",
                   googlebot: "Googlebot",
                   google_search: "Google Search",
                   ie: "Internet Explorer",
                   k_meleon: "K-Meleon",
                   maxthon: "Maxthon",
                   edge: "Microsoft Edge",
                   mz: "MZ Browser",
                   naver: "NAVER Whale Browser",
                   opera: "Opera",
                   opera_coast: "Opera Coast",
                   phantomjs: "PhantomJS",
                   puffin: "Puffin",
                   qupzilla: "QupZilla",
                   qq: "QQ Browser",
                   qqlite: "QQ Browser Lite",
                   safari: "Safari",
                   sailfish: "Sailfish",
                   samsung_internet: "Samsung Internet for Android",
                   seamonkey: "SeaMonkey",
                   sleipnir: "Sleipnir",
                   swing: "Swing",
                   tizen: "Tizen",
                   uc: "UC Browser",
                   vivaldi: "Vivaldi",
                   webos: "WebOS Browser",
                   wechat: "WeChat",
                   yandex: "Yandex Browser"
                }, t.PLATFORMS_MAP = {
                   tablet: "tablet",
                   mobile: "mobile",
                   desktop: "desktop",
                   tv: "tv"
                }, t.OS_MAP = {
                   WindowsPhone: "Windows Phone",
                   Windows: "Windows",
                   MacOS: "macOS",
                   iOS: "iOS",
                   Android: "Android",
                   WebOS: "WebOS",
                   BlackBerry: "BlackBerry",
                   Bada: "Bada",
                   Tizen: "Tizen",
                   Linux: "Linux",
                   ChromeOS: "Chrome OS",
                   PlayStation4: "PlayStation 4",
                   Roku: "Roku"
                }, t.ENGINE_MAP = {
                   EdgeHTML: "EdgeHTML",
                   Blink: "Blink",
                   Trident: "Trident",
                   Presto: "Presto",
                   Gecko: "Gecko",
                   WebKit: "WebKit"
                }
             },
             90: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var r, o = (r = n(91)) && r.__esModule ? r : {
                      default: r
                   },
                   i = n(18),
                   a = function () {
                      function e() {}
                      return e.getParser = function (e, t) {
                            if (void 0 === t && (t = !1), "string" != typeof e) throw Error("UserAgent should be a string");
                            return new o.default(e, t)
                         }, e.parse = function (e) {
                            return new o.default(e).getResult()
                         },
                         function (e, t) {
                            for (var n = 0; n < t.length; n++) {
                               var r = t[n];
                               r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                         }(e, [{
                            key: "BROWSER_MAP",
                            get: function () {
                               return i.BROWSER_MAP
                            }
                         }, {
                            key: "ENGINE_MAP",
                            get: function () {
                               return i.ENGINE_MAP
                            }
                         }, {
                            key: "OS_MAP",
                            get: function () {
                               return i.OS_MAP
                            }
                         }, {
                            key: "PLATFORMS_MAP",
                            get: function () {
                               return i.PLATFORMS_MAP
                            }
                         }]), e
                   }();
                t.default = a, e.exports = t.default
             },
             91: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var r = s(n(92)),
                   o = s(n(93)),
                   i = s(n(94)),
                   a = s(n(95)),
                   u = s(n(17));
 
                function s(e) {
                   return e && e.__esModule ? e : {
                      default: e
                   }
                }
                var c = function () {
                   function e(e, t) {
                      if (void 0 === t && (t = !1), null == e || "" === e) throw Error("UserAgent parameter can't be empty");
                      this._ua = e, this.parsedResult = {}, !0 !== t && this.parse()
                   }
                   var t = e.prototype;
                   return t.getUA = function () {
                      return this._ua
                   }, t.test = function (e) {
                      return e.test(this._ua)
                   }, t.parseBrowser = function () {
                      var e = this;
                      this.parsedResult.browser = {};
                      var t = u.default.find(r.default, (function (t) {
                         if ("function" == typeof t.test) return t.test(e);
                         if (t.test instanceof Array) return t.test.some((function (t) {
                            return e.test(t)
                         }));
                         throw Error("Browser's test function is not valid")
                      }));
                      return t && (this.parsedResult.browser = t.describe(this.getUA())), this.parsedResult.browser
                   }, t.getBrowser = function () {
                      return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser()
                   }, t.getBrowserName = function (e) {
                      return e ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || ""
                   }, t.getBrowserVersion = function () {
                      return this.getBrowser().version
                   }, t.getOS = function () {
                      return this.parsedResult.os ? this.parsedResult.os : this.parseOS()
                   }, t.parseOS = function () {
                      var e = this;
                      this.parsedResult.os = {};
                      var t = u.default.find(o.default, (function (t) {
                         if ("function" == typeof t.test) return t.test(e);
                         if (t.test instanceof Array) return t.test.some((function (t) {
                            return e.test(t)
                         }));
                         throw Error("Browser's test function is not valid")
                      }));
                      return t && (this.parsedResult.os = t.describe(this.getUA())), this.parsedResult.os
                   }, t.getOSName = function (e) {
                      var t = this.getOS().name;
                      return e ? String(t).toLowerCase() || "" : t || ""
                   }, t.getOSVersion = function () {
                      return this.getOS().version
                   }, t.getPlatform = function () {
                      return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform()
                   }, t.getPlatformType = function (e) {
                      void 0 === e && (e = !1);
                      var t = this.getPlatform().type;
                      return e ? String(t).toLowerCase() || "" : t || ""
                   }, t.parsePlatform = function () {
                      var e = this;
                      this.parsedResult.platform = {};
                      var t = u.default.find(i.default, (function (t) {
                         if ("function" == typeof t.test) return t.test(e);
                         if (t.test instanceof Array) return t.test.some((function (t) {
                            return e.test(t)
                         }));
                         throw Error("Browser's test function is not valid")
                      }));
                      return t && (this.parsedResult.platform = t.describe(this.getUA())), this.parsedResult.platform
                   }, t.getEngine = function () {
                      return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine()
                   }, t.getEngineName = function (e) {
                      return e ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || ""
                   }, t.parseEngine = function () {
                      var e = this;
                      this.parsedResult.engine = {};
                      var t = u.default.find(a.default, (function (t) {
                         if ("function" == typeof t.test) return t.test(e);
                         if (t.test instanceof Array) return t.test.some((function (t) {
                            return e.test(t)
                         }));
                         throw Error("Browser's test function is not valid")
                      }));
                      return t && (this.parsedResult.engine = t.describe(this.getUA())), this.parsedResult.engine
                   }, t.parse = function () {
                      return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this
                   }, t.getResult = function () {
                      return u.default.assign({}, this.parsedResult)
                   }, t.satisfies = function (e) {
                      var t = this,
                         n = {},
                         r = 0,
                         o = {},
                         i = 0;
                      if (Object.keys(e).forEach((function (t) {
                            var a = e[t];
                            "string" == typeof a ? (o[t] = a, i += 1) : "object" == typeof a && (n[t] = a, r += 1)
                         })), r > 0) {
                         var a = Object.keys(n),
                            s = u.default.find(a, (function (e) {
                               return t.isOS(e)
                            }));
                         if (s) {
                            var c = this.satisfies(n[s]);
                            if (void 0 !== c) return c
                         }
                         var l = u.default.find(a, (function (e) {
                            return t.isPlatform(e)
                         }));
                         if (l) {
                            var d = this.satisfies(n[l]);
                            if (void 0 !== d) return d
                         }
                      }
                      if (i > 0) {
                         var f = Object.keys(o),
                            v = u.default.find(f, (function (e) {
                               return t.isBrowser(e, !0)
                            }));
                         if (void 0 !== v) return this.compareVersion(o[v])
                      }
                   }, t.isBrowser = function (e, t) {
                      void 0 === t && (t = !1);
                      var n = this.getBrowserName().toLowerCase(),
                         r = e.toLowerCase(),
                         o = u.default.getBrowserTypeByAlias(r);
                      return t && o && (r = o.toLowerCase()), r === n
                   }, t.compareVersion = function (e) {
                      var t = [0],
                         n = e,
                         r = !1,
                         o = this.getBrowserVersion();
                      if ("string" == typeof o) return ">" === e[0] || "<" === e[0] ? (n = e.substr(1), "=" === e[1] ? (r = !0, n = e.substr(2)) : t = [], ">" === e[0] ? t.push(1) : t.push(-1)) : "=" === e[0] ? n = e.substr(1) : "~" === e[0] && (r = !0, n = e.substr(1)), t.indexOf(u.default.compareVersions(o, n, r)) > -1
                   }, t.isOS = function (e) {
                      return this.getOSName(!0) === String(e).toLowerCase()
                   }, t.isPlatform = function (e) {
                      return this.getPlatformType(!0) === String(e).toLowerCase()
                   }, t.isEngine = function (e) {
                      return this.getEngineName(!0) === String(e).toLowerCase()
                   }, t.is = function (e) {
                      return this.isBrowser(e) || this.isOS(e) || this.isPlatform(e)
                   }, t.some = function (e) {
                      var t = this;
                      return void 0 === e && (e = []), e.some((function (e) {
                         return t.is(e)
                      }))
                   }, e
                }();
                t.default = c, e.exports = t.default
             },
             92: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var r, o = (r = n(17)) && r.__esModule ? r : {
                      default: r
                   },
                   i = /version\/(\d+(\.?_?\d+)+)/i,
                   a = [{
                      test: [/googlebot/i],
                      describe: function (e) {
                         var t = {
                               name: "Googlebot"
                            },
                            n = o.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/opera/i],
                      describe: function (e) {
                         var t = {
                               name: "Opera"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/opr\/|opios/i],
                      describe: function (e) {
                         var t = {
                               name: "Opera"
                            },
                            n = o.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/SamsungBrowser/i],
                      describe: function (e) {
                         var t = {
                               name: "Samsung Internet for Android"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/Whale/i],
                      describe: function (e) {
                         var t = {
                               name: "NAVER Whale Browser"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/MZBrowser/i],
                      describe: function (e) {
                         var t = {
                               name: "MZ Browser"
                            },
                            n = o.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/focus/i],
                      describe: function (e) {
                         var t = {
                               name: "Focus"
                            },
                            n = o.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/swing/i],
                      describe: function (e) {
                         var t = {
                               name: "Swing"
                            },
                            n = o.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/coast/i],
                      describe: function (e) {
                         var t = {
                               name: "Opera Coast"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/opt\/\d+(?:.?_?\d+)+/i],
                      describe: function (e) {
                         var t = {
                               name: "Opera Touch"
                            },
                            n = o.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/yabrowser/i],
                      describe: function (e) {
                         var t = {
                               name: "Yandex Browser"
                            },
                            n = o.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/ucbrowser/i],
                      describe: function (e) {
                         var t = {
                               name: "UC Browser"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/Maxthon|mxios/i],
                      describe: function (e) {
                         var t = {
                               name: "Maxthon"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/epiphany/i],
                      describe: function (e) {
                         var t = {
                               name: "Epiphany"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/puffin/i],
                      describe: function (e) {
                         var t = {
                               name: "Puffin"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/sleipnir/i],
                      describe: function (e) {
                         var t = {
                               name: "Sleipnir"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/k-meleon/i],
                      describe: function (e) {
                         var t = {
                               name: "K-Meleon"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/micromessenger/i],
                      describe: function (e) {
                         var t = {
                               name: "WeChat"
                            },
                            n = o.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/qqbrowser/i],
                      describe: function (e) {
                         var t = {
                               name: /qqbrowserlite/i.test(e) ? "QQ Browser Lite" : "QQ Browser"
                            },
                            n = o.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/msie|trident/i],
                      describe: function (e) {
                         var t = {
                               name: "Internet Explorer"
                            },
                            n = o.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/\sedg\//i],
                      describe: function (e) {
                         var t = {
                               name: "Microsoft Edge"
                            },
                            n = o.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/edg([ea]|ios)/i],
                      describe: function (e) {
                         var t = {
                               name: "Microsoft Edge"
                            },
                            n = o.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/vivaldi/i],
                      describe: function (e) {
                         var t = {
                               name: "Vivaldi"
                            },
                            n = o.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/seamonkey/i],
                      describe: function (e) {
                         var t = {
                               name: "SeaMonkey"
                            },
                            n = o.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/sailfish/i],
                      describe: function (e) {
                         var t = {
                               name: "Sailfish"
                            },
                            n = o.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/silk/i],
                      describe: function (e) {
                         var t = {
                               name: "Amazon Silk"
                            },
                            n = o.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/phantom/i],
                      describe: function (e) {
                         var t = {
                               name: "PhantomJS"
                            },
                            n = o.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/slimerjs/i],
                      describe: function (e) {
                         var t = {
                               name: "SlimerJS"
                            },
                            n = o.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                      describe: function (e) {
                         var t = {
                               name: "BlackBerry"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/(web|hpw)[o0]s/i],
                      describe: function (e) {
                         var t = {
                               name: "WebOS Browser"
                            },
                            n = o.default.getFirstMatch(i, e) || o.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/bada/i],
                      describe: function (e) {
                         var t = {
                               name: "Bada"
                            },
                            n = o.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/tizen/i],
                      describe: function (e) {
                         var t = {
                               name: "Tizen"
                            },
                            n = o.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/qupzilla/i],
                      describe: function (e) {
                         var t = {
                               name: "QupZilla"
                            },
                            n = o.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/firefox|iceweasel|fxios/i],
                      describe: function (e) {
                         var t = {
                               name: "Firefox"
                            },
                            n = o.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/electron/i],
                      describe: function (e) {
                         var t = {
                               name: "Electron"
                            },
                            n = o.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/chromium/i],
                      describe: function (e) {
                         var t = {
                               name: "Chromium"
                            },
                            n = o.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e) || o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/chrome|crios|crmo/i],
                      describe: function (e) {
                         var t = {
                               name: "Chrome"
                            },
                            n = o.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/GSA/i],
                      describe: function (e) {
                         var t = {
                               name: "Google Search"
                            },
                            n = o.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: function (e) {
                         var t = !e.test(/like android/i),
                            n = e.test(/android/i);
                         return t && n
                      },
                      describe: function (e) {
                         var t = {
                               name: "Android Browser"
                            },
                            n = o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/playstation 4/i],
                      describe: function (e) {
                         var t = {
                               name: "PlayStation 4"
                            },
                            n = o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/safari|applewebkit/i],
                      describe: function (e) {
                         var t = {
                               name: "Safari"
                            },
                            n = o.default.getFirstMatch(i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/.*/i],
                      describe: function (e) {
                         var t = -1 !== e.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
                         return {
                            name: o.default.getFirstMatch(t, e),
                            version: o.default.getSecondMatch(t, e)
                         }
                      }
                   }];
                t.default = a, e.exports = t.default
             },
             93: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var r, o = (r = n(17)) && r.__esModule ? r : {
                      default: r
                   },
                   i = n(18),
                   a = [{
                      test: [/Roku\/DVP/],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e);
                         return {
                            name: i.OS_MAP.Roku,
                            version: t
                         }
                      }
                   }, {
                      test: [/windows phone/i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e);
                         return {
                            name: i.OS_MAP.WindowsPhone,
                            version: t
                         }
                      }
                   }, {
                      test: [/windows /i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e),
                            n = o.default.getWindowsVersionName(t);
                         return {
                            name: i.OS_MAP.Windows,
                            version: t,
                            versionName: n
                         }
                      }
                   }, {
                      test: [/Macintosh(.*?) FxiOS(.*?)\//],
                      describe: function (e) {
                         var t = {
                               name: i.OS_MAP.iOS
                            },
                            n = o.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/macintosh/i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e).replace(/[_\s]/g, "."),
                            n = o.default.getMacOSVersionName(t),
                            r = {
                               name: i.OS_MAP.MacOS,
                               version: t
                            };
                         return n && (r.versionName = n), r
                      }
                   }, {
                      test: [/(ipod|iphone|ipad)/i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e).replace(/[_\s]/g, ".");
                         return {
                            name: i.OS_MAP.iOS,
                            version: t
                         }
                      }
                   }, {
                      test: function (e) {
                         var t = !e.test(/like android/i),
                            n = e.test(/android/i);
                         return t && n
                      },
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e),
                            n = o.default.getAndroidVersionName(t),
                            r = {
                               name: i.OS_MAP.Android,
                               version: t
                            };
                         return n && (r.versionName = n), r
                      }
                   }, {
                      test: [/(web|hpw)[o0]s/i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e),
                            n = {
                               name: i.OS_MAP.WebOS
                            };
                         return t && t.length && (n.version = t), n
                      }
                   }, {
                      test: [/blackberry|\bbb\d+/i, /rim\stablet/i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e) || o.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e) || o.default.getFirstMatch(/\bbb(\d+)/i, e);
                         return {
                            name: i.OS_MAP.BlackBerry,
                            version: t
                         }
                      }
                   }, {
                      test: [/bada/i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e);
                         return {
                            name: i.OS_MAP.Bada,
                            version: t
                         }
                      }
                   }, {
                      test: [/tizen/i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e);
                         return {
                            name: i.OS_MAP.Tizen,
                            version: t
                         }
                      }
                   }, {
                      test: [/linux/i],
                      describe: function () {
                         return {
                            name: i.OS_MAP.Linux
                         }
                      }
                   }, {
                      test: [/CrOS/],
                      describe: function () {
                         return {
                            name: i.OS_MAP.ChromeOS
                         }
                      }
                   }, {
                      test: [/PlayStation 4/],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e);
                         return {
                            name: i.OS_MAP.PlayStation4,
                            version: t
                         }
                      }
                   }];
                t.default = a, e.exports = t.default
             },
             94: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var r, o = (r = n(17)) && r.__esModule ? r : {
                      default: r
                   },
                   i = n(18),
                   a = [{
                      test: [/googlebot/i],
                      describe: function () {
                         return {
                            type: "bot",
                            vendor: "Google"
                         }
                      }
                   }, {
                      test: [/huawei/i],
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/(can-l01)/i, e) && "Nova",
                            n = {
                               type: i.PLATFORMS_MAP.mobile,
                               vendor: "Huawei"
                            };
                         return t && (n.model = t), n
                      }
                   }, {
                      test: [/nexus\s*(?:7|8|9|10).*/i],
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tablet,
                            vendor: "Nexus"
                         }
                      }
                   }, {
                      test: [/ipad/i],
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tablet,
                            vendor: "Apple",
                            model: "iPad"
                         }
                      }
                   }, {
                      test: [/Macintosh(.*?) FxiOS(.*?)\//],
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tablet,
                            vendor: "Apple",
                            model: "iPad"
                         }
                      }
                   }, {
                      test: [/kftt build/i],
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tablet,
                            vendor: "Amazon",
                            model: "Kindle Fire HD 7"
                         }
                      }
                   }, {
                      test: [/silk/i],
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tablet,
                            vendor: "Amazon"
                         }
                      }
                   }, {
                      test: [/tablet(?! pc)/i],
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tablet
                         }
                      }
                   }, {
                      test: function (e) {
                         var t = e.test(/ipod|iphone/i),
                            n = e.test(/like (ipod|iphone)/i);
                         return t && !n
                      },
                      describe: function (e) {
                         var t = o.default.getFirstMatch(/(ipod|iphone)/i, e);
                         return {
                            type: i.PLATFORMS_MAP.mobile,
                            vendor: "Apple",
                            model: t
                         }
                      }
                   }, {
                      test: [/nexus\s*[0-6].*/i, /galaxy nexus/i],
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.mobile,
                            vendor: "Nexus"
                         }
                      }
                   }, {
                      test: [/[^-]mobi/i],
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.mobile
                         }
                      }
                   }, {
                      test: function (e) {
                         return "blackberry" === e.getBrowserName(!0)
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.mobile,
                            vendor: "BlackBerry"
                         }
                      }
                   }, {
                      test: function (e) {
                         return "bada" === e.getBrowserName(!0)
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.mobile
                         }
                      }
                   }, {
                      test: function (e) {
                         return "windows phone" === e.getBrowserName()
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.mobile,
                            vendor: "Microsoft"
                         }
                      }
                   }, {
                      test: function (e) {
                         var t = Number(String(e.getOSVersion()).split(".")[0]);
                         return "android" === e.getOSName(!0) && t >= 3
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tablet
                         }
                      }
                   }, {
                      test: function (e) {
                         return "android" === e.getOSName(!0)
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.mobile
                         }
                      }
                   }, {
                      test: function (e) {
                         return "macos" === e.getOSName(!0)
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.desktop,
                            vendor: "Apple"
                         }
                      }
                   }, {
                      test: function (e) {
                         return "windows" === e.getOSName(!0)
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.desktop
                         }
                      }
                   }, {
                      test: function (e) {
                         return "linux" === e.getOSName(!0)
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.desktop
                         }
                      }
                   }, {
                      test: function (e) {
                         return "playstation 4" === e.getOSName(!0)
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tv
                         }
                      }
                   }, {
                      test: function (e) {
                         return "roku" === e.getOSName(!0)
                      },
                      describe: function () {
                         return {
                            type: i.PLATFORMS_MAP.tv
                         }
                      }
                   }];
                t.default = a, e.exports = t.default
             },
             95: function (e, t, n) {
                "use strict";
                t.__esModule = !0, t.default = void 0;
                var r, o = (r = n(17)) && r.__esModule ? r : {
                      default: r
                   },
                   i = n(18),
                   a = [{
                      test: function (e) {
                         return "microsoft edge" === e.getBrowserName(!0)
                      },
                      describe: function (e) {
                         if (/\sedg\//i.test(e)) return {
                            name: i.ENGINE_MAP.Blink
                         };
                         var t = o.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e);
                         return {
                            name: i.ENGINE_MAP.EdgeHTML,
                            version: t
                         }
                      }
                   }, {
                      test: [/trident/i],
                      describe: function (e) {
                         var t = {
                               name: i.ENGINE_MAP.Trident
                            },
                            n = o.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: function (e) {
                         return e.test(/presto/i)
                      },
                      describe: function (e) {
                         var t = {
                               name: i.ENGINE_MAP.Presto
                            },
                            n = o.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: function (e) {
                         var t = e.test(/gecko/i),
                            n = e.test(/like gecko/i);
                         return t && !n
                      },
                      describe: function (e) {
                         var t = {
                               name: i.ENGINE_MAP.Gecko
                            },
                            n = o.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }, {
                      test: [/(apple)?webkit\/537\.36/i],
                      describe: function () {
                         return {
                            name: i.ENGINE_MAP.Blink
                         }
                      }
                   }, {
                      test: [/(apple)?webkit/i],
                      describe: function (e) {
                         var t = {
                               name: i.ENGINE_MAP.WebKit
                            },
                            n = o.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e);
                         return n && (t.version = n), t
                      }
                   }];
                t.default = a, e.exports = t.default
             }
          })
       },
       73204: function (e, t) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
             value: !0
          }), t.getDomainLocale = function (e, t, n, r) {
             return !1
          }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
             value: !0
          }), Object.assign(t.default, t), e.exports = t.default)
       },
       59741: function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
             value: !0
          });
          var r = n(98799).Z;
          n(52306).default, Object.defineProperty(t, "__esModule", {
             value: !0
          }), t.default = void 0;
          var o = n(7575).Z,
             i = n(97318).Z,
             a = o(n(70079)),
             u = n(37722),
             s = n(50020),
             c = n(11390),
             l = n(74448),
             d = n(22968),
             f = n(33972),
             v = n(62013),
             p = n(16081),
             m = n(73204),
             g = n(5956),
             h = new Set;
 
          function b(e, t, n, r, o) {
             if (o || s.isLocalURL(t)) {
                if (!r.bypassPrefetchedCheck) {
                   var i = t + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale" in e ? e.locale : void 0);
                   if (h.has(i)) return;
                   h.add(i)
                }
                Promise.resolve(e.prefetch(t, n, r)).catch((function (e) {}))
             }
          }
 
          function M(e) {
             return "string" == typeof e ? e : c.formatUrl(e)
          }
          var w = a.default.forwardRef((function (e, t) {
             var n, o, c = e.href,
                h = e.as,
                w = e.children,
                E = e.prefetch,
                y = e.passHref,
                _ = e.replace,
                S = e.shallow,
                P = e.scroll,
                R = e.locale,
                C = e.onClick,
                A = e.onMouseEnter,
                F = e.onTouchStart,
                O = e.legacyBehavior,
                k = void 0 !== O && O,
                x = i(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
             n = w, k && ("string" == typeof n || "number" == typeof n) && (n = a.default.createElement("a", null, n));
             var T = !1 !== E,
                L = a.default.useContext(f.RouterContext),
                N = a.default.useContext(v.AppRouterContext),
                B = null != L ? L : N,
                I = !L,
                D = a.default.useMemo((function () {
                   if (!L) {
                      var e = M(c);
                      return {
                         href: e,
                         as: h ? M(h) : e
                      }
                   }
                   var t = r(u.resolveHref(L, c, !0), 2),
                      n = t[0],
                      o = t[1];
                   return {
                      href: n,
                      as: h ? u.resolveHref(L, h) : o || n
                   }
                }), [L, c, h]),
                W = D.href,
                V = D.as,
                Z = a.default.useRef(W),
                j = a.default.useRef(V);
             k && (o = a.default.Children.only(n));
             var K = k ? o && "object" == typeof o && o.ref : t,
                z = r(p.useIntersection({
                   rootMargin: "200px"
                }), 3),
                G = z[0],
                U = z[1],
                q = z[2],
                H = a.default.useCallback((function (e) {
                   (j.current !== V || Z.current !== W) && (q(), j.current = V, Z.current = W), G(e), K && ("function" == typeof K ? K(e) : "object" == typeof K && (K.current = e))
                }), [V, K, W, q, G]);
             a.default.useEffect((function () {
                B && U && T && b(B, W, V, {
                   locale: R
                }, I)
             }), [V, W, U, R, T, null == L ? void 0 : L.locale, B, I]);
             var X = {
                ref: H,
                onClick: function (e) {
                   k || "function" != typeof C || C(e), k && o.props && "function" == typeof o.props.onClick && o.props.onClick(e), B && !e.defaultPrevented && function (e, t, n, r, o, i, u, c, l, d) {
                      if ("A" !== e.currentTarget.nodeName.toUpperCase() || !((f = e.currentTarget.getAttribute("target")) && "_self" !== f || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which || !l && !s.isLocalURL(n))) {
                         e.preventDefault();
                         var f, v = function () {
                            "beforePopState" in t ? t[o ? "replace" : "push"](n, r, {
                               shallow: i,
                               locale: c,
                               scroll: u
                            }) : t[o ? "replace" : "push"](r || n, {
                               forceOptimisticNavigation: !d
                            })
                         };
                         l ? a.default.startTransition(v) : v()
                      }
                   }(e, B, W, V, _, S, P, R, I, T)
                },
                onMouseEnter: function (e) {
                   k || "function" != typeof A || A(e), k && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e), B && (T || !I) && b(B, W, V, {
                      locale: R,
                      priority: !0,
                      bypassPrefetchedCheck: !0
                   }, I)
                },
                onTouchStart: function (e) {
                   k || "function" != typeof F || F(e), k && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e), B && (T || !I) && b(B, W, V, {
                      locale: R,
                      priority: !0,
                      bypassPrefetchedCheck: !0
                   }, I)
                }
             };
             if (l.isAbsoluteUrl(V)) X.href = V;
             else if (!k || y || "a" === o.type && !("href" in o.props)) {
                var Y = void 0 !== R ? R : null == L ? void 0 : L.locale,
                   Q = (null == L ? void 0 : L.isLocaleDomain) && m.getDomainLocale(V, Y, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales);
                X.href = Q || g.addBasePath(d.addLocale(V, Y, null == L ? void 0 : L.defaultLocale))
             }
             return k ? a.default.cloneElement(o, X) : a.default.createElement("a", Object.assign({}, x, X), n)
          }));
          t.default = w, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
             value: !0
          }), Object.assign(t.default, t), e.exports = t.default)
       },
       16081: function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", {
             value: !0
          });
          var r = n(98799).Z;
          Object.defineProperty(t, "__esModule", {
             value: !0
          }), t.useIntersection = function (e) {
             var t = e.rootRef,
                n = e.rootMargin,
                c = e.disabled || !a,
                l = r(o.useState(!1), 2),
                d = l[0],
                f = l[1],
                v = o.useRef(null),
                p = o.useCallback((function (e) {
                   v.current = e
                }), []);
             return o.useEffect((function () {
                if (a) {
                   if (!c && !d) {
                      var e, r, o, l, p = v.current;
                      if (p && p.tagName) return r = (e = function (e) {
                            var t, n = {
                                  root: e.root || null,
                                  margin: e.rootMargin || ""
                               },
                               r = s.find((function (e) {
                                  return e.root === n.root && e.margin === n.margin
                               }));
                            if (r && (t = u.get(r))) return t;
                            var o = new Map;
                            return t = {
                               id: n,
                               observer: new IntersectionObserver((function (e) {
                                  e.forEach((function (e) {
                                     var t = o.get(e.target),
                                        n = e.isIntersecting || e.intersectionRatio > 0;
                                     t && n && t(n)
                                  }))
                               }), e),
                               elements: o
                            }, s.push(n), u.set(n, t), t
                         }({
                            root: null == t ? void 0 : t.current,
                            rootMargin: n
                         })).id, o = e.observer, (l = e.elements).set(p, (function (e) {
                            return e && f(e)
                         })), o.observe(p),
                         function () {
                            if (l.delete(p), o.unobserve(p), 0 === l.size) {
                               o.disconnect(), u.delete(r);
                               var e = s.findIndex((function (e) {
                                  return e.root === r.root && e.margin === r.margin
                               }));
                               e > -1 && s.splice(e, 1)
                            }
                         }
                   }
                } else if (!d) {
                   var m = i.requestIdleCallback((function () {
                      return f(!0)
                   }));
                   return function () {
                      return i.cancelIdleCallback(m)
                   }
                }
             }), [c, n, t, d, v.current]), [p, d, o.useCallback((function () {
                f(!1)
             }), [])]
          };
          var o = n(70079),
             i = n(66264),
             a = "function" == typeof IntersectionObserver,
             u = new Map,
             s = [];
          ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
             value: !0
          }), Object.assign(t.default, t), e.exports = t.default)
       },
       92490: function (e, t, n) {
          e.exports = n(59741)
       },
       16905: function (e, t, n) {
          "use strict";
          n.d(t, {
             Z: function () {
                return D
             }
          });
          var r, o, i, a, u, s = n(75883),
             c = n(70079),
             l = "right-scroll-bar-position",
             d = "width-before-scroll-bar",
             f = (void 0 === r && (r = {}), (void 0 === o && (o = function (e) {
                return e
             }), i = [], a = !1, u = {
                read: function () {
                   if (a) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                   return i.length ? i[i.length - 1] : null
                },
                useMedium: function (e) {
                   var t = o(e, a);
                   return i.push(t),
                      function () {
                         i = i.filter((function (e) {
                            return e !== t
                         }))
                      }
                },
                assignSyncMedium: function (e) {
                   for (a = !0; i.length;) {
                      var t = i;
                      i = [], t.forEach(e)
                   }
                   i = {
                      push: function (t) {
                         return e(t)
                      },
                      filter: function () {
                         return i
                      }
                   }
                },
                assignMedium: function (e) {
                   a = !0;
                   var t = [];
                   if (i.length) {
                      var n = i;
                      i = [], n.forEach(e), t = i
                   }
                   var r = function () {
                         var n = t;
                         t = [], n.forEach(e)
                      },
                      o = function () {
                         return Promise.resolve().then(r)
                      };
                   o(), i = {
                      push: function (e) {
                         t.push(e), o()
                      },
                      filter: function (e) {
                         return t = t.filter(e), i
                      }
                   }
                }
             }).options = (0, s.__assign)({
                async: !0,
                ssr: !1
             }, r), u),
             v = function () {},
             p = c.forwardRef((function (e, t) {
                var n, r, o, i = c.useRef(null),
                   a = c.useState({
                      onScrollCapture: v,
                      onWheelCapture: v,
                      onTouchMoveCapture: v
                   }),
                   u = a[0],
                   l = a[1],
                   d = e.forwardProps,
                   p = e.children,
                   m = e.className,
                   g = e.removeScrollBar,
                   h = e.enabled,
                   b = e.shards,
                   M = e.sideCar,
                   w = e.noIsolation,
                   E = e.inert,
                   y = e.allowPinchZoom,
                   _ = e.as,
                   S = (0, s.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]),
                   P = (n = [i, t], r = function (e) {
                      return n.forEach((function (t) {
                         var n;
                         return "function" == typeof (n = t) ? n(e) : n && (n.current = e), n
                      }))
                   }, (o = (0, c.useState)((function () {
                      return {
                         value: null,
                         callback: r,
                         facade: {
                            get current() {
                               return o.value
                            },
                            set current(e) {
                               var t = o.value;
                               t !== e && (o.value = e, o.callback(e, t))
                            }
                         }
                      }
                   }))[0]).callback = r, o.facade),
                   R = (0, s.__assign)((0, s.__assign)({}, S), u);
                return c.createElement(c.Fragment, null, h && c.createElement(M, {
                   sideCar: f,
                   removeScrollBar: g,
                   shards: b,
                   noIsolation: w,
                   inert: E,
                   setCallbacks: l,
                   allowPinchZoom: !!y,
                   lockRef: i
                }), d ? c.cloneElement(c.Children.only(p), (0, s.__assign)((0, s.__assign)({}, R), {
                   ref: P
                })) : c.createElement(void 0 === _ ? "div" : _, (0, s.__assign)({}, R, {
                   className: m,
                   ref: P
                }), p))
             }));
          p.defaultProps = {
             enabled: !0,
             removeScrollBar: !0,
             inert: !1
          }, p.classNames = {
             fullWidth: d,
             zeroRight: l
          };
          var m = function (e) {
             var t = e.sideCar,
                n = (0, s.__rest)(e, ["sideCar"]);
             if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
             var r = t.read();
             if (!r) throw Error("Sidecar medium not found");
             return c.createElement(r, (0, s.__assign)({}, n))
          };
          m.isSideCarExport = !0;
          var g = function () {
                var e = function () {
                   var e = 0,
                      t = null;
                   return {
                      add: function (r) {
                         var o, i;
                         0 == e && (t = function () {
                            if (!document) return null;
                            var e = document.createElement("style");
                            e.type = "text/css";
                            var t = n.nc;
                            return t && e.setAttribute("nonce", t), e
                         }()) && ((o = t).styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), i = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)), e++
                      },
                      remove: function () {
                         --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                      }
                   }
                }();
                return function (t, n) {
                   c.useEffect((function () {
                      return e.add(t),
                         function () {
                            e.remove()
                         }
                   }), [t && n])
                }
             },
             h = function () {
                var e = g();
                return function (t) {
                   return e(t.styles, t.dynamic), null
                }
             },
             b = {
                left: 0,
                top: 0,
                right: 0,
                gap: 0
             },
             M = function (e) {
                return parseInt(e || "", 10) || 0
             },
             w = function (e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return b;
                var t = function (e) {
                      var t = window.getComputedStyle(document.body),
                         n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                         r = t["padding" === e ? "paddingTop" : "marginTop"],
                         o = t["padding" === e ? "paddingRight" : "marginRight"];
                      return [M(n), M(r), M(o)]
                   }(e),
                   n = document.documentElement.clientWidth,
                   r = window.innerWidth;
                return {
                   left: t[0],
                   top: t[1],
                   right: t[2],
                   gap: Math.max(0, r - n + t[2] - t[0])
                }
             },
             E = h(),
             y = function (e, t, n, r) {
                var o = e.left,
                   i = e.top,
                   a = e.right,
                   u = e.gap;
                return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(u, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(u, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(l, " {\n    right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(d, " {\n    margin-right: ").concat(u, "px ").concat(r, ";\n  }\n  \n  .").concat(l, " .").concat(l, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(d, " .").concat(d, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(u, "px;\n  }\n")
             },
             _ = function (e) {
                var t = e.noRelative,
                   n = e.noImportant,
                   r = e.gapMode,
                   o = void 0 === r ? "margin" : r,
                   i = c.useMemo((function () {
                      return w(o)
                   }), [o]);
                return c.createElement(E, {
                   styles: y(i, !t, o, n ? "" : "!important")
                })
             },
             S = !1;
          if ("undefined" != typeof window) try {
             var P = Object.defineProperty({}, "passive", {
                get: function () {
                   return S = !0, !0
                }
             });
             window.addEventListener("test", P, P), window.removeEventListener("test", P, P)
          } catch (e) {
             S = !1
          }
          var R = !!S && {
                passive: !1
             },
             C = function (e, t) {
                var n = window.getComputedStyle(e);
                return "hidden" !== n[t] && !(n.overflowY === n.overflowX && "TEXTAREA" !== e.tagName && "visible" === n[t])
             },
             A = function (e, t) {
                var n = t;
                do {
                   if ("undefined" != typeof ShadowRoot && n instanceof ShadowRoot && (n = n.host), F(e, n)) {
                      var r = O(e, n);
                      if (r[1] > r[2]) return !0
                   }
                   n = n.parentNode
                } while (n && n !== document.body);
                return !1
             },
             F = function (e, t) {
                return C(t, "v" === e ? "overflowY" : "overflowX")
             },
             O = function (e, t) {
                return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
             },
             k = function (e) {
                return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
             },
             x = function (e) {
                return [e.deltaX, e.deltaY]
             },
             T = function (e) {
                return e && "current" in e ? e.current : e
             },
             L = 0,
             N = [],
             B = (f.useMedium((function (e) {
                var t = c.useRef([]),
                   n = c.useRef([0, 0]),
                   r = c.useRef(),
                   o = c.useState(L++)[0],
                   i = c.useState((function () {
                      return h()
                   }))[0],
                   a = c.useRef(e);
                c.useEffect((function () {
                   a.current = e
                }), [e]), c.useEffect((function () {
                   if (e.inert) {
                      document.body.classList.add("block-interactivity-".concat(o));
                      var t = (0, s.__spreadArray)([e.lockRef.current], (e.shards || []).map(T), !0).filter(Boolean);
                      return t.forEach((function (e) {
                            return e.classList.add("allow-interactivity-".concat(o))
                         })),
                         function () {
                            document.body.classList.remove("block-interactivity-".concat(o)), t.forEach((function (e) {
                               return e.classList.remove("allow-interactivity-".concat(o))
                            }))
                         }
                   }
                }), [e.inert, e.lockRef.current, e.shards]);
                var u = c.useCallback((function (e, t) {
                      if ("touches" in e && 2 === e.touches.length) return !a.current.allowPinchZoom;
                      var o, i = k(e),
                         u = n.current,
                         s = "deltaX" in e ? e.deltaX : u[0] - i[0],
                         c = "deltaY" in e ? e.deltaY : u[1] - i[1],
                         l = e.target,
                         d = Math.abs(s) > Math.abs(c) ? "h" : "v";
                      if ("touches" in e && "h" === d && "range" === l.type) return !1;
                      var f = A(d, l);
                      if (!f) return !0;
                      if (f ? o = d : (o = "v" === d ? "h" : "v", f = A(d, l)), !f) return !1;
                      if (!r.current && "changedTouches" in e && (s || c) && (r.current = o), !o) return !0;
                      var v = r.current || o;
                      return function (e, t, n, r, o) {
                         var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                            u = a * r,
                            s = n.target,
                            c = t.contains(s),
                            l = !1,
                            d = u > 0,
                            f = 0,
                            v = 0;
                         do {
                            var p = O(e, s),
                               m = p[0],
                               g = p[1] - p[2] - a * m;
                            (m || g) && F(e, s) && (f += g, v += m), s = s.parentNode
                         } while (!c && s !== document.body || c && (t.contains(s) || t === s));
                         return (d && (o && 0 === f || !o && u > f) || !d && (o && 0 === v || !o && -u > v)) && (l = !0), l
                      }(v, t, e, "h" === v ? s : c, !0)
                   }), []),
                   l = c.useCallback((function (e) {
                      if (N.length && N[N.length - 1] === i) {
                         var n = "deltaY" in e ? x(e) : k(e),
                            r = t.current.filter((function (t) {
                               var r;
                               return t.name === e.type && t.target === e.target && (r = t.delta)[0] === n[0] && r[1] === n[1]
                            }))[0];
                         if (r && r.should) return void(e.cancelable && e.preventDefault());
                         if (!r) {
                            var o = (a.current.shards || []).map(T).filter(Boolean).filter((function (t) {
                               return t.contains(e.target)
                            }));
                            (o.length > 0 ? u(e, o[0]) : !a.current.noIsolation) && e.cancelable && e.preventDefault()
                         }
                      }
                   }), []),
                   d = c.useCallback((function (e, n, r, o) {
                      var i = {
                         name: e,
                         delta: n,
                         target: r,
                         should: o
                      };
                      t.current.push(i), setTimeout((function () {
                         t.current = t.current.filter((function (e) {
                            return e !== i
                         }))
                      }), 1)
                   }), []),
                   f = c.useCallback((function (e) {
                      n.current = k(e), r.current = void 0
                   }), []),
                   v = c.useCallback((function (t) {
                      d(t.type, x(t), t.target, u(t, e.lockRef.current))
                   }), []),
                   p = c.useCallback((function (t) {
                      d(t.type, k(t), t.target, u(t, e.lockRef.current))
                   }), []);
                c.useEffect((function () {
                   return N.push(i), e.setCallbacks({
                         onScrollCapture: v,
                         onWheelCapture: v,
                         onTouchMoveCapture: p
                      }), document.addEventListener("wheel", l, R), document.addEventListener("touchmove", l, R), document.addEventListener("touchstart", f, R),
                      function () {
                         N = N.filter((function (e) {
                            return e !== i
                         })), document.removeEventListener("wheel", l, R), document.removeEventListener("touchmove", l, R), document.removeEventListener("touchstart", f, R)
                      }
                }), []);
                var m = e.removeScrollBar,
                   g = e.inert;
                return c.createElement(c.Fragment, null, g ? c.createElement(i, {
                   styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, m ? c.createElement(_, {
                   gapMode: "margin"
                }) : null)
             })), m),
             I = c.forwardRef((function (e, t) {
                return c.createElement(p, (0, s.__assign)({}, e, {
                   ref: t,
                   sideCar: B
                }))
             }));
          I.classNames = p.classNames;
          var D = I
       },
       41714: function (e, t, n) {
          "use strict";
 
          function r(e, t, n, r, o, i, a) {
             try {
                var u = e[i](a),
                   s = u.value
             } catch (e) {
                return void n(e)
             }
             u.done ? t(s) : Promise.resolve(s).then(r, o)
          }
 
          function o(e) {
             return function () {
                var t = this,
                   n = arguments;
                return new Promise((function (o, i) {
                   var a = e.apply(t, n);
 
                   function u(e) {
                      r(a, o, i, u, s, "next", e)
                   }
 
                   function s(e) {
                      r(a, o, i, u, s, "throw", e)
                   }
                   u(void 0)
                }))
             }
          }
          n.d(t, {
             Z: function () {
                return o
             }
          })
       },
       16589: function (e, t, n) {
          "use strict";
 
          function r(e, t) {
             for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
             }
          }
 
          function o(e, t, n) {
             return t && r(e.prototype, t), n && r(e, n), e
          }
          n.d(t, {
             Z: function () {
                return o
             }
          })
       },
       86075: function (e, t, n) {
          "use strict";
 
          function r(e, t) {
             if (null == e) return {};
             var n, r, o = function (e, t) {
                if (null == e) return {};
                var n, r, o = {},
                   i = Object.keys(e);
                for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
             }(e, t);
             if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
             }
             return o
          }
          n.d(t, {
             Z: function () {
                return r
             }
          })
       }
    }
 ]);