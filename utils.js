"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8597], {
        6620: function(e, t, r) {
            r.d(t, {
                N: function() {
                    return l
                },
                b: function() {
                    return i
                }
            });
            var n = r(50154),
                a = r(61003),
                o = r(75619);
            const i = (0, a.w0)([], ((e, t) => {
                    if ("remove" === t.type) {
                        const {
                            key: r
                        } = t;
                        return e.filter((e => {
                            let {
                                key: t
                            } = e;
                            return t !== r
                        }))
                    }
                    if ("add" === t.type) {
                        const {
                            data: r
                        } = t;
                        return [...e, r].sort(((e, t) => e.top - t.top))
                    }
                    throw new Error("unknown action type")
                })),
                l = (0, n.cn)({ ...o.bf,
                    theme: o.V6,
                    hasTransition: !1
                })
        },
        66429: function(e, t, r) {
            r.d(t, {
                i: function() {
                    return l
                },
                $: function() {
                    return s
                }
            });
            var n = r(94630),
                a = r(53116),
                o = r.n(a);
            const i = {
                    dataset: "production",
                    projectId: "3nm6d03a",
                    useCdn: !1,
                    apiVersion: "2022-03-13"
                },
                l = e => o()(i).image(e),
                s = (0, n.KF)(i)
        },
        58597: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return Se
                }
            });
            var n = r(52903),
                a = r(28165),
                o = r(11198),
                i = r(50154),
                l = r(6620),
                s = r(2784),
                c = r(75619),
                d = r(29568);
            var u = e => {
                    const t = (0, i.b9)(d.uY);
                    (0, s.useEffect)((() => {
                        if (!e) return;
                        const {
                            learnSublinks: r,
                            exploreSublinks: n
                        } = e, a = c.cx.map((e => ({ ...e,
                            subItems: [...r || [], ...n || []].filter((t => {
                                let {
                                    href: r
                                } = t;
                                var n;
                                return r.includes(null === (n = e) || void 0 === n ? void 0 : n.href)
                            }))
                        })));
                        t(a)
                    }), [e, t])
                },
                p = r(11138);
            var g = r(46896),
                h = r(40330);
            var v = e => {
                    var t;
                    const r = (0, i.Dv)(l.b),
                        n = (0, g.Z)(null === (t = r) || void 0 === t ? void 0 : t.length),
                        a = 0 !== r.length && r.length === n,
                        {
                            y: o
                        } = (0, p.Z)(),
                        {
                            windowHeight: d
                        } = (0, h.Z)(),
                        u = o + d,
                        v = r.reduce(((e, t, n) => {
                            const {
                                top: a,
                                newTheme: o
                            } = t, i = r[n + 1];
                            return u >= a && (!i || u < i.top) ? o : e
                        }), e),
                        m = (e => {
                            const t = c.yU[e];
                            return e && !t ? (console.error('Theme not found. Make sure that the theme "'.concat(e, '" is mapped to a corresponding data.')), c.bf) : t
                        })(v),
                        f = (0, i.b9)(l.N);
                    (0, s.useEffect)((() => {
                        f({ ...m,
                            theme: v,
                            hasTransition: a
                        })
                    }), [f, m, v, a])
                },
                m = r(40867),
                f = r(73235),
                x = r(13565),
                b = r(35300),
                Z = r(69656),
                w = r(65591),
                y = r(13048);

            function k() {
                const e = (0, f._)(["\n          background-color: var(--purple);\n\n          div svg {\n            color: var(--purple);\n          }\n        "]);
                return k = function() {
                    return e
                }, e
            }

            function N() {
                const e = (0, f._)(["\n          background-color: var(--moonYellow);\n\n          div svg {\n            color: var(--moonYellow);\n          }\n        "]);
                return N = function() {
                    return e
                }, e
            }

            function C() {
                const e = (0, f._)(["\n          background-color: var(--white);\n\n          div svg {\n            color: var(--white);\n          }\n        "]);
                return C = function() {
                    return e
                }, e
            }

            function S() {
                const e = (0, f._)(["\n          background-color: var(--purple);\n\n          div svg {\n            color: var(--purple);\n          }\n        "]);
                return S = function() {
                    return e
                }, e
            }
            const B = {
                    block: {
                        normal: e => {
                            let {
                                children: t
                            } = e;
                            return (0, n.tZ)(w.xv, {
                                size: "s",
                                children: t
                            })
                        }
                    },
                    marks: {
                        em: y.defaultComponents.marks.em,
                        strong: y.defaultComponents.marks.strong,
                        link: y.defaultComponents.marks.link
                    }
                },
                z = (0, o.Z)("div", {
                    target: "eebmsek0"
                })("position:fixed;bottom:var(--spacingXS);right:var(--spacingXS);z-index:var(--zTop);border-radius:18px;display:flex;align-items:center;justify-content:center;width:460px;", c.Nn.m, "{bottom:12px;left:20px;right:20px;width:auto;}", (e => {
                    let {
                        styles: t
                    } = e;
                    switch (t.alertStyle) {
                        case "Purple":
                            return (0, a.iv)(k());
                        case "Yellow":
                            return (0, a.iv)(N());
                        case "White":
                            return (0, a.iv)(C());
                        default:
                            return (0, a.iv)(S())
                    }
                })),
                L = (0, o.Z)("div", {
                    target: "eebmsek1"
                })("position:absolute;width:auto;top:-58px;left:40px;", c.Nn.m, "{left:20px;}"),
                X = (0, o.Z)("div", {
                    target: "eebmsek2"
                })("display:flex;text-align:left;gap:var(--spacingS);padding:var(--spacingS) var(--spacingL) var(--spacingS) var(--spacingS);"),
                j = (0, o.Z)("section", {
                    target: "eebmsek3"
                })("display:flex;b{font-weight:bold;}a{text-decoration:underline;}"),
                E = (0, o.Z)(Z.Z, {
                    target: "eebmsek4"
                })("position:absolute;top:var(--spacingXXS);right:var(--spacingXXS);padding:6px;color:inherit;", c.Nn.m, "{svg{width:var(--spacingXS);height:var(--spacingXS);}}");
            var q = e => {
                let {
                    styles: t,
                    content: r,
                    onClose: a
                } = e;
                return (0, n.BX)(z, {
                    className: x.zi,
                    styles: t,
                    children: [t.showDecoration && (0, n.tZ)(L, {
                        children: (0, n.tZ)("svg", {
                            width: "112",
                            height: "60",
                            viewBox: "0 0 112 60",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0, n.BX)("g", {
                                fill: "currentColor",
                                children: [(0, n.tZ)("path", {
                                    d: "M78.8509 28.6491C85.1052 28.6491 90.1754 23.5789 90.1754 17.3246C90.1754 11.0702 85.1052 6.00009 78.8509 6.00009C72.5965 6.00009 67.5264 11.0702 67.5264 17.3246C67.5264 23.5789 72.5965 28.6491 78.8509 28.6491Z"
                                }), (0, n.tZ)("path", {
                                    d: "M106.43 -0.000114441C109.492 -0.000114441 111.974 2.48195 111.974 5.54374C111.974 8.60552 109.492 11.0876 106.43 11.0876C103.368 11.0876 100.886 8.60552 100.886 5.54374C100.886 2.48195 103.368 -0.000114441 106.43 -0.000114441Z"
                                }), (0, n.tZ)("path", {
                                    d: "M61.5262 41.3691C50.4385 51.7636 33.114 57.3062 7.4737 58H0V60H105V58H104.228C99.3285 58 94.2406 57.9057 90.0023 55.4478C87.6454 54.081 85.2208 52.0296 83.7016 48.9908C80.2367 42.0601 75.7988 27.9888 61.5262 41.3691Z"
                                })]
                            })
                        })
                    }), (0, n.tZ)(E, {
                        variant: "close",
                        onClick: a,
                        children: ""
                    }), (0, n.tZ)(X, {
                        alertStyle: t.alertStyle,
                        children: (0, n.tZ)(j, {
                            children: (0, n.tZ)(b.YI, {
                                value: r,
                                components: B
                            })
                        })
                    })]
                })
            };
            const P = "acknowledgements";
            var T = e => {
                    let {
                        styles: t,
                        content: r,
                        pageReferences: a
                    } = e;
                    const o = a.map((e => {
                            let {
                                slug: t
                            } = e;
                            return t
                        })),
                        [i, l] = (0, s.useState)(!1),
                        c = (0, s.useCallback)((() => {
                            l(!1);
                            for (const e of o) {
                                const t = {
                                        [e]: {
                                            acceptedAt: (0, m.p6)(Date())
                                        }
                                    },
                                    r = JSON.parse(localStorage.getItem(P));
                                localStorage.setItem(P, JSON.stringify({ ...r,
                                    ...t
                                }))
                            }
                        }), [o]);
                    return (0, s.useEffect)((() => {
                        const e = JSON.parse(localStorage.getItem(P)),
                            t = a.some((t => {
                                let {
                                    slug: r,
                                    updatedAt: n
                                } = t;
                                var a;
                                const o = null === (a = e) || void 0 === a ? void 0 : a[r];
                                return !o || Date.parse(o.acceptedAt) < Date.parse((0, m.p6)(n))
                            }));
                        l(t)
                    }), [o, a, i]), i && (0, n.tZ)(q, {
                        styles: t,
                        content: r,
                        onClose: c
                    })
                },
                I = r(39097),
                M = r.n(I);
            const F = (0, o.Z)("div", {
                    target: "e1b0ades0"
                })("position:fixed;bottom:24px;left:24px;right:24px;z-index:var(--zTop);display:flex;align-items:center;justify-content:center;", c.Nn.m, "{bottom:12px;left:20px;right:20px;}"),
                W = (0, o.Z)("div", {
                    target: "e1b0ades1"
                })("padding:var(--spacingXXS) var(--spacingXS);background-color:var(--white);color:var(--black);border-radius:32px;a{text-decoration:underline;}");
            var D = e => {
                    let {
                        preview: t
                    } = e;
                    return t ? (0, n.tZ)(F, {
                        className: x.zi,
                        children: (0, n.tZ)(W, {
                            children: (0, n.BX)(w.xv, {
                                size: "m",
                                align: "center",
                                children: ["This page is a preview. ", (0, n.tZ)(M(), {
                                    href: "/api/exit-preview",
                                    children: "Click here"
                                }), " to exit preview mode."]
                            })
                        })
                    }) : null
                },
                V = r(83485),
                H = r(32212),
                _ = r(96299),
                R = r(59473),
                Y = r(41496),
                A = r(66582),
                J = r(36919),
                U = r(4960),
                G = r(80578),
                O = r(93983);
            var $ = () => {
                const e = (0, U.c)(0),
                    t = (0, G.H)(e, [.05, .15], [0, 1]);
                return (0, n.tZ)(O.m.svg, {
                    stroke: "currentColor",
                    fill: "none",
                    strokeWidth: "2",
                    viewBox: "0 0 24 24",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    initial: {
                        scale: .4
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        duration: .6,
                        delay: .2,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    },
                    children: (0, n.tZ)(O.m.path, {
                        d: "M20 6 L9 17 L4 12",
                        initial: {
                            pathLength: 0,
                            opacity: 1
                        },
                        animate: {
                            pathLength: 1
                        },
                        style: {
                            pathLength: e,
                            opacity: t
                        }
                    })
                })
            };
            const Q = (0, o.Z)(O.m.svg, {
                    target: "e1y56kfn0"
                })("stroke:var(--white);stroke-width:8px;fill:transparent;"),
                K = (0, o.Z)("circle", {
                    target: "e1y56kfn1"
                })("stroke-opacity:0.25;"),
                ee = (0, o.Z)(O.m.circle, {
                    target: "e1y56kfn2"
                })("stroke-opacity:1;");
            var te = () => {
                const e = Math.ceil(2 * Math.PI * 45),
                    t = {
                        duration: .6,
                        delay: .2,
                        ease: "easeIn",
                        repeat: 1 / 0
                    },
                    r = {
                        hidden: {
                            strokeDashoffset: e,
                            transition: t
                        },
                        show: {
                            strokeDashoffset: 0,
                            transition: t
                        }
                    };
                return (0, n.BX)(Q, {
                    viewBox: "0 0 100 100",
                    initial: {
                        scale: 0,
                        rotate: -90
                    },
                    animate: {
                        scale: 1
                    },
                    transition: {
                        type: "spring"
                    },
                    children: [(0, n.tZ)(K, {
                        cx: "50",
                        cy: "50",
                        r: 45,
                        className: "circle"
                    }), (0, n.tZ)(ee, {
                        cx: "50",
                        cy: "50",
                        r: 45,
                        strokeLinecap: "round",
                        strokeDashoffset: 0,
                        strokeDasharray: e,
                        variants: r,
                        initial: "hidden",
                        animate: "show"
                    })]
                })
            };
            const re = (0, o.Z)("form", {
                    target: "e191zl1w0"
                })("display:flex;flex-direction:column;padding:24px;height:209px;border-radius:16px;width:100%;background-color:", (e => {
                    let {
                        showError: t
                    } = e;
                    return t ? "var(--tomato)" : "var(--themeFooterInputColor)"
                }), ";justify-content:space-between;", c.Nn.m, "{padding:8px;height:120px;border-radius:8px;}"),
                ne = (0, o.Z)(w.xv, {
                    target: "e191zl1w1"
                })("display:flex;color:", (e => {
                    let {
                        showError: t
                    } = e;
                    return t ? "var(--red)" : "var(--themeTextcolor)"
                }), ";"),
                ae = (0, o.Z)("div", {
                    target: "e191zl1w2"
                })("display:flex;align-items:center;justify-content:space-between;"),
                oe = (0, o.Z)("div", {
                    target: "e191zl1w3"
                })("display:flex;align-items:flex-end;justify-content:space-between;gap:8px;"),
                ie = (0, o.Z)(Z.Z, {
                    target: "e191zl1w4"
                })("flex-shrink:0;"),
                le = (0, o.Z)("span", {
                    target: "e191zl1w5"
                })("display:flex;gap:8px;align-items:center;"),
                se = (0, o.Z)("input", {
                    target: "e191zl1w6"
                })("display:flex;width:100%;border:none;background-color:", (e => {
                    let {
                        showError: t
                    } = e;
                    return t ? "var(--tomato)" : "var(--themeFooterInputColor)"
                }), ";color:", (e => {
                    let {
                        showError: t
                    } = e;
                    return t ? "var(--red)" : "var(--themeTextcolor)"
                }), ";font-family:var(--phantomFont);font-size:64px;line-height:1;letter-spacing:-0.025em;font-weight:400;", c.Nn.xl, "{font-size:48px;}", c.Nn.m, "{grid-row:4;font-size:32px;}", c.Nn.s, "{font-size:28px;height:auto;}");
            var ce = e => {
                    let {
                        inputTitle: t,
                        placeholder: r,
                        buttonLabel: a,
                        onSuccessfulSignup: o
                    } = e;
                    const [i, l] = (0, s.useState)(""), [c, d] = (0, s.useState)(!1), [u, p] = (0, s.useState)(t), [g, h] = (0, s.useState)(!1), [v, m] = (0, s.useState)(!1), [f, x] = (0, s.useState)(!1), b = (0, s.useCallback)((e => {
                        const t = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e);
                        d(!(!e || !t))
                    }), []), Z = (0, s.useCallback)((() => {
                        p(t), h(!1), m(!1), x(!1)
                    }), [t]), y = (0, s.useCallback)((e => {
                        const t = e.target.value;
                        l(t), b(t)
                    }), [b]), k = (0, J.fH)("newsletterSignUp");
                    return (0, n.BX)(re, {
                        onSubmit: async e => {
                            if (e.preventDefault(), !c) return p("Please enter a valid email address"), void h(!0);
                            m(!0);
                            const {
                                error: t,
                                message: r
                            } = await (async e => {
                                const t = await fetch("/api/signup", {
                                    method: "PUT",
                                    body: e
                                });
                                return await t.json()
                            })(i);
                            t ? (p(r), h(!0)) : (x(!0), o()), m(!1)
                        },
                        onSubmitCapture: k,
                        showError: g,
                        children: [(0, n.tZ)(ae, {
                            children: (0, n.tZ)(se, {
                                className: "custom-focus",
                                type: "email",
                                showError: g,
                                autoComplete: "email",
                                id: "email",
                                name: "email",
                                placeholder: r,
                                onInput: Z,
                                value: i,
                                onChange: y
                            })
                        }), (0, n.BX)(oe, {
                            children: [(0, n.tZ)(ne, {
                                showError: g,
                                size: "m",
                                children: u
                            }), (0, n.tZ)(ie, {
                                disabled: v || g || f,
                                type: "submit",
                                children: v ? (0, n.BX)(le, {
                                    children: [(0, n.tZ)(te, {}), (0, n.tZ)(w.xv, {
                                        size: "s",
                                        children: "Signing you up"
                                    })]
                                }) : f ? (0, n.BX)(le, {
                                    children: [(0, n.tZ)($, {}), (0, n.tZ)(w.xv, {
                                        size: "s",
                                        children: A.tq ? "Signed up" : "You are on the list"
                                    })]
                                }) : a
                            })]
                        })]
                    })
                },
                de = r(1508);
            const ue = (0, o.Z)("footer", {
                    target: "e1j2yc8k0"
                })("display:flex;flex-direction:column;justify-content:space-between;margin:auto;max-width:var(--maxWidthContent);overflow:hidden;padding:var(--spacingS) var(--spacingL);width:100%;", c.Nn.xl, "{padding:32px;}", c.Nn.m, "{padding:20px;}", c.Nn.s, "{padding:0;}"),
                pe = (0, o.Z)("div", {
                    target: "e1j2yc8k1"
                })("background-color:var(--themeFooterBgColor);position:relative;padding:var(--spacingM);border-radius:var(--spacingS);padding:48px;", c.Nn.xl, "{padding:32px 32px 130px;}", c.Nn.m, "{border-radius:16px;padding:20px 20px 118px;}", c.Nn.s, "{border-radius:0;}"),
                ge = (0, o.Z)(H.oe, {
                    target: "e1j2yc8k2"
                })("grid-row-gap:var(--spacingXL);padding-left:0;padding-right:0;", c.Nn.xl, "{padding-left:0;padding-right:0;}", c.Nn.m, "{grid-row-gap:48px;padding-left:0;padding-right:0;}"),
                he = (0, o.Z)(H.sg, {
                    target: "e1j2yc8k3"
                })("grid-row:1;", c.Nn.xl, "{position:absolute;bottom:32px;left:32px;}", c.Nn.m, "{bottom:20px;left:20px;}"),
                ve = (0, o.Z)(w.Vp, {
                    target: "e1j2yc8k4"
                })("position:absolute;user-select:none;color:var(--light10);", c.Nn.xl, "{bottom:32px;right:32px;}", c.Nn.m, "{bottom:20px;right:20px;}"),
                me = (0, o.Z)(H.sg, {
                    target: "e1j2yc8k5"
                })("display:flex;flex-direction:column;gap:var(--spacingXS);grid-row:2;", (e => {
                    let {
                        index: t
                    } = e;
                    return t >= 2 && (0, a.iv)(c.Nn.s, "{grid-row:3;}")
                })),
                fe = (0, o.Z)("ul", {
                    target: "e1j2yc8k6"
                })("display:flex;flex-direction:column;gap:var(--spacingXS);@media (hover:hover){a:hover{color:var(--light9);}}"),
                xe = (0, o.Z)(w.Vp, {
                    target: "e1j2yc8k7"
                })("color:var(--dark10);"),
                be = (0, o.Z)(R.Z, {
                    target: "e1j2yc8k8"
                })("display:flex;align-items:center;border-radius:var(--spacingM);color:var(--themeNavLinkColor);"),
                Ze = (0, o.Z)(de.Z, {
                    target: "e1j2yc8k9"
                })("width:60px;height:50px;"),
                we = (0, o.Z)(_.Z, {
                    target: "e1j2yc8k10"
                })("display:flex;gap:4px;align-items:center;"),
                ye = (0, o.Z)(V.J, {
                    target: "e1j2yc8k11"
                })("width:12px;height:auto;color:var(--themeTextcolor);transform:translateY(-1px);");
            var ke = e => {
                    let {
                        newsletter: t,
                        footerLinksCategory: r
                    } = e;
                    const [a, o] = (0, s.useState)(!1), i = r.map(((e, t) => ({ ...e,
                        column: c.mj[t]
                    })));
                    return (0, n.tZ)(ue, {
                        children: (0, n.BX)(pe, {
                            children: [(0, n.BX)(ge, {
                                children: [(0, n.tZ)(he, {
                                    start: {
                                        mobile: 1,
                                        tablet: 1,
                                        desktop: 1
                                    },
                                    span: {
                                        mobile: 1,
                                        tablet: 1,
                                        desktop: 4
                                    },
                                    align: "flex-start",
                                    children: (0, n.tZ)(be, {
                                        href: "/",
                                        "aria-label": "To homepage",
                                        children: (0, n.tZ)(Ze, {
                                            variant: "wink",
                                            color: "purple",
                                            play: a
                                        })
                                    })
                                }), (0, n.tZ)(H.sg, {
                                    start: {
                                        mobile: 1,
                                        tablet: 1,
                                        desktop: 5
                                    },
                                    span: {
                                        mobile: 6,
                                        tablet: 8,
                                        desktop: 8
                                    },
                                    align: "flex-start",
                                    children: (0, n.tZ)(ce, { ...t,
                                        onSuccessfulSignup: () => o(!0)
                                    })
                                })]
                            }), (0, n.tZ)("nav", {
                                children: (0, n.tZ)(ge, {
                                    as: "ul",
                                    children: i.map(((e, t) => (0, n.BX)(me, {
                                        start: e.column.start,
                                        span: e.column.span,
                                        align: "flex-start",
                                        index: t,
                                        as: "li",
                                        children: [(0, n.tZ)(xe, {
                                            as: "span",
                                            children: e.title
                                        }), (0, n.tZ)(fe, {
                                            children: e.links.map((e => "button" === e._type ? (0, n.tZ)("li", {
                                                children: (0, n.tZ)(Y.Z, { ...e.link,
                                                    children: (0, n.tZ)(w.Vp, {
                                                        as: "span",
                                                        children: e.label
                                                    })
                                                })
                                            }, e._key) : "social" === e._type ? (0, n.tZ)("li", {
                                                children: (0, n.BX)(we, {
                                                    href: e.url,
                                                    children: [(0, n.tZ)(ye, {
                                                        type: e.icon
                                                    }), (0, n.tZ)(w.Vp, {
                                                        as: "span",
                                                        children: e.label
                                                    })]
                                                })
                                            }, e._key) : void 0))
                                        })]
                                    }, t)))
                                })
                            }), (0, n.BX)(ve, {
                                children: ["\xa9 Phantom ", (new Date).getFullYear()]
                            })]
                        })
                    })
                },
                Ne = r(23363);
            const Ce = (0, o.Z)("main", {
                target: "e1pqgt9k0"
            })("position:relative;");
            var Se = e => {
                let {
                    preview: t,
                    children: r,
                    theme: o,
                    nav: s,
                    privacyAlert: c,
                    footer: d,
                    seo: p
                } = e;
                u(s), v(o);
                const {
                    cssVariables: g,
                    hasTransition: h
                } = (0, i.Dv)(l.N), {
                    backgroundColor: m,
                    color: f,
                    titleColor: x,
                    subNavBgColor: b,
                    navLinkColor: Z,
                    footerBgColor: w,
                    footerInputColor: y,
                    footerButtonHoverBgColor: k,
                    footerButtonHoverColor: N,
                    cardShadow: C,
                    filterShadow: S,
                    defaultButtonBgColor: B,
                    defaultButtonTextColor: z,
                    defaultButtonHoverBgColor: L,
                    defaultButtonHoverTextColor: X,
                    navLinkHoverColor: j,
                    introSubtitleColor: E,
                    carouselBarBgColor: q
                } = g;
                return (0, n.BX)(n.HY, {
                    children: [(0, n.tZ)(a.xB, {
                        styles: [(0, a.iv)(":root{--themeBgColor:", m, ";--themeTextColor:", f, ";--themeTitleColor:", x, ";--themeNavLinkColor:", Z, ";--themeNavLinkHoverColor:", j, ";--themeSubNavBgColor:", b, ";--themeFooterBgColor:", w, ";--themeFooterInputColor:", y, ";--themeCardShadow:", C, ";--themeFilterShadow:", S, ";--themeFooterButtonHoverColor:", N, ";--themeFooterButtonHoverBgColor:", k, ";--themeTransition:", h ? "background-color .3s ease, color .3s ease" : "none", ";--themeDefaultButtonBgColor:", B, ";--themeDefaultButtonTextColor:", z, ";--themeDefaultButtonHoverBgColor:", L, ";--themeDefaultButtonHoverTextColor:", X, ";--themeIntroSubtitleColor:", E, ";--themeCarouselBarBgColor:", q, ";}")]
                    }), (0, n.tZ)(Ne.Z, { ...p
                    }), (0, n.tZ)(D, {
                        preview: t
                    }), c && (0, n.tZ)(T, { ...c
                    }), (0, n.tZ)(Ce, {
                        children: r
                    }), d && (0, n.tZ)(ke, { ...d
                    })]
                })
            }
        },
        23363: function(e, t, r) {
            var n = r(52903),
                a = r(5632),
                o = r(55351),
                i = r(75619);
            t.Z = e => {
                let {
                    title: t,
                    description: r,
                    image: l,
                    appendSiteName: s,
                    noindex: c
                } = e;
                const d = (0, a.useRouter)(),
                    u = "".concat("https://phantom.app").concat(d.asPath),
                    p = "".concat(t || i.aT.title).concat(!1 !== s ? " \u2022 ".concat(i.aT.siteName) : ""),
                    g = r || i.aT.description,
                    h = l || i.aT.image;
                return (0, n.tZ)(o.PB, {
                    title: p,
                    description: g,
                    canonical: u,
                    noindex: c,
                    openGraph: {
                        url: u,
                        title: p,
                        description: g,
                        images: [{
                            url: h,
                            width: 1200,
                            height: 630
                        }],
                        site_name: i.aT.siteName
                    },
                    twitter: {
                        cardType: "summary_large_image"
                    }
                })
            }
        },
        13048: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return _e
                },
                defaultComponents: function() {
                    return We
                }
            });
            var n = r(52903),
                a = r(2784),
                o = r(28165),
                i = r(11198),
                l = r(35300),
                s = r(40867),
                c = r(75619),
                d = r(83485),
                u = r(69656),
                p = r(65591);
            const g = (0, i.Z)("div", {
                    target: "efe4k9g0"
                })("display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;gap:var(--spacingXXS);"),
                h = (0, i.Z)("button", {
                    target: "efe4k9g1"
                })("width:60px;height:40px;background-color:var(--white);border-radius:20px;display:flex;justify-content:center;align-items:center;transition:transform 0.2s ease-in,background-color 0.2s ease-in,color 0.2s ease-in;@media (hover:hover){&:hover{background-color:var(--black);transform:scale(0.96);span,svg{color:var(--white);}}}svg{width:20px;height:auto;margin-left:", (e => e.isPlaying ? 0 : "3px"), ";}"),
                v = (0, i.Z)("input", {
                    target: "efe4k9g2"
                })("flex:1;-webkit-appearance:none;cursor:pointer;border-radius:2px;@media (hover:hover){&:hover{&::-webkit-slider-thumb{opacity:1;}}}&::-webkit-slider-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:var(--purple);cursor:pointer;margin-top:-8px;opacity:0;@media (hover:hover){&:hover{transform:scale(1.1);transition:transform 0.1s ease,opacity 0.1s ease;}}}&::-webkit-slider-runnable-track{-webkit-appearance:none;background-image:linear-gradient(var(--purple),var(--purple));background-size:", (e => e.progress), "% 100%;background-repeat:no-repeat;height:4px;border-radius:2px;}"),
                m = (0, i.Z)("time", {
                    target: "efe4k9g3"
                })("color:var(--light9);font-size:0.78rem;");
            var f = e => {
                    let {
                        url: t,
                        id: r
                    } = e;
                    const o = (0, a.useRef)(),
                        [i, l] = (0, a.useState)(!1),
                        [c, u] = (0, a.useState)(0),
                        [p, f] = (0, a.useState)(0);
                    (0, a.useEffect)((() => {
                        var e;
                        const t = o.current;
                        return x(), f((null === (e = t) || void 0 === e ? void 0 : e.duration) || 0), () => {
                            var e;
                            null === (e = t) || void 0 === e || e.pause()
                        }
                    }), []), (0, a.useEffect)((() => {
                        var e, t;
                        i ? null === (e = o.current) || void 0 === e || e.play() : null === (t = o.current) || void 0 === t || t.pause()
                    }), [i]);
                    const x = () => u(o.current.currentTime),
                        b = () => {
                            i || l(!0)
                        };
                    return (0, n.BX)(g, {
                        "aria-label": "Audio Player",
                        role: "region",
                        children: [(0, n.tZ)(h, {
                            onClick: () => {
                                l((e => !e))
                            },
                            "aria-label": i ? "Pause" : "Play",
                            "aria-controls": r,
                            isPlaying: i,
                            children: (0, n.tZ)(d.J, {
                                type: i ? "pause" : "play"
                            })
                        }), (0, n.tZ)(v, {
                            type: "range",
                            value: c,
                            step: "1",
                            min: "0",
                            max: p || "".concat(p),
                            className: "progress",
                            onChange: e => {
                                return t = e.target.value, o.current.currentTime = parseInt(t, 10), void x();
                                var t
                            },
                            onMouseUp: b,
                            onKeyUp: b,
                            progress: 100 * (c / p || 0)
                        }), (0, n.tZ)(m, {
                            children: (0, s.BY)(c)
                        }), (0, n.tZ)("audio", {
                            src: t,
                            ref: o,
                            onPlay: () => l(!0),
                            onPause: () => l(!1),
                            id: r,
                            onTimeUpdate: x,
                            onEnded: () => {
                                o.current.currentTime = 0, l(!1), u(0)
                            },
                            onDurationChange: e => {
                                f(e.currentTarget.duration)
                            }
                        })]
                    })
                },
                x = r(78727);
            const b = (0, i.Z)("div", {
                    target: "eag9igv0"
                })("background-color:var(--light3);overflow:hidden;display:inline-flex;justify-content:space-between;flex-direction:row;width:100%;border-top-left-radius:8px;border-bottom-left-radius:8px;border-top-right-radius:16px;border-bottom-right-radius:16px;", c.Nn.m, "{flex-direction:column;border-radius:16px;}"),
                Z = (0, i.Z)("div", {
                    target: "eag9igv1"
                })("flex:1;padding:var(--spacingXS) var(--spacingS);", c.Nn.m, "{padding:var(--spacingXS);}"),
                w = (0, i.Z)(p.xv, {
                    target: "eag9igv2"
                })("margin-bottom:10px;"),
                y = (0, i.Z)(p.Vp, {
                    target: "eag9igv3"
                })("color:var(--light9);"),
                k = (0, i.Z)(x.Z, {
                    target: "eag9igv4"
                })("aspect-ratio:1;flex:0 0 120px;", c.Nn.m, "{flex:1;}"),
                N = (0, i.Z)("div", {
                    target: "eag9igv5"
                })("display:flex;justify-content:space-between;"),
                C = (0, i.Z)(u.Z, {
                    target: "eag9igv6"
                })("position:relative;justify-content:center;align-items:center;height:40px;width:40px;padding:0;border-radius:20px;", c.Nn.m, "{height:34px;width:34px;}span{display:flex;}svg{width:16px;height:auto;}", c.Nn.m, "{padding:0;}");
            var S = e => {
                let {
                    title: t,
                    subTitle: r,
                    button: a,
                    image: o,
                    src: i,
                    ...l
                } = e;
                return (0, n.BX)(b, {
                    children: [(0, n.tZ)(k, {
                        image: o,
                        sizes: {
                            desktop: "120px",
                            mobile: "335px",
                            tablet: "120px"
                        },
                        stretch: !1,
                        aspectRatio: 1
                    }), (0, n.BX)(Z, {
                        children: [(0, n.BX)(N, {
                            children: [(0, n.BX)("div", {
                                children: [(0, n.tZ)(y, {
                                    children: r
                                }), (0, n.tZ)(w, {
                                    size: "l",
                                    as: "h4",
                                    children: t
                                })]
                            }), a && (0, n.tZ)(C, { ...a.link,
                                children: (0, n.tZ)(d.J, {
                                    type: a.icon
                                })
                            })]
                        }), (0, n.tZ)(f, {
                            url: i,
                            id: l._key
                        })]
                    })]
                })
            };
            const B = (0, i.Z)("aside", {
                    target: "e18qf64w0"
                })("display:flex;border-radius:16px;overflow:hidden;", c.Nn.m, "{flex-direction:column;}"),
                z = (0, i.Z)("div", {
                    target: "e18qf64w1"
                })("display:flex;flex-direction:column;align-items:flex-start;flex-grow:1;padding:40px 50px 40px 40px;background-color:var(--light3);", c.Nn.xxl, "{padding:32px 38px 32px 32px;}", c.Nn.m, "{order:1;padding:24px 16px;}"),
                L = (0, i.Z)(p.xv, {
                    target: "e18qf64w2"
                })("margin-top:16px;opacity:0.6;", c.Nn.m, "{margin-top:4px;}"),
                X = (0, i.Z)(u.Z, {
                    target: "e18qf64w3"
                })("margin-top:24px;", c.Nn.m, "{margin-top:16px;}"),
                j = (0, i.Z)(x.Z, {
                    target: "e18qf64w4"
                })("width:42%;height:auto;flex-shrink:0;", c.Nn.xl, "{width:33%;}", c.Nn.l, "{width:42%;}", c.Nn.m, "{width:100%;aspect-ratio:4/3;order:0;}");
            var E = e => {
                    let {
                        title: t,
                        description: r,
                        button: a,
                        image: o
                    } = e;
                    return (0, n.BX)(B, {
                        children: [(0, n.BX)(z, {
                            children: [(0, n.tZ)(p.QE, {
                                size: "m",
                                as: "h3",
                                children: t
                            }), r && (0, n.tZ)(L, {
                                size: "m",
                                children: r
                            }), (0, n.tZ)(X, {
                                variant: "form",
                                ...a.link,
                                children: a.label
                            })]
                        }), (0, n.tZ)(j, {
                            image: o,
                            sizes: {
                                desktop: "25vw"
                            },
                            stretch: !0
                        })]
                    })
                },
                q = r(82028),
                P = r(43492),
                T = r(28756),
                I = r(51257),
                M = r(60940),
                F = r(90425),
                W = r(26440),
                D = r(78808),
                V = r(102),
                H = r(47531),
                _ = r(69741),
                R = r(22812),
                Y = r(13722),
                A = r(56582),
                J = r(49109),
                U = r(74972),
                G = r(63117),
                O = r(69430),
                $ = r(72779),
                Q = r.n($);
            q.Z.registerLanguage("javascript", F.Z), q.Z.registerLanguage("csharp", T.Z), q.Z.registerLanguage("css", I.Z), q.Z.registerLanguage("java", M.Z), q.Z.registerLanguage("json", W.Z), q.Z.registerLanguage("jsx", D.Z), q.Z.registerLanguage("markdown", V.Z), q.Z.registerLanguage("python", _.Z), q.Z.registerLanguage("php", H.Z), q.Z.registerLanguage("ruby", R.Z), q.Z.registerLanguage("sass", Y.Z), q.Z.registerLanguage("scss", A.Z), q.Z.registerLanguage("bash", P.Z), q.Z.registerLanguage("tsx", J.Z), q.Z.registerLanguage("typescript", U.Z), q.Z.registerLanguage("yaml", G.Z);
            const K = e => {
                let {
                    realClassName: t,
                    children: r,
                    style: a
                } = e;
                return (0, n.tZ)("pre", {
                    style: a,
                    className: t,
                    children: r
                })
            };
            var ee = e => {
                    let {
                        code: t,
                        language: r,
                        ...a
                    } = e;
                    const o = "sh" === r ? "bash" : r,
                        i = Q()(a.className, r && "language-".concat(r));
                    return (0, n.tZ)(q.Z, {
                        language: o,
                        wrapLongLines: !0,
                        PreTag: K,
                        realClassName: i,
                        style: O.Z,
                        children: t
                    })
                },
                te = r(32212);
            const re = (0, i.Z)("code", {
                target: "e1jv0qct0"
            })('color:var(--dark8);&:before,&:after{content:"', "`", '";}');
            var ne = e => {
                    let {
                        code: t,
                        className: r
                    } = e;
                    return (0, n.tZ)(re, {
                        className: r,
                        children: t
                    })
                },
                ae = r(41496),
                oe = r(25675),
                ie = r(93983),
                le = r(76542),
                se = r(60490),
                ce = r(34312);
            const de = e => {
                    let {
                        mediaItem: t,
                        mediaCount: r,
                        index: o
                    } = e;
                    const i = (0, a.useRef)(null),
                        {
                            ref: l
                        } = (0, le.Z)(),
                        s = (0, oe._)(),
                        c = (0, a.useCallback)((e => {
                            i.current = e, l(e)
                        }), [l]);
                    return (0, n.tZ)(ue, {
                        as: "li",
                        span: {
                            mobile: 6,
                            tablet: 8,
                            desktop: 12
                        },
                        align: "flex-start",
                        "aria-roledescription": "slide",
                        "aria-label": "Slide ".concat(o + 1, " of ").concat(r),
                        ref: c,
                        children: (0, n.tZ)(ie.m.div, {
                            animate: s,
                            transition: {
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            },
                            children: (0, n.tZ)(pe, {
                                children: (0, n.tZ)(ge, {
                                    children: (0, n.tZ)(he, {
                                        type: t.type,
                                        image: t.image,
                                        responsiveVideo: t.responsiveVideo,
                                        sizes: {
                                            desktop: "1024px",
                                            mobile: "335px",
                                            tablet: "768px"
                                        },
                                        quality: 100
                                    })
                                })
                            })
                        })
                    })
                },
                ue = (0, i.Z)((0, ie.m)(te.sg), {
                    target: "e1f0dh2y0"
                })("grid-row:1;user-select:none;"),
                pe = (0, i.Z)("div", {
                    target: "e1f0dh2y1"
                })("aspect-ratio:16 / 9;border-radius:24px;background-color:var(--lilac);box-sizing:border-box;position:relative;overflow:hidden;", c.Nn.m, "{border-radius:16px;aspect-ratio:16 / 9;}"),
                ge = (0, i.Z)("div", {
                    target: "e1f0dh2y2"
                })("display:flex;position:absolute;inset:0;"),
                he = (0, i.Z)(ce.Z, {
                    target: "e1f0dh2y3"
                })("background-color:var(--lilac);");
            var ve = e => {
                    let {
                        items: t,
                        barPosition: r
                    } = e;
                    var o;
                    const i = (0, a.useRef)(null);
                    return (0, n.tZ)(ue, {
                        ref: i,
                        start: {
                            mobile: 1,
                            tablet: 2,
                            desktop: 3
                        },
                        span: {
                            mobile: 6,
                            tablet: 6,
                            desktop: 6
                        },
                        children: (0, n.tZ)(se.Z, {
                            noAnimationInView: !0,
                            id: "carousel-1",
                            barPosition: r,
                            children: null === (o = t) || void 0 === o ? void 0 : o.map(((e, r) => (0, n.tZ)(de, {
                                mediaItem: e,
                                index: r,
                                mediaCount: t.length
                            }, r)))
                        })
                    })
                },
                me = r(11052),
                fe = r(6917),
                xe = r(20971);
            const be = e => {
                    let {
                        mediaItem: t,
                        caption: r,
                        mediaPlayMode: o = "autoPlay",
                        layout: i,
                        orientation: l,
                        index: s
                    } = e;
                    const [d, u] = (0, a.useState)(!1), p = (0, fe.Z)("(max-width: ".concat(c.j$.l, "px)"), !1);
                    return (0, n.BX)(te.sg, {
                        start: s % 2 === 0 ? {
                            mobile: 1,
                            tablet: 1,
                            desktop: 1
                        } : {
                            mobile: 1,
                            tablet: 4,
                            desktop: 4
                        },
                        span: {
                            mobile: 6,
                            tablet: 3,
                            desktop: 3
                        },
                        onMouseEnter: () => u(!0),
                        onMouseLeave: () => u(!1),
                        align: "flex-start",
                        children: [(0, n.tZ)(we, {
                            layout: i,
                            orientation: l,
                            children: (0, n.tZ)(ye, {
                                layout: i,
                                children: (0, n.tZ)(ke, { ...t,
                                    stretch: "fill" === i,
                                    canPlay: "autoPlay" === o || "hover" === o && d || p,
                                    layout: i,
                                    sizes: {
                                        desktop: "523px",
                                        mobile: "335px",
                                        tablet: "465px"
                                    }
                                })
                            })
                        }), r && (0, n.tZ)(xe.Z, {
                            children: r
                        })]
                    })
                },
                Ze = (0, i.Z)(te.$O, {
                    target: "e1ing4p00"
                })("padding-top:var(--spacingL);gap:34px;", c.Nn.xl, "{gap:24px;}", c.Nn.m, "{padding-top:var(--spacingL);}"),
                we = (0, i.Z)("div", {
                    target: "e1ing4p01"
                })("aspect-ratio:", (e => {
                    let {
                        orientation: t
                    } = e;
                    return "square" === t ? "1 / 1" : "longPortrait" === t ? "9 / 16" : "landscape" === t ? "4 / 3" : "523 / 600"
                }), ";border-radius:24px;background-color:var(--lilac);box-sizing:border-box;position:relative;overflow:hidden;", c.Nn.m, "{border-radius:16px;aspect-ratio:", (e => {
                    let {
                        orientation: t
                    } = e;
                    return "square" === t ? "1 / 1" : "longPortrait" === t ? "9 / 16" : "landscape" === t ? "4 / 3" : "335 / 450"
                }), ";}"),
                ye = (0, i.Z)("div", {
                    target: "e1ing4p02"
                })("display:flex;align-items:", (e => {
                    let {
                        layout: t
                    } = e;
                    return "center" === t ? "center" : "flex-end"
                }), ";position:absolute;padding:0 ", (e => {
                    let {
                        layout: t
                    } = e;
                    return "fill" === t ? 0 : "32px"
                }), ";inset:0;", c.wQ.s, "{padding:0 ", (e => {
                    let {
                        layout: t
                    } = e;
                    return "fill" === t ? 0 : "45px"
                }), ";}", c.wQ.m, "{padding:0 ", (e => {
                    let {
                        layout: t
                    } = e;
                    return "fill" === t ? 0 : "75px"
                }), ";}"),
                ke = (0, i.Z)(ce.Z, {
                    target: "e1ing4p03"
                })("border-top-left-radius:", (e => {
                    let {
                        layout: t
                    } = e;
                    return ("center" === t || "bottom" === t) && "16px"
                }), ";border-top-right-radius:", (e => {
                    let {
                        layout: t
                    } = e;
                    return ("center" === t || "bottom" === t) && "16px"
                }), ";border-bottom-left-radius:", (e => {
                    let {
                        layout: t
                    } = e;
                    return "center" === t && "16px"
                }), ";border-bottom-right-radius:", (e => {
                    let {
                        layout: t
                    } = e;
                    return "center" === t && "16px"
                }), ";overflow:hidden;", c.Nn.l, "{border-top-left-radius:", (e => {
                    let {
                        layout: t
                    } = e;
                    return ("center" === t || "bottom" === t) && "12px"
                }), ";border-top-right-radius:", (e => {
                    let {
                        layout: t
                    } = e;
                    return ("center" === t || "bottom" === t) && "12px"
                }), ";border-bottom-left-radius:", (e => {
                    let {
                        layout: t
                    } = e;
                    return "center" === t && "12px"
                }), ";border-bottom-right-radius:", (e => {
                    let {
                        layout: t
                    } = e;
                    return "center" === t && "12px"
                }), ";}");
            var Ne = e => {
                    let {
                        blocks: t,
                        orientation: r
                    } = e;
                    return (0, n.tZ)(Ze, {
                        start: {
                            mobile: 1,
                            tablet: 2,
                            desktop: 3
                        },
                        span: {
                            mobile: 6,
                            tablet: 6,
                            desktop: 6
                        },
                        columnCount: {
                            mobile: 6,
                            tablet: 6,
                            desktop: 6
                        },
                        children: t.map(((e, t) => {
                            var n;
                            return (0, o.az)(be, { ...e,
                                index: t,
                                orientation: r,
                                key: null === (n = e) || void 0 === n ? void 0 : n._key
                            })
                        }))
                    })
                },
                Ce = r(50154);
            const Se = (0, Ce.cn)({});
            var Be = r(6626);
            var ze = e => {
                    let {
                        id: t,
                        as: r,
                        size: o,
                        align: i = "left",
                        className: l,
                        children: s
                    } = e;
                    const c = (0, Be.Z)(),
                        [, d] = (0, Ce.KO)(Se),
                        u = (0, a.useRef)(),
                        g = (0, a.useCallback)((e => {
                            d((t => {
                                const r = { ...t
                                };
                                return r[e] || (r[e] = u.current), r
                            }))
                        }), [d]),
                        h = (0, a.useCallback)((e => {
                            d((t => {
                                const r = { ...t
                                };
                                return delete r[e], r
                            }))
                        }), [d]);
                    return (0, a.useEffect)((() => {
                        if (c) return g(t), () => {
                            h(t)
                        }
                    }), [h, t, g, c]), (0, n.tZ)(p.Dx, {
                        className: l,
                        as: r,
                        size: o,
                        align: i,
                        id: t,
                        ref: u,
                        children: s
                    })
                },
                Le = r(13629);
            var Xe = e => {
                    let {
                        url: t
                    } = e;
                    var r, a, o;
                    const i = null === (o = t) || void 0 === o || null === (a = o.split("/")) || void 0 === a || null === (r = a.pop()) || void 0 === r ? void 0 : r.split("?")[0];
                    return i ? (0, n.tZ)(Le.iD, {
                        tweetId: i
                    }) : null
                },
                je = r(2411),
                Ee = r(59473);
            const qe = {
                    block: {
                        h2: e => {
                            let {
                                children: t,
                                value: r
                            } = e;
                            const {
                                handleClick: a,
                                activeID: o
                            } = r, i = (0, s.mG)(r);
                            return (0, n.tZ)(Me, {
                                href: "#".concat(i),
                                scroll: !1,
                                onClick: () => a(i),
                                isActive: o === i,
                                children: (0, n.tZ)(p.xv, {
                                    as: "span",
                                    size: "s",
                                    children: t
                                })
                            })
                        }
                    },
                    marks: {
                        em: e => {
                            let {
                                text: t
                            } = e;
                            return (0, n.tZ)(n.HY, {
                                children: t
                            })
                        },
                        strong: e => {
                            let {
                                text: t
                            } = e;
                            return (0, n.tZ)(n.HY, {
                                children: t
                            })
                        },
                        link: e => {
                            let {
                                children: t
                            } = e;
                            return (0, n.tZ)(n.HY, {
                                children: t
                            })
                        }
                    }
                },
                Pe = (0, i.Z)(te.sg, {
                    target: "e8gduf0"
                })("position:sticky;top:var(--spacingXL);display:flex;flex-direction:column;padding:16px;margin-top:var(--spacingL);background:var(--light3);border-radius:16px;color:var(--midnightPurple);", c.Nn.xl, "{display:none;}"),
                Te = (0, i.Z)("ul", {
                    target: "e8gduf1"
                })("margin-top:12px;border-top:1px solid var(--lilac);"),
                Ie = (0, i.Z)("li", {
                    target: "e8gduf2"
                })("padding-top:16px;"),
                Me = (0, i.Z)(Ee.Z, {
                    target: "e8gduf3"
                })('position:relative;display:block;padding-left:16px;&::before{content:"";position:absolute;top:6px;left:0;width:8px;height:8px;background-color:var(--green);border-radius:50%;opacity:', (e => {
                    let {
                        isActive: t
                    } = e;
                    return t ? 1 : 0
                }), ";transition:opacity 0.2s ease-in;}&:hover,&:focus-visible{&::before{opacity:1;}}");
            var Fe = e => {
                let {
                    headings: t
                } = e;
                const r = (0, Ce.Dv)(Se),
                    o = (0, a.useRef)({
                        target: 0,
                        isScrolling: !1
                    }),
                    [i, s] = (0, a.useState)(""),
                    c = (0, a.useCallback)((e => {
                        const {
                            top: t
                        } = (0, je.r7)(r[e]);
                        t && (o.current = {
                            target: t,
                            isScrolling: !0
                        }, s(e))
                    }), [s, r]),
                    d = (0, a.useCallback)((e => {
                        var t, n, a;
                        const l = ~~(null === (n = e.target) || void 0 === n || null === (t = n.documentElement) || void 0 === t ? void 0 : t.scrollTop);
                        if (null === (a = o.current) || void 0 === a ? void 0 : a.isScrolling) return void(l === o.current.target && (o.current = {
                            target: 0,
                            isScrolling: !1
                        }));
                        const c = Object.entries(r).map((e => {
                            let [t, r] = e;
                            const {
                                top: n
                            } = (0, je.r7)(r);
                            return [t, n]
                        })).sort(((e, t) => {
                            let [, r] = e, [, n] = t;
                            return n - r
                        })).find((e => {
                            let [, t] = e;
                            return l >= t
                        }));
                        if (!c) return s(null);
                        const [d] = c;
                        i !== d && s(d)
                    }), [i, r, s]),
                    u = () => {
                        var e;
                        (null === (e = o.current) || void 0 === e ? void 0 : e.isScrolling) && (o.current = {
                            target: 0,
                            isScrolling: !1
                        })
                    };
                return (0, a.useEffect)((() => {
                    if (t.length) return window.addEventListener("scroll", d), window.addEventListener("wheel", u, {
                        passive: !1
                    }), () => {
                        window.removeEventListener("scroll", d), window.removeEventListener("wheel", u)
                    }
                }), [d, t.length]), (0, n.BX)(Pe, {
                    as: "aside",
                    start: {
                        desktop: 10
                    },
                    span: {
                        desktop: 2
                    },
                    align: "flex-start",
                    children: [(0, n.tZ)(p.xv, {
                        size: "s",
                        as: "h2",
                        children: "Contents"
                    }), (0, n.tZ)(Te, {
                        children: t.map(((e, t) => {
                            const {
                                _type: r
                            } = e;
                            return (0, n.tZ)(Ie, {
                                children: (0, n.tZ)(l.YI, {
                                    value: { ...e,
                                        activeID: i,
                                        handleClick: c
                                    },
                                    components: qe
                                })
                            }, "".concat(r, "-").concat(t))
                        }))
                    })]
                })
            };
            const We = {
                    block: {
                        h2: e => {
                            let {
                                children: t,
                                value: r
                            } = e;
                            const a = (0, s.mG)(r);
                            return (0, n.tZ)(ze, {
                                id: a,
                                as: "h2",
                                size: "s",
                                children: t
                            })
                        },
                        h3: e => {
                            let {
                                children: t,
                                value: r
                            } = e;
                            const a = (0, s.mG)(r);
                            return (0, n.tZ)(p.Dx, {
                                id: a,
                                as: "h3",
                                size: "xs",
                                children: t
                            })
                        },
                        normal: e => {
                            let {
                                children: t
                            } = e;
                            return (0, n.tZ)(p.xv, {
                                size: "m",
                                children: t
                            })
                        },
                        blockquote: e => {
                            let {
                                children: t
                            } = e;
                            return (0, n.tZ)(p.Dx, {
                                size: "s",
                                as: "blockquote",
                                children: t
                            })
                        }
                    },
                    types: {
                        code: e => {
                            let {
                                value: t
                            } = e;
                            return (0, n.tZ)(ee, { ...t
                            })
                        },
                        mediaFullBleed: e => {
                            let {
                                value: t
                            } = e;
                            return (0, n.tZ)(me.Z, { ...t
                            })
                        },
                        mediaSmall: e => {
                            let {
                                value: t
                            } = e;
                            return (0, n.tZ)(Ne, { ...t
                            })
                        },
                        mediaCarousel: e => {
                            let {
                                value: t
                            } = e;
                            return (0, n.tZ)(ve, { ...t
                            })
                        },
                        audio: e => {
                            let {
                                value: t
                            } = e;
                            return (0, n.tZ)(S, { ...t
                            })
                        },
                        callOut: e => {
                            let {
                                value: t
                            } = e;
                            return (0, n.tZ)(E, { ...t
                            })
                        },
                        tweet: e => {
                            let {
                                value: t
                            } = e;
                            return (0, n.tZ)(Xe, { ...t
                            })
                        }
                    },
                    list: {
                        bullet: e => {
                            let {
                                children: t
                            } = e;
                            return (0, n.tZ)("ul", {
                                children: t
                            })
                        },
                        number: e => {
                            let {
                                children: t
                            } = e;
                            return (0, n.tZ)("ol", {
                                children: t
                            })
                        }
                    },
                    listItem: {
                        bullet: e => {
                            let {
                                children: t
                            } = e;
                            return (0, n.tZ)(p.xv, {
                                as: "li",
                                size: "m",
                                children: t
                            })
                        },
                        number: e => {
                            let {
                                children: t
                            } = e;
                            return (0, n.tZ)(p.xv, {
                                as: "li",
                                size: "m",
                                children: t
                            })
                        }
                    },
                    marks: {
                        em: e => {
                            let {
                                text: t
                            } = e;
                            return (0, n.tZ)("i", {
                                children: t
                            })
                        },
                        strong: e => {
                            let {
                                text: t
                            } = e;
                            return (0, n.tZ)("b", {
                                children: t
                            })
                        },
                        code: e => {
                            let {
                                text: t
                            } = e;
                            return (0, n.tZ)(ne, {
                                code: t
                            })
                        },
                        link: e => {
                            let {
                                children: t,
                                value: r
                            } = e;
                            return (0, n.tZ)(ae.Z, { ...r,
                                children: t
                            })
                        }
                    }
                },
                De = e => {
                    let {
                        isContentGroup: t,
                        showWayFinder: r,
                        noWrap: a,
                        children: o
                    } = e;
                    return a ? (0, n.tZ)(n.HY, {
                        children: o
                    }) : (0, n.tZ)(He, {
                        start: {
                            mobile: 1,
                            tablet: 2,
                            desktop: 3
                        },
                        span: {
                            mobile: 6,
                            tablet: r ? 4 : 6,
                            desktop: r ? 6 : 8
                        },
                        align: "flex-start",
                        isContentGroup: t,
                        children: o
                    })
                },
                Ve = (0, i.Z)(te.oe, {
                    target: "e96699x0"
                })("position:relative;grid-row-gap:0px;grid-auto-flow:column;", c.Nn.xl, "{grid-row-gap:0px;}", c.Nn.m, "{grid-row-gap:0px;}"),
                He = (0, i.Z)(te.sg, {
                    target: "e96699x1"
                })("padding-top:var(--spacingL);", c.Nn.m, "{padding-top:var(--spacingL);}", (e => {
                    let {
                        isContentGroup: t
                    } = e;
                    return t && (0, o.iv)("p,h2,h3,li,blockquote{opacity:0.8;}p:empty{margin:0;}* + ol,* + ul,* + p,* + a,* + h3{padding-top:1em;}h2{", c.wQ.m, "{padding-top:var(--spacingM);}}blockquote + ol,blockquote + ul,blockquote + p,blockquote + a,blockquote + h3,* + h2,* + blockquote{padding-top:var(--spacingXL);", c.Nn.m, "{padding-top:var(--spacingL);}}blockquote{&:before{content:'\"';}&:after{content:'\"';}}ol,ul{list-style-position:outside;}ol{list-style-type:decimal;li{margin-left:1.75em;text-indent:-0.2em;}}ul{list-style-type:disc;li{padding-left:1.5em;list-style-type:none;position:relative;&:before{position:absolute;left:0.11em;top:0.4em;content:\"\";width:0.33em;height:0.33em;border-radius:50%;background-color:var(--black);}}}i{font-style:italic;}b{font-weight:bold;}a{position:relative;color:var(--dark8);text-decoration:none;background-image:linear-gradient(currentColor,currentColor);background-position:0% 100%;background-repeat:no-repeat;background-size:100% 1px;transition:background-size 0.15s;@media (hover:hover){&:hover{background-size:100% 2px;}}}")
                }));
            var _e = e => {
                let {
                    content: t,
                    className: r,
                    showWayFinder: o = !0
                } = e;
                const i = (0, a.useMemo)((() => ["block", "code"]), []),
                    s = (0, a.useMemo)((() => t.reduce(((e, t) => {
                        const r = Math.max(e.length - 1, 0),
                            n = e[r];
                        if (!n) return e[r] = [t], e;
                        const a = n.length - 1;
                        return i.includes(t._type) && i.includes(e[r][a]._type) ? e[r].push(t) : e[r + 1] = [t], e
                    }), [])), [i, t]),
                    c = (0, a.useMemo)((() => t.filter((e => "h2" === e.style))), [t]);
                return (0, n.BX)(Ve, {
                    className: r,
                    children: [o && c.length > 0 && (0, n.tZ)(Fe, {
                        headings: c
                    }), s.map(((e, t) => {
                        const {
                            _type: r
                        } = e[0], a = i.includes(r), s = "mediaSmall" === r;
                        return (0, n.tZ)(De, {
                            noWrap: s,
                            isContentGroup: a,
                            showWayFinder: o,
                            children: (0, n.tZ)(l.YI, {
                                value: e,
                                components: We
                            })
                        }, "".concat(r, "-").concat(t))
                    }))]
                })
            }
        },
        60490: function(e, t, r) {
            var n = r(73235),
                a = r(52903),
                o = r(2784),
                i = r(28165),
                l = r(11198),
                s = r(83485),
                c = r(70335),
                d = r(4213),
                u = r(83264),
                p = r(93983),
                g = r(75619),
                h = r(30462),
                v = r(32212);

            function m() {
                const e = (0, n._)(["\n      padding: 48px;\n      ", " {\n        padding: 32px;\n      }\n      ", " {\n        padding: 20px;\n      }\n    "]);
                return m = function() {
                    return e
                }, e
            }
            const f = {
                    hidden: {
                        opacity: 0
                    },
                    visible: {
                        opacity: 1
                    }
                },
                x = e => {
                    let {
                        chip: t,
                        id: r,
                        isFullWidthModule: n,
                        noAnimationInView: o,
                        isInView: i,
                        hasNavFocus: l,
                        isEmblaActive: s,
                        scrollPrev: c,
                        scrollNext: d,
                        isPrevBtnEnabled: u,
                        isNextBtnEnabled: p,
                        sethasNavFocus: g
                    } = e;
                    const h = o ? {} : {
                        variants: f,
                        initial: "hidden",
                        animate: i || l ? "visible" : "hidden"
                    };
                    return (0, a.BX)(N, { ...h,
                        hasChip: null != t,
                        isFullWidthModule: n,
                        children: [t && (0, a.tZ)(C, {
                            as: "h3",
                            ...t
                        }), s && (0, a.BX)(S, {
                            children: [(0, a.tZ)(z, {
                                onClick: c,
                                disabled: !u,
                                onFocus: () => g(!0),
                                "aria-controls": r,
                                "aria-label": "Previous slide",
                                children: (0, a.tZ)(X, {
                                    type: "chevronLeft"
                                })
                            }), (0, a.tZ)(L, {
                                onClick: d,
                                disabled: !p,
                                onFocus: () => g(!0),
                                "aria-controls": r,
                                "aria-label": "Next slide",
                                children: (0, a.tZ)(X, {
                                    type: "chevronRight"
                                })
                            })]
                        })]
                    })
                },
                b = {
                    align: "start",
                    axis: "x",
                    containScroll: "trimSnaps",
                    dragFree: !0,
                    inViewThreshold: 1,
                    "(max-width: 1280px)": {
                        slidesToScroll: 2
                    },
                    "(max-width: 768px)": {
                        slidesToScroll: 1
                    }
                },
                Z = {
                    forceWheelAxis: "x"
                },
                w = (0, l.Z)("div", {
                    target: "e170edqb0"
                })("position:relative;width:100%;overflow:hidden;padding-bottom:30px;margin-bottom:-30px;"),
                y = (0, l.Z)("div", {
                    target: "e170edqb1"
                })("position:relative;width:100%;max-width:var(--maxWidthContent);margin:auto;cursor:ew-resize;:active{cursor:grabbing;}", (e => {
                    let {
                        isFullWidthModule: t
                    } = e;
                    return t && (0, i.iv)(m(), g.Nn.xl, g.Nn.m)
                })),
                k = (0, l.Z)(v.oe, {
                    target: "e170edqb2"
                })("align-self:", (e => {
                    let {
                        align: t
                    } = e;
                    return t
                }), ";width:100%;max-width:unset;padding:0;", g.Nn.xl, "{padding:0;}", g.Nn.m, "{padding:0;}"),
                N = (0, l.Z)((0, p.m)(v.oe), {
                    target: "e170edqb3"
                })("display:flex;align-items:center;justify-content:", (e => {
                    let {
                        hasChip: t
                    } = e;
                    return t ? "space-between" : "flex-end"
                }), ";margin:24px auto 24px;", g.Nn.m, "{margin-bottom:16px;}", (e => {
                    let {
                        isFullWidthModule: t
                    } = e;
                    return !t && (0, i.iv)("padding:0px;", g.Nn.xl, "{padding:0px;}", g.Nn.m, "{padding:0px;}")
                })),
                C = (0, l.Z)(h.Z, {
                    target: "e170edqb4"
                })(g.Nn.m, "{padding:0 16px;height:44px;}"),
                S = (0, l.Z)("div", {
                    target: "e170edqb5"
                })("display:flex;padding:4px;gap:4px;justify-self:flex-end;background-color:var(--themeCarouselBarBgColor);border-radius:100px;", g.Nn.m, "{gap:2px;}"),
                B = (0, l.Z)("button", {
                    target: "e170edqb6"
                })("position:relative;width:40px;height:40px;background-color:var(--lilac);border-radius:50%;transition:background-color 0.2s ease-in;", g.Nn.m, "{width:36px;height:36px;}@media (hover:hover){&:hover&:not(:disabled){background-color:var(--purple);}}&:disabled{opacity:0.4;background-color:var(--white);pointer-events:none;}svg{width:24px;height:auto;}"),
                z = (0, l.Z)(B, {
                    target: "e170edqb7"
                })("svg{padding-right:3px;}"),
                L = (0, l.Z)(B, {
                    target: "e170edqb8"
                })("svg{padding-left:3px;}"),
                X = (0, l.Z)(s.J, {
                    target: "e170edqb9"
                })("position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);stroke:var(--black);");
            t.Z = e => {
                let {
                    chip: t,
                    barPosition: r,
                    noAnimationInView: n,
                    children: i,
                    onIndexChange: l,
                    onInView: s,
                    id: p,
                    isFullWidthModule: g
                } = e;
                const h = (0, o.useRef)(null),
                    v = (0, u.Y)(h, {
                        once: !0,
                        amount: .75
                    }),
                    [m, f] = (0, o.useState)(!1),
                    [N, C] = (0, o.useState)(!1),
                    [S, B] = (0, o.useState)(!1),
                    [z, L] = (0, o.useState)(!1),
                    [X, j] = (0, c.Z)({ ...b,
                        active: N && (v || m)
                    }, [(0, d.Y)(Z)]);
                (0, o.useEffect)((() => {
                    j && j.reInit({ ...b,
                        active: N && (v || m)
                    })
                }), [j, v, N, m]);
                const E = (0, o.useCallback)((() => j && j.scrollPrev()), [j]),
                    q = (0, o.useCallback)((() => j && j.scrollNext()), [j]),
                    P = (0, o.useCallback)((() => {
                        var e;
                        j && (null === (e = l) || void 0 === e || e(j.selectedScrollSnap()), B(j.canScrollPrev()), L(j.canScrollNext()))
                    }), [l, j]),
                    T = (0, o.useCallback)((() => C(j.slidesNotInView().length > 0)), [j]);
                (0, o.useEffect)((() => {
                    j && T()
                }), [j, T]);
                const I = (0, o.useCallback)((() => {
                    j && T()
                }), [j, T]);
                (0, o.useEffect)((() => {
                    var e;
                    (v || m) && (null === (e = s) || void 0 === e || e())
                }), [s, m, v]);
                const M = (0, o.useRef)(0),
                    F = (0, o.useCallback)((() => {
                        P();
                        const {
                            eventStore: e
                        } = j.internalEngine();
                        e.add(document, "keydown", (e => {
                            "Tab" === e.code && (M.current = (new Date).getTime())
                        }), !1), j.slideNodes().forEach(((e, t) => {
                            const {
                                scrollTo: r,
                                eventStore: n,
                                options: a
                            } = j.internalEngine(), {
                                slidesToScroll: o
                            } = a;
                            n.add(e, "focus", (() => {
                                if (!((new Date).getTime() - M.current > 10) && (j.rootNode().scrollLeft = 0, "number" === typeof o)) {
                                    const e = Math.floor(t / o);
                                    r.index(e, 0)
                                }
                            }), !0)
                        }))
                    }), [j, P]);
                (0, o.useEffect)((() => {
                    if (j) return j.on("resize", I), j.on("select", P), j.on("init", F), j.on("reInit", F), () => {
                        j.off("resize", I), j.off("select", P), j.off("init", F), j.off("reInit", F)
                    }
                }), [j, I, P, F]);
                const W = (0, a.tZ)(x, {
                    chip: t,
                    id: p,
                    isFullWidthModule: g,
                    noAnimationInView: n,
                    isInView: v,
                    hasNavFocus: m,
                    isEmblaActive: N,
                    scrollPrev: E,
                    scrollNext: q,
                    isPrevBtnEnabled: S,
                    isNextBtnEnabled: z,
                    sethasNavFocus: f
                });
                return (0, a.BX)(w, {
                    ref: h,
                    children: ["top" === r && W, (0, a.tZ)(y, {
                        ref: X,
                        "aria-roledescription": "carousel",
                        isFullWidthModule: g,
                        children: (0, a.tZ)(k, {
                            as: "ul",
                            flow: !0,
                            align: N ? "flex-start" : "center",
                            "aria-live": "off",
                            id: p,
                            children: i
                        })
                    }), "bottom" === r && W]
                })
            }
        },
        30462: function(e, t, r) {
            var n = r(52903),
                a = r(11198),
                o = r(83485),
                i = r(75619),
                l = r(69656),
                s = r(65591);
            const c = (0, a.Z)("div", {
                    target: "e1w923fb0"
                })("display:flex;align-items:center;justify-content:center;gap:8px;padding:", (e => {
                    let {
                        hasLink: t
                    } = e;
                    return t ? "8px 8px 8px 16px" : "8px 16px"
                }), ";height:56px;border-radius:100px;color:var(--black);background-color:var(--themeCarouselBarBgColor);user-select:none;", i.Nn.xl, "{height:48px;}", i.Nn.m, "{height:28px;padding:", (e => {
                    let {
                        hasLink: t
                    } = e;
                    return t ? "4px 4px 4px 8px" : "4px 8px"
                }), ";}"),
                d = (0, a.Z)(o.J, {
                    target: "e1w923fb1"
                })("width:28px;height:28px;", i.Nn.xl, "{width:20px;height:20px;}", i.Nn.m, "{margin-bottom:2px;width:16px;height:16px;}& + *{margin-right:0.2em;}"),
                u = (0, a.Z)(l.Z, {
                    target: "e1w923fb2"
                })("position:relative;justify-content:center;align-items:center;height:40px;width:40px;padding:0;border-radius:20px;background-color:var(--lilac);", i.Nn.xl, "{height:34px;width:34px;}", i.Nn.m, "{padding:0;width:20px;height:20px;}@media (hover:hover){&:hover{background-color:var(--purple);}}span{display:flex;}svg{width:16px;height:auto;}");
            t.Z = e => {
                let {
                    as: t = "h3",
                    label: r,
                    icon: a,
                    link: i,
                    className: l
                } = e;
                var p, g;
                const h = !(!(null === (p = i) || void 0 === p ? void 0 : p.href) && !(null === (g = i) || void 0 === g ? void 0 : g.download));
                return (0, n.BX)(c, {
                    hasLink: h,
                    className: l,
                    children: [a && (0, n.tZ)(d, {
                        type: a
                    }), (0, n.tZ)(s.QE, {
                        as: t,
                        size: "s",
                        children: r
                    }), h && (0, n.tZ)(u, { ...i,
                        "aria-label": "More ".concat(r),
                        children: (0, n.tZ)(o.J, {
                            type: "arrowRight"
                        })
                    })]
                })
            }
        },
        32212: function(e, t, r) {
            r.d(t, {
                $O: function() {
                    return l
                },
                oe: function() {
                    return o
                },
                sg: function() {
                    return i
                }
            });
            var n = r(11198),
                a = r(75619);
            const o = (0, n.Z)("div", {
                    target: "ec59trr0"
                })("display:grid;", (e => {
                    let {
                        flow: t
                    } = e;
                    return t ? "grid-auto-columns: calc((100% - (".concat(a.Wt.desktop, " - 1) * ").concat(a.tu.desktop, "px) / ").concat(a.Wt.desktop, ");") : "grid-template-columns: repeat(".concat(a.Wt.desktop, ", 1fr);")
                }), ";grid-column-gap:", a.tu.desktop, "px;grid-row-gap:", a.tu.desktop, "px;width:100%;max-width:var(--maxWidthContent);padding-left:48px;padding-right:48px;margin:auto;", a.Nn.xl, "{", (e => {
                    let {
                        flow: t
                    } = e;
                    return t ? "grid-auto-columns: calc((100% - (".concat(a.Wt.tablet, " - 1) * ").concat(a.tu.tablet, "px) / ").concat(a.Wt.tablet, ");") : "grid-template-columns: repeat(".concat(a.Wt.tablet, ", 1fr);")
                }), ";grid-column-gap:", a.tu.tablet, "px;grid-row-gap:", a.tu.tablet, "px;padding-left:32px;padding-right:32px;}", a.Nn.s, "{", (e => {
                    let {
                        flow: t
                    } = e;
                    return t ? "grid-auto-columns: calc((100% - (".concat(a.Wt.mobile, " - 1) * ").concat(a.tu.mobile, "px) / ").concat(a.Wt.mobile, ");") : "grid-template-columns: repeat(".concat(a.Wt.mobile, ", 1fr);")
                }), ";grid-column-gap:", a.tu.mobile, "px;grid-row-gap:", a.tu.mobile, "px;padding-left:20px;padding-right:20px;}"),
                i = (0, n.Z)("div", {
                    target: "ec59trr1"
                })((e => {
                    let {
                        start: t,
                        span: r
                    } = e;
                    var n, a;
                    return (null === (n = t) || void 0 === n ? void 0 : n.desktop) ? " grid-column: ".concat(t.desktop, " / span ").concat(r.desktop) : (null === (a = r) || void 0 === a ? void 0 : a.desktop) ? " grid-column: span ".concat(r.desktop) : void 0
                }), ";align-self:", (e => {
                    let {
                        align: t
                    } = e;
                    return t || "flex-end"
                }), ";", a.Nn.xl, "{", (e => {
                    let {
                        start: t,
                        span: r
                    } = e;
                    var n, a;
                    return (null === (n = t) || void 0 === n ? void 0 : n.tablet) ? " grid-column: ".concat(t.tablet, " / span ").concat(r.tablet) : (null === (a = r) || void 0 === a ? void 0 : a.tablet) ? " grid-column: span ".concat(r.tablet) : void 0
                }), ";}", a.Nn.s, "{", (e => {
                    let {
                        start: t,
                        span: r
                    } = e;
                    var n, a;
                    return (null === (n = t) || void 0 === n ? void 0 : n.mobile) ? " grid-column: ".concat(t.mobile, " / span ").concat(r.mobile) : (null === (a = r) || void 0 === a ? void 0 : a.mobile) ? " grid-column: span ".concat(r.mobile) : void 0
                }), ";}"),
                l = (0, n.Z)(i, {
                    target: "ec59trr2"
                })("grid-column:", (e => {
                    let {
                        start: t,
                        span: r
                    } = e;
                    var n, a;
                    return !((null === (n = t) || void 0 === n ? void 0 : n.desktop) || (null === (a = r) || void 0 === a ? void 0 : a.desktop)) && "1 / -1"
                }), ";grid-template-columns:", (e => {
                    let {
                        columnCount: t
                    } = e;
                    var r;
                    return (null === (r = t) || void 0 === r ? void 0 : r.desktop) ? "repeat(".concat(t.desktop, ", 1fr)") : "inherit"
                }), ";", a.Nn.xl, "{grid-template-columns:", (e => {
                    let {
                        columnCount: t
                    } = e;
                    var r;
                    return (null === (r = t) || void 0 === r ? void 0 : r.tablet) ? "repeat(".concat(t.tablet, ", 1fr)") : "inherit"
                }), ";grid-column:", (e => {
                    let {
                        start: t,
                        span: r
                    } = e;
                    var n, a;
                    return !((null === (n = t) || void 0 === n ? void 0 : n.tablet) || (null === (a = r) || void 0 === a ? void 0 : a.tablet)) && "1 / -1"
                }), ";}", a.Nn.s, "{grid-template-columns:", (e => {
                    let {
                        columnCount: t
                    } = e;
                    var r;
                    return (null === (r = t) || void 0 === r ? void 0 : r.mobile) ? "repeat(".concat(t.mobile, ", 1fr)") : "inherit"
                }), ";grid-column:", (e => {
                    let {
                        start: t,
                        span: r
                    } = e;
                    var n, a;
                    return !((null === (n = t) || void 0 === n ? void 0 : n.mobile) || (null === (a = r) || void 0 === a ? void 0 : a.mobile)) && "1 / -1"
                }), ";}display:inherit;grid-gap:inherit;")
        },
        20971: function(e, t, r) {
            var n = r(52903),
                a = r(11198),
                o = r(83485),
                i = r(75619),
                l = r(65591);
            const s = (0, a.Z)(l.Vp, {
                    target: "eojexc00"
                })("display:flex;align-items:flex-start;margin-top:16px;color:var(--dark9);max-width:800px;", i.Nn.m, "{margin-top:12px;}"),
                c = (0, a.Z)(o.J, {
                    target: "eojexc01"
                })("flex-shrink:0;width:19px;height:auto;transform:translateY(-2px);margin-right:8px;", i.Nn.m, "{width:15px;transform:translateY(-1px);}");
            t.Z = e => {
                let {
                    children: t
                } = e;
                return (0, n.BX)(s, {
                    as: "div",
                    children: [(0, n.tZ)(c, {
                        type: "arrowUp"
                    }), t]
                })
            }
        },
        11052: function(e, t, r) {
            var n = r(52903),
                a = r(2784),
                o = r(80960),
                i = r(6917),
                l = r(11198),
                s = r(75619),
                c = r(20971),
                d = r(34312),
                u = r(96026);
            const p = (0, l.Z)("div", {
                    target: "ej3p0dw0"
                })("width:100%;"),
                g = (0, l.Z)("div", {
                    target: "ej3p0dw1"
                })("width:100%;height:100%;aspect-ratio:", (e => {
                    let {
                        orientation: t
                    } = e;
                    return "square" === t ? "1 / 1" : "landscape" === t ? "16 / 9" : "longLandscape" === t ? "4.8 / 1" : "16 / 9"
                }), ";position:relative;border-radius:24px;overflow:hidden;", s.Nn.m, "{border-radius:16px;}"),
                h = (0, l.Z)(o.Z, {
                    target: "ej3p0dw2"
                })("width:100%;");
            t.Z = e => {
                const {
                    type: t,
                    url: r,
                    videoPlayMode: o = "autoPlay",
                    caption: l,
                    orientation: v
                } = e, [m, f] = (0, a.useState)(!1);
                (0, a.useEffect)((() => {
                    f(!0)
                }), []);
                const [x, b] = (0, a.useState)(!1), Z = (0, i.Z)("(max-width: ".concat(s.j$.l, "px)"), !1);
                return (0, n.BX)(p, {
                    children: ["image" === t || "videoFile" === t ? (0, n.tZ)(g, {
                        isVideo: "videoFile" === t,
                        orientation: v,
                        onMouseEnter: () => b(!0),
                        onMouseLeave: () => b(!1),
                        children: (0, n.tZ)(d.Z, { ...e,
                            stretch: !0,
                            autoPlay: "controls" !== o,
                            canPlay: "autoPlay" === o || "hover" === o && x || Z,
                            type: "image" === t ? "image" : "video",
                            sizes: {
                                desktop: "1632px",
                                mobile: "335px",
                                tablet: "465px"
                            }
                        })
                    }) : (0, n.tZ)(g, {
                        isVideo: !0,
                        children: m ? !s.Mv.test(r) || s.sc.test(r) || s.II.test(r) ? (0, n.tZ)(h, {
                            url: r,
                            width: "100%",
                            height: "100%",
                            controls: !0,
                            volume: 1
                        }) : (0, n.tZ)(u.Z, {
                            url: r
                        }) : null
                    }), l && (0, n.tZ)(c.Z, {
                        children: l
                    })]
                })
            }
        },
        78727: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return x
                }
            });
            var n = r(73235),
                a = r(52903),
                o = r(2784),
                i = r(96577),
                l = r.n(i),
                s = r(28165),
                c = r(11198),
                d = r(66429),
                u = r(75619);
            const p = (e, t) => {
                let [r] = e, [n] = t;
                return u.XA[r] - u.XA[n]
            };

            function g() {
                const e = (0, n._)(["\n      padding-bottom: ", "%;\n\n      @supports (aspect-ratio: 1 / 1) {\n        padding-bottom: unset;\n        aspect-ratio: ", ";\n      }\n    "]);
                return g = function() {
                    return e
                }, e
            }
            const h = (e, t) => {
                    let {
                        className: r,
                        image: n,
                        sizes: i,
                        priority: l,
                        onLoad: s,
                        stretch: c,
                        aspectRatio: g,
                        quality: h = 75
                    } = e;
                    const x = c || !!g,
                        {
                            alt: b = ""
                        } = n,
                        Z = (0, d.i)(n).url(),
                        w = (0, o.useMemo)((() => {
                            if (i) {
                                const e = Object.entries(i).sort(p);
                                if (0 === e.length) return "100vw";
                                const t = e.map((e => {
                                    let [t, r] = e;
                                    const n = (e => {
                                        switch (e) {
                                            case "mobile":
                                                return "".concat(u.nh.m, " ");
                                            case "tablet":
                                                return "(".concat(u.Ub.m, " and ").concat(u.nh.l, ") ");
                                            case "desktop":
                                                return ""
                                        }
                                    })(t);
                                    return "".concat(n).concat(r)
                                }));
                                return t.join(", ")
                            }
                        }), [i]),
                        y = (0, o.useMemo)((() => x ? {} : function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            if ("" === e || "undefined" === typeof e) return {};
                            const [t, r] = e.split("-")[1].split(".")[0].split("x").map(Number);
                            return {
                                width: t,
                                height: r
                            }
                        }(Z)), [x, Z]),
                        k = (0, o.useCallback)((() => {
                            var e;
                            null === (e = s) || void 0 === e || e()
                        }), [s]);
                    return (0, a.BX)(v, {
                        className: r,
                        stretch: c,
                        aspectRatio: g,
                        ref: t,
                        children: [n.showGradient && (0, a.tZ)(f, {}), (0, a.tZ)(m, {
                            src: Z,
                            quality: h,
                            alt: b,
                            sizes: w,
                            fill: x,
                            priority: l,
                            onLoad: k,
                            loading: "lazy",
                            ...y
                        })]
                    })
                },
                v = (0, c.Z)("div", {
                    target: "eqj05uq0"
                })("position:relative;width:100%;height:", (e => {
                    let {
                        stretch: t
                    } = e;
                    return t && "100%"
                }), ";overflow:hidden;", (e => {
                    let {
                        aspectRatio: t
                    } = e;
                    return t && (0, s.iv)(g(), 100 * t, t)
                })),
                m = (0, c.Z)(l(), {
                    target: "eqj05uq1"
                })("display:block;width:100%;height:auto;object-fit:", (e => {
                    let {
                        fill: t
                    } = e;
                    return t && "cover"
                }), ';&[loading="lazy"]{@media not all and (min-resolution:0.001dpcm){clip-path:inset(0.5px);}}'),
                f = (0, c.Z)("div", {
                    target: "eqj05uq2"
                })("/* Gradient */\n  background:linear-gradient(180deg,rgba(0,0,0,0.61) -1.63%,rgba(217,217,217,0) 103.5%);position:absolute;top:0;width:100%;height:100%;z-index:1;");
            var x = (0, o.forwardRef)(h)
        },
        1508: function(e, t, r) {
            var n = r(52903),
                a = r(2784),
                o = r(11198),
                i = r(83485),
                l = r(50154),
                s = r(75619),
                c = r(23807),
                d = r(6620);
            const u = e => {
                    let {
                        src: t,
                        play: r,
                        loop: o,
                        isLoadedSrc: i,
                        setIsLoadedSrc: s
                    } = e;
                    const d = (0, a.useRef)(null),
                        u = (0, l.Dv)(c.f) && i;
                    return (0, a.useEffect)((() => {
                        var e;
                        const t = d.current;
                        s(!1);
                        const r = () => {
                            s(!0)
                        };
                        return null === (e = t) || void 0 === e || e.addEventListener("ready", r), () => {
                            var e;
                            null === (e = t) || void 0 === e || e.removeEventListener("ready", r)
                        }
                    }), [s]), (0, a.useEffect)((() => {
                        var e, t;
                        u && r && (null === (e = d.current) || void 0 === e || e.stop(), null === (t = d.current) || void 0 === t || t.play())
                    }), [u, r]), (0, n.tZ)("dotlottie-player", {
                        loop: o,
                        ref: d,
                        src: t
                    }, t)
                },
                p = (e, t) => {
                    let {
                        className: r,
                        variant: o,
                        play: i,
                        loop: c,
                        color: p
                    } = e;
                    var v;
                    const {
                        lottieColor: m
                    } = (0, l.Dv)(d.N), f = p || m, x = null === (v = s.uT[o]) || void 0 === v ? void 0 : v[f], b = "/lottie/".concat(x), [Z, w] = (0, a.useState)(!1);
                    return (0, n.BX)(g, {
                        ref: t,
                        className: r,
                        "aria-hidden": "true",
                        children: [(0, n.tZ)(h, {
                            type: "logoLottie",
                            color: f,
                            isHidden: Z
                        }), x && (0, n.tZ)(u, {
                            src: b,
                            play: i,
                            loop: c,
                            isLoadedSrc: Z,
                            setIsLoadedSrc: w
                        }, b)]
                    })
                },
                g = (0, o.Z)("span", {
                    target: "e18osog00"
                })("display:inline-block;position:relative;pointer-events:none;dotlottie-player{position:absolute;top:50%;left:50%;width:191%;height:auto;transform:translate(-50%,-50%);}"),
                h = (0, o.Z)(i.J, {
                    target: "e18osog01"
                })("position:absolute;top:50%;left:50%;width:191%;height:auto;transform:translate(-50%,-50%);color:", (e => {
                    let {
                        color: t
                    } = e;
                    return "var(--".concat(t, ")")
                }), ";opacity:", (e => {
                    let {
                        isHidden: t
                    } = e;
                    return t ? 0 : 1
                }), ";");
            t.Z = (0, a.forwardRef)(p)
        },
        34312: function(e, t, r) {
            var n = r(52903),
                a = r(2784),
                o = r(39879),
                i = r(78727),
                l = r(1046);
            const s = (e, t) => {
                let {
                    className: r,
                    sizes: a,
                    stretch: s,
                    autoPlay: c = !0,
                    canPlay: d,
                    image: u,
                    responsiveVideo: p,
                    type: g,
                    quality: h
                } = e;
                switch (g) {
                    case "image":
                        var v;
                        return (null === (v = u) || void 0 === v ? void 0 : v.asset) ? (0, n.tZ)(i.Z, {
                            stretch: s,
                            sizes: a,
                            quality: h,
                            className: r,
                            image: u,
                            ref: t
                        }) : null;
                    case "video":
                        return (0, n.tZ)(o.ZP, {
                            once: !0,
                            children: (0, n.tZ)(l.Z, {
                                stretch: s,
                                className: r,
                                autoPlay: c,
                                canPlay: d,
                                sources: p,
                                ref: t
                            })
                        })
                }
            };
            t.Z = (0, a.forwardRef)(s)
        },
        1046: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = r(52903),
                a = r(2784),
                o = r(6917),
                i = r(75619),
                l = r(11198),
                s = r(83264),
                c = r(46896);
            const d = (e, t) => {
                    let {
                        className: r,
                        video: o,
                        canPlay: i = !0,
                        stretch: l = !1
                    } = e;
                    const {
                        type: d,
                        src: p,
                        srcTransparentChrome: g,
                        srcTransparentSafari: h
                    } = o, v = (0, c.Z)(p), m = (0, c.Z)(g), f = (0, c.Z)(h), x = (0, a.useRef)(), b = (0, s.Y)(x), [Z, w] = (0, a.useState)(!0), y = i && b;
                    (0, a.useEffect)((() => {
                        (v || m || f) && (p === v && h === f && g === m || (w(!0), x.current.load()))
                    }), [p, v, h, f, g, m]), (0, a.useEffect)((() => {
                        Z || (y ? x.current.play() : x.current.pause())
                    }), [y, Z]), (0, a.useEffect)((() => {
                        x.current.readyState >= 1 && w(!1)
                    }), []);
                    const k = () => {
                        w(!1)
                    };
                    return (0, n.tZ)(u, {
                        ref: t,
                        className: r,
                        stretch: l,
                        children: "normal" === d ? (0, n.tZ)("video", {
                            ref: x,
                            src: "".concat(p, "#t=0.1"),
                            loop: !0,
                            muted: !0,
                            playsInline: !0,
                            preload: "metadata",
                            onLoadedMetadata: k
                        }) : (0, n.BX)("video", {
                            ref: x,
                            muted: !0,
                            playsInline: !0,
                            loop: !0,
                            preload: "metadata",
                            onLoadedMetadata: k,
                            children: [(0, n.tZ)("source", {
                                src: "".concat(h, "#t=0.1"),
                                type: 'video/mp4; codecs="hvc1"'
                            }), (0, n.tZ)("source", {
                                src: "".concat(g, "#t=0.1"),
                                type: "video/webm"
                            })]
                        })
                    })
                },
                u = (0, l.Z)("div", {
                    target: "eky9pqf0"
                })("position:", (e => {
                    let {
                        stretch: t
                    } = e;
                    return t ? "absolute" : "relative"
                }), ";inset:", (e => {
                    let {
                        stretch: t
                    } = e;
                    return t && 0
                }), ";video{position:", (e => {
                    let {
                        stretch: t
                    } = e;
                    return t ? "absolute" : "relative"
                }), ";display:block;height:100%;width:100%;object-fit:", (e => {
                    let {
                        stretch: t
                    } = e;
                    return t ? "cover" : "contain"
                }), ";pointer-events:none;}");
            var p = (0, a.forwardRef)(d),
                g = r(96026);
            const h = (e, t) => {
                let {
                    className: r,
                    sources: a,
                    autoPlay: l = !0,
                    stretch: s,
                    ...c
                } = e;
                var d;
                var u;
                const h = (0, o.Z)("(max-width: ".concat(i.j$.l, "px)"), !1) && null !== (u = null === (d = a) || void 0 === d ? void 0 : d.mobile) && void 0 !== u ? u : a.desktop;
                return l ? (0, n.tZ)(p, {
                    ref: t,
                    stretch: s,
                    className: r,
                    video: h,
                    ...c
                }) : (0, n.tZ)(g.Z, {
                    url: h.src
                })
            };
            var v = (0, a.forwardRef)(h)
        },
        96026: function(e, t, r) {
            var n = r(52903),
                a = r(2784),
                o = r(84372),
                i = r(11198),
                l = r(83485),
                s = r(40867),
                c = r(75619);
            const d = (0, i.Z)("div", {
                    target: "eqgetz00"
                })("display:flex;flex-direction:row;align-items:center;justify-content:space-between;width:100%;height:100%;gap:var(--spacingXXS);background-color:var(--lilac);position:relative;overflow:hidden;border-radius:20px;transform:translateZ(0);", c.wQ.m, "{border-radius:24px;}"),
                u = (0, i.Z)("div", {
                    target: "eqgetz01"
                })("position:absolute;inset:0px;"),
                p = (0, i.Z)(o.Z, {
                    target: "eqgetz02"
                })("position:absolute;inset:0px;background-color:var(--black);"),
                g = (0, i.Z)("div", {
                    target: "eqgetz03"
                })("position:absolute;inset:0;opacity:", (e => {
                    let {
                        isVisible: t
                    } = e;
                    return t ? 1 : 0
                }), ";transition:opacity 0.3s ease;"),
                h = (0, i.Z)("div", {
                    target: "eqgetz04"
                })("position:absolute;left:0;bottom:0;width:100%;display:flex;justify-content:space-between;align-items:center;padding:var(--spacingXS);gap:var(--spacingXS);"),
                v = (0, i.Z)("button", {
                    target: "eqgetz05"
                })("width:60px;height:40px;background-color:var(--white);border-radius:20px;display:flex;justify-content:center;align-items:center;transition:transform 0.2s ease-in,background-color 0.2s ease-in,color 0.2s ease-in;@media (hover:hover){&:hover{background-color:var(--black);transform:scale(0.96);span,svg{color:var(--white);}}}svg{width:20px;height:auto;margin-left:", (e => e.isPlaying ? 0 : "3px"), ";}"),
                m = (0, i.Z)("button", {
                    target: "eqgetz06"
                })("width:60px;height:40px;background-color:var(--white);border-radius:20px;display:flex;justify-content:center;align-items:center;transition:transform 0.2s ease-in,background-color 0.2s ease-in,color 0.2s ease-in;position:absolute;top:var(--spacingXS);right:var(--spacingXS);@media (hover:hover){&:hover{background-color:var(--black);transform:scale(0.96);span,svg{color:var(--white);}}}svg{width:20px;height:auto;}"),
                f = (0, i.Z)("input", {
                    target: "eqgetz07"
                })("flex:1;-webkit-appearance:none;cursor:pointer;border-radius:2px;@media (hover:hover){&:hover{&::-webkit-slider-thumb{opacity:1;}}}&::-webkit-slider-thumb{-webkit-appearance:none;height:20px;width:20px;border-radius:50%;background:var(--purple);cursor:pointer;margin-top:-8px;opacity:0;@media (hover:hover){&:hover{transform:scale(1.1);transition:transform 0.1s ease,opacity 0.1s ease;}}}&::-webkit-slider-runnable-track{-webkit-appearance:none;background-image:linear-gradient(var(--purple),var(--purple));background-size:", (e => e.progress), "% 100%;background-repeat:no-repeat;height:4px;border-radius:2px;}"),
                x = (0, i.Z)("time", {
                    target: "eqgetz08"
                })("color:var(--white);font-size:0.78rem;");
            t.Z = e => {
                let {
                    url: t
                } = e;
                const r = (0, a.useRef)(),
                    [o, i] = (0, a.useState)(!1),
                    [c, b] = (0, a.useState)(!1),
                    [Z, w] = (0, a.useState)(0),
                    [y, k] = (0, a.useState)(0),
                    [N, C] = (0, a.useState)(!1),
                    [S, B] = (0, a.useState)(!1),
                    z = (0, a.useRef)(null);
                (0, a.useEffect)((() => {
                    C(!0)
                }), []);
                const L = () => {
                        B(!0), X()
                    },
                    X = () => (clearTimeout(z.current), z.current = setTimeout((() => {
                        B(!1)
                    }), 2e3), () => {
                        clearTimeout(z.current)
                    });
                (0, a.useEffect)((() => {
                    o && X()
                }), [o, B]);
                const j = () => {
                        i((e => !e))
                    },
                    E = () => {
                        o || i(!0)
                    };
                return (0, n.BX)(d, {
                    "aria-label": "Video player",
                    role: "region",
                    onMouseEnter: L,
                    onMouseMove: L,
                    onMouseLeave: X,
                    children: [N && (0, n.tZ)(p, {
                        ref: r,
                        playsinline: !0,
                        controls: !1,
                        playing: o,
                        volume: 1,
                        muted: c,
                        loop: !1,
                        url: t,
                        width: "100%",
                        height: "100%",
                        type: "video/mp4",
                        onProgress: e => {
                            let {
                                playedSeconds: t
                            } = e;
                            o && w(t)
                        },
                        onDuration: e => {
                            k(e)
                        },
                        onPlay: () => i(!0),
                        onPause: () => i(!1),
                        onEnded: () => {
                            i(!1), w(0)
                        }
                    }), (0, n.BX)(g, {
                        isVisible: !o || S,
                        children: [(0, n.tZ)(u, {
                            onClick: j
                        }), (0, n.tZ)(m, {
                            onClick: () => {
                                b((e => !e))
                            },
                            "aria-label": c ? "Unmute" : "Mute",
                            isMuted: c,
                            children: (0, n.tZ)(l.J, {
                                type: c ? "volumeX" : "volume2"
                            })
                        }), (0, n.BX)(h, {
                            children: [(0, n.tZ)(v, {
                                onClick: j,
                                "aria-label": o ? "Pause" : "Play",
                                isPlaying: o,
                                children: (0, n.tZ)(l.J, {
                                    type: o ? "pause" : "play"
                                })
                            }), (0, n.tZ)(f, {
                                type: "range",
                                value: Z,
                                step: "0.1",
                                min: "0",
                                max: y || "".concat(y),
                                className: "progress",
                                onChange: e => (e => {
                                    var t;
                                    const n = parseInt(e, 10);
                                    w(n), null === (t = r.current) || void 0 === t || t.seekTo(n)
                                })(e.target.value),
                                onMouseUp: E,
                                onKeyUp: E,
                                progress: 100 * (Z / y || 0)
                            }), (0, n.tZ)(x, {
                                children: (0, s.BY)(Z)
                            })]
                        })]
                    })]
                })
            }
        },
        6626: function(e, t, r) {
            var n = r(2784);
            t.Z = () => {
                const [e, t] = (0, n.useState)(!1);
                return (0, n.useEffect)((() => {
                    t(!0)
                }), []), e
            }
        },
        40330: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return a
                }
            });
            var n = r(2784);

            function a() {
                const [e, t] = (0, n.useState)({
                    windowWidth: 0,
                    windowHeight: 0
                });
                return (0, n.useEffect)((() => {
                    function e() {
                        t(function() {
                            const {
                                innerWidth: e,
                                innerHeight: t
                            } = window;
                            return {
                                windowWidth: e,
                                windowHeight: t
                            }
                        }())
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }), []), e
            }
        }
    }
]);