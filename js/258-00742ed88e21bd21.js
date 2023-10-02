(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [258], {
       37797: function (t, e, r) {
          "use strict";
 
          function n(t, e) {
             (null == e || e > t.length) && (e = t.length);
             for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
             return n
          }
          var o = r(98329),
             i = r(30540),
             s = i.map,
             a = i.filter,
             c = r(25201),
             u = r(3351);
 
          function f(t) {
             this.client = t
          }
          o(f.prototype, {
             upload: function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                u.validateAssetType(t);
                var n = r.extract || void 0;
                n && !n.length && (n = ["none"]);
                var i = u.hasDataset(this.client.clientConfig),
                   c = "undefined" != typeof window && e instanceof window.File ? o({
                      filename: !1 === r.preserveFilename ? void 0 : e.name,
                      contentType: e.type
                   }, r) : r,
                   f = c.tag,
                   l = c.label,
                   p = c.title,
                   h = c.description,
                   d = c.creditLine,
                   y = c.filename,
                   b = c.source,
                   v = {
                      label: l,
                      title: p,
                      description: h,
                      filename: y,
                      meta: n,
                      creditLine: d
                   };
                b && (v.sourceId = b.id, v.sourceName = b.name, v.sourceUrl = b.url);
                var g = this.client._requestObservable({
                   tag: f,
                   method: "POST",
                   timeout: c.timeout || 0,
                   uri: "/assets/".concat("image" === t ? "images" : "files", "/").concat(i),
                   headers: c.contentType ? {
                      "Content-Type": c.contentType
                   } : {},
                   query: v,
                   body: e
                });
                return this.client.isPromiseAPI() ? g.pipe(a((function (t) {
                   return "response" === t.type
                })), s((function (t) {
                   return t.body.document
                }))).toPromise() : g
             },
             delete: function (t, e) {
                console.warn("client.assets.delete() is deprecated, please use client.delete(<document-id>)");
                var r = e || "";
                return /^(image|file)-/.test(r) ? t._id && (r = t._id) : r = "".concat(t, "-").concat(r), u.hasDataset(this.client.clientConfig), this.client.delete(r)
             },
             getImageUrl: function (t, e) {
                var r, o = t._ref || t;
                if ("string" != typeof o) throw Error("getImageUrl() needs either an object with a _ref, or a string with an asset document ID");
                if (!/^image-[A-Za-z0-9_]+-\d+x\d+-[a-z]{1,5}$/.test(o)) throw Error('Unsupported asset ID "'.concat(o, '". URL generation only works for auto-generated IDs.'));
                var i = function (t) {
                      if (Array.isArray(t)) return t
                   }(r = o.split("-")) || function (t, e) {
                      var r, n, o = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                      if (null != o) {
                         var i = [],
                            s = !0,
                            a = !1;
                         try {
                            for (o = o.call(t); !(s = (r = o.next()).done) && (i.push(r.value), 4 !== i.length); s = !0);
                         } catch (t) {
                            a = !0, n = t
                         } finally {
                            try {
                               s || null == o.return || o.return()
                            } finally {
                               if (a) throw n
                            }
                         }
                         return i
                      }
                   }(r) || function (t, e) {
                      if (t) {
                         if ("string" == typeof t) return n(t, 4);
                         var r = Object.prototype.toString.call(t).slice(8, -1);
                         if ("Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r) return Array.from(t);
                         if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(t, 4)
                      }
                   }(r) || function () {
                      throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                   }(),
                   s = i[1],
                   a = i[2],
                   f = i[3];
                u.hasDataset(this.client.clientConfig);
                var l = this.client.clientConfig,
                   p = l.projectId,
                   h = l.dataset,
                   d = e ? c(e) : "";
                return "https://cdn.sanity.io/images/".concat(p, "/").concat(h, "/").concat(s, "-").concat(a, ".").concat(f).concat(d)
             }
          }), t.exports = f
       },
       37545: function (t, e, r) {
          "use strict";
 
          function n(t) {
             this.client = t
          }
          r(98329)(n.prototype, {
             getLoginProviders: function () {
                return this.client.request({
                   uri: "/auth/providers"
                })
             },
             logout: function () {
                return this.client.request({
                   uri: "/auth/logout",
                   method: "POST"
                })
             }
          }), t.exports = n
       },
       6314: function (t, e, r) {
          "use strict";
          var n = r(98329),
             o = r(18045),
             i = r(3351),
             s = r(68380),
             a = {
                apiHost: "https://api.sanity.io",
                apiVersion: "1",
                useProjectHostname: !0,
                isPromiseAPI: !0
             },
             c = ["localhost", "127.0.0.1", "0.0.0.0"];
          e.defaultConfig = a, e.initConfig = function (t, r) {
             var u, f = n({}, r, t);
             f.apiVersion || s.printNoApiVersionSpecifiedWarning();
             var l = n({}, a, f),
                p = l.useProjectHostname;
             if ("undefined" == typeof Promise) {
                var h = o("js-client-promise-polyfill");
                throw Error("No native Promise-implementation found, polyfill needed - see ".concat(h))
             }
             if (p && !l.projectId) throw Error("Configuration must contain `projectId`");
             var d = "undefined" != typeof window && window.location && window.location.hostname,
                y = d && (u = window.location.hostname, -1 !== c.indexOf(u));
             d && y && l.token && !0 !== l.ignoreBrowserTokenWarning ? s.printBrowserTokenWarning() : void 0 === l.useCdn && s.printCdnWarning(), p && i.projectId(l.projectId), l.dataset && i.dataset(l.dataset), "requestTagPrefix" in l && (l.requestTagPrefix = l.requestTagPrefix ? i.requestTag(l.requestTagPrefix).replace(/\.+$/, "") : void 0), l.apiVersion = "".concat(l.apiVersion).replace(/^v/, ""), l.isDefaultApi = l.apiHost === a.apiHost, l.useCdn = Boolean(l.useCdn) && !l.withCredentials, e.validateApiVersion(l.apiVersion);
             var b = l.apiHost.split("://", 2),
                v = b[0],
                g = b[1],
                m = l.isDefaultApi ? "apicdn.sanity.io" : g;
             return l.useProjectHostname ? (l.url = "".concat(v, "://").concat(l.projectId, ".").concat(g, "/v").concat(l.apiVersion), l.cdnUrl = "".concat(v, "://").concat(l.projectId, ".").concat(m, "/v").concat(l.apiVersion)) : (l.url = "".concat(l.apiHost, "/v").concat(l.apiVersion), l.cdnUrl = l.url), l
          }, e.validateApiVersion = function (t) {
             if ("1" !== t && "X" !== t) {
                var e = new Date(t);
                if (!(/^\d{4}-\d{2}-\d{2}$/.test(t) && e instanceof Date && e.getTime() > 0)) throw Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
             }
          }
       },
       37984: function (t, e, r) {
          "use strict";
 
          function n(t, e, r) {
             return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
             }) : t[e] = r, t
          }
          var o = r(98329),
             i = r(30540),
             s = i.map,
             a = i.filter,
             c = r(3351),
             u = r(8911),
             f = r(67963),
             l = r(95239),
             p = r(26562),
             h = r(58610),
             d = function () {
                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                   dryRun: e.dryRun,
                   returnIds: !0,
                   returnDocuments: !1 === (t = e.returnDocuments) ? void 0 : void 0 === t || t,
                   visibility: e.visibility || "sync",
                   autoGenerateArrayKeys: e.autoGenerateArrayKeys,
                   skipCrossDatasetReferenceValidation: e.skipCrossDatasetReferenceValidation
                }
             },
             y = function (t) {
                return "response" === t.type
             },
             b = function (t) {
                return t.body
             },
             v = function (t) {
                return t.toPromise()
             };
          t.exports = {
             listen: h,
             getDataUrl: function (t, e) {
                var r = this.clientConfig,
                   n = c.hasDataset(r),
                   o = "/".concat(t, "/").concat(n),
                   i = e ? "".concat(o, "/").concat(e) : o;
                return "/data".concat(i).replace(/\/($|\?)/, "$1")
             },
             fetch: function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                   n = !1 === r.filterResponse ? function (t) {
                      return t
                   } : function (t) {
                      return t.result
                   },
                   o = this._dataRequest("query", {
                      query: t,
                      params: e
                   }, r).pipe(s(n));
                return this.isPromiseAPI() ? v(o) : o
             },
             getDocument: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                   r = {
                      uri: this.getDataUrl("doc", t),
                      json: !0,
                      tag: e.tag
                   },
                   n = this._requestObservable(r).pipe(a(y), s((function (t) {
                      return t.body.documents && t.body.documents[0]
                   })));
                return this.isPromiseAPI() ? v(n) : n
             },
             getDocuments: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                   r = {
                      uri: this.getDataUrl("doc", t.join(",")),
                      json: !0,
                      tag: e.tag
                   },
                   n = this._requestObservable(r).pipe(a(y), s((function (e) {
                      var r = (e.body.documents || []).reduce((function (t, e) {
                         return t[e._id] = e, t
                      }), Object.create(null));
                      return t.map((function (t) {
                         return r[t] || null
                      }))
                   })));
                return this.isPromiseAPI() ? v(n) : n
             },
             create: function (t, e) {
                return this._create(t, "create", e)
             },
             createIfNotExists: function (t, e) {
                return c.requireDocumentId("createIfNotExists", t), this._create(t, "createIfNotExists", e)
             },
             createOrReplace: function (t, e) {
                return c.requireDocumentId("createOrReplace", t), this._create(t, "createOrReplace", e)
             },
             patch: function (t, e) {
                return new p(t, e, this)
             },
             delete: function (t, e) {
                return this.dataRequest("mutate", {
                   mutations: [{
                      delete: u(t)
                   }]
                }, e)
             },
             mutate: function (t, e) {
                var r = t instanceof p || t instanceof l ? t.serialize() : t,
                   n = Array.isArray(r) ? r : [r],
                   o = e && e.transactionId;
                return this.dataRequest("mutate", {
                   mutations: n,
                   transactionId: o
                }, e)
             },
             transaction: function (t) {
                return new l(t, this)
             },
             dataRequest: function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                   n = this._dataRequest(t, e, r);
                return this.isPromiseAPI() ? v(n) : n
             },
             _dataRequest: function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                   o = "mutate" === t,
                   i = !o && f(e),
                   c = !o && i.length < 11264,
                   u = r.returnFirst,
                   l = r.timeout,
                   p = r.token,
                   h = r.tag,
                   v = r.headers,
                   g = {
                      method: c ? "GET" : "POST",
                      uri: this.getDataUrl(t, c ? i : ""),
                      json: !0,
                      body: c ? void 0 : e,
                      query: o && d(r),
                      timeout: l,
                      headers: v,
                      token: p,
                      tag: h,
                      canUseCdn: "query" === t
                   };
                return this._requestObservable(g).pipe(a(y), s(b), s((function (t) {
                   if (!o) return t;
                   var e = t.results || [];
                   if (r.returnDocuments) return u ? e[0] && e[0].document : e.map((function (t) {
                      return t.document
                   }));
                   var i = u ? e[0] && e[0].id : e.map((function (t) {
                      return t.id
                   }));
                   return n({
                      transactionId: t.transactionId,
                      results: e
                   }, u ? "documentId" : "documentIds", i)
                })))
             },
             _create: function (t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                   i = n({}, e, t),
                   s = o({
                      returnFirst: !0,
                      returnDocuments: !0
                   }, r);
                return this.dataRequest("mutate", {
                   mutations: [i]
                }, s)
             }
          }
       },
       67963: function (t) {
          "use strict";
          var e = ["tag"],
             r = encodeURIComponent;
          t.exports = function (t) {
             var n = t.query,
                o = t.params,
                i = void 0 === o ? {} : o,
                s = t.options,
                a = void 0 === s ? {} : s,
                c = a.tag,
                u = function (t, e) {
                   if (null == t) return {};
                   var r, n, o = function (t, e) {
                      if (null == t) return {};
                      var r, n, o = {},
                         i = Object.keys(t);
                      for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                      return o
                   }(t, e);
                   if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(t);
                      for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                   }
                   return o
                }(a, e),
                f = "query=".concat(r(n)),
                l = c ? "?tag=".concat(r(c), "&").concat(f) : "?".concat(f),
                p = Object.keys(i).reduce((function (t, e) {
                   return "".concat(t, "&").concat(r("$".concat(e)), "=").concat(r(JSON.stringify(i[e])))
                }), l);
             return Object.keys(u).reduce((function (t, e) {
                return a[e] ? "".concat(t, "&").concat(r(e), "=").concat(r(a[e])) : t
             }), p)
          }
       },
       58610: function (t, e, r) {
          "use strict";
 
          function n(t, e) {
             var r = Object.keys(t);
             if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                   return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), r.push.apply(r, n)
             }
             return r
          }
 
          function o(t) {
             for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2 ? n(Object(r), !0).forEach((function (e) {
                   var n, o;
                   n = t, o = r[e], e in n ? Object.defineProperty(n, e, {
                      value: o,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                   }) : n[e] = o
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function (e) {
                   Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }))
             }
             return t
          }
          var i = r(98329),
             s = r(30540).Observable,
             a = r(34948),
             c = r(99952),
             u = r(55108),
             f = r(67963),
             l = ["includePreviousRevision", "includeResult", "visibility", "effectFormat", "tag"],
             p = {
                includeResult: !0
             };
 
          function h(t) {
             try {
                var e = t.data && JSON.parse(t.data) || {};
                return i({
                   type: t.type
                }, e)
             } catch (t) {
                return t
             }
          }
          t.exports = function (t, e) {
             var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = this.clientConfig,
                i = n.url,
                d = n.token,
                y = n.withCredentials,
                b = n.requestTagPrefix,
                v = r.tag && b ? [b, r.tag].join(".") : r.tag,
                g = o(o({}, u(r, p)), {}, {
                   tag: v
                }),
                m = f({
                   query: t,
                   params: e,
                   options: c(g, l),
                   tag: v
                }),
                w = "".concat(i).concat(this.getDataUrl("listen", m));
             if (w.length > 14800) return new s((function (t) {
                return t.error(Error("Query too large for listener"))
             }));
             var O = g.events ? g.events : ["mutation"],
                _ = -1 !== O.indexOf("reconnect"),
                E = {};
             return (d || y) && (E.withCredentials = !0), d && (E.headers = {
                Authorization: "Bearer ".concat(d)
             }), new s((function (t) {
                var e, r = f(),
                   n = !1;
 
                function o() {
                   !n && (_ && t.next({
                      type: "reconnect"
                   }), n || r.readyState !== a.CLOSED || (u(), clearTimeout(e), e = setTimeout(l, 100)))
                }
 
                function i(e) {
                   t.error(function (t) {
                      if (t instanceof Error) return t;
                      var e = h(t);
                      return e instanceof Error ? e : Error(e.error ? e.error.description ? e.error.description : "string" == typeof e.error ? e.error : JSON.stringify(e.error, null, 2) : e.message || "Unknown listener error")
                   }(e))
                }
 
                function s(e) {
                   var r = h(e);
                   return r instanceof Error ? t.error(r) : t.next(r)
                }
 
                function c(e) {
                   n = !0, u(), t.complete()
                }
 
                function u() {
                   r.removeEventListener("error", o, !1), r.removeEventListener("channelError", i, !1), r.removeEventListener("disconnect", c, !1), O.forEach((function (t) {
                      return r.removeEventListener(t, s, !1)
                   })), r.close()
                }
 
                function f() {
                   var t = new a(w, E);
                   return t.addEventListener("error", o, !1), t.addEventListener("channelError", i, !1), t.addEventListener("disconnect", c, !1), O.forEach((function (e) {
                      return t.addEventListener(e, s, !1)
                   })), t
                }
 
                function l() {
                   r = f()
                }
                return function () {
                   n = !0, u()
                }
             }))
          }
       },
       26562: function (t, e, r) {
          "use strict";
 
          function n(t, e, r) {
             return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
             }) : t[e] = r, t
          }
          var o = r(98329),
             i = r(8911),
             s = r(3351),
             a = s.validateObject,
             c = s.validateInsert;
 
          function u(t) {
             var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
             this.selection = t, this.operations = o({}, e), this.client = r
          }
          o(u.prototype, {
             clone: function () {
                return new u(this.selection, o({}, this.operations), this.client)
             },
             set: function (t) {
                return this._assign("set", t)
             },
             diffMatchPatch: function (t) {
                return a("diffMatchPatch", t), this._assign("diffMatchPatch", t)
             },
             unset: function (t) {
                if (!Array.isArray(t)) throw Error("unset(attrs) takes an array of attributes to unset, non-array given");
                return this.operations = o({}, this.operations, {
                   unset: t
                }), this
             },
             setIfMissing: function (t) {
                return this._assign("setIfMissing", t)
             },
             replace: function (t) {
                return a("replace", t), this._set("set", {
                   $: t
                })
             },
             inc: function (t) {
                return this._assign("inc", t)
             },
             dec: function (t) {
                return this._assign("dec", t)
             },
             insert: function (t, e, r) {
                var o;
                return c(t, e, r), this._assign("insert", (n(o = {}, t, e), n(o, "items", r), o))
             },
             append: function (t, e) {
                return this.insert("after", "".concat(t, "[-1]"), e)
             },
             prepend: function (t, e) {
                return this.insert("before", "".concat(t, "[0]"), e)
             },
             splice: function (t, e, r, n) {
                var o = e < 0 ? e - 1 : e,
                   i = void 0 === r || -1 === r ? -1 : Math.max(0, e + r),
                   s = "".concat(t, "[").concat(o, ":").concat(o < 0 && i >= 0 ? "" : i, "]");
                return this.insert("replace", s, n || [])
             },
             ifRevisionId: function (t) {
                return this.operations.ifRevisionID = t, this
             },
             serialize: function () {
                return o(i(this.selection), this.operations)
             },
             toJSON: function () {
                return this.serialize()
             },
             commit: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.client) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
                var e = o({
                   returnFirst: "string" == typeof this.selection,
                   returnDocuments: !0
                }, t);
                return this.client.mutate({
                   patch: this.serialize()
                }, e)
             },
             reset: function () {
                return this.operations = {}, this
             },
             _set: function (t, e) {
                return this._assign(t, e, !1)
             },
             _assign: function (t, e) {
                var r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return a(t, e), this.operations = o({}, this.operations, n({}, t, o({}, r && this.operations[t] || {}, e))), this
             }
          }), t.exports = u
       },
       95239: function (t, e, r) {
          "use strict";
 
          function n(t, e, r) {
             return e in t ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
             }) : t[e] = r, t
          }
          var o = r(98329),
             i = r(3351),
             s = r(26562),
             a = {
                returnDocuments: !1
             };
 
          function c() {
             var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                e = arguments.length > 1 ? arguments[1] : void 0,
                r = arguments.length > 2 ? arguments[2] : void 0;
             this.trxId = r, this.operations = t, this.client = e
          }
          o(c.prototype, {
             clone: function () {
                return new c(this.operations.slice(0), this.client, this.trxId)
             },
             create: function (t) {
                return i.validateObject("create", t), this._add({
                   create: t
                })
             },
             createIfNotExists: function (t) {
                var e = "createIfNotExists";
                return i.validateObject(e, t), i.requireDocumentId(e, t), this._add(n({}, e, t))
             },
             createOrReplace: function (t) {
                var e = "createOrReplace";
                return i.validateObject(e, t), i.requireDocumentId(e, t), this._add(n({}, e, t))
             },
             delete: function (t) {
                return i.validateDocumentId("delete", t), this._add({
                   delete: {
                      id: t
                   }
                })
             },
             patch: function (t, e) {
                if (t instanceof s) return this._add({
                   patch: t.serialize()
                });
                if ("function" == typeof e) {
                   var r = e(new s(t, {}, this.client));
                   if (!(r instanceof s)) throw Error("function passed to `patch()` must return the patch");
                   return this._add({
                      patch: r.serialize()
                   })
                }
                return this._add({
                   patch: o({
                      id: t
                   }, e)
                })
             },
             transactionId: function (t) {
                return t ? (this.trxId = t, this) : this.trxId
             },
             serialize: function () {
                return this.operations.slice()
             },
             toJSON: function () {
                return this.serialize()
             },
             commit: function (t) {
                if (!this.client) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
                return this.client.mutate(this.serialize(), o({
                   transactionId: this.trxId
                }, a, t || {}))
             },
             reset: function () {
                return this.operations = [], this
             },
             _add: function (t) {
                return this.operations.push(t), this
             }
          }), t.exports = c
       },
       79591: function (t, e, r) {
          "use strict";
          var n = r(98329),
             o = r(3351);
 
          function i(t) {
             this.request = t.request.bind(t)
          }
          n(i.prototype, {
             create: function (t, e) {
                return this._modify("PUT", t, e)
             },
             edit: function (t, e) {
                return this._modify("PATCH", t, e)
             },
             delete: function (t) {
                return this._modify("DELETE", t)
             },
             list: function () {
                return this.request({
                   uri: "/datasets"
                })
             },
             _modify: function (t, e, r) {
                return o.dataset(e), this.request({
                   method: t,
                   uri: "/datasets/".concat(e),
                   body: r
                })
             }
          }), t.exports = i
       },
       18045: function (t) {
          "use strict";
          t.exports = function (t) {
             return "https://docs.sanity.io/help/" + t
          }
       },
       4318: function (t) {
          "use strict";
          t.exports = []
       },
       86247: function (t, e, r) {
          "use strict";
          var n = r(95319),
             o = r(98329);
 
          function i(t) {
             var e = a(t);
             i.super.call(this, e.message), o(this, e)
          }
 
          function s(t) {
             var e = a(t);
             s.super.call(this, e.message), o(this, e)
          }
 
          function a(t) {
             var e, r = t.body,
                n = {
                   response: t,
                   statusCode: t.statusCode,
                   responseBody: -1 !== (t.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? JSON.stringify(r, null, 2) : r
                };
             return r.error && r.message ? (n.message = "".concat(r.error, " - ").concat(r.message), n) : r.error && r.error.description ? (n.message = r.error.description, n.details = r.error, n) : (n.message = r.error || r.message || (e = t.statusMessage ? " ".concat(t.statusMessage) : "", "".concat(t.method, "-request to ").concat(t.url, " resulted in HTTP ").concat(t.statusCode).concat(e)), n)
          }
          n(i), n(s), e.ClientError = i, e.ServerError = s
       },
       25201: function (t) {
          "use strict";
          t.exports = function (t) {
             var e = [];
             for (var r in t) t.hasOwnProperty(r) && e.push("".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(t[r])));
             return e.length > 0 ? "?".concat(e.join("&")) : ""
          }
       },
       80234: function (t, e, r) {
          "use strict";
          var n = r(25088),
             o = r(98329),
             i = r(17902),
             s = r(87918),
             a = r(25079),
             c = r(89031),
             u = r(30540).Observable,
             f = r(86247),
             l = f.ClientError,
             p = f.ServerError,
             h = n(r(4318).concat([{
                onResponse: function (t) {
                   var e = t.headers["x-sanity-warning"];
                   return (Array.isArray(e) ? e : [e]).filter(Boolean).forEach((function (t) {
                      return console.warn(t)
                   })), t
                }
             }, s(), a(), c(), {
                onResponse: function (t) {
                   if (t.statusCode >= 500) throw new p(t);
                   if (t.statusCode >= 400) throw new l(t);
                   return t
                }
             }, i({
                implementation: u
             })]));
 
          function d(t) {
             return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h)(o({
                maxRedirects: 0
             }, t))
          }
          d.defaultRequester = h, d.ClientError = l, d.ServerError = p, t.exports = d
       },
       86589: function (t, e, r) {
          "use strict";
          var n = r(98329);
          t.exports = function (t) {
             var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = {},
                o = e.token || t.token;
             o && (r.Authorization = "Bearer ".concat(o)), e.useGlobalApi || t.useProjectHostname || !t.projectId || (r["X-Sanity-Project-ID"] = t.projectId);
             var i = Boolean(void 0 === e.withCredentials ? t.token || t.withCredentials : e.withCredentials),
                s = void 0 === e.timeout ? t.timeout : e.timeout;
             return n({}, e, {
                headers: n({}, r, e.headers || {}),
                timeout: void 0 === s ? 3e5 : s,
                proxy: e.proxy || t.proxy,
                json: !0,
                withCredentials: i
             })
          }
       },
       33823: function (t, e, r) {
          "use strict";
 
          function n(t) {
             this.client = t
          }
          r(98329)(n.prototype, {
             list: function () {
                return this.client.request({
                   uri: "/projects"
                })
             },
             getById: function (t) {
                return this.client.request({
                   uri: "/projects/".concat(t)
                })
             }
          }), t.exports = n
       },
       12479: function (t, e, r) {
          "use strict";
 
          function n(t, e) {
             var r = Object.keys(t);
             if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter((function (e) {
                   return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), r.push.apply(r, n)
             }
             return r
          }
          var o = r(98329),
             i = r(30540),
             s = i.Observable,
             a = i.map,
             c = i.filter,
             u = r(26562),
             f = r(95239),
             l = r(37984),
             p = r(79591),
             h = r(33823),
             d = r(37797),
             y = r(26545),
             b = r(37545),
             v = r(80234),
             g = r(86589),
             m = r(6314),
             w = m.defaultConfig,
             O = m.initConfig,
             _ = r(3351);
 
          function E() {
             var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w;
             if (!(this instanceof E)) return new E(t);
             if (this.config(t), this.assets = new d(this), this.datasets = new p(this), this.projects = new h(this), this.users = new y(this), this.auth = new b(this), this.clientConfig.isPromiseAPI) {
                var e = o({}, this.clientConfig, {
                   isPromiseAPI: !1
                });
                this.observable = new E(e)
             }
          }
          o(E.prototype, l), o(E.prototype, {
             clone: function () {
                return new E(this.config())
             },
             config: function (t) {
                if (void 0 === t) return o({}, this.clientConfig);
                if (this.observable) {
                   var e = o({}, t, {
                      isPromiseAPI: !1
                   });
                   this.observable.config(e)
                }
                return this.clientConfig = O(t, this.clientConfig || {}), this
             },
             withConfig: function (t) {
                return this.clone().config(t)
             },
             getUrl: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? this.clientConfig.cdnUrl : this.clientConfig.url;
                return "".concat(e, "/").concat(t.replace(/^\//, ""))
             },
             isPromiseAPI: function () {
                return this.clientConfig.isPromiseAPI
             },
             _requestObservable: function (t) {
                var e = this,
                   r = t.url || t.uri,
                   i = void 0 === t.canUseCdn ? ["GET", "HEAD"].indexOf(t.method || "GET") >= 0 && 0 === r.indexOf("/data/") : t.canUseCdn,
                   a = this.clientConfig.useCdn && i,
                   c = t.tag && this.clientConfig.requestTagPrefix ? [this.clientConfig.requestTagPrefix, t.tag].join(".") : t.tag || this.clientConfig.requestTagPrefix;
                c && (t.query = function (t) {
                   for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {};
                      e % 2 ? n(Object(r), !0).forEach((function (e) {
                         var n, o;
                         n = t, o = r[e], e in n ? Object.defineProperty(n, e, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                         }) : n[e] = o
                      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach((function (e) {
                         Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                      }))
                   }
                   return t
                }({
                   tag: _.requestTag(c)
                }, t.query));
                var u = g(this.clientConfig, o({}, t, {
                   url: this.getUrl(r, a)
                }));
                return new s((function (t) {
                   return v(u, e.clientConfig.requester).subscribe(t)
                }))
             },
             request: function (t) {
                var e = this._requestObservable(t).pipe(c((function (t) {
                   return "response" === t.type
                })), a((function (t) {
                   return t.body
                })));
                return this.isPromiseAPI() ? e.toPromise() : e
             }
          }), E.Patch = u, E.Transaction = f, E.ClientError = v.ClientError, E.ServerError = v.ServerError, E.requester = v.defaultRequester, t.exports = E
       },
       26545: function (t, e, r) {
          "use strict";
 
          function n(t) {
             this.client = t
          }
          r(98329)(n.prototype, {
             getById: function (t) {
                return this.client.request({
                   uri: "/users/".concat(t)
                })
             }
          }), t.exports = n
       },
       55108: function (t) {
          "use strict";
          t.exports = function (t, e) {
             return Object.keys(e).concat(Object.keys(t)).reduce((function (r, n) {
                return r[n] = void 0 === t[n] ? e[n] : t[n], r
             }), {})
          }
       },
       8911: function (t) {
          "use strict";
          t.exports = function (t) {
             if ("string" == typeof t || Array.isArray(t)) return {
                id: t
             };
             if (t && t.query) return "params" in t ? {
                query: t.query,
                params: t.params
             } : {
                query: t.query
             };
             throw Error("Unknown selection - must be one of:\n\n".concat("* Document ID (<docId>)\n* Array of document IDs\n* Object containing `query`"))
          }
       },
       30540: function (t, e, r) {
          "use strict";
          var n = r(90914).Observable,
             o = r(17951).filter,
             i = r(99563).map;
          t.exports = {
             Observable: n,
             filter: o,
             map: i
          }
       },
       19567: function (t) {
          "use strict";
          t.exports = function (t) {
             var e, r = !1;
             return function () {
                return r || (e = t.apply(void 0, arguments), r = !0), e
             }
          }
       },
       99952: function (t) {
          "use strict";
          t.exports = function (t, e) {
             return e.reduce((function (e, r) {
                return void 0 === t[r] || (e[r] = t[r]), e
             }), {})
          }
       },
       3351: function (t, e) {
          "use strict";
 
          function r(t) {
             return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
             } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
             })(t)
          }
          var n = ["image", "file"],
             o = ["before", "after", "replace"];
          e.dataset = function (t) {
             if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(t)) throw Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
          }, e.projectId = function (t) {
             if (!/^[-a-z0-9]+$/i.test(t)) throw Error("`projectId` can only contain only a-z, 0-9 and dashes")
          }, e.validateAssetType = function (t) {
             if (-1 === n.indexOf(t)) throw Error("Invalid asset type: ".concat(t, ". Must be one of ").concat(n.join(", ")))
          }, e.validateObject = function (t, e) {
             if (null === e || "object" !== r(e) || Array.isArray(e)) throw Error("".concat(t, "() takes an object of properties"))
          }, e.requireDocumentId = function (t, r) {
             if (!r._id) throw Error("".concat(t, '() requires that the document contains an ID ("_id" property)'));
             e.validateDocumentId(t, r._id)
          }, e.validateDocumentId = function (t, e) {
             if ("string" != typeof e || !/^[a-z0-9_.-]+$/i.test(e)) throw Error("".concat(t, '(): "').concat(e, '" is not a valid document ID'))
          }, e.validateInsert = function (t, e, r) {
             var n = "insert(at, selector, items)";
             if (-1 === o.indexOf(t)) {
                var i = o.map((function (t) {
                   return '"'.concat(t, '"')
                })).join(", ");
                throw Error("".concat(n, ' takes an "at"-argument which is one of: ').concat(i))
             }
             if ("string" != typeof e) throw Error("".concat(n, ' takes a "selector"-argument which must be a string'));
             if (!Array.isArray(r)) throw Error("".concat(n, ' takes an "items"-argument which must be an array'))
          }, e.hasDataset = function (t) {
             if (!t.dataset) throw Error("`dataset` must be provided to perform queries");
             return t.dataset || ""
          }, e.requestTag = function (t) {
             if ("string" != typeof t || !/^[a-z0-9._-]{1,75}$/i.test(t)) throw Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
             return t
          }
       },
       68380: function (t, e, r) {
          "use strict";
          var n = r(18045),
             o = r(19567),
             i = function (t) {
                return o((function () {
                   for (var e, r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                   return (e = console).warn.apply(e, [t.join(" ")].concat(n))
                }))
             };
          e.printCdnWarning = i(["You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and", "cheaper. Think about it! For more info, see ".concat(n("js-client-cdn-configuration"), "."), "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating", "the client."]), e.printBrowserTokenWarning = i(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", "See ".concat(n("js-client-browser-token"), " for more information and how to hide this warning.")]), e.printNoApiVersionSpecifiedWarning = i(["Using the Sanity client without specifying an API version is deprecated.", "See ".concat(n("js-client-api-version"))])
       },
       34948: function (t, e, r) {
          var n = r(68685);
          t.exports = n.EventSourcePolyfill
       },
       60713: function (t) {
          t.exports = function () {
             function t() {
                return (t = Object.assign || function (t) {
                   for (var e = 1; e < arguments.length; e++) {
                      var r = arguments[e];
                      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                   }
                   return t
                }).apply(this, arguments)
             }
 
             function e(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                return n
             }
             var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
 
             function n(t) {
                return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
             }
             var o = [
                   ["width", "w"],
                   ["height", "h"],
                   ["format", "fm"],
                   ["download", "dl"],
                   ["blur", "blur"],
                   ["sharpen", "sharp"],
                   ["invert", "invert"],
                   ["orientation", "or"],
                   ["minHeight", "min-h"],
                   ["maxHeight", "max-h"],
                   ["minWidth", "min-w"],
                   ["maxWidth", "max-w"],
                   ["quality", "q"],
                   ["fit", "fit"],
                   ["crop", "crop"],
                   ["saturation", "sat"],
                   ["auto", "auto"],
                   ["dpr", "dpr"],
                   ["pad", "pad"]
                ],
                i = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
                s = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
                a = ["format"],
                c = function () {
                   function c(e, r) {
                      this.options = t(e ? t({}, e.options || {}) : {}, r || {})
                   }
                   var u = c.prototype;
                   return u.withOptions = function (r) {
                      var n = r.baseUrl || this.options.baseUrl,
                         i = {
                            baseUrl: n
                         };
                      for (var s in r) r.hasOwnProperty(s) && (i[function (t) {
                         for (var r, n = function (t) {
                               var r = 0;
                               if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                                  if (Array.isArray(t) || (t = function (t, r) {
                                        if (t) {
                                           if ("string" == typeof t) return e(t, r);
                                           var n = Object.prototype.toString.call(t).slice(8, -1);
                                           if ("Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n) return Array.from(t);
                                           if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return e(t, r)
                                        }
                                     }(t))) return function () {
                                     return r >= t.length ? {
                                        done: !0
                                     } : {
                                        done: !1,
                                        value: t[r++]
                                     }
                                  };
                                  throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                               }
                               return (r = t[Symbol.iterator]()).next.bind(r)
                            }(o); !(r = n()).done;) {
                            var i = r.value,
                               s = i[0],
                               a = i[1];
                            if (t === s || t === a) return s
                         }
                         return t
                      }(s)] = r[s]);
                      return new c(this, t({
                         baseUrl: n
                      }, i))
                   }, u.image = function (t) {
                      return this.withOptions({
                         source: t
                      })
                   }, u.dataset = function (t) {
                      return this.withOptions({
                         dataset: t
                      })
                   }, u.projectId = function (t) {
                      return this.withOptions({
                         projectId: t
                      })
                   }, u.bg = function (t) {
                      return this.withOptions({
                         bg: t
                      })
                   }, u.dpr = function (t) {
                      return this.withOptions({
                         dpr: t
                      })
                   }, u.width = function (t) {
                      return this.withOptions({
                         width: t
                      })
                   }, u.height = function (t) {
                      return this.withOptions({
                         height: t
                      })
                   }, u.focalPoint = function (t, e) {
                      return this.withOptions({
                         focalPoint: {
                            x: t,
                            y: e
                         }
                      })
                   }, u.maxWidth = function (t) {
                      return this.withOptions({
                         maxWidth: t
                      })
                   }, u.minWidth = function (t) {
                      return this.withOptions({
                         minWidth: t
                      })
                   }, u.maxHeight = function (t) {
                      return this.withOptions({
                         maxHeight: t
                      })
                   }, u.minHeight = function (t) {
                      return this.withOptions({
                         minHeight: t
                      })
                   }, u.size = function (t, e) {
                      return this.withOptions({
                         width: t,
                         height: e
                      })
                   }, u.blur = function (t) {
                      return this.withOptions({
                         blur: t
                      })
                   }, u.sharpen = function (t) {
                      return this.withOptions({
                         sharpen: t
                      })
                   }, u.rect = function (t, e, r, n) {
                      return this.withOptions({
                         rect: {
                            left: t,
                            top: e,
                            width: r,
                            height: n
                         }
                      })
                   }, u.format = function (t) {
                      return this.withOptions({
                         format: t
                      })
                   }, u.invert = function (t) {
                      return this.withOptions({
                         invert: t
                      })
                   }, u.orientation = function (t) {
                      return this.withOptions({
                         orientation: t
                      })
                   }, u.quality = function (t) {
                      return this.withOptions({
                         quality: t
                      })
                   }, u.forceDownload = function (t) {
                      return this.withOptions({
                         download: t
                      })
                   }, u.flipHorizontal = function () {
                      return this.withOptions({
                         flipHorizontal: !0
                      })
                   }, u.flipVertical = function () {
                      return this.withOptions({
                         flipVertical: !0
                      })
                   }, u.ignoreImageParams = function () {
                      return this.withOptions({
                         ignoreImageParams: !0
                      })
                   }, u.fit = function (t) {
                      if (-1 === i.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                      return this.withOptions({
                         fit: t
                      })
                   }, u.crop = function (t) {
                      if (-1 === s.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
                      return this.withOptions({
                         crop: t
                      })
                   }, u.saturation = function (t) {
                      return this.withOptions({
                         saturation: t
                      })
                   }, u.auto = function (t) {
                      if (-1 === a.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
                      return this.withOptions({
                         auto: t
                      })
                   }, u.pad = function (t) {
                      return this.withOptions({
                         pad: t
                      })
                   }, u.url = function () {
                      return function (e) {
                         var i = t({}, e || {}),
                            s = i.source;
                         delete i.source;
                         var a = function (e) {
                            var r;
                            if (!e) return null;
                            if ("string" == typeof e && /^https?:\/\//.test("" + e)) r = {
                               asset: {
                                  _ref: n(e)
                               }
                            };
                            else if ("string" == typeof e) r = {
                               asset: {
                                  _ref: e
                               }
                            };
                            else if (e && "string" == typeof e._ref) r = {
                               asset: e
                            };
                            else if (e && "string" == typeof e._id) r = {
                               asset: {
                                  _ref: e._id || ""
                               }
                            };
                            else if (e && e.asset && "string" == typeof e.asset.url) r = {
                               asset: {
                                  _ref: n(e.asset.url)
                               }
                            };
                            else {
                               if ("object" != typeof e.asset) return null;
                               r = e
                            }
                            return e.crop && (r.crop = e.crop), e.hotspot && (r.hotspot = e.hotspot),
                               function (e) {
                                  if (e.crop && e.hotspot) return e;
                                  var r = t({}, e);
                                  return r.crop || (r.crop = {
                                     left: 0,
                                     top: 0,
                                     bottom: 0,
                                     right: 0
                                  }), r.hotspot || (r.hotspot = {
                                     x: .5,
                                     y: .5,
                                     height: 1,
                                     width: 1
                                  }), r
                               }(r)
                         }(s);
                         if (!a) return null;
                         var c = function (t) {
                               var e = t.split("-"),
                                  n = e[1],
                                  o = e[2],
                                  i = e[3];
                               if (!n || !o || !i) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                               var s = o.split("x"),
                                  a = +s[0],
                                  c = +s[1];
                               if (!isFinite(a) || !isFinite(c)) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                               return {
                                  id: n,
                                  width: a,
                                  height: c,
                                  format: i
                               }
                            }(a.asset._ref || a.asset._id || ""),
                            u = Math.round(a.crop.left * c.width),
                            f = Math.round(a.crop.top * c.height),
                            l = {
                               left: u,
                               top: f,
                               width: Math.round(c.width - a.crop.right * c.width - u),
                               height: Math.round(c.height - a.crop.bottom * c.height - f)
                            },
                            p = a.hotspot.height * c.height / 2,
                            h = a.hotspot.width * c.width / 2,
                            d = a.hotspot.x * c.width,
                            y = a.hotspot.y * c.height;
                         return i.rect || i.focalPoint || i.ignoreImageParams || i.crop || (i = t(t({}, i), function (t, e) {
                               var r, n = e.width,
                                  o = e.height;
                               if (!n || !o) return {
                                  width: n,
                                  height: o,
                                  rect: t.crop
                               };
                               var i = t.crop,
                                  s = t.hotspot,
                                  a = n / o;
                               if (i.width / i.height > a) {
                                  var c = i.height,
                                     u = c * a,
                                     f = i.top,
                                     l = (s.right - s.left) / 2 + s.left - u / 2;
                                  l < i.left ? l = i.left : l + u > i.left + i.width && (l = i.left + i.width - u), r = {
                                     left: Math.round(l),
                                     top: Math.round(f),
                                     width: Math.round(u),
                                     height: Math.round(c)
                                  }
                               } else {
                                  var p = i.width,
                                     h = p / a,
                                     d = i.left,
                                     y = (s.bottom - s.top) / 2 + s.top - h / 2;
                                  y < i.top ? y = i.top : y + h > i.top + i.height && (y = i.top + i.height - h), r = {
                                     left: Math.max(0, Math.floor(d)),
                                     top: Math.max(0, Math.floor(y)),
                                     width: Math.round(p),
                                     height: Math.round(h)
                                  }
                               }
                               return {
                                  width: n,
                                  height: o,
                                  rect: r
                               }
                            }({
                               crop: l,
                               hotspot: {
                                  left: d - h,
                                  top: y - p,
                                  right: d + h,
                                  bottom: y + p
                               }
                            }, i))),
                            function (t) {
                               var e = t.baseUrl || "https://cdn.sanity.io",
                                  r = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format,
                                  n = e + "/images/" + t.projectId + "/" + t.dataset + "/" + r,
                                  i = [];
                               if (t.rect) {
                                  var s = t.rect,
                                     a = s.left,
                                     c = s.top,
                                     u = s.width,
                                     f = s.height;
                                  (0 !== a || 0 !== c || f !== t.asset.height || u !== t.asset.width) && i.push("rect=" + a + "," + c + "," + u + "," + f)
                               }
                               t.bg && i.push("bg=" + t.bg), t.focalPoint && (i.push("fp-x=" + t.focalPoint.x), i.push("fp-y=" + t.focalPoint.y));
                               var l = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                               return l && i.push("flip=" + l), o.forEach((function (e) {
                                  var r = e[0],
                                     n = e[1];
                                  void 0 !== t[r] ? i.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && i.push(n + "=" + encodeURIComponent(t[n]))
                               })), 0 === i.length ? n : n + "?" + i.join("&")
                            }(t(t({}, i), {}, {
                               asset: c
                            }))
                      }(this.options)
                   }, u.toString = function () {
                      return this.url()
                   }, c
                }();
             return function (t) {
                if (t && "object" == typeof t.clientConfig) {
                   var e = t.clientConfig,
                      r = e.apiHost,
                      n = e.projectId,
                      o = e.dataset;
                   return new c(null, {
                      baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                      projectId: n,
                      dataset: o
                   })
                }
                return new c(null, t)
             }
          }()
       },
       68685: function (t, e) {
          var r;
          /** @license
           * eventsource.js
           * Available under MIT License (MIT)
           * https://github.com/Yaffle/EventSource/
           */
          ! function (n) {
             "use strict";
             var o = n.setTimeout,
                i = n.clearTimeout,
                s = n.XMLHttpRequest,
                a = n.XDomainRequest,
                c = n.ActiveXObject,
                u = n.EventSource,
                f = n.document,
                l = n.Promise,
                p = n.fetch,
                h = n.Response,
                d = n.TextDecoder,
                y = n.TextEncoder,
                b = n.AbortController;
             if ("undefined" == typeof window || void 0 === f || "readyState" in f || null != f.body || (f.readyState = "loading", window.addEventListener("load", (function (t) {
                   f.readyState = "complete"
                }), !1)), null == s && null != c && (s = function () {
                   return new c("Microsoft.XMLHTTP")
                }), null == Object.create && (Object.create = function (t) {
                   function e() {}
                   return e.prototype = t, new e
                }), Date.now || (Date.now = function () {
                   return (new Date).getTime()
                }), null == b) {
                var v = p;
                p = function (t, e) {
                   var r = e.signal;
                   return v(t, {
                      headers: e.headers,
                      credentials: e.credentials,
                      cache: e.cache
                   }).then((function (t) {
                      var e = t.body.getReader();
                      return r._reader = e, r._aborted && r._reader.cancel(), {
                         status: t.status,
                         statusText: t.statusText,
                         headers: t.headers,
                         body: {
                            getReader: function () {
                               return e
                            }
                         }
                      }
                   }))
                }, b = function () {
                   this.signal = {
                      _reader: null,
                      _aborted: !1
                   }, this.abort = function () {
                      null != this.signal._reader && this.signal._reader.cancel(), this.signal._aborted = !0
                   }
                }
             }
 
             function g() {
                this.bitsNeeded = 0, this.codePoint = 0
             }
             g.prototype.decode = function (t) {
                function e(t, e, r) {
                   if (1 === r) return t >= 128 >> e && t << e <= 2047;
                   if (2 === r) return t >= 2048 >> e && t << e <= 55295 || t >= 57344 >> e && t << e <= 65535;
                   if (3 === r) return t >= 65536 >> e && t << e <= 1114111;
                   throw Error()
                }
 
                function r(t, e) {
                   if (6 === t) return e >> 6 > 15 ? 3 : e > 31 ? 2 : 1;
                   if (12 === t) return e > 15 ? 3 : 2;
                   if (18 === t) return 3;
                   throw Error()
                }
                for (var n = "", o = this.bitsNeeded, i = this.codePoint, s = 0; s < t.length; s += 1) {
                   var a = t[s];
                   0 !== o && (a < 128 || a > 191 || !e(i << 6 | 63 & a, o - 6, r(o, i))) && (o = 0, n += String.fromCharCode(i = 65533)), 0 === o ? (a >= 0 && a <= 127 ? (o = 0, i = a) : a >= 192 && a <= 223 ? (o = 6, i = 31 & a) : a >= 224 && a <= 239 ? (o = 12, i = 15 & a) : a >= 240 && a <= 247 ? (o = 18, i = 7 & a) : (o = 0, i = 65533), 0 === o || e(i, o, r(o, i)) || (o = 0, i = 65533)) : (o -= 6, i = i << 6 | 63 & a), 0 === o && (n += i <= 65535 ? String.fromCharCode(i) : String.fromCharCode(55296 + (i - 65535 - 1 >> 10)) + String.fromCharCode(56320 + (i - 65535 - 1 & 1023)))
                }
                return this.bitsNeeded = o, this.codePoint = i, n
             }, (null == d || null == y || ! function () {
                try {
                   return "test" === (new d).decode((new y).encode("test"), {
                      stream: !0
                   })
                } catch (t) {
                   console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + t)
                }
                return !1
             }()) && (d = g);
             var m = function () {};
 
             function w(t) {
                this.withCredentials = !1, this.readyState = 0, this.status = 0, this.statusText = "", this.responseText = "", this.onprogress = m, this.onload = m, this.onerror = m, this.onreadystatechange = m, this._contentType = "", this._xhr = t, this._sendTimeout = 0, this._abort = m
             }
 
             function O(t) {
                return t.replace(/[A-Z]/g, (function (t) {
                   return String.fromCharCode(t.charCodeAt(0) + 32)
                }))
             }
 
             function _(t) {
                for (var e = Object.create(null), r = t.split("\r\n"), n = 0; n < r.length; n += 1) {
                   var o = r[n].split(": "),
                      i = o.shift(),
                      s = o.join(": ");
                   e[O(i)] = s
                }
                this._map = e
             }
 
             function E() {}
 
             function x(t) {
                this._headers = t
             }
 
             function j() {}
 
             function S() {
                this._listeners = Object.create(null)
             }
 
             function C(t) {
                o((function () {
                   throw t
                }), 0)
             }
 
             function P(t) {
                this.type = t, this.target = void 0
             }
 
             function I(t, e) {
                P.call(this, t), this.data = e.data, this.lastEventId = e.lastEventId
             }
 
             function T(t, e) {
                P.call(this, t), this.status = e.status, this.statusText = e.statusText, this.headers = e.headers
             }
 
             function R(t, e) {
                P.call(this, t), this.error = e.error
             }
             w.prototype.open = function (t, e) {
                this._abort(!0);
                var r = this,
                   n = this._xhr,
                   a = 1,
                   c = 0;
                this._abort = function (t) {
                   0 !== r._sendTimeout && (i(r._sendTimeout), r._sendTimeout = 0), 1 !== a && 2 !== a && 3 !== a || (a = 4, n.onload = m, n.onerror = m, n.onabort = m, n.onprogress = m, n.onreadystatechange = m, n.abort(), 0 !== c && (i(c), c = 0), t || (r.readyState = 4, r.onabort(null), r.onreadystatechange())), a = 0
                };
                var u = function () {
                      if (1 === a) {
                         var t = 0,
                            e = "",
                            o = void 0;
                         if ("contentType" in n) t = 200, e = "OK", o = n.contentType;
                         else try {
                            t = n.status, e = n.statusText, o = n.getResponseHeader("Content-Type")
                         } catch (r) {
                            t = 0, e = "", o = void 0
                         }
                         0 !== t && (a = 2, r.readyState = 2, r.status = t, r.statusText = e, r._contentType = o, r.onreadystatechange())
                      }
                   },
                   f = function () {
                      if (u(), 2 === a || 3 === a) {
                         a = 3;
                         var t = "";
                         try {
                            t = n.responseText
                         } catch (t) {}
                         r.readyState = 3, r.responseText = t, r.onprogress()
                      }
                   },
                   l = function (t, e) {
                      if ((null == e || null == e.preventDefault) && (e = {
                            preventDefault: m
                         }), f(), 1 === a || 2 === a || 3 === a) {
                         if (a = 4, 0 !== c && (i(c), c = 0), r.readyState = 4, "load" === t) r.onload(e);
                         else if ("error" === t) r.onerror(e);
                         else {
                            if ("abort" !== t) throw TypeError();
                            r.onabort(e)
                         }
                         r.onreadystatechange()
                      }
                   },
                   p = function () {
                      c = o((function () {
                         p()
                      }), 500), 3 === n.readyState && f()
                   };
                "onload" in n && (n.onload = function (t) {
                   l("load", t)
                }), "onerror" in n && (n.onerror = function (t) {
                   l("error", t)
                }), "onabort" in n && (n.onabort = function (t) {
                   l("abort", t)
                }), "onprogress" in n && (n.onprogress = f), "onreadystatechange" in n && (n.onreadystatechange = function (t) {
                   ! function (t) {
                      null == n || (4 === n.readyState ? "onload" in n && "onerror" in n && "onabort" in n || l("" === n.responseText ? "error" : "load", t) : 3 === n.readyState ? "onprogress" in n || f() : 2 === n.readyState && u())
                   }(t)
                }), ("contentType" in n || !("ontimeout" in s.prototype)) && (e += (-1 === e.indexOf("?") ? "?" : "&") + "padding=true"), n.open(t, e, !0), "readyState" in n && (c = o((function () {
                   p()
                }), 0))
             }, w.prototype.abort = function () {
                this._abort(!1)
             }, w.prototype.getResponseHeader = function (t) {
                return this._contentType
             }, w.prototype.setRequestHeader = function (t, e) {
                var r = this._xhr;
                "setRequestHeader" in r && r.setRequestHeader(t, e)
             }, w.prototype.getAllResponseHeaders = function () {
                return null != this._xhr.getAllResponseHeaders && this._xhr.getAllResponseHeaders() || ""
             }, w.prototype.send = function () {
                if ("ontimeout" in s.prototype && ("sendAsBinary" in s.prototype || "mozAnon" in s.prototype) || null == f || null == f.readyState || "complete" === f.readyState) {
                   var t = this._xhr;
                   "withCredentials" in t && (t.withCredentials = this.withCredentials);
                   try {
                      t.send(void 0)
                   } catch (e) {
                      throw e
                   }
                } else {
                   var e = this;
                   e._sendTimeout = o((function () {
                      e._sendTimeout = 0, e.send()
                   }), 4)
                }
             }, _.prototype.get = function (t) {
                return this._map[O(t)]
             }, null != s && null == s.HEADERS_RECEIVED && (s.HEADERS_RECEIVED = 2), E.prototype.open = function (t, e, r, n, o, i, a) {
                t.open("GET", o);
                var c = 0;
                for (var u in t.onprogress = function () {
                      var e = t.responseText.slice(c);
                      c += e.length, r(e)
                   }, t.onerror = function (t) {
                      t.preventDefault(), n(Error("NetworkError"))
                   }, t.onload = function () {
                      n(null)
                   }, t.onabort = function () {
                      n(null)
                   }, t.onreadystatechange = function () {
                      if (t.readyState === s.HEADERS_RECEIVED) {
                         var r = t.status,
                            n = t.statusText,
                            o = t.getResponseHeader("Content-Type"),
                            i = t.getAllResponseHeaders();
                         e(r, n, o, new _(i))
                      }
                   }, t.withCredentials = i, a) Object.prototype.hasOwnProperty.call(a, u) && t.setRequestHeader(u, a[u]);
                return t.send(), t
             }, x.prototype.get = function (t) {
                return this._headers.get(t)
             }, j.prototype.open = function (t, e, r, n, o, i, s) {
                var a = null,
                   c = new b,
                   u = c.signal,
                   f = new d;
                return p(o, {
                   headers: s,
                   credentials: i ? "include" : "same-origin",
                   signal: u,
                   cache: "no-store"
                }).then((function (t) {
                   return a = t.body.getReader(), e(t.status, t.statusText, t.headers.get("Content-Type"), new x(t.headers)), new l((function (t, e) {
                      var n = function () {
                         a.read().then((function (e) {
                            e.done ? t(void 0) : (r(f.decode(e.value, {
                               stream: !0
                            })), n())
                         })).catch((function (t) {
                            e(t)
                         }))
                      };
                      n()
                   }))
                })).catch((function (t) {
                   if ("AbortError" !== t.name) return t
                })).then((function (t) {
                   n(t)
                })), {
                   abort: function () {
                      null != a && a.cancel(), c.abort()
                   }
                }
             }, S.prototype.dispatchEvent = function (t) {
                t.target = this;
                var e = this._listeners[t.type];
                if (null != e)
                   for (var r = e.length, n = 0; n < r; n += 1) {
                      var o = e[n];
                      try {
                         "function" == typeof o.handleEvent ? o.handleEvent(t) : o.call(this, t)
                      } catch (t) {
                         C(t)
                      }
                   }
             }, S.prototype.addEventListener = function (t, e) {
                t = String(t);
                var r = this._listeners,
                   n = r[t];
                null == n && (n = [], r[t] = n);
                for (var o = !1, i = 0; i < n.length; i += 1) n[i] === e && (o = !0);
                o || n.push(e)
             }, S.prototype.removeEventListener = function (t, e) {
                t = String(t);
                var r = this._listeners,
                   n = r[t];
                if (null != n) {
                   for (var o = [], i = 0; i < n.length; i += 1) n[i] !== e && o.push(n[i]);
                   0 === o.length ? delete r[t] : r[t] = o
                }
             }, I.prototype = Object.create(P.prototype), T.prototype = Object.create(P.prototype), R.prototype = Object.create(P.prototype);
             var A = /^text\/event\-stream(;.*)?$/i,
                q = function (t, e) {
                   var r = null == t ? e : parseInt(t, 10);
                   return r != r && (r = e), D(r)
                },
                D = function (t) {
                   return Math.min(Math.max(t, 1e3), 18e6)
                },
                U = function (t, e, r) {
                   try {
                      "function" == typeof e && e.call(t, r)
                   } catch (t) {
                      C(t)
                   }
                };
 
             function k(t, e) {
                var r, n, c, u, f, l, p, h, d, y, b, v, g, m, O, _, x, C, P, k, H, N, z, L, V, $, B, F, X, W;
                S.call(this), e = e || {}, this.onopen = void 0, this.onmessage = void 0, this.onerror = void 0, this.url = void 0, this.readyState = void 0, this.withCredentials = void 0, this.headers = void 0, this._close = void 0, r = this, n = t, c = e, n = String(n), u = Boolean(c.withCredentials), f = c.lastEventIdQueryParameterName || "lastEventId", l = D(1e3), p = q(c.heartbeatTimeout, 45e3), h = "", d = l, y = !1, b = 0, v = c.headers || {}, g = c.Transport, m = M && null == g ? void 0 : new w(null != g ? new g : null != s && "withCredentials" in s.prototype || null == a ? new s : new a), O = null != g && "string" != typeof g ? new g : null == m ? new j : new E, _ = void 0, x = 0, C = -1, P = "", k = "", H = "", N = "", z = 0, L = 0, V = 0, $ = function (t, e, n, o) {
                   if (0 === C)
                      if (200 === t && null != n && A.test(n)) {
                         C = 1, y = Date.now(), d = l, r.readyState = 1;
                         var i = new T("open", {
                            status: t,
                            statusText: e,
                            headers: o
                         });
                         r.dispatchEvent(i), U(r, r.onopen, i)
                      } else {
                         var s = "";
                         200 !== t ? (e && (e = e.replace(/\s+/g, " ")), s = "EventSource's response has a status " + t + " " + e + " that is not 200. Aborting the connection.") : s = "EventSource's response has a Content-Type specifying an unsupported type: " + (null == n ? "-" : n.replace(/\s+/g, " ")) + ". Aborting the connection.", X();
                         i = new T("error", {
                            status: t,
                            statusText: e,
                            headers: o
                         });
                         r.dispatchEvent(i), U(r, r.onerror, i), console.error(s)
                      }
                }, B = function (t) {
                   if (1 === C) {
                      for (var e = -1, n = 0; n < t.length; n += 1) {
                         (10 === (c = t.charCodeAt(n)) || 13 === c) && (e = n)
                      }
                      var s = (-1 !== e ? N : "") + t.slice(0, e + 1);
                      N = (-1 === e ? N : "") + t.slice(e + 1), "" !== t && (y = Date.now(), b += t.length);
                      for (var a = 0; a < s.length; a += 1) {
                         var c = s.charCodeAt(a);
                         if (-1 === z && 10 === c) z = 0;
                         else if (-1 === z && (z = 0), 13 === c || 10 === c) {
                            if (0 !== z) {
                               1 === z && (V = a + 1);
                               var u = s.slice(L, V - 1),
                                  f = s.slice(V + (V < a && 32 === s.charCodeAt(V) ? 1 : 0), a);
                               "data" === u ? P += "\n" + f : "id" === u ? k = f : "event" === u ? H = f : "retry" === u ? d = l = q(f, l) : "heartbeatTimeout" === u && (p = q(f, p), 0 !== x && (i(x), x = o((function () {
                                  W()
                               }), p)))
                            }
                            if (0 === z) {
                               if ("" !== P) {
                                  h = k, "" === H && (H = "message");
                                  var v = new I(H, {
                                     data: P.slice(1),
                                     lastEventId: k
                                  });
                                  if (r.dispatchEvent(v), "open" === H ? U(r, r.onopen, v) : "message" === H ? U(r, r.onmessage, v) : "error" === H && U(r, r.onerror, v), 2 === C) return
                               }
                               P = "", H = ""
                            }
                            z = 13 === c ? -1 : 0
                         } else 0 === z && (L = a, z = 1), 1 === z ? 58 === c && (V = a + 1, z = 2) : 2 === z && (z = 3)
                      }
                   }
                }, F = function (t) {
                   if (1 === C || 0 === C) {
                      C = -1, 0 !== x && (i(x), x = 0), x = o((function () {
                         W()
                      }), d), d = D(Math.min(16 * l, 2 * d)), r.readyState = 0;
                      var e = new R("error", {
                         error: t
                      });
                      r.dispatchEvent(e), U(r, r.onerror, e), null != t && console.error(t)
                   }
                }, X = function () {
                   C = 2, null != _ && (_.abort(), _ = void 0), 0 !== x && (i(x), x = 0), r.readyState = 2
                }, W = function () {
                   if (x = 0, -1 === C) {
                      y = !1, b = 0, x = o((function () {
                         W()
                      }), p), C = 0, P = "", H = "", k = h, N = "", L = 0, V = 0, z = 0;
                      var t = n;
                      if ("data:" !== n.slice(0, 5) && "blob:" !== n.slice(0, 5) && "" !== h) {
                         var e = n.indexOf("?");
                         t = (-1 === e ? n : n.slice(0, e + 1) + n.slice(e + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, (function (t, e) {
                            return e === f ? "" : t
                         }))) + (-1 === n.indexOf("?") ? "?" : "&") + f + "=" + encodeURIComponent(h)
                      }
                      var i = r.withCredentials,
                         s = {
                            Accept: "text/event-stream"
                         },
                         a = r.headers;
                      if (null != a)
                         for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (s[c] = a[c]);
                      try {
                         _ = O.open(m, $, B, F, t, i, s)
                      } catch (u) {
                         throw X(), u
                      }
                   } else if (y || null == _) {
                      var u = Math.max((y || Date.now()) + p - Date.now(), 1);
                      y = !1, x = o((function () {
                         W()
                      }), u)
                   } else F(Error("No activity within " + p + " milliseconds. " + (0 === C ? "No response received." : b + " chars received.") + " Reconnecting.")), null != _ && (_.abort(), _ = void 0)
                }, r.url = n, r.readyState = 0, r.withCredentials = u, r.headers = v, r._close = X, W()
             }
             var M = null != p && null != h && "body" in h.prototype;
             k.prototype = Object.create(S.prototype), k.prototype.CONNECTING = 0, k.prototype.OPEN = 1, k.prototype.CLOSED = 2, k.prototype.close = function () {
                this._close()
             }, k.CONNECTING = 0, k.OPEN = 1, k.CLOSED = 2, k.prototype.withCredentials = void 0;
             var H = u;
             null == s || null != u && "withCredentials" in u.prototype || (H = k),
                function (n) {
                   if ("object" == typeof t.exports) {
                      var o = n(e);
                      void 0 !== o && (t.exports = o)
                   } else void 0 !== (r = n.apply(e, [e])) && (t.exports = r)
                }((function (t) {
                   t.EventSourcePolyfill = k, t.NativeEventSource = u, t.EventSource = H
                }))
          }("undefined" == typeof globalThis ? "undefined" != typeof window ? window : "undefined" != typeof self ? self : this : globalThis)
       },
       25088: function (t, e, r) {
          t.exports = r(46288)
       },
       46288: function (t, e, r) {
          "use strict";
          var n = r(93337),
             o = r(39186),
             i = r(94868),
             s = r(65312),
             a = r(80818),
             c = ["request", "response", "progress", "error", "abort"],
             u = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
          t.exports = function t() {
             var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a,
                f = [],
                l = u.reduce((function (t, e) {
                   return t[e] = t[e] || [], t
                }), {
                   processOptions: [i],
                   validateOptions: [s]
                });
 
             function p(t) {
                var e = c.reduce((function (t, e) {
                      return t[e] = n(), t
                   }), {}),
                   i = o(l),
                   s = i("processOptions", t);
                i("validateOptions", s);
                var a = {
                      options: s,
                      channels: e,
                      applyMiddleware: i
                   },
                   u = null,
                   f = e.request.subscribe((function (t) {
                      u = r(t, (function (r, n) {
                         return function (t, r, n) {
                            var o = t,
                               s = r;
                            if (!o) try {
                               s = i("onResponse", r, n)
                            } catch (t) {
                               s = null, o = t
                            }(o = o && i("onError", o, n)) ? e.error.publish(o) : s && e.response.publish(s)
                         }(r, n, t)
                      }))
                   }));
                e.abort.subscribe((function () {
                   f(), u && u.abort()
                }));
                var p = i("onReturn", e, a);
                return p === e && e.request.publish(a), p
             }
             return p.use = function (t) {
                if (!t) throw Error("Tried to add middleware that resolved to falsey value");
                if ("function" == typeof t) throw Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
                if (t.onReturn && l.onReturn.length > 0) throw Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
                return u.forEach((function (e) {
                   t[e] && l[e].push(t[e])
                })), f.push(t), p
             }, p.clone = function () {
                return t(f)
             }, e.forEach(p.use), p
          }
       },
       94868: function (t, e, r) {
          "use strict";
          var n = r(98329),
             o = r(86566),
             i = "undefined" != typeof navigator && "ReactNative" === navigator.product,
             s = Object.prototype.hasOwnProperty,
             a = {
                timeout: i ? 6e4 : 12e4
             };
 
          function c(t) {
             var e = [];
             for (var r in t) s.call(t, r) && function t(r, n) {
                Array.isArray(n) ? n.forEach((function (e) {
                   return t(r, e)
                })) : e.push([r, n].map(encodeURIComponent).join("="))
             }(r, t[r]);
             return e.length ? e.join("&") : ""
          }
          t.exports = function (t) {
             var e = "string" == typeof t ? n({
                   url: t
                }, a) : n({}, a, t),
                r = o(e.url, {}, !0);
             return e.timeout = function t(e) {
                if (!1 === e || 0 === e) return !1;
                if (e.connect || e.socket) return e;
                var r = Number(e);
                return isNaN(r) ? t(a.timeout) : {
                   connect: r,
                   socket: r
                }
             }(e.timeout), e.query && (r.query = n({}, r.query, function (t) {
                var e = {};
                for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
                return e
             }(e.query))), e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e.url = r.toString(c), e
          }
       },
       65312: function (t) {
          "use strict";
          var e = /^https?:\/\//i;
          t.exports = function (t) {
             if (!e.test(t.url)) throw Error('"'.concat(t.url, '" is not a valid URL'))
          }
       },
       87918: function (t, e, r) {
          "use strict";
 
          function n(t) {
             return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
             } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
             })(t)
          }
          var o = r(98329),
             i = r(73951),
             s = ["boolean", "string", "number"];
          t.exports = function () {
             return {
                processOptions: function (t) {
                   var e = t.body;
                   return !e || "function" == typeof e.pipe || e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) || -1 === s.indexOf(n(e)) && !Array.isArray(e) && !i(e) ? t : o({}, t, {
                      body: JSON.stringify(t.body),
                      headers: o({}, t.headers, {
                         "Content-Type": "application/json"
                      })
                   })
                }
             }
          }
       },
       25079: function (t, e, r) {
          "use strict";
          var n = r(98329);
          t.exports = function (t) {
             return {
                onResponse: function (e) {
                   var r = e.headers["content-type"] || "",
                      o = t && t.force || -1 !== r.indexOf("application/json");
                   return e.body && r && o ? n({}, e, {
                      body: function (t) {
                         try {
                            return JSON.parse(t)
                         } catch (t) {
                            throw t.message = "Failed to parsed response body as JSON: ".concat(t.message), t
                         }
                      }(e.body)
                   }) : e
                },
                processOptions: function (t) {
                   return n({}, t, {
                      headers: n({
                         Accept: "application/json"
                      }, t.headers)
                   })
                }
             }
          }
       },
       17902: function (t, e, r) {
          "use strict";
          var n = r(7105),
             o = r(98329);
          t.exports = function () {
             var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).implementation || n.Observable;
             if (!t) throw Error("`Observable` is not available in global scope, and no implementation was passed");
             return {
                onReturn: function (e, r) {
                   return new t((function (t) {
                      return e.error.subscribe((function (e) {
                            return t.error(e)
                         })), e.progress.subscribe((function (e) {
                            return t.next(o({
                               type: "progress"
                            }, e))
                         })), e.response.subscribe((function (e) {
                            t.next(o({
                               type: "response"
                            }, e)), t.complete()
                         })), e.request.publish(r),
                         function () {
                            return e.abort.publish()
                         }
                   }))
                }
             }
          }
       },
       34643: function (t) {
          "use strict";
          t.exports = function () {
             return {
                onRequest: function (t) {
                   if ("xhr" === t.adapter) {
                      var e = t.request,
                         r = t.context;
                      "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")), "onprogress" in e && (e.onprogress = n("download"))
                   }
 
                   function n(t) {
                      return function (e) {
                         var n = e.lengthComputable ? e.loaded / e.total * 100 : -1;
                         r.channels.progress.publish({
                            stage: t,
                            percent: n,
                            total: e.total,
                            loaded: e.loaded,
                            lengthComputable: e.lengthComputable
                         })
                      }
                   }
                }
             }
          }
       },
       89031: function (t, e, r) {
          "use strict";
          t.exports = r(34643)
       },
       93572: function (t, e, r) {
          "use strict";
          var n = r(4036),
             o = r(17809),
             i = r(13474),
             s = "undefined" == typeof window ? void 0 : window,
             a = s ? "xhr" : "fetch",
             c = "function" == typeof XMLHttpRequest ? XMLHttpRequest : function () {},
             u = "withCredentials" in new c,
             f = "undefined" == typeof XDomainRequest ? void 0 : XDomainRequest,
             l = u ? c : f;
          s || (c = i, l = i), t.exports = function (t, e) {
             var r = t.options,
                i = t.applyMiddleware("finalizeOptions", r),
                u = {},
                f = s && s.location && !n(s.location.href, i.url),
                p = t.applyMiddleware("interceptRequest", void 0, {
                   adapter: a,
                   context: t
                });
             if (p) {
                var h = setTimeout(e, 0, null, p);
                return {
                   abort: function () {
                      return clearTimeout(h)
                   }
                }
             }
             var d = f ? new l : new c,
                y = s && s.XDomainRequest && d instanceof s.XDomainRequest,
                b = i.headers,
                v = i.timeout,
                g = !1,
                m = !1,
                w = !1;
             if (d.onerror = x, d.ontimeout = x, d.onabort = function () {
                   E(!0), g = !0
                }, d.onprogress = function () {}, d[y ? "onload" : "onreadystatechange"] = function () {
                   v && (E(), u.socket = setTimeout((function () {
                      return _("ESOCKETTIMEDOUT")
                   }), v.socket)), !g && (4 === d.readyState || y) && 0 !== d.status && function () {
                      if (!g && !m && !w) {
                         if (0 === d.status) return void x(Error("Unknown XHR error"));
                         E(), m = !0, e(null, function () {
                            var t = d.status,
                               e = d.statusText;
                            if (y && void 0 === t) t = 200;
                            else {
                               if (t > 12e3 && t < 12156) return x();
                               t = 1223 === d.status ? 204 : d.status, e = 1223 === d.status ? "No Content" : e
                            }
                            return {
                               body: d.response || d.responseText,
                               url: i.url,
                               method: i.method,
                               headers: y ? {} : o(d.getAllResponseHeaders()),
                               statusCode: t,
                               statusMessage: e
                            }
                         }())
                      }
                   }()
                }, d.open(i.method, i.url, !0), d.withCredentials = !!i.withCredentials, b && d.setRequestHeader)
                for (var O in b) b.hasOwnProperty(O) && d.setRequestHeader(O, b[O]);
             else if (b && y) throw Error("Headers cannot be set on an XDomainRequest object");
             return i.rawBody && (d.responseType = "arraybuffer"), t.applyMiddleware("onRequest", {
                options: i,
                adapter: a,
                request: d,
                context: t
             }), d.send(i.body || null), v && (u.connect = setTimeout((function () {
                return _("ETIMEDOUT")
             }), v.connect)), {
                abort: function () {
                   g = !0, d && d.abort()
                }
             };
 
             function _(e) {
                w = !0, d.abort();
                var r = Error("ESOCKETTIMEDOUT" === e ? "Socket timed out on request to ".concat(i.url) : "Connection timed out on request to ".concat(i.url));
                r.code = e, t.channels.error.publish(r)
             }
 
             function E(t) {
                (t || g || d.readyState >= 2 && u.connect) && clearTimeout(u.connect), u.socket && clearTimeout(u.socket)
             }
 
             function x(t) {
                if (!m) {
                   E(!0), m = !0, d = null;
                   var r = t || Error("Network error while attempting to reach ".concat(i.url));
                   r.isNetworkError = !0, r.request = i, e(r)
                }
             }
          }
       },
       13474: function (t) {
          "use strict";
 
          function e() {
             this.readyState = 0
          }
          e.prototype.open = function (t, e) {
             this._method = t, this._url = e, this._resHeaders = "", this.readyState = 1, this.onreadystatechange()
          }, e.prototype.abort = function () {
             this._controller && this._controller.abort()
          }, e.prototype.getAllResponseHeaders = function () {
             return this._resHeaders
          }, e.prototype.setRequestHeader = function (t, e) {
             this._headers = this._headers || {}, this._headers[t] = e
          }, e.prototype.send = function (t) {
             var e = this,
                r = this._controller = "function" == typeof AbortController && new AbortController,
                n = "arraybuffer" !== this.responseType,
                o = {
                   method: this._method,
                   headers: this._headers,
                   signal: r && r.signal,
                   body: t
                };
             "undefined" != typeof window && (o.credentials = this.withCredentials ? "include" : "omit"), fetch(this._url, o).then((function (t) {
                return t.headers.forEach((function (t, r) {
                   e._resHeaders += "".concat(r, ": ").concat(t, "\r\n")
                })), e.status = t.status, e.statusText = t.statusText, e.readyState = 3, n ? t.text() : t.arrayBuffer()
             })).then((function (t) {
                n ? e.responseText = t : e.response = t, e.readyState = 4, e.onreadystatechange()
             })).catch((function (t) {
                "AbortError" !== t.name ? e.onerror(t) : e.onabort()
             }))
          }, t.exports = e
       },
       80818: function (t, e, r) {
          "use strict";
          t.exports = r(93572)
       },
       7105: function (t, e, r) {
          "use strict";
          "undefined" != typeof globalThis ? t.exports = globalThis : "undefined" != typeof window ? t.exports = window : void 0 !== r.g ? t.exports = r.g : "undefined" != typeof self ? t.exports = self : t.exports = {}
       },
       39186: function (t) {
          "use strict";
          t.exports = function (t) {
             return function (e, r) {
                for (var n = "onError" === e, o = r, i = arguments.length, s = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) s[a - 2] = arguments[a];
                for (var c = 0; c < t[e].length && (o = t[e][c].apply(void 0, [o].concat(s)), !n || o); c++);
                return o
             }
          }
       },
       55192: function (t) {
          "use strict";
          t.exports = function (t) {
             for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
             var o = t.length - 1;
             return t.slice(0, o).reduce((function (t, e, n) {
                return t + e + r[n]
             }), "") + t[o]
          }
       },
       73951: function (t, e, r) {
          "use strict";
          /*!
           * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
           *
           * Copyright (c) 2014-2017, Jon Schlinkert.
           * Released under the MIT License.
           */
          var n = r(8924);
 
          function o(t) {
             return !0 === n(t) && "[object Object]" === Object.prototype.toString.call(t)
          }
          t.exports = function (t) {
             var e, r;
             return !1 !== o(t) && "function" == typeof (e = t.constructor) && !1 !== o(r = e.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf")
          }
       },
       8924: function (t) {
          "use strict";
          /*!
           * isobject <https://github.com/jonschlinkert/isobject>
           *
           * Copyright (c) 2014-2017, Jon Schlinkert.
           * Released under the MIT License.
           */
          t.exports = function (t) {
             return null != t && "object" == typeof t && !1 === Array.isArray(t)
          }
       },
       95319: function (t, e) {
          "use strict";
          var r = "undefined" != typeof Reflect ? Reflect.construct : void 0,
             n = Object.defineProperty,
             o = Error.captureStackTrace;
 
          function i(t) {
             void 0 !== t && n(this, "message", {
                configurable: !0,
                value: t,
                writable: !0
             });
             var e = this.constructor.name;
             void 0 !== e && e !== this.name && n(this, "name", {
                configurable: !0,
                value: e,
                writable: !0
             }), o(this, this.constructor)
          }
          void 0 === o && (o = function (t) {
             var e = Error();
             n(t, "stack", {
                configurable: !0,
                get: function () {
                   var t = e.stack;
                   return n(this, "stack", {
                      configurable: !0,
                      value: t,
                      writable: !0
                   }), t
                },
                set: function (e) {
                   n(t, "stack", {
                      configurable: !0,
                      value: e,
                      writable: !0
                   })
                }
             })
          }), i.prototype = Object.create(Error.prototype, {
             constructor: {
                configurable: !0,
                value: i,
                writable: !0
             }
          });
          var s = function () {
             function t(t, e) {
                return n(t, "name", {
                   configurable: !0,
                   value: e
                })
             }
             try {
                var e = function () {};
                if (t(e, "foo"), "foo" === e.name) return t
             } catch (t) {}
          }();
          (t.exports = function (t, e) {
             if (null == e || e === Error) e = i;
             else if ("function" != typeof e) throw TypeError("super_ should be a function");
             if ("string" == typeof t) n = t, t = void 0 !== r ? function () {
                return r(e, arguments, this.constructor)
             } : function () {
                e.apply(this, arguments)
             }, void 0 !== s && (s(t, n), n = void 0);
             else if ("function" != typeof t) throw TypeError("constructor should be either a string or a function");
             t.super_ = t.super = e;
             var n, o = {
                constructor: {
                   configurable: !0,
                   value: t,
                   writable: !0
                }
             };
             return void 0 !== n && (o.name = {
                configurable: !0,
                value: n,
                writable: !0
             }), t.prototype = Object.create(e.prototype, o), t
          }).BaseError = i
       },
       93337: function (t) {
          t.exports = function () {
             var t = [];
             return {
                subscribe: function (e) {
                   return t.push(e),
                      function () {
                         var r = t.indexOf(e);
                         r > -1 && t.splice(r, 1)
                      }
                },
                publish: function () {
                   for (var e = 0; e < t.length; e++) t[e].apply(null, arguments)
                }
             }
          }
       },
       81304: function (t, e, r) {
          "use strict";
          r.d(e, {
             Iy: function () {
                return f
             },
             KF: function () {
                return h
             },
             eI: function () {
                return s
             }
          });
          var n = r(12479),
             o = r.n(n),
             i = r(70079);
 
          function s(t) {
             return o()(t)
          }
 
          function a(t, e) {
             for (var r = 0; r < e.length; r++) {
                var n = e[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
             }
          }
          r(55192);
          var c = function () {
             function t() {
                this._signal = {
                   aborted: !1
                }
             }
             return t.prototype.abort = function () {
                this._signal.aborted = !0
             }, a(t.prototype, [{
                key: "signal",
                get: function () {
                   return this._signal
                }
             }]), Object.defineProperty(t, "prototype", {
                writable: !1
             }), t
          }();
 
          function u() {
             return "undefined" == typeof AbortController ? new c : new AbortController
          }
 
          function f(t) {
             var e = t.projectId;
             return function () {
                var t, r, n, o, s, a;
                return r = (t = (0, i.useState)())[0], n = t[1], s = (o = (0, i.useState)())[0], a = o[1], (0, i.useEffect)((function () {
                   var t = u();
                   return l(e, t).then(n).catch((function (t) {
                         return "AbortError" !== t.name && a(t)
                      })),
                      function () {
                         t.abort()
                      }
                }), [e]), {
                   data: r,
                   error: s,
                   loading: null !== r || !s
                }
             }
          }
 
          function l(t, e) {
             return fetch("https://" + t + ".api.sanity.io/v1/users/me", {
                credentials: "include",
                signal: e.signal
             }).then((function (t) {
                return t.json()
             })).then((function (t) {
                return null != t && t.id ? t : null
             }))
          }
          var p = {};
 
          function h(t) {
             var e, n = t.projectId,
                o = t.dataset,
                s = t.documentLimit,
                a = void 0 === s ? 3e3 : s;
             return function (t, e) {
                void 0 === e && (e = {});
                var r, o, s, a, f, h, d, y, b, v, g, m, w, O, _, E, x, j, S, C = e,
                   P = C.params;
                return a = (r = {
                   getStore: c,
                   projectId: n,
                   query: t,
                   params: void 0 === P ? p : P,
                   initialData: C.initialData,
                   enabled: !!C.enabled && "undefined" != typeof window
                }).getStore, f = r.projectId, h = r.query, d = r.initialData, b = void 0 !== (y = r.enabled) && y, g = (v = (0, i.useState)())[0], m = v[1], O = (w = (0, i.useState)(!1))[0], _ = w[1], x = (E = (0, i.useState)())[0], j = E[1], o = r.params, s = (0, i.useMemo)((function () {
                   return JSON.stringify(o)
                }), [o]), S = (0, i.useMemo)((function () {
                   return JSON.parse(s)
                }), [s]), (0, i.useEffect)((function () {
                   if (b) {
                      _(!0);
                      var t, e = u();
                      return l(f, e).then((function (t) {
                            if (!t) throw console.warn("Not authenticated - preview not available"), Error("Not authenticated - preview not available")
                         })).then((function () {
                            return a(e)
                         })).then((function (e) {
                            t = e.subscribe(h, S, (function (t, e) {
                               t ? m(t) : j(e)
                            }))
                         })).catch((function (t) {
                            return "AbortError" === t.name ? null : m(t)
                         })).finally((function () {
                            return _(!1)
                         })),
                         function () {
                            t && t.unsubscribe(), e.abort()
                         }
                   }
                }), [a, h, S, b]), {
                   data: void 0 === x ? d : x,
                   loading: O,
                   error: g
                }
             };
 
             function c(t) {
                return e || (e = r.e(6119).then(r.t.bind(r, 26119, 19)).then((function (e) {
                   var r = e.groqStore;
                   if (t.signal.aborted) {
                      var i = Error("Cancelling groq store creation");
                      return i.name = "AbortError", Promise.reject(i)
                   }
                   return r({
                      projectId: n,
                      dataset: o,
                      documentLimit: a,
                      listen: !0,
                      overlayDrafts: !0,
                      subscriptionThrottleMs: 10
                   })
                }))), e
             }
          }
       },
       98329: function (t) {
          "use strict";
          var e = Object.assign.bind(Object);
          t.exports = e, t.exports.default = t.exports
       },
       3635: function (t, e, r) {
          ! function () {
             var e = {
                   452: function (t) {
                      "use strict";
                      t.exports = r(4184)
                   }
                },
                n = {};
 
             function o(t) {
                var r = n[t];
                if (void 0 !== r) return r.exports;
                var i = n[t] = {
                      exports: {}
                   },
                   s = !0;
                try {
                   e[t](i, i.exports, o), s = !1
                } finally {
                   s && delete n[t]
                }
                return i.exports
             }
             o.ab = "//";
             var i = {};
             ! function () {
                var t, e = i,
                   r = (t = o(452)) && "object" == typeof t && "default" in t ? t.default : t,
                   n = /https?|ftp|gopher|file/;
 
                function s(t) {
                   "string" == typeof t && (t = g(t));
                   var e, o, i, s, a, c, u, f, l, p = (o = (e = t).auth, i = e.hostname, s = e.protocol || "", a = e.pathname || "", c = e.hash || "", u = e.query || "", f = !1, o = o ? encodeURIComponent(o).replace(/%3A/i, ":") + "@" : "", e.host ? f = o + e.host : i && (f = o + (~i.indexOf(":") ? "[" + i + "]" : i), e.port && (f += ":" + e.port)), u && "object" == typeof u && (u = r.encode(u)), l = e.search || u && "?" + u || "", s && ":" !== s.substr(-1) && (s += ":"), e.slashes || (!s || n.test(s)) && !1 !== f ? (f = "//" + (f || ""), a && "/" !== a[0] && (a = "/" + a)) : f || (f = ""), c && "#" !== c[0] && (c = "#" + c), l && "?" !== l[0] && (l = "?" + l), {
                      protocol: s,
                      host: f,
                      pathname: a = a.replace(/[?#]/g, encodeURIComponent),
                      search: l = l.replace("#", "%23"),
                      hash: c
                   });
                   return "" + p.protocol + p.host + p.pathname + p.search + p.hash
                }
                var a = "http://",
                   c = a + "w.w",
                   u = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,
                   f = /https?|ftp|gopher|file/;
 
                function l(t, e) {
                   var r = "string" == typeof t ? g(t) : t;
                   t = "object" == typeof t ? s(t) : t;
                   var n = g(e),
                      o = "";
                   r.protocol && !r.slashes && (o = r.protocol, t = t.replace(r.protocol, ""), o += "/" === e[0] || "/" === t[0] ? "/" : ""), o && n.protocol && (o = "", n.slashes || (o = n.protocol, e = e.replace(n.protocol, "")));
                   var i = t.match(u);
                   i && !n.protocol && (t = t.substr((o = i[1] + (i[2] || "")).length), /^\/\/[^/]/.test(e) && (o = o.slice(0, -1)));
                   var l = new URL(t, c + "/"),
                      p = new URL(e, l).toString().replace(c, ""),
                      h = n.protocol || r.protocol;
                   return h += r.slashes || n.slashes ? "//" : "", !o && h ? p = p.replace(a, h) : o && (p = p.replace(a, "")), f.test(p) || ~e.indexOf(".") || "/" === t.slice(-1) || "/" === e.slice(-1) || "/" !== p.slice(-1) || (p = p.slice(0, -1)), o && (p = o + ("/" === p[0] ? p.substr(1) : p)), p
                }
 
                function p() {}
                p.prototype.parse = g, p.prototype.format = s, p.prototype.resolve = l, p.prototype.resolveObject = l;
                var h = /^https?|ftp|gopher|file/,
                   d = /^(.*?)([#?].*)/,
                   y = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,
                   b = /^([a-z0-9.+-]*:)?\/\/\/*/i,
                   v = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
 
                function g(t, e, n) {
                   if (void 0 === e && (e = !1), void 0 === n && (n = !1), t && "object" == typeof t && t instanceof p) return t;
                   var o = (t = t.trim()).match(d);
                   t = o ? o[1].replace(/\\/g, "/") + o[2] : t.replace(/\\/g, "/"), v.test(t) && "/" !== t.slice(-1) && (t += "/");
                   var i = !/(^javascript)/.test(t) && t.match(y),
                      a = b.test(t),
                      u = "";
                   i && (h.test(i[1]) || (u = i[1].toLowerCase(), t = "" + i[2] + i[3]), i[2] || (a = !1, h.test(i[1]) ? (u = i[1], t = "" + i[3]) : t = "//" + i[3]), 3 !== i[2].length && 1 !== i[2].length || (u = i[1], t = "/" + i[3]));
                   var f, l = (o ? o[1] : t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),
                      g = l && l[1],
                      m = new p,
                      w = "",
                      O = "";
                   try {
                      f = new URL(t)
                   } catch (e) {
                      w = e, u || n || !/^\/\//.test(t) || /^\/\/.+[@.]/.test(t) || (O = "/", t = t.substr(1));
                      try {
                         f = new URL(t, c)
                      } catch (t) {
                         return m.protocol = u, m.href = u, m
                      }
                   }
                   m.slashes = a && !O, m.host = "w.w" === f.host ? "" : f.host, m.hostname = "w.w" === f.hostname ? "" : f.hostname.replace(/(\[|\])/g, ""), m.protocol = w ? u || null : f.protocol, m.search = f.search.replace(/\\/g, "%5C"), m.hash = f.hash.replace(/\\/g, "%5C");
                   var _ = t.split("#");
                   !m.search && ~_[0].indexOf("?") && (m.search = "?"), m.hash || "" !== _[1] || (m.hash = "#"), m.query = e ? r.decode(f.search.substr(1)) : m.search.substr(1), m.pathname = O + (i ? f.pathname.replace(/['^|`]/g, (function (t) {
                      return "%" + t.charCodeAt().toString(16).toUpperCase()
                   })).replace(/((?:%[0-9A-F]{2})+)/g, (function (t, e) {
                      try {
                         return decodeURIComponent(e).split("").map((function (t) {
                            var e = t.charCodeAt();
                            return e > 256 || /^[a-z0-9]$/i.test(t) ? t : "%" + e.toString(16).toUpperCase()
                         })).join("")
                      } catch (t) {
                         return e
                      }
                   })) : f.pathname), "about:" === m.protocol && "blank" === m.pathname && (m.protocol = "", m.pathname = ""), w && "/" !== t[0] && (m.pathname = m.pathname.substr(1)), u && !h.test(u) && "/" !== t.slice(-1) && "/" === m.pathname && (m.pathname = ""), m.path = m.pathname + m.search, m.auth = [f.username, f.password].map(decodeURIComponent).filter(Boolean).join(":"), m.port = f.port, g && !m.host.endsWith(g) && (m.host += g, m.port = g.slice(1)), m.href = O ? "" + m.pathname + m.search + m.hash : s(m);
                   var E = /^(file)/.test(m.href) ? ["host", "hostname"] : [];
                   return Object.keys(m).forEach((function (t) {
                      ~E.indexOf(t) || (m[t] = m[t] || null)
                   })), m
                }
                e.parse = g, e.format = s, e.resolve = l, e.resolveObject = function (t, e) {
                   return g(l(t, e))
                }, e.Url = p
             }(), t.exports = i
          }()
       },
       4184: function (t) {
          ! function () {
             "use strict";
             var e, r = {
                   815: function (t) {
                      t.exports = function (t, r, n, o) {
                         r = r || "&", n = n || "=";
                         var i = {};
                         if ("string" != typeof t || 0 === t.length) return i;
                         var s = /\+/g;
                         t = t.split(r);
                         var a = 1e3;
                         o && "number" == typeof o.maxKeys && (a = o.maxKeys);
                         var c = t.length;
                         a > 0 && c > a && (c = a);
                         for (var u = 0; u < c; ++u) {
                            var f, l, p, h, d = t[u].replace(s, "%20"),
                               y = d.indexOf(n);
                            y >= 0 ? (f = d.substr(0, y), l = d.substr(y + 1)) : (f = d, l = ""), p = decodeURIComponent(f), h = decodeURIComponent(l), Object.prototype.hasOwnProperty.call(i, p) ? e(i[p]) ? i[p].push(h) : i[p] = [i[p], h] : i[p] = h
                         }
                         return i
                      };
                      var e = Array.isArray || function (t) {
                         return "[object Array]" === Object.prototype.toString.call(t)
                      }
                   },
                   577: function (t) {
                      var e = function (t) {
                         switch (typeof t) {
                            case "string":
                               return t;
                            case "boolean":
                               return t ? "true" : "false";
                            case "number":
                               return isFinite(t) ? t : "";
                            default:
                               return ""
                         }
                      };
                      t.exports = function (t, i, s, a) {
                         return i = i || "&", s = s || "=", null === t && (t = void 0), "object" == typeof t ? n(o(t), (function (o) {
                            var a = encodeURIComponent(e(o)) + s;
                            return r(t[o]) ? n(t[o], (function (t) {
                               return a + encodeURIComponent(e(t))
                            })).join(i) : a + encodeURIComponent(e(t[o]))
                         })).join(i) : a ? encodeURIComponent(e(a)) + s + encodeURIComponent(e(t)) : ""
                      };
                      var r = Array.isArray || function (t) {
                         return "[object Array]" === Object.prototype.toString.call(t)
                      };
 
                      function n(t, e) {
                         if (t.map) return t.map(e);
                         for (var r = [], n = 0; n < t.length; n++) r.push(e(t[n], n));
                         return r
                      }
                      var o = Object.keys || function (t) {
                         var e = [];
                         for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r);
                         return e
                      }
                   }
                },
                n = {};
 
             function o(t) {
                var e = n[t];
                if (void 0 !== e) return e.exports;
                var i = n[t] = {
                      exports: {}
                   },
                   s = !0;
                try {
                   r[t](i, i.exports, o), s = !1
                } finally {
                   s && delete n[t]
                }
                return i.exports
             }
             o.ab = "//";
             var i = {};
             (e = i).decode = e.parse = o(815), e.encode = e.stringify = o(577), t.exports = i
          }()
       },
       17809: function (t) {
          var e = function (t) {
             return t.replace(/^\s+|\s+$/g, "")
          };
          t.exports = function (t) {
             if (!t) return {};
             for (var r = {}, n = e(t).split("\n"), o = 0; o < n.length; o++) {
                var i, s = n[o],
                   a = s.indexOf(":"),
                   c = e(s.slice(0, a)).toLowerCase(),
                   u = e(s.slice(a + 1));
                void 0 === r[c] ? r[c] = u : (i = r[c], "[object Array]" === Object.prototype.toString.call(i) ? r[c].push(u) : r[c] = [r[c], u])
             }
             return r
          }
       },
       2656: function (t, e) {
          "use strict";
          var r = Object.prototype.hasOwnProperty;
 
          function n(t) {
             try {
                return decodeURIComponent(t.replace(/\+/g, " "))
             } catch (t) {
                return null
             }
          }
 
          function o(t) {
             try {
                return encodeURIComponent(t)
             } catch (t) {
                return null
             }
          }
          e.stringify = function (t, e) {
             var n, i, s = [];
             for (i in "string" != typeof (e = e || "") && (e = "?"), t)
                if (r.call(t, i)) {
                   if (!(n = t[i]) && (null == n || isNaN(n)) && (n = ""), i = o(i), n = o(n), null === i || null === n) continue;
                   s.push(i + "=" + n)
                } return s.length ? e + s.join("&") : ""
          }, e.parse = function (t) {
             for (var e, r = /([^=?#&]+)=?([^&]*)/g, o = {}; e = r.exec(t);) {
                var i = n(e[1]),
                   s = n(e[2]);
                null === i || null === s || i in o || (o[i] = s)
             }
             return o
          }
       },
       90764: function (t) {
          "use strict";
          t.exports = function (t, e) {
             if (e = e.split(":")[0], !(t = +t)) return !1;
             switch (e) {
                case "http":
                case "ws":
                   return 80 !== t;
                case "https":
                case "wss":
                   return 443 !== t;
                case "ftp":
                   return 21 !== t;
                case "gopher":
                   return 70 !== t;
                case "file":
                   return !1
             }
             return 0 !== t
          }
       },
       90914: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var n = r(64160),
             o = r(7047),
             i = r(22497),
             s = r(14502),
             a = r(84638),
             c = function () {
                function t(t) {
                   this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function (e) {
                   var r = new t;
                   return r.source = this, r.operator = e, r
                }, t.prototype.subscribe = function (t, e, r) {
                   var n = this.operator,
                      i = o.toSubscriber(t, e, r);
                   if (n ? i.add(n.call(i, this.source)) : i.add(this.source || a.config.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), a.config.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown)) throw i.syncErrorValue;
                   return i
                }, t.prototype._trySubscribe = function (t) {
                   try {
                      return this._subscribe(t)
                   } catch (e) {
                      a.config.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), n.canReportError(t) ? t.error(e) : console.warn(e)
                   }
                }, t.prototype.forEach = function (t, e) {
                   var r = this;
                   return new(e = u(e))((function (e, n) {
                      var o;
                      o = r.subscribe((function (e) {
                         try {
                            t(e)
                         } catch (t) {
                            n(t), o && o.unsubscribe()
                         }
                      }), n, e)
                   }))
                }, t.prototype._subscribe = function (t) {
                   var e = this.source;
                   return e && e.subscribe(t)
                }, t.prototype[i.observable] = function () {
                   return this
                }, t.prototype.pipe = function () {
                   for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                   return 0 === t.length ? this : s.pipeFromArray(t)(this)
                }, t.prototype.toPromise = function (t) {
                   var e = this;
                   return new(t = u(t))((function (t, r) {
                      var n;
                      e.subscribe((function (t) {
                         return n = t
                      }), (function (t) {
                         return r(t)
                      }), (function () {
                         return t(n)
                      }))
                   }))
                }, t.create = function (e) {
                   return new t(e)
                }, t
             }();
 
          function u(t) {
             if (t || (t = a.config.Promise || Promise), !t) throw Error("no Promise impl found");
             return t
          }
          e.Observable = c
       },
       84576: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var n = r(84638),
             o = r(79069);
          e.empty = {
             closed: !0,
             next: function (t) {},
             error: function (t) {
                if (n.config.useDeprecatedSynchronousErrorHandling) throw t;
                o.hostReportError(t)
             },
             complete: function () {}
          }
       },
       14997: function (t, e, r) {
          "use strict";
          var n, o = this && this.__extends || (n = function (t, e) {
             return (n = Object.setPrototypeOf || {
                   __proto__: []
                }
                instanceof Array && function (t, e) {
                   t.__proto__ = e
                } || function (t, e) {
                   for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
          }, function (t, e) {
             function r() {
                this.constructor = t
             }
             n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
          });
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var i = r(4393),
             s = r(84576),
             a = r(18811),
             c = r(61849),
             u = r(84638),
             f = r(79069),
             l = function (t) {
                function e(r, n, o) {
                   var i = t.call(this) || this;
                   switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
                      case 0:
                         i.destination = s.empty;
                         break;
                      case 1:
                         if (!r) {
                            i.destination = s.empty;
                            break
                         }
                         if ("object" == typeof r) {
                            r instanceof e ? (i.syncErrorThrowable = r.syncErrorThrowable, i.destination = r, r.add(i)) : (i.syncErrorThrowable = !0, i.destination = new p(i, r));
                            break
                         }
                      default:
                         i.syncErrorThrowable = !0, i.destination = new p(i, r, n, o)
                   }
                   return i
                }
                return o(e, t), e.prototype[c.rxSubscriber] = function () {
                   return this
                }, e.create = function (t, r, n) {
                   var o = new e(t, r, n);
                   return o.syncErrorThrowable = !1, o
                }, e.prototype.next = function (t) {
                   this.isStopped || this._next(t)
                }, e.prototype.error = function (t) {
                   this.isStopped || (this.isStopped = !0, this._error(t))
                }, e.prototype.complete = function () {
                   this.isStopped || (this.isStopped = !0, this._complete())
                }, e.prototype.unsubscribe = function () {
                   this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                }, e.prototype._next = function (t) {
                   this.destination.next(t)
                }, e.prototype._error = function (t) {
                   this.destination.error(t), this.unsubscribe()
                }, e.prototype._complete = function () {
                   this.destination.complete(), this.unsubscribe()
                }, e.prototype._unsubscribeAndRecycle = function () {
                   var t = this._parentOrParents;
                   return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                }, e
             }(a.Subscription);
          e.Subscriber = l;
          var p = function (t) {
             function e(e, r, n, o) {
                var a, c = t.call(this) || this;
                c._parentSubscriber = e;
                var u = c;
                return i.isFunction(r) ? a = r : r && (a = r.next, n = r.error, o = r.complete, r !== s.empty && (u = Object.create(r), i.isFunction(u.unsubscribe) && c.add(u.unsubscribe.bind(u)), u.unsubscribe = c.unsubscribe.bind(c))), c._context = u, c._next = a, c._error = n, c._complete = o, c
             }
             return o(e, t), e.prototype.next = function (t) {
                if (!this.isStopped && this._next) {
                   var e = this._parentSubscriber;
                   u.config.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                }
             }, e.prototype.error = function (t) {
                if (!this.isStopped) {
                   var e = this._parentSubscriber,
                      r = u.config.useDeprecatedSynchronousErrorHandling;
                   if (this._error) r && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                   else if (e.syncErrorThrowable) r ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : f.hostReportError(t), this.unsubscribe();
                   else {
                      if (this.unsubscribe(), r) throw t;
                      f.hostReportError(t)
                   }
                }
             }, e.prototype.complete = function () {
                var t = this;
                if (!this.isStopped) {
                   var e = this._parentSubscriber;
                   if (this._complete) {
                      var r = function () {
                         return t._complete.call(t._context)
                      };
                      u.config.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, r), this.unsubscribe()) : (this.__tryOrUnsub(r), this.unsubscribe())
                   } else this.unsubscribe()
                }
             }, e.prototype.__tryOrUnsub = function (t, e) {
                try {
                   t.call(this._context, e)
                } catch (t) {
                   if (this.unsubscribe(), u.config.useDeprecatedSynchronousErrorHandling) throw t;
                   f.hostReportError(t)
                }
             }, e.prototype.__tryOrSetError = function (t, e, r) {
                if (!u.config.useDeprecatedSynchronousErrorHandling) throw Error("bad call");
                try {
                   e.call(this._context, r)
                } catch (e) {
                   return u.config.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (f.hostReportError(e), !0)
                }
                return !1
             }, e.prototype._unsubscribe = function () {
                var t = this._parentSubscriber;
                this._context = null, this._parentSubscriber = null, t.unsubscribe()
             }, e
          }(l);
          e.SafeSubscriber = p
       },
       18811: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var n = r(96984),
             o = r(65776),
             i = r(4393),
             s = r(3077),
             a = function () {
                var t;
 
                function e(t) {
                   this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                }
                return e.prototype.unsubscribe = function () {
                   if (!this.closed) {
                      var t, r = this._parentOrParents,
                         a = this._ctorUnsubscribe,
                         u = this._unsubscribe,
                         f = this._subscriptions;
                      if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof e) r.remove(this);
                      else if (null !== r)
                         for (var l = 0; l < r.length; ++l) r[l].remove(this);
                      if (i.isFunction(u)) {
                         a && (this._unsubscribe = void 0);
                         try {
                            u.call(this)
                         } catch (e) {
                            t = e instanceof s.UnsubscriptionError ? c(e.errors) : [e]
                         }
                      }
                      if (n.isArray(f)) {
                         l = -1;
                         for (var p = f.length; ++l < p;) {
                            var h = f[l];
                            if (o.isObject(h)) try {
                               h.unsubscribe()
                            } catch (e) {
                               t = t || [], e instanceof s.UnsubscriptionError ? t = t.concat(c(e.errors)) : t.push(e)
                            }
                         }
                      }
                      if (t) throw new s.UnsubscriptionError(t)
                   }
                }, e.prototype.add = function (t) {
                   var r = t;
                   if (!t) return e.EMPTY;
                   switch (typeof t) {
                      case "function":
                         r = new e(t);
                      case "object":
                         if (r === this || r.closed || "function" != typeof r.unsubscribe) return r;
                         if (this.closed) return r.unsubscribe(), r;
                         if (!(r instanceof e)) {
                            var n = r;
                            (r = new e)._subscriptions = [n]
                         }
                         break;
                      default:
                         throw Error("unrecognized teardown " + t + " added to Subscription.")
                   }
                   var o = r._parentOrParents;
                   if (null === o) r._parentOrParents = this;
                   else if (o instanceof e) {
                      if (o === this) return r;
                      r._parentOrParents = [o, this]
                   } else {
                      if (-1 !== o.indexOf(this)) return r;
                      o.push(this)
                   }
                   var i = this._subscriptions;
                   return null === i ? this._subscriptions = [r] : i.push(r), r
                }, e.prototype.remove = function (t) {
                   var e = this._subscriptions;
                   if (e) {
                      var r = e.indexOf(t); - 1 !== r && e.splice(r, 1)
                   }
                }, e.EMPTY = ((t = new e).closed = !0, t), e
             }();
 
          function c(t) {
             return t.reduce((function (t, e) {
                return t.concat(e instanceof s.UnsubscriptionError ? e.errors : e)
             }), [])
          }
          e.Subscription = a
       },
       84638: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var r = !1;
          e.config = {
             Promise: void 0,
             set useDeprecatedSynchronousErrorHandling(t) {
                t ? console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + Error().stack) : r && console.log("RxJS: Back to a better error behavior. Thank you. <3"), r = t
             },
             get useDeprecatedSynchronousErrorHandling() {
                return r
             }
          }
       },
       17951: function (t, e, r) {
          "use strict";
          var n, o = this && this.__extends || (n = function (t, e) {
             return (n = Object.setPrototypeOf || {
                   __proto__: []
                }
                instanceof Array && function (t, e) {
                   t.__proto__ = e
                } || function (t, e) {
                   for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
          }, function (t, e) {
             function r() {
                this.constructor = t
             }
             n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
          });
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var i = r(14997);
          e.filter = function (t, e) {
             return function (r) {
                return r.lift(new s(t, e))
             }
          };
          var s = function () {
                function t(t, e) {
                   this.predicate = t, this.thisArg = e
                }
                return t.prototype.call = function (t, e) {
                   return e.subscribe(new a(t, this.predicate, this.thisArg))
                }, t
             }(),
             a = function (t) {
                function e(e, r, n) {
                   var o = t.call(this, e) || this;
                   return o.predicate = r, o.thisArg = n, o.count = 0, o
                }
                return o(e, t), e.prototype._next = function (t) {
                   var e;
                   try {
                      e = this.predicate.call(this.thisArg, t, this.count++)
                   } catch (t) {
                      return void this.destination.error(t)
                   }
                   e && this.destination.next(t)
                }, e
             }(i.Subscriber)
       },
       99563: function (t, e, r) {
          "use strict";
          var n, o = this && this.__extends || (n = function (t, e) {
             return (n = Object.setPrototypeOf || {
                   __proto__: []
                }
                instanceof Array && function (t, e) {
                   t.__proto__ = e
                } || function (t, e) {
                   for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r])
                })(t, e)
          }, function (t, e) {
             function r() {
                this.constructor = t
             }
             n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
          });
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var i = r(14997);
          e.map = function (t, e) {
             return function (r) {
                if ("function" != typeof t) throw TypeError("argument is not a function. Are you looking for `mapTo()`?");
                return r.lift(new s(t, e))
             }
          };
          var s = function () {
             function t(t, e) {
                this.project = t, this.thisArg = e
             }
             return t.prototype.call = function (t, e) {
                return e.subscribe(new a(t, this.project, this.thisArg))
             }, t
          }();
          e.MapOperator = s;
          var a = function (t) {
             function e(e, r, n) {
                var o = t.call(this, e) || this;
                return o.project = r, o.count = 0, o.thisArg = n || o, o
             }
             return o(e, t), e.prototype._next = function (t) {
                var e;
                try {
                   e = this.project.call(this.thisArg, t, this.count++)
                } catch (t) {
                   return void this.destination.error(t)
                }
                this.destination.next(e)
             }, e
          }(i.Subscriber)
       },
       22497: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          }), e.observable = "function" == typeof Symbol && Symbol.observable || "@@observable"
       },
       61849: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          }), e.rxSubscriber = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(), e.$$rxSubscriber = e.rxSubscriber
       },
       3077: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var r = function () {
             function t(t) {
                return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map((function (t, e) {
                   return e + 1 + ") " + t.toString()
                })).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
             }
             return t.prototype = Object.create(Error.prototype), t
          }();
          e.UnsubscriptionError = r
       },
       64160: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var n = r(14997);
          e.canReportError = function (t) {
             for (; t;) {
                var e = t,
                   r = e.closed,
                   o = e.destination,
                   i = e.isStopped;
                if (r || i) return !1;
                t = o && o instanceof n.Subscriber ? o : null
             }
             return !0
          }
       },
       79069: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          }), e.hostReportError = function (t) {
             setTimeout((function () {
                throw t
             }), 0)
          }
       },
       58220: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          }), e.identity = function (t) {
             return t
          }
       },
       96984: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          }), e.isArray = Array.isArray || function (t) {
             return t && "number" == typeof t.length
          }
       },
       4393: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          }), e.isFunction = function (t) {
             return "function" == typeof t
          }
       },
       65776: function (t, e) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          }), e.isObject = function (t) {
             return null !== t && "object" == typeof t
          }
       },
       14502: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var n = r(58220);
 
          function o(t) {
             return 0 === t.length ? n.identity : 1 === t.length ? t[0] : function (e) {
                return t.reduce((function (t, e) {
                   return e(t)
                }), e)
             }
          }
          e.pipe = function () {
             for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
             return o(t)
          }, e.pipeFromArray = o
       },
       7047: function (t, e, r) {
          "use strict";
          Object.defineProperty(e, "__esModule", {
             value: !0
          });
          var n = r(14997),
             o = r(61849),
             i = r(84576);
          e.toSubscriber = function (t, e, r) {
             if (t) {
                if (t instanceof n.Subscriber) return t;
                if (t[o.rxSubscriber]) return t[o.rxSubscriber]()
             }
             return t || e || r ? new n.Subscriber(t, e, r) : new n.Subscriber(i.empty)
          }
       },
       4036: function (t, e, r) {
          "use strict";
          var n = r(3635);
          t.exports = function (t, e, r) {
             if (t === e) return !0;
             var o = n.parse(t, !1, !0),
                i = n.parse(e, !1, !0),
                s = 0 | o.port || ("https" === o.protocol ? 443 : 80),
                a = 0 | i.port || ("https" === i.protocol ? 443 : 80),
                c = {
                   proto: o.protocol === i.protocol,
                   hostname: o.hostname === i.hostname,
                   port: s === a
                };
             return c.proto && c.hostname && (c.port || r)
          }
       },
       86566: function (t, e, r) {
          "use strict";
          var n = r(90764),
             o = r(2656),
             i = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
             s = /[\n\r\t]/g,
             a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
             c = /:\d+$/,
             u = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
             f = /^[a-zA-Z]:/;
 
          function l(t) {
             return (t || "").toString().replace(i, "")
          }
          var p = [
                ["#", "hash"],
                ["?", "query"],
                function (t, e) {
                   return y(e.protocol) ? t.replace(/\\/g, "/") : t
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d*)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
             ],
             h = {
                hash: 1,
                query: 1
             };
 
          function d(t) {
             var e, n = ("undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {}).location || {},
                o = {},
                i = typeof (t = t || n);
             if ("blob:" === t.protocol) o = new v(unescape(t.pathname), {});
             else if ("string" === i)
                for (e in o = new v(t, {}), h) delete o[e];
             else if ("object" === i) {
                for (e in t) e in h || (o[e] = t[e]);
                void 0 === o.slashes && (o.slashes = a.test(t.href))
             }
             return o
          }
 
          function y(t) {
             return "file:" === t || "ftp:" === t || "http:" === t || "https:" === t || "ws:" === t || "wss:" === t
          }
 
          function b(t, e) {
             t = (t = l(t)).replace(s, ""), e = e || {};
             var r, n = u.exec(t),
                o = n[1] ? n[1].toLowerCase() : "",
                i = !!n[2],
                a = !!n[3],
                c = 0;
             return i ? a ? (r = n[2] + n[3] + n[4], c = n[2].length + n[3].length) : (r = n[2] + n[4], c = n[2].length) : a ? (r = n[3] + n[4], c = n[3].length) : r = n[4], "file:" === o ? c >= 2 && (r = r.slice(2)) : y(o) ? r = n[4] : o ? i && (r = r.slice(2)) : c >= 2 && y(e.protocol) && (r = n[4]), {
                protocol: o,
                slashes: i || y(o),
                slashesCount: c,
                rest: r
             }
          }
 
          function v(t, e, r) {
             if (t = (t = l(t)).replace(s, ""), !(this instanceof v)) return new v(t, e, r);
             var i, a, c, u, h, g, m = p.slice(),
                w = typeof e,
                O = this,
                _ = 0;
             for ("object" !== w && "string" !== w && (r = e, e = null), r && "function" != typeof r && (r = o.parse), i = !(a = b(t || "", e = d(e))).protocol && !a.slashes, O.slashes = a.slashes || i && e.slashes, O.protocol = a.protocol || e.protocol || "", t = a.rest, ("file:" === a.protocol && (2 !== a.slashesCount || f.test(t)) || !a.slashes && (a.protocol || a.slashesCount < 2 || !y(O.protocol))) && (m[3] = [/(.*)/, "pathname"]); _ < m.length; _++) "function" != typeof (u = m[_]) ? (c = u[0], g = u[1], c != c ? O[g] = t : "string" == typeof c ? ~(h = "@" === c ? t.lastIndexOf(c) : t.indexOf(c)) && ("number" == typeof u[2] ? (O[g] = t.slice(0, h), t = t.slice(h + u[2])) : (O[g] = t.slice(h), t = t.slice(0, h))) : (h = c.exec(t)) && (O[g] = h[1], t = t.slice(0, h.index)), O[g] = O[g] || i && u[3] && e[g] || "", u[4] && (O[g] = O[g].toLowerCase())) : t = u(t, O);
             r && (O.query = r(O.query)), i && e.slashes && "/" !== O.pathname.charAt(0) && ("" !== O.pathname || "" !== e.pathname) && (O.pathname = function (t, e) {
                if ("" === t) return e;
                for (var r = (e || "/").split("/").slice(0, -1).concat(t.split("/")), n = r.length, o = r[n - 1], i = !1, s = 0; n--;) "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), s++) : s && (0 === n && (i = !0), r.splice(n, 1), s--);
                return i && r.unshift(""), ("." === o || ".." === o) && r.push(""), r.join("/")
             }(O.pathname, e.pathname)), "/" !== O.pathname.charAt(0) && y(O.protocol) && (O.pathname = "/" + O.pathname), n(O.port, O.protocol) || (O.host = O.hostname, O.port = ""), O.username = O.password = "", O.auth && (~(h = O.auth.indexOf(":")) ? (O.username = O.auth.slice(0, h), O.username = encodeURIComponent(decodeURIComponent(O.username)), O.password = O.auth.slice(h + 1), O.password = encodeURIComponent(decodeURIComponent(O.password))) : O.username = encodeURIComponent(decodeURIComponent(O.auth)), O.auth = O.password ? O.username + ":" + O.password : O.username), O.origin = "file:" !== O.protocol && y(O.protocol) && O.host ? O.protocol + "//" + O.host : "null", O.href = O.toString()
          }
          v.prototype = {
             set: function (t, e, r) {
                var i = this;
                switch (t) {
                   case "query":
                      "string" == typeof e && e.length && (e = (r || o.parse)(e)), i[t] = e;
                      break;
                   case "port":
                      i[t] = e, n(e, i.protocol) ? e && (i.host = i.hostname + ":" + e) : (i.host = i.hostname, i[t] = "");
                      break;
                   case "hostname":
                      i[t] = e, i.port && (e += ":" + i.port), i.host = e;
                      break;
                   case "host":
                      i[t] = e, c.test(e) ? (e = e.split(":"), i.port = e.pop(), i.hostname = e.join(":")) : (i.hostname = e, i.port = "");
                      break;
                   case "protocol":
                      i.protocol = e.toLowerCase(), i.slashes = !r;
                      break;
                   case "pathname":
                   case "hash":
                      if (e) {
                         var s = "pathname" === t ? "/" : "#";
                         i[t] = e.charAt(0) !== s ? s + e : e
                      } else i[t] = e;
                      break;
                   case "username":
                   case "password":
                      i[t] = encodeURIComponent(e);
                      break;
                   case "auth":
                      var a = e.indexOf(":");
                      ~a ? (i.username = e.slice(0, a), i.username = encodeURIComponent(decodeURIComponent(i.username)), i.password = e.slice(a + 1), i.password = encodeURIComponent(decodeURIComponent(i.password))) : i.username = encodeURIComponent(decodeURIComponent(e))
                }
                for (var u = 0; u < p.length; u++) {
                   var f = p[u];
                   f[4] && (i[f[1]] = i[f[1]].toLowerCase())
                }
                return i.auth = i.password ? i.username + ":" + i.password : i.username, i.origin = "file:" !== i.protocol && y(i.protocol) && i.host ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i
             },
             toString: function (t) {
                t && "function" == typeof t || (t = o.stringify);
                var e, r = this.host,
                   n = this.protocol;
                n && ":" !== n.charAt(n.length - 1) && (n += ":");
                var i = n + (this.protocol && this.slashes || y(this.protocol) ? "//" : "");
                return this.username ? (i += this.username, this.password && (i += ":" + this.password), i += "@") : this.password ? i += ":" + this.password + "@" : "file:" !== this.protocol && y(this.protocol) && !r && "/" !== this.pathname && (i += "@"), (":" === r[r.length - 1] || c.test(this.hostname) && !this.port) && (r += ":"), i += r + this.pathname, (e = "object" == typeof this.query ? t(this.query) : this.query) && (i += "?" !== e.charAt(0) ? "?" + e : e), this.hash && (i += this.hash), i
             }
          }, v.extractProtocol = b, v.location = d, v.trimLeft = l, v.qs = o, t.exports = v
       }
    }
 ]);