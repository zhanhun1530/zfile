!function(){function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(E){u=function(e,t,n){return e[t]=n}}function c(e,t,n,o){var r=t&&t.prototype instanceof d?t:d,a=Object.create(r.prototype),i=new j(o||[]);return a._invoke=function(e,t,n){var o="suspendedStart";return function(r,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw a;return L()}for(n.method=r,n.arg=a;;){var i=n.delegate;if(i){var l=w(i,n);if(l){if(l===s)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var u=f(e,t,n);if("normal"===u.type){if(o=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o="completed",n.method="throw",n.arg=u.arg)}}}(e,n,i),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(E){return{type:"throw",arg:E}}}t.wrap=c;var s={};function d(){}function p(){}function h(){}var m={};u(m,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(S([])));v&&v!==n&&o.call(v,a)&&(m=v);var g=h.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){function n(r,a,i,l){var u=f(e[r],e,a);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"==typeof s&&o.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(s).then((function(e){c.value=e,i(c)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}var r;this._invoke=function(e,o){function a(){return new t((function(t,r){n(e,o,t,r)}))}return r=r?r.then(a,a):a()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var o=f(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,s;var r=o.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function V(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(V,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,u(g,"constructor",h),u(h,"constructor",p),p.displayName=u(h,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,u(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},t.awrap=function(e){return{__await:e}},b(x.prototype),u(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,o,r,a){void 0===a&&(a=Promise);var i=new x(c(e,n,o,r),a);return t.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),u(g,l,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},t.values=S,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,o){return i.type="throw",i.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function t(e,t,n,o,r,a,i){try{var l=e[a](i),u=l.value}catch(c){return void n(c)}l.done?t(u):Promise.resolve(u).then(o,r)}var n=document.createElement("style");n.innerHTML=".zfile-info-tooltip[data-v-0402b270]{line-height:32px}\n",document.head.appendChild(n),System.register(["./index-legacy.2de5676a.js","./base-legacy.f53a0713.js","./loading-legacy.36861a78.js","./ZFormItem-legacy.ee097f08.js","./button-legacy.9af9d3a6.js","./tooltip-legacy.f5af8fcd.js","./popper-legacy.606262a9.js","./input-legacy.1469b40d.js","./switch-legacy.8d49ebdd.js","./radio-legacy.7c8e5e97.js","./admin-setting-legacy.ac753087.js","./common-legacy.af649da4.js","./request-legacy.e2497089.js","./route-block-legacy.2d113b05.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./BadgeCheckIcon-legacy.0ba87333.js","./index-legacy.bb28c642.js","./directive-legacy.1ac5dcca.js","./index-legacy.61ab75a6.js","./focus-trap-legacy.e6bab6c4.js","./event-legacy.0bfbd831.js","./validator-legacy.21431d38.js","./event-legacy.39ad8904.js"],(function(n,o){"use strict";var r,a,i,l,u,c,f,s,d,p,h,m,y,v,g,b,x,w,V,_,j,S,L,E,k,O,U,T,C,M;return{setters:[function(e){r=e.aA,a=e._,i=e.a2,l=e.a,u=e.f,c=e.u,f=e.Q,s=e.b,d=e.e,p=e.h,h=e.k,m=e.J,y=e.U,v=e.V,g=e.p},function(e){b=e.r},function(){},function(e){x=e.Z,w=e.a},function(){},function(){},function(e){V=e.E},function(){},function(e){_=e.E},function(e){j=e.E},function(e){S=e.l,L=e.b},function(e){E=e.c},function(e){k=e.E},function(e){O=e.b},function(e){U=e._},function(e){T=e.r},function(e){C=e.E},function(e){M=e.v},function(){},function(){},function(){},function(){},function(){}],execute:function(){const I=e=>(y("data-v-0402b270"),e=e(),v(),e),P=m(" 显示信息 "),A=m(" 此页面显示网站前台的显示相关的信息 "),z=m("全屏"),G=m("居中"),N=m(" 根目录是否显示所有存储源, 如果为 true, 则根目录显示所有存储源列表, 如果为 false, 则会自动跳转到第一个存储源. "),F=m("单击进入"),J=m("双击进入"),D=m(" 控制文件和文件夹的点击习惯, 单击/双击打开文件夹或预览文件 "),H=m(" 自定义识别为视频格式的文件后缀，多个用逗号分开，如 'mp4,avi,mkv', 在此列表中的将调用播放器打开（能否播放要取决于浏览器是否支持，现代浏览器一般只支持封装格式为 h.264 (mp4) 的编码格式） "),R=I((()=>g("div",null,[m("OnlyOffice 服务地址，默认的公共服务不保证稳定性，推荐自行部署 OnlyOffice 服务. 部署教程："),g("a",{class:"link",href:"https://docs.zfile.vip/advanced#only-office",target:"_blank"},"https://docs.zfile.vip/advanced#only-office")],-1))),Z=I((()=>g("div",null,"提示：进行预览的文件需 OnlyOffice 服务器可访问，如您的 OnlyOffice 在公网，要预览的文件在内网，则无法正常预览。",-1))),Y=I((()=>g("div",null,"提示：根据浏览器安全规范，如您的 ZFile 是 https 协议的，OnlyOffice 服务也必须是 https 协议的，否则无法正常使用。",-1))),q=m(" 在文件列表下，显示当前文件夹的目录文档 "),B=I((()=>g("i",{class:"el-icon-info zfile-info-tooltip"},null,-1))),Q=m(" 网站顶部，显示公告内容，支持 HTML 语法 "),K=I((()=>g("i",{class:"el-icon-info zfile-info-tooltip"},null,-1))),W=m(" 支持 Markdown 语法, 左右分栏, 所见即所得, 可以使用 HTML 语法 "),X=m(" 自定义 CSS 内容, 无须写 <style></style> 标签 "),$=m(" 自定义 JS 脚本, <script><\/script> 可写可不写，会自动兼容. "),ee=m("保存设置"),te={__name:"view-setting",setup(n){const m=a((()=>new Promise(((n,r)=>{var a;(a=e().mark((function t(){var a,l,u;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i((()=>o.import("./base-editor-legacy.a0d097b9.js").then((function(e){return e.b}))),void 0);case 3:return a=e.sent,e.next=6,i((()=>o.import("./base-editor-legacy.c8eaadd4.js")),void 0);case 6:return e.next=8,i((()=>o.import("./vuepress-legacy.f42e517e.js")),void 0);case 8:return e.next=10,i((()=>o.import("./vuepress-legacy.5276f2b8.js").then((function(e){return e.v}))),void 0);case 10:return l=e.sent,e.next=13,i((()=>o.import("./prism-legacy.69b3c056.js").then((function(e){return e.p}))),void 0);case 13:u=e.sent,a.use(l,{Prism:u}),n(a),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),r(e.t0);case 21:case"end":return e.stop()}}),t,null,[[0,18]])})),function(){var e=this,n=arguments;return new Promise((function(o,r){var i=a.apply(e,n);function l(e){t(i,o,r,l,u,"next",e)}function u(e){t(i,o,r,l,u,"throw",e)}l(void 0)}))})()})))),y=function(){const e=r(S,{formatResult:e=>{let t=e.data;return t.customVideoSuffix||(t.customVideoSuffix=E.constant.fileTypeMap.video.join(",")),t.customImageSuffix||(t.customImageSuffix=E.constant.fileTypeMap.image.join(",")),t.customAudioSuffix||(t.customAudioSuffix=E.constant.fileTypeMap.audio.join(",")),t.customTextSuffix||(t.customTextSuffix=E.constant.fileTypeMap.text.join(",")),t.announcement||(t.announcement=""),t}}),t=e.data,n=e.loading,o=e.reload,a=r(L,{manual:!0,onSuccess(){k({message:"保存成功",type:"success"})}}),i=a.loading,l=a.run;return{data:t,dataLoading:n,reload:o,saveData:()=>{l(t.value)},saveLoading:i}}(),v=y.data,g=y.saveData,O=y.saveLoading;return(e,t)=>{const n=j,o=x,r=_,a=C,i=V,y=b,S=w,L=M;return l(),u("div",null,[c(v)?f((l(),s(S,{key:0,model:c(v),"element-loading-text":"保存中..."},{"form-title":d((()=>[P])),"form-sub-title":d((()=>[A])),footer:d((()=>[p(y,{type:"primary",size:"default",icon:c(T),onClick:c(g)},{default:d((()=>[ee])),_:1},8,["icon","onClick"])])),default:d((()=>[p(o,{label:"页面布局"},{default:d((()=>[p(n,{modelValue:c(v).layout,"onUpdate:modelValue":t[0]||(t[0]=e=>c(v).layout=e),label:"full"},{default:d((()=>[z])),_:1},8,["modelValue"]),p(n,{modelValue:c(v).layout,"onUpdate:modelValue":t[1]||(t[1]=e=>c(v).layout=e),label:"center"},{default:d((()=>[G])),_:1},8,["modelValue"])])),_:1}),p(o,{label:"根目录显示所有存储源"},{tips:d((()=>[N])),default:d((()=>[p(r,{modelValue:c(v).rootShowStorage,"onUpdate:modelValue":t[2]||(t[2]=e=>c(v).rootShowStorage=e)},null,8,["modelValue"])])),_:1}),p(o,{label:"文件操作习惯"},{tips:d((()=>[D])),default:d((()=>[p(n,{modelValue:c(v).fileClickMode,"onUpdate:modelValue":t[3]||(t[3]=e=>c(v).fileClickMode=e),label:"click"},{default:d((()=>[F])),_:1},8,["modelValue"]),p(n,{modelValue:c(v).fileClickMode,"onUpdate:modelValue":t[4]||(t[4]=e=>c(v).fileClickMode=e),label:"dbclick"},{default:d((()=>[J])),_:1},8,["modelValue"])])),_:1}),p(o,{label:"视频文件后缀"},{tips:d((()=>[H])),default:d((()=>[p(a,{modelValue:c(v).customVideoSuffix,"onUpdate:modelValue":t[5]||(t[5]=e=>c(v).customVideoSuffix=e)},null,8,["modelValue"])])),_:1}),p(o,{label:"图像文件后缀"},{default:d((()=>[p(a,{modelValue:c(v).customImageSuffix,"onUpdate:modelValue":t[6]||(t[6]=e=>c(v).customImageSuffix=e)},null,8,["modelValue"])])),_:1}),p(o,{label:"音频文件后缀"},{default:d((()=>[p(a,{modelValue:c(v).customAudioSuffix,"onUpdate:modelValue":t[7]||(t[7]=e=>c(v).customAudioSuffix=e)},null,8,["modelValue"])])),_:1}),p(o,{label:"文本文件后缀"},{default:d((()=>[p(a,{modelValue:c(v).customTextSuffix,"onUpdate:modelValue":t[8]||(t[8]=e=>c(v).customTextSuffix=e)},null,8,["modelValue"])])),_:1}),p(o,{label:"OnlyOffice 服务地址"},{tips:d((()=>[R,Z,Y])),default:d((()=>[p(a,{modelValue:c(v).onlyOfficeUrl,"onUpdate:modelValue":t[9]||(t[9]=e=>c(v).onlyOfficeUrl=e)},null,8,["modelValue"])])),_:1}),p(o,{label:"显示文档区"},{default:d((()=>[p(r,{modelValue:c(v).showDocument,"onUpdate:modelValue":t[10]||(t[10]=e=>c(v).showDocument=e)},null,8,["modelValue"]),p(i,{placement:"right"},{content:d((()=>[q])),default:d((()=>[B])),_:1})])),_:1}),p(o,{label:"显示公告"},{default:d((()=>[p(r,{modelValue:c(v).showAnnouncement,"onUpdate:modelValue":t[11]||(t[11]=e=>c(v).showAnnouncement=e)},null,8,["modelValue"]),p(i,{placement:"right"},{content:d((()=>[Q])),default:d((()=>[K])),_:1})])),_:1}),p(o,{label:"公告内容"},{tips:d((()=>[W])),default:d((()=>[p(c(m),{modelValue:c(v).announcement,"onUpdate:modelValue":t[12]||(t[12]=e=>c(v).announcement=e),height:"400px"},null,8,["modelValue"])])),_:1}),p(o,{label:"自定义 CSS"},{tips:d((()=>[X])),default:d((()=>[p(a,{type:"textarea",autosize:{minRows:3},placeholder:"请输入自定义 CSS 内容",modelValue:c(v).customCss,"onUpdate:modelValue":t[13]||(t[13]=e=>c(v).customCss=e)},null,8,["modelValue"])])),_:1}),p(o,{label:"自定义 JS"},{tips:d((()=>[$])),default:d((()=>[p(a,{type:"textarea",autosize:{minRows:3},placeholder:"请输入自定义 JS 内容",modelValue:c(v).customJs,"onUpdate:modelValue":t[14]||(t[14]=e=>c(v).customJs=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])),[[L,c(O)]]):h("",!0)])}}};"function"==typeof O&&O(te);n("default",U(te,[["__scopeId","data-v-0402b270"]]))}}}))}();
