(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5351], {
      55351: function(e, t, o) {
          "use strict";
          o.d(t, {
              PB: function() {
                  return m
              }
          });
          var a = o(2784),
              r = o(97729),
              n = o.n(r);

          function p() {
              return p = Object.assign ? Object.assign.bind() : function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var o = arguments[t];
                      for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                  }
                  return e
              }, p.apply(this, arguments)
          }

          function i(e, t) {
              if (null == e) return {};
              var o, a, r = {},
                  n = Object.keys(e);
              for (a = 0; a < n.length; a++) o = n[a], t.indexOf(o) >= 0 || (r[o] = e[o]);
              return r
          }
          var l = ["keyOverride"],
              h = {
                  templateTitle: "",
                  noindex: !1,
                  nofollow: !1,
                  defaultOpenGraphImageWidth: 0,
                  defaultOpenGraphImageHeight: 0,
                  defaultOpenGraphVideoWidth: 0,
                  defaultOpenGraphVideoHeight: 0
              },
              c = function(e, t, o) {
                  void 0 === t && (t = []);
                  var r = void 0 === o ? {} : o,
                      n = r.defaultWidth,
                      p = r.defaultHeight;
                  return t.reduce((function(t, o, r) {
                      return t.push(a.createElement("meta", {
                          key: "og:" + e + ":0" + r,
                          property: "og:" + e,
                          content: o.url
                      })), o.alt && t.push(a.createElement("meta", {
                          key: "og:" + e + ":alt0" + r,
                          property: "og:" + e + ":alt",
                          content: o.alt
                      })), o.secureUrl && t.push(a.createElement("meta", {
                          key: "og:" + e + ":secure_url0" + r,
                          property: "og:" + e + ":secure_url",
                          content: o.secureUrl.toString()
                      })), o.type && t.push(a.createElement("meta", {
                          key: "og:" + e + ":type0" + r,
                          property: "og:" + e + ":type",
                          content: o.type.toString()
                      })), o.width ? t.push(a.createElement("meta", {
                          key: "og:" + e + ":width0" + r,
                          property: "og:" + e + ":width",
                          content: o.width.toString()
                      })) : n && t.push(a.createElement("meta", {
                          key: "og:" + e + ":width0" + r,
                          property: "og:" + e + ":width",
                          content: n.toString()
                      })), o.height ? t.push(a.createElement("meta", {
                          key: "og:" + e + ":height" + r,
                          property: "og:" + e + ":height",
                          content: o.height.toString()
                      })) : p && t.push(a.createElement("meta", {
                          key: "og:" + e + ":height" + r,
                          property: "og:" + e + ":height",
                          content: p.toString()
                      })), t
                  }), [])
              },
              d = function(e) {
                  var t, o, r, n = [];
                  e.titleTemplate && (h.templateTitle = e.titleTemplate);
                  var d = "";
                  e.title ? (d = e.title, h.templateTitle && (d = h.templateTitle.replace(/%s/g, (function() {
                      return d
                  })))) : e.defaultTitle && (d = e.defaultTitle), d && n.push(a.createElement("title", {
                      key: "title"
                  }, d));
                  var s, m, u = e.noindex || h.noindex || e.dangerouslySetAllPagesToNoIndex,
                      g = e.nofollow || h.nofollow || e.dangerouslySetAllPagesToNoFollow,
                      f = "";
                  if (e.robotsProps) {
                      var y = e.robotsProps,
                          G = y.nosnippet,
                          k = y.maxSnippet,
                          v = y.maxImagePreview,
                          E = y.maxVideoPreview,
                          b = y.noarchive,
                          w = y.noimageindex,
                          T = y.notranslate,
                          O = y.unavailableAfter;
                      f = (G ? ",nosnippet" : "") + (k ? ",max-snippet:" + k : "") + (v ? ",max-image-preview:" + v : "") + (b ? ",noarchive" : "") + (O ? ",unavailable_after:" + O : "") + (w ? ",noimageindex" : "") + (E ? ",max-video-preview:" + E : "") + (T ? ",notranslate" : "")
                  }(u || g ? (e.dangerouslySetAllPagesToNoIndex && (h.noindex = !0), e.dangerouslySetAllPagesToNoFollow && (h.nofollow = !0), n.push(a.createElement("meta", {
                      key: "robots",
                      name: "robots",
                      content: (u ? "noindex" : "index") + "," + (g ? "nofollow" : "follow") + f
                  }))) : n.push(a.createElement("meta", {
                      key: "robots",
                      name: "robots",
                      content: "index,follow" + f
                  })), e.description && n.push(a.createElement("meta", {
                      key: "description",
                      name: "description",
                      content: e.description
                  })), e.themeColor && n.push(a.createElement("meta", {
                      key: "theme-color",
                      name: "theme-color",
                      content: e.themeColor
                  })), e.mobileAlternate && n.push(a.createElement("link", {
                      rel: "alternate",
                      key: "mobileAlternate",
                      media: e.mobileAlternate.media,
                      href: e.mobileAlternate.href
                  })), e.languageAlternates && e.languageAlternates.length > 0 && e.languageAlternates.forEach((function(e) {
                      n.push(a.createElement("link", {
                          rel: "alternate",
                          key: "languageAlternate-" + e.hrefLang,
                          hrefLang: e.hrefLang,
                          href: e.href
                      }))
                  })), e.twitter && (e.twitter.cardType && n.push(a.createElement("meta", {
                      key: "twitter:card",
                      name: "twitter:card",
                      content: e.twitter.cardType
                  })), e.twitter.site && n.push(a.createElement("meta", {
                      key: "twitter:site",
                      name: "twitter:site",
                      content: e.twitter.site
                  })), e.twitter.handle && n.push(a.createElement("meta", {
                      key: "twitter:creator",
                      name: "twitter:creator",
                      content: e.twitter.handle
                  }))), e.facebook && e.facebook.appId && n.push(a.createElement("meta", {
                      key: "fb:app_id",
                      property: "fb:app_id",
                      content: e.facebook.appId
                  })), null != (t = e.openGraph) && t.title || d) && n.push(a.createElement("meta", {
                      key: "og:title",
                      property: "og:title",
                      content: (null == (s = e.openGraph) ? void 0 : s.title) || d
                  }));
                  (null != (o = e.openGraph) && o.description || e.description) && n.push(a.createElement("meta", {
                      key: "og:description",
                      property: "og:description",
                      content: (null == (m = e.openGraph) ? void 0 : m.description) || e.description
                  }));
                  if (e.openGraph) {
                      if ((e.openGraph.url || e.canonical) && n.push(a.createElement("meta", {
                              key: "og:url",
                              property: "og:url",
                              content: e.openGraph.url || e.canonical
                          })), e.openGraph.type) {
                          var _ = e.openGraph.type.toLowerCase();
                          n.push(a.createElement("meta", {
                              key: "og:type",
                              property: "og:type",
                              content: _
                          })), "profile" === _ && e.openGraph.profile ? (e.openGraph.profile.firstName && n.push(a.createElement("meta", {
                              key: "profile:first_name",
                              property: "profile:first_name",
                              content: e.openGraph.profile.firstName
                          })), e.openGraph.profile.lastName && n.push(a.createElement("meta", {
                              key: "profile:last_name",
                              property: "profile:last_name",
                              content: e.openGraph.profile.lastName
                          })), e.openGraph.profile.username && n.push(a.createElement("meta", {
                              key: "profile:username",
                              property: "profile:username",
                              content: e.openGraph.profile.username
                          })), e.openGraph.profile.gender && n.push(a.createElement("meta", {
                              key: "profile:gender",
                              property: "profile:gender",
                              content: e.openGraph.profile.gender
                          }))) : "book" === _ && e.openGraph.book ? (e.openGraph.book.authors && e.openGraph.book.authors.length && e.openGraph.book.authors.forEach((function(e, t) {
                              n.push(a.createElement("meta", {
                                  key: "book:author:0" + t,
                                  property: "book:author",
                                  content: e
                              }))
                          })), e.openGraph.book.isbn && n.push(a.createElement("meta", {
                              key: "book:isbn",
                              property: "book:isbn",
                              content: e.openGraph.book.isbn
                          })), e.openGraph.book.releaseDate && n.push(a.createElement("meta", {
                              key: "book:release_date",
                              property: "book:release_date",
                              content: e.openGraph.book.releaseDate
                          })), e.openGraph.book.tags && e.openGraph.book.tags.length && e.openGraph.book.tags.forEach((function(e, t) {
                              n.push(a.createElement("meta", {
                                  key: "book:tag:0" + t,
                                  property: "book:tag",
                                  content: e
                              }))
                          }))) : "article" === _ && e.openGraph.article ? (e.openGraph.article.publishedTime && n.push(a.createElement("meta", {
                              key: "article:published_time",
                              property: "article:published_time",
                              content: e.openGraph.article.publishedTime
                          })), e.openGraph.article.modifiedTime && n.push(a.createElement("meta", {
                              key: "article:modified_time",
                              property: "article:modified_time",
                              content: e.openGraph.article.modifiedTime
                          })), e.openGraph.article.expirationTime && n.push(a.createElement("meta", {
                              key: "article:expiration_time",
                              property: "article:expiration_time",
                              content: e.openGraph.article.expirationTime
                          })), e.openGraph.article.authors && e.openGraph.article.authors.length && e.openGraph.article.authors.forEach((function(e, t) {
                              n.push(a.createElement("meta", {
                                  key: "article:author:0" + t,
                                  property: "article:author",
                                  content: e
                              }))
                          })), e.openGraph.article.section && n.push(a.createElement("meta", {
                              key: "article:section",
                              property: "article:section",
                              content: e.openGraph.article.section
                          })), e.openGraph.article.tags && e.openGraph.article.tags.length && e.openGraph.article.tags.forEach((function(e, t) {
                              n.push(a.createElement("meta", {
                                  key: "article:tag:0" + t,
                                  property: "article:tag",
                                  content: e
                              }))
                          }))) : "video.movie" !== _ && "video.episode" !== _ && "video.tv_show" !== _ && "video.other" !== _ || !e.openGraph.video || (e.openGraph.video.actors && e.openGraph.video.actors.length && e.openGraph.video.actors.forEach((function(e, t) {
                              e.profile && n.push(a.createElement("meta", {
                                  key: "video:actor:0" + t,
                                  property: "video:actor",
                                  content: e.profile
                              })), e.role && n.push(a.createElement("meta", {
                                  key: "video:actor:role:0" + t,
                                  property: "video:actor:role",
                                  content: e.role
                              }))
                          })), e.openGraph.video.directors && e.openGraph.video.directors.length && e.openGraph.video.directors.forEach((function(e, t) {
                              n.push(a.createElement("meta", {
                                  key: "video:director:0" + t,
                                  property: "video:director",
                                  content: e
                              }))
                          })), e.openGraph.video.writers && e.openGraph.video.writers.length && e.openGraph.video.writers.forEach((function(e, t) {
                              n.push(a.createElement("meta", {
                                  key: "video:writer:0" + t,
                                  property: "video:writer",
                                  content: e
                              }))
                          })), e.openGraph.video.duration && n.push(a.createElement("meta", {
                              key: "video:duration",
                              property: "video:duration",
                              content: e.openGraph.video.duration.toString()
                          })), e.openGraph.video.releaseDate && n.push(a.createElement("meta", {
                              key: "video:release_date",
                              property: "video:release_date",
                              content: e.openGraph.video.releaseDate
                          })), e.openGraph.video.tags && e.openGraph.video.tags.length && e.openGraph.video.tags.forEach((function(e, t) {
                              n.push(a.createElement("meta", {
                                  key: "video:tag:0" + t,
                                  property: "video:tag",
                                  content: e
                              }))
                          })), e.openGraph.video.series && n.push(a.createElement("meta", {
                              key: "video:series",
                              property: "video:series",
                              content: e.openGraph.video.series
                          })))
                      }
                      e.defaultOpenGraphImageWidth && (h.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth), e.defaultOpenGraphImageHeight && (h.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight), e.openGraph.images && e.openGraph.images.length && n.push.apply(n, c("image", e.openGraph.images, {
                          defaultWidth: h.defaultOpenGraphImageWidth,
                          defaultHeight: h.defaultOpenGraphImageHeight
                      })), e.defaultOpenGraphVideoWidth && (h.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth), e.defaultOpenGraphVideoHeight && (h.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight), e.openGraph.videos && e.openGraph.videos.length && n.push.apply(n, c("video", e.openGraph.videos, {
                          defaultWidth: h.defaultOpenGraphVideoWidth,
                          defaultHeight: h.defaultOpenGraphVideoHeight
                      })), e.openGraph.audio && n.push.apply(n, c("audio", e.openGraph.audio)), e.openGraph.locale && n.push(a.createElement("meta", {
                          key: "og:locale",
                          property: "og:locale",
                          content: e.openGraph.locale
                      })), (e.openGraph.siteName || e.openGraph.site_name) && n.push(a.createElement("meta", {
                          key: "og:site_name",
                          property: "og:site_name",
                          content: e.openGraph.siteName || e.openGraph.site_name
                      }))
                  }
                  return e.canonical && n.push(a.createElement("link", {
                      rel: "canonical",
                      href: e.canonical,
                      key: "canonical"
                  })), e.additionalMetaTags && e.additionalMetaTags.length > 0 && e.additionalMetaTags.forEach((function(e) {
                      var t, o, r = e.keyOverride,
                          h = i(e, l);
                      n.push(a.createElement("meta", p({
                          key: "meta:" + (null != (t = null != (o = null != r ? r : h.name) ? o : h.property) ? t : h.httpEquiv)
                      }, h)))
                  })), null != (r = e.additionalLinkTags) && r.length && e.additionalLinkTags.forEach((function(e) {
                      var t;
                      n.push(a.createElement("link", p({
                          key: "link" + (null != (t = e.keyOverride) ? t : e.href) + e.rel
                      }, e)))
                  })), n
              },
              s = function(e) {
                  return a.createElement(n(), null, d(e))
              },
              m = function(e) {
                  var t = e.title,
                      o = e.themeColor,
                      r = e.noindex,
                      n = void 0 !== r && r,
                      p = e.nofollow,
                      i = e.robotsProps,
                      l = e.description,
                      h = e.canonical,
                      c = e.openGraph,
                      m = e.facebook,
                      u = e.twitter,
                      g = e.additionalMetaTags,
                      f = e.titleTemplate,
                      y = e.defaultTitle,
                      G = e.mobileAlternate,
                      k = e.languageAlternates,
                      v = e.additionalLinkTags,
                      E = e.useAppDir,
                      b = void 0 !== E && E;
                  return a.createElement(a.Fragment, null, b ? d({
                      title: t,
                      themeColor: o,
                      noindex: n,
                      nofollow: p,
                      robotsProps: i,
                      description: l,
                      canonical: h,
                      facebook: m,
                      openGraph: c,
                      additionalMetaTags: g,
                      twitter: u,
                      titleTemplate: f,
                      defaultTitle: y,
                      mobileAlternate: G,
                      languageAlternates: k,
                      additionalLinkTags: v
                  }) : a.createElement(s, {
                      title: t,
                      themeColor: o,
                      noindex: n,
                      nofollow: p,
                      robotsProps: i,
                      description: l,
                      canonical: h,
                      facebook: m,
                      openGraph: c,
                      additionalMetaTags: g,
                      twitter: u,
                      titleTemplate: f,
                      defaultTitle: y,
                      mobileAlternate: G,
                      languageAlternates: k,
                      additionalLinkTags: v
                  }))
              },
              u = Object.freeze({
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&apos;"
              });
          new RegExp("[" + Object.keys(u).join("") + "]", "g")
      },
      97729: function(e, t, o) {
          e.exports = o(30501)
      }
  }
]);