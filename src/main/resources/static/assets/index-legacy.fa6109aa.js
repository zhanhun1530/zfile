!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function t(t){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./popper-legacy.606262a9.js","./base-legacy.f53a0713.js","./dropdown-legacy.ce67607c.js","./index-legacy.2de5676a.js"],(function(e){"use strict";var r,o,n,p,i,a,l,s,f,c,u,d,b,v,g,y,w,h,m,O,j,P,S,x,k;return{setters:[function(e){r=e.u,o=e.a,n=e.E},function(e){p=e.b,i=e.U,a=e.u,l=e.a0,s=e._,f=e.aX,c=e.w},function(e){u=e.d},function(e){d=e.d,b=e.r,v=e.c,g=e.u,y=e.a,w=e.b,h=e.e,m=e.f,O=e.t,j=e.n,P=e.k,S=e.g,x=e.J,k=e.z}],execute:function(){const A=p({trigger:r.trigger,placement:u.placement,disabled:r.disabled,visible:o.visible,transition:o.transition,popperOptions:u.popperOptions,tabindex:u.tabindex,content:o.content,popperStyle:o.popperStyle,popperClass:o.popperClass,enterable:t(t({},o.enterable),{},{default:!0}),effect:t(t({},o.effect),{},{default:"light"}),teleported:o.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0}}),C={"update:visible":e=>i(e),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},E=d(t(t({},{name:"ElPopover"}),{},{props:A,emits:C,setup(e,{expose:t,emit:r}){const o=e,p=a("popover"),i=b(),s=v((()=>{var e;return null==(e=g(i))?void 0:e.popperRef})),f=v((()=>[{width:l(o.width)},o.popperStyle])),c=v((()=>[p.b(),o.popperClass,{[p.m("plain")]:!!o.content}])),u=v((()=>"el-fade-in-linear"===o.transition)),d=()=>{r("before-enter")},A=()=>{r("before-leave")},C=()=>{r("after-enter")},E=()=>{r("update:visible",!1),r("after-leave")};return t({popperRef:s,hide:()=>{var e;null==(e=i.value)||e.hide()}}),(e,t)=>(y(),w(g(n),k({ref_key:"tooltipRef",ref:i},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":g(c),"popper-style":g(f),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":g(u),onBeforeShow:d,onBeforeHide:A,onShow:C,onHide:E}),{content:h((()=>[e.title?(y(),m("div",{key:0,class:j(g(p).e("title")),role:"title"},O(e.title),3)):P("v-if",!0),S(e.$slots,"default",{},(()=>[x(O(e.content),1)]))])),default:h((()=>[e.$slots.reference?S(e.$slots,"reference",{key:0}):P("v-if",!0)])),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration"]))}}));var N=s(E,[["__file","/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);const R=(e,t)=>{const r=t.arg||t.value,o=null==r?void 0:r.popperRef;o&&(o.triggerRef=e)};const _=f({mounted(e,t){R(e,t)},updated(e,t){R(e,t)}},"popover");e("E",c(N,{directive:_}))}}}))}();
