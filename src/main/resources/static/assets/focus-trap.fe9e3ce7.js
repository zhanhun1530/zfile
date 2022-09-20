var N=(e,s,n)=>new Promise((o,c)=>{var a=i=>{try{p(n.next(i))}catch(v){c(v)}},E=i=>{try{p(n.throw(i))}catch(v){c(v)}},p=i=>i.done?o(i.value):Promise.resolve(i.value).then(a,E);p((n=n.apply(e,s)).next())});import{A as I,O as x,k as q,_ as W}from"./base.130d3d79.js";import{o as $,H as B,d as J,r as Y,v as Z,w as y,u as F,Z as P,m as z,g as G}from"./index.9f622a37.js";let m=[];const Q=e=>{const s=n=>{const o=n;o.key===x.esc&&m.forEach(c=>c(o))};$(()=>{m.length===0&&document.addEventListener("keydown",s),I&&m.push(e)}),B(()=>{m=m.filter(n=>n!==e),m.length===0&&I&&document.removeEventListener("keydown",s)})},V=e=>{const s=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)s.push(n.currentNode);return s},w=(e,s)=>{for(const n of e)if(!X(n,s))return n},X=(e,s)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(s&&e===s)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},ee=e=>{const s=V(e),n=w(s,e),o=w(s.reverse(),e);return[n,o]},te=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,s)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&te(e)&&s&&e.select()}};function K(e,s){const n=[...e],o=e.indexOf(s);return o!==-1&&n.splice(o,1),n}const ne=()=>{let e=[];return{push:o=>{const c=e[0];c&&o!==c&&c.pause(),e=K(e,o),e.unshift(o)},remove:o=>{var c,a;e=K(e,o),(a=(c=e[0])==null?void 0:c.resume)==null||a.call(c)}}},se=(e,s=!1)=>{const n=document.activeElement;for(const o of e)if(l(o,s),document.activeElement!==n)return},R=ne(),h="focus-trap.focus-after-trapped",g="focus-trap.focus-after-released",D={cancelable:!0,bubbles:!1},U="focusAfterTrapped",H="focusAfterReleased",oe=Symbol("elFocusTrap"),re=J({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[U,H,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:s}){const n=Y();let o,c;Q(t=>{e.trapped&&!a.paused&&s("release-requested",t)});const a={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},E=t=>{if(!e.loop&&!e.trapped||a.paused)return;const{key:r,altKey:u,ctrlKey:f,metaKey:d,currentTarget:M,shiftKey:k}=t,{loop:A}=e,j=r===x.tab&&!u&&!f&&!d,T=document.activeElement;if(j&&T){const _=M,[b,S]=ee(_);b&&S?!k&&T===S?(t.preventDefault(),A&&l(b,!0),s("focusout-prevented")):k&&[b,_].includes(T)&&(t.preventDefault(),A&&l(S,!0),s("focusout-prevented")):T===_&&(t.preventDefault(),s("focusout-prevented"))}};Z(oe,{focusTrapRef:n,onKeydown:E}),y(()=>e.focusTrapEl,t=>{t&&(n.value=t)},{immediate:!0}),y([n],([t],[r])=>{t&&(t.addEventListener("keydown",E),t.addEventListener("focusin",v),t.addEventListener("focusout",L)),r&&(r.removeEventListener("keydown",E),r.removeEventListener("focusin",v),r.removeEventListener("focusout",L))});const p=t=>{s(U,t)},i=t=>s(H,t),v=t=>{const r=F(n);if(!r)return;const u=t.target,f=u&&r.contains(u);f&&s("focusin",t),!a.paused&&e.trapped&&(f?c=u:l(c,!0))},L=t=>{const r=F(n);if(!(a.paused||!r))if(e.trapped){const u=t.relatedTarget;!q(u)&&!r.contains(u)&&setTimeout(()=>{!a.paused&&e.trapped&&l(c,!0)},0)}else{const u=t.target;u&&r.contains(u)||s("focusout",t)}};function C(){return N(this,null,function*(){yield P();const t=F(n);if(t){R.push(a);const r=document.activeElement;if(o=r,!t.contains(r)){const f=new Event(h,D);t.addEventListener(h,p),t.dispatchEvent(f),f.defaultPrevented||P(()=>{let d=e.focusStartEl;z(d)||(l(d),document.activeElement!==d&&(d="first")),d==="first"&&se(V(t),!0),(document.activeElement===r||d==="container")&&l(t)})}}})}function O(){const t=F(n);if(t){t.removeEventListener(h,p);const r=new Event(g,D);t.addEventListener(g,i),t.dispatchEvent(r),r.defaultPrevented||l(o!=null?o:document.body,!0),t.removeEventListener(g,p),R.remove(a)}}return $(()=>{e.trapped&&C(),y(()=>e.trapped,t=>{t?C():O()})}),B(()=>{e.trapped&&O()}),{onKeydown:E}}});function ce(e,s,n,o,c,a){return G(e.$slots,"default",{handleKeydown:e.onKeydown})}var de=W(re,[["render",ce],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{de as E,oe as F};
