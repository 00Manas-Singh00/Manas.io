module.exports = [
"[project]/Developer/Portfolio 2/.next-internal/server/app/(app)/(root)/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Developer/Portfolio 2/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Portfolio 2/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Developer/Portfolio 2/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Portfolio 2/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Developer/Portfolio 2/src/app/(app)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Portfolio 2/src/app/(app)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/Developer/Portfolio 2/src/utils/url.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addQueryParams",
    ()=>addQueryParams,
    "urlToName",
    ()=>urlToName
]);
function urlToName(url) {
    return url.replace(/(^\w+:|^)\/\//, "");
}
function addQueryParams(urlString, query) {
    try {
        const url = new URL(urlString);
        for (const [key, value] of Object.entries(query)){
            url.searchParams.set(key, value);
        }
        return url.toString();
    } catch  {
        return urlString;
    }
}
}),
"[project]/Developer/Portfolio 2/src/lib/rehype-add-query-params.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rehypeAddQueryParams",
    ()=>rehypeAddQueryParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/unist-util-visit@5.0.0/node_modules/unist-util-visit/lib/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$utils$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/utils/url.ts [app-rsc] (ecmascript)");
;
;
function rehypeAddQueryParams(params) {
    return (tree)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$unist$2d$util$2d$visit$40$5$2e$0$2e$0$2f$node_modules$2f$unist$2d$util$2d$visit$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["visit"])(tree, (node)=>{
            if (node.type !== "element" || node?.tagName !== "a" || !node?.properties?.href) {
                return;
            }
            const href = node.properties?.href;
            if (!href || href.startsWith("/") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
                return;
            }
            node.properties.href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$utils$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQueryParams"])(href, params);
        });
    };
}
}),
"[project]/Developer/Portfolio 2/src/components/markdown.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Markdown",
    ()=>Markdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.1.10_react@19.1.1/node_modules/react-markdown/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$rehype$2d$external$2d$links$40$3$2e$0$2e$0$2f$node_modules$2f$rehype$2d$external$2d$links$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/rehype-external-links@3.0.0/node_modules/rehype-external-links/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm/lib/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/config/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$rehype$2d$add$2d$query$2d$params$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/rehype-add-query-params.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function Markdown(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$react$2d$markdown$40$10$2e$1$2e$0_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MarkdownAsync"], {
        remarkPlugins: [
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$remark$2d$gfm$40$4$2e$0$2e$1$2f$node_modules$2f$remark$2d$gfm$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
        ],
        rehypePlugins: [
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$rehype$2d$external$2d$links$40$3$2e$0$2e$0$2f$node_modules$2f$rehype$2d$external$2d$links$2f$lib$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
                {
                    target: "_blank",
                    rel: "nofollow noopener noreferrer"
                }
            ],
            [
                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$rehype$2d$add$2d$query$2d$params$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rehypeAddQueryParams"],
                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UTM_PARAMS"]
            ]
        ],
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/components/markdown.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/components/ui/typography.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code",
    ()=>Code,
    "Heading",
    ()=>Heading,
    "Prose",
    ()=>Prose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/link.js [app-rsc] (ecmascript) <export default as LinkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.10_react@19.1.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const Slot = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Slot;
function Prose({ className, asChild = false, ...props }) {
    const Comp = asChild ? Slot : "div";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "prose",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("prose prose-sm max-w-none font-mono text-foreground prose-zinc dark:prose-invert", "prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance", "prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl", "prose-lead:text-base", "prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4", "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none", "prose-hr:border-edge", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/components/ui/typography.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function Code({ className, ...props }) {
    const isCodeBlock = "data-language" in props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
        "data-slot": isCodeBlock ? "code-block" : "code-inline",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(!isCodeBlock && "not-prose rounded-md border bg-muted/50 px-[0.3rem] py-[0.2rem] font-mono text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/components/ui/typography.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function Heading({ as, className, ...props }) {
    const Comp = as ?? "h1";
    if (!props.id) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
            className: className,
            ...props
        }, void 0, false, {
            fileName: "[project]/Developer/Portfolio 2/src/components/ui/typography.tsx",
            lineNumber: 65,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-row items-center gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: `#${props.id}`,
                className: "peer not-prose",
                children: props.children
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/ui/typography.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__["LinkIcon"], {
                className: "size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100",
                "aria-label": "Link to section"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/ui/typography.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/components/ui/typography.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Panel",
    ()=>Panel,
    "PanelContent",
    ()=>PanelContent,
    "PanelHeader",
    ()=>PanelHeader,
    "PanelTitle",
    ()=>PanelTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.10_react@19.1.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const Slot = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Slot;
;
function Panel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-slot": "panel",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("screen-line-before screen-line-after border-x border-edge", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
function PanelHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "panel-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("screen-line-after px-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
function PanelTitle({ className, asChild = false, ...props }) {
    const Comp = asChild ? Slot : "h2";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "panel-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-3xl font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
function PanelContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "panel-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/about.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "About",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$markdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/markdown.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        id: "about",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelTitle"], {
                    children: "About"
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/about.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/about.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Prose"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$markdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Markdown"], {
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].about
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/about.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/about.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/about.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/about.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible,
    "CollapsibleContent",
    ()=>CollapsibleContent,
    "CollapsibleTrigger",
    ()=>CollapsibleTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Collapsible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Collapsible() from the server but Collapsible is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx <module evaluation>", "Collapsible");
const CollapsibleContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CollapsibleContent() from the server but CollapsibleContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx <module evaluation>", "CollapsibleContent");
const CollapsibleTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CollapsibleTrigger() from the server but CollapsibleTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx <module evaluation>", "CollapsibleTrigger");
}),
"[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible,
    "CollapsibleContent",
    ()=>CollapsibleContent,
    "CollapsibleTrigger",
    ()=>CollapsibleTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Collapsible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Collapsible() from the server but Collapsible is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx", "Collapsible");
const CollapsibleContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CollapsibleContent() from the server but CollapsibleContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx", "CollapsibleContent");
const CollapsibleTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call CollapsibleTrigger() from the server but CollapsibleTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx", "CollapsibleTrigger");
}),
"[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CollapsibleList",
    ()=>CollapsibleList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-rsc] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.1.10_react@19.1.1/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const Slot = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$3_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Slot;
