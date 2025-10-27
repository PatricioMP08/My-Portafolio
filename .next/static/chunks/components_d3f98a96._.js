(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AnimatedBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundParticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-tsparticles/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tsparticles/esm/index.js [app-client] (ecmascript)");
"use client";
;
;
;
function BackgroundParticles() {
    const init = async (engine)=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadFull"])(engine);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tsparticles$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
        id: "tsparticles",
        init: init,
        options: {
            background: {
                color: "transparent"
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onClick: {
                        enable: false
                    }
                },
                modes: {
                    repulse: {
                        distance: 120,
                        duration: 0.3
                    }
                }
            },
            particles: {
                number: {
                    value: 45,
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                color: {
                    value: [
                        "#60a5fa",
                        "#8b5cf6",
                        "#ec4899"
                    ]
                },
                links: {
                    enable: true,
                    color: "#8b5cf6",
                    distance: 160,
                    opacity: 0.12
                },
                move: {
                    enable: true,
                    speed: 0.6
                },
                size: {
                    value: {
                        min: 1,
                        max: 4
                    }
                },
                opacity: {
                    value: 0.6
                }
            },
            detectRetina: true
        },
        className: "absolute inset-0 -z-10"
    }, void 0, false, {
        fileName: "[project]/components/AnimatedBackground.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = BackgroundParticles;
var _c;
__turbopack_context__.k.register(_c, "BackgroundParticles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ThemeProviderClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeProviderClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProviderClient(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ThemeProviderClient.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = ThemeProviderClient;
var _c;
__turbopack_context__.k.register(_c, "ThemeProviderClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/BubbleNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BottomDockNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const items = [
    {
        id: "inicio",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHome"], {}, void 0, false, {
            fileName: "[project]/components/BubbleNav.tsx",
            lineNumber: 8,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Inicio"
    },
    {
        id: "sobre-mi",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUser"], {}, void 0, false, {
            fileName: "[project]/components/BubbleNav.tsx",
            lineNumber: 9,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Sobre mí"
    },
    {
        id: "experiencia",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBriefcase"], {}, void 0, false, {
            fileName: "[project]/components/BubbleNav.tsx",
            lineNumber: 10,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Experiencia"
    },
    {
        id: "achievements",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAward"], {}, void 0, false, {
            fileName: "[project]/components/BubbleNav.tsx",
            lineNumber: 11,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Certificaciones"
    },
    {
        id: "tecnologias",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLaptopCode"], {}, void 0, false, {
            fileName: "[project]/components/BubbleNav.tsx",
            lineNumber: 12,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Tecnologías"
    },
    {
        id: "proyectos",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaServer"], {}, void 0, false, {
            fileName: "[project]/components/BubbleNav.tsx",
            lineNumber: 13,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Proyectos"
    },
    {
        id: "contacto",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {}, void 0, false, {
            fileName: "[project]/components/BubbleNav.tsx",
            lineNumber: 14,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Contáctame"
    }
];
function BottomDockNav() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("inicio");
    // Detectar sección activa al hacer scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BottomDockNav.useEffect": ()=>{
            const handleScroll = {
                "BottomDockNav.useEffect.handleScroll": ()=>{
                    const scrollPos = window.scrollY + window.innerHeight / 2;
                    for (const item of items){
                        const el = document.getElementById(item.id);
                        if (!el) continue;
                        const offsetTop = el.offsetTop;
                        const offsetHeight = el.offsetHeight;
                        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                            setActive(item.id);
                            break;
                        }
                    }
                }
            }["BottomDockNav.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            handleScroll(); // verificar al inicio
            return ({
                "BottomDockNav.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["BottomDockNav.useEffect"];
        }
    }["BottomDockNav.useEffect"], []);
    const scrollTo = (id)=>{
        const el = document.getElementById(id);
        if (!el) return;
        const navHeight = 0; // Ajusta si tienes header fijo
        const target = el.offsetTop - navHeight;
        window.scrollTo({
            top: target,
            behavior: "smooth"
        });
        setActive(id);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.6
        },
        className: "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 sm:gap-6   bg-white/30 dark:bg-gray-800/50 backdrop-blur-lg   border border-white/10 rounded-full px-4 sm:px-8 py-3 shadow-xl overflow-x-auto",
        children: items.map((it)=>{
            const isActive = active === it.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: ()=>scrollTo(it.id),
                whileHover: {
                    scale: 1.2
                },
                whileTap: {
                    scale: 0.9
                },
                className: "flex flex-col items-center text-[10px] sm:text-xs transition-all flex-shrink-0 ".concat(isActive ? "text-cyan-400" : "text-gray-400 hover:text-cyan-300"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            scale: isActive ? 1.4 : 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 10
                        },
                        children: it.icon
                    }, void 0, false, {
                        fileName: "[project]/components/BubbleNav.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:block mt-1 text-center",
                        children: it.label
                    }, void 0, false, {
                        fileName: "[project]/components/BubbleNav.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                ]
            }, it.id, true, {
                fileName: "[project]/components/BubbleNav.tsx",
                lineNumber: 68,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/BubbleNav.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(BottomDockNav, "PzvHXRX89M8SQktid0waJlkrmfk=");
_c = BottomDockNav;
var _c;
__turbopack_context__.k.register(_c, "BottomDockNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SocialSidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SocialSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function SocialSidebar() {
    _s();
    const [showScrollTop, setShowScrollTop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const goToContact = ()=>{
        const el = document.getElementById("contacto");
        if (el) el.scrollIntoView({
            behavior: "smooth"
        });
    };
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    // Mostrar el botón cuando se hace scroll hacia abajo
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SocialSidebar.useEffect": ()=>{
            const handleScroll = {
                "SocialSidebar.useEffect.handleScroll": ()=>{
                    setShowScrollTop(window.scrollY > 300);
                }
            }["SocialSidebar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "SocialSidebar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["SocialSidebar.useEffect"];
        }
    }["SocialSidebar.useEffect"], []);
    const icons = [
        {
            id: "github",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {
                size: 22
            }, void 0, false, {
                fileName: "[project]/components/SocialSidebar.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            color: "bg-gray-800 hover:bg-blue-500",
            link: "https://github.com/"
        },
        {
            id: "linkedin",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                size: 22
            }, void 0, false, {
                fileName: "[project]/components/SocialSidebar.jsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            color: "bg-blue-700 hover:bg-blue-500",
            link: "https://linkedin.com/"
        },
        {
            id: "correo",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                size: 22
            }, void 0, false, {
                fileName: "[project]/components/SocialSidebar.jsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            color: "bg-purple-600 hover:bg-blue-500",
            action: goToContact
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    x: 80,
                    opacity: 0
                },
                animate: {
                    x: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: "easeOut"
                },
                className: "fixed top-1/2 right-6 -translate-y-1/2 flex flex-col items-center gap-4 z-50",
                children: icons.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            x: 60,
                            opacity: 0
                        },
                        animate: {
                            x: 0,
                            opacity: 1
                        },
                        transition: {
                            delay: i * 0.2 + 0.3,
                            duration: 0.5,
                            ease: "easeOut"
                        },
                        children: item.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item.link,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "w-12 h-12 flex items-center justify-center rounded-full text-white transition-all shadow-lg hover:scale-110 ".concat(item.color),
                            title: item.id.charAt(0).toUpperCase() + item.id.slice(1),
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/components/SocialSidebar.jsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: item.action,
                            className: "w-12 h-12 flex items-center justify-center rounded-full text-white transition-all shadow-lg hover:scale-110 ".concat(item.color),
                            title: "Contacto",
                            children: item.icon
                        }, void 0, false, {
                            fileName: "[project]/components/SocialSidebar.jsx",
                            lineNumber: 76,
                            columnNumber: 15
                        }, this)
                    }, item.id, false, {
                        fileName: "[project]/components/SocialSidebar.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/SocialSidebar.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            showScrollTop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: scrollToTop,
                initial: {
                    opacity: 0,
                    y: 40
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 40
                },
                transition: {
                    duration: 0.4
                },
                className: "fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center    rounded-full bg-cyan-500 text-white shadow-lg    hover:bg-cyan-400 hover:scale-110 transition-all z-50",
                title: "Ir arriba",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowUp"], {
                    size: 22
                }, void 0, false, {
                    fileName: "[project]/components/SocialSidebar.jsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SocialSidebar.jsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(SocialSidebar, "BzYVmYs5YvbcgH1VcNXhMt9CQ6o=");
_c = SocialSidebar;
var _c;
__turbopack_context__.k.register(_c, "SocialSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "   relative w-full py-3 border-t border-white/10   bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent   text-gray-400 text-sm backdrop-blur-sm   ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 flex items-center relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs md:text-sm text-gray-500",
                    children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-white",
                            children: "Nombre Apellido"
                        }, void 0, false, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 15,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 13,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "   hidden md:block text-xs text-gray-500    absolute right-[-40px]   ",
                    children: "Desarrollador Full Stack • Next.js | Laravel | React"
                }, void 0, false, {
                    fileName: "[project]/components/Footer.tsx",
                    lineNumber: 18,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Footer.tsx",
            lineNumber: 12,
            columnNumber: 3
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 5,
        columnNumber: 1
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_d3f98a96._.js.map