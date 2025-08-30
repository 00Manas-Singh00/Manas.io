module.exports = [
"[project]/Developer/Portfolio 2/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/@bprogress+core@1.3.4/node_modules/@bprogress/core/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/clamp.ts
__turbopack_context__.s([
    "BProgress",
    ()=>BProgress,
    "css",
    ()=>css,
    "getAnchorProperty",
    ()=>getAnchorProperty,
    "isSameURL",
    ()=>isSameURL,
    "isSameURLWithoutSearch",
    ()=>isSameURLWithoutSearch
]);
function clamp(n, min, max) {
    return Math.max(min, Math.min(n, max));
}
// src/utils/to-bar-perc.ts
function toBarPerc(n, direction) {
    if (direction === "rtl") return (1 - n) * 100;
    return (-1 + n) * 100;
}
// src/utils/to-css.ts
function toCss(element, properties, value) {
    if (typeof properties === "string") {
        if (value !== void 0) {
            element.style[properties] = value;
        }
    } else {
        for(const prop in properties){
            if (properties.hasOwnProperty(prop)) {
                const val = properties[prop];
                if (val !== void 0) {
                    element.style[prop] = val;
                }
            }
        }
    }
}
// src/utils/class.ts
function addClass(element, name) {
    element.classList.add(name);
}
function removeClass(element, name) {
    element.classList.remove(name);
}
// src/utils/element.ts
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
// src/progress.ts
var defaultSettings = {
    minimum: 0.08,
    maximum: 1,
    // If template is null, the user can insert their own template in the DOM.
    template: `<div class="bar"><div class="peg"></div></div>
             <div class="spinner"><div class="spinner-icon"></div></div>
             <div class="indeterminate"><div class="inc"></div><div class="dec"></div></div>`,
    easing: "linear",
    positionUsing: "",
    speed: 200,
    trickle: true,
    trickleSpeed: 200,
    showSpinner: true,
    indeterminate: false,
    indeterminateSelector: ".indeterminate",
    barSelector: ".bar",
    spinnerSelector: ".spinner",
    parent: "body",
    direction: "ltr"
};
var BProgress = class {
    static settings = defaultSettings;
    static status = null;
    // Queue for animation functions
    static pending = [];
    static isPaused = false;
    // Reset the progress
    static reset() {
        this.status = null;
        this.isPaused = false;
        this.pending = [];
        this.settings = defaultSettings;
        return this;
    }
    // Configure BProgress with new options
    static configure(options) {
        Object.assign(this.settings, options);
        return this;
    }
    // Check if BProgress has started
    static isStarted() {
        return typeof this.status === "number";
    }
    /**
   * Set the progress status.
   * This method updates the progress status for every progress element present in the DOM.
   * If a template is provided, it will create a new progress element if one does not already exist.
   * If the template is null, it relies on user-inserted elements.
   */ static set(n) {
        if (this.isPaused) return this;
        const started = this.isStarted();
        n = clamp(n, this.settings.minimum, this.settings.maximum);
        this.status = n === this.settings.maximum ? null : n;
        const progressElements = this.render(!started);
        const speed = this.settings.speed;
        const ease = this.settings.easing;
        progressElements.forEach((progress)=>progress.offsetWidth);
        this.queue((next)=>{
            progressElements.forEach((progress)=>{
                if (!this.settings.indeterminate) {
                    const bar = progress.querySelector(this.settings.barSelector);
                    toCss(bar, this.barPositionCSS({
                        n,
                        speed,
                        ease
                    }));
                }
            });
            if (n === this.settings.maximum) {
                progressElements.forEach((progress)=>{
                    toCss(progress, {
                        transition: "none",
                        opacity: "1"
                    });
                    progress.offsetWidth;
                });
                setTimeout(()=>{
                    progressElements.forEach((progress)=>{
                        toCss(progress, {
                            transition: `all ${speed}ms ${ease}`,
                            opacity: "0"
                        });
                    });
                    setTimeout(()=>{
                        progressElements.forEach((progress)=>{
                            this.remove(progress);
                            if (this.settings.template === null) {
                                toCss(progress, {
                                    transition: "none",
                                    opacity: "1"
                                });
                            }
                        });
                        next();
                    }, speed);
                }, speed);
            } else {
                setTimeout(next, speed);
            }
        });
        return this;
    }
    // Start the progress bar
    static start() {
        if (!this.status) this.set(0);
        const work = ()=>{
            if (this.isPaused) return;
            setTimeout(()=>{
                if (!this.status) return;
                this.trickle();
                work();
            }, this.settings.trickleSpeed);
        };
        if (this.settings.trickle) work();
        return this;
    }
    // Complete the progress
    static done(force) {
        if (!force && !this.status) return this;
        return this.inc(0.3 + 0.5 * Math.random()).set(1);
    }
    // Increment the progress
    static inc(amount) {
        if (this.isPaused || this.settings.indeterminate) return this;
        let n = this.status;
        if (!n) {
            return this.start();
        } else if (n > 1) {
            return this;
        } else {
            if (typeof amount !== "number") {
                if (n >= 0 && n < 0.2) {
                    amount = 0.1;
                } else if (n >= 0.2 && n < 0.5) {
                    amount = 0.04;
                } else if (n >= 0.5 && n < 0.8) {
                    amount = 0.02;
                } else if (n >= 0.8 && n < 0.99) {
                    amount = 5e-3;
                } else {
                    amount = 0;
                }
            }
            n = clamp(n + amount, 0, 0.994);
            return this.set(n);
        }
    }
    // Decrement the progress
    static dec(amount) {
        if (this.isPaused || this.settings.indeterminate) return this;
        let n = this.status;
        if (typeof n !== "number") return this;
        if (typeof amount !== "number") {
            if (n > 0.8) {
                amount = 0.1;
            } else if (n > 0.5) {
                amount = 0.05;
            } else if (n > 0.2) {
                amount = 0.02;
            } else {
                amount = 0.01;
            }
        }
        n = clamp(n - amount, 0, 0.994);
        return this.set(n);
    }
    // Advance the progress (trickle)
    static trickle() {
        if (this.isPaused || this.settings.indeterminate) return this;
        return this.inc();
    }
    // Handle jQuery promises (for compatibility)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static promise($promise) {
        if (!$promise || $promise.state() === "resolved") {
            return this;
        }
        let initial = 0, current = 0;
        if (current === 0) {
            this.start();
        }
        initial++;
        current++;
        $promise.always(()=>{
            current--;
            if (current === 0) {
                initial = 0;
                this.done();
            } else {
                this.set((initial - current) / initial);
            }
        });
        return this;
    }
    /**
   * Renders the BProgress component.
   * If a template is provided, it will create a progress element if none exists in the parent.
   * If the template is null, it relies on the user to insert their own elements marked with the "bprogress" class.
   * When using indeterminate mode with a custom template, the template should include the indeterminate element.
   */ static render(fromStart = false) {
        const parent = typeof this.settings.parent === "string" ? document.querySelector(this.settings.parent) : this.settings.parent;
        const progressElements = parent ? Array.from(parent.querySelectorAll(".bprogress")) : [];
        if (this.settings.template !== null && progressElements.length === 0) {
            addClass(document.documentElement, "bprogress-busy");
            const progress = document.createElement("div");
            addClass(progress, "bprogress");
            progress.innerHTML = this.settings.template;
            if (parent !== document.body) {
                addClass(parent, "bprogress-custom-parent");
            }
            parent.appendChild(progress);
            progressElements.push(progress);
        }
        progressElements.forEach((progress)=>{
            if (this.settings.template === null) {
                progress.style.display = "";
            }
            addClass(document.documentElement, "bprogress-busy");
            if (parent !== document.body) {
                addClass(parent, "bprogress-custom-parent");
            }
            if (!this.settings.indeterminate) {
                const bar = progress.querySelector(this.settings.barSelector);
                const perc = fromStart ? toBarPerc(0, this.settings.direction) : toBarPerc(this.status || 0, this.settings.direction);
                toCss(bar, this.barPositionCSS({
                    n: this.status || 0,
                    speed: this.settings.speed,
                    ease: this.settings.easing,
                    perc
                }));
                const indeterminateElem = progress.querySelector(this.settings.indeterminateSelector);
                if (indeterminateElem) {
                    indeterminateElem.style.display = "none";
                }
            } else {
                const bar = progress.querySelector(this.settings.barSelector);
                if (bar) {
                    bar.style.display = "none";
                }
                const indeterminateElem = progress.querySelector(this.settings.indeterminateSelector);
                if (indeterminateElem) {
                    indeterminateElem.style.display = "";
                }
            }
            if (this.settings.template === null) {
                const spinner = progress.querySelector(this.settings.spinnerSelector);
                if (spinner) {
                    spinner.style.display = this.settings.showSpinner ? "block" : "none";
                }
            } else {
                if (!this.settings.showSpinner) {
                    const spinner = progress.querySelector(this.settings.spinnerSelector);
                    if (spinner) removeElement(spinner);
                }
            }
        });
        return progressElements;
    }
    /**
   * Remove the progress element from the DOM.
   * If a progress element is provided, only that element is removed;
   * otherwise, all progress elements and associated classes are removed.
   * For user-provided templates (when settings.template === null), the element
   * is hidden instead of being removed.
   */ static remove(progressElement) {
        if (progressElement) {
            if (this.settings.template === null) {
                progressElement.style.display = "none";
            } else {
                removeElement(progressElement);
            }
        } else {
            removeClass(document.documentElement, "bprogress-busy");
            const parent = typeof this.settings.parent === "string" ? document.querySelectorAll(this.settings.parent) : [
                this.settings.parent
            ];
            parent.forEach((p)=>{
                removeClass(p, "bprogress-custom-parent");
            });
            const progresses = document.querySelectorAll(".bprogress");
            progresses.forEach((progress)=>{
                const elem = progress;
                if (this.settings.template === null) {
                    elem.style.display = "none";
                } else {
                    removeElement(elem);
                }
            });
        }
    }
    // Pause the progress
    static pause() {
        if (!this.isStarted() || this.settings.indeterminate) return this;
        this.isPaused = true;
        return this;
    }
    // Resume the progress
    static resume() {
        if (!this.isStarted() || this.settings.indeterminate) return this;
        this.isPaused = false;
        if (this.settings.trickle) {
            const work = ()=>{
                if (this.isPaused) return;
                setTimeout(()=>{
                    if (!this.status) return;
                    this.trickle();
                    work();
                }, this.settings.trickleSpeed);
            };
            work();
        }
        return this;
    }
    // Check if BProgress is rendered in the DOM
    static isRendered() {
        return document.querySelectorAll(".bprogress").length > 0;
    }
    // Determine the CSS positioning method to use
    static getPositioningCSS() {
        const bodyStyle = document.body.style;
        const vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
        if (`${vendorPrefix}Perspective` in bodyStyle) {
            return "translate3d";
        } else if (`${vendorPrefix}Transform` in bodyStyle) {
            return "translate";
        } else {
            return "margin";
        }
    }
    // Queue function for animations
    static queue(fn) {
        this.pending.push(fn);
        if (this.pending.length === 1) this.next();
    }
    static next() {
        const fn = this.pending.shift();
        if (fn) fn(this.next.bind(this));
    }
    static initPositionUsing() {
        if (this.settings.positionUsing === "") {
            this.settings.positionUsing = this.getPositioningCSS();
        }
    }
    // Compute the CSS for positioning the bar
    static barPositionCSS({ n, speed, ease, perc }) {
        this.initPositionUsing();
        let barCSS = {};
        const computedPerc = perc ?? toBarPerc(n, this.settings.direction);
        if (this.settings.positionUsing === "translate3d") {
            barCSS = {
                transform: `translate3d(${computedPerc}%,0,0)`
            };
        } else if (this.settings.positionUsing === "translate") {
            barCSS = {
                transform: `translate(${computedPerc}%,0)`
            };
        } else if (this.settings.positionUsing === "width") {
            barCSS = {
                width: `${this.settings.direction === "rtl" ? 100 - computedPerc : computedPerc + 100}%`,
                ...this.settings.direction === "rtl" ? {
                    right: "0",
                    left: "auto"
                } : {}
            };
        } else if (this.settings.positionUsing === "margin") {
            barCSS = this.settings.direction === "rtl" ? {
                "margin-left": `${-computedPerc}%`
            } : {
                "margin-right": `${-computedPerc}%`
            };
        }
        barCSS.transition = `all ${speed}ms ${ease}`;
        return barCSS;
    }
};
// src/lib/css.ts
var css = ({ color = "#29d", height = "2px", spinnerPosition = "top-right" })=>`
:root {
  --bprogress-color: ${color};
  --bprogress-height: ${height};
  --bprogress-spinner-size: 18px;
  --bprogress-spinner-animation-duration: 400ms;
  --bprogress-spinner-border-size: 2px;
  --bprogress-box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
  --bprogress-z-index: 99999;
  --bprogress-spinner-top: ${spinnerPosition === "top-right" || spinnerPosition === "top-left" ? "15px" : "auto"};
  --bprogress-spinner-bottom: ${spinnerPosition === "bottom-right" || spinnerPosition === "bottom-left" ? "15px" : "auto"};
  --bprogress-spinner-right: ${spinnerPosition === "top-right" || spinnerPosition === "bottom-right" ? "15px" : "auto"};
  --bprogress-spinner-left: ${spinnerPosition === "top-left" || spinnerPosition === "bottom-left" ? "15px" : "auto"};
}

.bprogress {
  width: 0;
  height: 0;
  pointer-events: none;
  z-index: var(--bprogress-z-index);
}

.bprogress .bar {
  background: var(--bprogress-color);
  position: fixed;
  z-index: var(--bprogress-z-index);
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bprogress-height);
}

/* Fancy blur effect */
.bprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: var(--bprogress-box-shadow);
  opacity: 1.0;
  transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
.bprogress .spinner {
  display: block;
  position: fixed;
  z-index: var(--bprogress-z-index);
  top: var(--bprogress-spinner-top);
  bottom: var(--bprogress-spinner-bottom);
  right: var(--bprogress-spinner-right);
  left: var(--bprogress-spinner-left);
}

.bprogress .spinner-icon {
  width: var(--bprogress-spinner-size);
  height: var(--bprogress-spinner-size);
  box-sizing: border-box;
  border: solid var(--bprogress-spinner-border-size) transparent;
  border-top-color: var(--bprogress-color);
  border-left-color: var(--bprogress-color);
  border-radius: 50%;
  -webkit-animation: bprogress-spinner var(--bprogress-spinner-animation-duration) linear infinite;
  animation: bprogress-spinner var(--bprogress-spinner-animation-duration) linear infinite;
}

.bprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.bprogress-custom-parent .bprogress .spinner,
.bprogress-custom-parent .bprogress .bar {
  position: absolute;
}

.bprogress .indeterminate {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--bprogress-height);
  overflow: hidden;
}

.bprogress .indeterminate .inc,
.bprogress .indeterminate .dec {
  position: absolute;
  top: 0;
  height: 100%;
  background-color: var(--bprogress-color);
}

.bprogress .indeterminate .inc {
  animation: bprogress-indeterminate-increase 2s infinite;
}

.bprogress .indeterminate .dec {
  animation: bprogress-indeterminate-decrease 2s 0.5s infinite;
}

@-webkit-keyframes bprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}

@keyframes bprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes bprogress-indeterminate-increase {
  from { left: -5%; width: 5%; }
  to { left: 130%; width: 100%; }
}

@keyframes bprogress-indeterminate-decrease {
  from { left: -80%; width: 80%; }
  to { left: 110%; width: 10%; }
}
`;
// src/lib/same-url.ts
function isSameURL(target, current) {
    const cleanTarget = target.protocol + "//" + target.host + target.pathname + target.search;
    const cleanCurrent = current.protocol + "//" + current.host + current.pathname + current.search;
    return cleanTarget === cleanCurrent;
}
function isSameURLWithoutSearch(target, current) {
    const cleanTarget = target.protocol + "//" + target.host + target.pathname;
    const cleanCurrent = current.protocol + "//" + current.host + current.pathname;
    return cleanTarget === cleanCurrent;
}
// src/lib/get-anchor-property.ts
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
}
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = parsePath(path);
    return `${prefix}${pathname}${query}${hash}`;
}
function getAnchorProperty(a, key) {
    if (typeof key === "string" && key === "data-disable-progress") {
        const dataKey = key.substring(5).replace(/-([a-z])/g, (_, c)=>c.toUpperCase());
        return a.dataset[dataKey];
    }
    const prop = a[key];
    if (prop instanceof SVGAnimatedString) {
        const value = prop.baseVal;
        if (key === "href") {
            return addPathPrefix(value, location.origin);
        }
        return value;
    }
    return prop;
}
;
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/@bprogress+react@1.2.7_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/@bprogress/react/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/providers/progress-provider.tsx
__turbopack_context__.s([
    "Bar",
    ()=>Bar,
    "Indeterminate",
    ()=>Indeterminate,
    "Peg",
    ()=>Peg,
    "Progress",
    ()=>Progress,
    "ProgressProvider",
    ()=>ProgressProvider,
    "Spinner",
    ()=>Spinner,
    "SpinnerIcon",
    ()=>SpinnerIcon,
    "useAnchorProgress",
    ()=>useAnchorProgress,
    "useProgress",
    ()=>useProgress,
    "withMemo",
    ()=>withMemo,
    "withSuspense",
    ()=>withSuspense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/@bprogress+core@1.3.4/node_modules/@bprogress/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
;
var ProgressContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0);
var useProgress = function() {
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ProgressContext);
    if (!context) {
        throw new Error("useProgress must be used within a ProgressProvider");
    }
    return context;
};
var ProgressProvider = function(param) {
    var children = param.children, _param_color = param.color, color = _param_color === void 0 ? "#0A2FFF" : _param_color, _param_height = param.height, height = _param_height === void 0 ? "2px" : _param_height, options = param.options, _param_spinnerPosition = param.spinnerPosition, spinnerPosition = _param_spinnerPosition === void 0 ? "top-right" : _param_spinnerPosition, style = param.style, _param_disableStyle = param.disableStyle, disableStyle = _param_disableStyle === void 0 ? false : _param_disableStyle, nonce = param.nonce, _param_shallowRouting = param.shallowRouting, shallowRouting = _param_shallowRouting === void 0 ? false : _param_shallowRouting, _param_disableSameURL = param.disableSameURL, disableSameURL = _param_disableSameURL === void 0 ? true : _param_disableSameURL, _param_startPosition = param.startPosition, startPosition = _param_startPosition === void 0 ? 0 : _param_startPosition, _param_delay = param.delay, delay = _param_delay === void 0 ? 0 : _param_delay, _param_stopDelay = param.stopDelay, stopDelay = _param_stopDelay === void 0 ? 0 : _param_stopDelay;
    var timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    var isAutoStopDisabled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    var disableAutoStop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return isAutoStopDisabled.current = true;
    }, []);
    var enableAutoStop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return isAutoStopDisabled.current = false;
    }, []);
    var start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        var startPosition2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, delay2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, autoStopDisabled = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (autoStopDisabled) disableAutoStop();
        timer.current = setTimeout(function() {
            if (startPosition2 > 0) __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].set(startPosition2);
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].start();
        }, delay2);
    }, [
        disableAutoStop
    ]);
    var stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        var stopDelay2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, forcedStopDelay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        setTimeout(function() {
            if (timer.current) clearTimeout(timer.current);
            timer.current = setTimeout(function() {
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].isStarted()) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].done();
                if (isAutoStopDisabled.current) enableAutoStop();
            }, stopDelay2);
        }, forcedStopDelay);
    }, [
        enableAutoStop
    ]);
    var inc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(amount) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].inc(amount);
    }, []);
    var dec = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(amount) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].dec(amount);
    }, []);
    var set = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(n) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].set(n);
    }, []);
    var pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].pause();
    }, []);
    var resume = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].resume();
    }, []);
    var getOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].settings;
    }, []);
    var setOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(function(newOptions) {
        var currentOptions = getOptions();
        var updates = typeof newOptions === "function" ? newOptions(currentOptions) : newOptions;
        var nextOptions = _object_spread({}, currentOptions, updates);
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].configure(nextOptions);
    }, [
        getOptions
    ]);
    var styles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("style", {
            nonce: nonce
        }, style || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
            color: color,
            height: height,
            spinnerPosition: spinnerPosition
        }));
    }, [
        color,
        height,
        nonce,
        spinnerPosition,
        style
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BProgress"].configure(options || {});
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ProgressContext.Provider, {
        value: {
            start: start,
            stop: stop,
            inc: inc,
            dec: dec,
            set: set,
            pause: pause,
            resume: resume,
            setOptions: setOptions,
            getOptions: getOptions,
            isAutoStopDisabled: isAutoStopDisabled,
            disableAutoStop: disableAutoStop,
            enableAutoStop: enableAutoStop,
            shallowRouting: shallowRouting,
            disableSameURL: disableSameURL,
            startPosition: startPosition,
            delay: delay,
            stopDelay: stopDelay
        }
    }, !disableStyle ? styles : null, children);
};
;
;
function useAnchorProgress(param) {
    var _param_shallowRouting = param.shallowRouting, shallowRouting = _param_shallowRouting === void 0 ? false : _param_shallowRouting, _param_disableSameURL = param.disableSameURL, disableSameURL = _param_disableSameURL === void 0 ? true : _param_disableSameURL, _param_startPosition = param.startPosition, startPosition = _param_startPosition === void 0 ? 0 : _param_startPosition, _param_delay = param.delay, delay = _param_delay === void 0 ? 0 : _param_delay, _param_stopDelay = param.stopDelay, stopDelay = _param_stopDelay === void 0 ? 0 : _param_stopDelay, targetPreprocessor = param.targetPreprocessor, _param_disableAnchorClick = param.disableAnchorClick, disableAnchorClick = _param_disableAnchorClick === void 0 ? false : _param_disableAnchorClick, _param_startOnLoad = param.startOnLoad, startOnLoad = _param_startOnLoad === void 0 ? false : _param_startOnLoad, _param_forcedStopDelay = param.forcedStopDelay, forcedStopDelay = _param_forcedStopDelay === void 0 ? 0 : _param_forcedStopDelay, deps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var elementsWithAttachedHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    var timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    var _useProgress = useProgress(), start = _useProgress.start, stop = _useProgress.stop, isAutoStopDisabled = _useProgress.isAutoStopDisabled;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (startOnLoad) start(startPosition, delay);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(function() {
            if (!isAutoStopDisabled.current) stop();
        }, stopDelay);
        return function() {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, deps);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (disableAnchorClick) return;
        var handleAnchorClick = function(event) {
            if (event.defaultPrevented) return;
            var anchorElement = event.currentTarget;
            if (anchorElement.hasAttribute("download")) return;
            var target = event.target;
            var preventProgress = (target === null || target === void 0 ? void 0 : target.getAttribute("data-prevent-progress")) === "true" || (anchorElement === null || anchorElement === void 0 ? void 0 : anchorElement.getAttribute("data-prevent-progress")) === "true";
            if (!preventProgress) {
                var element = target;
                while(element && element.tagName.toLowerCase() !== "a"){
                    var _element_parentElement;
                    if (((_element_parentElement = element.parentElement) === null || _element_parentElement === void 0 ? void 0 : _element_parentElement.getAttribute("data-prevent-progress")) === "true") {
                        preventProgress = true;
                        break;
                    }
                    element = element.parentElement;
                }
            }
            if (preventProgress) return;
            var anchorTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnchorProperty"])(anchorElement, "target");
            if (anchorTarget === "_blank") return;
            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            var targetHref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnchorProperty"])(anchorElement, "href");
            var targetUrl = targetPreprocessor ? targetPreprocessor(new URL(targetHref)) : new URL(targetHref);
            var currentUrl = new URL(location.href);
            if (shallowRouting && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameURLWithoutSearch"])(targetUrl, currentUrl) && disableSameURL) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameURL"])(targetUrl, currentUrl) && disableSameURL) return;
            start(startPosition, delay);
        };
        var handleMutation = function() {
            var anchorElements = Array.from(document.querySelectorAll("a"));
            var validAnchorElements = anchorElements.filter(function(anchor) {
                var href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnchorProperty"])(anchor, "href");
                var isBProgressDisabled = anchor.getAttribute("data-disable-progress") === "true";
                var isNotTelOrMailto = href && !href.startsWith("tel:") && !href.startsWith("mailto:") && !href.startsWith("blob:") && !href.startsWith("javascript:");
                return !isBProgressDisabled && isNotTelOrMailto && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAnchorProperty"])(anchor, "target") !== "_blank";
            });
            validAnchorElements.forEach(function(anchor) {
                anchor.addEventListener("click", handleAnchorClick, true);
            });
            elementsWithAttachedHandlers.current = validAnchorElements;
        };
        var mutationObserver = new MutationObserver(handleMutation);
        mutationObserver.observe(document, {
            childList: true,
            subtree: true
        });
        var originalWindowHistoryPushState = window.history.pushState;
        window.history.pushState = new Proxy(window.history.pushState, {
            apply: function(target, thisArg, argArray) {
                if (!isAutoStopDisabled.current) stop(stopDelay, forcedStopDelay);
                return target.apply(thisArg, argArray);
            }
        });
        return function() {
            mutationObserver.disconnect();
            elementsWithAttachedHandlers.current.forEach(function(anchor) {
                anchor.removeEventListener("click", handleAnchorClick, true);
            });
            elementsWithAttachedHandlers.current = [];
            window.history.pushState = originalWindowHistoryPushState;
        };
    }, [
        disableAnchorClick,
        targetPreprocessor,
        shallowRouting,
        disableSameURL,
        delay,
        stopDelay,
        startPosition,
        start,
        stop,
        forcedStopDelay,
        isAutoStopDisabled
    ]);
}
;
// src/utils/classnames.ts
function classNames() {
    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){
        classes[_key] = arguments[_key];
    }
    return classes.filter(Boolean).join(" ");
}
;
function BarInner(_param, ref) {
    var as = _param.as, children = _param.children, className = _param.className, _param_classSelector = _param.classSelector, classSelector = _param_classSelector === void 0 ? "bar" : _param_classSelector, rest = _object_without_properties(_param, [
        "as",
        "children",
        "className",
        "classSelector"
    ]);
    var Component = as !== null && as !== void 0 ? as : "div";
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, _object_spread({
        ref: ref,
        className: classNames(classSelector, className)
    }, rest), children);
}
var Bar = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(BarInner);
;
function PegInner(_param, ref) {
    var as = _param.as, children = _param.children, className = _param.className, _param_classSelector = _param.classSelector, classSelector = _param_classSelector === void 0 ? "peg" : _param_classSelector, rest = _object_without_properties(_param, [
        "as",
        "children",
        "className",
        "classSelector"
    ]);
    var Component = as !== null && as !== void 0 ? as : "div";
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, _object_spread({
        ref: ref,
        className: classNames(classSelector, className)
    }, rest), children);
}
var Peg = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(PegInner);
;
function SpinnerInner(_param, ref) {
    var as = _param.as, children = _param.children, className = _param.className, _param_classSelector = _param.classSelector, classSelector = _param_classSelector === void 0 ? "spinner" : _param_classSelector, rest = _object_without_properties(_param, [
        "as",
        "children",
        "className",
        "classSelector"
    ]);
    var Component = as !== null && as !== void 0 ? as : "div";
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, _object_spread({
        ref: ref,
        className: classNames(classSelector, className)
    }, rest), children);
}
var Spinner = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(SpinnerInner);
;
function SpinnerIconInner(_param, ref) {
    var as = _param.as, children = _param.children, className = _param.className, _param_classSelector = _param.classSelector, classSelector = _param_classSelector === void 0 ? "spinner-icon" : _param_classSelector, rest = _object_without_properties(_param, [
        "as",
        "children",
        "className",
        "classSelector"
    ]);
    var Component = as !== null && as !== void 0 ? as : "div";
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, _object_spread({
        ref: ref,
        className: classNames(classSelector, className)
    }, rest), children);
}
var SpinnerIcon = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(SpinnerIconInner);
// src/components/progress.tsx
function ProgressInner(_param, ref) {
    var as = _param.as, children = _param.children, className = _param.className, style = _param.style, rest = _object_without_properties(_param, [
        "as",
        "children",
        "className",
        "style"
    ]);
    var Component = as !== null && as !== void 0 ? as : "div";
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, _object_spread({
        ref: ref,
        className: classNames("bprogress", className),
        style: _object_spread_props(_object_spread({}, style), {
            display: "none"
        })
    }, rest), children || /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Bar, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Peg, null)), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Spinner, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(SpinnerIcon, null))));
}
var Progress = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(ProgressInner);
;
function IndeterminateInner(_param, ref) {
    var as = _param.as, className = _param.className, _param_classSelector = _param.classSelector, classSelector = _param_classSelector === void 0 ? "indeterminate" : _param_classSelector, rest = _object_without_properties(_param, [
        "as",
        "className",
        "classSelector"
    ]);
    var Component = as !== null && as !== void 0 ? as : "div";
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, _object_spread({
        ref: ref,
        className: classNames(classSelector, className)
    }, rest), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "inc"
    }), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "dec"
    }));
}
var Indeterminate = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].forwardRef(IndeterminateInner);
;
function withSuspense(Component) {
    return function WithSuspenseComponent(props) {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Component, _object_spread({}, props)));
    };
}
;
function shallowCompareProps(prevProps, nextProps) {
    var ignoreKeys = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    var prevKeys = Object.keys(prevProps).filter(function(key) {
        return !ignoreKeys.includes(key);
    });
    var nextKeys = Object.keys(nextProps).filter(function(key) {
        return !ignoreKeys.includes(key);
    });
    if (prevKeys.length !== nextKeys.length) {
        return false;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = prevKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            if (prevProps[key] !== nextProps[key]) {
                return false;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return true;
}
function withMemo(Component) {
    var ignoreKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [
        "memo",
        "shouldCompareComplexProps"
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(Component, function(prevProps, nextProps) {
        if (nextProps.memo === false) return false;
        if (!nextProps.shouldCompareComplexProps) return true;
        return shallowCompareProps(prevProps, nextProps, ignoreKeys);
    });
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/@bprogress+next@3.2.12_next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__re_a65a93eb47e2eca14bcce864bc67cb8c/node_modules/@bprogress/next/dist/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/hooks/use-router.ts
__turbopack_context__.s([
    "AppProgressProvider",
    ()=>AppProgressProvider,
    "PagesProgressProvider",
    ()=>PagesProgressProvider,
    "useRouter",
    ()=>useRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/@bprogress+core@1.3.4/node_modules/@bprogress/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$react$40$1$2e$2$2e$7_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f40$bprogress$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/@bprogress+react@1.2.7_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/@bprogress/react/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/router.js [app-ssr] (ecmascript)");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
;
;
;
;
function removeFirstPathSegment(url) {
    var parts = url.pathname.split("/");
    if (parts.length > 1 && parts[1]) {
        parts.splice(1, 1);
        url.pathname = parts.join("/") || "/";
    }
    return url;
}
function useRouter(options) {
    var _ref = options || {}, customRouter = _ref.customRouter, defaultProgressOptions = _object_without_properties(_ref, [
        "customRouter"
    ]);
    var router = customRouter ? customRouter() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    var _useProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$react$40$1$2e$2$2e$7_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f40$bprogress$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgress"])(), start = _useProgress.start, stop = _useProgress.stop, providerDisableSameURL = _useProgress.disableSameURL, providerStartPosition = _useProgress.startPosition, providerDelay = _useProgress.delay, providerStopDelay = _useProgress.stopDelay;
    var extendedRouterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function createHandler(fn) {
        return function(href, options2) {
            var _ref = options2 || {}, showProgress = _ref.showProgress, startPosition = _ref.startPosition, disableSameURL = _ref.disableSameURL, basePath = _ref.basePath, i18nPath = _ref.i18nPath, delay = _ref.delay, stopDelay = _ref.stopDelay, routerOpts = _object_without_properties(_ref, [
                "showProgress",
                "startPosition",
                "disableSameURL",
                "basePath",
                "i18nPath",
                "delay",
                "stopDelay"
            ]);
            var progressOpts = _object_spread_props(_object_spread({}, defaultProgressOptions), {
                showProgress: showProgress,
                startPosition: startPosition,
                disableSameURL: disableSameURL,
                basePath: basePath,
                i18nPath: i18nPath,
                delay: delay,
                stopDelay: stopDelay
            });
            var localDisableSameURL = progressOpts.disableSameURL !== void 0 ? progressOpts.disableSameURL : providerDisableSameURL;
            var localStartPosition = progressOpts.startPosition !== void 0 ? progressOpts.startPosition : providerStartPosition;
            var localDelay = progressOpts.delay !== void 0 ? progressOpts.delay : providerDelay;
            var localStopDelay = progressOpts.stopDelay !== void 0 ? progressOpts.stopDelay : providerStopDelay;
            if (progressOpts.showProgress === false) {
                return fn(href, routerOpts);
            }
            var currentUrl = new URL(location.href);
            var targetUrl = new URL(href, location.href);
            if (progressOpts.i18nPath) {
                currentUrl = removeFirstPathSegment(currentUrl);
            }
            if (progressOpts.basePath) {
                targetUrl.pathname = progressOpts.basePath + (targetUrl.pathname !== "/" ? targetUrl.pathname : "");
            }
            var sameURL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameURL"])(targetUrl, currentUrl);
            if (sameURL && localDisableSameURL) {
                return fn(href, routerOpts);
            }
            start(localStartPosition, localDelay);
            setTimeout(function() {
                if (sameURL) stop(localStopDelay);
            }, localDelay || 0);
            return fn(href, routerOpts);
        };
    }
    function createNoHrefHandler(fn) {
        return function(options2) {
            var _ref = options2 || {}, showProgress = _ref.showProgress, startPosition = _ref.startPosition, disableSameURL = _ref.disableSameURL, basePath = _ref.basePath, i18nPath = _ref.i18nPath, delay = _ref.delay, stopDelay = _ref.stopDelay, routerOpts = _object_without_properties(_ref, [
                "showProgress",
                "startPosition",
                "disableSameURL",
                "basePath",
                "i18nPath",
                "delay",
                "stopDelay"
            ]);
            var progressOpts = _object_spread_props(_object_spread({}, defaultProgressOptions), {
                showProgress: showProgress,
                startPosition: startPosition,
                disableSameURL: disableSameURL,
                basePath: basePath,
                i18nPath: i18nPath,
                delay: delay,
                stopDelay: stopDelay
            });
            var localStartPosition = progressOpts.startPosition !== void 0 ? progressOpts.startPosition : providerStartPosition;
            var localDelay = progressOpts.delay !== void 0 ? progressOpts.delay : providerDelay;
            var localStopDelay = progressOpts.stopDelay !== void 0 ? progressOpts.stopDelay : providerStopDelay;
            if (progressOpts.showProgress === false) {
                return fn(routerOpts);
            }
            start(localStartPosition, localDelay);
            var result = fn(routerOpts);
            setTimeout(function() {
                stop(localStopDelay);
            }, localDelay || 0);
            return result;
        };
    }
    function createPrefetchHandler(fn) {
        return function(href, options2) {
            return fn(href, options2);
        };
    }
    if (!extendedRouterRef.current) {
        extendedRouterRef.current = _object_spread_props(_object_spread({}, router), {
            push: createHandler(router.push),
            replace: createHandler(router.replace),
            prefetch: createPrefetchHandler(router.prefetch),
            back: createNoHrefHandler(router.back),
            refresh: createNoHrefHandler(router.refresh),
            forward: createNoHrefHandler(router.forward)
        });
    } else {
        extendedRouterRef.current.push = createHandler(router.push);
        extendedRouterRef.current.replace = createHandler(router.replace);
        extendedRouterRef.current.prefetch = createPrefetchHandler(router.prefetch);
        extendedRouterRef.current.back = createNoHrefHandler(router.back);
        extendedRouterRef.current.refresh = createNoHrefHandler(router.refresh);
        extendedRouterRef.current.forward = createNoHrefHandler(router.forward);
    }
    return extendedRouterRef.current;
}
;
;
;
var AppProgressComponent = function(props) {
    var pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    var searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$react$40$1$2e$2$2e$7_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f40$bprogress$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnchorProgress"])(props, [
        pathname,
        searchParams
    ]);
    return null;
};
var AppProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$react$40$1$2e$2$2e$7_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f40$bprogress$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withMemo"])(AppProgressComponent);
AppProgress.displayName = "AppProgress";
;
;
;
var NextProgressProvider = function(_param) {
    var children = _param.children, ProgressComponent = _param.ProgressComponent, color = _param.color, height = _param.height, options = _param.options, spinnerPosition = _param.spinnerPosition, style = _param.style, disableStyle = _param.disableStyle, nonce = _param.nonce, stopDelay = _param.stopDelay, delay = _param.delay, startPosition = _param.startPosition, disableSameURL = _param.disableSameURL, shallowRouting = _param.shallowRouting, props = _object_without_properties(_param, [
        "children",
        "ProgressComponent",
        "color",
        "height",
        "options",
        "spinnerPosition",
        "style",
        "disableStyle",
        "nonce",
        "stopDelay",
        "delay",
        "startPosition",
        "disableSameURL",
        "shallowRouting"
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$react$40$1$2e$2$2e$7_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f40$bprogress$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProgressProvider"], {
        color: color,
        height: height,
        options: options,
        spinnerPosition: spinnerPosition,
        style: style,
        disableStyle: disableStyle,
        nonce: nonce,
        stopDelay: stopDelay,
        delay: delay,
        startPosition: startPosition,
        disableSameURL: disableSameURL,
        shallowRouting: shallowRouting
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(ProgressComponent, _object_spread({
        stopDelay: stopDelay,
        delay: delay,
        startPosition: startPosition,
        disableSameURL: disableSameURL,
        shallowRouting: shallowRouting
    }, props)), children);
};
// src/providers/app-progress-provider.tsx
var SuspendedAppProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$react$40$1$2e$2$2e$7_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f40$bprogress$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withSuspense"])(AppProgress);
var AppProgressProvider = function(_param) {
    var children = _param.children, props = _object_without_properties(_param, [
        "children"
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(NextProgressProvider, _object_spread({
        ProgressComponent: SuspendedAppProgress
    }, props), children);
};
;
;
;
;
;
var PagesProgressComponent = function(param) {
    var _param_shallowRouting = param.shallowRouting, shallowRouting = _param_shallowRouting === void 0 ? false : _param_shallowRouting, _param_disableSameURL = param.disableSameURL, disableSameURL = _param_disableSameURL === void 0 ? true : _param_disableSameURL, _param_startPosition = param.startPosition, startPosition = _param_startPosition === void 0 ? 0 : _param_startPosition, _param_delay = param.delay, delay = _param_delay === void 0 ? 0 : _param_delay, _param_stopDelay = param.stopDelay, stopDelay = _param_stopDelay === void 0 ? 0 : _param_stopDelay;
    var _useProgress2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$react$40$1$2e$2$2e$7_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f40$bprogress$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgress"])(), start = _useProgress2.start, stop = _useProgress2.stop;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var handleRouteStart = function(url) {
            var targetUrl = new URL(url, location.href);
            var currentUrl = new URL(location.href);
            if (shallowRouting && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameURLWithoutSearch"])(targetUrl, currentUrl) && disableSameURL) return;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$core$40$1$2e$3$2e$4$2f$node_modules$2f40$bprogress$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSameURL"])(targetUrl, currentUrl) && disableSameURL) return;
            start(startPosition, delay);
        };
        var handleRouteDone = function() {
            return stop(stopDelay);
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].events.on("routeChangeStart", handleRouteStart);
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].events.on("routeChangeComplete", handleRouteDone);
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].events.on("routeChangeError", handleRouteDone);
        return function() {
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].events.off("routeChangeStart", handleRouteStart);
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].events.off("routeChangeComplete", handleRouteDone);
            __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$router$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].events.off("routeChangeError", handleRouteDone);
        };
    }, []);
    return null;
};
var PagesProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f40$bprogress$2b$react$40$1$2e$2$2e$7_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f40$bprogress$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["withMemo"])(PagesProgressComponent);
PagesProgress.displayName = "PagesProgress";
// src/providers/pages-progress-provider.tsx
var PagesProgressProvider = function(_param) {
    var children = _param.children, props = _object_without_properties(_param, [
        "children"
    ]);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(NextProgressProvider, _object_spread({
        ProgressComponent: PagesProgress
    }, props), children);
};
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/@vercel+analytics@1.5.0_next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1__react@19.1.1/node_modules/@vercel/analytics/dist/next/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Analytics",
    ()=>Analytics2
]);
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/analytics";
var version = "1.5.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return "undefined" !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? "TURBOPACK unreachable" : detectEnvironment();
    return mode || "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return `${props.basePath}/insights/script.js`;
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    //TURBOPACK unreachable
    ;
    const src = undefined;
    const script = undefined;
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
// src/react/utils.ts
function getBasePath() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function Analytics(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (props.beforeSend) {
            (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
        }
    }, [
        props.beforeSend
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        inject({
            framework: props.framework || "react",
            basePath: props.basePath ?? getBasePath(),
            ...props.route !== void 0 && {
                disableAutoTrack: true
            },
            ...props
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (props.route && props.path) {
            pageview({
                route: props.route,
                path: props.path
            });
        }
    }, [
        props.route,
        props.path
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return {
            route: null,
            path
        };
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return {
        route: computeRoute(path, finalParams),
        path
    };
};
function getBasePath2() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/nextjs/index.tsx
function AnalyticsComponent(props) {
    const { route, path } = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Analytics, {
        path,
        route,
        ...props,
        basePath: getBasePath2(),
        framework: "next"
    });
}
function Analytics2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(AnalyticsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/@vercel+speed-insights@1.2.0_next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1__react@19.1.1/node_modules/@vercel/speed-insights/dist/next/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpeedInsights",
    ()=>SpeedInsights2
]);
// src/nextjs/index.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// src/nextjs/utils.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
// package.json
var name = "@vercel/speed-insights";
var version = "1.2.0";
// src/queue.ts
var initQueue = ()=>{
    if (window.si) return;
    window.si = function a(...params) {
        (window.siq = window.siq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return "undefined" !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function isDevelopment() {
    return detectEnvironment() === "development";
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js";
    }
    if (props.dsn) {
        return "https://va.vercel-scripts.com/v1/speed-insights/script.js";
    }
    if (props.basePath) {
        return `${props.basePath}/speed-insights/script.js`;
    }
    return "/_vercel/speed-insights/script.js";
}
// src/generic.ts
function injectSpeedInsights(props = {}) {
    var _a;
    if (!isBrowser() || props.route === null) return null;
    //TURBOPACK unreachable
    ;
    const src = undefined;
    const script = undefined;
}
// src/react/utils.ts
function getBasePath() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/react/index.tsx
function SpeedInsights(props) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var _a;
        if (props.beforeSend) {
            (_a = window.si) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
        }
    }, [
        props.beforeSend
    ]);
    const setScriptRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!setScriptRoute.current) {
            const script = injectSpeedInsights({
                framework: props.framework ?? "react",
                basePath: props.basePath ?? getBasePath(),
                ...props
            });
            if (script) {
                setScriptRoute.current = script.setRoute;
            }
        } else if (props.route) {
            setScriptRoute.current(props.route);
        }
    }, [
        props.route
    ]);
    return null;
}
;
var useRoute = ()=>{
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])() || new URLSearchParams();
    const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    if (!params) {
        return null;
    }
    const finalParams = Object.keys(params).length ? params : Object.fromEntries(searchParams.entries());
    return computeRoute(path, finalParams);
};
function getBasePath2() {
    if (typeof process === "undefined" || typeof process.env === "undefined") {
        return void 0;
    }
    return process.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
}
// src/nextjs/index.tsx
function SpeedInsightsComponent(props) {
    const route = useRoute();
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(SpeedInsights, {
        route,
        ...props,
        framework: "next",
        basePath: getBasePath2()
    });
}
function SpeedInsights2(props) {
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: null
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(SpeedInsightsComponent, {
        ...props
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/vanilla/internals.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_abortPromise",
    ()=>INTERNAL_abortPromise,
    "INTERNAL_addPendingPromiseToDependency",
    ()=>INTERNAL_addPendingPromiseToDependency,
    "INTERNAL_buildStoreRev1",
    ()=>INTERNAL_buildStoreRev1,
    "INTERNAL_getBuildingBlocksRev1",
    ()=>INTERNAL_getBuildingBlocksRev1,
    "INTERNAL_getMountedOrPendingDependents",
    ()=>INTERNAL_getMountedOrPendingDependents,
    "INTERNAL_hasInitialValue",
    ()=>INTERNAL_hasInitialValue,
    "INTERNAL_initializeStoreHooks",
    ()=>INTERNAL_initializeStoreHooks,
    "INTERNAL_isActuallyWritableAtom",
    ()=>INTERNAL_isActuallyWritableAtom,
    "INTERNAL_isAtomStateInitialized",
    ()=>INTERNAL_isAtomStateInitialized,
    "INTERNAL_isPendingPromise",
    ()=>INTERNAL_isPendingPromise,
    "INTERNAL_isPromiseLike",
    ()=>INTERNAL_isPromiseLike,
    "INTERNAL_isSelfAtom",
    ()=>INTERNAL_isSelfAtom,
    "INTERNAL_promiseStateMap",
    ()=>INTERNAL_promiseStateMap,
    "INTERNAL_registerAbortHandler",
    ()=>INTERNAL_registerAbortHandler,
    "INTERNAL_returnAtomValue",
    ()=>INTERNAL_returnAtomValue,
    "INTERNAL_setAtomStateValueOrPromise",
    ()=>INTERNAL_setAtomStateValueOrPromise
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/vanilla/internals.mjs")}`;
    }
};
const isSelfAtom = (atom, a)=>atom.unstable_is ? atom.unstable_is(a) : a === atom;
const hasInitialValue = (atom)=>"init" in atom;
const isActuallyWritableAtom = (atom)=>!!atom.write;
const isAtomStateInitialized = (atomState)=>"v" in atomState || "e" in atomState;
const returnAtomValue = (atomState)=>{
    if ("e" in atomState) {
        throw atomState.e;
    }
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("v" in atomState)) {
        throw new Error("[Bug] atom state is not initialized");
    }
    return atomState.v;
};
const promiseStateMap = /* @__PURE__ */ new WeakMap();
const isPendingPromise = (value)=>{
    var _a;
    return isPromiseLike(value) && !!((_a = promiseStateMap.get(value)) == null ? void 0 : _a[0]);
};
const abortPromise = (promise)=>{
    const promiseState = promiseStateMap.get(promise);
    if (promiseState == null ? void 0 : promiseState[0]) {
        promiseState[0] = false;
        promiseState[1].forEach((fn)=>fn());
    }
};
const registerAbortHandler = (promise, abortHandler)=>{
    let promiseState = promiseStateMap.get(promise);
    if (!promiseState) {
        promiseState = [
            true,
            /* @__PURE__ */ new Set()
        ];
        promiseStateMap.set(promise, promiseState);
        const settle = ()=>{
            promiseState[0] = false;
        };
        promise.then(settle, settle);
    }
    promiseState[1].add(abortHandler);
};
const isPromiseLike = (p)=>typeof (p == null ? void 0 : p.then) === "function";
const addPendingPromiseToDependency = (atom, promise, dependencyAtomState)=>{
    if (!dependencyAtomState.p.has(atom)) {
        dependencyAtomState.p.add(atom);
        promise.then(()=>{
            dependencyAtomState.p.delete(atom);
        }, ()=>{
            dependencyAtomState.p.delete(atom);
        });
    }
};
const setAtomStateValueOrPromise = (atom, valueOrPromise, ensureAtomState)=>{
    const atomState = ensureAtomState(atom);
    const hasPrevValue = "v" in atomState;
    const prevValue = atomState.v;
    if (isPromiseLike(valueOrPromise)) {
        for (const a of atomState.d.keys()){
            addPendingPromiseToDependency(atom, valueOrPromise, ensureAtomState(a));
        }
    }
    atomState.v = valueOrPromise;
    delete atomState.e;
    if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
        ++atomState.n;
        if (isPromiseLike(prevValue)) {
            abortPromise(prevValue);
        }
    }
};
const getMountedOrPendingDependents = (atom, atomState, mountedMap)=>{
    var _a;
    const dependents = /* @__PURE__ */ new Set();
    for (const a of ((_a = mountedMap.get(atom)) == null ? void 0 : _a.t) || []){
        if (mountedMap.has(a)) {
            dependents.add(a);
        }
    }
    for (const atomWithPendingPromise of atomState.p){
        dependents.add(atomWithPendingPromise);
    }
    return dependents;
};
const createStoreHook = ()=>{
    const callbacks = /* @__PURE__ */ new Set();
    const notify = ()=>{
        callbacks.forEach((fn)=>fn());
    };
    notify.add = (fn)=>{
        callbacks.add(fn);
        return ()=>{
            callbacks.delete(fn);
        };
    };
    return notify;
};
const createStoreHookForAtoms = ()=>{
    const all = {};
    const callbacks = /* @__PURE__ */ new WeakMap();
    const notify = (atom)=>{
        var _a, _b;
        (_a = callbacks.get(all)) == null ? void 0 : _a.forEach((fn)=>fn(atom));
        (_b = callbacks.get(atom)) == null ? void 0 : _b.forEach((fn)=>fn());
    };
    notify.add = (atom, fn)=>{
        const key = atom || all;
        const fns = (callbacks.has(key) ? callbacks : callbacks.set(key, /* @__PURE__ */ new Set())).get(key);
        fns.add(fn);
        return ()=>{
            fns == null ? void 0 : fns.delete(fn);
            if (!fns.size) {
                callbacks.delete(key);
            }
        };
    };
    return notify;
};
const initializeStoreHooks = (storeHooks)=>{
    storeHooks.c || (storeHooks.c = createStoreHookForAtoms());
    storeHooks.m || (storeHooks.m = createStoreHookForAtoms());
    storeHooks.u || (storeHooks.u = createStoreHookForAtoms());
    storeHooks.f || (storeHooks.f = createStoreHook());
    return storeHooks;
};
const BUILDING_BLOCKS = Symbol();
const getBuildingBlocks = (store)=>store[BUILDING_BLOCKS];
const buildStore = (atomStateMap = /* @__PURE__ */ new WeakMap(), mountedMap = /* @__PURE__ */ new WeakMap(), invalidatedAtoms = /* @__PURE__ */ new WeakMap(), changedAtoms = /* @__PURE__ */ new Set(), mountCallbacks = /* @__PURE__ */ new Set(), unmountCallbacks = /* @__PURE__ */ new Set(), storeHooks = {}, atomRead = (atom, ...params)=>atom.read(...params), atomWrite = (atom, ...params)=>atom.write(...params), atomOnInit = (atom, store)=>{
    var _a;
    return (_a = atom.unstable_onInit) == null ? void 0 : _a.call(atom, store);
}, atomOnMount = (atom, setAtom)=>{
    var _a;
    return (_a = atom.onMount) == null ? void 0 : _a.call(atom, setAtom);
}, ...buildingBlockFunctions)=>{
    const ensureAtomState = buildingBlockFunctions[0] || ((atom)=>{
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !atom) {
            throw new Error("Atom is undefined or null");
        }
        let atomState = atomStateMap.get(atom);
        if (!atomState) {
            atomState = {
                d: /* @__PURE__ */ new Map(),
                p: /* @__PURE__ */ new Set(),
                n: 0
            };
            atomStateMap.set(atom, atomState);
            atomOnInit == null ? void 0 : atomOnInit(atom, store);
        }
        return atomState;
    });
    const flushCallbacks = buildingBlockFunctions[1] || (()=>{
        const errors = [];
        const call = (fn)=>{
            try {
                fn();
            } catch (e) {
                errors.push(e);
            }
        };
        do {
            if (storeHooks.f) {
                call(storeHooks.f);
            }
            const callbacks = /* @__PURE__ */ new Set();
            const add = callbacks.add.bind(callbacks);
            changedAtoms.forEach((atom)=>{
                var _a;
                return (_a = mountedMap.get(atom)) == null ? void 0 : _a.l.forEach(add);
            });
            changedAtoms.clear();
            unmountCallbacks.forEach(add);
            unmountCallbacks.clear();
            mountCallbacks.forEach(add);
            mountCallbacks.clear();
            callbacks.forEach(call);
            if (changedAtoms.size) {
                recomputeInvalidatedAtoms();
            }
        }while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size)
        if (errors.length) {
            throw new AggregateError(errors);
        }
    });
    const recomputeInvalidatedAtoms = buildingBlockFunctions[2] || (()=>{
        const topSortedReversed = [];
        const visiting = /* @__PURE__ */ new WeakSet();
        const visited = /* @__PURE__ */ new WeakSet();
        const stack = Array.from(changedAtoms);
        while(stack.length){
            const a = stack[stack.length - 1];
            const aState = ensureAtomState(a);
            if (visited.has(a)) {
                stack.pop();
                continue;
            }
            if (visiting.has(a)) {
                if (invalidatedAtoms.get(a) === aState.n) {
                    topSortedReversed.push([
                        a,
                        aState
                    ]);
                } else if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && invalidatedAtoms.has(a)) {
                    throw new Error("[Bug] invalidated atom exists");
                }
                visited.add(a);
                stack.pop();
                continue;
            }
            visiting.add(a);
            for (const d of getMountedOrPendingDependents(a, aState, mountedMap)){
                if (!visiting.has(d)) {
                    stack.push(d);
                }
            }
        }
        for(let i = topSortedReversed.length - 1; i >= 0; --i){
            const [a, aState] = topSortedReversed[i];
            let hasChangedDeps = false;
            for (const dep of aState.d.keys()){
                if (dep !== a && changedAtoms.has(dep)) {
                    hasChangedDeps = true;
                    break;
                }
            }
            if (hasChangedDeps) {
                readAtomState(a);
                mountDependencies(a);
            }
            invalidatedAtoms.delete(a);
        }
    });
    const readAtomState = buildingBlockFunctions[3] || ((atom)=>{
        var _a;
        const atomState = ensureAtomState(atom);
        if (isAtomStateInitialized(atomState)) {
            if (mountedMap.has(atom) && invalidatedAtoms.get(atom) !== atomState.n) {
                return atomState;
            }
            if (Array.from(atomState.d).every(([a, n])=>// Recursively, read the atom state of the dependency, and
                // check if the atom epoch number is unchanged
                readAtomState(a).n === n)) {
                return atomState;
            }
        }
        atomState.d.clear();
        let isSync = true;
        const mountDependenciesIfAsync = ()=>{
            if (mountedMap.has(atom)) {
                mountDependencies(atom);
                recomputeInvalidatedAtoms();
                flushCallbacks();
            }
        };
        const getter = (a)=>{
            var _a2;
            if (isSelfAtom(atom, a)) {
                const aState2 = ensureAtomState(a);
                if (!isAtomStateInitialized(aState2)) {
                    if (hasInitialValue(a)) {
                        setAtomStateValueOrPromise(a, a.init, ensureAtomState);
                    } else {
                        throw new Error("no atom init");
                    }
                }
                return returnAtomValue(aState2);
            }
            const aState = readAtomState(a);
            try {
                return returnAtomValue(aState);
            } finally{
                atomState.d.set(a, aState.n);
                if (isPendingPromise(atomState.v)) {
                    addPendingPromiseToDependency(atom, atomState.v, aState);
                }
                (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.t.add(atom);
                if (!isSync) {
                    mountDependenciesIfAsync();
                }
            }
        };
        let controller;
        let setSelf;
        const options = {
            get signal () {
                if (!controller) {
                    controller = new AbortController();
                }
                return controller.signal;
            },
            get setSelf () {
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom)) {
                    console.warn("setSelf function cannot be used with read-only atom");
                }
                if (!setSelf && isActuallyWritableAtom(atom)) {
                    setSelf = (...args)=>{
                        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && isSync) {
                            console.warn("setSelf function cannot be called in sync");
                        }
                        if (!isSync) {
                            try {
                                return writeAtomState(atom, ...args);
                            } finally{
                                recomputeInvalidatedAtoms();
                                flushCallbacks();
                            }
                        }
                    };
                }
                return setSelf;
            }
        };
        const prevEpochNumber = atomState.n;
        try {
            const valueOrPromise = atomRead(atom, getter, options);
            setAtomStateValueOrPromise(atom, valueOrPromise, ensureAtomState);
            if (isPromiseLike(valueOrPromise)) {
                registerAbortHandler(valueOrPromise, ()=>controller == null ? void 0 : controller.abort());
                valueOrPromise.then(mountDependenciesIfAsync, mountDependenciesIfAsync);
            }
            return atomState;
        } catch (error) {
            delete atomState.v;
            atomState.e = error;
            ++atomState.n;
            return atomState;
        } finally{
            isSync = false;
            if (prevEpochNumber !== atomState.n && invalidatedAtoms.get(atom) === prevEpochNumber) {
                invalidatedAtoms.set(atom, atomState.n);
                changedAtoms.add(atom);
                (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, atom);
            }
        }
    });
    const invalidateDependents = buildingBlockFunctions[4] || ((atom)=>{
        const stack = [
            atom
        ];
        while(stack.length){
            const a = stack.pop();
            const aState = ensureAtomState(a);
            for (const d of getMountedOrPendingDependents(a, aState, mountedMap)){
                const dState = ensureAtomState(d);
                invalidatedAtoms.set(d, dState.n);
                stack.push(d);
            }
        }
    });
    const writeAtomState = buildingBlockFunctions[5] || ((atom, ...args)=>{
        let isSync = true;
        const getter = (a)=>returnAtomValue(readAtomState(a));
        const setter = (a, ...args2)=>{
            var _a;
            const aState = ensureAtomState(a);
            try {
                if (isSelfAtom(atom, a)) {
                    if (!hasInitialValue(a)) {
                        throw new Error("atom not writable");
                    }
                    const prevEpochNumber = aState.n;
                    const v = args2[0];
                    setAtomStateValueOrPromise(a, v, ensureAtomState);
                    mountDependencies(a);
                    if (prevEpochNumber !== aState.n) {
                        changedAtoms.add(a);
                        (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
                        invalidateDependents(a);
                    }
                    return void 0;
                } else {
                    return writeAtomState(a, ...args2);
                }
            } finally{
                if (!isSync) {
                    recomputeInvalidatedAtoms();
                    flushCallbacks();
                }
            }
        };
        try {
            return atomWrite(atom, getter, setter, ...args);
        } finally{
            isSync = false;
        }
    });
    const mountDependencies = buildingBlockFunctions[6] || ((atom)=>{
        var _a;
        const atomState = ensureAtomState(atom);
        const mounted = mountedMap.get(atom);
        if (mounted && !isPendingPromise(atomState.v)) {
            for (const [a, n] of atomState.d){
                if (!mounted.d.has(a)) {
                    const aState = ensureAtomState(a);
                    const aMounted = mountAtom(a);
                    aMounted.t.add(atom);
                    mounted.d.add(a);
                    if (n !== aState.n) {
                        changedAtoms.add(a);
                        (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
                        invalidateDependents(a);
                    }
                }
            }
            for (const a of mounted.d || []){
                if (!atomState.d.has(a)) {
                    mounted.d.delete(a);
                    const aMounted = unmountAtom(a);
                    aMounted == null ? void 0 : aMounted.t.delete(atom);
                }
            }
        }
    });
    const mountAtom = buildingBlockFunctions[7] || ((atom)=>{
        var _a;
        const atomState = ensureAtomState(atom);
        let mounted = mountedMap.get(atom);
        if (!mounted) {
            readAtomState(atom);
            for (const a of atomState.d.keys()){
                const aMounted = mountAtom(a);
                aMounted.t.add(atom);
            }
            mounted = {
                l: /* @__PURE__ */ new Set(),
                d: new Set(atomState.d.keys()),
                t: /* @__PURE__ */ new Set()
            };
            mountedMap.set(atom, mounted);
            (_a = storeHooks.m) == null ? void 0 : _a.call(storeHooks, atom);
            if (isActuallyWritableAtom(atom)) {
                const processOnMount = ()=>{
                    let isSync = true;
                    const setAtom = (...args)=>{
                        try {
                            return writeAtomState(atom, ...args);
                        } finally{
                            if (!isSync) {
                                recomputeInvalidatedAtoms();
                                flushCallbacks();
                            }
                        }
                    };
                    try {
                        const onUnmount = atomOnMount(atom, setAtom);
                        if (onUnmount) {
                            mounted.u = ()=>{
                                isSync = true;
                                try {
                                    onUnmount();
                                } finally{
                                    isSync = false;
                                }
                            };
                        }
                    } finally{
                        isSync = false;
                    }
                };
                mountCallbacks.add(processOnMount);
            }
        }
        return mounted;
    });
    const unmountAtom = buildingBlockFunctions[8] || ((atom)=>{
        var _a;
        const atomState = ensureAtomState(atom);
        let mounted = mountedMap.get(atom);
        if (mounted && !mounted.l.size && !Array.from(mounted.t).some((a)=>{
            var _a2;
            return (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.d.has(atom);
        })) {
            if (mounted.u) {
                unmountCallbacks.add(mounted.u);
            }
            mounted = void 0;
            mountedMap.delete(atom);
            (_a = storeHooks.u) == null ? void 0 : _a.call(storeHooks, atom);
            for (const a of atomState.d.keys()){
                const aMounted = unmountAtom(a);
                aMounted == null ? void 0 : aMounted.t.delete(atom);
            }
            return void 0;
        }
        return mounted;
    });
    const buildingBlocks = [
        // store state
        atomStateMap,
        mountedMap,
        invalidatedAtoms,
        changedAtoms,
        mountCallbacks,
        unmountCallbacks,
        storeHooks,
        // atom interceptors
        atomRead,
        atomWrite,
        atomOnInit,
        atomOnMount,
        // building-block functions
        ensureAtomState,
        flushCallbacks,
        recomputeInvalidatedAtoms,
        readAtomState,
        invalidateDependents,
        writeAtomState,
        mountDependencies,
        mountAtom,
        unmountAtom
    ];
    const store = {
        get: (atom)=>returnAtomValue(readAtomState(atom)),
        set: (atom, ...args)=>{
            try {
                return writeAtomState(atom, ...args);
            } finally{
                recomputeInvalidatedAtoms();
                flushCallbacks();
            }
        },
        sub: (atom, listener)=>{
            const mounted = mountAtom(atom);
            const listeners = mounted.l;
            listeners.add(listener);
            flushCallbacks();
            return ()=>{
                listeners.delete(listener);
                unmountAtom(atom);
                flushCallbacks();
            };
        }
    };
    Object.defineProperty(store, BUILDING_BLOCKS, {
        value: buildingBlocks
    });
    return store;
};
const INTERNAL_buildStoreRev1 = buildStore;
const INTERNAL_getBuildingBlocksRev1 = getBuildingBlocks;
const INTERNAL_initializeStoreHooks = initializeStoreHooks;
const INTERNAL_isSelfAtom = isSelfAtom;
const INTERNAL_hasInitialValue = hasInitialValue;
const INTERNAL_isActuallyWritableAtom = isActuallyWritableAtom;
const INTERNAL_isAtomStateInitialized = isAtomStateInitialized;
const INTERNAL_returnAtomValue = returnAtomValue;
const INTERNAL_promiseStateMap = promiseStateMap;
const INTERNAL_isPendingPromise = isPendingPromise;
const INTERNAL_abortPromise = abortPromise;
const INTERNAL_registerAbortHandler = registerAbortHandler;
const INTERNAL_isPromiseLike = isPromiseLike;
const INTERNAL_addPendingPromiseToDependency = addPendingPromiseToDependency;
const INTERNAL_setAtomStateValueOrPromise = setAtomStateValueOrPromise;
const INTERNAL_getMountedOrPendingDependents = getMountedOrPendingDependents;
;
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_overrideCreateStore",
    ()=>INTERNAL_overrideCreateStore,
    "atom",
    ()=>atom,
    "createStore",
    ()=>createStore,
    "getDefaultStore",
    ()=>getDefaultStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/vanilla/internals.mjs [app-ssr] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/vanilla.mjs")}`;
    }
};
;
let keyCount = 0;
function atom(read, write) {
    const key = `atom${++keyCount}`;
    const config = {
        toString () {
            return (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && this.debugLabel ? key + ":" + this.debugLabel : key;
        }
    };
    if (typeof read === "function") {
        config.read = read;
    } else {
        config.init = read;
        config.read = defaultRead;
        config.write = defaultWrite;
    }
    if (write) {
        config.write = write;
    }
    return config;
}
function defaultRead(get) {
    return get(this);
}
function defaultWrite(get, set, arg) {
    return set(this, typeof arg === "function" ? arg(get(this)) : arg);
}
const createDevStoreRev4 = ()=>{
    let inRestoreAtom = 0;
    const storeHooks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_initializeStoreHooks"])({});
    const atomStateMap = /* @__PURE__ */ new WeakMap();
    const mountedAtoms = /* @__PURE__ */ new WeakMap();
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_buildStoreRev1"])(atomStateMap, mountedAtoms, void 0, void 0, void 0, void 0, storeHooks, void 0, (atom, get, set, ...args)=>{
        if (inRestoreAtom) {
            return set(atom, ...args);
        }
        return atom.write(get, set, ...args);
    });
    const debugMountedAtoms = /* @__PURE__ */ new Set();
    storeHooks.m.add(void 0, (atom)=>{
        debugMountedAtoms.add(atom);
        const atomState = atomStateMap.get(atom);
        atomState.m = mountedAtoms.get(atom);
    });
    storeHooks.u.add(void 0, (atom)=>{
        debugMountedAtoms.delete(atom);
        const atomState = atomStateMap.get(atom);
        delete atomState.m;
    });
    const devStore = {
        // store dev methods (these are tentative and subject to change without notice)
        dev4_get_internal_weak_map: ()=>{
            console.log("Deprecated: Use devstore from the devtools library");
            return atomStateMap;
        },
        dev4_get_mounted_atoms: ()=>debugMountedAtoms,
        dev4_restore_atoms: (values)=>{
            const restoreAtom = {
                read: ()=>null,
                write: (_get, set)=>{
                    ++inRestoreAtom;
                    try {
                        for (const [atom, value] of values){
                            if ("init" in atom) {
                                set(atom, value);
                            }
                        }
                    } finally{
                        --inRestoreAtom;
                    }
                }
            };
            store.set(restoreAtom);
        }
    };
    return Object.assign(store, devStore);
};
let overiddenCreateStore;
function INTERNAL_overrideCreateStore(fn) {
    overiddenCreateStore = fn(overiddenCreateStore);
}
function createStore() {
    if (overiddenCreateStore) {
        return overiddenCreateStore();
    }
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        return createDevStoreRev4();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_buildStoreRev1"])();
}
let defaultStore;
function getDefaultStore() {
    if (!defaultStore) {
        defaultStore = createStore();
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
            if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
                console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044");
            }
        }
    }
    return defaultStore;
}
;
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/react.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider,
    "useAtom",
    ()=>useAtom,
    "useAtomValue",
    ()=>useAtomValue,
    "useSetAtom",
    ()=>useSetAtom,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/vanilla.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/vanilla/internals.mjs [app-ssr] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("Developer/Portfolio 2/node_modules/.pnpm/jotai@2.12.5_@types+react@19.1.10_react@19.1.1/node_modules/jotai/esm/react.mjs")}`;
    }
};
'use client';
;
;
;
const StoreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useStore(options) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    return (options == null ? void 0 : options.store) || store || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultStore"])();
}
function Provider({ children, store }) {
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(void 0);
    if (!store && !storeRef.current) {
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(StoreContext.Provider, {
        value: store || storeRef.current
    }, children);
}
const isPromiseLike = (x)=>typeof (x == null ? void 0 : x.then) === "function";
const attachPromiseStatus = (promise)=>{
    if (!promise.status) {
        promise.status = "pending";
        promise.then((v)=>{
            promise.status = "fulfilled";
            promise.value = v;
        }, (e)=>{
            promise.status = "rejected";
            promise.reason = e;
        });
    }
};
const use = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use || // A shim for older React versions
((promise)=>{
    if (promise.status === "pending") {
        throw promise;
    } else if (promise.status === "fulfilled") {
        return promise.value;
    } else if (promise.status === "rejected") {
        throw promise.reason;
    } else {
        attachPromiseStatus(promise);
        throw promise;
    }
});
const continuablePromiseMap = /* @__PURE__ */ new WeakMap();
const createContinuablePromise = (promise, getValue)=>{
    let continuablePromise = continuablePromiseMap.get(promise);
    if (!continuablePromise) {
        continuablePromise = new Promise((resolve, reject)=>{
            let curr = promise;
            const onFulfilled = (me)=>(v)=>{
                    if (curr === me) {
                        resolve(v);
                    }
                };
            const onRejected = (me)=>(e)=>{
                    if (curr === me) {
                        reject(e);
                    }
                };
            const onAbort = ()=>{
                try {
                    const nextValue = getValue();
                    if (isPromiseLike(nextValue)) {
                        continuablePromiseMap.set(nextValue, continuablePromise);
                        curr = nextValue;
                        nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_registerAbortHandler"])(nextValue, onAbort);
                    } else {
                        resolve(nextValue);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            promise.then(onFulfilled(promise), onRejected(promise));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$jotai$40$2$2e$12$2e$5_$40$types$2b$react$40$19$2e$1$2e$10_react$40$19$2e$1$2e$1$2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_registerAbortHandler"])(promise, onAbort);
        });
        continuablePromiseMap.set(promise, continuablePromise);
    }
    return continuablePromise;
};
function useAtomValue(atom, options) {
    const { delay, unstable_promiseStatus: promiseStatus = !__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use } = options || {};
    const store = useStore(options);
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])((prev)=>{
        const nextValue = store.get(atom);
        if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom) {
            return prev;
        }
        return [
            nextValue,
            store,
            atom
        ];
    }, void 0, ()=>[
            store.get(atom),
            store,
            atom
        ]);
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom) {
        rerender();
        value = store.get(atom);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = store.sub(atom, ()=>{
            if (promiseStatus) {
                try {
                    const value2 = store.get(atom);
                    if (isPromiseLike(value2)) {
                        attachPromiseStatus(createContinuablePromise(value2, ()=>store.get(atom)));
                    }
                } catch (e) {}
            }
            if (typeof delay === "number") {
                setTimeout(rerender, delay);
                return;
            }
            rerender();
        });
        rerender();
        return unsub;
    }, [
        store,
        atom,
        delay,
        promiseStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(value);
    if (isPromiseLike(value)) {
        const promise = createContinuablePromise(value, ()=>store.get(atom));
        if (promiseStatus) {
            attachPromiseStatus(promise);
        }
        return use(promise);
    }
    return value;
}
function useSetAtom(atom, options) {
    const store = useStore(options);
    const setAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("write" in atom)) {
            throw new Error("not writable atom");
        }
        return store.set(atom, ...args);
    }, [
        store,
        atom
    ]);
    return setAtom;
}
function useAtom(atom, options) {
    return [
        useAtomValue(atom, options),
        // We do wrong type assertion here, which results in throwing an error.
        useSetAtom(atom, options)
    ];
}
;
}),
"[project]/Developer/Portfolio 2/node_modules/.pnpm/next-themes@0.4.6_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>J,
    "useTheme",
    ()=>z
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Portfolio 2/node_modules/.pnpm/next@15.5.0_@babel+core@7.27.4_react-dom@19.1.1_react@19.1.1__react@19.1.1/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
var M = (e, i, s, u, m, a, l, h)=>{
    let d = document.documentElement, w = [
        "light",
        "dark"
    ];
    function p(n) {
        (Array.isArray(e) ? e : [
            e
        ]).forEach((y)=>{
            let k = y === "class", S = k && a ? m.map((f)=>a[f] || f) : m;
            k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
        }), R(n);
    }
    function R(n) {
        h && w.includes(n) && (d.style.colorScheme = n);
    }
    function c() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (u) p(u);
    else try {
        let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
        p(y);
    } catch (n) {}
};
var b = [
    "light",
    "dark"
], I = "(prefers-color-scheme: dark)", O = "undefined" == "undefined", x = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](void 0), U = {
    setTheme: (e)=>{},
    themes: []
}, z = ()=>{
    var e;
    return (e = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x)) != null ? e : U;
}, J = (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](x) ? __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], null, e.children) : __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](V, {
        ...e
    }), N = [
    "light",
    "dark"
], V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R })=>{
    let [c, n] = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>H(m, l)), [T, y] = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](()=>c === "system" ? E() : c), k = d ? Object.values(d) : a, S = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = o;
        if (!r) return;
        o === "system" && s && (r = E());
        let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g)=>{
            g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
        };
        if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
            let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
            P.style.colorScheme = D;
        }
        C == null || C();
    }, [
        p
    ]), f = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = typeof o == "function" ? o(c) : o;
        n(r);
        try {
            localStorage.setItem(m, r);
        } catch (v) {}
    }, [
        c
    ]), A = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((o)=>{
        let r = E(o);
        y(r), c === "system" && s && !e && S("system");
    }, [
        c,
        e
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = window.matchMedia(I);
        return o.addListener(A), A(o), ()=>o.removeListener(A);
    }, [
        A
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        let o = (r)=>{
            r.key === m && (r.newValue ? n(r.newValue) : f(l));
        };
        return window.addEventListener("storage", o), ()=>window.removeEventListener("storage", o);
    }, [
        f
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        S(e != null ? e : c);
    }, [
        e,
        c
    ]);
    let Q = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            theme: c,
            setTheme: f,
            forcedTheme: e,
            resolvedTheme: c === "system" ? T : c,
            themes: s ? [
                ...a,
                "system"
            ] : a,
            systemTheme: s ? T : void 0
        }), [
        c,
        f,
        e,
        T,
        s,
        a
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](x.Provider, {
        value: Q
    }, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"](_, {
        forcedTheme: e,
        storageKey: m,
        attribute: h,
        enableSystem: s,
        enableColorScheme: u,
        defaultTheme: l,
        value: d,
        themes: a,
        nonce: p,
        scriptProps: R
    }), w);
}, _ = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"](({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w })=>{
    let p = JSON.stringify([
        s,
        i,
        a,
        e,
        h,
        l,
        u,
        m
    ]).slice(1, -1);
    return __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Portfolio__2$2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$0_$40$babel$2b$core$40$7$2e$27$2e$4_react$2d$dom$40$19$2e$1$2e$1_react$40$19$2e$1$2e$1_$5f$react$40$19$2e$1$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"]("script", {
        ...w,
        suppressHydrationWarning: !0,
        nonce: ("TURBOPACK compile-time truthy", 1) ? d : "TURBOPACK unreachable",
        dangerouslySetInnerHTML: {
            __html: `(${M.toString()})(${p})`
        }
    });
}), H = (e, i)=>{
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
    let s;
}, W = (e)=>{
    let i = document.createElement("style");
    return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), ()=>{
        window.getComputedStyle(document.body), setTimeout(()=>{
            document.head.removeChild(i);
        }, 1);
    };
}, E = (e)=>(e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
;
}),
];

//# sourceMappingURL=ba0dc__pnpm_47d80bf5._.js.map