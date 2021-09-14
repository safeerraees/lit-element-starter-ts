/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new Map;class e{constructor(t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let i=s.get(this.cssText);return t&&void 0===i&&(s.set(this.cssText,i=new CSSStyleSheet),i.replaceSync(this.cssText)),i}toString(){return this.cssText}}const n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new e("string"==typeof t?t:t+"",i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var o,l;const h={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},r=(t,i)=>i!==t&&(i==i||t==t),a={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:r};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e))})),t}static createProperty(t,i=a){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||a}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(n(t))}else void 0!==t&&i.push(n(t));return i}static _$Eh(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1)}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{t?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$Eg(t,i,s=a){var e,n;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const l=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:h.toAttribute)(i,s.type);this._$Ei=t,null==l?this.removeAttribute(o):this.setAttribute(o,l),this._$Ei=null}}_$AK(t,i){var s,e,n;const o=this.constructor,l=o._$Eu.get(t);if(void 0!==l&&this._$Ei!==l){const t=o.getPropertyOptions(l),r=t.converter,a=null!==(n=null!==(e=null===(s=r)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof r?r:null)&&void 0!==n?n:h.fromAttribute;this._$Ei=l,this[l]=a(i,t.type),this._$Ei=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||r)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$ET()}catch(t){throw i=!1,this._$ET(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return!0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$ET()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var d,v;c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null===(o=globalThis.reactiveElementPlatformSupport)||void 0===o||o.call(globalThis,{ReactiveElement:c}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.0.0-rc.4");const u=globalThis.trustedTypes,f=u?u.createPolicy("lit-html",{createHTML:t=>t}):void 0,p=`lit$${(Math.random()+"").slice(9)}$`,g="?"+p,w=`<${g}>`,y=document,m=(t="")=>y.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,$=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,Z=/>/g,M=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,A=/"/g,x=/^(?:script|style|textarea)$/i,k=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),T=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),H=new WeakMap,E=y.createTreeWalker(y,129,null,!1),U=(t,i)=>{const s=t.length-1,e=[];let n,o=2===i?"<svg>":"",l=S;for(let i=0;i<s;i++){const s=t[i];let h,r,a=-1,c=0;for(;c<s.length&&(l.lastIndex=c,r=l.exec(s),null!==r);)c=l.lastIndex,l===S?"!--"===r[1]?l=_:void 0!==r[1]?l=Z:void 0!==r[2]?(x.test(r[2])&&(n=RegExp("</"+r[2],"g")),l=M):void 0!==r[3]&&(l=M):l===M?">"===r[0]?(l=null!=n?n:S,a=-1):void 0===r[1]?a=-2:(a=l.lastIndex-r[2].length,h=r[1],l=void 0===r[3]?M:'"'===r[3]?A:C):l===A||l===C?l=M:l===_||l===Z?l=S:(l=M,n=void 0);const d=l===M&&t[i+1].startsWith("/>")?" ":"";o+=l===S?s+w:a>=0?(e.push(h),s.slice(0,a)+"$lit$"+s.slice(a)+p+d):s+p+(-2===a?(e.push(void 0),i):d)}const h=o+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==f?f.createHTML(h):h,e]};class N{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let n=0,o=0;const l=t.length-1,h=this.parts,[r,a]=U(t,i);if(this.el=N.createElement(r,s),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=E.nextNode())&&h.length<l;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(p)){const s=a[o++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(p),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:n,name:i[2],strings:t,ctor:"."===i[1]?R:"?"===i[1]?V:"@"===i[1]?z:P})}else h.push({type:6,index:n})}for(const i of t)e.removeAttribute(i)}if(x.test(e.tagName)){const t=e.textContent.split(p),i=t.length-1;if(i>0){e.textContent=u?u.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],m()),E.nextNode(),h.push({type:2,index:++n});e.append(t[i],m())}}}else if(8===e.nodeType)if(e.data===g)h.push({type:2,index:n});else{let t=-1;for(;-1!==(t=e.data.indexOf(p,t+1));)h.push({type:7,index:n}),t+=p.length-1}n++}}static createElement(t,i){const s=y.createElement("template");return s.innerHTML=t,s}}function j(t,i,s=t,e){var n,o,l,h;if(i===T)return i;let r=void 0!==e?null===(n=s._$Cl)||void 0===n?void 0:n[e]:s._$Cu;const a=b(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==a&&(null===(o=null==r?void 0:r._$AO)||void 0===o||o.call(r,!1),void 0===a?r=void 0:(r=new a(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=j(t,r._$AS(t,i.values),r,e)),i}class O{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:y).importNode(s,!0);E.currentNode=n;let o=E.nextNode(),l=0,h=0,r=e[0];for(;void 0!==r;){if(l===r.index){let i;2===r.type?i=new B(o,o.nextSibling,this,t):1===r.type?i=new r.ctor(o,r.name,r.strings,this,t):6===r.type&&(i=new D(o,this,t)),this.v.push(i),r=e[++h]}l!==(null==r?void 0:r.index)&&(o=E.nextNode(),l++)}return n}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class B{constructor(t,i,s,e){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(n=null==e?void 0:e.isConnected)||void 0===n||n}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=j(this,t,i),b(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var i;return $(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==L&&b(this._$AH)?this._$AA.nextSibling.data=t:this.S(y.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===n)this._$AH.m(s);else{const t=new O(n,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t}}_$AC(t){let i=H.get(t.strings);return void 0===i&&H.set(t.strings,i=new N(t)),i}M(t){$(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new B(this.A(m()),this.A(m()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class P{constructor(t,i,s,e,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=j(this,t,i,0),o=!b(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const e=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=j(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),o||(o=!b(h)||h!==this._$AH[l]),h===L?t=L:t!==L&&(t+=(null!=h?h:"")+n[l+1]),this._$AH[l]=h}o&&!e&&this.k(t)}k(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends P{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===L?void 0:t}}class V extends P{constructor(){super(...arguments),this.type=4}k(t){t&&t!==L?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class z extends P{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=j(this,t,i,0))&&void 0!==s?s:L)===T)return;const e=this._$AH,n=t===L&&e!==L||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==L&&(e===L||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class D{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q,I,J;null===(d=globalThis.litHtmlPlatformSupport)||void 0===d||d.call(globalThis,N,B),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.0.0-rc.5");class K extends c{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=o._$litPart$;if(void 0===l){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=l=new B(i.insertBefore(m(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}K.finalized=!0,K._$litElement$=!0,null===(q=globalThis.litElementHydrateSupport)||void 0===q||q.call(globalThis,{LitElement:K}),null===(I=globalThis.litElementPlatformSupport)||void 0===I||I.call(globalThis,{LitElement:K}),(null!==(J=globalThis.litElementVersions)&&void 0!==J?J:globalThis.litElementVersions=[]).push("3.0.0-rc.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Y(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):W(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const F=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){var i;if(super(t),t.type!==F||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(t,[i]){var s,e;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in i)i[t]&&!(null===(s=this.et)||void 0===s?void 0:s.has(t))&&this.st.add(t);return this.render(i)}const n=t.element.classList;this.st.forEach((t=>{t in i||(n.remove(t),this.st.delete(t))}));for(const t in i){const s=!!i[t];s===this.st.has(t)||(null===(e=this.et)||void 0===e?void 0:e.has(t))||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return T}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Q=function(t,i,s,e){for(var n,o=arguments.length,l=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,h=t.length-1;h>=0;h--)(n=t[h])&&(l=(o<3?n(l):o>3?n(i,s,l):n(i,s))||l);return o>3&&l&&Object.defineProperty(i,s,l),l};let X=class extends K{constructor(){super(...arguments),this.apiKey="",this.platforms="",this.sdkDocs=!1,this.saveData=function(){const t=document.createElement("a");return document.body.appendChild(t),function(i,s){const e=window.URL.createObjectURL(i);t.href=e,t.download=s,t.click(),window.URL.revokeObjectURL(e)}}()}render(){const t=this.platforms.split(",");console.log(this.sdkDocs);const i=void 0!==t.find((t=>"dotNet"===t.trim())),s=void 0!==t.find((t=>"java"===t.trim())),e=void 0!==t.find((t=>"python"===t.trim())),n=void 0!==t.find((t=>"php"===t.trim())),o=void 0!==t.find((t=>"ruby"===t.trim())),l=void 0!==t.find((t=>"ts"===t.trim()));return k`
      ${i?k`<div
            id="cs_net_standard_lib"
            @click=${this._onClick}
            class=${G({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25.2"
            >
              <defs>
                <style>
                  .aDotNet {
                    fill: #00a4ef;
                  }
                </style>
              </defs>
              <path
                class="aDotNet"
                d="M0,2.293l6.6-.9,0,6.364L.006,7.8Zm6.595,6.2.005,6.37L.005,13.955V8.449Zm.8-7.215L16.142,0V7.677l-8.748.069Zm8.75,7.275,0,7.643L7.394,14.96,7.382,8.537Z"
              />
            </svg>
          </div>`:""}
      ${s?k`<div
            id="java_eclipse_jre_lib"
            @click=${this._onClick}
            class=${G({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 22 25"
            >
              <defs>
                <style>
                  .aJava {
                    fill: #e4463f;
                  }
                </style>
              </defs>
              <path
                class="aJava"
                d="M15.96,15.706a.262.262,0,0,0,.06-.076c3.01-1.493,1.618-2.927.647-2.734a2.368,2.368,0,0,0-.344.089.542.542,0,0,1,.257-.19C18.5,12.15,19.979,14.7,15.96,15.706Zm-1.754-4.539c.9,1.213-1.063,2.181-1.063,2.181a1.092,1.092,0,0,0,.2-1.616c-2.623-2.885,2.869-4.194,2.869-4.2C12.716,9.474,13.362,10.035,14.206,11.167ZM12.625,8.448c-2.6,1.964-.594,3.083,0,4.363-1.52-1.31-2.636-2.463-1.888-3.536,1.1-1.575,4.142-2.339,3.47-4.868C14.206,4.408,15.872,6,12.625,8.448Zm-1.835,4.391s-2.915.662-1.032.9a22.9,22.9,0,0,0,3.857-.04c1.207-.1,2.418-.3,2.418-.3a5.272,5.272,0,0,0-.733.375c-2.961.743-8.68.4-7.034-.363A5.739,5.739,0,0,1,10.789,12.839Zm.142,3.87a9.6,9.6,0,0,0,3.321-.134,5.969,5.969,0,0,0,.884.411c-3.141,1.285-7.108-.075-4.642-.733C10.495,16.253,9.882,16.593,10.931,16.708Zm-.457-1.542a13.574,13.574,0,0,0,4.286-.2,1.914,1.914,0,0,0,.66.384c-3.8,1.06-8.026.084-5.309-.778C10.111,14.576,9.424,15.062,10.474,15.166ZM9.255,17.451a2.3,2.3,0,0,0-.554.059c-.337.07-1.411.4-.838.637,1.592.661,7.324.5,9.137-.021.953-.276.5-.633.5-.633,1.661.716-3.609,2.153-10.011,1.162C5.141,18.291,8.618,17.023,9.255,17.451Zm6.873,1.709c2.186-.392,2.388-.887,2.388-.887-.105,1.305-4.542,1.58-7.43,1.4a5.049,5.049,0,0,1-2.268-.409A24.846,24.846,0,0,0,16.128,19.161Z"
                transform="translate(-6.684 -4.408)"
              />
            </svg>
          </div>`:""}
      ${n?k`<div
            id="php_generic_lib_v2"
            @click=${this._onClick}
            class=${G({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 16"
            >
              <defs>
                <style>
                  .aPHP {
                    fill: #8f9ed7;
                  }
                </style>
              </defs>
              <path
                class="aPHP"
                d="M12.679,9.989c-4.582,0-8.3,1.861-8.3,4.157S8.1,18.3,12.679,18.3s8.3-1.861,8.3-4.157S17.261,9.989,12.679,9.989ZM10.52,14.955a1.636,1.636,0,0,1-.66.337,3.306,3.306,0,0,1-.925.062H8.086L7.851,16.7H6.859l.885-4.565H9.65a1.6,1.6,0,0,1,1.255.461,1.4,1.4,0,0,1,.237,1.253,1.974,1.974,0,0,1-.623,1.109Zm2.894.4.391-1.936a.57.57,0,0,0-.049-.477.686.686,0,0,0-.494-.138h-.786l-.507,2.551h-.984l.885-4.43h.984l-.236,1.208H13.5a1.715,1.715,0,0,1,1.142.3.847.847,0,0,1,.188.876l-.411,2.046Zm5.467-1.5a1.946,1.946,0,0,1-.623,1.1,1.629,1.629,0,0,1-.66.337,3.308,3.308,0,0,1-.925.062h-.85L15.589,16.7H14.6l.885-4.565h1.907a1.6,1.6,0,0,1,1.255.461A1.419,1.419,0,0,1,18.881,13.853ZM17.013,12.8h-.679l-.37,1.879h.6a1.487,1.487,0,0,0,.893-.188,1.136,1.136,0,0,0,.4-.727.866.866,0,0,0-.09-.733,1.012,1.012,0,0,0-.754-.231Zm-7.738,0H8.6l-.37,1.879h.6a1.487,1.487,0,0,0,.893-.188,1.132,1.132,0,0,0,.4-.727.866.866,0,0,0-.09-.733,1.012,1.012,0,0,0-.753-.231Z"
                transform="translate(-4.382 -9.989)"
              />
            </svg>
          </div>`:""}
      ${e?k`<div
            id="python_generic_lib"
            @click=${this._onClick}
            class=${G({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25"
            >
              <defs>
                <style>
                  .aPython {
                    fill: #3b8fc6;
                  }
                </style>
              </defs>
              <path
                class="aPython"
                d="M12.644,14.291H16.42A1.9,1.9,0,0,0,18.3,12.368V8.809a2.092,2.092,0,0,0-1.885-1.943,11.977,11.977,0,0,0-1.967-.153,10.747,10.747,0,0,0-1.788.153c-1.6.279-1.871.864-1.871,1.943v1.385h3.755v.512H9.335a2.355,2.355,0,0,0-2.362,1.9,6.842,6.842,0,0,0,0,3.78c.269,1.107.91,1.877,2.009,1.877H10.27V16.589a2.379,2.379,0,0,1,2.374-2.3Zm-.237-5.007a.712.712,0,1,1,.709-.71A.71.71,0,0,1,12.406,9.284ZM22.091,12.6c-.272-1.081-.79-1.9-1.891-1.9H18.817v1.661a2.387,2.387,0,0,1-2.4,2.307H12.644a1.943,1.943,0,0,0-1.855,1.962V20.2c0,1.013.874,1.609,1.873,1.9a6.341,6.341,0,0,0,3.762,0c.952-.272,1.876-.821,1.876-1.9V18.771H14.543v-.512H20.2c1.1,0,1.509-.739,1.891-1.877a6.29,6.29,0,0,0,0-3.78Zm-5.433,7.119a.712.712,0,1,1-.709.71.71.71,0,0,1,.709-.71Z"
                transform="translate(-6.707 -6.714)"
              />
            </svg>
          </div>`:""}
      ${o?k`<div
            id="ruby_generic_lib"
            @click=${this._onClick}
            class=${G({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25"
            >
              <defs>
                <style>
                  .aRuby {
                    fill: #f6213a;
                  }
                </style>
              </defs>
              <path
                class="aRuby"
                d="M10.664,20.19l9.8,1.32-3.315-5.444L10.664,20.19ZM21.393,10l-.868,1.287q-1.49,2.211-2.978,4.422c-.055.082-.127.147-.049.273q1.439,2.343,2.864,4.694a6.289,6.289,0,0,0,.5.731q.29-5.7.578-11.4L21.393,10ZM8.305,14.868a.237.237,0,0,0,.209.041c.92-.447,1.845-.882,2.745-1.364a4.315,4.315,0,0,0,.772-.668q1.255-1.135,2.508-2.274a.6.6,0,0,0,.142-.151c.3-.578.595-1.16.9-1.758-.363-.135-.709-.267-1.058-.387a.257.257,0,0,0-.173.044c-.808.445-1.633.867-2.416,1.353a7.994,7.994,0,0,0-1.057.913c-.559.5-1.118,1.008-1.669,1.52a2.812,2.812,0,0,0-.393.455c-.376.541-.742,1.089-1.124,1.654.214.218.408.426.615.62Zm3.361-.74-1.382,5.76,6.494-4.128-5.112-1.632Zm9.165-4.111-5.52.91,1.873,4.494,3.647-5.4Zm-9.088,3.721,5.01,1.6L14.9,10.89l-3.157,2.847ZM8.375,15.979c-.595,1.4-1.169,2.757-1.753,4.135l3.34-.1ZM10,19.058l.041-.009c.4-1.645.808-3.278,1.217-4.987L8.58,15.436c.457,1.171.944,2.407,1.421,3.623ZM20.158,9.75q-.8-.209-1.6-.417c-.767-.2-1.535-.4-2.3-.6-.1-.025-.165-.041-.221.072-.271.548-.55,1.091-.826,1.636a.4.4,0,0,0-.013.081l4.96-.741V9.75ZM17.064,8.5,21.41,9.691l-.718-2.019-3.622.793Zm-6.695,12a12.827,12.827,0,0,0-1.636,0c-.449.008-.9.025-1.346.038a.18.18,0,0,0-.139.06l11.124,1.015.007-.049-3.566-.48c-1.481-.2-2.96-.419-4.445-.588ZM6.694,18.852q.717-1.641,1.433-3.281a.2.2,0,0,0-.049-.272c-.2-.189-.387-.392-.606-.617L6.6,18.943l.032.015A.7.7,0,0,0,6.694,18.852ZM16.112,8.215c.805-.2,1.623-.365,2.436-.544.052-.011.1-.028.156-.043L18.7,7.589,15.2,8.052a1.32,1.32,0,0,0,.908.163Z"
                transform="translate(-6.597 -7.589)"
              />
            </svg>
          </div>`:""}
      ${l?k`<div
            id="ts_generic_lib"
            @click=${this._onClick}
            class=${G({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="50"
              viewBox="0 0 256 282"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="#8CC84B">
                <path
                  d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"
                />
                <path
                  d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"
                />
              </g>
            </svg>
          </div>`:""}
      ${this.sdkDocs?k`<div
            id="cs_net_standard_lib"
            @click=${this._onClick}
            class=${G({icon:!0})}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 25 25.2"
            >
              <defs>
                <style>
                  .aDotNet {
                    fill: #00a4ef;
                  }
                </style>
              </defs>
              <path
                class="aDotNet"
                d="M0,2.293l6.6-.9,0,6.364L.006,7.8Zm6.595,6.2.005,6.37L.005,13.955V8.449Zm.8-7.215L16.142,0V7.677l-8.748.069Zm8.75,7.275,0,7.643L7.394,14.96,7.382,8.537Z"
              />
            </svg>
          </div>`:""}
    `}async _onClick(t){try{const i=t.currentTarget.id;if(console.log(i),console.log(t.currentTarget),!i)return;const s=`https://www.apimatic.io/api/api-entities/${this.apiKey}/portal-artifacts/sdks/generated-file?template=${i}`,e=await fetch(s),n=e.headers.get("content-disposition"),o=null===n?i:n.split("=")[1];this.saveData(await e.blob(),o)}catch(t){console.log("error",t)}}};X.styles=((t,...s)=>{const n=1===t.length?t[0]:s.reduce(((i,s,e)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[e+1]),t[0]);return new e(n,i)})`
    .icon {
      cursor: pointer;
      display: inline-block !important;
    }
  `,Q([Y({type:String})],X.prototype,"apiKey",void 0),Q([Y({type:String})],X.prototype,"platforms",void 0),Q([Y({type:Boolean})],X.prototype,"sdkDocs",void 0),X=Q([(t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i))("apimatic-widget")],X);export{X as APIMaticWidget};
