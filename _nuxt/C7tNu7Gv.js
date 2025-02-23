import{S as x,$ as j,V as P,a0 as B,a1 as $,K as k,X as L,q as v,e as U,a2 as H,r as z,g as R,o as C,c as O,a3 as D,h as I}from"./DA-ig69H.js";async function F(e,t){return await T(t).catch(r=>(console.error("Failed to get image meta for "+t,r+""),{width:0,height:0,ratio:0}))}async function T(e){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((t,i)=>{const r=new Image;r.onload=()=>{const s={width:r.width,height:r.height,ratio:r.width/r.height};t(s)},r.onerror=s=>i(s),r.src=e})}function y(e=""){if(typeof e=="number")return e;if(typeof e=="string"&&e.replace("px","").match(/^\d+$/g))return Number.parseInt(e,10)}function J(e=""){if(e===void 0||!e.length)return[];const t=new Set;for(const i of e.split(" ")){const r=Number.parseInt(i.replace("x",""));r&&t.add(r)}return Array.from(t)}function K(e){if(e.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function V(e){const t={};if(typeof e=="string")for(const i of e.split(/[\s,]+/).filter(r=>r)){const r=i.split(":");r.length!==2?t["1px"]=r[0].trim():t[r[0].trim()]=r[1].trim()}else Object.assign(t,e);return t}function X(e){const t={options:e},i=(s,a={})=>A(t,s,a),r=(s,a={},n={})=>i(s,{...n,modifiers:$(a,n.modifiers||{})}).url;for(const s in e.presets)r[s]=(a,n,d)=>r(a,n,{...e.presets[s],...d});return r.options=e,r.getImage=i,r.getMeta=(s,a)=>G(t,s,a),r.getSizes=(s,a)=>Z(t,s,a),t.$img=r,r}async function G(e,t,i){const r=A(e,t,{...i});return typeof r.getMeta=="function"?await r.getMeta():await F(e,r.url)}function A(e,t,i){var c,f;if(t&&typeof t!="string")throw new TypeError(`input must be a string (received ${typeof t}: ${JSON.stringify(t)})`);if(!t||t.startsWith("data:"))return{url:t};const{provider:r,defaults:s}=Q(e,i.provider||e.options.provider),a=Y(e,i.preset);if(t=x(t)?t:j(t),!r.supportsAlias){for(const g in e.options.alias)if(t.startsWith(g)){const m=e.options.alias[g];m&&(t=P(m,t.slice(g.length)))}}if(r.validateDomains&&x(t)){const g=B(t).host;if(!e.options.domains.find(m=>m===g))return{url:t}}const n=$(i,a,s);n.modifiers={...n.modifiers};const d=n.modifiers.format;(c=n.modifiers)!=null&&c.width&&(n.modifiers.width=y(n.modifiers.width)),(f=n.modifiers)!=null&&f.height&&(n.modifiers.height=y(n.modifiers.height));const l=r.getImage(t,n,e);return l.format=l.format||d||"",l}function Q(e,t){const i=e.options.providers[t];if(!i)throw new Error("Unknown provider: "+t);return i}function Y(e,t){if(!t)return{};if(!e.options.presets[t])throw new Error("Unknown preset: "+t);return e.options.presets[t]}function Z(e,t,i){var q,_,b,o,h;const r=y((q=i.modifiers)==null?void 0:q.width),s=y((_=i.modifiers)==null?void 0:_.height),a=V(i.sizes),n=(b=i.densities)!=null&&b.trim()?J(i.densities.trim()):e.options.densities;K(n);const d=r&&s?s/r:0,l=[],c=[];if(Object.keys(a).length>=1){for(const u in a){const p=M(u,String(a[u]),s,d,e);if(p!==void 0){l.push({size:p.size,screenMaxWidth:p.screenMaxWidth,media:`(max-width: ${p.screenMaxWidth}px)`});for(const w of n)c.push({width:p._cWidth*w,src:W(e,t,i,p,w)})}}ee(l)}else for(const u of n){const p=Object.keys(a)[0];let w=p?M(p,String(a[p]),s,d,e):void 0;w===void 0&&(w={size:"",screenMaxWidth:0,_cWidth:(o=i.modifiers)==null?void 0:o.width,_cHeight:(h=i.modifiers)==null?void 0:h.height}),c.push({width:u,src:W(e,t,i,w,u)})}te(c);const f=c[c.length-1],g=l.length?l.map(u=>`${u.media?u.media+" ":""}${u.size}`).join(", "):void 0,m=g?"w":"x",S=c.map(u=>`${u.src} ${u.width}${m}`).join(", ");return{sizes:g,srcset:S,src:f==null?void 0:f.src}}function M(e,t,i,r,s){const a=s.options.screens&&s.options.screens[e]||Number.parseInt(e),n=t.endsWith("vw");if(!n&&/^\d+$/.test(t)&&(t=t+"px"),!n&&!t.endsWith("px"))return;let d=Number.parseInt(t);if(!a||!d)return;n&&(d=Math.round(d/100*a));const l=r?Math.round(d*r):i;return{size:t,screenMaxWidth:a,_cWidth:d,_cHeight:l}}function W(e,t,i,r,s){return e.$img(t,{...i.modifiers,width:r._cWidth?r._cWidth*s:void 0,height:r._cHeight?r._cHeight*s:void 0},i)}function ee(e){var i;e.sort((r,s)=>r.screenMaxWidth-s.screenMaxWidth);let t=null;for(let r=e.length-1;r>=0;r--){const s=e[r];s.media===t&&e.splice(r,1),t=s.media}for(let r=0;r<e.length;r++)e[r].media=((i=e[r+1])==null?void 0:i.media)||""}function te(e){e.sort((i,r)=>i.width-r.width);let t=null;for(let i=e.length-1;i>=0;i--){const r=e[i];r.width===t&&e.splice(i,1),t=r.width}}const N={screens:{xs:320,sm:640,md:768,lg:1024,xl:1280,xxl:1536,"2xl":1536},presets:{},provider:"static",domains:[],alias:{},densities:[1,2],format:["webp"]};N.providers={};const E=()=>{const e=L(),t=k();return t.$img||t._img||(t._img=X({...N,nuxt:{baseURL:e.app.baseURL},runtimeConfig:e}))};function re(e){var t;(t=performance==null?void 0:performance.mark)==null||t.call(performance,"mark_feature_usage",{detail:{feature:e}})}const ie={src:{type:String,required:!1},format:{type:String,required:!1},quality:{type:[Number,String],required:!1},background:{type:String,required:!1},fit:{type:String,required:!1},modifiers:{type:Object,required:!1},preset:{type:String,required:!1},provider:{type:String,required:!1},sizes:{type:[Object,String],required:!1},densities:{type:String,required:!1},preload:{type:[Boolean,Object],required:!1},width:{type:[String,Number],required:!1},height:{type:[String,Number],required:!1},alt:{type:String,required:!1},referrerpolicy:{type:String,required:!1},usemap:{type:String,required:!1},longdesc:{type:String,required:!1},ismap:{type:Boolean,required:!1},loading:{type:String,required:!1,validator:e=>["lazy","eager"].includes(e)},crossorigin:{type:[Boolean,String],required:!1,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,required:!1,validator:e=>["async","auto","sync"].includes(e)},nonce:{type:[String],required:!1}},se=e=>{const t=v(()=>({provider:e.provider,preset:e.preset})),i=v(()=>({width:y(e.width),height:y(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding,nonce:e.nonce})),r=E(),s=v(()=>({...e.modifiers,width:y(e.width),height:y(e.height),format:e.format,quality:e.quality||r.options.quality,background:e.background,fit:e.fit}));return{options:t,attrs:i,modifiers:s}},ne={...ie,placeholder:{type:[Boolean,String,Number,Array],required:!1},placeholderClass:{type:String,required:!1}},oe=["src"],de=U({__name:"NuxtImg",props:ne,emits:["load","error"],setup(e,{emit:t}){const i=e,r=H(),s=t,a=!1,n=E(),d=se(i),l=z(!1),c=z(),f=v(()=>n.getSizes(i.src,{...d.options.value,sizes:i.sizes,densities:i.densities,modifiers:{...d.modifiers.value,width:y(i.width),height:y(i.height)}})),g=v(()=>{const o={...d.attrs.value,"data-nuxt-img":""};return(!i.placeholder||l.value)&&(o.sizes=f.value.sizes,o.srcset=f.value.srcset),o}),m=v(()=>{let o=i.placeholder;if(o===""&&(o=!0),!o||l.value)return!1;if(typeof o=="string")return o;const h=Array.isArray(o)?o:typeof o=="number"?[o,o]:[10,10];return n(i.src,{...d.modifiers.value,width:h[0],height:h[1],quality:h[2]||50,blur:h[3]||3},d.options.value)}),S=v(()=>i.sizes?f.value.src:n(i.src,d.modifiers.value,d.options.value)),q=v(()=>m.value?m.value:S.value),b=k().isHydrating;return R(()=>{if(m.value){const o=new Image;S.value&&(o.src=S.value),i.sizes&&(o.sizes=f.value.sizes||"",o.srcset=f.value.srcset),o.onload=h=>{l.value=!0,s("load",h)},re("nuxt-image");return}c.value&&(c.value.complete&&b&&(c.value.getAttribute("data-error")?s("error",new Event("error")):s("load",new Event("load"))),c.value.onload=o=>{s("load",o)},c.value.onerror=o=>{s("error",o)})}),(o,h)=>(C(),O("img",D({ref_key:"imgEl",ref:c,class:i.placeholder&&!l.value?i.placeholderClass:void 0},{...I(a)?{onerror:"this.setAttribute('data-error', 1)"}:{},...g.value,...I(r)},{src:q.value}),null,16,oe))}});export{de as _};