function CollapsibleList({ items, max = 3, keyExtractor, renderItem }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Collapsible"], {
        children: [
            items.slice(0, max).map((award, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Slot, {
                    className: "border-b border-edge",
                    children: renderItem(award)
                }, typeof keyExtractor === "function" ? keyExtractor(award) : index, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                children: items.slice(max).map((award, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Slot, {
                        className: "border-b border-edge",
                        children: renderItem(award)
                    }, typeof keyExtractor === "function" ? keyExtractor(award) : max + index, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            items.length > max && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-12 items-center justify-center pb-px",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                        className: "group/collapsible-trigger flex",
                        variant: "default",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden group-data-[state=closed]/collapsible-trigger:block",
                                children: "Show More"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden group-data-[state=open]/collapsible-trigger:block",
                                children: "Show Less"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                                className: "group-data-[state=open]/collapsible-trigger:rotate-180",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                                lineNumber: 68,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/data/awards.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AWARDS",
    ()=>AWARDS
]);
const AWARDS = [
    {
        id: "a144bd19-3706-4e4c-ba22-0e0d8302642a",
        prize: "1st Prize",
        title: "Can Tho City Young Informatics Contest 2014",
        date: "2014-05",
        grade: "Grade 8",
        description: "- Field: Creative Software\n- Project: Website Hành Trình Khám Phá Miền Tây",
        referenceLink: "https://drive.google.com/file/d/16bia3XoeVbSlfvg4FzVapQf3LVI8wUA-/view?usp=sharing"
    },
    {
        id: "d9dc1a25-7976-47f8-925e-051285822d54",
        prize: "Consolation Prize",
        title: "National Young Informatics Contest 2014",
        date: "2014-09",
        grade: "Grade 8",
        description: "- Organized in Hanoi\n- Field: Creative Software\n- Project: Website Hành Trình Khám Phá Miền Tây",
        referenceLink: "https://drive.google.com/file/d/16OOVuKBxFAnROU-pmhkDFkbljkmeO-kc/view?usp=sharing"
    },
    {
        id: "38ab726f-4730-49fa-ad40-fc7c5872e476",
        prize: "3rd Prize",
        title: "Can Tho City Young Informatics Contest 2015",
        date: "2015-05",
        grade: "Grade 9",
        description: "- Field: Creative Software\n- Project: VietnamStudy Learning Application",
        referenceLink: "https://drive.google.com/file/d/16MmjvxdJpAiLc2sC7kU8aT76mDhIETFx/view?usp=sharing"
    },
    {
        id: "ed1044a2-b010-495c-a193-056a31e82627",
        prize: "3rd Prize",
        title: "Can Tho City Young Informatics Contest 2015",
        date: "2015-05",
        grade: "Grade 9",
        description: "- Field: Informatics Knowledge and Skills\n- Programming Language: Pascal",
        referenceLink: "https://drive.google.com/file/d/1lCikjG4LHAN2Y1n12Zn_3Xw2hTTiwY8z/view?usp=sharing"
    },
    {
        id: "697cd85a-24cc-4589-825b-7fe4c1522df6",
        prize: "Consolation Prize",
        title: "National Young Informatics Contest 2015",
        date: "2015-08",
        grade: "Grade 9",
        description: "- Organized in Binh Duong\n- Field: Informatics Knowledge and Skills\n- Programming Language: Pascal",
        referenceLink: "https://drive.google.com/file/d/1FfV9ju5612DE272nQdlgjzJ67zbVknQ6/view?usp=sharing"
    },
    {
        id: "b34a7f20-2604-495f-9ed1-40d5168ba110",
        prize: "Outstanding Student",
        title: "Most Outstanding Student of the District",
        date: "2015-09",
        grade: "Grade 9",
        description: "Recognized by the District for exceptional academic and personal achievements as the Outstanding Student of the locality.",
        referenceLink: "https://drive.google.com/file/d/1htqmjP6Cssd6RNKCQlvEP-_sDge3e_6V/view?usp=sharing"
    },
    {
        id: "f7598c4e-13e6-4b95-b7e9-d2b08b49aa76",
        prize: "2nd Prize",
        title: "Can Tho City Youth and Children's Creativity Contest 2015",
        date: "2015-12",
        grade: "Grade 9",
        description: "- Field: Software\n- Project: VietnamStudy Learning Application",
        referenceLink: "https://drive.google.com/file/d/1_NVmghi0LLc6mBHepefNoDznIVHM4ibC/view?usp=sharing"
    },
    {
        id: "a2ea39c3-bd7f-4d7e-9e2b-662bf0cb32d5",
        prize: "3rd Prize",
        title: "Can Tho City Science and Engineering Fair 2015",
        date: "2015-12",
        grade: "Grade 9",
        description: "- Field: Computer Science\n- Project: Distance Calculation System for Provinces, Cities, and Districts in the Mekong Delta",
        referenceLink: "https://drive.google.com/file/d/16Xc2ZR_A7a5XmP1hcqZC4ZpVLPNvXch6/view?usp=sharing"
    },
    {
        id: "6c1521c0-1494-41ec-a2e7-cb7c477d0cf0",
        prize: "Consolation Prize",
        title: "Can Tho City Young Informatics Contest 2016",
        date: "2016-05",
        grade: "Grade 10",
        description: "- Field: Creative Software\n- Project: Study English",
        referenceLink: "https://drive.google.com/file/d/1EHpJU787IWduq6eeJT-0EiCMNmev1rbY/view?usp=sharing"
    },
    {
        id: "023c49cd-87f6-4d86-a2e1-71c106510b48",
        prize: "1st Prize",
        title: "Can Tho City Youth and Children's Creativity Contest 2016",
        date: "2016-07",
        grade: "Grade 10",
        description: "- Field: Software\n- Project: Study English",
        referenceLink: "https://drive.google.com/file/d/1M4HJNeugtrUji3F8M8qAxOeWiTNNT9MX/view?usp=sharing"
    },
    {
        id: "c6398ae1-c76e-4f87-8fc8-48d388dc5fff",
        prize: "3rd Prize",
        title: "National Young Informatics Contest 2016",
        date: "2016-08",
        grade: "Grade 10",
        description: "- Organized in Quang Binh\n- Field: Hardware Programming\n- Project: IoT Technology Application for Smart Home Control",
        referenceLink: "https://drive.google.com/file/d/1kf3AR8StAEb3he67pTD1QE53b9_nzklS/view?usp=sharing"
    },
    {
        id: "bb6a9cfc-c487-4133-abf3-4032d4e1a3d8",
        prize: "Consolation Prize",
        title: "National Youth and Children's Creativity Contest 2016",
        date: "2016-10",
        grade: "Grade 10",
        description: "- Organized in Hanoi\n- Field: Software\n- Project: Study English",
        referenceLink: "https://drive.google.com/file/d/1FZXB2CeW0rrZmKnL4bHJjzXt0r_WeU2q/view?usp=sharing"
    },
    {
        id: "ab195c74-28b5-4dd7-80c1-832f38e86d06",
        prize: "2nd Prize",
        title: "Can Tho City Outstanding Student Selection Exam 2016-2017",
        date: "2017-02",
        grade: "Grade 11",
        description: "- Subject: Informatics (Programming)\n- Programming Language: C++",
        referenceLink: "https://drive.google.com/file/d/1LxIL0H-Tj7A6AVpAetf4BzdhkvJl00vg/view?usp=sharing"
    },
    {
        id: "27ffbb09-335a-406e-ab70-64ec1179573e",
        prize: "Consolation Prize",
        title: "Can Tho City Young Informatics Contest 2017",
        date: "2017-05",
        grade: "Grade 11",
        description: "- Field: Creative Software\n- Project: Formula - Social network for sharing solutions and problem-solving methods",
        referenceLink: "https://drive.google.com/file/d/10CytCmLT6EWtCYEbivcK-9cB70SdznMD/view?usp=sharing"
    },
    {
        id: "c45e738b-5748-47d7-901a-0e19e2e480d1",
        prize: "3rd Prize",
        title: "Can Tho City Young Informatics Contest 2017",
        date: "2017-05",
        grade: "Grade 11",
        description: "- Field: Informatics Knowledge and Skills\n- Programming Language: C++",
        referenceLink: "https://drive.google.com/file/d/1wkyMLztbBdziIYn328NsUIHFBdU8LS90/view?usp=sharing"
    },
    {
        id: "aab6494d-8255-48a9-9f1c-0c7af17a480a",
        prize: "2nd Prize",
        title: "Can Tho City Youth and Children's Creativity Contest 2017",
        date: "2017-10",
        grade: "Grade 11",
        description: "- Field: Software\n- Project: We Study All — Multi-Platform Learning Support Tool",
        referenceLink: "https://drive.google.com/file/d/1VLzOpISa2D6J7trxfb4bLzy8Dg8rzm3i/view?usp=sharing"
    },
    {
        id: "75590906-d887-4f2d-8185-fecdbc71eec5",
        prize: "Creative Award",
        title: "Binh Duong Hackathon 2017",
        date: "2017-11",
        grade: "Grade 12",
        description: "- Completed the Binh Duong Smart Map product within 24 hours\n- Youngest competing team to win an award",
        referenceLink: "https://drive.google.com/file/d/1g_Oeoe7qWsYPPtBpBxMSp8p-gLlIC0FV/view?usp=sharing"
    },
    {
        id: "b926ff47-48a9-4d93-b366-79b6ddd5045f",
        prize: "1st Prize",
        title: "Can Tho City Science and Engineering Fair 2018",
        date: "2018-01",
        grade: "Grade 12",
        description: "- Field: System Software\n- Project: [UnlimitedStudy](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm)",
        referenceLink: "https://drive.google.com/file/d/15PNdCA56653ZzvmZXqURR7eFLaU7pC8T/view?usp=sharing"
    },
    {
        id: "e0336b43-31db-4937-a3cb-e3c657fa2430",
        prize: "3rd Prize",
        title: "Can Tho City Outstanding Student Selection Exam 2017-2018",
        date: "2018-02",
        grade: "Grade 12",
        description: "- Subject: Informatics (Programming)\n- Programming Language: C++",
        referenceLink: "https://drive.google.com/file/d/1UQ-UX-YNtnkLylahYkgEObmIB-dcKCPH/view?usp=sharing"
    },
    {
        id: "148b23af-e8ee-4a7c-b633-30ebc6534c67",
        prize: "3rd Prize",
        title: "National Science and Engineering Fair 2018 (ViSEF)",
        date: "2018-03",
        grade: "Grade 12",
        description: "- Organized in Lam Dong\n- Field: System Software\n- Project: [UnlimitedStudy](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm)",
        referenceLink: "https://drive.google.com/file/d/1oOLM_ivrQ_IFHst66AC9qy3CoATT3z8B/view?usp=sharing"
    },
    {
        id: "0f2634de-2d52-4f17-be88-6e14a56b9362",
        prize: "3rd Prize",
        title: "Can Tho City Young Informatics Contest 2018",
        date: "2018-04",
        grade: "Grade 12",
        description: "- Field: Creative Software\n- Project: [UnlimitedStudy](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm)",
        referenceLink: "https://drive.google.com/file/d/1rh02NpKpPr7AQnXldQk8FGgbc837EPeQ/view?usp=sharing"
    },
    {
        id: "1b189ee1-9b2f-4c23-aaec-a3b485125785",
        prize: "2nd Prize",
        title: "Can Tho City Youth and Children's Creativity Contest 2018",
        date: "2018-08",
        grade: "Grade 12",
        description: "- Field: Software\n- Project: [UnlimitedStudy](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm)",
        referenceLink: "https://drive.google.com/file/d/1gWK5V29q6RMwZ8Qgsx6ZkRI7EzAd4n5e/view?usp=sharing"
    },
    {
        id: "f0962705-2561-40b2-ab40-789959fbb7bb",
        prize: "3rd Prize",
        title: "National Young Informatics Contest 2018",
        date: "2018-08",
        grade: "Grade 12",
        description: "- Organized in Ba Ria - Vung Tau\n- Field: Creative Products\n- Project: [UnlimitedStudy](https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm)",
        referenceLink: "https://drive.google.com/file/d/1Te5Ygi89H3j4pH5Yvm9ipDKEcghQXYy_/view?usp=sharing"
    },
    {
        id: "2b6d0838-c210-4856-b8be-ed58deed9023",
        prize: "2nd Prize",
        title: "Business Startup Competition 2019",
        date: "2019-05",
        grade: "University",
        description: "- Organized by University of Economics and Law — VNUHCM\n- Project: [Penphy](https://www.youtube.com/watch?v=EdU7rUO-UA4) — Self Development Social Network",
        referenceLink: "https://drive.google.com/file/d/1A_bwayALMZIfd12wL85SVGwAHD8lJjgh/view?usp=sharing"
    },
    {
        id: "e282cb38-72cf-4694-87fd-ba5c94f648c0",
        prize: "Bronze Medal",
        title: "10th Design, Manufacturing, and Application Award 2022",
        grade: "University",
        date: "2022-11",
        description: "- Organized by Ho Chi Minh City Youth Union\n- Field: Software\n- Project: [ZaDark](https://zadark.com)",
        referenceLink: "https://drive.google.com/file/d/1gmOG9_FTNAwdeR_eraYMCBBqaYuZOgoJ/view?usp=sharing"
    },
    {
        id: "05e1c61b-6dc1-11f0-8000-679dd01e0504",
        prize: "Summer 2025 Cohort",
        title: "Vercel Open Source Program",
        date: "2025-07",
        grade: "Personal Project",
        description: "- Selected for [Vercel Open Source Program: Summer cohort](https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker)\n- Received $3,600 in platform credits, OSS Starter Pack, and priority community support\n- Project: [React Wheel Picker](https://react-wheel-picker.chanhdai.com)",
        referenceLink: "https://vercel.com/blog/summer-2025-oss-program#react-wheel-picker"
    }
];
}),
"[project]/Developer/Portfolio 2/src/components/ui/separator.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Separator() from the server but Separator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/separator.tsx <module evaluation>", "Separator");
}),
"[project]/Developer/Portfolio 2/src/components/ui/separator.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Separator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Separator() from the server but Separator is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/separator.tsx", "Separator");
}),
"[project]/Developer/Portfolio 2/src/components/ui/separator.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/separator.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/separator.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "SimpleTooltip",
    ()=>SimpleTooltip,
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SimpleTooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SimpleTooltip() from the server but SimpleTooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx <module evaluation>", "SimpleTooltip");
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Tooltip() from the server but Tooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx <module evaluation>", "Tooltip");
const TooltipContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipContent() from the server but TooltipContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx <module evaluation>", "TooltipContent");
const TooltipProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipProvider() from the server but TooltipProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx <module evaluation>", "TooltipProvider");
const TooltipTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipTrigger() from the server but TooltipTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx <module evaluation>", "TooltipTrigger");
}),
"[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "SimpleTooltip",
    ()=>SimpleTooltip,
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SimpleTooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SimpleTooltip() from the server but SimpleTooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx", "SimpleTooltip");
const Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Tooltip() from the server but Tooltip is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx", "Tooltip");
const TooltipContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipContent() from the server but TooltipContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx", "TooltipContent");
const TooltipProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipProvider() from the server but TooltipProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx", "TooltipProvider");
const TooltipTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TooltipTrigger() from the server but TooltipTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx", "TooltipTrigger");
}),
"[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AwardItem",
    ()=>AwardItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDownUpIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevrons-down-up.js [app-rsc] (ecmascript) <export default as ChevronsDownUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDownIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-rsc] (ecmascript) <export default as ChevronsUpDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheckIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/file-check.js [app-rsc] (ecmascript) <export default as FileCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/icons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$markdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/markdown.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/separator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/typography.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function AwardItem({ className, award }) {
    const canExpand = !!award.description;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Collapsible"], {
        disabled: !canExpand,
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-4 flex size-6 shrink-0 items-center justify-center text-muted-foreground",
                            "aria-hidden": true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Icons"].award, {
                                className: "size-5"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 border-l border-dashed border-edge",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                                className: "group/award flex w-full items-center gap-4 p-4 pr-2 text-left select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-1 leading-snug font-medium text-balance",
                                                children: award.title
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "sr-only",
                                                                children: "Prize"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: award.prize
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                                lineNumber: 51,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Separator"], {
                                                        className: "data-[orientation=vertical]:h-4",
                                                        orientation: "vertical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "sr-only",
                                                                children: "Awarded in"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                                lineNumber: 60,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                                    dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(award.date).toISOString(),
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(award.date).format("MM.YYYY")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                                    lineNumber: 62,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                                lineNumber: 61,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                        lineNumber: 59,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Separator"], {
                                                        className: "data-[orientation=vertical]:h-4",
                                                        orientation: "vertical"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                                className: "sr-only",
                                                                children: "Received in Grade"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                                children: award.grade
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    award.referenceLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTooltip"], {
                                        content: "Open Reference Attachment",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground",
                                            href: award.referenceLink,
                                            target: "_blank",
                                            rel: "noopener",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheckIcon$3e$__["FileCheckIcon"], {
                                                    className: "pointer-events-none size-4",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                    lineNumber: 88,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: "Open Reference Attachment"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this),
                                    canExpand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 text-muted-foreground [&_svg]:size-4",
                                        "aria-hidden": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDownUpIcon$3e$__["ChevronsDownUpIcon"], {
                                                className: "hidden group-data-[state=open]/award:block"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDownIcon$3e$__["ChevronsUpDownIcon"], {
                                                className: "hidden group-data-[state=closed]/award:block"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                canExpand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                    className: "overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Prose"], {
                        className: "border-t border-dashed border-edge p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$markdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Markdown"], {
                            children: award.description
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                            lineNumber: 113,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                        lineNumber: 112,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/awards/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Awards",
    ()=>Awards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$collapsible$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/awards.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$awards$2f$award$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/awards/award-item.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const SORTED_AWARDS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AWARDS"]
].sort((a, b)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(b.date).diff((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(a.date));
});
function Awards() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        id: "awards",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelTitle"], {
                    children: [
                        "Honors & Awards",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                            className: "ml-1 font-mono text-sm font-medium text-muted-foreground select-none",
                            children: [
                                "(",
                                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AWARDS"].length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/index.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/index.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/index.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$collapsible$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleList"], {
                items: SORTED_AWARDS,
                max: 8,
                keyExtractor: (item)=>item.id,
                renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$awards$2f$award$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AwardItem"], {
                        award: item
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/index.tsx",
                        lineNumber: 29,
                        columnNumber: 31
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/index.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/awards/index.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brand",
    ()=>Brand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/shared/lib/app-dynamic.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
const BrandContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx [app-rsc] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.BrandContextMenu), {
    loadableGenerated: {
        modules: [
            "[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
function Brand() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelTitle"], {
                    children: "Brand"
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BrandContextMenu, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5", "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center", "bg-zinc-950/0.75 dark:bg-white/0.75"),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-[2.5rem_1fr]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-28 items-center justify-center border-r border-edge bg-background",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "rotate-270 font-mono text-sm text-muted-foreground select-none",
                                children: "Mark"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/data/certifications.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CERTIFICATIONS",
    ()=>CERTIFICATIONS
]);
const CERTIFICATIONS = [
    {
        title: "Certificate of Trademark Registration No. 543682",
        issuer: "Intellectual Property Office of Viet Nam",
        issuerLogoURL: "https://assets.chanhdai.com/images/companies/ipvietnam.webp",
        issueDate: "2025-05-08",
        credentialID: "543682",
        credentialURL: "https://drive.google.com/file/d/1x7YzlK1kyz16h28ux9k3KAwnZFAabsvq/view?usp=sharing"
    },
    {
        title: "Next.js SEO Fundamentals",
        issuer: "Vercel",
        issuerIconName: "vercel",
        issueDate: "2025-04-26",
        credentialID: "seo-47463-1745634751873",
        credentialURL: "https://nextjs.org/learn/certificate?course=seo&user=47463&certId=seo-47463-1745634751873"
    },
    {
        title: "Next.js App Router Fundamentals",
        issuer: "Vercel",
        issuerIconName: "vercel",
        issueDate: "2025-04-26",
        credentialID: "dashboard-app-47463-1745633258744",
        credentialURL: "https://nextjs.org/learn/certificate?course=dashboard-app&user=47463&certId=dashboard-app-47463-1745633258744"
    },
    {
        title: "React Foundations for Next.js",
        issuer: "Vercel",
        issuerIconName: "vercel",
        issueDate: "2025-04-26",
        credentialID: "react-foundations-47463-1745634245158",
        credentialURL: "https://nextjs.org/learn/certificate?course=react-foundations&user=47463&certId=react-foundations-47463-1745634245158"
    },
    {
        title: "Certificate of Copyright Registration No. 0040/2025/QTG",
        issuer: "Copyright Office of Viet Nam",
        issuerLogoURL: "https://assets.chanhdai.com/images/companies/cov.webp",
        issueDate: "2025-01-02",
        credentialID: "0040/2025/QTG",
        credentialURL: "https://drive.google.com/file/d/1kVBByVLlYPyyUJvxKga670wvVPNmZ2nV/view?usp=sharing"
    },
    {
        title: "Vietnamese Standardized Test of English Proficiency (CEFR B1)",
        issuer: "USSH-VNUHCM",
        issuerLogoURL: "https://assets.chanhdai.com/images/companies/ussh-vnuhcm.webp",
        issueDate: "2024-12-17",
        credentialID: "QH58202305187",
        credentialURL: "https://vbcc.hcmussh.edu.vn/?type=11&certificateType=7&no=QH58202305187&fullName=Nguy%E1%BB%85n+Ch%C3%A1nh+%C4%90%E1%BA%A1i&dob=2000-08-14"
    },
    {
        title: "Certificate of Copyright Registration No. 7994/2024/QTG",
        issuer: "Copyright Office of Viet Nam",
        issuerLogoURL: "https://assets.chanhdai.com/images/companies/cov.webp",
        issueDate: "2024-09-18",
        credentialID: "7994/2024/QTG",
        credentialURL: "https://drive.google.com/file/d/1otjV4GNOLFj4JD2tHWLuZpUIVyITYNUy/view?usp=sharing"
    },
    {
        title: "Engaging in Persuasive and Credible Communication",
        issuer: "National University of Singapore",
        issuerIconName: "coursera",
        issueDate: "2022-09-13",
        credentialID: "C6DHB9A5XQHV",
        credentialURL: "https://coursera.org/verify/C6DHB9A5XQHV"
    },
    {
        title: "Introduction to Databases",
        issuer: "Meta",
        issuerIconName: "meta",
        issueDate: "2022-08-28",
        credentialID: "YV5VQ5MXZ5YH",
        credentialURL: "https://coursera.org/verify/YV5VQ5MXZ5YH"
    },
    {
        title: "Solving Problems with Creative and Critical Thinking",
        issuer: "IBM Skills Network",
        issuerIconName: "coursera",
        issueDate: "2022-08-27",
        credentialID: "4UKZQJGM2932",
        credentialURL: "https://coursera.org/verify/4UKZQJGM2932"
    },
    {
        title: "Digital Skills: Social Media",
        issuer: "Accenture",
        issuerIconName: "accenture",
        issueDate: "2022-08-27",
        credentialID: "pc4345i",
        credentialURL: "https://www.futurelearn.com/certificates/pc4345i"
    },
    {
        title: "The Fundamentals of Digital Marketing",
        issuer: "Google Digital Garage",
        issuerIconName: "google",
        issueDate: "2022-08-22",
        credentialID: "3T8-F9N-LKQ",
        credentialURL: "https://drive.google.com/file/d/14laAMWmVKhCfgKwVEgJyWse7o0sZDD4N/view?usp=sharing"
    },
    {
        title: "Microsoft Office Specialist: Microsoft Office PowerPoint® 2013",
        issuer: "Microsoft",
        issuerIconName: "microsoft",
        issueDate: "2017-04-16",
        credentialID: "wXTm3-4SHG",
        credentialURL: "https://drive.google.com/file/d/117DE6bMkHvRqXbED2tmSMNkbx9s7OahM/view?usp=sharing"
    },
    {
        title: "Google Code-in 2016",
        issuer: "Google",
        issuerIconName: "google",
        issueDate: "2017-01-16",
        credentialID: "",
        credentialURL: "https://drive.google.com/file/d/162RXtAVIZEvfx6LvP3xeBj-cSI9ZpPUX/view?usp=sharing"
    },
    {
        title: "HSGS Olympiad 2016",
        issuer: "HUS High School for Gifted Students",
        issueDate: "2016-05-08",
        credentialID: "",
        credentialURL: "https://drive.google.com/file/d/1eKv-2ldfw8-hF27sKfKWXL8MmwcSkzPq/view?usp=sharing"
    },
    {
        title: "Microsoft Office Specialist: Microsoft Office Word 2013",
        issuer: "Microsoft",
        issuerIconName: "microsoft",
        issueDate: "2016-04-24",
        credentialID: "w9YXr-FMR8",
        credentialURL: "https://drive.google.com/file/d/1-NHhjKlQbhlcO7bpRue1XzDgDaudOf2N/view?usp=sharing"
    }
];
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CertificationItem",
    ()=>CertificationItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-rsc] (ecmascript) <export default as ArrowUpRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/icons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/separator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function CertificationItem({ className, certification }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("group/cert flex items-center pr-2", className),
        href: certification.credentialURL,
        target: "_blank",
        rel: "noopener",
        children: [
            certification.issuerLogoURL ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: certification.issuerLogoURL,
                alt: certification.issuer,
                width: 32,
                height: 32,
                quality: 100,
                className: "mx-4 flex size-6 shrink-0 select-none",
                unoptimized: true,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-4 flex size-6 shrink-0 items-center justify-center select-none [&_svg]:size-5 [&_svg]:text-muted-foreground",
                "aria-hidden": true,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIcon"])(certification.issuerIconName) ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Icons"].certificate, {}, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                    lineNumber: 42,
                    columnNumber: 53
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 space-y-1 border-l border-dashed border-edge p-4 pr-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "leading-snug font-medium text-balance underline-offset-4 group-hover/cert:underline",
                        children: certification.title
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "sr-only",
                                        children: "Issued by"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": true,
                                                children: "@"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                                lineNumber: 55,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-0.5",
                                                children: certification.issuer
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Separator"], {
                                className: "data-[orientation=vertical]:h-4",
                                orientation: "vertical"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "sr-only",
                                        children: "Issued on"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                            dateTime: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(certification.issueDate).toISOString(),
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(certification.issueDate).format("DD.MM.YYYY")
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            certification.credentialURL && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__["ArrowUpRightIcon"], {
                className: "size-4 text-muted-foreground",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/certifications/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Certifications",
    ()=>Certifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$collapsible$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$certifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/certifications.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$certifications$2f$certification$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/certifications/certification-item.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function Certifications() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        id: "certs",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelTitle"], {
                    children: [
                        "Certifications",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                            className: "ml-1 font-mono text-sm font-medium text-muted-foreground select-none",
                            children: [
                                "(",
                                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$certifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CERTIFICATIONS"].length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/index.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/index.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$collapsible$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleList"], {
                items: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$certifications$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CERTIFICATIONS"],
                max: 8,
                renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$certifications$2f$certification$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CertificationItem"], {
                        certification: item
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/index.tsx",
                        lineNumber: 22,
                        columnNumber: 31
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/index.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/certifications/index.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/data/experiences.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXPERIENCES",
    ()=>EXPERIENCES
]);
const EXPERIENCES = [
    {
        id: "radical logix",
        companyName: "Radical Logix",
        companyLogo: "/r/radical logix.png",
        positions: [
            {
                id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
                title: "Software Developer",
                employmentPeriod: {
                    start: "06.2025",
                    end: "08.2025"
                },
                employmentType: "Internship",
                icon: "code",
                description: `- Developed AI-powered content recommendation and generation features using Django and Gemini API.
- Implemented prompt-based, paraphrasing, and image-driven content workflows for dynamic post creation.
- Optimized API calls and backend logic to ensure scalable and reliable performance.
- Collaborated with the team to align AI outputs with platform-specific content styles for better engagement.
- Contributed to building a robust and maintainable backend architecture for seamless integration of advanced features.
`,
                skills: [
                    "TypeScript",
                    "Next.js",
                    "Django",
                    "Google Gemini API",
                    "Tailwind CSS",
                    "Social Media Integration",
                    "Research",
                    "Problem-solving"
                ],
                isExpanded: true
            }
        ],
        isCurrentEmployer: false
    },
    {
        id: "hypweb solutions",
        companyName: "Hypweb Solutions LLP",
        companyLogo: "/r/hypweb solutions.jpeg",
        positions: [
            {
                id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
                title: "Frontend Engineer",
                employmentPeriod: {
                    start: "02.2025",
                    end: "03.2025"
                },
                employmentType: "Internship",
                icon: "code",
                description: `- Contributed to multiple client and in-house projects, focusing on UI/UX design, performance optimization, and responsive web development.
- Strengthened expertise in modern frontend technologies including Next.js, React.js, TailwindCSS, Mantine UI, ShadCN UI, Bootstrap, GSAP, Framer Motion, and Figma.

In-house Project: [Hypweb Solutions Website](https://hypweb.in)
- Redesigned the official company website using Figma, enhancing visual appeal and brand consistency.
- Delivered a modern, responsive, and user-friendly interface aligned with the company’s vision.

Client Project: Shipping Service Platform
- Improved state management, fixed responsiveness issues, and resolved UI glitches on a live shipping service website.
- Enhanced overall user experience by debugging, refining workflows, and ensuring smooth performance across devices.

Creative Contributions
- Integrated Framer Motion and GSAP animations to add interactivity and bring websites to life with engaging user experiences.
- Contributed to UI/UX design and brand design, ensuring consistency across projects.
`,
                skills: [
                    "Next.js",
                    "ReactJs",
                    "TailwindCSS",
                    "Mantine UI",
                    "ShadCN UI",
                    "Bootstrap",
                    "GreenSock (GSAP)",
                    "Framer Motion",
                    "UI/UX Design",
                    "Brand Design",
                    "Figma"
                ],
                isExpanded: true
            }
        ],
        isCurrentEmployer: false
    },
    {
        id: "gfg",
        companyName: "Geeks For Geeks",
        companyLogo: "/r/gfg.jpeg",
        positions: [
            {
                id: "f0becfba-057d-40db-b252-739e1654faa1",
                title: "Technical Writer",
                employmentPeriod: {
                    start: "2023"
                },
                employmentType: "Freelance",
                description: `- Authored and published 7 technical articles on the official GeeksforGeeks website, reaching a wide developer audience.
- Simplified complex programming concepts into beginner-friendly tutorials with practical examples.
- Focused on Frontend Development, JavaScript, and Web Technologies, contributing to the learning resources of thousands of readers.`,
                icon: "code",
                skills: [
                    "Content Writing",
                    "Research",
                    "Proofreading",
                    "Editing",
                    "English proficiency"
                ],
                isExpanded: true
            }
        ]
    },
    {
        id: "education",
        companyName: "Education",
        positions: [
            {
                id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
                title: "Jaypee University of Engineering and Technology",
                employmentPeriod: {
                    start: "08.2022",
                    end: "06.2026"
                },
                icon: "education",
                description: `- Currently studying for a Bachelor's degree in Computer Science and Engineering.
- Winner of Smart India Hackathon (SIH) 2024 from the college
- Achieved several awards, including:
  - Silver Medal — Inter-Year Badminton Tournament 2024
  - 2nd Runner up — Chess Tournament on National Sports Day 2024`,
                skills: [
                    "C++",
                    "Java",
                    "Python",
                    "Data Structures",
                    "Algorithms",
                    "Advanced Databases",
                    "Systems Design",
                    "Artificial Intelligence",
                    "Operating System",
                    "Computer Networks",
                    "Computer Organization and Architecture",
                    "Software Engineering",
                    "Self-learning",
                    "Teamwork",
                    "Presentation"
                ]
            },
            {
                id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
                title: "Jaypee Institute of Information Technology",
                employmentPeriod: {
                    start: "01.2025",
                    end: "06.2025"
                },
                icon: "education",
                description: `- Student as an Exchange Program at Jaypee Institute of Information Technology.
- 1st Runner up - Hack-In-Winter 2025 Intra College Hackathon
- Held a lecture on "Introduction to "Frontend Development" for freshmen.
`,
                skills: [
                    "Non Linear Data Structures",
                    "Software Engineering",
                    "Computer Organization and Architecture",
                    "Graph Theory"
                ]
            }
        ]
    }
];
}),
"[project]/Developer/Portfolio 2/src/components/ui/tag.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tag",
    ()=>Tag
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Tag({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/components/ui/tag.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-icon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceIcon",
    ()=>ExperienceIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusinessIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/briefcase-business.js [app-rsc] (ecmascript) <export default as BriefcaseBusinessIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeXmlIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-rsc] (ecmascript) <export default as CodeXmlIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DraftingCompassIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/drafting-compass.js [app-rsc] (ecmascript) <export default as DraftingCompassIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCapIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-rsc] (ecmascript) <export default as GraduationCapIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LightbulbIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-rsc] (ecmascript) <export default as LightbulbIcon>");
;
;
const iconMap = {
    code: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeXmlIcon$3e$__["CodeXmlIcon"],
    design: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$drafting$2d$compass$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DraftingCompassIcon$3e$__["DraftingCompassIcon"],
    education: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCapIcon$3e$__["GraduationCapIcon"],
    business: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusinessIcon$3e$__["BriefcaseBusinessIcon"],
    idea: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LightbulbIcon$3e$__["LightbulbIcon"]
};
function ExperienceIcon({ icon, ...props }) {
    const IconComponent = icon ? iconMap[icon] : __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusinessIcon$3e$__["BriefcaseBusinessIcon"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
        ...props
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-icon.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperiencePositionItem",
    ()=>ExperiencePositionItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDownUpIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevrons-down-up.js [app-rsc] (ecmascript) <export default as ChevronsDownUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDownIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-rsc] (ecmascript) <export default as ChevronsUpDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__InfinityIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/infinity.js [app-rsc] (ecmascript) <export default as InfinityIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$markdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/markdown.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/separator.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/tag.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$experiences$2f$experience$2d$position$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-icon.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function ExperiencePositionItem({ position }) {
    const { start, end } = position.employmentPeriod;
    const isOngoing = !end;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Collapsible"], {
        defaultOpen: position.isExpanded,
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("group/experience block w-full text-left select-none", "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent/50"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-1 mb-1 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15",
                                    "aria-hidden": true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$experiences$2f$experience$2d$position$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExperienceIcon"], {
                                        className: "size-4",
                                        icon: position.icon
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "flex-1 font-medium text-balance",
                                    children: position.title
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 text-muted-foreground [&_svg]:size-4",
                                    "aria-hidden": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDownUpIcon$3e$__["ChevronsDownUpIcon"], {
                                            className: "hidden group-data-[state=open]/experience:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDownIcon$3e$__["ChevronsUpDownIcon"], {
                                            className: "hidden group-data-[state=closed]/experience:block"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 pl-9 text-sm text-muted-foreground",
                            children: [
                                position.employmentType && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                    className: "sr-only",
                                                    children: "Employment Type"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                    children: position.employmentType
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Separator"], {
                                            className: "data-[orientation=vertical]:h-4",
                                            orientation: "vertical"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                            className: "sr-only",
                                            children: "Employment Period"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                            className: "flex items-center gap-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: start
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: "—"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 17
                                                }, this),
                                                isOngoing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__InfinityIcon$3e$__["InfinityIcon"], {
                                                            className: "size-4.5 translate-y-[0.5px]",
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sr-only",
                                                            children: "Present"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: end
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                    className: "overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
                    children: [
                        position.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Prose"], {
                            className: "pt-2 pl-9",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$markdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Markdown"], {
                                children: position.description
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this),
                        Array.isArray(position.skills) && position.skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "flex flex-wrap gap-1.5 pt-2 pl-9",
                            children: position.skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "flex",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"], {
                                        children: skill
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                        lineNumber: 107,
                                        columnNumber: 19
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceItem",
    ()=>ExperienceItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$experiences$2f$experience$2d$position$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-position-item.tsx [app-rsc] (ecmascript)");
;
;
;
function ExperienceItem({ experience }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "screen-line-after space-y-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex size-6 shrink-0 items-center justify-center select-none",
                        children: experience.companyLogo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: experience.companyLogo,
                            alt: experience.companyName,
                            width: 24,
                            height: 24,
                            quality: 100,
                            className: "rounded-full",
                            unoptimized: true,
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600"
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg leading-snug font-medium",
                        children: experience.companyName
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    experience.isCurrentEmployer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex size-2 rounded-full bg-info"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Current Employer"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border",
                children: experience.positions.map((position)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$experiences$2f$experience$2d$position$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExperiencePositionItem"], {
                        position: position
                    }, position.id, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/experiences/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experiences",
    ()=>Experiences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$experiences$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/experiences.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$experiences$2f$experience$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/experiences/experience-item.tsx [app-rsc] (ecmascript)");
;
;
;
;
function Experiences() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        id: "experience",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelTitle"], {
                    children: "Experience"
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/index.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pr-2 pl-4",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$experiences$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EXPERIENCES"].map((experience)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$experiences$2f$experience$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ExperienceItem"], {
                        experience: experience
                    }, experience.id, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/index.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/experiences/index.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/email-item.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "EmailItem",
    ()=>EmailItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const EmailItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EmailItem() from the server but EmailItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/features/profile/components/overview/email-item.tsx <module evaluation>", "EmailItem");
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/email-item.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "EmailItem",
    ()=>EmailItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const EmailItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call EmailItem() from the server but EmailItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/features/profile/components/overview/email-item.tsx", "EmailItem");
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/email-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$email$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/email-item.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$email$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/email-item.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$email$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/intro-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntroItem",
    ()=>IntroItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function IntroItem({ icon: Icon, content, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 font-mono text-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex size-6 shrink-0 items-center justify-center rounded-lg bg-muted dark:inset-shadow-[1px_1px_1px,0px_0px_2px] dark:inset-shadow-white/15",
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "pointer-events-none size-4 text-muted-foreground"
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/intro-item.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/intro-item.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-balance",
                children: href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "underline-offset-4 hover:underline",
                    href: href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: content
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/intro-item.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this) : content
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/intro-item.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/intro-item.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/job-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobItem",
    ()=>JobItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusinessIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/briefcase-business.js [app-rsc] (ecmascript) <export default as BriefcaseBusinessIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeXmlIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-rsc] (ecmascript) <export default as CodeXmlIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LightbulbIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-rsc] (ecmascript) <export default as LightbulbIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/config/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$utils$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/utils/url.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$intro$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/intro-item.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function getJobIcon(title) {
    if (/(developer|engineer)/i.test(title)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeXmlIcon$3e$__["CodeXmlIcon"];
    }
    if (/(founder|co-founder)/i.test(title)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LightbulbIcon$3e$__["LightbulbIcon"];
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusinessIcon$3e$__["BriefcaseBusinessIcon"];
}
function JobItem({ title, company, website }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$intro$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntroItem"], {
        icon: getJobIcon(title),
        content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                title,
                " @",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "ml-0.5 font-medium underline-offset-4 hover:underline",
                    href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$utils$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQueryParams"])(website, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UTM_PARAMS"]),
                    target: "_blank",
                    rel: "noopener",
                    children: company
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/job-item.tsx",
                    lineNumber: 39,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/job-item.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/phone-item.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PhoneItem",
    ()=>PhoneItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PhoneItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PhoneItem() from the server but PhoneItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/features/profile/components/overview/phone-item.tsx <module evaluation>", "PhoneItem");
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/phone-item.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PhoneItem",
    ()=>PhoneItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PhoneItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PhoneItem() from the server but PhoneItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/features/profile/components/overview/phone-item.tsx", "PhoneItem");
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/phone-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$phone$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/phone-item.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$phone$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/phone-item.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$phone$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Overview",
    ()=>Overview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/globe.js [app-rsc] (ecmascript) <export default as GlobeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mars$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MarsIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/mars.js [app-rsc] (ecmascript) <export default as MarsIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$venus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__VenusIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/venus.js [app-rsc] (ecmascript) <export default as VenusIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$utils$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/utils/url.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$email$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/email-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$intro$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/intro-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$job$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/job-item.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$phone$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/phone-item.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function Overview() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "sr-only",
                children: "Overview"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelContent"], {
                className: "space-y-2",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].jobs.map((job, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$job$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JobItem"], {
                            title: job.title,
                            company: job.company,
                            website: job.website
                        }, index, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$intro$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntroItem"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"],
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].address
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$phone$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PhoneItem"], {
                        phoneNumber: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].phoneNumber
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$email$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EmailItem"], {
                        email: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].email
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$intro$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntroItem"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeIcon$3e$__["GlobeIcon"],
                        content: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$utils$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["urlToName"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].website),
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].website
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$intro$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IntroItem"], {
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].gender === "male" ? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mars$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MarsIcon$3e$__["MarsIcon"] : __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$venus$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__VenusIcon$3e$__["VenusIcon"],
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].pronouns
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BrandContextMenu",
    ()=>BrandContextMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BrandContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BrandContextMenu() from the server but BrandContextMenu is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx <module evaluation>", "BrandContextMenu");
}),
"[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "BrandContextMenu",
    ()=>BrandContextMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BrandContextMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BrandContextMenu() from the server but BrandContextMenu is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx", "BrandContextMenu");
}),
"[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$brand$2d$context$2d$menu$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$brand$2d$context$2d$menu$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$brand$2d$context$2d$menu$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChanhDaiMark",
    ()=>ChanhDaiMark,
    "getMarkSVG",
    ()=>getMarkSVG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ChanhDaiMark(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 1820 669",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M575 184L683 413.547V626H575V184Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 9,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M976.099 80.5858L976.099 246.596L837.682 392.317L787.511 292.844L976.099 80.5858Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 10,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "108.663",
                height: "428.437",
                rx: "50",
                transform: "matrix(0.889247 -0.457427 0.453286 0.891365 552 103.729)",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 11,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M891.79 178.373L1000.32 53.2965V576.372C1000.32 603.987 977.937 626.372 950.323 626.372H941.79C914.175 626.372 891.79 603.987 891.79 576.372V178.373Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 12,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1175.69 53.2965H1419.89L1501.29 171.55H1252.57L1175.69 53.2965Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 13,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1067.15 508.119H1318.14L1392.75 626.372H1148.55L1067.15 508.119Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 14,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "111.024",
                height: "664.2",
                rx: "50",
                transform: "matrix(0.800771 -0.59897 0.548204 0.836345 1058.11 97.0555)",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 15,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M459.434 24.1416L556 24.1416L396.5 642.902L293.637 642.902L459.434 24.1416Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 16,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1533.3 531.555L1526.37 429.151L1750.71 252.48L1817.18 304.825L1533.3 531.555Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 17,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M1817.2 304.288L1748.61 358.303L1533.09 190.956L1533.09 80.5555L1817.2 304.288Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 18,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M285.892 80.5554L292.824 182.96L68.4839 359.631L2.01585 307.286L285.892 80.5554Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 19,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.00024 307.823L70.5896 253.808L286.1 421.154L286.1 531.555L2.00024 307.823Z",
                fill: "currentColor"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
                lineNumber: 20,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
function getMarkSVG(color) {
    const c = color;
    return `<svg width="1820" height="669" viewBox="0 0 1820 669" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M575 184L683 413.547V626H575V184Z" fill="${c}"/>
<path d="M976.099 80.5858L976.099 246.596L837.682 392.317L787.511 292.844L976.099 80.5858Z" fill="${c}"/>
<rect width="108.663" height="428.437" rx="50" transform="matrix(0.889247 -0.457427 0.453286 0.891365 552 103.729)" fill="${c}"/>
<path d="M891.79 178.373L1000.32 53.2965V576.372C1000.32 603.987 977.937 626.372 950.323 626.372H941.79C914.175 626.372 891.79 603.987 891.79 576.372V178.373Z" fill="${c}"/>
<path d="M1175.69 53.2965H1419.89L1501.29 171.55H1252.57L1175.69 53.2965Z" fill="${c}"/>
<path d="M1067.15 508.119H1318.14L1392.75 626.372H1148.55L1067.15 508.119Z" fill="${c}"/>
<rect width="111.024" height="664.2" rx="50" transform="matrix(0.800771 -0.59897 0.548204 0.836345 1058.11 97.0555)" fill="${c}"/>
<path d="M459.434 24.1416L556 24.1416L396.5 642.902L293.637 642.902L459.434 24.1416Z" fill="${c}"/>
<path d="M1533.3 531.555L1526.37 429.151L1750.71 252.48L1817.18 304.825L1533.3 531.555Z" fill="${c}"/>
<path d="M1817.2 304.288L1748.61 358.303L1533.09 190.956L1533.09 80.5555L1817.2 304.288Z" fill="${c}"/>
<path d="M285.892 80.5554L292.824 182.96L68.4839 359.631L2.01585 307.286L285.892 80.5554Z" fill="${c}"/>
<path d="M2.00024 307.823L70.5896 253.808L286.1 421.154L286.1 531.555L2.00024 307.823Z" fill="${c}"/>
</svg>
`;
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/profile-cover.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileCover",
    ()=>ProfileCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$brand$2d$context$2d$menu$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/brand-context-menu.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$chanhdai$2d$mark$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/chanhdai-mark.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
function ProfileCover() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$brand$2d$context$2d$menu$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BrandContextMenu"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("aspect-2/1 border-x border-edge select-none sm:aspect-3/1", "flex items-center justify-center text-black dark:text-white", "screen-line-before screen-line-after before:-top-px after:-bottom-px", "bg-black/0.75 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5"),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$chanhdai$2d$mark$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChanhDaiMark"], {
                id: "js-cover-mark",
                className: "h-1/4 w-auto"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-cover.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-cover.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-cover.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FlipSentences",
    ()=>FlipSentences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FlipSentences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FlipSentences() from the server but FlipSentences is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx <module evaluation>", "FlipSentences");
}),
"[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "FlipSentences",
    ()=>FlipSentences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FlipSentences = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FlipSentences() from the server but FlipSentences is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx", "FlipSentences");
}),
"[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$flip$2d$sentences$2f$flip$2d$sentences$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$flip$2d$sentences$2f$flip$2d$sentences$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$flip$2d$sentences$2f$flip$2d$sentences$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Developer/Portfolio 2/src/registry/flip-sentences/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$flip$2d$sentences$2f$flip$2d$sentences$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/pronounce-my-name.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PronounceMyName",
    ()=>PronounceMyName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PronounceMyName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PronounceMyName() from the server but PronounceMyName is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/features/profile/components/pronounce-my-name.tsx <module evaluation>", "PronounceMyName");
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/pronounce-my-name.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "PronounceMyName",
    ()=>PronounceMyName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const PronounceMyName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call PronounceMyName() from the server but PronounceMyName is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Developer/Portfolio 2/src/features/profile/components/pronounce-my-name.tsx", "PronounceMyName");
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/pronounce-my-name.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$pronounce$2d$my$2d$name$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/pronounce-my-name.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$pronounce$2d$my$2d$name$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/pronounce-my-name.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$pronounce$2d$my$2d$name$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/verified-icon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VerifiedIcon",
    ()=>VerifiedIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function VerifiedIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fill: "currentColor",
            d: "M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 4.437 0 0 0-.948-4.578 4.436 4.436 0 0 0-4.577-.948A4.44 4.44 0 0 0 12 0a4.423 4.423 0 0 0-3.9 2.564 4.434 4.434 0 0 0-2.43-.178 4.425 4.425 0 0 0-2.158 1.126 4.42 4.42 0 0 0-1.12 2.156 4.42 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 4.433 0 0 0 .936 4.577 4.459 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
        }, void 0, false, {
            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/verified-icon.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/verified-icon.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProfileHeader",
    ()=>ProfileHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$flip$2d$sentences$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/registry/flip-sentences/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$flip$2d$sentences$2f$flip$2d$sentences$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/registry/flip-sentences/flip-sentences.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$pronounce$2d$my$2d$name$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/pronounce-my-name.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$verified$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/verified-icon.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function ProfileHeader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "screen-line-after flex border-x border-edge",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0 border-r border-edge",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-[2px] my-[3px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "size-32 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-40",
                            alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].displayName}'s avatar`,
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].avatar,
                            fetchPriority: "high"
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "absolute top-0 -left-px h-8 sm:h-9",
                        viewBox: "0 0 30 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                width: "30",
                                height: "6.67",
                                fill: "#FF9933"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                y: "6.67",
                                width: "30",
                                height: "6.67",
                                fill: "#FFFFFF"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                y: "13.33",
                                width: "30",
                                height: "6.67",
                                fill: "#138808"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "15",
                                cy: "10",
                                r: "2.5",
                                fill: "none",
                                stroke: "#000080",
                                strokeWidth: "0.3"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                stroke: "#000080",
                                strokeWidth: "0.15",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "15",
                                        y1: "7.5",
                                        x2: "15",
                                        y2: "12.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12.5",
                                        y1: "10",
                                        x2: "17.5",
                                        y2: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "13.23",
                                        y1: "8.23",
                                        x2: "16.77",
                                        y2: "11.77"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "16.77",
                                        y1: "8.23",
                                        x2: "13.23",
                                        y2: "11.77"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "13.75",
                                        y1: "7.5",
                                        x2: "16.25",
                                        y2: "12.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "16.25",
                                        y1: "7.5",
                                        x2: "13.75",
                                        y2: "12.5"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "12.5",
                                        y1: "8.75",
                                        x2: "17.5",
                                        y2: "11.25"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "17.5",
                                        y1: "8.75",
                                        x2: "12.5",
                                        y2: "11.25"
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex grow items-end pb-1 pl-4", "bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800",
                            children: [
                                "text-3xl ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline dark:hidden",
                                    children: "text-zinc-950"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden dark:inline",
                                    children: "text-zinc-50"
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                " font-medium"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-edge",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "flex items-center pl-4 text-3xl font-semibold",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].displayName,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTooltip"], {
                                        content: "Verified",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$verified$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VerifiedIcon"], {
                                            className: "size-[0.6em] translate-y-px text-info select-none"
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].namePronunciationUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$pronounce$2d$my$2d$name$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PronounceMyName"], {
                                                className: "translate-y-px",
                                                namePronunciationUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].namePronunciationUrl
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-12 border-t border-edge py-1 pl-4 sm:h-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$flip$2d$sentences$2f$flip$2d$sentences$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FlipSentences"], {
                                    sentences: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].flipSentences
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/data/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PROJECTS",
    ()=>PROJECTS
]);
const PROJECTS = [
    {
        id: "react-wheel-picker",
        title: "React Wheel Picker",
        period: {
            start: "05.2025"
        },
        link: "https://react-wheel-picker.chanhdai.com",
        skills: [
            "Open Source",
            "React",
            "TypeScript",
            "Monorepo",
            "Turborepo",
            "pnpm-workspace",
            "Package Publishing",
            "NPM Registry",
            "GitHub Actions"
        ],
        description: `iOS-like wheel picker for React with smooth inertia scrolling and infinite loop support.
- 📱 Natural touch scrolling with smooth inertia effect
- 🖱️ Mouse drag and scroll support for desktop
- 🔄 Infinite loop scrolling
- 🎨 Unstyled components for complete style customization
- ⚡️ Easy installation via shadcn CLI

This project is proudly supported by:

[![Vercel OSS Program](https://vercel.com/oss/program-badge.svg)](https://vercel.com/oss)
`,
        logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
        isExpanded: true
    },
    {
        id: "chanhdaidotcom",
        title: "chanhdai.com",
        period: {
            start: "01.2025"
        },
        link: "https://github.com/ncdai/chanhdai.com",
        skills: [
            "Open Source",
            "Next.js 15",
            "Tailwind CSS v4",
            "Radix UI",
            "Motion",
            "shadcn/ui",
            "Component Registry",
            "Vercel"
        ],
        description: `A minimal portfolio, component registry, and blog.
- Clean & modern design
- Light & Dark theme support
- vCard integration
- SEO optimization: [JSON-LD schema](https://json-ld.org), sitemap, robots
- AI-friendly [/llms.txt](https://llmstxt.org)
- Spam-protected email
- Installable PWA

Blog Features:
- MDX & Markdown support
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews`,
        logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg"
    },
    {
        id: "quaricdotcom",
        title: "quaric.com",
        period: {
            start: "03.2024"
        },
        link: "https://quaric.com",
        skills: [
            "Company Project",
            "Next.js 15",
            "Tailwind CSS v3",
            "shadcn/ui",
            "Strapi 5",
            "VNPAY-QR",
            "Docker",
            "Docker Compose",
            "NGINX"
        ],
        logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg"
    },
    {
        id: "zadark",
        title: "ZaDark",
        period: {
            start: "01.2022"
        },
        link: "https://zadark.com",
        skills: [
            "Pet Project",
            "Open Source",
            "Browser Extension",
            "CLI",
            "Docusaurus 3"
        ],
        description: `ZaDark adds Dark Mode, anti-peeking, customizable fonts, backgrounds, and more to Zalo Web and PC.
- Earned 10M+ VND in net sales from a paid Safari Extension.
- 80,000+ downloads on SourceForge (awarded Community Leader badge by SourceForge)
- 15,000+ active users via Chrome Web Store
- Bronze Medal — 10th Design, Manufacturing, and Application Award 2022`,
        logo: "https://assets.chanhdai.com/images/project-logos/zadark.svg"
    },
    {
        id: "qabox",
        title: "QABox",
        period: {
            start: "07.2023",
            end: "07.2023"
        },
        link: "https://github.com/ncdai/qabox",
        skills: [
            "University Project",
            "PHP",
            "MySQL",
            "MVC",
            "Docker",
            "Docker Compose"
        ],
        description: "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/qabox"
    },
    {
        id: "taskbox",
        title: "TaskBox",
        period: {
            start: "07.2023",
            end: "07.2023"
        },
        link: "https://github.com/ncdai/taskbox",
        skills: [
            "University Project",
            "PHP",
            "MySQL",
            "MVC",
            "Docker",
            "Docker Compose"
        ],
        description: "- Course: Distributed Applications — FIT@HCMUS\n- Project Score: 10/10\n- Source Code: https://github.com/ncdai/taskbox"
    },
    {
        id: "daichat-app",
        title: "DaiChat App",
        period: {
            start: "07.2020",
            end: "07.2020"
        },
        link: "https://www.youtube.com/watch?v=H5U3J_W1low",
        skills: [
            "University Project",
            "Java",
            "Java Swing",
            "Java Networking"
        ],
        description: `- Course: Java Application Programming — FIT@HCMUS
- Requirement: Developed a real-time chat application using Java technologies
- Project Score: 10/10
- Source Code:
  - Server: https://github.com/ncdai/ltudjava-summer2020-chatapp_server
  - Client: https://github.com/ncdai/ltudjava-summer2020-chatapp_client`
    },
    {
        id: "qlsv-app",
        title: "QLSV App",
        period: {
            start: "06.2020",
            end: "06.2020"
        },
        link: "https://www.youtube.com/watch?v=tG9SZEBrwog",
        skills: [
            "University Project",
            "Java",
            "Java Swing",
            "Hibernate",
            "MySQL"
        ],
        description: `- Course: Java Application Programming — FIT@HCMUS
- Requirement: Built a student management system with role-based functionalities using Java technologies
- Project Score: 10/10
- Source Code: https://github.com/ncdai/ltudjava-summer2020-hibernate`
    },
    {
        id: "penphy",
        title: "Penphy",
        period: {
            start: "01.2019",
            end: "08.2019"
        },
        link: "https://www.youtube.com/watch?v=EdU7rUO-UA4",
        skills: [
            "Startup Project",
            "JavaScript",
            "React Native"
        ],
        description: "2nd Prize — Business Startup Competition 2019"
    },
    {
        id: "unlimitedstudy",
        title: "UnlimitedStudy",
        period: {
            start: "01.2017",
            end: "08.2018"
        },
        link: "https://muctim.tuoitre.vn/cong-cu-ho-tro-viec-day-va-hoc-55107.htm",
        skills: [
            "National Competition",
            "Creative Software",
            "PHP",
            "Laravel 4",
            "MySQL",
            "jQuery",
            "Bootstrap 3"
        ],
        description: `UnlimitedStudy is a website that provides teaching and learning support tools for teachers and students.
- 3rd Prize — National Science and Engineering Fair 2018 (ViSEF)
- 1st Prize — Can Tho City Science and Engineering Fair 2018
- 3rd Prize — National Young Informatics Contest 2018
- 2nd Prize — Can Tho City Youth and Children's Creativity Contest 2018
- 3rd Prize — Can Tho City Young Informatics Contest 2018
- Reached 7,000+ users, mainly high school students in Can Tho City.
- Pilot implemented in high schools across Can Tho City with English quizzes, supervised by English subject specialists from the Can Tho City Department of Education and Training.`,
        logo: "https://assets.chanhdai.com/images/project-logos/unlimitedstudy.webp"
    },
    {
        id: "dmessage",
        title: "DMessage",
        period: {
            start: "05.2017",
            end: "05.2017"
        },
        link: "https://github.com/ncdai/DMessage",
        skills: [
            "Self-learning Project",
            "Pet Project",
            "Express.js",
            "Socket.io",
            "MongoDB",
            "Mongoose ODM"
        ],
        description: "A Messenger clone built to practice real-time communication using Socket.IO. This project showcases my self-learning journey in implementing WebSockets for instant messaging."
    },
    {
        id: "study-english",
        title: "Study English",
        period: {
            start: "11.2016",
            end: "12.2017"
        },
        link: "https://www.youtube.com/watch?v=OYgugvjqU4A",
        skills: [
            "National Competition",
            "Creative Software",
            "PHP",
            "Laravel 4",
            "MySQL"
        ],
        description: `Study English is a free, mobile-friendly website for high school English learning, offering vocabulary, quizzes, listening practice, and more.
- Consolation Prize — National Youth and Children's Creativity Contest 2016
- 1st Prize — Can Tho City Youth and Children's Creativity Contest 2016
- Consolation Prize — Can Tho City Young Informatics Contest 2016`
    }
];
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectItem",
    ()=>ProjectItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDownUpIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevrons-down-up.js [app-rsc] (ecmascript) <export default as ChevronsDownUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDownIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-rsc] (ecmascript) <export default as ChevronsUpDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__InfinityIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/infinity.js [app-rsc] (ecmascript) <export default as InfinityIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/link.js [app-rsc] (ecmascript) <export default as LinkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/icons.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$markdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/markdown.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/collapsible.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/tag.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/typography.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/config/site.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$utils$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/utils/url.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
