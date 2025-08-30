module.exports = [
"[project]/Developer/Portfolio 2/src/registry/examples/wheel-picker-demo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WheelPickerDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$wheel$2d$picker$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/registry/wheel-picker/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$wheel$2d$picker$2f$wheel$2d$picker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/src/registry/wheel-picker/wheel-picker.tsx [app-ssr] (ecmascript)");
;
;
const createArray = (length, add = 0)=>Array.from({
        length
    }, (_, i)=>{
        const value = i + add;
        return {
            label: value.toString().padStart(2, "0"),
            value: value.toString()
        };
    });
const hourOptions = createArray(12, 1);
const minuteOptions = createArray(60);
const meridiemOptions = [
    {
        label: "AM",
        value: "AM"
    },
    {
        label: "PM",
        value: "PM"
    }
];
function WheelPickerDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-56",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$wheel$2d$picker$2f$wheel$2d$picker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WheelPickerWrapper"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$wheel$2d$picker$2f$wheel$2d$picker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WheelPicker"], {
                    options: hourOptions,
                    infinite: true
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/registry/examples/wheel-picker-demo.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$wheel$2d$picker$2f$wheel$2d$picker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WheelPicker"], {
                    options: minuteOptions,
                    infinite: true
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/registry/examples/wheel-picker-demo.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$src$2f$registry$2f$wheel$2d$picker$2f$wheel$2d$picker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WheelPicker"], {
                    options: meridiemOptions
                }, void 0, false, {
                    fileName: "[project]/Developer/Portfolio 2/src/registry/examples/wheel-picker-demo.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Portfolio 2/src/registry/examples/wheel-picker-demo.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Developer/Portfolio 2/src/registry/examples/wheel-picker-demo.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Developer_Portfolio%202_src_registry_examples_wheel-picker-demo_tsx_c9c5be4a._.js.map