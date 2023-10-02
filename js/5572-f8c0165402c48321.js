"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
   [5572], {
      40044: function (t, e, n) {
         n.d(e, {
            p: function () {
               return i
            }
         });
         let i = (0, n(70079).createContext)({})
      },
      44540: function (t, e, n) {
         n.d(e, {
            _: function () {
               return i
            }
         });
         let i = (0, n(70079).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
         })
      },
      92252: function (t, e, n) {
         n.d(e, {
            O: function () {
               return i
            }
         });
         let i = (0, n(70079).createContext)(null)
      },
      85572: function (t, e, n) {
         n.d(e, {
            E: function () {
               return Do
            }
         });
         var i, r, o, a, s = n(70079),
            l = n(44540);
         let u = (0, s.createContext)({});
         var h = n(92252),
            d = n(95129);
         let c = (0, s.createContext)({
            strict: !1
         });

         function p(t) {
            return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
         }

         function m(t) {
            return "string" == typeof t || Array.isArray(t)
         }

         function f(t) {
            return "object" == typeof t && "function" == typeof t.start
         }
         let v = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

         function g(t) {
            return f(t.animate) || v.some((e => m(t[e])))
         }

         function y(t) {
            return Boolean(g(t) || t.variants)
         }

         function x(t) {
            return Array.isArray(t) ? t.join(" ") : t
         }
         let b = t => ({
               isEnabled: e => t.some((t => !!e[t]))
            }),
            w = {
               measureLayout: b(["layout", "layoutId", "drag"]),
               animation: b(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
               exit: b(["exit"]),
               drag: b(["drag", "dragControls"]),
               focus: b(["whileFocus"]),
               hover: b(["whileHover", "onHoverStart", "onHoverEnd"]),
               tap: b(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
               pan: b(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
               inView: b(["whileInView", "onViewportEnter", "onViewportLeave"])
            };
         var S = n(95253),
            E = n(36635);
         let P = {
               hasAnimatedSinceResize: !0,
               hasEverUpdated: !1
            },
            V = 1;
         var T = n(40044);
         class A extends s.Component {
            getSnapshotBeforeUpdate() {
               let {
                  visualElement: t,
                  props: e
               } = this.props;
               return t && t.setProps(e), null
            }
            componentDidUpdate() {}
            render() {
               return this.props.children
            }
         }
         let C = (0, s.createContext)({}),
            M = Symbol.for("motionComponentSymbol"),
            R = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

         function L(t) {
            if ("string" != typeof t || t.includes("-"));
            else if (R.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
            return !1
         }
         let k = {},
            O = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
            B = new Set(O);

         function D(t, {
            layout: e,
            layoutId: n
         }) {
            return B.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!k[t] || "opacity" === t)
         }
         let j = t => !!(null == t ? void 0 : t.getVelocity),
            F = {
               x: "translateX",
               y: "translateY",
               z: "translateZ",
               transformPerspective: "perspective"
            },
            I = (t, e) => O.indexOf(t) - O.indexOf(e);

         function U(t) {
            return t.startsWith("--")
         }
         let N = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
            $ = (t, e) => n => Math.max(Math.min(n, e), t),
            z = t => t % 1 ? Number(t.toFixed(5)) : t,
            Y = /(-)?([\d]*\.?[\d])+/g,
            H = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
            W = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

         function X(t) {
            return "string" == typeof t
         }
         let Z = t => ({
               test: e => X(e) && e.endsWith(t) && 1 === e.split(" ").length,
               parse: parseFloat,
               transform: e => `${e}${t}`
            }),
            q = Z("deg"),
            G = Z("%"),
            K = Z("px"),
            _ = Z("vh"),
            J = Z("vw"),
            Q = Object.assign(Object.assign({}, G), {
               parse: t => G.parse(t) / 100,
               transform: t => G.transform(100 * t)
            }),
            tt = {
               test: t => "number" == typeof t,
               parse: parseFloat,
               transform: t => t
            },
            et = Object.assign(Object.assign({}, tt), {
               transform: $(0, 1)
            }),
            nt = Object.assign(Object.assign({}, tt), {
               default: 1
            }),
            it = {
               ...tt,
               transform: Math.round
            },
            rt = {
               borderWidth: K,
               borderTopWidth: K,
               borderRightWidth: K,
               borderBottomWidth: K,
               borderLeftWidth: K,
               borderRadius: K,
               radius: K,
               borderTopLeftRadius: K,
               borderTopRightRadius: K,
               borderBottomRightRadius: K,
               borderBottomLeftRadius: K,
               width: K,
               maxWidth: K,
               height: K,
               maxHeight: K,
               size: K,
               top: K,
               right: K,
               bottom: K,
               left: K,
               padding: K,
               paddingTop: K,
               paddingRight: K,
               paddingBottom: K,
               paddingLeft: K,
               margin: K,
               marginTop: K,
               marginRight: K,
               marginBottom: K,
               marginLeft: K,
               rotate: q,
               rotateX: q,
               rotateY: q,
               rotateZ: q,
               scale: nt,
               scaleX: nt,
               scaleY: nt,
               scaleZ: nt,
               skew: q,
               skewX: q,
               skewY: q,
               distance: K,
               translateX: K,
               translateY: K,
               translateZ: K,
               x: K,
               y: K,
               z: K,
               perspective: K,
               transformPerspective: K,
               opacity: et,
               originX: Q,
               originY: Q,
               originZ: K,
               zIndex: it,
               fillOpacity: et,
               strokeOpacity: et,
               numOctaves: it
            };

         function ot(t, e, n, i) {
            let {
               style: r,
               vars: o,
               transform: a,
               transformKeys: s,
               transformOrigin: l
            } = t;
            s.length = 0;
            let u = !1,
               h = !1,
               d = !0;
            for (let t in e) {
               let n = e[t];
               if (U(t)) {
                  o[t] = n;
                  continue
               }
               let i = rt[t],
                  c = N(n, i);
               if (B.has(t)) {
                  if (u = !0, a[t] = c, s.push(t), !d) continue;
                  n !== (i.default || 0) && (d = !1)
               } else t.startsWith("origin") ? (h = !0, l[t] = c) : r[t] = c
            }
            if (!e.transform && (u || i ? r.transform = function ({
                  transform: t,
                  transformKeys: e
               }, {
                  enableHardwareAcceleration: n = !0,
                  allowTransformNone: i = !0
               }, r, o) {
                  let a = "";
                  for (let n of (e.sort(I), e)) a += `${F[n]||n}(${t[n]}) `;
                  return n && !t.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(t, r ? "" : a) : i && r && (a = "none"), a
               }(t, n, d, i) : r.transform && (r.transform = "none")), h) {
               let {
                  originX: t = "50%",
                  originY: e = "50%",
                  originZ: n = 0
               } = l;
               r.transformOrigin = `${t} ${e} ${n}`
            }
         }
         let at = () => ({
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {}
         });

         function st(t, e, n) {
            for (let i in e) j(e[i]) || D(i, n) || (t[i] = e[i])
         }

         function lt(t, e, n) {
            let i = {},
               r = function (t, e, n) {
                  let i = {};
                  return st(i, t.style || {}, t), Object.assign(i, function ({
                     transformTemplate: t
                  }, e, n) {
                     return (0, s.useMemo)((() => {
                        let i = {
                           style: {},
                           transform: {},
                           transformKeys: [],
                           transformOrigin: {},
                           vars: {}
                        };
                        return ot(i, e, {
                           enableHardwareAcceleration: !n
                        }, t), Object.assign({}, i.vars, i.style)
                     }), [e])
                  }(t, e, n)), t.transformValues ? t.transformValues(i) : i
               }(t, e, n);
            return t.drag && !1 !== t.dragListener && (i.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), i.style = r, i
         }
         var ut = n(69664);

         function ht(t, e, n) {
            return "string" == typeof t ? t : K.transform(e + n * t)
         }
         let dt = {
               offset: "stroke-dashoffset",
               array: "stroke-dasharray"
            },
            ct = {
               offset: "strokeDashoffset",
               array: "strokeDasharray"
            };

         function pt(t, {
            attrX: e,
            attrY: n,
            originX: i,
            originY: r,
            pathLength: o,
            pathSpacing: a = 1,
            pathOffset: s = 0,
            ...l
         }, u, h) {
            ot(t, l, u, h), t.attrs = t.style, t.style = {};
            let {
               attrs: d,
               style: c,
               dimensions: p
            } = t;
            d.transform && (p && (c.transform = d.transform), delete d.transform), p && (void 0 !== i || void 0 !== r || c.transform) && (c.transformOrigin = function (t, e, n) {
               return `${ht(e,t.x,t.width)} ${ht(n,t.y,t.height)}`
            }(p, void 0 !== i ? i : .5, void 0 !== r ? r : .5)), void 0 !== e && (d.x = e), void 0 !== n && (d.y = n), void 0 !== o && function (t, e, n = 1, i = 0, r = !0) {
               t.pathLength = 1;
               let o = r ? dt : ct;
               t[o.offset] = K.transform(-i);
               let a = K.transform(e),
                  s = K.transform(n);
               t[o.array] = `${a} ${s}`
            }(d, o, a, s, !1)
         }
         let mt = () => ({
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {},
            attrs: {}
         });

         function ft(t, e) {
            let n = (0, s.useMemo)((() => {
               let n = {
                  style: {},
                  transform: {},
                  transformKeys: [],
                  transformOrigin: {},
                  vars: {},
                  attrs: {}
               };
               return pt(n, e, {
                  enableHardwareAcceleration: !1
               }, t.transformTemplate), {
                  ...n.attrs,
                  style: {
                     ...n.style
                  }
               }
            }), [e]);
            if (t.style) {
               let e = {};
               st(e, t.style, t), n.style = {
                  ...e,
                  ...n.style
               }
            }
            return n
         }
         let vt = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

         function gt(t, {
            style: e,
            vars: n
         }, i, r) {
            for (let o in Object.assign(t.style, e, r && r.getProjectionStyles(i)), n) t.style.setProperty(o, n[o])
         }
         let yt = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

         function xt(t, e, n, i) {
            for (let n in gt(t, e, void 0, i), e.attrs) t.setAttribute(yt.has(n) ? n : vt(n), e.attrs[n])
         }

         function bt(t) {
            let {
               style: e
            } = t, n = {};
            for (let i in e)(j(e[i]) || D(i, t)) && (n[i] = e[i]);
            return n
         }

         function wt(t) {
            let e = bt(t);
            for (let n in t)
               if (j(t[n])) {
                  e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]
               } return e
         }

         function St(t, e, n, i = {}, r = {}) {
            return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, r)), e
         }
         let Et = t => Array.isArray(t),
            Pt = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
            Vt = t => Et(t) ? t[t.length - 1] || 0 : t;

         function Tt(t) {
            let e = j(t) ? t.get() : t;
            return Pt(e) ? e.toValue() : e
         }
         let At = t => (e, n) => {
               let i = (0, s.useContext)(u),
                  r = (0, s.useContext)(h.O),
                  o = () => function ({
                     scrapeMotionValuesFromProps: t,
                     createRenderState: e,
                     onMount: n
                  }, i, r, o) {
                     let a = {
                        latestValues: function (t, e, n, i) {
                           let r = {},
                              o = i(t);
                           for (let t in o) r[t] = Tt(o[t]);
                           let {
                              initial: a,
                              animate: s
                           } = t, l = g(t), u = y(t);
                           e && u && !l && !1 !== t.inherit && (void 0 === a && (a = e.initial), void 0 === s && (s = e.animate));
                           let h = !!n && !1 === n.initial;
                           h = h || !1 === a;
                           let d = h ? s : a;
                           if (d && "boolean" != typeof d && !f(d)) {
                              (Array.isArray(d) ? d : [d]).forEach((e => {
                                 let n = St(t, e);
                                 if (!n) return;
                                 let {
                                    transitionEnd: i,
                                    transition: o,
                                    ...a
                                 } = n;
                                 for (let t in a) {
                                    let e = a[t];
                                    if (Array.isArray(e)) {
                                       e = e[h ? e.length - 1 : 0]
                                    }
                                    null !== e && (r[t] = e)
                                 }
                                 for (let t in i) r[t] = i[t]
                              }))
                           }
                           return r
                        }(i, r, o, t),
                        renderState: e()
                     };
                     return n && (a.mount = t => n(i, t, a)), a
                  }(t, e, i, r);
               return n ? o() : (0, E.h)(o)
            },
            Ct = {
               useVisualState: At({
                  scrapeMotionValuesFromProps: wt,
                  createRenderState: mt,
                  onMount: (t, e, {
                     renderState: n,
                     latestValues: i
                  }) => {
                     try {
                        n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                     } catch (t) {
                        n.dimensions = {
                           x: 0,
                           y: 0,
                           width: 0,
                           height: 0
                        }
                     }
                     pt(n, i, {
                        enableHardwareAcceleration: !1
                     }, t.transformTemplate), xt(e, n)
                  }
               })
            },
            Mt = {
               useVisualState: At({
                  scrapeMotionValuesFromProps: bt,
                  createRenderState: at
               })
            };

         function Rt(t, e, n, i = {
            passive: !0
         }) {
            return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
         }

         function Lt(t, e, n, i) {
            (0, s.useEffect)((() => {
               let r = t.current;
               if (n && r) return Rt(r, e, n, i)
            }), [t, e, n, i])
         }

         function kt(t) {
            return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
         }

         function Ot(t) {
            return !!t.touches
         }(i = o || (o = {})).Animate = "animate", i.Hover = "whileHover", i.Tap = "whileTap", i.Drag = "whileDrag", i.Focus = "whileFocus", i.InView = "whileInView", i.Exit = "exit";
         let Bt = {
            pageX: 0,
            pageY: 0
         };

         function Dt(t, e = "page") {
            return {
               point: Ot(t) ? function (t, e = "page") {
                  let n = t.touches[0] || t.changedTouches[0] || Bt;
                  return {
                     x: n[e + "X"],
                     y: n[e + "Y"]
                  }
               }(t, e) : function (t, e = "page") {
                  return {
                     x: t[e + "X"],
                     y: t[e + "Y"]
                  }
               }(t, e)
            }
         }
         let jt = (t, e = !1) => {
               let n = e => t(e, Dt(e));
               return e ? t => {
                  let e = t instanceof MouseEvent;
                  (!e || e && 0 === t.button) && n(t)
               } : n
            },
            Ft = () => S.j && null === window.onpointerdown,
            It = () => S.j && null === window.ontouchstart,
            Ut = () => S.j && null === window.onmousedown,
            Nt = {
               pointerdown: "mousedown",
               pointermove: "mousemove",
               pointerup: "mouseup",
               pointercancel: "mousecancel",
               pointerover: "mouseover",
               pointerout: "mouseout",
               pointerenter: "mouseenter",
               pointerleave: "mouseleave"
            },
            $t = {
               pointerdown: "touchstart",
               pointermove: "touchmove",
               pointerup: "touchend",
               pointercancel: "touchcancel"
            };

         function zt(t) {
            if (Ft());
            else {
               if (It()) return $t[t];
               if (Ut()) return Nt[t]
            }
            return t
         }

         function Yt(t, e, n, i) {
            return Rt(t, zt(e), jt(n, "pointerdown" === e), i)
         }

         function Ht(t, e, n, i) {
            return Lt(t, zt(e), n && jt(n, "pointerdown" === e), i)
         }

         function Wt(t) {
            let e = null;
            return () => null === e && (e = t, () => {
               e = null
            })
         }
         let Xt = Wt("dragHorizontal"),
            Zt = Wt("dragVertical");

         function qt(t) {
            let e = !1;
            if ("y" === t) e = Zt();
            else if ("x" === t) e = Xt();
            else {
               let t = Xt(),
                  n = Zt();
               t && n ? e = () => {
                  t(), n()
               } : (t && t(), n && n())
            }
            return e
         }

         function Gt() {
            let t = qt(!0);
            return !t || (t(), !1)
         }

         function Kt(t, e, n) {
            return (i, r) => {
               kt(i) && !Gt() && (t.animationState && t.animationState.setActive(o.Hover, e), n && n(i, r))
            }
         }
         let _t = (t, e) => !!e && (t === e || _t(t, e.parentElement));
         var Jt = n(91014);
         let Qt = (t, e) => n => e(t(n)),
            te = (...t) => t.reduce(Qt);
         var ee = n(63367),
            ne = n(3350);
         let ie = new WeakMap,
            re = new WeakMap,
            oe = t => {
               let e = ie.get(t.target);
               e && e(t)
            },
            ae = t => {
               t.forEach(oe)
            },
            se = {
               some: 0,
               all: 1
            };

         function le(t, e, n, {
            root: i,
            margin: r,
            amount: a = "some",
            once: l
         }) {
            (0, s.useEffect)((() => {
               if (!t || !n.current) return;
               let s = {
                  root: null == i ? void 0 : i.current,
                  rootMargin: r,
                  threshold: "number" == typeof a ? a : se[a]
               };
               return function (t, e, n) {
                  let i = function ({
                     root: t,
                     ...e
                  }) {
                     let n = t || document;
                     re.has(n) || re.set(n, {});
                     let i = re.get(n),
                        r = JSON.stringify(e);
                     return i[r] || (i[r] = new IntersectionObserver(ae, {
                        root: t,
                        ...e
                     })), i[r]
                  }(e);
                  return ie.set(t, n), i.observe(t), () => {
                     ie.delete(t), i.unobserve(t)
                  }
               }(n.current, s, (t => {
                  let {
                     isIntersecting: i
                  } = t;
                  if (e.isInView === i || (e.isInView = i, l && !i && e.hasEnteredView)) return;
                  i && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(o.InView, i);
                  let r = n.getProps(),
                     a = i ? r.onViewportEnter : r.onViewportLeave;
                  a && a(t)
               }))
            }), [t, i, r, a])
         }

         function ue(t, e, n, {
            fallback: i = !0
         }) {
            (0, s.useEffect)((() => {
               t && i && ("production" !== ee.O && (0, ne.O)(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((() => {
                  e.hasEnteredView = !0;
                  let {
                     onViewportEnter: t
                  } = n.getProps();
                  t && t(null), n.animationState && n.animationState.setActive(o.InView, !0)
               })))
            }), [t])
         }
         let he = t => e => (t(e), null),
            de = {
               inView: he((function ({
                  visualElement: t,
                  whileInView: e,
                  onViewportEnter: n,
                  onViewportLeave: i,
                  viewport: r = {}
               }) {
                  let o = (0, s.useRef)({
                        hasEnteredView: !1,
                        isInView: !1
                     }),
                     a = Boolean(e || n || i);
                  r.once && o.current.hasEnteredView && (a = !1), ("undefined" == typeof IntersectionObserver ? ue : le)(a, o.current, t, r)
               })),
               tap: he((function ({
                  onTap: t,
                  onTapStart: e,
                  onTapCancel: n,
                  whileTap: i,
                  visualElement: r
               }) {
                  let a = (0, s.useRef)(!1),
                     l = (0, s.useRef)(null),
                     u = {
                        passive: !(e || t || n || m)
                     };

                  function h() {
                     l.current && l.current(), l.current = null
                  }

                  function d() {
                     return h(), a.current = !1, r.animationState && r.animationState.setActive(o.Tap, !1), !Gt()
                  }

                  function c(e, i) {
                     d() && (_t(r.current, e.target) ? t && t(e, i) : n && n(e, i))
                  }

                  function p(t, e) {
                     d() && n && n(t, e)
                  }

                  function m(t, n) {
                     h(), !a.current && (a.current = !0, l.current = te(Yt(window, "pointerup", c, u), Yt(window, "pointercancel", p, u)), r.animationState && r.animationState.setActive(o.Tap, !0), e && e(t, n))
                  }
                  Ht(r, "pointerdown", t || e || n || i ? m : void 0, u), (0, Jt.z)(h)
               })),
               focus: he((function ({
                  whileFocus: t,
                  visualElement: e
               }) {
                  let {
                     animationState: n
                  } = e;
                  Lt(e, "focus", t ? () => {
                     n && n.setActive(o.Focus, !0)
                  } : void 0), Lt(e, "blur", t ? () => {
                     n && n.setActive(o.Focus, !1)
                  } : void 0)
               })),
               hover: he((function ({
                  onHoverStart: t,
                  onHoverEnd: e,
                  whileHover: n,
                  visualElement: i
               }) {
                  Ht(i, "pointerenter", t || n ? Kt(i, !0, t) : void 0, {
                     passive: !t
                  }), Ht(i, "pointerleave", e || n ? Kt(i, !1, e) : void 0, {
                     passive: !e
                  })
               }))
            };

         function ce() {
            let t = (0, s.useContext)(h.O);
            if (null === t) return [!0, null];
            let {
               isPresent: e,
               onExitComplete: n,
               register: i
            } = t, r = (0, s.useId)();
            (0, s.useEffect)((() => i(r)), []);
            return !e && n ? [!1, () => n && n(r)] : [!0]
         }

         function pe(t, e) {
            if (!Array.isArray(e)) return !1;
            let n = e.length;
            if (n !== t.length) return !1;
            for (let i = 0; i < n; i++)
               if (e[i] !== t[i]) return !1;
            return !0
         }

         function me(t, e) {
            var n = {};
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && 0 > e.indexOf(i) && (n[i] = t[i]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
               var r = 0;
               for (i = Object.getOwnPropertySymbols(t); r < i.length; r++) 0 > e.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(t, i[r]) && (n[i[r]] = t[i[r]])
            }
            return n
         }
         var fe = function () {},
            ve = function () {};
         let ge = (t, e, n) => Math.min(Math.max(n, t), e);

         function ye(t, e) {
            return t * Math.sqrt(1 - e * e)
         }
         let xe = ["duration", "bounce"],
            be = ["stiffness", "damping", "mass"];

         function we(t, e) {
            return e.some((e => void 0 !== t[e]))
         }

         function Se(t) {
            var {
               from: e = 0,
               to: n = 1,
               restSpeed: i = 2,
               restDelta: r
            } = t, o = me(t, ["from", "to", "restSpeed", "restDelta"]);
            let a = {
                  done: !1,
                  value: e
               },
               {
                  stiffness: s,
                  damping: l,
                  mass: u,
                  velocity: h,
                  duration: d,
                  isResolvedFromDuration: c
               } = function (t) {
                  let e = Object.assign({
                     velocity: 0,
                     stiffness: 100,
                     damping: 10,
                     mass: 1,
                     isResolvedFromDuration: !1
                  }, t);
                  if (!we(t, be) && we(t, xe)) {
                     let n = function ({
                        duration: t = 800,
                        bounce: e = .25,
                        velocity: n = 0,
                        mass: i = 1
                     }) {
                        let r, o;
                        fe(t <= 1e4, "Spring duration must be 10 seconds or less");
                        let a = 1 - e;
                        a = ge(.05, 1, a), t = ge(.01, 10, t / 1e3), a < 1 ? (r = e => {
                           let i = e * a,
                              r = i * t,
                              o = ye(e, a);
                           return .001 - (i - n) / o * Math.exp(-r)
                        }, o = e => {
                           let i = e * a * t,
                              o = Math.pow(a, 2) * Math.pow(e, 2) * t,
                              s = ye(Math.pow(e, 2), a);
                           return (.001 - r(e) > 0 ? -1 : 1) * ((i * n + n - o) * Math.exp(-i)) / s
                        }) : (r = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, o = e => Math.exp(-e * t) * (t * t * (n - e)));
                        let s = function (t, e, n) {
                           let i = n;
                           for (let n = 1; n < 12; n++) i -= t(i) / e(i);
                           return i
                        }(r, o, 5 / t);
                        if (t *= 1e3, isNaN(s)) return {
                           stiffness: 100,
                           damping: 10,
                           duration: t
                        }; {
                           let e = Math.pow(s, 2) * i;
                           return {
                              stiffness: e,
                              damping: 2 * a * Math.sqrt(i * e),
                              duration: t
                           }
                        }
                     }(t);
                     (e = Object.assign(Object.assign(Object.assign({}, e), n), {
                        velocity: 0,
                        mass: 1
                     })).isResolvedFromDuration = !0
                  }
                  return e
               }(o),
               p = Ee,
               m = Ee;

            function f() {
               let t = h ? -h / 1e3 : 0,
                  i = n - e,
                  o = l / (2 * Math.sqrt(s * u)),
                  a = Math.sqrt(s / u) / 1e3;
               if (void 0 === r && (r = Math.min(Math.abs(n - e) / 100, .4)), o < 1) {
                  let e = ye(a, o);
                  p = r => n - Math.exp(-o * a * r) * ((t + o * a * i) / e * Math.sin(e * r) + i * Math.cos(e * r)), m = n => {
                     let r = Math.exp(-o * a * n);
                     return o * a * r * (Math.sin(e * n) * (t + o * a * i) / e + i * Math.cos(e * n)) - r * (Math.cos(e * n) * (t + o * a * i) - e * i * Math.sin(e * n))
                  }
               } else if (1 === o) p = e => n - Math.exp(-a * e) * (i + (t + a * i) * e);
               else {
                  let e = a * Math.sqrt(o * o - 1);
                  p = r => {
                     let s = Math.min(e * r, 300);
                     return n - Math.exp(-o * a * r) * ((t + o * a * i) * Math.sinh(s) + e * i * Math.cosh(s)) / e
                  }
               }
            }
            return f(), {
               next: t => {
                  let e = p(t);
                  if (c) a.done = t >= d;
                  else {
                     let o = 1e3 * m(t),
                        s = Math.abs(n - e) <= r;
                     a.done = Math.abs(o) <= i && s
                  }
                  return a.value = a.done ? n : e, a
               },
               flipTarget: () => {
                  h = -h, [e, n] = [n, e], f()
               }
            }
         }
         Se.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
         let Ee = t => 0,
            Pe = (t, e, n) => {
               let i = e - t;
               return 0 === i ? 1 : (n - t) / i
            },
            Ve = (t, e, n) => -n * t + n * e + t,
            Te = (t, e) => n => Boolean(X(n) && W.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
            Ae = (t, e, n) => i => {
               if (!X(i)) return i;
               let [r, o, a, s] = i.match(Y);
               return {
                  [t]: parseFloat(r),
                  [e]: parseFloat(o),
                  [n]: parseFloat(a),
                  alpha: void 0 !== s ? parseFloat(s) : 1
               }
            },
            Ce = $(0, 255),
            Me = Object.assign(Object.assign({}, tt), {
               transform: t => Math.round(Ce(t))
            }),
            Re = {
               test: Te("rgb", "red"),
               parse: Ae("red", "green", "blue"),
               transform: ({
                  red: t,
                  green: e,
                  blue: n,
                  alpha: i = 1
               }) => "rgba(" + Me.transform(t) + ", " + Me.transform(e) + ", " + Me.transform(n) + ", " + z(et.transform(i)) + ")"
            },
            Le = {
               test: Te("#"),
               parse: function (t) {
                  let e = "",
                     n = "",
                     i = "",
                     r = "";
                  return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), i = t.substr(5, 2), r = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), i = t.substr(3, 1), r = t.substr(4, 1), e += e, n += n, i += i, r += r), {
                     red: parseInt(e, 16),
                     green: parseInt(n, 16),
                     blue: parseInt(i, 16),
                     alpha: r ? parseInt(r, 16) / 255 : 1
                  }
               },
               transform: Re.transform
            },
            ke = {
               test: Te("hsl", "hue"),
               parse: Ae("hue", "saturation", "lightness"),
               transform: ({
                  hue: t,
                  saturation: e,
                  lightness: n,
                  alpha: i = 1
               }) => "hsla(" + Math.round(t) + ", " + G.transform(z(e)) + ", " + G.transform(z(n)) + ", " + z(et.transform(i)) + ")"
            };

         function Oe(t, e, n) {
            return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
         }

         function Be({
            hue: t,
            saturation: e,
            lightness: n,
            alpha: i
         }) {
            t /= 360, n /= 100;
            let r = 0,
               o = 0,
               a = 0;
            if (e /= 100) {
               let i = n < .5 ? n * (1 + e) : n + e - n * e,
                  s = 2 * n - i;
               r = Oe(s, i, t + 1 / 3), o = Oe(s, i, t), a = Oe(s, i, t - 1 / 3)
            } else r = o = a = n;
            return {
               red: Math.round(255 * r),
               green: Math.round(255 * o),
               blue: Math.round(255 * a),
               alpha: i
            }
         }
         let De = (t, e, n) => {
               let i = t * t;
               return Math.sqrt(Math.max(0, n * (e * e - i) + i))
            },
            je = [Le, Re, ke],
            Fe = t => je.find((e => e.test(t))),
            Ie = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            Ue = (t, e) => {
               let n = Fe(t),
                  i = Fe(e);
               ve(!!n, Ie(t)), ve(!!i, Ie(e));
               let r = n.parse(t),
                  o = i.parse(e);
               n === ke && (r = Be(r), n = Re), i === ke && (o = Be(o), i = Re);
               let a = Object.assign({}, r);
               return t => {
                  for (let e in a) "alpha" !== e && (a[e] = De(r[e], o[e], t));
                  return a.alpha = Ve(r.alpha, o.alpha, t), n.transform(a)
               }
            },
            Ne = {
               test: t => Re.test(t) || Le.test(t) || ke.test(t),
               parse: t => Re.test(t) ? Re.parse(t) : ke.test(t) ? ke.parse(t) : Le.parse(t),
               transform: t => X(t) ? t : t.hasOwnProperty("red") ? Re.transform(t) : ke.transform(t)
            },
            $e = "${c}",
            ze = "${n}";

         function Ye(t) {
            "number" == typeof t && (t = `${t}`);
            let e = [],
               n = 0,
               i = t.match(H);
            i && (n = i.length, t = t.replace(H, $e), e.push(...i.map(Ne.parse)));
            let r = t.match(Y);
            return r && (t = t.replace(Y, ze), e.push(...r.map(tt.parse))), {
               values: e,
               numColors: n,
               tokenised: t
            }
         }

         function He(t) {
            return Ye(t).values
         }

         function We(t) {
            let {
               values: e,
               numColors: n,
               tokenised: i
            } = Ye(t), r = e.length;
            return t => {
               let e = i;
               for (let i = 0; i < r; i++) e = e.replace(i < n ? $e : ze, i < n ? Ne.transform(t[i]) : z(t[i]));
               return e
            }
         }
         let Xe = t => "number" == typeof t ? 0 : t,
            Ze = {
               test: function (t) {
                  var e, n, i, r;
                  return isNaN(t) && X(t) && (null !== (n = null === (e = t.match(Y)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (r = null === (i = t.match(H)) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0) > 0
               },
               parse: He,
               createTransformer: We,
               getAnimatableNone: function (t) {
                  let e = He(t);
                  return We(t)(e.map(Xe))
               }
            },
            qe = t => "number" == typeof t;

         function Ge(t, e) {
            return qe(t) ? n => Ve(t, e, n) : Ne.test(t) ? Ue(t, e) : Qe(t, e)
         }
         let Ke = (t, e) => {
               let n = [...t],
                  i = n.length,
                  r = t.map(((t, n) => Ge(t, e[n])));
               return t => {
                  for (let e = 0; e < i; e++) n[e] = r[e](t);
                  return n
               }
            },
            _e = (t, e) => {
               let n = Object.assign(Object.assign({}, t), e),
                  i = {};
               for (let r in n) void 0 !== t[r] && void 0 !== e[r] && (i[r] = Ge(t[r], e[r]));
               return t => {
                  for (let e in i) n[e] = i[e](t);
                  return n
               }
            };

         function Je(t) {
            let e = Ze.parse(t),
               n = e.length,
               i = 0,
               r = 0,
               o = 0;
            for (let t = 0; t < n; t++) i || "number" == typeof e[t] ? i++ : void 0 !== e[t].hue ? o++ : r++;
            return {
               parsed: e,
               numNumbers: i,
               numRGB: r,
               numHSL: o
            }
         }
         let Qe = (t, e) => {
               let n = Ze.createTransformer(e),
                  i = Je(t),
                  r = Je(e);
               return i.numHSL === r.numHSL && i.numRGB === r.numRGB && i.numNumbers >= r.numNumbers ? te(Ke(i.parsed, r.parsed), n) : (fe(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
            },
            tn = (t, e) => n => Ve(t, e, n);

         function en(t, e, {
            clamp: n = !0,
            ease: i,
            mixer: r
         } = {}) {
            let o = t.length;
            ve(o === e.length, "Both input and output ranges must be the same length"), ve(!i || !Array.isArray(i) || i.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[o - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
            let a = function (t, e, n) {
                  var i;
                  let r = [],
                     o = n || ("number" == typeof (i = t[0]) ? tn : "string" == typeof i ? Ne.test(i) ? Ue : Qe : Array.isArray(i) ? Ke : "object" == typeof i ? _e : void 0),
                     a = t.length - 1;
                  for (let n = 0; n < a; n++) {
                     let i = o(t[n], t[n + 1]);
                     if (e) {
                        let t = Array.isArray(e) ? e[n] : e;
                        i = te(t, i)
                     }
                     r.push(i)
                  }
                  return r
               }(e, i, r),
               s = 2 === o ? function ([t, e], [n]) {
                  return i => n(Pe(t, e, i))
               }(t, a) : function (t, e) {
                  let n = t.length,
                     i = n - 1;
                  return r => {
                     let o = 0,
                        a = !1;
                     if (r <= t[0] ? a = !0 : r >= t[i] && (o = i - 1, a = !0), !a) {
                        let e = 1;
                        for (; e < n && !(t[e] > r) && e !== i; e++);
                        o = e - 1
                     }
                     let s = Pe(t[o], t[o + 1], r);
                     return e[o](s)
                  }
               }(t, a);
            return n ? e => s(ge(t[0], t[o - 1], e)) : s
         }
         let nn = t => e => 1 - t(1 - e),
            rn = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
            on = t => e => e * e * ((t + 1) * e - t),
            an = t => t,
            sn = t => Math.pow(t, 2),
            ln = nn(sn),
            un = rn(sn),
            hn = t => 1 - Math.sin(Math.acos(t)),
            dn = nn(hn),
            cn = rn(dn),
            pn = on(1.525),
            mn = nn(pn),
            fn = rn(pn),
            vn = (t => {
               let e = on(1.525);
               return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })(),
            gn = t => {
               if (1 === t || 0 === t) return t;
               let e = t * t;
               return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
            },
            yn = nn(gn);

         function xn({
            from: t = 0,
            to: e = 1,
            ease: n,
            offset: i,
            duration: r = 300
         }) {
            let o = {
                  done: !1,
                  value: t
               },
               a = Array.isArray(e) ? e : [t, e],
               s = (i && i.length === a.length ? i : function (t) {
                  let e = t.length;
                  return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
               }(a)).map((t => t * r));

            function l() {
               return en(s, a, {
                  ease: Array.isArray(n) ? n : a.map((() => n || un)).splice(0, a.length - 1)
               })
            }
            let u = l();
            return {
               next: t => (o.value = u(t), o.done = t >= r, o),
               flipTarget: () => {
                  a.reverse(), u = l()
               }
            }
         }
         let bn = {
            keyframes: xn,
            spring: Se,
            decay: function ({
               velocity: t = 0,
               from: e = 0,
               power: n = .8,
               timeConstant: i = 350,
               restDelta: r = .5,
               modifyTarget: o
            }) {
               let a = {
                     done: !1,
                     value: e
                  },
                  s = n * t,
                  l = e + s,
                  u = void 0 === o ? l : o(l);
               return u !== l && (s = u - e), {
                  next: t => {
                     let e = -s * Math.exp(-t / i);
                     return a.done = !(e > r || e < -r), a.value = a.done ? u : u + e, a
                  },
                  flipTarget: () => {}
               }
            }
         };
         var wn = n(88285);

         function Sn(t, e, n = 0) {
            return t - e - n
         }
         let En = t => {
            let e = ({
               delta: e
            }) => t(e);
            return {
               start: () => wn.ZP.update(e, !0),
               stop: () => wn.qY.update(e)
            }
         };

         function Pn(t) {
            let e, n, i;
            var r, {
                  from: o,
                  autoplay: a = !0,
                  driver: s = En,
                  elapsed: l = 0,
                  repeat: u = 0,
                  repeatType: h = "loop",
                  repeatDelay: d = 0,
                  onPlay: c,
                  onStop: p,
                  onComplete: m,
                  onRepeat: f,
                  onUpdate: v
               } = t,
               g = me(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
            let {
               to: y
            } = g, x = 0, b = g.duration, w = !1, S = !0, E = function (t) {
               if (Array.isArray(t.to)) return xn;
               if (bn[t.type]) return bn[t.type];
               let e = new Set(Object.keys(t));
               if (e.has("ease") || e.has("duration") && !e.has("dampingRatio"));
               else if (e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta")) return Se;
               return xn
            }(g);
            (null === (r = E.needsInterpolation) || void 0 === r ? void 0 : r.call(E, o, y)) && (i = en([0, 100], [o, y], {
               clamp: !1
            }), o = 0, y = 100);
            let P = E(Object.assign(Object.assign({}, g), {
               from: o,
               to: y
            }));
            return a && (null == c || c(), (e = s((function (t) {
               if (S || (t = -t), l += t, !w) {
                  let t = P.next(Math.max(0, l));
                  n = t.value, i && (n = i(n)), w = S ? t.done : l <= 0
               }
               var r;
               (null == v || v(n), w) && (0 === x && (null != b || (b = l)), x < u ? (r = l, (S ? r >= b + d : r <= -d) && (x++, "reverse" === h ? l = function (t, e, n = 0, i = !0) {
                  return i ? Sn(e + -t, e, n) : e - (t - e) + n
               }(l, b, d, S = x % 2 == 0) : (l = Sn(l, b, d), "mirror" === h && P.flipTarget()), w = !1, f && f())) : (e.stop(), m && m()))
            }))).start()), {
               stop: () => {
                  null == p || p(), e.stop()
               }
            }
         }
         let Vn = t => 1e3 * t,
            Tn = (t, e) => 1 - 3 * e + 3 * t,
            An = (t, e) => 3 * e - 6 * t,
            Cn = t => 3 * t,
            Mn = (t, e, n) => ((Tn(e, n) * t + An(e, n)) * t + Cn(e)) * t,
            Rn = (t, e, n) => 3 * Tn(e, n) * t * t + 2 * An(e, n) * t + Cn(e),
            Ln = {
               linear: an,
               easeIn: sn,
               easeInOut: un,
               easeOut: ln,
               circIn: hn,
               circInOut: cn,
               circOut: dn,
               backIn: pn,
               backInOut: fn,
               backOut: mn,
               anticipate: vn,
               bounceIn: yn,
               bounceInOut: t => t < .5 ? .5 * (1 - gn(1 - 2 * t)) : .5 * gn(2 * t - 1) + .5,
               bounceOut: gn
            },
            kn = t => {
               if (Array.isArray(t)) {
                  ve(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                  let [e, n, i, r] = t;
                  return function (t, e, n, i) {
                     if (t === e && n === i) return an;
                     let r = new Float32Array(11);
                     for (let e = 0; e < 11; ++e) r[e] = Mn(.1 * e, t, n);
                     return o => 0 === o || 1 === o ? o : Mn(function (e) {
                        let i = 0,
                           o = 1;
                        for (; 10 !== o && r[o] <= e; ++o) i += .1;
                        --o;
                        let a = i + .1 * ((e - r[o]) / (r[o + 1] - r[o])),
                           s = Rn(a, t, n);
                        return s >= .001 ? function (t, e, n, i) {
                           for (let r = 0; r < 8; ++r) {
                              let r = Rn(e, n, i);
                              if (0 === r) break;
                              e -= (Mn(e, n, i) - t) / r
                           }
                           return e
                        }(e, a, t, n) : 0 === s ? a : function (t, e, n, i, r) {
                           let o, a, s = 0;
                           do {
                              (o = Mn(a = e + (n - e) / 2, i, r) - t) > 0 ? n = a : e = a
                           } while (Math.abs(o) > 1e-7 && ++s < 10);
                           return a
                        }(e, i, i + .1, t, n)
                     }(o), e, i)
                  }(e, n, i, r)
               }
               return "string" == typeof t ? (ve(void 0 !== Ln[t], `Invalid easing type '${t}'`), Ln[t]) : t
            },
            On = t => Array.isArray(t) && "number" != typeof t[0],
            Bn = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && Ze.test(e) && !e.startsWith("url(")),
            Dn = () => ({
               type: "spring",
               stiffness: 500,
               damping: 25,
               restSpeed: 10
            }),
            jn = t => ({
               type: "spring",
               stiffness: 550,
               damping: 0 === t ? 2 * Math.sqrt(550) : 30,
               restSpeed: 10
            }),
            Fn = () => ({
               type: "keyframes",
               ease: "linear",
               duration: .3
            }),
            In = t => ({
               type: "keyframes",
               duration: .8,
               values: t
            }),
            Un = {
               x: Dn,
               y: Dn,
               z: Dn,
               rotate: Dn,
               rotateX: Dn,
               rotateY: Dn,
               rotateZ: Dn,
               scaleX: jn,
               scaleY: jn,
               scale: jn,
               opacity: Fn,
               backgroundColor: Fn,
               color: Fn,
               default: jn
            },
            Nn = (t, e) => ({
               to: e,
               ...(Et(e) ? In : Un[t] || Un.default)(e)
            }),
            $n = new Set(["brightness", "contrast", "saturate", "opacity"]);

         function zn(t) {
            let [e, n] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e) return t;
            let [i] = n.match(Y) || [];
            if (!i) return t;
            let r = n.replace(i, ""),
               o = $n.has(e) ? 1 : 0;
            return i !== n && (o *= 100), e + "(" + o + r + ")"
         }
         let Yn = /([a-z-]*)\(.*?\)/g,
            Hn = Object.assign(Object.assign({}, Ze), {
               getAnimatableNone: t => {
                  let e = t.match(Yn);
                  return e ? e.map(zn).join(" ") : t
               }
            }),
            Wn = {
               ...rt,
               color: Ne,
               backgroundColor: Ne,
               outlineColor: Ne,
               fill: Ne,
               stroke: Ne,
               borderColor: Ne,
               borderTopColor: Ne,
               borderRightColor: Ne,
               borderBottomColor: Ne,
               borderLeftColor: Ne,
               filter: Hn,
               WebkitFilter: Hn
            },
            Xn = t => Wn[t];

         function Zn(t, e) {
            var n;
            let i = Xn(t);
            return i !== Hn && (i = Ze), null === (n = i.getAnimatableNone) || void 0 === n ? void 0 : n.call(i, e)
         }
         let qn = {
            current: !1
         };

         function Gn(t, e) {
            let n = performance.now(),
               i = ({
                  timestamp: r
               }) => {
                  let o = r - n;
                  o >= e && (wn.qY.read(i), t(o - e))
               };
            return wn.ZP.read(i, !0), () => wn.qY.read(i)
         }
         let Kn = !1;

         function _n(t) {
            return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
         }

         function Jn(t) {
            return "number" == typeof t ? 0 : Zn("", t)
         }

         function Qn(t, e) {
            return t[e] || t.default || t
         }

         function ti(t, e, n, i = {}) {
            return qn.current && (i = {
               type: !1
            }), e.start((r => {
               let o, a, s = function (t, e, n, i, r) {
                     let o = Qn(i, t) || {},
                        a = void 0 !== o.from ? o.from : e.get(),
                        s = Bn(t, n);
                     "none" === a && s && "string" == typeof n ? a = Zn(t, n) : _n(a) && "string" == typeof n ? a = Jn(n) : !Array.isArray(n) && _n(n) && "string" == typeof a && (n = Jn(a));
                     let l = Bn(t, a);
                     return fe(l === s, `You are trying to animate ${t} from "${a}" to "${n}". ${a} is not an animatable value - to enable this animation set ${a} to a value animatable to ${n} via the \`style\` property.`), l && s && !1 !== o.type ? function () {
                        var i, s;
                        let l = {
                           from: a,
                           to: n,
                           velocity: e.getVelocity(),
                           onComplete: r,
                           onUpdate: t => e.set(t)
                        };
                        return "inertia" === o.type || "decay" === o.type ? function ({
                           from: t = 0,
                           velocity: e = 0,
                           min: n,
                           max: i,
                           power: r = .8,
                           timeConstant: o = 750,
                           bounceStiffness: a = 500,
                           bounceDamping: s = 10,
                           restDelta: l = 1,
                           modifyTarget: u,
                           driver: h,
                           onUpdate: d,
                           onComplete: c,
                           onStop: p
                        }) {
                           let m;

                           function f(t) {
                              return void 0 !== n && t < n || void 0 !== i && t > i
                           }

                           function v(t) {
                              return void 0 === n ? i : void 0 === i || Math.abs(n - t) < Math.abs(i - t) ? n : i
                           }

                           function g(t) {
                              null == m || m.stop(), m = Pn(Object.assign(Object.assign({}, t), {
                                 driver: h,
                                 onUpdate: e => {
                                    var n;
                                    null == d || d(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                 },
                                 onComplete: c,
                                 onStop: p
                              }))
                           }

                           function y(t) {
                              g(Object.assign({
                                 type: "spring",
                                 stiffness: a,
                                 damping: s,
                                 restDelta: l
                              }, t))
                           }
                           if (f(t)) y({
                              from: t,
                              velocity: e,
                              to: v(t)
                           });
                           else {
                              let i, a, s = r * e + t;
                              void 0 !== u && (s = u(s));
                              let h = v(s),
                                 d = h === n ? -1 : 1,
                                 c = t => {
                                    var n;
                                    i = a, a = t, e = (n = (0, wn.$B)().delta) ? 1e3 / n * (t - i) : 0, (1 === d && t > h || -1 === d && t < h) && y({
                                       from: t,
                                       to: h,
                                       velocity: e
                                    })
                                 };
                              g({
                                 type: "decay",
                                 from: t,
                                 velocity: e,
                                 timeConstant: o,
                                 power: r,
                                 restDelta: l,
                                 modifyTarget: u,
                                 onUpdate: f(s) ? c : void 0
                              })
                           }
                           return {
                              stop: () => null == m ? void 0 : m.stop()
                           }
                        }({
                           ...l,
                           ...o
                        }) : Pn({
                           ...(i = o, Array.isArray(l.to) && void 0 === i.duration && (i.duration = .8), Array.isArray((s = l).to) && null === s.to[0] && (s.to = [...s.to], s.to[0] = s.from), ! function ({
                              when: t,
                              delay: e,
                              delayChildren: n,
                              staggerChildren: i,
                              staggerDirection: r,
                              repeat: o,
                              repeatType: a,
                              repeatDelay: s,
                              from: l,
                              ...u
                           }) {
                              return !!Object.keys(u).length
                           }(i) && (i = {
                              ...i,
                              ...Nn(t, l.to)
                           }), {
                              ...l,
                              ... function ({
                                 ease: t,
                                 times: e,
                                 yoyo: n,
                                 flip: i,
                                 loop: r,
                                 ...o
                              }) {
                                 let a = {
                                    ...o
                                 };
                                 return e && (a.offset = e), o.duration && (a.duration = Vn(o.duration)), o.repeatDelay && (a.repeatDelay = Vn(o.repeatDelay)), t && (a.ease = On(t) ? t.map(kn) : kn(t)), "tween" === o.type && (a.type = "keyframes"), (n || r || i) && (fe(!Kn, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), Kn = !0, n ? a.repeatType = "reverse" : r ? a.repeatType = "loop" : i && (a.repeatType = "mirror"), a.repeat = r || n || i || o.repeat), "spring" !== o.type && (a.type = "keyframes"), a
                              }(i)
                           }),
                           onUpdate: t => {
                              l.onUpdate(t), o.onUpdate && o.onUpdate(t)
                           },
                           onComplete: () => {
                              l.onComplete(), o.onComplete && o.onComplete()
                           }
                        })
                     } : function () {
                        let t = Vt(n);
                        return e.set(t), r(), o.onUpdate && o.onUpdate(t), o.onComplete && o.onComplete(), {
                           stop: () => {}
                        }
                     }
                  }(t, e, n, i, r),
                  l = function (t, e) {
                     var n, i;
                     return null !== (i = null !== (n = (Qn(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== i ? i : 0
                  }(i, t),
                  u = () => o = s();
               return l ? a = Gn(u, Vn(l)) : u(), () => {
                  a && a(), o && o.stop()
               }
            }))
         }
         let ei = t => /^\-?\d*\.?\d+$/.test(t),
            ni = t => /^0[^.\s]+$/.test(t);

         function ii(t, e) {
            -1 === t.indexOf(e) && t.push(e)
         }

         function ri(t, e) {
            let n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
         }
         class oi {
            constructor() {
               this.subscriptions = []
            }
            add(t) {
               return ii(this.subscriptions, t), () => ri(this.subscriptions, t)
            }
            notify(t, e, n) {
               let i = this.subscriptions.length;
               if (i)
                  if (1 === i) this.subscriptions[0](t, e, n);
                  else
                     for (let r = 0; r < i; r++) {
                        let i = this.subscriptions[r];
                        i && i(t, e, n)
                     }
            }
            getSize() {
               return this.subscriptions.length
            }
            clear() {
               this.subscriptions.length = 0
            }
         }
         class ai {
            constructor(t) {
               this.version = "7.6.7", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new oi, this.velocityUpdateSubscribers = new oi, this.renderSubscribers = new oi, this.canTrackVelocity = !1, this.updateAndNotify = (t, e = !0) => {
                  this.prev = this.current, this.current = t;
                  let {
                     delta: n,
                     timestamp: i
                  } = (0, wn.$B)();
                  this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, wn.ZP.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.updateSubscribers.notify(this.current), this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()), e && this.renderSubscribers.notify(this.current)
               }, this.scheduleVelocityCheck = () => wn.ZP.postRender(this.velocityCheck), this.velocityCheck = ({
                  timestamp: t
               }) => {
                  t !== this.lastUpdated && (this.prev = this.current, this.velocityUpdateSubscribers.notify(this.getVelocity()))
               }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (t => !isNaN(parseFloat(t)))(this.current)
            }
            onChange(t) {
               return this.updateSubscribers.add(t)
            }
            clearListeners() {
               this.updateSubscribers.clear()
            }
            onRenderRequest(t) {
               return t(this.get()), this.renderSubscribers.add(t)
            }
            attach(t) {
               this.passiveEffect = t
            }
            set(t, e = !0) {
               e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            get() {
               return this.current
            }
            getPrevious() {
               return this.prev
            }
            getVelocity() {
               var t, e;
               return this.canTrackVelocity ? (t = parseFloat(this.current) - parseFloat(this.prev), (e = this.timeDelta) ? t * (1e3 / e) : 0) : 0
            }
            start(t) {
               return this.stop(), new Promise((e => {
                  this.hasAnimated = !0, this.stopAnimation = t(e)
               })).then((() => this.clearAnimation()))
            }
            stop() {
               this.stopAnimation && this.stopAnimation(), this.clearAnimation()
            }
            isAnimating() {
               return !!this.stopAnimation
            }
            clearAnimation() {
               this.stopAnimation = null
            }
            destroy() {
               this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
            }
         }

         function si(t) {
            return new ai(t)
         }
         let li = t => e => e.test(t),
            ui = [tt, K, G, q, J, _, {
               test: t => "auto" === t,
               parse: t => t
            }],
            hi = t => ui.find(li(t)),
            di = [...ui, Ne, Ze],
            ci = t => di.find(li(t));

         function pi(t, e, n) {
            let i = t.getProps();
            return St(i, e, void 0 !== n ? n : i.custom, function (t) {
               let e = {};
               return t.values.forEach(((t, n) => e[n] = t.get())), e
            }(t), function (t) {
               let e = {};
               return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
            }(t))
         }

         function mi(t) {
            return Boolean(j(t) && t.add)
         }

         function fi(t, e, n = {}) {
            var i;
            let r = pi(t, e, n.custom),
               {
                  transition: o = t.getDefaultTransition() || {}
               } = r || {};
            n.transitionOverride && (o = n.transitionOverride);
            let a = r ? () => vi(t, r, n) : () => Promise.resolve(),
               s = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
                  let {
                     delayChildren: r = 0,
                     staggerChildren: a,
                     staggerDirection: s
                  } = o;
                  return function (t, e, n = 0, i = 0, r = 1, o) {
                     let a = [],
                        s = (t.variantChildren.size - 1) * i,
                        l = 1 === r ? (t = 0) => t * i : (t = 0) => s - t * i;
                     return Array.from(t.variantChildren).sort(gi).forEach(((t, i) => {
                        a.push(fi(t, e, {
                           ...o,
                           delay: n + l(i)
                        }).then((() => t.notify("AnimationComplete", e))))
                     })), Promise.all(a)
                  }(t, e, r + i, a, s, n)
               } : () => Promise.resolve(),
               {
                  when: l
               } = o;
            if (!l) return Promise.all([a(), s(n.delay)]); {
               let [t, e] = "beforeChildren" === l ? [a, s] : [s, a];
               return t().then(e)
            }
         }

         function vi(t, e, {
            delay: n = 0,
            transitionOverride: i,
            type: r
         } = {}) {
            var o;
            let {
               transition: a = t.getDefaultTransition(),
               transitionEnd: s,
               ...l
            } = t.makeTargetAnimatable(e), u = t.getValue("willChange");
            i && (a = i);
            let h = [],
               d = r && (null === (o = t.animationState) || void 0 === o ? void 0 : o.getState()[r]);
            for (let e in l) {
               let i = t.getValue(e),
                  r = l[e];
               if (!i || void 0 === r || d && function ({
                     protectedKeys: t,
                     needsAnimating: e
                  }, n) {
                     let i = t.hasOwnProperty(n) && !0 !== e[n];
                     return e[n] = !1, i
                  }(d, e)) continue;
               let o = {
                  delay: n,
                  ...a
               };
               t.shouldReduceMotion && B.has(e) && (o = {
                  ...o,
                  type: !1,
                  delay: 0
               });
               let s = ti(e, i, r, o);
               mi(u) && (u.add(e), s = s.then((() => u.remove(e)))), h.push(s)
            }
            return Promise.all(h).then((() => {
               s && function (t, e) {
                  let n = pi(t, e),
                     {
                        transitionEnd: i = {},
                        transition: r = {},
                        ...o
                     } = n ? t.makeTargetAnimatable(n, !1) : {};
                  for (let e in o = {
                        ...o,
                        ...i
                     }) {
                     var a;
                     let n = Vt(o[e]);
                     a = e, t.hasValue(a) ? t.getValue(a).set(n) : t.addValue(a, si(n))
                  }
               }(t, s)
            }))
         }

         function gi(t, e) {
            return t.sortNodePosition(e)
         }
         let yi = [o.Animate, o.InView, o.Focus, o.Hover, o.Tap, o.Drag, o.Exit],
            xi = [...yi].reverse(),
            bi = yi.length;

         function wi(t = !1) {
            return {
               isActive: t,
               protectedKeys: {},
               needsAnimating: {},
               prevResolvedValues: {}
            }
         }
         let Si = {
               animation: he((({
                  visualElement: t,
                  animate: e
               }) => {
                  t.animationState || (t.animationState = function (t) {
                     let e = e => Promise.all(e.map((({
                           animation: e,
                           options: n
                        }) => function (t, e, n = {}) {
                           let i;
                           if (t.notify("AnimationStart", e), Array.isArray(e)) {
                              let r = e.map((e => fi(t, e, n)));
                              i = Promise.all(r)
                           } else if ("string" == typeof e) i = fi(t, e, n);
                           else {
                              let r = "function" == typeof e ? pi(t, e, n.custom) : e;
                              i = vi(t, r, n)
                           }
                           return i.then((() => t.notify("AnimationComplete", e)))
                        }(t, e, n)))),
                        n = {
                           [o.Animate]: wi(!0),
                           [o.InView]: wi(),
                           [o.Hover]: wi(),
                           [o.Tap]: wi(),
                           [o.Drag]: wi(),
                           [o.Focus]: wi(),
                           [o.Exit]: wi()
                        },
                        i = !0,
                        r = (e, n) => {
                           let i = pi(t, n);
                           if (i) {
                              let {
                                 transition: t,
                                 transitionEnd: n,
                                 ...r
                              } = i;
                              e = {
                                 ...e,
                                 ...r,
                                 ...n
                              }
                           }
                           return e
                        };

                     function a(o, a) {
                        var s, l;
                        let u = t.getProps(),
                           h = t.getVariantContext(!0) || {},
                           d = [],
                           c = new Set,
                           p = {},
                           v = 1 / 0;
                        for (let e = 0; e < bi; e++) {
                           let g = xi[e],
                              y = n[g],
                              x = null !== (s = u[g]) && void 0 !== s ? s : h[g],
                              b = m(x),
                              w = g === a ? y.isActive : null;
                           !1 === w && (v = e);
                           let S = x === h[g] && x !== u[g] && b;
                           if (S && i && t.manuallyAnimateOnMount && (S = !1), y.protectedKeys = {
                                 ...p
                              }, !y.isActive && null === w || !x && !y.prevProp || f(x) || "boolean" == typeof x) continue;
                           let E = (l = y.prevProp, "string" == typeof x ? x !== l : !!Array.isArray(x) && !pe(x, l)),
                              P = E || g === a && y.isActive && !S && b || e > v && b,
                              V = Array.isArray(x) ? x : [x],
                              T = V.reduce(r, {});
                           !1 === w && (T = {});
                           let {
                              prevResolvedValues: A = {}
                           } = y, C = {
                              ...A,
                              ...T
                           }, M = t => {
                              P = !0, c.delete(t), y.needsAnimating[t] = !0
                           };
                           for (let t in C) {
                              let e = T[t],
                                 n = A[t];
                              p.hasOwnProperty(t) || (e !== n ? Et(e) && Et(n) ? !pe(e, n) || E ? M(t) : y.protectedKeys[t] = !0 : void 0 !== e ? M(t) : c.add(t) : void 0 !== e && c.has(t) ? M(t) : y.protectedKeys[t] = !0)
                           }
                           y.prevProp = x, y.prevResolvedValues = T, y.isActive && (p = {
                              ...p,
                              ...T
                           }), i && t.blockInitialAnimation && (P = !1), P && !S && d.push(...V.map((t => ({
                              animation: t,
                              options: {
                                 type: g,
                                 ...o
                              }
                           }))))
                        }
                        if (c.size) {
                           let e = {};
                           c.forEach((n => {
                              let i = t.getBaseTarget(n);
                              void 0 !== i && (e[n] = i)
                           })), d.push({
                              animation: e
                           })
                        }
                        let g = Boolean(d.length);
                        return i && !1 === u.initial && !t.manuallyAnimateOnMount && (g = !1), i = !1, g ? e(d) : Promise.resolve()
                     }
                     return {
                        animateChanges: a,
                        setActive: function (e, i, r) {
                           var o;
                           if (n[e].isActive === i) return Promise.resolve();
                           null === (o = t.variantChildren) || void 0 === o || o.forEach((t => {
                              var n;
                              return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
                           })), n[e].isActive = i;
                           let s = a(r, e);
                           for (let t in n) n[t].protectedKeys = {};
                           return s
                        },
                        setAnimateFunction: function (n) {
                           e = n(t)
                        },
                        getState: () => n
                     }
                  }(t)), f(e) && (0, s.useEffect)((() => e.subscribe(t)), [e])
               })),
               exit: he((t => {
                  let {
                     custom: e,
                     visualElement: n
                  } = t, [i, r] = ce(), a = (0, s.useContext)(h.O);
                  (0, s.useEffect)((() => {
                     n.isPresent = i;
                     let t = n.animationState && n.animationState.setActive(o.Exit, !i, {
                        custom: a && a.custom || e
                     });
                     t && !i && t.then(r)
                  }), [i])
               }))
            },
            Ei = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
            Pi = t => Ei(t) && t.hasOwnProperty("z"),
            Vi = (t, e) => Math.abs(t - e);

         function Ti(t, e) {
            if (qe(t) && qe(e)) return Vi(t, e);
            if (Ei(t) && Ei(e)) {
               let n = Vi(t.x, e.x),
                  i = Vi(t.y, e.y),
                  r = Pi(t) && Pi(e) ? Vi(t.z, e.z) : 0;
               return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2) + Math.pow(r, 2))
            }
         }
         class Ai {
            constructor(t, e, {
               transformPagePoint: n
            } = {}) {
               if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                     if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                     let t = Ri(this.lastMoveEventInfo, this.history),
                        e = null !== this.startEvent,
                        n = Ti(t.offset, {
                           x: 0,
                           y: 0
                        }) >= 3;
                     if (!e && !n) return;
                     let {
                        point: i
                     } = t, {
                        timestamp: r
                     } = (0, wn.$B)();
                     this.history.push({
                        ...i,
                        timestamp: r
                     });
                     let {
                        onStart: o,
                        onMove: a
                     } = this.handlers;
                     e || (o && o(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
                  }, this.handlePointerMove = (t, e) => {
                     this.lastMoveEvent = t, this.lastMoveEventInfo = Ci(e, this.transformPagePoint), kt(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : wn.ZP.update(this.updatePoint, !0)
                  }, this.handlePointerUp = (t, e) => {
                     this.end();
                     let {
                        onEnd: n,
                        onSessionEnd: i
                     } = this.handlers, r = Ri(Ci(e, this.transformPagePoint), this.history);
                     this.startEvent && n && n(t, r), i && i(t, r)
                  }, Ot(t) && t.touches.length > 1) return;
               this.handlers = e, this.transformPagePoint = n;
               let i = Ci(Dt(t), this.transformPagePoint),
                  {
                     point: r
                  } = i,
                  {
                     timestamp: o
                  } = (0, wn.$B)();
               this.history = [{
                  ...r,
                  timestamp: o
               }];
               let {
                  onSessionStart: a
               } = e;
               a && a(t, Ri(i, this.history)), this.removeListeners = te(Yt(window, "pointermove", this.handlePointerMove), Yt(window, "pointerup", this.handlePointerUp), Yt(window, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
               this.handlers = t
            }
            end() {
               this.removeListeners && this.removeListeners(), wn.qY.update(this.updatePoint)
            }
         }

         function Ci(t, e) {
            return e ? {
               point: e(t.point)
            } : t
         }

         function Mi(t, e) {
            return {
               x: t.x - e.x,
               y: t.y - e.y
            }
         }

         function Ri({
            point: t
         }, e) {
            return {
               point: t,
               delta: Mi(t, Li(e)),
               offset: Mi(t, e[0]),
               velocity: function (t, e) {
                  if (t.length < 2) return {
                     x: 0,
                     y: 0
                  };
                  let n = t.length - 1,
                     i = null,
                     r = Li(t);
                  for (; n >= 0 && (i = t[n], !(r.timestamp - i.timestamp > Vn(.1)));) n--;
                  if (!i) return {
                     x: 0,
                     y: 0
                  };
                  let o = (r.timestamp - i.timestamp) / 1e3;
                  if (0 === o) return {
                     x: 0,
                     y: 0
                  };
                  let a = {
                     x: (r.x - i.x) / o,
                     y: (r.y - i.y) / o
                  };
                  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
               }(e)
            }
         }

         function Li(t) {
            return t[t.length - 1]
         }

         function ki(t) {
            return t.max - t.min
         }

         function Oi(t, e = 0, n = .01) {
            return Ti(t, e) < n
         }

         function Bi(t, e, n, i = .5) {
            t.origin = i, t.originPoint = Ve(e.min, e.max, t.origin), t.scale = ki(n) / ki(e), (Oi(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = Ve(n.min, n.max, t.origin) - t.originPoint, (Oi(t.translate) || isNaN(t.translate)) && (t.translate = 0)
         }

         function Di(t, e, n, i) {
            Bi(t.x, e.x, n.x, null == i ? void 0 : i.originX), Bi(t.y, e.y, n.y, null == i ? void 0 : i.originY)
         }

         function ji(t, e, n) {
            t.min = n.min + e.min, t.max = t.min + ki(e)
         }

         function Fi(t, e, n) {
            t.min = e.min - n.min, t.max = t.min + ki(e)
         }

         function Ii(t, e, n) {
            Fi(t.x, e.x, n.x), Fi(t.y, e.y, n.y)
         }

         function Ui(t, e, n) {
            return {
               min: void 0 !== e ? t.min + e : void 0,
               max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
            }
         }

         function Ni(t, e) {
            let n = e.min - t.min,
               i = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
               min: n,
               max: i
            }
         }

         function $i(t, e, n) {
            return {
               min: zi(t, e),
               max: zi(t, n)
            }
         }

         function zi(t, e) {
            var n;
            return "number" == typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
         }
         let Yi = () => ({
               x: {
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
               },
               y: {
                  translate: 0,
                  scale: 1,
                  origin: 0,
                  originPoint: 0
               }
            }),
            Hi = () => ({
               x: {
                  min: 0,
                  max: 0
               },
               y: {
                  min: 0,
                  max: 0
               }
            });

         function Wi(t) {
            return [t("x"), t("y")]
         }

         function Xi({
            top: t,
            left: e,
            right: n,
            bottom: i
         }) {
            return {
               x: {
                  min: e,
                  max: n
               },
               y: {
                  min: t,
                  max: i
               }
            }
         }

         function Zi(t) {
            return void 0 === t || 1 === t
         }

         function qi({
            scale: t,
            scaleX: e,
            scaleY: n
         }) {
            return !Zi(t) || !Zi(e) || !Zi(n)
         }

         function Gi(t) {
            return qi(t) || Ki(t) || t.z || t.rotate || t.rotateX || t.rotateY
         }

         function Ki(t) {
            var e, n;
            return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
         }

         function _i(t, e, n, i, r) {
            return void 0 !== r && (t = i + r * (t - i)), i + n * (t - i) + e
         }

         function Ji(t, e = 0, n = 1, i, r) {
            t.min = _i(t.min, e, n, i, r), t.max = _i(t.max, e, n, i, r)
         }

         function Qi(t, {
            x: e,
            y: n
         }) {
            Ji(t.x, e.translate, e.scale, e.originPoint), Ji(t.y, n.translate, n.scale, n.originPoint)
         }

         function tr(t, e) {
            t.min = t.min + e, t.max = t.max + e
         }

         function er(t, e, [n, i, r]) {
            let o = void 0 !== e[r] ? e[r] : .5,
               a = Ve(t.min, t.max, o);
            Ji(t, e[n], e[i], a, e.scale)
         }
         let nr = ["x", "scaleX", "originX"],
            ir = ["y", "scaleY", "originY"];

         function rr(t, e) {
            er(t.x, e, nr), er(t.y, e, ir)
         }

         function or(t, e) {
            return Xi(function (t, e) {
               if (!e) return t;
               let n = e({
                     x: t.left,
                     y: t.top
                  }),
                  i = e({
                     x: t.right,
                     y: t.bottom
                  });
               return {
                  top: n.y,
                  left: n.x,
                  bottom: i.y,
                  right: i.x
               }
            }(t.getBoundingClientRect(), e))
         }
         let ar = new WeakMap;
         class sr {
            constructor(t) {
               this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                  x: 0,
                  y: 0
               }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Hi(), this.visualElement = t
            }
            start(t, {
               snapToCursor: e = !1
            } = {}) {
               if (!1 === this.visualElement.isPresent) return;
               this.panSession = new Ai(t, {
                  onSessionStart: t => {
                     this.stopAnimation(), e && this.snapToCursor(Dt(t, "page").point)
                  },
                  onStart: (t, e) => {
                     var n;
                     let {
                        drag: i,
                        dragPropagation: r,
                        onDragStart: a
                     } = this.getProps();
                     (!i || r || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = qt(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Wi((t => {
                        var e, n;
                        let i = this.getAxisMotionValue(t).get() || 0;
                        if (G.test(i)) {
                           let r = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                           if (r) {
                              i = ki(r) * (parseFloat(i) / 100)
                           }
                        }
                        this.originPoint[t] = i
                     })), null == a || a(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(o.Drag, !0))
                  },
                  onMove: (t, e) => {
                     let {
                        dragPropagation: n,
                        dragDirectionLock: i,
                        onDirectionLock: r,
                        onDrag: o
                     } = this.getProps();
                     if (!n && !this.openGlobalLock) return;
                     let {
                        offset: a
                     } = e;
                     if (i && null === this.currentDirection) return this.currentDirection = function (t, e = 10) {
                        let n = null;
                        return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
                     }(a), void(null !== this.currentDirection && (null == r || r(this.currentDirection)));
                     this.updateAxis("x", e.point, a), this.updateAxis("y", e.point, a), this.visualElement.render(), null == o || o(t, e)
                  },
                  onSessionEnd: (t, e) => this.stop(t, e)
               }, {
                  transformPagePoint: this.visualElement.getTransformPagePoint()
               })
            }
            stop(t, e) {
               let n = this.isDragging;
               if (this.cancel(), !n) return;
               let {
                  velocity: i
               } = e;
               this.startAnimation(i);
               let {
                  onDragEnd: r
               } = this.getProps();
               null == r || r(t, e)
            }
            cancel() {
               var t, e;
               this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
               let {
                  dragPropagation: n
               } = this.getProps();
               !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(o.Drag, !1)
            }
            updateAxis(t, e, n) {
               let {
                  drag: i
               } = this.getProps();
               if (!n || !lr(t, i, this.currentDirection)) return;
               let r = this.getAxisMotionValue(t),
                  o = this.originPoint[t] + n[t];
               this.constraints && this.constraints[t] && (o = function (t, {
                  min: e,
                  max: n
               }, i) {
                  return void 0 !== e && t < e ? t = i ? Ve(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? Ve(n, t, i.max) : Math.min(t, n)), t
               }(o, this.constraints[t], this.elastic[t])), r.set(o)
            }
            resolveConstraints() {
               let {
                  dragConstraints: t,
                  dragElastic: e
               } = this.getProps(), {
                  layout: n
               } = this.visualElement.projection || {}, i = this.constraints;
               t && p(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function (t, {
                  top: e,
                  left: n,
                  bottom: i,
                  right: r
               }) {
                  return {
                     x: Ui(t.x, n, r),
                     y: Ui(t.y, e, i)
                  }
               }(n.layoutBox, t), this.elastic = function (t = .35) {
                  return !1 === t ? t = 0 : !0 === t && (t = .35), {
                     x: $i(t, "left", "right"),
                     y: $i(t, "top", "bottom")
                  }
               }(e), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Wi((t => {
                  this.getAxisMotionValue(t) && (this.constraints[t] = function (t, e) {
                     let n = {};
                     return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                  }(n.layoutBox[t], this.constraints[t]))
               }))
            }
            resolveRefConstraints() {
               var t;
               let {
                  dragConstraints: e,
                  onMeasureDragConstraints: n
               } = this.getProps();
               if (!e || !p(e)) return !1;
               let i = e.current;
               ve(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
               let {
                  projection: r
               } = this.visualElement;
               if (!r || !r.layout) return !1;
               let o = function (t, e, n) {
                     let i = or(t, n),
                        {
                           scroll: r
                        } = e;
                     return r && (tr(i.x, r.x), tr(i.y, r.y)), i
                  }(i, r.root, this.visualElement.getTransformPagePoint()),
                  a = {
                     x: Ni((t = r.layout.layoutBox).x, o.x),
                     y: Ni(t.y, o.y)
                  };
               if (n) {
                  let t = n(function ({
                     x: t,
                     y: e
                  }) {
                     return {
                        top: e.min,
                        right: t.max,
                        bottom: e.max,
                        left: t.min
                     }
                  }(a));
                  this.hasMutatedConstraints = !!t, t && (a = Xi(t))
               }
               return a
            }
            startAnimation(t) {
               let {
                  drag: e,
                  dragMomentum: n,
                  dragElastic: i,
                  dragTransition: r,
                  dragSnapToOrigin: o,
                  onDragTransitionEnd: a
               } = this.getProps(), s = this.constraints || {}, l = Wi((a => {
                  var l;
                  if (!lr(a, e, this.currentDirection)) return;
                  let u = null !== (l = null == s ? void 0 : s[a]) && void 0 !== l ? l : {};
                  o && (u = {
                     min: 0,
                     max: 0
                  });
                  let h = {
                     type: "inertia",
                     velocity: n ? t[a] : 0,
                     bounceStiffness: i ? 200 : 1e6,
                     bounceDamping: i ? 40 : 1e7,
                     timeConstant: 750,
                     restDelta: 1,
                     restSpeed: 10,
                     ...r,
                     ...u
                  };
                  return this.startAxisValueAnimation(a, h)
               }));
               return Promise.all(l).then(a)
            }
            startAxisValueAnimation(t, e) {
               return ti(t, this.getAxisMotionValue(t), 0, e)
            }
            stopAnimation() {
               Wi((t => this.getAxisMotionValue(t).stop()))
            }
            getAxisMotionValue(t) {
               var e, n;
               let i = "_drag" + t.toUpperCase();
               return this.visualElement.getProps()[i] || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
            }
            snapToCursor(t) {
               Wi((e => {
                  let {
                     drag: n
                  } = this.getProps();
                  if (!lr(e, n, this.currentDirection)) return;
                  let {
                     projection: i
                  } = this.visualElement, r = this.getAxisMotionValue(e);
                  if (i && i.layout) {
                     let {
                        min: n,
                        max: o
                     } = i.layout.layoutBox[e];
                     r.set(t[e] - Ve(n, o, .5))
                  }
               }))
            }
            scalePositionWithinConstraints() {
               var t;
               if (!this.visualElement.current) return;
               let {
                  drag: e,
                  dragConstraints: n
               } = this.getProps(), {
                  projection: i
               } = this.visualElement;
               if (!p(n) || !i || !this.constraints) return;
               this.stopAnimation();
               let r = {
                  x: 0,
                  y: 0
               };
               Wi((t => {
                  let e = this.getAxisMotionValue(t);
                  if (e) {
                     let n = e.get();
                     r[t] = function (t, e) {
                        let n = .5,
                           i = ki(t),
                           r = ki(e);
                        return r > i ? n = Pe(e.min, e.max - i, t.min) : i > r && (n = Pe(t.min, t.max - r, e.min)), ge(0, 1, n)
                     }({
                        min: n,
                        max: n
                     }, this.constraints[t])
                  }
               }));
               let {
                  transformTemplate: o
               } = this.visualElement.getProps();
               this.visualElement.current.style.transform = o ? o({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), Wi((t => {
                  if (!lr(t, e, null)) return;
                  let n = this.getAxisMotionValue(t),
                     {
                        min: i,
                        max: o
                     } = this.constraints[t];
                  n.set(Ve(i, o, r[t]))
               }))
            }
            addListeners() {
               var t;
               if (!this.visualElement.current) return;
               ar.set(this.visualElement, this);
               let e = Yt(this.visualElement.current, "pointerdown", (t => {
                     let {
                        drag: e,
                        dragListener: n = !0
                     } = this.getProps();
                     e && n && this.start(t)
                  })),
                  n = () => {
                     let {
                        dragConstraints: t
                     } = this.getProps();
                     p(t) && (this.constraints = this.resolveRefConstraints())
                  },
                  {
                     projection: i
                  } = this.visualElement,
                  r = i.addEventListener("measure", n);
               i && !i.layout && (null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout()), n();
               let o = Rt(window, "resize", (() => this.scalePositionWithinConstraints())),
                  a = i.addEventListener("didUpdate", (({
                     delta: t,
                     hasLayoutChanged: e
                  }) => {
                     this.isDragging && e && (Wi((e => {
                        let n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                     })), this.visualElement.render())
                  }));
               return () => {
                  o(), e(), r(), null == a || a()
               }
            }
            getProps() {
               let t = this.visualElement.getProps(),
                  {
                     drag: e = !1,
                     dragDirectionLock: n = !1,
                     dragPropagation: i = !1,
                     dragConstraints: r = !1,
                     dragElastic: o = .35,
                     dragMomentum: a = !0
                  } = t;
               return {
                  ...t,
                  drag: e,
                  dragDirectionLock: n,
                  dragPropagation: i,
                  dragConstraints: r,
                  dragElastic: o,
                  dragMomentum: a
               }
            }
         }

         function lr(t, e, n) {
            return !(!0 !== e && e !== t || null !== n && n !== t)
         }
         let ur = {
            pan: he((function ({
               onPan: t,
               onPanStart: e,
               onPanEnd: n,
               onPanSessionStart: i,
               visualElement: r
            }) {
               let o = (0, s.useRef)(null),
                  {
                     transformPagePoint: a
                  } = (0, s.useContext)(l._),
                  u = {
                     onSessionStart: i,
                     onStart: e,
                     onMove: t,
                     onEnd: (t, e) => {
                        o.current = null, n && n(t, e)
                     }
                  };
               (0, s.useEffect)((() => {
                  null !== o.current && o.current.updateHandlers(u)
               })), Ht(r, "pointerdown", (t || e || n || i) && function (t) {
                  o.current = new Ai(t, u, {
                     transformPagePoint: a
                  })
               }), (0, Jt.z)((() => o.current && o.current.end()))
            })),
            drag: he((function (t) {
               let {
                  dragControls: e,
                  visualElement: n
               } = t, i = (0, E.h)((() => new sr(n)));
               (0, s.useEffect)((() => e && e.subscribe(i)), [i, e]), (0, s.useEffect)((() => i.addListeners()), [i])
            }))
         };

         function hr(t) {
            return "string" == typeof t && t.startsWith("var(--")
         }
         let dr = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

         function cr(t, e, n = 1) {
            ve(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let [i, r] = function (t) {
               let e = dr.exec(t);
               if (!e) return [, ];
               let [, n, i] = e;
               return [n, i]
            }(t);
            if (!i) return;
            let o = window.getComputedStyle(e).getPropertyValue(i);
            return o ? o.trim() : hr(r) ? cr(r, e, n + 1) : r
         }
         let pr = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
            mr = t => pr.has(t),
            fr = (t, e) => {
               t.set(e, !1), t.set(e)
            },
            vr = t => t === tt || t === K;
         (r = a || (a = {})).width = "width", r.height = "height", r.left = "left", r.right = "right", r.top = "top", r.bottom = "bottom";
         let gr = (t, e) => parseFloat(t.split(", ")[e]),
            yr = (t, e) => (n, {
               transform: i
            }) => {
               if ("none" === i || !i) return 0;
               let r = i.match(/^matrix3d\((.+)\)$/);
               if (r) return gr(r[1], e); {
                  let e = i.match(/^matrix\((.+)\)$/);
                  return e ? gr(e[1], t) : 0
               }
            },
            xr = new Set(["x", "y", "z"]),
            br = O.filter((t => !xr.has(t))),
            wr = {
               width: ({
                  x: t
               }, {
                  paddingLeft: e = "0",
                  paddingRight: n = "0"
               }) => t.max - t.min - parseFloat(e) - parseFloat(n),
               height: ({
                  y: t
               }, {
                  paddingTop: e = "0",
                  paddingBottom: n = "0"
               }) => t.max - t.min - parseFloat(e) - parseFloat(n),
               top: (t, {
                  top: e
               }) => parseFloat(e),
               left: (t, {
                  left: e
               }) => parseFloat(e),
               bottom: ({
                  y: t
               }, {
                  top: e
               }) => parseFloat(e) + (t.max - t.min),
               right: ({
                  x: t
               }, {
                  left: e
               }) => parseFloat(e) + (t.max - t.min),
               x: yr(4, 13),
               y: yr(5, 14)
            },
            Sr = (t, e, n = {}, i = {}) => {
               e = {
                  ...e
               }, i = {
                  ...i
               };
               let r = Object.keys(e).filter(mr),
                  o = [],
                  a = !1,
                  s = [];
               if (r.forEach((r => {
                     let l, u = t.getValue(r);
                     if (!t.hasValue(r)) return;
                     let h = n[r],
                        d = hi(h),
                        c = e[r];
                     if (Et(c)) {
                        let t = c.length,
                           e = null === c[0] ? 1 : 0;
                        d = hi(h = c[e]);
                        for (let n = e; n < t; n++) l ? ve(hi(c[n]) === l, "All keyframes must be of the same type") : ve((l = hi(c[n])) === d || vr(d) && vr(l), "Keyframes must be of the same dimension as the current value")
                     } else l = hi(c);
                     if (d !== l)
                        if (vr(d) && vr(l)) {
                           let t = u.get();
                           "string" == typeof t && u.set(parseFloat(t)), "string" == typeof c ? e[r] = parseFloat(c) : Array.isArray(c) && l === K && (e[r] = c.map(parseFloat))
                        } else(null == d ? void 0 : d.transform) && (null == l ? void 0 : l.transform) && (0 === h || 0 === c) ? 0 === h ? u.set(l.transform(h)) : e[r] = d.transform(c) : (a || (o = function (t) {
                           let e = [];
                           return br.forEach((n => {
                              let i = t.getValue(n);
                              void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                           })), e.length && t.render(), e
                        }(t), a = !0), s.push(r), i[r] = void 0 !== i[r] ? i[r] : e[r], fr(u, c))
                  })), !s.length) return {
                  target: e,
                  transitionEnd: i
               }; {
                  let n = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                     r = ((t, e, n) => {
                        let i = e.measureViewportBox(),
                           r = e.current,
                           o = getComputedStyle(r),
                           {
                              display: a
                           } = o,
                           s = {};
                        "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                           s[t] = wr[t](i, o)
                        })), e.render();
                        let l = e.measureViewportBox();
                        return n.forEach((n => {
                           let i = e.getValue(n);
                           fr(i, s[n]), t[n] = wr[n](l, o)
                        })), t
                     })(e, t, s);
                  return o.length && o.forEach((([e, n]) => {
                     t.getValue(e).set(n)
                  })), t.render(), S.j && null !== n && window.scrollTo({
                     top: n
                  }), {
                     target: r,
                     transitionEnd: i
                  }
               }
            },
            Er = (t, e, n, i) => {
               var r, o;
               let a = function (t, {
                  ...e
               }, n) {
                  let i = t.current;
                  if (!(i instanceof Element)) return {
                     target: e,
                     transitionEnd: n
                  };
                  for (let r in n && (n = {
                        ...n
                     }), t.values.forEach((t => {
                        let e = t.get();
                        if (!hr(e)) return;
                        let n = cr(e, i);
                        n && t.set(n)
                     })), e) {
                     let t = e[r];
                     if (!hr(t)) continue;
                     let o = cr(t, i);
                     o && (e[r] = o, n && void 0 === n[r] && (n[r] = t))
                  }
                  return {
                     target: e,
                     transitionEnd: n
                  }
               }(t, e, i);
               return e = a.target, o = i = a.transitionEnd, (t => Object.keys(t).some(mr))(r = e) ? Sr(t, r, n, o) : {
                  target: r,
                  transitionEnd: o
               }
            };
         var Pr = n(53884),
            Vr = n(87709);
         let Tr = Object.keys(w),
            Ar = Tr.length,
            Cr = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
         class Mr {
            constructor({
               parent: t,
               props: e,
               reducedMotionConfig: n,
               visualState: i
            }, r = {}) {
               this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                  this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
               }, this.scheduleRender = () => wn.ZP.render(this.render, !1, !0);
               let {
                  latestValues: o,
                  renderState: a
               } = i;
               this.latestValues = o, this.baseTarget = {
                  ...o
               }, this.initialValues = e.initial ? {
                  ...o
               } : {}, this.renderState = a, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = r, this.isControllingVariants = g(e), this.isVariantNode = y(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
               let {
                  willChange: s,
                  ...l
               } = this.scrapeMotionValuesFromProps(e);
               for (let t in l) {
                  let e = l[t];
                  void 0 !== o[t] && j(e) && (e.set(o[t], !1), mi(s) && s.add(t))
               }
            }
            scrapeMotionValuesFromProps(t) {
               return {}
            }
            mount(t) {
               var e;
               this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), Vr.O.current || (0, Pr.A)(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || Vr.n.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
            }
            unmount() {
               var t, e, n;
               for (let i in null === (t = this.projection) || void 0 === t || t.unmount(), wn.qY.update(this.notifyUpdate), wn.qY.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this), this.events) this.events[i].clear();
               this.current = null
            }
            bindToMotionValue(t, e) {
               let n = e.onChange((e => {
                     this.latestValues[t] = e, this.props.onUpdate && wn.ZP.update(this.notifyUpdate, !1, !0)
                  })),
                  i = e.onRenderRequest(this.scheduleRender);
               this.valueSubscriptions.set(t, (() => {
                  n(), i()
               }))
            }
            sortNodePosition(t) {
               return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures(t, e, n, i, r, o) {
               let a = [];
               "production" !== ee.O && n && e && ve(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
               for (let e = 0; e < Ar; e++) {
                  let n = Tr[e],
                     {
                        isEnabled: i,
                        Component: r
                     } = w[n];
                  i(t) && r && a.push((0, s.createElement)(r, {
                     key: n,
                     ...t,
                     visualElement: this
                  }))
               }
               if (!this.projection && r) {
                  this.projection = new r(i, this.latestValues, this.parent && this.parent.projection);
                  let {
                     layoutId: e,
                     layout: n,
                     drag: a,
                     dragConstraints: s,
                     layoutScroll: l
                  } = t;
                  this.projection.setOptions({
                     layoutId: e,
                     layout: n,
                     alwaysMeasureLayout: Boolean(a) || s && p(s),
                     visualElement: this,
                     scheduleRender: () => this.scheduleRender(),
                     animationType: "string" == typeof n ? n : "both",
                     initialPromotionConfig: o,
                     layoutScroll: l
                  })
               }
               return a
            }
            triggerBuild() {
               this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
               return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Hi()
            }
            getStaticValue(t) {
               return this.latestValues[t]
            }
            setStaticValue(t, e) {
               this.latestValues[t] = e
            }
            makeTargetAnimatable(t, e = !0) {
               return this.makeTargetAnimatableFromInstance(t, this.props, e)
            }
            setProps(t) {
               (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
               for (let e = 0; e < Cr.length; e++) {
                  let n = Cr[e];
                  this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
                  let i = t["on" + n];
                  i && (this.propEventSubscriptions[n] = this.on(n, i))
               }
               this.prevMotionValues = function (t, e, n) {
                  let {
                     willChange: i
                  } = e;
                  for (let r in e) {
                     let o = e[r],
                        a = n[r];
                     if (j(o)) t.addValue(r, o), mi(i) && i.add(r);
                     else if (j(a)) t.addValue(r, si(o)), mi(i) && i.remove(r);
                     else if (a !== o)
                        if (t.hasValue(r)) {
                           let e = t.getValue(r);
                           e.hasAnimated || e.set(o)
                        } else {
                           let e = t.getStaticValue(r);
                           t.addValue(r, si(void 0 !== e ? e : o))
                        }
                  }
                  for (let i in n) void 0 === e[i] && t.removeValue(i);
                  return e
               }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
            }
            getProps() {
               return this.props
            }
            getVariant(t) {
               var e;
               return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
            }
            getDefaultTransition() {
               return this.props.transition
            }
            getTransformPagePoint() {
               return this.props.transformPagePoint
            }
            getClosestVariantNode() {
               var t;
               return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
            }
            getVariantContext(t = !1) {
               var e, n;
               if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
               if (!this.isControllingVariants) {
                  let t = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                  return void 0 !== this.props.initial && (t.initial = this.props.initial), t
               }
               let i = {};
               for (let t = 0; t < Lr; t++) {
                  let e = Rr[t],
                     n = this.props[e];
                  (m(n) || !1 === n) && (i[e] = n)
               }
               return i
            }
            addVariantChild(t) {
               var e;
               let n = this.getClosestVariantNode();
               if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
            }
            addValue(t, e) {
               this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.latestValues[t] = e.get(), this.bindToMotionValue(t, e)
            }
            removeValue(t) {
               var e;
               this.values.delete(t), null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
               return this.values.has(t)
            }
            getValue(t, e) {
               if (this.props.values && this.props.values[t]) return this.props.values[t];
               let n = this.values.get(t);
               return void 0 === n && void 0 !== e && (n = si(e), this.addValue(t, n)), n
            }
            readValue(t) {
               return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }
            setBaseTarget(t, e) {
               this.baseTarget[t] = e
            }
            getBaseTarget(t) {
               var e;
               let {
                  initial: n
               } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (e = St(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
               if (n && void 0 !== i) return i;
               let r = this.getBaseTargetFromProps(this.props, t);
               return void 0 === r || j(r) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : r
            }
            on(t, e) {
               return this.events[t] || (this.events[t] = new oi), this.events[t].add(e)
            }
            notify(t, ...e) {
               var n;
               null === (n = this.events[t]) || void 0 === n || n.notify(...e)
            }
         }
         let Rr = ["initial", ...yi],
            Lr = Rr.length;
         class kr extends Mr {
            sortInstanceNodePosition(t, e) {
               return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
               var n;
               return null === (n = t.style) || void 0 === n ? void 0 : n[e]
            }
            removeValueFromRenderState(t, {
               vars: e,
               style: n
            }) {
               delete e[t], delete n[t]
            }
            makeTargetAnimatableFromInstance({
               transition: t,
               transitionEnd: e,
               ...n
            }, {
               transformValues: i
            }, r) {
               let o = function (t, e, n) {
                  var i;
                  let r = {};
                  for (let o in t) {
                     let t = function (t, e) {
                        if (!e) return;
                        return (e[t] || e.default || e).from
                     }(o, e);
                     r[o] = void 0 !== t ? t : null === (i = n.getValue(o)) || void 0 === i ? void 0 : i.get()
                  }
                  return r
               }(n, t || {}, this);
               if (i && (e && (e = i(e)), n && (n = i(n)), o && (o = i(o))), r) {
                  ! function (t, e, n) {
                     var i, r;
                     let o = Object.keys(e).filter((e => !t.hasValue(e))),
                        a = o.length;
                     if (a)
                        for (let s = 0; s < a; s++) {
                           let a = o[s],
                              l = e[a],
                              u = null;
                           Array.isArray(l) && (u = l[0]), null === u && (u = null !== (r = null !== (i = n[a]) && void 0 !== i ? i : t.readValue(a)) && void 0 !== r ? r : e[a]), null != u && ("string" == typeof u && (ei(u) || ni(u)) ? u = parseFloat(u) : !ci(u) && Ze.test(l) && (u = Zn(a, l)), t.addValue(a, si(u)), void 0 === n[a] && (n[a] = u), null !== u && t.setBaseTarget(a, u))
                        }
                  }(this, n, o);
                  let t = Er(this, n, o, e);
                  e = t.transitionEnd, n = t.target
               }
               return {
                  transition: t,
                  transitionEnd: e,
                  ...n
               }
            }
         }
         class Or extends kr {
            readValueFromInstance(t, e) {
               if (B.has(e)) {
                  let t = Xn(e);
                  return t && t.default || 0
               } {
                  let n = window.getComputedStyle(t),
                     i = (U(e) ? n.getPropertyValue(e) : n[e]) || 0;
                  return "string" == typeof i ? i.trim() : i
               }
            }
            measureInstanceViewportBox(t, {
               transformPagePoint: e
            }) {
               return or(t, e)
            }
            build(t, e, n, i) {
               ot(t, e, n, i.transformTemplate)
            }
            scrapeMotionValuesFromProps(t) {
               return bt(t)
            }
            renderInstance(t, e, n, i) {
               gt(t, e, n, i)
            }
         }
         class Br extends kr {
            getBaseTargetFromProps(t, e) {
               return t[e]
            }
            readValueFromInstance(t, e) {
               var n;
               return B.has(e) ? (null === (n = Xn(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = yt.has(e) ? e : vt(e), t.getAttribute(e))
            }
            measureInstanceViewportBox() {
               return Hi()
            }
            scrapeMotionValuesFromProps(t) {
               return wt(t)
            }
            build(t, e, n, i) {
               pt(t, e, n, i.transformTemplate)
            }
            renderInstance(t, e, n, i) {
               xt(t, e, 0, i)
            }
         }
         let Dr = (t, e) => L(t) ? new Br(e, {
            enableHardwareAcceleration: !1
         }) : new Or(e, {
            enableHardwareAcceleration: !0
         });

         function jr(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
         }
         let Fr = {
               correct: (t, e) => {
                  if (!e.target) return t;
                  if ("string" == typeof t) {
                     if (!K.test(t)) return t;
                     t = parseFloat(t)
                  }
                  return `${jr(t,e.target.x)}% ${jr(t,e.target.y)}%`
               }
            },
            Ir = "_$css",
            Ur = {
               correct: (t, {
                  treeScale: e,
                  projectionDelta: n
               }) => {
                  let i = t,
                     r = t.includes("var("),
                     o = [];
                  r && (t = t.replace(dr, (t => (o.push(t), Ir))));
                  let a = Ze.parse(t);
                  if (a.length > 5) return i;
                  let s = Ze.createTransformer(t),
                     l = "number" != typeof a[0] ? 1 : 0,
                     u = n.x.scale * e.x,
                     h = n.y.scale * e.y;
                  a[0 + l] /= u, a[1 + l] /= h;
                  let d = Ve(u, h, .5);
                  "number" == typeof a[2 + l] && (a[2 + l] /= d), "number" == typeof a[3 + l] && (a[3 + l] /= d);
                  let c = s(a);
                  if (r) {
                     let t = 0;
                     c = c.replace(Ir, (() => {
                        let e = o[t];
                        return t++, e
                     }))
                  }
                  return c
               }
            };
         class Nr extends s.Component {
            componentDidMount() {
               let {
                  visualElement: t,
                  layoutGroup: e,
                  switchLayoutGroup: n,
                  layoutId: i
               } = this.props, {
                  projection: r
               } = t;
               Object.assign(k, $r), r && (e.group && e.group.add(r), n && n.register && i && n.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", (() => {
                  this.safeToRemove()
               })), r.setOptions({
                  ...r.options,
                  onExitComplete: () => this.safeToRemove()
               })), P.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
               let {
                  layoutDependency: e,
                  visualElement: n,
                  drag: i,
                  isPresent: r
               } = this.props, o = n.projection;
               return o && (o.isPresent = r, i || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(), t.isPresent === r || (r ? o.promote() : o.relegate() || wn.ZP.postRender((() => {
                  var t;
                  (null === (t = o.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
               })))), null
            }
            componentDidUpdate() {
               let {
                  projection: t
               } = this.props.visualElement;
               t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
            }
            componentWillUnmount() {
               let {
                  visualElement: t,
                  layoutGroup: e,
                  switchLayoutGroup: n
               } = this.props, {
                  projection: i
               } = t;
               i && (i.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(i), (null == n ? void 0 : n.deregister) && n.deregister(i))
            }
            safeToRemove() {
               let {
                  safeToRemove: t
               } = this.props;
               null == t || t()
            }
            render() {
               return null
            }
         }
         let $r = {
               borderRadius: {
                  ...Fr,
                  applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
               },
               borderTopLeftRadius: Fr,
               borderTopRightRadius: Fr,
               borderBottomLeftRadius: Fr,
               borderBottomRightRadius: Fr,
               boxShadow: Ur
            },
            zr = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
            Yr = zr.length,
            Hr = t => "string" == typeof t ? parseFloat(t) : t,
            Wr = t => "number" == typeof t || K.test(t);

         function Xr(t, e) {
            var n;
            return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
         }
         let Zr = Gr(0, .5, dn),
            qr = Gr(.5, .95, an);

         function Gr(t, e, n) {
            return i => i < t ? 0 : i > e ? 1 : n(Pe(t, e, i))
         }

         function Kr(t, e) {
            t.min = e.min, t.max = e.max
         }

         function _r(t, e) {
            Kr(t.x, e.x), Kr(t.y, e.y)
         }

         function Jr(t, e, n, i, r) {
            return t = i + 1 / n * ((t -= e) - i), void 0 !== r && (t = i + 1 / r * (t - i)), t
         }

         function Qr(t, e, [n, i, r], o, a) {
            ! function (t, e = 0, n = 1, i = .5, r, o = t, a = t) {
               if (G.test(e)) {
                  e = parseFloat(e), e = Ve(a.min, a.max, e / 100) - a.min
               }
               if ("number" != typeof e) return;
               let s = Ve(o.min, o.max, i);
               t === o && (s -= e), t.min = Jr(t.min, e, n, s, r), t.max = Jr(t.max, e, n, s, r)
            }(t, e[n], e[i], e[r], e.scale, o, a)
         }
         let to = ["x", "scaleX", "originX"],
            eo = ["y", "scaleY", "originY"];

         function no(t, e, n, i) {
            Qr(t.x, e, to, null == n ? void 0 : n.x, null == i ? void 0 : i.x), Qr(t.y, e, eo, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
         }

         function io(t) {
            return 0 === t.translate && 1 === t.scale
         }

         function ro(t) {
            return io(t.x) && io(t.y)
         }

         function oo(t, e) {
            return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
         }

         function ao(t) {
            return ki(t.x) / ki(t.y)
         }
         class so {
            constructor() {
               this.members = []
            }
            add(t) {
               ii(this.members, t), t.scheduleRender()
            }
            remove(t) {
               if (ri(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                  let t = this.members[this.members.length - 1];
                  t && this.promote(t)
               }
            }
            relegate(t) {
               let e, n = this.members.findIndex((e => t === e));
               if (0 === n) return !1;
               for (let t = n; t >= 0; t--) {
                  let n = this.members[t];
                  if (!1 !== n.isPresent) {
                     e = n;
                     break
                  }
               }
               return !!e && (this.promote(e), !0)
            }
            promote(t, e) {
               var n;
               let i = this.lead;
               if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                  i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
                  let {
                     crossfade: r
                  } = t.options;
                  !1 === r && i.hide()
               }
            }
            exitAnimationComplete() {
               this.members.forEach((t => {
                  var e, n, i, r, o;
                  null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (o = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (r = i.options).onExitComplete) || void 0 === o || o.call(r)
               }))
            }
            scheduleRender() {
               this.members.forEach((t => {
                  t.instance && t.scheduleRender(!1)
               }))
            }
            removeLeadSnapshot() {
               this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
         }

         function lo(t, e, n) {
            let i = `translate3d(${t.x.translate/e.x}px, ${t.y.translate/e.y}px, 0) `;
            if (i += `scale(${1/e.x}, ${1/e.y}) `, n) {
               let {
                  rotate: t,
                  rotateX: e,
                  rotateY: r
               } = n;
               t && (i += `rotate(${t}deg) `), e && (i += `rotateX(${e}deg) `), r && (i += `rotateY(${r}deg) `)
            }
            return "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" == (i += `scale(${t.x.scale*e.x}, ${t.y.scale*e.y})`) ? "none" : i
         }
         let uo = (t, e) => t.depth - e.depth;
         class ho {
            constructor() {
               this.children = [], this.isDirty = !1
            }
            add(t) {
               ii(this.children, t), this.isDirty = !0
            }
            remove(t) {
               ri(this.children, t), this.isDirty = !0
            }
            forEach(t) {
               this.isDirty && this.children.sort(uo), this.isDirty = !1, this.children.forEach(t)
            }
         }
         let co = ["", "X", "Y", "Z"];

         function po({
            attachResizeListener: t,
            defaultParent: e,
            measureScroll: n,
            checkIsScrollRoot: i,
            resetTransform: r
         }) {
            return class {
               constructor(t, n = {}, i = (null == e ? void 0 : e())) {
                  this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                     x: 1,
                     y: 1
                  }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
                     this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                  }, this.updateProjection = () => {
                     this.nodes.forEach(bo), this.nodes.forEach(wo)
                  }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                  for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                  this.root === this && (this.nodes = new ho)
               }
               addEventListener(t, e) {
                  return this.eventHandlers.has(t) || this.eventHandlers.set(t, new oi), this.eventHandlers.get(t).add(e)
               }
               notifyListeners(t, ...e) {
                  let n = this.eventHandlers.get(t);
                  null == n || n.notify(...e)
               }
               hasListeners(t) {
                  return this.eventHandlers.has(t)
               }
               registerPotentialNode(t, e) {
                  this.potentialNodes.set(t, e)
               }
               mount(e, n = !1) {
                  var i;
                  if (this.instance) return;
                  this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                  let {
                     layoutId: r,
                     layout: o,
                     visualElement: a
                  } = this.options;
                  if (a && !a.current && a.mount(e), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (o || r) && (this.isLayoutDirty = !0), t) {
                     let n, i = () => this.root.updateBlockedByResize = !1;
                     t(e, (() => {
                        this.root.updateBlockedByResize = !0, n && n(), n = Gn(i, 250), P.hasAnimatedSinceResize && (P.hasAnimatedSinceResize = !1, this.nodes.forEach(xo))
                     }))
                  }
                  r && this.root.registerSharedNode(r, this), !1 !== this.options.animate && a && (r || o) && this.addEventListener("didUpdate", (({
                     delta: t,
                     hasLayoutChanged: e,
                     hasRelativeTargetChanged: n,
                     layout: i
                  }) => {
                     var r, o, s, l, u;
                     if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                     let h = null !== (o = null !== (r = this.options.transition) && void 0 !== r ? r : a.getDefaultTransition()) && void 0 !== o ? o : Ao,
                        {
                           onLayoutAnimationStart: d,
                           onLayoutAnimationComplete: c
                        } = a.getProps(),
                        p = !this.targetLayout || !oo(this.targetLayout, i) || n,
                        m = !e && n;
                     if ((null === (s = this.resumeFrom) || void 0 === s ? void 0 : s.instance) || m || e && (p || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, m);
                        let e = {
                           ...Qn(h, "layout"),
                           onPlay: d,
                           onComplete: c
                        };
                        a.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
                     } else e || 0 !== this.animationProgress || xo(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                     this.targetLayout = i
                  }))
               }
               unmount() {
                  var t, e;
                  this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, wn.qY.preRender(this.updateProjection)
               }
               blockUpdate() {
                  this.updateManuallyBlocked = !0
               }
               unblockUpdate() {
                  this.updateManuallyBlocked = !1
               }
               isUpdateBlocked() {
                  return this.updateManuallyBlocked || this.updateBlockedByResize
               }
               isTreeAnimationBlocked() {
                  var t;
                  return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
               }
               startUpdate() {
                  var t;
                  this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(So))
               }
               willUpdate(t = !0) {
                  var e, n, i;
                  if (this.root.isUpdateBlocked()) return void(null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e));
                  if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                  this.isLayoutDirty = !0;
                  for (let t = 0; t < this.path.length; t++) {
                     let e = this.path[t];
                     e.shouldResetTransform = !0, e.updateScroll()
                  }
                  let {
                     layoutId: r,
                     layout: o
                  } = this.options;
                  if (void 0 === r && !o) return;
                  let a = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
                  this.prevTransformTemplateValue = null == a ? void 0 : a(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
               }
               didUpdate() {
                  if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(go);
                  this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Co), this.potentialNodes.clear()), this.nodes.forEach(yo), this.nodes.forEach(mo), this.nodes.forEach(fo), this.clearAllSnapshots(), wn.iW.update(), wn.iW.preRender(), wn.iW.render())
               }
               clearAllSnapshots() {
                  this.nodes.forEach(vo), this.sharedNodes.forEach(Eo)
               }
               scheduleUpdateProjection() {
                  wn.ZP.preRender(this.updateProjection, !1, !0)
               }
               scheduleCheckAfterUnmount() {
                  wn.ZP.postRender((() => {
                     this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                  }))
               }
               updateSnapshot() {
                  !this.snapshot && this.instance && (this.snapshot = this.measure())
               }
               updateLayout() {
                  var t;
                  if (!(this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty))) return;
                  if (this.resumeFrom && !this.resumeFrom.instance)
                     for (let t = 0; t < this.path.length; t++) {
                        this.path[t].updateScroll()
                     }
                  let e = this.layout;
                  this.layout = this.measure(!1), this.layoutCorrected = Hi(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
               }
               updateScroll() {
                  this.options.layoutScroll && this.instance && (this.isScrollRoot = i(this.instance), this.scroll = n(this.instance))
               }
               resetTransform() {
                  var t;
                  if (!r) return;
                  let e = this.isLayoutDirty || this.shouldResetTransform,
                     n = this.projectionDelta && !ro(this.projectionDelta),
                     i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                     o = null == i ? void 0 : i(this.latestValues, ""),
                     a = o !== this.prevTransformTemplateValue;
                  e && (n || Gi(this.latestValues) || a) && (r(this.instance, o), this.shouldResetTransform = !1, this.scheduleRender())
               }
               measure(t = !0) {
                  var e;
                  let n = this.measurePageBox(),
                     i = this.removeElementScroll(n);
                  return t && (i = this.removeTransform(i)), Mo((e = i).x), Mo(e.y), {
                     measuredBox: n,
                     layoutBox: i,
                     latestValues: {}
                  }
               }
               measurePageBox() {
                  let {
                     visualElement: t
                  } = this.options;
                  if (!t) return Hi();
                  let e = t.measureViewportBox(),
                     {
                        scroll: n
                     } = this.root;
                  return n && (tr(e.x, n.x), tr(e.y, n.y)), e
               }
               removeElementScroll(t) {
                  let e = Hi();
                  _r(e, t);
                  for (let n = 0; n < this.path.length; n++) {
                     let i = this.path[n],
                        {
                           scroll: r,
                           options: o,
                           isScrollRoot: a
                        } = i;
                     if (i !== this.root && r && o.layoutScroll) {
                        if (a) {
                           _r(e, t);
                           let {
                              scroll: n
                           } = this.root;
                           n && (tr(e.x, -n.x), tr(e.y, -n.y))
                        }
                        tr(e.x, r.x), tr(e.y, r.y)
                     }
                  }
                  return e
               }
               applyTransform(t, e = !1) {
                  let n = Hi();
                  _r(n, t);
                  for (let t = 0; t < this.path.length; t++) {
                     let i = this.path[t];
                     !e && i.options.layoutScroll && i.scroll && i !== i.root && rr(n, {
                        x: -i.scroll.x,
                        y: -i.scroll.y
                     }), Gi(i.latestValues) && rr(n, i.latestValues)
                  }
                  return Gi(this.latestValues) && rr(n, this.latestValues), n
               }
               removeTransform(t) {
                  var e;
                  let n = Hi();
                  _r(n, t);
                  for (let t = 0; t < this.path.length; t++) {
                     let i = this.path[t];
                     if (!i.instance || !Gi(i.latestValues)) continue;
                     qi(i.latestValues) && i.updateSnapshot();
                     let r = Hi();
                     _r(r, i.measurePageBox()), no(n, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layoutBox, r)
                  }
                  return Gi(this.latestValues) && no(n, this.latestValues), n
               }
               setTargetDelta(t) {
                  this.targetDelta = t, this.root.scheduleUpdateProjection()
               }
               setOptions(t) {
                  this.options = {
                     ...this.options,
                     ...t,
                     crossfade: void 0 === t.crossfade || t.crossfade
                  }
               }
               clearMeasurements() {
                  this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
               }
               resolveTargetDelta() {
                  var t, e, n, i;
                  let {
                     layout: r,
                     layoutId: o
                  } = this.options;
                  if (this.layout && (r || o)) {
                     if (!this.targetDelta && !this.relativeTarget) {
                        let t = this.getClosestProjectingParent();
                        t && t.layout ? (this.relativeParent = t, this.relativeTarget = Hi(), this.relativeTargetOrigin = Hi(), Ii(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), _r(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                     }
                     if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = Hi(), this.targetWithTransforms = Hi()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (e = this.target, n = this.relativeTarget, i = this.relativeParent.target, ji(e.x, n.x, i.x), ji(e.y, n.y, i.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : _r(this.target, this.layout.layoutBox), Qi(this.target, this.targetDelta)) : _r(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                        this.attemptToResolveRelativeTarget = !1;
                        let t = this.getClosestProjectingParent();
                        t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = Hi(), this.relativeTargetOrigin = Hi(), Ii(this.relativeTargetOrigin, this.target, t.target), _r(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                     }
                  }
               }
               getClosestProjectingParent() {
                  if (this.parent && !qi(this.parent.latestValues) && !Ki(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
               }
               calcProjection() {
                  var t;
                  let {
                     layout: e,
                     layoutId: n
                  } = this.options;
                  if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !e && !n) return;
                  let i = this.getLead();
                  _r(this.layoutCorrected, this.layout.layoutBox),
                     function (t, e, n, i = !1) {
                        var r, o;
                        let a, s, l = n.length;
                        if (l) {
                           e.x = e.y = 1;
                           for (let u = 0; u < l; u++) s = (a = n[u]).projectionDelta, "contents" !== (null === (o = null === (r = a.instance) || void 0 === r ? void 0 : r.style) || void 0 === o ? void 0 : o.display) && (i && a.options.layoutScroll && a.scroll && a !== a.root && rr(t, {
                              x: -a.scroll.x,
                              y: -a.scroll.y
                           }), s && (e.x *= s.x.scale, e.y *= s.y.scale, Qi(t, s)), i && Gi(a.latestValues) && rr(t, a.latestValues))
                        }
                     }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== i);
                  let {
                     target: r
                  } = i;
                  if (!r) return;
                  this.projectionDelta || (this.projectionDelta = Yi(), this.projectionDeltaWithTransform = Yi());
                  let o = this.treeScale.x,
                     a = this.treeScale.y,
                     s = this.projectionTransform;
                  Di(this.projectionDelta, this.layoutCorrected, r, this.latestValues), this.projectionTransform = lo(this.projectionDelta, this.treeScale), (this.projectionTransform !== s || this.treeScale.x !== o || this.treeScale.y !== a) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", r))
               }
               hide() {
                  this.isVisible = !1
               }
               show() {
                  this.isVisible = !0
               }
               scheduleRender(t = !0) {
                  var e, n, i;
                  null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
               }
               setAnimationOrigin(t, e = !1) {
                  var n;
                  let i = this.snapshot,
                     r = (null == i ? void 0 : i.latestValues) || {},
                     o = {
                        ...this.latestValues
                     },
                     a = Yi();
                  this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                  let s = Hi(),
                     l = null == i ? void 0 : i.isShared,
                     u = 1 >= ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0),
                     h = Boolean(l && !u && !0 === this.options.crossfade && !this.path.some(To));
                  this.animationProgress = 0, this.mixTargetDelta = e => {
                     var n, i, d;
                     let c = e / 1e3;
                     Po(a.x, t.x, c), Po(a.y, t.y, c), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (Ii(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox), i = this.relativeTarget, d = this.relativeTargetOrigin, Vo(i.x, d.x, s.x, c), Vo(i.y, d.y, s.y, c)), l && (this.animationValues = o, function (t, e, n, i, r, o) {
                        var a, s, l, u;
                        r ? (t.opacity = Ve(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, Zr(i)), t.opacityExit = Ve(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, qr(i))) : o && (t.opacity = Ve(null !== (l = e.opacity) && void 0 !== l ? l : 1, null !== (u = n.opacity) && void 0 !== u ? u : 1, i));
                        for (let r = 0; r < Yr; r++) {
                           let o = `border${zr[r]}Radius`,
                              a = Xr(e, o),
                              s = Xr(n, o);
                           void 0 === a && void 0 === s || (a || (a = 0), s || (s = 0), 0 === a || 0 === s || Wr(a) === Wr(s) ? (t[o] = Math.max(Ve(Hr(a), Hr(s), i), 0), (G.test(s) || G.test(a)) && (t[o] += "%")) : t[o] = s)
                        }(e.rotate || n.rotate) && (t.rotate = Ve(e.rotate || 0, n.rotate || 0, i))
                     }(o, r, this.latestValues, c, h, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = c
                  }, this.mixTargetDelta(0)
               }
               startAnimation(t) {
                  var e, n;
                  this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (wn.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = wn.ZP.update((() => {
                     P.hasAnimatedSinceResize = !0, this.currentAnimation = function (t, e, n = {}) {
                        let i = j(t) ? t : si(t);
                        return ti("", i, 1e3, n), {
                           stop: () => i.stop(),
                           isAnimating: () => i.isAnimating()
                        }
                     }(0, 0, {
                        ...t,
                        onUpdate: e => {
                           var n;
                           this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                        },
                        onComplete: () => {
                           var e;
                           null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                        }
                     }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                  }))
               }
               completeAnimation() {
                  var t;
                  this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
               }
               finishAnimation() {
                  var t;
                  this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
               }
               applyTransformsToTarget() {
                  let t = this.getLead(),
                     {
                        targetWithTransforms: e,
                        target: n,
                        layout: i,
                        latestValues: r
                     } = t;
                  if (e && n && i) {
                     if (this !== t && this.layout && i && Ro(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                        n = this.target || Hi();
                        let e = ki(this.layout.layoutBox.x);
                        n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                        let i = ki(this.layout.layoutBox.y);
                        n.y.min = t.target.y.min, n.y.max = n.y.min + i
                     }
                     _r(e, n), rr(e, r), Di(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                  }
               }
               registerSharedNode(t, e) {
                  var n, i, r;
                  this.sharedNodes.has(t) || this.sharedNodes.set(t, new so), this.sharedNodes.get(t).add(e), e.promote({
                     transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                     preserveFollowOpacity: null === (r = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === r ? void 0 : r.call(i, e)
                  })
               }
               isLead() {
                  let t = this.getStack();
                  return !t || t.lead === this
               }
               getLead() {
                  var t;
                  let {
                     layoutId: e
                  } = this.options;
                  return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
               }
               getPrevLead() {
                  var t;
                  let {
                     layoutId: e
                  } = this.options;
                  return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
               }
               getStack() {
                  let {
                     layoutId: t
                  } = this.options;
                  if (t) return this.root.sharedNodes.get(t)
               }
               promote({
                  needsReset: t,
                  transition: e,
                  preserveFollowOpacity: n
               } = {}) {
                  let i = this.getStack();
                  i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                     transition: e
                  })
               }
               relegate() {
                  let t = this.getStack();
                  return !!t && t.relegate(this)
               }
               resetRotation() {
                  let {
                     visualElement: t
                  } = this.options;
                  if (!t) return;
                  let e = !1,
                     n = {};
                  for (let i = 0; i < co.length; i++) {
                     let r = "rotate" + co[i];
                     t.getStaticValue(r) && (e = !0, n[r] = t.getStaticValue(r), t.setStaticValue(r, 0))
                  }
                  if (e) {
                     for (let e in null == t || t.render(), n) t.setStaticValue(e, n[e]);
                     t.scheduleRender()
                  }
               }
               getProjectionStyles(t = {}) {
                  var e, n, i;
                  let r = {};
                  if (!this.instance || this.isSVG) return r;
                  if (!this.isVisible) return {
                     visibility: "hidden"
                  };
                  r.visibility = "";
                  let o = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                  if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = Tt(t.pointerEvents) || "", r.transform = o ? o(this.latestValues, "") : "none", r;
                  let a = this.getLead();
                  if (!this.projectionDelta || !this.layout || !a.target) {
                     let e = {};
                     return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = Tt(t.pointerEvents) || ""), this.hasProjected && !Gi(this.latestValues) && (e.transform = o ? o({}, "") : "none", this.hasProjected = !1), e
                  }
                  let s = a.animationValues || a.latestValues;
                  this.applyTransformsToTarget(), r.transform = lo(this.projectionDeltaWithTransform, this.treeScale, s), o && (r.transform = o(s, r.transform));
                  let {
                     x: l,
                     y: u
                  } = this.projectionDelta;
                  for (let t in r.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, a.animationValues ? r.opacity = a === this ? null !== (i = null !== (n = s.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : s.opacityExit : r.opacity = a === this ? void 0 !== s.opacity ? s.opacity : "" : void 0 !== s.opacityExit ? s.opacityExit : 0, k) {
                     if (void 0 === s[t]) continue;
                     let {
                        correct: e,
                        applyTo: n
                     } = k[t], i = e(s[t], a);
                     if (n) {
                        let t = n.length;
                        for (let e = 0; e < t; e++) r[n[e]] = i
                     } else r[t] = i
                  }
                  return this.options.layoutId && (r.pointerEvents = a === this ? Tt(t.pointerEvents) || "" : "none"), r
               }
               clearSnapshot() {
                  this.resumeFrom = this.snapshot = void 0
               }
               resetTree() {
                  this.root.nodes.forEach((t => {
                     var e;
                     return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                  })), this.root.nodes.forEach(go), this.root.sharedNodes.clear()
               }
            }
         }

         function mo(t) {
            t.updateLayout()
         }

         function fo(t) {
            var e, n, i;
            let r = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
               let {
                  layoutBox: e,
                  measuredBox: n
               } = t.layout, {
                  animationType: i
               } = t.options;
               "size" === i ? Wi((t => {
                  let n = r.isShared ? r.measuredBox[t] : r.layoutBox[t],
                     i = ki(n);
                  n.min = e[t].min, n.max = n.min + i
               })) : Ro(i, r.layoutBox, e) && Wi((t => {
                  let n = r.isShared ? r.measuredBox[t] : r.layoutBox[t],
                     i = ki(e[t]);
                  n.max = n.min + i
               }));
               let o = Yi();
               Di(o, e, r.layoutBox);
               let a = Yi();
               r.isShared ? Di(a, t.applyTransform(n, !0), r.measuredBox) : Di(a, e, r.layoutBox);
               let s = !ro(o),
                  l = !1;
               if (!t.resumeFrom) {
                  let n = t.getClosestProjectingParent();
                  if (n && !n.resumeFrom) {
                     let {
                        snapshot: t,
                        layout: i
                     } = n;
                     if (t && i) {
                        let n = Hi();
                        Ii(n, r.layoutBox, t.layoutBox);
                        let o = Hi();
                        Ii(o, e, i.layoutBox), oo(n, o) || (l = !0)
                     }
                  }
               }
               t.notifyListeners("didUpdate", {
                  layout: e,
                  snapshot: r,
                  delta: a,
                  layoutDelta: o,
                  hasLayoutChanged: s,
                  hasRelativeTargetChanged: l
               })
            } else t.isLead() && (null === (i = (n = t.options).onExitComplete) || void 0 === i || i.call(n));
            t.options.transition = void 0
         }

         function vo(t) {
            t.clearSnapshot()
         }

         function go(t) {
            t.clearMeasurements()
         }

         function yo(t) {
            let {
               visualElement: e
            } = t.options;
            (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
         }

         function xo(t) {
            t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
         }

         function bo(t) {
            t.resolveTargetDelta()
         }

         function wo(t) {
            t.calcProjection()
         }

         function So(t) {
            t.resetRotation()
         }

         function Eo(t) {
            t.removeLeadSnapshot()
         }

         function Po(t, e, n) {
            t.translate = Ve(e.translate, 0, n), t.scale = Ve(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
         }

         function Vo(t, e, n, i) {
            t.min = Ve(e.min, n.min, i), t.max = Ve(e.max, n.max, i)
         }

         function To(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
         }
         let Ao = {
            duration: .45,
            ease: [.4, 0, .1, 1]
         };

         function Co(t, e) {
            let n = t.root;
            for (let e = t.path.length - 1; e >= 0; e--)
               if (Boolean(t.path[e].instance)) {
                  n = t.path[e];
                  break
               } let i = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
            i && t.mount(i, !0)
         }

         function Mo(t) {
            t.min = Math.round(t.min), t.max = Math.round(t.max)
         }

         function Ro(t, e, n) {
            return "position" === t || "preserve-aspect" === t && ! function (t, e, n = .1) {
               return Ti(t, e) <= n
            }(ao(e), ao(n), .2)
         }
         let Lo = po({
               attachResizeListener: (t, e) => Rt(t, "resize", e),
               measureScroll: () => ({
                  x: document.documentElement.scrollLeft || document.body.scrollLeft,
                  y: document.documentElement.scrollTop || document.body.scrollTop
               }),
               checkIsScrollRoot: () => !0
            }),
            ko = {
               current: void 0
            },
            Oo = po({
               measureScroll: t => ({
                  x: t.scrollLeft,
                  y: t.scrollTop
               }),
               defaultParent: () => {
                  if (!ko.current) {
                     let t = new Lo(0, {});
                     t.mount(window), t.setOptions({
                        layoutScroll: !0
                     }), ko.current = t
                  }
                  return ko.current
               },
               resetTransform: (t, e) => {
                  t.style.transform = void 0 !== e ? e : "none"
               },
               checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
            }),
            Bo = {
               ...Si,
               ...de,
               ...ur,
               measureLayout: function (t) {
                  let [e, n] = ce(), i = (0, s.useContext)(T.p);
                  return s.createElement(Nr, {
                     ...t,
                     layoutGroup: i,
                     switchLayoutGroup: (0, s.useContext)(C),
                     isPresent: e,
                     safeToRemove: n
                  })
               }
            },
            Do = function (t) {
               function e(t, e = {}) {
                  return function ({
                     preloadedFeatures: t,
                     createVisualElement: e,
                     projectionNodeConstructor: n,
                     useRender: i,
                     useVisualState: r,
                     Component: o
                  }) {
                     t && function (t) {
                        for (let e in t) "projectionNodeConstructor" === e ? w.projectionNodeConstructor = t[e] : w[e].Component = t[e]
                     }(t);
                     let a = (0, s.forwardRef)((function (a, f) {
                        var v, y;
                        let b = {
                              ...(0, s.useContext)(l._),
                              ...a,
                              layoutId: function ({
                                 layoutId: t
                              }) {
                                 let e = (0, s.useContext)(T.p).id;
                                 return e && void 0 !== t ? e + "-" + t : t
                              }(a)
                           },
                           {
                              isStatic: M
                           } = b,
                           R = null,
                           L = function (t) {
                              let {
                                 initial: e,
                                 animate: n
                              } = function (t, e) {
                                 if (g(t)) {
                                    let {
                                       initial: e,
                                       animate: n
                                    } = t;
                                    return {
                                       initial: !1 === e || m(e) ? e : void 0,
                                       animate: m(n) ? n : void 0
                                    }
                                 }
                                 return !1 !== t.inherit ? e : {}
                              }(t, (0, s.useContext)(u));
                              return (0, s.useMemo)((() => ({
                                 initial: e,
                                 animate: n
                              })), [x(e), x(n)])
                           }(a),
                           k = M ? void 0 : (0, E.h)((() => {
                              if (P.hasEverUpdated) return V++
                           })),
                           O = r(a, M);
                        if (!M && S.j) {
                           L.visualElement = function (t, e, n, i) {
                              let r = (0, s.useContext)(u).visualElement,
                                 o = (0, s.useContext)(c),
                                 a = (0, s.useContext)(h.O),
                                 p = (0, s.useContext)(l._).reducedMotion,
                                 m = (0, s.useRef)();
                              i = i || o.renderer, !m.current && i && (m.current = i(t, {
                                 visualState: e,
                                 parent: r,
                                 props: n,
                                 presenceId: a ? a.id : void 0,
                                 blockInitialAnimation: !!a && !1 === a.initial,
                                 reducedMotionConfig: p
                              }));
                              let f = m.current;
                              return (0, d.L)((() => {
                                 f && f.render()
                              })), (0, s.useEffect)((() => {
                                 f && f.animationState && f.animationState.animateChanges()
                              })), (0, d.L)((() => () => f && f.notify("Unmount")), []), f
                           }(o, O, b, e);
                           let i = (0, s.useContext)(c).strict,
                              r = (0, s.useContext)(C);
                           L.visualElement && (R = L.visualElement.loadFeatures(b, i, t, k, n || w.projectionNodeConstructor, r))
                        }
                        return s.createElement(A, {
                           visualElement: L.visualElement,
                           props: b
                        }, R, s.createElement(u.Provider, {
                           value: L
                        }, i(o, a, k, (v = L.visualElement, y = f, (0, s.useCallback)((t => {
                           t && O.mount && O.mount(t), v && (t ? v.mount(t) : v.unmount()), y && ("function" == typeof y ? y(t) : p(y) && (y.current = t))
                        }), [v])), O, M, L.visualElement)))
                     }));
                     return a[M] = o, a
                  }(((t, e) => function (t, {
                     forwardMotionProps: e = !1
                  }, n, i, r) {
                     return {
                        ...L(t) ? Ct : Mt,
                        preloadedFeatures: n,
                        useRender: function (t = !1) {
                           let e = (e, n, i, r, {
                              latestValues: o
                           }, a) => {
                              let l = (L(e) ? ft : lt)(n, o, a),
                                 u = {
                                    ...(0, ut.L)(n, "string" == typeof e, t),
                                    ...l,
                                    ref: r
                                 };
                              return i && (u["data-projection-id"] = i), (0, s.createElement)(e, u)
                           };
                           return e
                        }(e),
                        createVisualElement: i,
                        projectionNodeConstructor: r,
                        Component: t
                     }
                  }(t, e, Bo, Dr, Oo))(t, e))
               }
               if ("undefined" == typeof Proxy) return e;
               let n = new Map;
               return new Proxy(e, {
                  get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
               })
            }()
      },
      69664: function (t, e, n) {
         n.d(e, {
            L: function () {
               return s
            },
            K: function () {
               return a
            }
         });
         let i = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

         function r(t) {
            return i.has(t)
         }
         let o = t => !r(t);

         function a(t) {
            t && (o = e => e.startsWith("on") ? !r(e) : t(e))
         }
         try {
            a(require("@emotion/is-prop-valid").default)
         } catch (t) {}

         function s(t, e, n) {
            let i = {};
            for (let a in t)(o(a) || !0 === n && r(a) || !e && !r(a) || t.draggable && a.startsWith("onDrag")) && (i[a] = t[a]);
            return i
         }
      },
      95253: function (t, e, n) {
         n.d(e, {
            j: function () {
               return i
            }
         });
         let i = "undefined" != typeof document
      },
      63367: function (t, e, n) {
         n.d(e, {
            O: function () {
               return r
            }
         });
         var i = n(44675);
         let r = (void 0 === i || i.env, "production")
      },
      53884: function (t, e, n) {
         n.d(e, {
            A: function () {
               return o
            }
         });
         var i = n(95253),
            r = n(87709);

         function o() {
            if (r.O.current = !0, i.j)
               if (window.matchMedia) {
                  let t = window.matchMedia("(prefers-reduced-motion)"),
                     e = () => r.n.current = t.matches;
                  t.addListener(e), e()
               } else r.n.current = !1
         }
      },
      87709: function (t, e, n) {
         n.d(e, {
            O: function () {
               return r
            },
            n: function () {
               return i
            }
         });
         let i = {
               current: null
            },
            r = {
               current: !1
            }
      },
      36635: function (t, e, n) {
         n.d(e, {
            h: function () {
               return r
            }
         });
         var i = n(70079);

         function r(t) {
            let e = (0, i.useRef)(null);
            return null === e.current && (e.current = t()), e.current
         }
      },
      95129: function (t, e, n) {
         n.d(e, {
            L: function () {
               return r
            }
         });
         var i = n(70079);
         let r = n(95253).j ? i.useLayoutEffect : i.useEffect
      },
      91014: function (t, e, n) {
         n.d(e, {
            z: function () {
               return r
            }
         });
         var i = n(70079);

         function r(t) {
            return (0, i.useEffect)((() => () => t()), [])
         }
      },
      3350: function (t, e, n) {
         n.d(e, {
            O: function () {
               return r
            }
         });
         let i = new Set;

         function r(t, e, n) {
            t || i.has(e) || (console.warn(e), n && console.warn(n), i.add(e))
         }
      },
      88285: function (t, e, n) {
         n.d(e, {
            qY: function () {
               return p
            },
            ZP: function () {
               return x
            },
            iW: function () {
               return m
            },
            $B: function () {
               return y
            }
         });
         let i = 1 / 60 * 1e3,
            r = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
            o = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(r())), i),
            a = !0,
            s = !1,
            l = !1,
            u = {
               delta: 0,
               timestamp: 0
            },
            h = ["read", "update", "preRender", "render", "postRender"],
            d = h.reduce(((t, e) => (t[e] = function (t) {
               let e = [],
                  n = [],
                  i = 0,
                  r = !1,
                  o = !1,
                  a = new WeakSet,
                  s = {
                     schedule: (t, o = !1, s = !1) => {
                        let l = s && r,
                           u = l ? e : n;
                        return o && a.add(t), -1 === u.indexOf(t) && (u.push(t), l && r && (i = e.length)), t
                     },
                     cancel: t => {
                        let e = n.indexOf(t); - 1 !== e && n.splice(e, 1), a.delete(t)
                     },
                     process: l => {
                        if (r) o = !0;
                        else {
                           if (r = !0, [e, n] = [n, e], n.length = 0, i = e.length)
                              for (let n = 0; n < i; n++) {
                                 let i = e[n];
                                 i(l), a.has(i) && (s.schedule(i), t())
                              }
                           r = !1, o && (o = !1, s.process(l))
                        }
                     }
                  };
               return s
            }((() => s = !0)), t)), {}),
            c = h.reduce(((t, e) => {
               let n = d[e];
               return t[e] = (t, e = !1, i = !1) => (s || g(), n.schedule(t, e, i)), t
            }), {}),
            p = h.reduce(((t, e) => (t[e] = d[e].cancel, t)), {}),
            m = h.reduce(((t, e) => (t[e] = () => d[e].process(u), t)), {}),
            f = t => d[t].process(u),
            v = t => {
               s = !1, u.delta = a ? i : Math.max(Math.min(t - u.timestamp, 40), 1), u.timestamp = t, l = !0, h.forEach(f), l = !1, s && (a = !1, o(v))
            },
            g = () => {
               s = !0, a = !0, l || o(v)
            },
            y = () => u;
         var x = c
      }
   }
]);