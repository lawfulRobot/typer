// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9w8YQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"bNKaB":[function(require,module,exports,__globalThis) {
var _randomWords = require("random-words");
const setSize = 10;
let wordSet = [];
let currentWord = '';
let typedWord = '';
let currentWordIdx = -1;
let isLastWord = false;
let isPlaying = true;
let isErrorTimerActive = false;
let isMuted = false;
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
function newWordSet() {
    wordSet = (0, _randomWords.generate)(setSize);
}
function updateDisplay(isWrong = false) {
    const inputDisplay = document.getElementById('input-display');
    if (isWrong) {
        const correctPart = currentWord.slice(0, typedWord.length - 1);
        const wrongPart = currentWord[typedWord.length - 1];
        const remainingPart = currentWord.slice(typedWord.length);
        inputDisplay.innerHTML = `<span class="correct">${correctPart}</span><span class="wrong">${wrongPart}</span><span class="remaining">${remainingPart}</span>`;
    } else inputDisplay.innerHTML = `<span class="correct">${typedWord}</span><span class="remaining">${currentWord.slice(typedWord.length)}</span>`;
}
function animateWord(word) {
    const wordElement = document.createElement('div');
    wordElement.className = 'falling-text';
    wordElement.textContent = word;
    document.body.appendChild(wordElement);
    // Generate random values for initial horizontal position and speed
    const randomInitialX = Math.random() * 80 + 10; // Random value between 10% and 90%
    const randomDuration = Math.random() * 1.5 + 1; // Random value between 1 and 1.5 seconds
    // Set initial position at the top of the screen
    wordElement.style.position = 'fixed';
    wordElement.style.left = `${randomInitialX}%`;
    wordElement.style.top = '0';
    wordElement.style.transform = 'translateX(-50%)';
    // Trigger the animation
    requestAnimationFrame(()=>{
        wordElement.style.transform = 'translateY(100vh)';
        wordElement.style.transitionDuration = `${randomDuration}s`;
        wordElement.style.opacity = '0';
    });
    // Remove the element after the animation
    wordElement.addEventListener('transitionend', ()=>{
        wordElement.remove();
    });
}
function playSound(key, duration) {
    if (isMuted) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = 'sine';
    // Map the key to a frequency
    const baseFrequency = 200; // Base frequency for 'a'
    const keyOffset = key.charCodeAt(0) - 'a'.charCodeAt(0);
    const frequency = baseFrequency + keyOffset * 20;
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
}
function setNewWord() {
    currentWordIdx++;
    if (currentWordIdx >= wordSet.length) {
        isLastWord = true;
        handleLastWord();
        return;
    }
    currentWord = wordSet[currentWordIdx];
    typedWord = '';
    updateDisplay();
}
function handleLastWord() {
    isPlaying = false;
    newWordSet();
    currentWordIdx = -1;
    isLastWord = false;
    setNewWord();
    isPlaying = true;
}
document.addEventListener('keydown', (event)=>{
    if (!isPlaying || event.repeat || isErrorTimerActive) return;
    if (!/^[a-zA-Z]$/.test(event.key)) return;
    typedWord += event.key.toLowerCase();
    if (currentWord.substr(0, typedWord.length) !== typedWord) {
        updateDisplay(true);
        isErrorTimerActive = true;
        playSound(event.key.toLowerCase(), 0.25);
        setTimeout(()=>{
            isErrorTimerActive = false;
            if (isLastWord) {
                handleLastWord();
                return;
            }
            setNewWord();
        }, 1000);
        return;
    }
    animateWord(event.key);
    playSound(event.key.toLowerCase(), 0.1);
    if (typedWord === currentWord) {
        if (isLastWord) {
            handleLastWord();
            return;
        }
        if (currentWordIdx >= 0 && currentWordIdx < wordSet.length) animateWord(currentWord);
        setNewWord();
    }
    updateDisplay();
});
function toggleMute() {
    isMuted = !isMuted;
    const muteButton = document.getElementById('mute-button');
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
}
function init() {
    newWordSet();
    setNewWord();
    const muteButton = document.getElementById('mute-button');
    muteButton.addEventListener('click', toggleMute);
}
document.addEventListener('DOMContentLoaded', init);

},{"random-words":"7mvjr"}],"7mvjr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wordList", ()=>wordList);
parcelHelpers.export(exports, "generate", ()=>generate);
parcelHelpers.export(exports, "count", ()=>count);
var _seedrandom = require("seedrandom");
var _seedrandomDefault = parcelHelpers.interopDefault(_seedrandom);
const wordList = [
    "ability",
    "able",
    "aboard",
    "about",
    "above",
    "accept",
    "accident",
    "according",
    "account",
    "accurate",
    "acres",
    "across",
    "act",
    "action",
    "active",
    "activity",
    "actual",
    "actually",
    "add",
    "addition",
    "additional",
    "adjective",
    "adult",
    "adventure",
    "advice",
    "affect",
    "afraid",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "ago",
    "agree",
    "ahead",
    "aid",
    "air",
    "airplane",
    "alike",
    "alive",
    "all",
    "allow",
    "almost",
    "alone",
    "along",
    "aloud",
    "alphabet",
    "already",
    "also",
    "although",
    "am",
    "among",
    "amount",
    "ancient",
    "angle",
    "angry",
    "animal",
    "announced",
    "another",
    "answer",
    "ants",
    "any",
    "anybody",
    "anyone",
    "anything",
    "anyway",
    "anywhere",
    "apart",
    "apartment",
    "appearance",
    "apple",
    "applied",
    "appropriate",
    "are",
    "area",
    "arm",
    "army",
    "around",
    "arrange",
    "arrangement",
    "arrive",
    "arrow",
    "art",
    "article",
    "as",
    "aside",
    "ask",
    "asleep",
    "at",
    "ate",
    "atmosphere",
    "atom",
    "atomic",
    "attached",
    "attack",
    "attempt",
    "attention",
    "audience",
    "author",
    "automobile",
    "available",
    "average",
    "avoid",
    "aware",
    "away",
    "baby",
    "back",
    "bad",
    "badly",
    "bag",
    "balance",
    "ball",
    "balloon",
    "band",
    "bank",
    "bar",
    "bare",
    "bark",
    "barn",
    "base",
    "baseball",
    "basic",
    "basis",
    "basket",
    "bat",
    "battle",
    "be",
    "bean",
    "bear",
    "beat",
    "beautiful",
    "beauty",
    "became",
    "because",
    "become",
    "becoming",
    "bee",
    "been",
    "before",
    "began",
    "beginning",
    "begun",
    "behavior",
    "behind",
    "being",
    "believed",
    "bell",
    "belong",
    "below",
    "belt",
    "bend",
    "beneath",
    "bent",
    "beside",
    "best",
    "bet",
    "better",
    "between",
    "beyond",
    "bicycle",
    "bigger",
    "biggest",
    "bill",
    "birds",
    "birth",
    "birthday",
    "bit",
    "bite",
    "black",
    "blank",
    "blanket",
    "blew",
    "blind",
    "block",
    "blood",
    "blow",
    "blue",
    "board",
    "boat",
    "body",
    "bone",
    "book",
    "border",
    "born",
    "both",
    "bottle",
    "bottom",
    "bound",
    "bow",
    "bowl",
    "box",
    "boy",
    "brain",
    "branch",
    "brass",
    "brave",
    "bread",
    "break",
    "breakfast",
    "breath",
    "breathe",
    "breathing",
    "breeze",
    "brick",
    "bridge",
    "brief",
    "bright",
    "bring",
    "broad",
    "broke",
    "broken",
    "brother",
    "brought",
    "brown",
    "brush",
    "buffalo",
    "build",
    "building",
    "built",
    "buried",
    "burn",
    "burst",
    "bus",
    "bush",
    "business",
    "busy",
    "but",
    "butter",
    "buy",
    "by",
    "cabin",
    "cage",
    "cake",
    "call",
    "calm",
    "came",
    "camera",
    "camp",
    "can",
    "canal",
    "cannot",
    "cap",
    "capital",
    "captain",
    "captured",
    "car",
    "carbon",
    "card",
    "care",
    "careful",
    "carefully",
    "carried",
    "carry",
    "case",
    "cast",
    "castle",
    "cat",
    "catch",
    "cattle",
    "caught",
    "cause",
    "cave",
    "cell",
    "cent",
    "center",
    "central",
    "century",
    "certain",
    "certainly",
    "chain",
    "chair",
    "chamber",
    "chance",
    "change",
    "changing",
    "chapter",
    "character",
    "characteristic",
    "charge",
    "chart",
    "check",
    "cheese",
    "chemical",
    "chest",
    "chicken",
    "chief",
    "child",
    "children",
    "choice",
    "choose",
    "chose",
    "chosen",
    "church",
    "circle",
    "circus",
    "citizen",
    "city",
    "class",
    "classroom",
    "claws",
    "clay",
    "clean",
    "clear",
    "clearly",
    "climate",
    "climb",
    "clock",
    "close",
    "closely",
    "closer",
    "cloth",
    "clothes",
    "clothing",
    "cloud",
    "club",
    "coach",
    "coal",
    "coast",
    "coat",
    "coffee",
    "cold",
    "collect",
    "college",
    "colony",
    "color",
    "column",
    "combination",
    "combine",
    "come",
    "comfortable",
    "coming",
    "command",
    "common",
    "community",
    "company",
    "compare",
    "compass",
    "complete",
    "completely",
    "complex",
    "composed",
    "composition",
    "compound",
    "concerned",
    "condition",
    "congress",
    "connected",
    "consider",
    "consist",
    "consonant",
    "constantly",
    "construction",
    "contain",
    "continent",
    "continued",
    "contrast",
    "control",
    "conversation",
    "cook",
    "cookies",
    "cool",
    "copper",
    "copy",
    "corn",
    "corner",
    "correct",
    "correctly",
    "cost",
    "cotton",
    "could",
    "count",
    "country",
    "couple",
    "courage",
    "course",
    "court",
    "cover",
    "cow",
    "cowboy",
    "crack",
    "cream",
    "create",
    "creature",
    "crew",
    "crop",
    "cross",
    "crowd",
    "cry",
    "cup",
    "curious",
    "current",
    "curve",
    "customs",
    "cut",
    "cutting",
    "daily",
    "damage",
    "dance",
    "danger",
    "dangerous",
    "dark",
    "darkness",
    "date",
    "daughter",
    "dawn",
    "day",
    "dead",
    "deal",
    "dear",
    "death",
    "decide",
    "declared",
    "deep",
    "deeply",
    "deer",
    "definition",
    "degree",
    "depend",
    "depth",
    "describe",
    "desert",
    "design",
    "desk",
    "detail",
    "determine",
    "develop",
    "development",
    "diagram",
    "diameter",
    "did",
    "die",
    "differ",
    "difference",
    "different",
    "difficult",
    "difficulty",
    "dig",
    "dinner",
    "direct",
    "direction",
    "directly",
    "dirt",
    "dirty",
    "disappear",
    "discover",
    "discovery",
    "discuss",
    "discussion",
    "disease",
    "dish",
    "distance",
    "distant",
    "divide",
    "division",
    "do",
    "doctor",
    "does",
    "dog",
    "doing",
    "doll",
    "dollar",
    "done",
    "donkey",
    "door",
    "dot",
    "double",
    "doubt",
    "down",
    "dozen",
    "draw",
    "drawn",
    "dream",
    "dress",
    "drew",
    "dried",
    "drink",
    "drive",
    "driven",
    "driver",
    "driving",
    "drop",
    "dropped",
    "drove",
    "dry",
    "duck",
    "due",
    "dug",
    "dull",
    "during",
    "dust",
    "duty",
    "each",
    "eager",
    "ear",
    "earlier",
    "early",
    "earn",
    "earth",
    "easier",
    "easily",
    "east",
    "easy",
    "eat",
    "eaten",
    "edge",
    "education",
    "effect",
    "effort",
    "egg",
    "eight",
    "either",
    "electric",
    "electricity",
    "element",
    "elephant",
    "eleven",
    "else",
    "empty",
    "end",
    "enemy",
    "energy",
    "engine",
    "engineer",
    "enjoy",
    "enough",
    "enter",
    "entire",
    "entirely",
    "environment",
    "equal",
    "equally",
    "equator",
    "equipment",
    "escape",
    "especially",
    "essential",
    "establish",
    "even",
    "evening",
    "event",
    "eventually",
    "ever",
    "every",
    "everybody",
    "everyone",
    "everything",
    "everywhere",
    "evidence",
    "exact",
    "exactly",
    "examine",
    "example",
    "excellent",
    "except",
    "exchange",
    "excited",
    "excitement",
    "exciting",
    "exclaimed",
    "exercise",
    "exist",
    "expect",
    "experience",
    "experiment",
    "explain",
    "explanation",
    "explore",
    "express",
    "expression",
    "extra",
    "eye",
    "face",
    "facing",
    "fact",
    "factor",
    "factory",
    "failed",
    "fair",
    "fairly",
    "fall",
    "fallen",
    "familiar",
    "family",
    "famous",
    "far",
    "farm",
    "farmer",
    "farther",
    "fast",
    "fastened",
    "faster",
    "fat",
    "father",
    "favorite",
    "fear",
    "feathers",
    "feature",
    "fed",
    "feed",
    "feel",
    "feet",
    "fell",
    "fellow",
    "felt",
    "fence",
    "few",
    "fewer",
    "field",
    "fierce",
    "fifteen",
    "fifth",
    "fifty",
    "fight",
    "fighting",
    "figure",
    "fill",
    "film",
    "final",
    "finally",
    "find",
    "fine",
    "finest",
    "finger",
    "finish",
    "fire",
    "fireplace",
    "firm",
    "first",
    "fish",
    "five",
    "fix",
    "flag",
    "flame",
    "flat",
    "flew",
    "flies",
    "flight",
    "floating",
    "floor",
    "flow",
    "flower",
    "fly",
    "fog",
    "folks",
    "follow",
    "food",
    "foot",
    "football",
    "for",
    "force",
    "foreign",
    "forest",
    "forget",
    "forgot",
    "forgotten",
    "form",
    "former",
    "fort",
    "forth",
    "forty",
    "forward",
    "fought",
    "found",
    "four",
    "fourth",
    "fox",
    "frame",
    "free",
    "freedom",
    "frequently",
    "fresh",
    "friend",
    "friendly",
    "frighten",
    "frog",
    "from",
    "front",
    "frozen",
    "fruit",
    "fuel",
    "full",
    "fully",
    "fun",
    "function",
    "funny",
    "fur",
    "furniture",
    "further",
    "future",
    "gain",
    "game",
    "garage",
    "garden",
    "gas",
    "gasoline",
    "gate",
    "gather",
    "gave",
    "general",
    "generally",
    "gentle",
    "gently",
    "get",
    "getting",
    "giant",
    "gift",
    "girl",
    "give",
    "given",
    "giving",
    "glad",
    "glass",
    "globe",
    "go",
    "goes",
    "gold",
    "golden",
    "gone",
    "good",
    "goose",
    "got",
    "government",
    "grabbed",
    "grade",
    "gradually",
    "grain",
    "grandfather",
    "grandmother",
    "graph",
    "grass",
    "gravity",
    "gray",
    "great",
    "greater",
    "greatest",
    "greatly",
    "green",
    "grew",
    "ground",
    "group",
    "grow",
    "grown",
    "growth",
    "guard",
    "guess",
    "guide",
    "gulf",
    "gun",
    "habit",
    "had",
    "hair",
    "half",
    "halfway",
    "hall",
    "hand",
    "handle",
    "handsome",
    "hang",
    "happen",
    "happened",
    "happily",
    "happy",
    "harbor",
    "hard",
    "harder",
    "hardly",
    "has",
    "hat",
    "have",
    "having",
    "hay",
    "he",
    "headed",
    "heading",
    "health",
    "heard",
    "hearing",
    "heart",
    "heat",
    "heavy",
    "height",
    "held",
    "hello",
    "help",
    "helpful",
    "her",
    "herd",
    "here",
    "herself",
    "hidden",
    "hide",
    "high",
    "higher",
    "highest",
    "highway",
    "hill",
    "him",
    "himself",
    "his",
    "history",
    "hit",
    "hold",
    "hole",
    "hollow",
    "home",
    "honor",
    "hope",
    "horn",
    "horse",
    "hospital",
    "hot",
    "hour",
    "house",
    "how",
    "however",
    "huge",
    "human",
    "hundred",
    "hung",
    "hungry",
    "hunt",
    "hunter",
    "hurried",
    "hurry",
    "hurt",
    "husband",
    "ice",
    "idea",
    "identity",
    "if",
    "ill",
    "image",
    "imagine",
    "immediately",
    "importance",
    "important",
    "impossible",
    "improve",
    "in",
    "inch",
    "include",
    "including",
    "income",
    "increase",
    "indeed",
    "independent",
    "indicate",
    "individual",
    "industrial",
    "industry",
    "influence",
    "information",
    "inside",
    "instance",
    "instant",
    "instead",
    "instrument",
    "interest",
    "interior",
    "into",
    "introduced",
    "invented",
    "involved",
    "iron",
    "is",
    "island",
    "it",
    "its",
    "itself",
    "jack",
    "jar",
    "jet",
    "job",
    "join",
    "joined",
    "journey",
    "joy",
    "judge",
    "jump",
    "jungle",
    "just",
    "keep",
    "kept",
    "key",
    "kids",
    "kill",
    "kind",
    "kitchen",
    "knew",
    "knife",
    "know",
    "knowledge",
    "known",
    "label",
    "labor",
    "lack",
    "lady",
    "laid",
    "lake",
    "lamp",
    "land",
    "language",
    "large",
    "larger",
    "largest",
    "last",
    "late",
    "later",
    "laugh",
    "law",
    "lay",
    "layers",
    "lead",
    "leader",
    "leaf",
    "learn",
    "least",
    "leather",
    "leave",
    "leaving",
    "led",
    "left",
    "leg",
    "length",
    "lesson",
    "let",
    "letter",
    "level",
    "library",
    "lie",
    "life",
    "lift",
    "light",
    "like",
    "likely",
    "limited",
    "line",
    "lion",
    "lips",
    "liquid",
    "list",
    "listen",
    "little",
    "live",
    "living",
    "load",
    "local",
    "locate",
    "location",
    "log",
    "lonely",
    "long",
    "longer",
    "look",
    "loose",
    "lose",
    "loss",
    "lost",
    "lot",
    "loud",
    "love",
    "lovely",
    "low",
    "lower",
    "luck",
    "lucky",
    "lunch",
    "lungs",
    "lying",
    "machine",
    "machinery",
    "mad",
    "made",
    "magic",
    "magnet",
    "mail",
    "main",
    "mainly",
    "major",
    "make",
    "making",
    "man",
    "managed",
    "manner",
    "manufacturing",
    "many",
    "map",
    "mark",
    "market",
    "married",
    "mass",
    "massage",
    "master",
    "material",
    "mathematics",
    "matter",
    "may",
    "maybe",
    "me",
    "meal",
    "mean",
    "means",
    "meant",
    "measure",
    "meat",
    "medicine",
    "meet",
    "melted",
    "member",
    "memory",
    "men",
    "mental",
    "merely",
    "met",
    "metal",
    "method",
    "mice",
    "middle",
    "might",
    "mighty",
    "mile",
    "military",
    "milk",
    "mill",
    "mind",
    "mine",
    "minerals",
    "minute",
    "mirror",
    "missing",
    "mission",
    "mistake",
    "mix",
    "mixture",
    "model",
    "modern",
    "molecular",
    "moment",
    "money",
    "monkey",
    "month",
    "mood",
    "moon",
    "more",
    "morning",
    "most",
    "mostly",
    "mother",
    "motion",
    "motor",
    "mountain",
    "mouse",
    "mouth",
    "move",
    "movement",
    "movie",
    "moving",
    "mud",
    "muscle",
    "music",
    "musical",
    "must",
    "my",
    "myself",
    "mysterious",
    "nails",
    "name",
    "nation",
    "national",
    "native",
    "natural",
    "naturally",
    "nature",
    "near",
    "nearby",
    "nearer",
    "nearest",
    "nearly",
    "necessary",
    "neck",
    "needed",
    "needle",
    "needs",
    "negative",
    "neighbor",
    "neighborhood",
    "nervous",
    "nest",
    "never",
    "new",
    "news",
    "newspaper",
    "next",
    "nice",
    "night",
    "nine",
    "no",
    "nobody",
    "nodded",
    "noise",
    "none",
    "noon",
    "nor",
    "north",
    "nose",
    "not",
    "note",
    "noted",
    "nothing",
    "notice",
    "noun",
    "now",
    "number",
    "numeral",
    "nuts",
    "object",
    "observe",
    "obtain",
    "occasionally",
    "occur",
    "ocean",
    "of",
    "off",
    "offer",
    "office",
    "officer",
    "official",
    "oil",
    "old",
    "older",
    "oldest",
    "on",
    "once",
    "one",
    "only",
    "onto",
    "open",
    "operation",
    "opinion",
    "opportunity",
    "opposite",
    "or",
    "orange",
    "orbit",
    "order",
    "ordinary",
    "organization",
    "organized",
    "origin",
    "original",
    "other",
    "ought",
    "our",
    "ourselves",
    "out",
    "outer",
    "outline",
    "outside",
    "over",
    "own",
    "owner",
    "oxygen",
    "pack",
    "package",
    "page",
    "paid",
    "pain",
    "paint",
    "pair",
    "palace",
    "pale",
    "pan",
    "paper",
    "paragraph",
    "parallel",
    "parent",
    "park",
    "part",
    "particles",
    "particular",
    "particularly",
    "partly",
    "parts",
    "party",
    "pass",
    "passage",
    "past",
    "path",
    "pattern",
    "pay",
    "peace",
    "pen",
    "pencil",
    "people",
    "per",
    "percent",
    "perfect",
    "perfectly",
    "perhaps",
    "period",
    "person",
    "personal",
    "pet",
    "phrase",
    "physical",
    "piano",
    "pick",
    "picture",
    "pictured",
    "pie",
    "piece",
    "pig",
    "pile",
    "pilot",
    "pine",
    "pink",
    "pipe",
    "pitch",
    "place",
    "plain",
    "plan",
    "plane",
    "planet",
    "planned",
    "planning",
    "plant",
    "plastic",
    "plate",
    "plates",
    "play",
    "pleasant",
    "please",
    "pleasure",
    "plenty",
    "plural",
    "plus",
    "pocket",
    "poem",
    "poet",
    "poetry",
    "point",
    "pole",
    "police",
    "policeman",
    "political",
    "pond",
    "pony",
    "pool",
    "poor",
    "popular",
    "population",
    "porch",
    "port",
    "position",
    "positive",
    "possible",
    "possibly",
    "post",
    "pot",
    "potatoes",
    "pound",
    "pour",
    "powder",
    "power",
    "powerful",
    "practical",
    "practice",
    "prepare",
    "present",
    "president",
    "press",
    "pressure",
    "pretty",
    "prevent",
    "previous",
    "price",
    "pride",
    "primitive",
    "principal",
    "principle",
    "printed",
    "private",
    "prize",
    "probably",
    "problem",
    "process",
    "produce",
    "product",
    "production",
    "program",
    "progress",
    "promised",
    "proper",
    "properly",
    "property",
    "protection",
    "proud",
    "prove",
    "provide",
    "public",
    "pull",
    "pupil",
    "pure",
    "purple",
    "purpose",
    "push",
    "put",
    "putting",
    "quarter",
    "queen",
    "question",
    "quick",
    "quickly",
    "quiet",
    "quietly",
    "quite",
    "rabbit",
    "race",
    "radio",
    "railroad",
    "rain",
    "raise",
    "ran",
    "ranch",
    "range",
    "rapidly",
    "rate",
    "rather",
    "raw",
    "rays",
    "reach",
    "read",
    "reader",
    "ready",
    "real",
    "realize",
    "rear",
    "reason",
    "recall",
    "receive",
    "recent",
    "recently",
    "recognize",
    "record",
    "red",
    "refer",
    "refused",
    "region",
    "regular",
    "related",
    "relationship",
    "religious",
    "remain",
    "remarkable",
    "remember",
    "remove",
    "repeat",
    "replace",
    "replied",
    "report",
    "represent",
    "require",
    "research",
    "respect",
    "rest",
    "result",
    "return",
    "review",
    "rhyme",
    "rhythm",
    "rice",
    "rich",
    "ride",
    "riding",
    "right",
    "ring",
    "rise",
    "rising",
    "river",
    "road",
    "roar",
    "rock",
    "rocket",
    "rocky",
    "rod",
    "roll",
    "roof",
    "room",
    "root",
    "rope",
    "rose",
    "rough",
    "round",
    "route",
    "row",
    "rubbed",
    "rubber",
    "rule",
    "ruler",
    "run",
    "running",
    "rush",
    "sad",
    "saddle",
    "safe",
    "safety",
    "said",
    "sail",
    "sale",
    "salmon",
    "salt",
    "same",
    "sand",
    "sang",
    "sat",
    "satellites",
    "satisfied",
    "save",
    "saved",
    "saw",
    "say",
    "scale",
    "scared",
    "scene",
    "school",
    "science",
    "scientific",
    "scientist",
    "score",
    "screen",
    "sea",
    "search",
    "season",
    "seat",
    "second",
    "secret",
    "section",
    "see",
    "seed",
    "seeing",
    "seems",
    "seen",
    "seldom",
    "select",
    "selection",
    "sell",
    "send",
    "sense",
    "sent",
    "sentence",
    "separate",
    "series",
    "serious",
    "serve",
    "service",
    "sets",
    "setting",
    "settle",
    "settlers",
    "seven",
    "several",
    "shade",
    "shadow",
    "shake",
    "shaking",
    "shall",
    "shallow",
    "shape",
    "share",
    "sharp",
    "she",
    "sheep",
    "sheet",
    "shelf",
    "shells",
    "shelter",
    "shine",
    "shinning",
    "ship",
    "shirt",
    "shoe",
    "shoot",
    "shop",
    "shore",
    "short",
    "shorter",
    "shot",
    "should",
    "shoulder",
    "shout",
    "show",
    "shown",
    "shut",
    "sick",
    "sides",
    "sight",
    "sign",
    "signal",
    "silence",
    "silent",
    "silk",
    "silly",
    "silver",
    "similar",
    "simple",
    "simplest",
    "simply",
    "since",
    "sing",
    "single",
    "sink",
    "sister",
    "sit",
    "sitting",
    "situation",
    "six",
    "size",
    "skill",
    "skin",
    "sky",
    "slabs",
    "slave",
    "sleep",
    "slept",
    "slide",
    "slight",
    "slightly",
    "slip",
    "slipped",
    "slope",
    "slow",
    "slowly",
    "small",
    "smaller",
    "smallest",
    "smell",
    "smile",
    "smoke",
    "smooth",
    "snake",
    "snow",
    "so",
    "soap",
    "social",
    "society",
    "soft",
    "softly",
    "soil",
    "solar",
    "sold",
    "soldier",
    "solid",
    "solution",
    "solve",
    "some",
    "somebody",
    "somehow",
    "someone",
    "something",
    "sometime",
    "somewhere",
    "son",
    "song",
    "soon",
    "sort",
    "sound",
    "source",
    "south",
    "southern",
    "space",
    "speak",
    "special",
    "species",
    "specific",
    "speech",
    "speed",
    "spell",
    "spend",
    "spent",
    "spider",
    "spin",
    "spirit",
    "spite",
    "split",
    "spoken",
    "sport",
    "spread",
    "spring",
    "square",
    "stage",
    "stairs",
    "stand",
    "standard",
    "star",
    "stared",
    "start",
    "state",
    "statement",
    "station",
    "stay",
    "steady",
    "steam",
    "steel",
    "steep",
    "stems",
    "step",
    "stepped",
    "stick",
    "stiff",
    "still",
    "stock",
    "stomach",
    "stone",
    "stood",
    "stop",
    "stopped",
    "store",
    "storm",
    "story",
    "stove",
    "straight",
    "strange",
    "stranger",
    "straw",
    "stream",
    "street",
    "strength",
    "stretch",
    "strike",
    "string",
    "strip",
    "strong",
    "stronger",
    "struck",
    "structure",
    "struggle",
    "stuck",
    "student",
    "studied",
    "studying",
    "subject",
    "substance",
    "success",
    "successful",
    "such",
    "sudden",
    "suddenly",
    "sugar",
    "suggest",
    "suit",
    "sum",
    "summer",
    "sun",
    "sunlight",
    "supper",
    "supply",
    "support",
    "suppose",
    "sure",
    "surface",
    "surprise",
    "surrounded",
    "swam",
    "sweet",
    "swept",
    "swim",
    "swimming",
    "swing",
    "swung",
    "syllable",
    "symbol",
    "system",
    "table",
    "tail",
    "take",
    "taken",
    "tales",
    "talk",
    "tall",
    "tank",
    "tape",
    "task",
    "taste",
    "taught",
    "tax",
    "tea",
    "teach",
    "teacher",
    "team",
    "tears",
    "teeth",
    "telephone",
    "television",
    "tell",
    "temperature",
    "ten",
    "tent",
    "term",
    "terrible",
    "test",
    "than",
    "thank",
    "that",
    "thee",
    "them",
    "themselves",
    "then",
    "theory",
    "there",
    "therefore",
    "these",
    "they",
    "thick",
    "thin",
    "thing",
    "think",
    "third",
    "thirty",
    "this",
    "those",
    "thou",
    "though",
    "thought",
    "thousand",
    "thread",
    "three",
    "threw",
    "throat",
    "through",
    "throughout",
    "throw",
    "thrown",
    "thumb",
    "thus",
    "thy",
    "tide",
    "tie",
    "tight",
    "tightly",
    "till",
    "time",
    "tin",
    "tiny",
    "tip",
    "tired",
    "title",
    "to",
    "tobacco",
    "today",
    "together",
    "told",
    "tomorrow",
    "tone",
    "tongue",
    "tonight",
    "too",
    "took",
    "tool",
    "top",
    "topic",
    "torn",
    "total",
    "touch",
    "toward",
    "tower",
    "town",
    "toy",
    "trace",
    "track",
    "trade",
    "traffic",
    "trail",
    "train",
    "transportation",
    "trap",
    "travel",
    "treated",
    "tree",
    "triangle",
    "tribe",
    "trick",
    "tried",
    "trip",
    "troops",
    "tropical",
    "trouble",
    "truck",
    "trunk",
    "truth",
    "try",
    "tube",
    "tune",
    "turn",
    "twelve",
    "twenty",
    "twice",
    "two",
    "type",
    "typical",
    "uncle",
    "under",
    "underline",
    "understanding",
    "unhappy",
    "union",
    "unit",
    "universe",
    "unknown",
    "unless",
    "until",
    "unusual",
    "up",
    "upon",
    "upper",
    "upward",
    "us",
    "use",
    "useful",
    "using",
    "usual",
    "usually",
    "valley",
    "valuable",
    "value",
    "vapor",
    "variety",
    "various",
    "vast",
    "vegetable",
    "verb",
    "vertical",
    "very",
    "vessels",
    "victory",
    "view",
    "village",
    "visit",
    "visitor",
    "voice",
    "volume",
    "vote",
    "vowel",
    "voyage",
    "wagon",
    "wait",
    "walk",
    "wall",
    "want",
    "war",
    "warm",
    "warn",
    "was",
    "wash",
    "waste",
    "watch",
    "water",
    "wave",
    "way",
    "we",
    "weak",
    "wealth",
    "wear",
    "weather",
    "week",
    "weigh",
    "weight",
    "welcome",
    "well",
    "went",
    "were",
    "west",
    "western",
    "wet",
    "whale",
    "what",
    "whatever",
    "wheat",
    "wheel",
    "when",
    "whenever",
    "where",
    "wherever",
    "whether",
    "which",
    "while",
    "whispered",
    "whistle",
    "white",
    "who",
    "whole",
    "whom",
    "whose",
    "why",
    "wide",
    "widely",
    "wife",
    "wild",
    "will",
    "willing",
    "win",
    "wind",
    "window",
    "wing",
    "winter",
    "wire",
    "wise",
    "wish",
    "with",
    "within",
    "without",
    "wolf",
    "women",
    "won",
    "wonder",
    "wonderful",
    "wood",
    "wooden",
    "wool",
    "word",
    "wore",
    "work",
    "worker",
    "world",
    "worried",
    "worry",
    "worse",
    "worth",
    "would",
    "wrapped",
    "write",
    "writer",
    "writing",
    "written",
    "wrong",
    "wrote",
    "yard",
    "year",
    "yellow",
    "yes",
    "yesterday",
    "yet",
    "you",
    "young",
    "younger",
    "your",
    "yourself",
    "youth",
    "zero",
    "zebra",
    "zipper",
    "zoo",
    "zulu"
];
const shortestWordSize = wordList.reduce((shortestWord, currentWord)=>currentWord.length < shortestWord.length ? currentWord : shortestWord).length;
const longestWordSize = wordList.reduce((longestWord, currentWord)=>currentWord.length > longestWord.length ? currentWord : longestWord).length;
function generate(options) {
    // initalize random number generator for words if options.seed is provided
    const random = options?.seed ? new (0, _seedrandomDefault.default)(options.seed) : null;
    const { minLength, maxLength, ...rest } = options || {};
    function word() {
        let min = typeof minLength !== "number" ? shortestWordSize : limitWordSize(minLength);
        const max = typeof maxLength !== "number" ? longestWordSize : limitWordSize(maxLength);
        if (min > max) min = max;
        let rightSize = false;
        let wordUsed;
        while(!rightSize){
            wordUsed = generateRandomWord();
            rightSize = wordUsed.length <= max && wordUsed.length >= min;
        }
        return wordUsed;
    }
    function generateRandomWord() {
        return wordList[randInt(wordList.length)];
    }
    // limits the size of words to the minimum and maximum possible
    function limitWordSize(wordSize) {
        if (wordSize < shortestWordSize) wordSize = shortestWordSize;
        if (wordSize > longestWordSize) wordSize = longestWordSize;
        return wordSize;
    }
    // random int as seeded by options.seed if applicable, or Math.random() otherwise
    function randInt(lessThan) {
        const r = random ? random() : Math.random();
        return Math.floor(r * lessThan);
    }
    // No arguments = generate one word
    if (options === undefined) return word();
    // Just a number = return that many words
    if (typeof options === "number") options = {
        exactly: options
    };
    else if (Object.keys(rest).length === 0) return word();
    // options supported: exactly, min, max, join
    if (options.exactly) {
        options.min = options.exactly;
        options.max = options.exactly;
    }
    // not a number = one word par string
    if (typeof options.wordsPerString !== "number") options.wordsPerString = 1;
    //not a function = returns the raw word
    if (typeof options.formatter !== "function") options.formatter = (word)=>word;
    //not a string = separator is a space
    if (typeof options.separator !== "string") options.separator = " ";
    const total = options.min + randInt(options.max + 1 - options.min);
    let results = [];
    let token = "";
    let relativeIndex = 0;
    for(let i = 0; i < total * options.wordsPerString; i++){
        if (relativeIndex === options.wordsPerString - 1) token += options.formatter(word(), relativeIndex);
        else token += options.formatter(word(), relativeIndex) + options.separator;
        relativeIndex++;
        if ((i + 1) % options.wordsPerString === 0) {
            results.push(token);
            token = "";
            relativeIndex = 0;
        }
    }
    if (typeof options.join === "string") results = results.join(options.join);
    return results;
}
function count(options) {
    let { minLength, maxLength } = options || {};
    if (typeof minLength !== "number") minLength = shortestWordSize;
    if (typeof maxLength !== "number") maxLength = longestWordSize;
    return wordList.filter((word)=>word.length >= minLength && word.length <= maxLength).length;
}

},{"seedrandom":"kcfU7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcfU7":[function(require,module,exports,__globalThis) {
// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.
// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = require("12650d0e2f5e5e92");
// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = require("2e9ff46cdee4aab4");
// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = require("a04af32374227880");
// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = require("65d05f6db8da652c");
// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = require("1e972c6b140abbe7");
// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = require("286eb9753e804cda");
// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = require("a0d0bb1ebcf7d3f9");
sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;
module.exports = sr;

},{"12650d0e2f5e5e92":"c47hP","2e9ff46cdee4aab4":"hy9Go","a04af32374227880":"8ktBo","65d05f6db8da652c":"i5aBa","1e972c6b140abbe7":"7tXtZ","286eb9753e804cda":"eVmNr","a0d0bb1ebcf7d3f9":"lbeKh"}],"c47hP":[function(require,module,exports,__globalThis) {
// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -
// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
(function(global, module1, define1) {
    function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
            var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
            me.s0 = me.s1;
            me.s1 = me.s2;
            return me.s2 = t - (me.c = t | 0);
        };
        // Apply the seeding algorithm from Baagoe.
        me.c = 1;
        me.s0 = mash(' ');
        me.s1 = mash(' ');
        me.s2 = mash(' ');
        me.s0 -= mash(seed);
        if (me.s0 < 0) me.s0 += 1;
        me.s1 -= mash(seed);
        if (me.s1 < 0) me.s1 += 1;
        me.s2 -= mash(seed);
        if (me.s2 < 0) me.s2 += 1;
        mash = null;
    }
    function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
    }
    function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
            return xg.next() * 0x100000000 | 0;
        };
        prng.double = function() {
            return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
        };
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    function Mash() {
        var n = 0xefc8249d;
        var mash = function(data) {
            data = String(data);
            for(var i = 0; i < data.length; i++){
                n += data.charCodeAt(i);
                var h = 0.02519603282416938 * n;
                n = h >>> 0;
                h -= n;
                h *= n;
                n = h >>> 0;
                h -= n;
                n += h * 0x100000000; // 2^32
            }
            return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
        };
        return mash;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.alea = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"hy9Go":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = '';
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        // Set up generator function.
        me.next = function() {
            var t = me.x ^ me.x << 11;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) // Integer seed.
        me.x = seed;
        else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 64; k++){
            me.x ^= strseed.charCodeAt(k) | 0;
            me.next();
        }
    }
    function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xor128 = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"8ktBo":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = '';
        // Set up generator function.
        me.next = function() {
            var t = me.x ^ me.x >>> 2;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            me.w = me.v;
            return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) // Integer seed.
        me.x = seed;
        else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 64; k++){
            me.x ^= strseed.charCodeAt(k) | 0;
            if (k == strseed.length) me.d = me.x << 10 ^ me.x >>> 4;
            me.next();
        }
    }
    function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xorwow = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"i5aBa":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this;
        // Set up generator function.
        me.next = function() {
            // Update xor generator.
            var X = me.x, i = me.i, t, v, w;
            t = X[i];
            t ^= t >>> 7;
            v = t ^ t << 24;
            t = X[i + 1 & 7];
            v ^= t ^ t >>> 10;
            t = X[i + 3 & 7];
            v ^= t ^ t >>> 3;
            t = X[i + 4 & 7];
            v ^= t ^ t << 7;
            t = X[i + 7 & 7];
            t = t ^ t << 13;
            v ^= t ^ t << 9;
            X[i] = v;
            me.i = i + 1 & 7;
            return v;
        };
        function init(me, seed) {
            var j, w, X = [];
            if (seed === (seed | 0)) // Seed state array using a 32-bit integer.
            w = X[0] = seed;
            else {
                // Seed state using a string.
                seed = '' + seed;
                for(j = 0; j < seed.length; ++j)X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
            // Enforce an array length of 8, not all zeroes.
            while(X.length < 8)X.push(0);
            for(j = 0; j < 8 && X[j] === 0; ++j);
            if (j == 8) w = X[7] = -1;
            else w = X[j];
            me.x = X;
            me.i = 0;
            // Discard an initial 256 values.
            for(j = 256; j > 0; --j)me.next();
        }
        init(me, seed);
    }
    function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
    }
    function impl(seed, opts) {
        if (seed == null) seed = +new Date;
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (state.x) copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xorshift7 = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"7tXtZ":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this;
        // Set up generator function.
        me.next = function() {
            var w = me.w, X = me.X, i = me.i, t, v;
            // Update Weyl generator.
            me.w = w = w + 0x61c88647 | 0;
            // Update xor generator.
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            // Update Xor generator array state.
            v = X[i] = v ^ t;
            me.i = i;
            // Result is the combination.
            return v + (w ^ w >>> 16) | 0;
        };
        function init(me, seed) {
            var t, v, i, j, w, X = [], limit = 128;
            if (seed === (seed | 0)) {
                // Numeric seeds initialize v, which is used to generates X.
                v = seed;
                seed = null;
            } else {
                // String seeds are mixed into v and X one character at a time.
                seed = seed + '\0';
                v = 0;
                limit = Math.max(limit, seed.length);
            }
            // Initialize circular array and weyl value.
            for(i = 0, j = -32; j < limit; ++j){
                // Put the unicode characters into the array, and shuffle them.
                if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
                // After 32 shuffles, take v as the starting w value.
                if (j === 0) w = v;
                v ^= v << 10;
                v ^= v >>> 15;
                v ^= v << 4;
                v ^= v >>> 13;
                if (j >= 0) {
                    w = w + 0x61c88647 | 0; // Weyl.
                    t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.
                    i = 0 == t ? i + 1 : 0; // Count zeroes.
                }
            }
            // We have detected all zeroes; make the key nonzero.
            if (i >= 128) X[(seed && seed.length || 0) & 127] = -1;
            // Run the generator 512 times to further mix the state before using it.
            // Factoring this as a function slows the main generator, so it is just
            // unrolled here.  The weyl generator is not advanced while warming up.
            i = 127;
            for(j = 512; j > 0; --j){
                v = X[i + 34 & 127];
                t = X[i = i + 1 & 127];
                v ^= v << 13;
                t ^= t << 17;
                v ^= v >>> 15;
                t ^= t >>> 12;
                X[i] = v ^ t;
            }
            // Storing state as object members is faster than using closure variables.
            me.w = w;
            me.X = X;
            me.i = i;
        }
        init(me, seed);
    }
    function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
    }
    function impl(seed, opts) {
        if (seed == null) seed = +new Date;
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (state.X) copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.xor4096 = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"eVmNr":[function(require,module,exports,__globalThis) {
// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
(function(global, module1, define1) {
    function XorGen(seed) {
        var me = this, strseed = '';
        // Set up generator function.
        me.next = function() {
            var b = me.b, c = me.c, d = me.d, a = me.a;
            b = b << 25 ^ b >>> 7 ^ c;
            c = c - d | 0;
            d = d << 24 ^ d >>> 8 ^ a;
            a = a - b | 0;
            me.b = b = b << 20 ^ b >>> 12 ^ c;
            me.c = c = c - d | 0;
            me.d = d << 16 ^ c >>> 16 ^ a;
            return me.a = a - b | 0;
        };
        /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */ me.a = 0;
        me.b = 0;
        me.c = -1640531527;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
            // Integer seed.
            me.a = seed / 0x100000000 | 0;
            me.b = seed | 0;
        } else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 20; k++){
            me.b ^= strseed.charCodeAt(k) | 0;
            me.next();
        }
    }
    function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 0x100000000;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 0x100000000, result = (top + bot) / 2097152;
            while (result === 0);
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {});
            };
        }
        return prng;
    }
    if (module1 && module1.exports) module1.exports = impl;
    else if (define1 && define1.amd) define1(function() {
        return impl;
    });
    else this.tychei = impl;
})(this, module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"lbeKh":[function(require,module,exports,__globalThis) {
/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/ (function(global, pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var width = 256, chunks = 6, digits = 52, rngname = 'random', startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto; // node.js crypto module, initialized at the bottom.
    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    function seedrandom(seed, options, callback) {
        var key = [];
        options = options == true ? {
            entropy: true
        } : options || {};
        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(options.entropy ? [
            seed,
            tostring(pool)
        ] : seed == null ? autoseed() : seed, 3), key);
        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);
        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng = function() {
            var n = arc4.g(chunks), d = startdenom, x = 0; //   and no 'extra last byte'.
            while(n < significance){
                n = (n + x) * width; //   shifting numerator and
                d *= width; //   denominator and generating a
                x = arc4.g(1); //   new least-significant-byte.
            }
            while(n >= overflow){
                n /= 2; //   last byte, shift everything
                d /= 2; //   right using integer math until
                x >>>= 1; //   we have exactly the desired bits.
            }
            return (n + x) / d; // Form the number within [0, 1).
        };
        prng.int32 = function() {
            return arc4.g(4) | 0;
        };
        prng.quick = function() {
            return arc4.g(4) / 0x100000000;
        };
        prng.double = prng;
        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);
        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback || function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) copy(state, arc4);
                // Only provide the .state method if requested via options.state.
                prng.state = function() {
                    return copy(arc4, {});
                };
            }
            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) {
                math[rngname] = prng;
                return seed;
            } else return prng;
        })(prng, shortseed, 'global' in options ? options.global : this == math, options.state);
    }
    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        // The empty key [] is treated as [0].
        if (!keylen) key = [
            keylen++
        ];
        // Set up S using the standard key scheduling algorithm.
        while(i < width)s[i] = i++;
        for(i = 0; i < width; i++){
            s[i] = s[j = mask & j + key[i % keylen] + (t = s[i])];
            s[j] = t;
        }
        // The "g" method returns the next (count) outputs as one number.
        (me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0, i = me.i, j = me.j, s = me.S;
            while(count--){
                t = s[i = mask & i + 1];
                r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
            }
            me.i = i;
            me.j = j;
            return r;
        // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
        })(width);
    }
    //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    }
    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == 'object') {
            for(prop in obj)try {
                result.push(flatten(obj[prop], depth - 1));
            } catch (e) {}
        }
        return result.length ? result : typ == 'string' ? obj : obj + '\0';
    }
    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    function mixkey(seed, key) {
        var stringseed = seed + '', smear, j = 0;
        while(j < stringseed.length)key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        return tostring(key);
    }
    //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //
    function autoseed() {
        try {
            var out;
            if (nodecrypto && (out = nodecrypto.randomBytes)) // The use of 'out' to remember randomBytes makes tight minified code.
            out = out(width);
            else {
                out = new Uint8Array(width);
                (global.crypto || global.msCrypto).getRandomValues(out);
            }
            return tostring(out);
        } catch (e) {
            var browser = global.navigator, plugins = browser && browser.plugins;
            return [
                +new Date,
                global,
                plugins,
                global.screen,
                tostring(pool)
            ];
        }
    }
    //
    // tostring()
    // Converts an array of charcodes to a string
    //
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }
    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);
    //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    if (0, module.exports) {
        module.exports = seedrandom;
        // When in node.js, try using crypto package for autoseeding.
        try {
            nodecrypto = require("55ffaba5e09143c0");
        } catch (ex) {}
    } else if (typeof define == 'function' && define.amd) define(function() {
        return seedrandom;
    });
    else // When included as a plain script, set up Math.seedrandom global.
    math['seed' + rngname] = seedrandom;
// End anonymous scope, and pass initial values.
})(// global: `self` in browsers (including strict mode and web workers),
// otherwise `this` in Node and other environments
typeof self !== 'undefined' ? self : this, [], Math // math: package containing random, pow, and seedrandom
);

},{"55ffaba5e09143c0":"jhUEF"}],"jhUEF":[function(require,module,exports,__globalThis) {
"use strict";

},{}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["9w8YQ","bNKaB"], "bNKaB", "parcelRequire94c2")

//# sourceMappingURL=index.0641b553.js.map
