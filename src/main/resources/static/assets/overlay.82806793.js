var $=Object.defineProperty,Z=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var h=(e,o,l)=>o in e?$(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,x=(e,o)=>{for(var l in o||(o={}))_.call(o,l)&&h(e,l,o[l]);if(B)for(var l of B(o))G.call(o,l)&&h(e,l,o[l]);return e},D=(e,o)=>Z(e,q(o));import{b as E,L as X,d as j,U as H,P as J,X as I,$ as K,a0 as Q,a1 as W,N as P,A as Y}from"./base.130d3d79.js";import{U as F}from"./event.776e7e11.js";import{b as R}from"./index.612f1529.js";import{r as d,c as ee,w as T,Z as oe,o as le,a0 as te}from"./index.9f622a37.js";const ae=E({center:{type:Boolean,default:!1},closeIcon:{type:X,default:""},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),de={close:()=>!0},fe=E(D(x({},ae),{appendToBody:{type:Boolean,default:!1},beforeClose:{type:j(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,required:!0},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}})),re={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[F]:e=>H(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},ye=(e,o)=>{const a=te().emit,{nextZIndex:p}=J();let C="";const O=I(),k=I(),n=d(!1),f=d(!1),i=d(!1),r=d(e.zIndex||p());let s,u;const w=K("namespace",W),A=ee(()=>{const t={},c=`--${w.value}-dialog`;return e.fullscreen||(e.top&&(t[`${c}-margin-top`]=e.top),e.width&&(t[`${c}-width`]=Q(e.width))),t});function N(){a("opened")}function S(){a("closed"),a(F,!1),e.destroyOnClose&&(i.value=!1)}function z(){a("close")}function b(){u==null||u(),s==null||s(),e.openDelay&&e.openDelay>0?{stop:s}=P(()=>g(),e.openDelay):g()}function y(){s==null||s(),u==null||u(),e.closeDelay&&e.closeDelay>0?{stop:u}=P(()=>m(),e.closeDelay):m()}function v(){function t(c){c||(f.value=!0,n.value=!1)}e.beforeClose?e.beforeClose(t):y()}function L(){e.closeOnClickModal&&v()}function g(){!Y||(n.value=!0)}function m(){n.value=!1}function M(){a("openAutoFocus")}function U(){a("closeAutoFocus")}e.lockScroll&&R(n);function V(){e.closeOnPressEscape&&v()}return T(()=>e.modelValue,t=>{t?(f.value=!1,b(),i.value=!0,a("open"),r.value=e.zIndex?r.value++:p(),oe(()=>{o.value&&(o.value.scrollTop=0)})):n.value&&y()}),T(()=>e.fullscreen,t=>{!o.value||(t?(C=o.value.style.transform,o.value.style.transform=""):o.value.style.transform=C)}),le(()=>{e.modelValue&&(n.value=!0,i.value=!0,b())}),{afterEnter:N,afterLeave:S,beforeLeave:z,handleClose:v,onModalClick:L,close:y,doClose:m,onOpenAutoFocus:M,onCloseAutoFocus:U,onCloseRequested:V,titleId:O,bodyId:k,closed:f,style:A,rendered:i,visible:n,zIndex:r}};export{de as a,fe as b,re as c,ae as d,ye as u};
