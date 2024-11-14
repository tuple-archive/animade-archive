(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    6502: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 4739)),
        Promise.resolve().then(n.bind(n, 6179)),
        Promise.resolve().then(n.t.bind(n, 3547, 23)),
        Promise.resolve().then(n.t.bind(n, 4680, 23)),
        Promise.resolve().then(n.bind(n, 9771)),
        Promise.resolve().then(n.bind(n, 8970)),
        Promise.resolve().then(n.bind(n, 1154)),
        Promise.resolve().then(n.bind(n, 3951)),
        Promise.resolve().then(n.t.bind(n, 1066, 23));
    },
    9771: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o;
        },
      });
      var l = n(5862),
        r = n(7139),
        i = n(7058),
        a = n(766);
      let s = "${{ _URL }}".replace(/\$\{\{ GITHUB_REPO_URL }}/gi, "");
      function o(e) {
        let {
            asset: t,
            chromeless: n,
            className: o,
            priority: u,
            ratio: d,
            style: c,
          } = e,
          f = (0, i.useRef)(),
          p = (0, r.Y)(f, { margin: "200px", once: !0 }),
          x = t.embeddedAsset,
          m = x.width,
          h = x.height,
          v = "".concat(m, "/").concat(h),
          g = (function (e) {
            let t = new URL(e);
            if (!t.hostname.includes("vimeo.com")) return !1;
            let n = t.pathname.split("/").filter(Boolean).join("_");
            return "".concat(s, "/_videos/vimeo_").concat(n, ".mp4");
          })(x.url);
        return (0, l.jsx)("div", {
          ref: f,
          className: o,
          style: { aspectRatio: null != d ? d : v, ...c },
          children:
            p || u
              ? g
                ? (0, l.jsx)("video", {
                    src: g,
                    preload: "true",
                    playsInline: !0,
                    autoPlay: !!n || void 0,
                    loop: !!n || void 0,
                    muted: !!n || void 0,
                    controls: !n || void 0,
                    className: "w-full",
                    style: { aspectRatio: null != d ? d : v },
                  })
                : (0, l.jsx)("div", {
                    dangerouslySetInnerHTML: { __html: x.html },
                    className: (0, a.Z)(
                      "w-full [&>*]:h-full [&>*]:w-full",
                      n && "pointer-events-none"
                    ),
                    style: { aspectRatio: null != d ? d : v },
                  })
              : null,
        });
      }
    },
    7857: function (e, t, n) {
      "use strict";
      var l = n(5862),
        r = n(1017),
        i = n(766),
        a = n(4231),
        s = n(7058);
      let o = { text: "text-link" },
        u = (0, s.forwardRef)(function (e, t) {
          let { href: n, isExternal: s, className: u, variant: d, ...c } = e;
          return (
            (s || (n.startsWith("http") && !n.startsWith(r.FH))) &&
              (c.target = "_blank"),
            (0, l.jsx)(a.default, {
              ref: t,
              href: n,
              className: (0, i.Z)("group/link", u, o[d]),
              ...c,
            })
          );
        });
      t.Z = u;
    },
    8970: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return c;
        },
      });
      var l = n(5862),
        r = n(766),
        i = n(7058);
      let a = {
          primary: "bg-base-fg border-base-fg text-base-bg",
          secondary: "border-base-fg hover:bg-base-fg hover:text-base-bg",
        },
        s = (0, i.forwardRef)(function (e, t) {
          let {
            as: n = "button",
            className: i,
            variant: s = "secondary",
            rounded: o = !0,
            ...u
          } = e;
          return (0,
          l.jsx)(n, { ref: t, className: (0, r.Z)("inline-flex h-14 cursor-pointer items-center justify-center border-2 px-12 font-bold uppercase tracking-wider transition", o && "rounded-full", a[s], i), ...u });
        }),
        o = (0, i.forwardRef)(function (e, t) {
          let { className: n, ...i } = e;
          return (0,
          l.jsx)("input", { ref: t, className: (0, r.Z)("inline-flex h-14 items-center rounded-full border-2 border-base-fg bg-base-bg px-6 text-base-fg transition placeholder:text-base-fg/50", n), ...i });
        });
      var u = n(8461),
        d = n(3954);
      function c(e) {
        let { subscribeUrl: t } = e;
        return (0, l.jsx)(d.Z, {
          url: t,
          render: (e) => (0, l.jsx)(f, { ...e }),
        });
      }
      function f(e) {
        let { subscribe: t, status: n, message: r } = e,
          [a, d] = (0, i.useState)();
        return (0, l.jsxs)("div", {
          children: [
            (0, l.jsxs)("form", {
              action: "#",
              onSubmit: function (e) {
                e.preventDefault(), a && t({ EMAIL: a });
              },
              className: "grid gap-y-text lg:grid-cols-[1fr_min-content]",
              children: [
                (0, l.jsx)(o, {
                  type: "email",
                  autoComplete: "email",
                  required: !0,
                  value: a,
                  onChange: (e) => d(e.target.value),
                  placeholder: "email@example.com",
                  className: "rounded-full lg:rounded-r-none",
                }),
                (0, l.jsx)(s, {
                  variant: "primary",
                  className: "rounded-full px-8 lg:rounded-l-none",
                  children: "Submit",
                }),
              ],
            }),
            r ? (0, l.jsx)(u.Z, { className: "mt-text", children: r }) : null,
          ],
        });
      }
    },
    1154: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return a;
        },
      });
      var l = n(5862),
        r = n(7857),
        i = n(7516);
      function a() {
        let e = (0, i.usePathname)();
        return (0, l.jsx)(r.Z, {
          href: "/api/preview-exit?url=".concat(e),
          className:
            "fixed left-0 top-0 z-50 bg-yellow-400 px-3 py-2 font-bold",
          children: "Exit Preview",
        });
      }
    },
    3951: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return b;
        },
      });
      var l = n(5862),
        r = n(220),
        i = n(7058);
      function a(e) {
        let { isOpen: t, ...n } = e,
          [a, s] = (0, i.useState)(t),
          o = (0, i.useRef)(),
          u = (0, r.k)(o, {
            path: "/lottie/burger.json",
            autoplay: !1,
            loop: !1,
          }),
          d = (0, i.useRef)(),
          c = (0, r.k)(d, {
            path: "/lottie/close.json",
            autoplay: !1,
            loop: !1,
            initialSegment: [70],
          });
        return (
          (0, i.useEffect)(() => {
            t !== a &&
              u &&
              c &&
              (t && !a
                ? c.playSegments([1, 30], !0)
                : (c.playSegments([60, 90], !0),
                  u.playSegments([170, 220], !0)),
              s(t));
          }, [u, c, t, a]),
          (0, l.jsx)("div", {
            ...n,
            children: (0, l.jsxs)("div", {
              className: "relative h-[52px] w-[52px] lg:h-[92px] lg:w-[92px]",
              onMouseEnter: () => u.playSegments([60, 100], !0),
              onMouseLeave: () => u.playSegments([120, 165], !0),
              children: [
                (0, l.jsx)("div", { ref: o, className: "absolute inset-0" }),
                (0, l.jsx)("div", { ref: d, className: "absolute inset-0" }),
              ],
            }),
          })
        );
      }
      var s = n(766);
      function o() {
        let [e, t] = (0, i.useState)("initial"),
          n = (0, i.useRef)(),
          a = (0, r.k)(n, {
            path: "/lottie/eyes-initial.json",
            autoplay: !1,
            loop: !1,
          }),
          o = (0, i.useRef)(),
          u = (0, r.k)(o, {
            path: "/lottie/eyes-loop.json",
            autoplay: !1,
            loop: !0,
          });
        return (
          (0, i.useEffect)(() => {
            if (!a || !u) return;
            let n = () => {
                window.removeEventListener("scroll", l),
                  a.removeEventListener("complete", n),
                  t("popped"),
                  u.play();
              },
              l = () => {
                let l = window.scrollY;
                "initial" === e && l < 300
                  ? a.goToAndStop(l / 5, !0)
                  : "popped" !== e &&
                    (t("changing"),
                    a.addEventListener("complete", n),
                    a.play());
              };
            return (
              window.addEventListener("scroll", l),
              l(),
              () => {
                window.removeEventListener("scroll", l);
              }
            );
          }, [a, u, e]),
          (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("div", {
                ref: n,
                className: (0, s.Z)(
                  "fixed left-1/2 top-0 z-50 -translate-x-1/2 w-[190px] md:w-[230px] lg:w-[380px]",
                  "popped" === e && "hidden"
                ),
              }),
              (0, l.jsx)("div", {
                ref: o,
                className: (0, s.Z)(
                  "fixed left-1/2 top-0 z-50 -translate-x-1/2 w-[190px] md:w-[230px] lg:w-[380px]",
                  "popped" !== e && "hidden"
                ),
              }),
            ],
          })
        );
      }
      var u = n(7857),
        d = n(1017);
      let c = (0, i.forwardRef)(function (e, t) {
        let { link: n, children: r = null == n ? void 0 : n.text, ...i } = e;
        return (0,
        l.jsx)(u.Z, { ref: t, href: (0, d.je)(n), ...i, children: r });
      });
      var f = n(8461),
        p = { type: "spring", damping: 6, velocity: 1e3, stiffness: 100 },
        x = { type: "spring", damping: 14, velocity: 2e3, stiffness: 300 },
        m = n(5108),
        h = n(7516),
        v = n(9653),
        g = n(5056);
      function b(e) {
        let { siteHeaderLinks: t } = e,
          n = (0, h.usePathname)(),
          [r, s] = (0, v.Z)(!1);
        (0, g.Z)(r),
          (0, i.useEffect)(() => {
            s(!1);
          }, [n, s]);
        let b = 0.4 + 0.05 * t.length;
        return (0, l.jsxs)("div", {
          className: "inverse-colors",
          children: [
            (0, l.jsx)(u.Z, {
              href: "/",
              className: "block",
              children: (0, l.jsx)(o, {}),
            }),
            (0, l.jsx)(m.E.div, {
              initial: !1,
              animate: r ? "true" : "false",
              variants: {
                true: {
                  display: "block",
                  x: "-25%",
                  y: 0,
                  transition: { duration: 0.5 },
                },
                false: {
                  display: "none",
                  x: 0,
                  y: "-100%",
                  transition: {
                    delay: 0.2,
                    duration: 0.2,
                    display: { delay: b },
                  },
                },
              },
              className:
                "fixed inset-0 z-10 h-2/1 w-2/1 rounded-bl-full bg-brand-black",
            }),
            (0, l.jsx)(m.E.nav, {
              initial: !1,
              animate: r ? "true" : "false",
              variants: {
                true: { display: "flex" },
                false: {
                  display: "none",
                  transition: { display: { delay: b } },
                },
              },
              className:
                "fixed left-0 top-0 z-20 min-h-screen w-full items-center justify-center text-center",
              children: (0, l.jsx)(f.Z, {
                as: "ul",
                variant: "heading1",
                className: "grid gap-y-text",
                children: t.map((e, t) => {
                  let { navLink: i } = e;
                  return (0, l.jsx)(
                    m.E.li,
                    {
                      initial: !1,
                      animate: r ? "true" : "false",
                      variants: {
                        true: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            ...x,
                            duration: 0.25,
                            delay: 0.25 + 0.05 * t,
                            opacity: {},
                          },
                        },
                        false: {
                          opacity: 0,
                          y: -48,
                          transition: {
                            ...p,
                            duration: 0.2,
                            x: {},
                            opacity: {},
                          },
                        },
                      },
                      children: (0, l.jsx)(c, {
                        link: i[0],
                        className: "text-white [&[data-active]]:text-brand-red",
                        "data-active": (0, d.PB)((0, d.zh)((0, d.je)(i[0]), n)),
                        children: i.text,
                      }),
                    },
                    t
                  );
                }),
              }),
            }),
            (0, l.jsxs)("button", {
              className: "fixed right-page top-2 z-40 lg:top-4",
              title: r ? "Close menu" : "Open menu",
              onClick: s,
              children: [
                (0, l.jsx)(a, { isOpen: r }),
                (0, l.jsx)("span", {
                  className: "sr-only",
                  children: r ? "Close menu" : "Open menu",
                }),
              ],
            }),
          ],
        });
      }
    },
    8461: function (e, t, n) {
      "use strict";
      n.d(t, {
        y: function () {
          return a;
        },
      });
      var l = n(5862),
        r = n(766),
        i = n(7058);
      let a = {
          heading1:
            "text-4xl lg:text-5xl font-bold tracking-tight text-balance",
          heading2:
            "text-3xl lg:text-4xl font-bold tracking-tight text-balance",
          heading3: "text-2xl lg:text-3xl font-bold text-balance",
          large: "text-xl lg:text-2xl text-pretty",
          default: "lg:text-xl text-pretty",
          small: "text-sm text-pretty",
        },
        s = (0, i.forwardRef)(function (e, t) {
          var n;
          let { as: i = "p", className: s, variant: o, ...u } = e;
          return (0,
          l.jsx)(i, { ref: t, className: (0, r.Z)(null !== (n = a[o]) && void 0 !== n ? n : a.default, s), "data-variant": o, ...u });
        });
      t.Z = s;
    },
    1017: function (e, t, n) {
      "use strict";
      n.d(t, {
        FH: function () {
          return l;
        },
        PB: function () {
          return i;
        },
        je: function () {
          return r;
        },
        zh: function () {
          return a;
        },
      });
      let l = "https://http://localhost:3000";
      function r(e) {
        var t;
        return (
          null == e
            ? void 0
            : null === (t = e.element) || void 0 === t
            ? void 0
            : t.uri
        )
          ? "/".concat(e.element.uri.replace("__home__", ""))
          : e.url;
      }
      function i(e) {
        return !!e || null;
      }
      function a(e, t) {
        return "/" === e ? "/" === t : t.startsWith(e);
      }
    },
    1066: function () {},
  },
  function (e) {
    e.O(0, [832, 983, 547, 349, 816, 158, 660, 744], function () {
      return e((e.s = 6502));
    }),
      (_N_E = e.O());
  },
]);
