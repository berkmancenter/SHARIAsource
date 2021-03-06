/* Copyright 2012 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(){"use strict"
var e=navigator.userAgent,t=/Android/.test(e),n=/Android\s[0-2][^\d]/.test(e),r=/Android\s[0-4][^\d]/.test(e),i=e.indexOf("Chrom")>=0,o=/Chrome\/(39|40)\./.test(e),a=e.indexOf("Trident")>=0,u=/\b(iPad|iPhone|iPod)(?=;)/.test(e),s=e.indexOf("Opera")>=0,c=/Safari\//.test(e)&&!/(Chrome\/|Android\s)/.test(e)
"undefined"==typeof PDFJS&&(("undefined"!=typeof window?window:this).PDFJS={}),function(){function e(e,t){return new n(this.slice(e,t))}function t(e,t){arguments.length<2&&(t=0)
for(var n=0,r=e.length;n<r;++n,++t)this[t]=255&e[n]}function n(n){var r,i,o
if("number"==typeof n)for(r=[],i=0;i<n;++i)r[i]=0
else if("slice"in n)r=n.slice(0)
else for(r=[],i=0,o=n.length;i<o;++i)r[i]=n[i]
return r.subarray=e,r.buffer=r,r.byteLength=r.length,r.set=t,"object"==typeof n&&n.buffer&&(r.buffer=n.buffer),r}if("undefined"!=typeof Uint8Array)return void 0===Uint8Array.prototype.subarray&&(Uint8Array.prototype.subarray=function(e,t){return new Uint8Array(this.slice(e,t))},Float32Array.prototype.subarray=function(e,t){return new Float32Array(this.slice(e,t))}),void("undefined"==typeof Float64Array&&(window.Float64Array=Float32Array))
window.Uint8Array=n,window.Int8Array=n,window.Uint32Array=n,window.Int32Array=n,window.Uint16Array=n,window.Float32Array=n,window.Float64Array=n}(),function(){window.URL||(window.URL=window.webkitURL)}(),function(){if(void 0!==Object.defineProperty){var e=!0
try{Object.defineProperty(new Image,"id",{value:"test"})
var t=function(){}
t.prototype={get id(){}},Object.defineProperty(new t,"id",{value:"",configurable:!0,enumerable:!0,writable:!1})}catch(t){e=!1}if(e)return}Object.defineProperty=function(e,t,n){delete e[t],"get"in n&&e.__defineGetter__(t,n.get),"set"in n&&e.__defineSetter__(t,n.set),"value"in n&&(e.__defineSetter__(t,function(e){return this.__defineGetter__(t,function(){return e}),e}),e[t]=n.value)}}(),function(){var e=XMLHttpRequest.prototype,t=new XMLHttpRequest
if("overrideMimeType"in t||Object.defineProperty(e,"overrideMimeType",{value:function(e){}}),!("responseType"in t)){if(PDFJS.disableWorker=!0,Object.defineProperty(e,"responseType",{get:function(){return this._responseType||"text"},set:function(e){"text"!==e&&"arraybuffer"!==e||(this._responseType=e,"arraybuffer"===e&&"function"==typeof this.overrideMimeType&&this.overrideMimeType("text/plain; charset=x-user-defined"))}}),"undefined"!=typeof VBArray)return void Object.defineProperty(e,"response",{get:function(){return"arraybuffer"===this.responseType?new Uint8Array(new VBArray(this.responseBody).toArray()):this.responseText}})
Object.defineProperty(e,"response",{get:function(){if("arraybuffer"!==this.responseType)return this.responseText
var e,t=this.responseText,n=t.length,r=new Uint8Array(n)
for(e=0;e<n;++e)r[e]=255&t.charCodeAt(e)
return r.buffer}})}}(),function(){if(!("btoa"in window)){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
window.btoa=function(t){var n,r,i=""
for(n=0,r=t.length;n<r;n+=3){var o=255&t.charCodeAt(n),a=255&t.charCodeAt(n+1),u=255&t.charCodeAt(n+2),s=o>>2,c=(3&o)<<4|a>>4,f=n+1<r?(15&a)<<2|u>>6:64,d=n+2<r?63&u:64
i+=e.charAt(s)+e.charAt(c)+e.charAt(f)+e.charAt(d)}return i}}}(),function(){if(!("atob"in window)){window.atob=function(e){if(e=e.replace(/=+$/,""),e.length%4==1)throw new Error("bad atob input")
for(var t,n,r=0,i=0,o="";n=e.charAt(i++);~n&&(t=r%4?64*t+n:n,r++%4)?o+=String.fromCharCode(255&t>>(-2*r&6)):0)n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n)
return o}}}(),function(){void 0===Function.prototype.bind&&(Function.prototype.bind=function(e){var t=this,n=Array.prototype.slice.call(arguments,1)
return function(){var r=n.concat(Array.prototype.slice.call(arguments))
return t.apply(e,r)}})}(),function(){"dataset"in document.createElement("div")||Object.defineProperty(HTMLElement.prototype,"dataset",{get:function(){if(this._dataset)return this._dataset
for(var e={},t=0,n=this.attributes.length;t<n;t++){var r=this.attributes[t]
"data-"===r.name.substring(0,5)&&(e[r.name.substring(5).replace(/\-([a-z])/g,function(e,t){return t.toUpperCase()})]=r.value)}return Object.defineProperty(this,"_dataset",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}(),function(){function e(e,t,n,r){var i=e.className||"",o=i.split(/\s+/g)
""===o[0]&&o.shift()
var a=o.indexOf(t)
return a<0&&n&&o.push(t),a>=0&&r&&o.splice(a,1),e.className=o.join(" "),a>=0}if(!("classList"in document.createElement("div"))){var t={add:function(t){e(this.element,t,!0,!1)},contains:function(t){return e(this.element,t,!1,!1)},remove:function(t){e(this.element,t,!1,!0)},toggle:function(t){e(this.element,t,!0,!0)}}
Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){if(this._classList)return this._classList
var e=Object.create(t,{element:{value:this,writable:!1,enumerable:!0}})
return Object.defineProperty(this,"_classList",{value:e,writable:!1,enumerable:!1}),e},enumerable:!0})}}(),function(){"console"in window?"bind"in console.log||(console.log=function(e){return function(t){return e(t)}}(console.log),console.error=function(e){return function(t){return e(t)}}(console.error),console.warn=function(e){return function(t){return e(t)}}(console.warn)):window.console={log:function(){},error:function(){},warn:function(){}}}(),function(){function e(e){t(e.target)&&e.stopPropagation()}function t(e){return e.disabled||e.parentNode&&t(e.parentNode)}s&&document.addEventListener("click",e,!0)}(),function(){a&&(PDFJS.disableCreateObjectURL=!0)}(),function(){"language"in navigator||(PDFJS.locale=navigator.userLanguage||"en-US")}(),function(){(c||n||o||u)&&(PDFJS.disableRange=!0,PDFJS.disableStream=!0)}(),function(){history.pushState&&!n||(PDFJS.disableHistory=!0)}(),function(){if(window.CanvasPixelArray)"function"!=typeof window.CanvasPixelArray.prototype.set&&(window.CanvasPixelArray.prototype.set=function(e){for(var t=0,n=this.length;t<n;t++)this[t]=e[t]})
else{var n,o=!1
if(i?(n=e.match(/Chrom(e|ium)\/([0-9]+)\./),o=n&&parseInt(n[2])<21):t?o=r:c&&(n=e.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//),o=n&&parseInt(n[1])<6),o){var a=window.CanvasRenderingContext2D.prototype,u=a.createImageData
a.createImageData=function(e,t){var n=u.call(this,e,t)
return n.data.set=function(e){for(var t=0,n=this.length;t<n;t++)this[t]=e[t]},n},a=null}}}(),function(){function e(e){window.setTimeout(e,20)}if(u)return void(window.requestAnimationFrame=e)
"requestAnimationFrame"in window||(window.requestAnimationFrame=window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||e)}(),function(){(u||t)&&(PDFJS.maxCanvasPixels=5242880)}(),function(){a&&window.parent!==window&&(PDFJS.disableFullscreen=!0)}(),function(){"currentScript"in document||Object.defineProperty(document,"currentScript",{get:function(){var e=document.getElementsByTagName("script")
return e[e.length-1]},enumerable:!0,configurable:!0})}(),function(){var e=document.createElement("input")
try{e.type="number"}catch(r){var t=e.constructor.prototype,n=Object.getOwnPropertyDescriptor(t,"type")
Object.defineProperty(t,"type",{get:function(){return n.get.call(this)},set:function(e){n.set.call(this,"number"===e?"text":e)},enumerable:!0,configurable:!0})}}(),function(){if(document.attachEvent){var e=document.constructor.prototype,t=Object.getOwnPropertyDescriptor(e,"readyState")
Object.defineProperty(e,"readyState",{get:function(){var e=t.get.call(this)
return"interactive"===e?"loading":e},set:function(e){t.set.call(this,e)},enumerable:!0,configurable:!0})}}()}).call("undefined"==typeof window?this:window)