function ProjectItem({ className, project }) {
    const { start, end } = project.period;
    const isOngoing = !end;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Collapsible"], {
        defaultOpen: project.isExpanded,
        asChild: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        project.logo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: project.logo,
                            alt: project.title,
                            width: 32,
                            height: 32,
                            quality: 100,
                            className: "mx-4 flex size-6 shrink-0 select-none",
                            unoptimized: true,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-4 flex size-6 shrink-0 items-center justify-center text-muted-foreground select-none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Icons"].project, {
                                className: "size-5"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 border-l border-dashed border-edge",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleTrigger"], {
                                className: "group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mb-1 leading-snug font-medium text-balance",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                lineNumber: 62,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                                className: "text-sm text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                        className: "sr-only",
                                                        children: "Period"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                        className: "flex items-center gap-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: start
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                                lineNumber: 69,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono",
                                                                children: "—"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                                lineNumber: 70,
                                                                columnNumber: 21
                                                            }, this),
                                                            isOngoing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$infinity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__InfinityIcon$3e$__["InfinityIcon"], {
                                                                        className: "size-4.5 translate-y-[0.5px]",
                                                                        "aria-hidden": true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                                        lineNumber: 73,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "sr-only",
                                                                        children: "Present"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                                        lineNumber: 77,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: end
                                                            }, void 0, false, {
                                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                                lineNumber: 80,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTooltip"], {
                                        content: "Open Project Link",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground",
                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$utils$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addQueryParams"])(project.link, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$config$2f$site$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["UTM_PARAMS"]),
                                            target: "_blank",
                                            rel: "noopener",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__["LinkIcon"], {
                                                    className: "pointer-events-none size-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "sr-only",
                                                    children: "Open Project Link"
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0 text-muted-foreground [&_svg]:size-4",
                                        "aria-hidden": true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$down$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsDownUpIcon$3e$__["ChevronsDownUpIcon"], {
                                                className: "hidden group-data-[state=open]/project:block"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDownIcon$3e$__["ChevronsUpDownIcon"], {
                                                className: "hidden group-data-[state=closed]/project:block"
                                            }, void 0, false, {
                                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$collapsible$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleContent"], {
                    className: "overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 border-t border-dashed border-edge p-4",
                        children: [
                            project.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$typography$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Prose"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$markdown$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Markdown"], {
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this),
                            project.skills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-wrap gap-1.5",
                                children: project.skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tag$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Tag"], {
                                            children: skill
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                            lineNumber: 121,
                                            columnNumber: 21
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                        lineNumber: 120,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                                lineNumber: 118,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/projects/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Projects",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$collapsible$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/collapsible-list.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$projects$2f$project$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/projects/project-item.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function Projects() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        id: "projects",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelTitle"], {
                    children: [
                        "Projects",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                            className: "ml-1 font-mono text-sm text-muted-foreground select-none",
                            children: [
                                "(",
                                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECTS"].length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/index.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/index.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$collapsible$2d$list$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CollapsibleList"], {
                items: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PROJECTS"],
                max: 4,
                renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$projects$2f$project$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProjectItem"], {
                        project: item
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/index.tsx",
                        lineNumber: 22,
                        columnNumber: 31
                    }, void 0)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/index.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/projects/index.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/data/social-links.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS
]);
const SOCIAL_LINKS = [
    {
        icon: "https://assets.chanhdai.com/images/link-icons/liquid-glass/linkedin.webp",
        title: "LinkedIn",
        description: "Manas",
        href: "https://linkedin.com/in/manas-singh-877645252"
    },
    {
        icon: "https://assets.chanhdai.com/images/link-icons/liquid-glass/github.webp",
        title: "GitHub",
        description: "00Manas-Singh00",
        href: "https://github.com/00Manas-Singh00"
    },
    {
        icon: "https://assets.chanhdai.com/images/link-icons/liquid-glass/x.webp",
        title: "X",
        description: "@singhmanas2705",
        href: "https://x.com/singhmanas2705"
    },
    {
        icon: "https://cdn.simpleicons.org/instagram/E4405F",
        title: "Instagram",
        description: "@00manas.singh00",
        href: "https://instagram.com/00manas.singh00"
    },
    {
        icon: "https://devfolio.co/favicon-32x32.png",
        title: "Devfolio",
        description: "@Manas2705",
        href: "https://devfolio.co/@Manas2705"
    },
    {
        icon: "https://cdn.simpleicons.org/leetcode/FFA116",
        title: "LeetCode",
        description: "@manassingh2705",
        href: "https://leetcode.com/u/manassingh2705/"
    }
];
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/social-links/social-link-item.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLinkItem",
    ()=>SocialLinkItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/lucide-react@0.516.0_react@19.1.1/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-rsc] (ecmascript) <export default as ArrowUpRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
function SocialLinkItem({ icon, title, description, href }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("group/link flex cursor-pointer items-center gap-4 rounded-2xl p-4 pr-2 transition-colors select-none", "max-sm:screen-line-before max-sm:screen-line-after", "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"),
        href: href,
        target: "_blank",
        rel: "noopener",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: "shrink-0",
                src: icon,
                alt: title,
                width: 48,
                height: 48,
                quality: 100,
                unoptimized: true
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/social-link-item.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "flex items-center font-medium underline-offset-4 group-hover/link:underline",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/social-link-item.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/social-link-item.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/social-link-item.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$516$2e$0_react$40$19$2e$1$2e$1$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRightIcon$3e$__["ArrowUpRightIcon"], {
                className: "size-4 text-muted-foreground"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/social-link-item.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/social-link-item.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SocialLinks",
    ()=>SocialLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$social$2d$links$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/social-links.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$social$2d$links$2f$social$2d$link$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/social-links/social-link-item.tsx [app-rsc] (ecmascript)");
;
;
;
;
function SocialLinks() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "sr-only",
                children: "Social Links"
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-r border-edge"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-l border-edge"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$social$2d$links$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SOCIAL_LINKS"].map((link, index)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$social$2d$links$2f$social$2d$link$2d$item$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SocialLinkItem"], {
                                ...link
                            }, index, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx",
                                lineNumber: 20,
                                columnNumber: 20
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/features/profile/data/tech-stack.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TECH_STACK",
    ()=>TECH_STACK
]);
const TECH_STACK = [
    {
        key: "typescript",
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
        categories: [
            "Language"
        ]
    },
    {
        key: "js",
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        categories: [
            "Language"
        ]
    },
    {
        key: "java",
        title: "Java",
        href: "https://www.java.com/",
        categories: [
            "Language"
        ]
    },
    {
        key: "nodejs",
        title: "Node.js",
        href: "https://nodejs.org/",
        categories: [
            "Runtime Environment"
        ]
    },
    {
        key: "react",
        title: "React",
        href: "https://react.dev/",
        categories: [
            "Library",
            "UI Library"
        ]
    },
    {
        key: "nextjs2",
        title: "Next.js",
        href: "https://nextjs.org/",
        categories: [
            "Framework"
        ],
        theme: true
    },
    {
        key: "tailwindcss",
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        categories: [
            "Framework"
        ]
    },
    {
        key: "shadcn-ui",
        title: "shadcn/ui",
        href: "https://ui.shadcn.com/",
        categories: [
            "Library",
            "Component Library"
        ],
        theme: true
    },
    {
        key: "redux",
        title: "Redux",
        href: "https://redux.js.org/",
        categories: [
            "State Management"
        ]
    },
    {
        key: "antd",
        title: "Ant Design",
        href: "https://ant.design/",
        categories: [
            "Library",
            "UI Library"
        ]
    },
    {
        key: "react-router",
        title: "React Router",
        href: "https://reactrouter.com/",
        categories: [
            "Library",
            "Navigation"
        ],
        theme: true
    },
    {
        key: "react-navigation",
        title: "React Navigation",
        href: "https://reactnavigation.org/",
        categories: [
            "Library",
            "Navigation"
        ]
    },
    {
        key: "git",
        title: "Git",
        href: "https://git-scm.com/",
        categories: [
            "Version Control"
        ]
    },
    {
        key: "docker",
        title: "Docker",
        href: "https://www.docker.com/",
        categories: [
            "Containerization"
        ]
    },
    {
        key: "mysql",
        title: "MySQL",
        href: "https://www.mysql.com/",
        categories: [
            "Database"
        ]
    },
    {
        key: "mongodb",
        title: "MongoDB",
        href: "https://www.mongodb.com/",
        categories: [
            "Database"
        ]
    },
    {
        key: "figma",
        title: "Figma",
        href: "https://www.figma.com/",
        categories: [
            "Tools",
            "Design"
        ]
    },
    {
        key: "chatgpt",
        title: "ChatGPT",
        href: "https://chatgpt.com/",
        categories: [
            "Tools",
            "AI"
        ],
        theme: true
    }
];
}),
"[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TeckStack",
    ()=>TeckStack
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/components/ui/tooltip.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$tech$2d$stack$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/tech-stack.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/panel.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function TeckStack() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Panel"], {
        id: "stack",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelTitle"], {
                    children: "Stack"
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$panel$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PanelContent"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("[--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5", "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center", "bg-zinc-950/0.75 dark:bg-white/0.75"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-wrap gap-4 select-none",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$tech$2d$stack$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TECH_STACK"].map((tech)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SimpleTooltip"], {
                                content: tech.title,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: tech.href,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": tech.title,
                                    children: [
                                        tech.theme ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: `https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`,
                                                    alt: `${tech.title} light icon`,
                                                    width: 32,
                                                    height: 32,
                                                    className: "hidden [html.light_&]:block",
                                                    unoptimized: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    src: `https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-dark.svg`,
                                                    alt: `${tech.title} dark icon`,
                                                    width: 32,
                                                    height: 32,
                                                    className: "hidden [html.dark_&]:block",
                                                    unoptimized: true
                                                }, void 0, false, {
                                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: `https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}.svg`,
                                            alt: `${tech.title} icon`,
                                            width: 32,
                                            height: 32,
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                                            lineNumber: 55,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: tech.title
                                        }, void 0, false, {
                                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                                            lineNumber: 63,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                                    lineNumber: 29,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                                lineNumber: 28,
                                columnNumber: 17
                            }, this)
                        }, tech.key, false, {
                            fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$about$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/about.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$awards$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/awards/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$brand$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/brand.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$certifications$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/certifications/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$experiences$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/experiences/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/overview/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$profile$2d$cover$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/profile-cover.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$profile$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/profile-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$projects$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/projects/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$social$2d$links$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/social-links/index.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$teck$2d$stack$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/components/teck-stack.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/features/profile/data/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c")
                }
            }, void 0, false, {
                fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto md:max-w-3xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$profile$2d$cover$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProfileCover"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$profile$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProfileHeader"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$overview$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Overview"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$social$2d$links$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SocialLinks"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$about$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["About"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$teck$2d$stack$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TeckStack"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$experiences$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Experiences"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$projects$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Projects"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$awards$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Awards"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$certifications$2f$index$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Certifications"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$components$2f$brand$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Brand"], {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Separator, {}, void 0, false, {
                        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
function getPageJsonLd() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        dateCreated: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].dateCreated).toISOString(),
        dateModified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$dayjs$40$1$2e$11$2e$13$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])().toISOString(),
        mainEntity: {
            "@type": "Person",
            name: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].displayName,
            identifier: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].username,
            image: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$features$2f$profile$2f$data$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["USER"].avatar
        }
    };
}
function Separator({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("relative flex h-8 w-full border-x border-edge", "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]", "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56", className)
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Portfolio 2/src/app/(app)/(root)/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__96e07405._.js.map