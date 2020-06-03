var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function a(t){let e;return s(t,t=>e=t)(),e}function l(t,e,n){t.$$.on_destroy.push(s(e,n))}function u(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function y(){return m("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function v(t,e,n,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===e){let e=0;for(;e<r.attributes.length;){const t=r.attributes[e];n[t.name]?e++:r.removeAttribute(t.name)}return t.splice(o,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const o=t[n];if(3===o.nodeType)return o.data=""+e,t.splice(n,1)[0]}return m(e)}function x(t){return w(t," ")}let k;function _(t){k=t}function E(){if(!k)throw new Error("Function called outside component initialization");return k}function P(t,e){E().$$.context.set(t,e)}function O(t){return E().$$.context.get(t)}const F=[],S=[],j=[],I=[],L=Promise.resolve();let A=!1;function D(){A||(A=!0,L.then(q))}function M(t){j.push(t)}let R=!1;const N=new Set;function q(){if(!R){R=!0;do{for(let t=0;t<F.length;t+=1){const e=F[t];_(e),T(e.$$)}for(F.length=0;S.length;)S.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];N.has(e)||(N.add(e),e())}j.length=0}while(F.length);for(;I.length;)I.pop()();A=!1,R=!1,N.clear()}}function T(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const B=new Set;let C;function U(){C={r:0,c:[],p:C}}function K(){C.r||r(C.c),C=C.p}function H(t,e){t&&t.i&&(B.delete(t),t.i(e))}function V(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),C.c.push(()=>{B.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function G(t,e){V(t,1,1,()=>{e.delete(t.key)})}function z(t,e,n,o,r,i,c,s,a,l,u,f){let p=t.length,d=i.length,h=p;const m={};for(;h--;)m[t[h].key]=h;const g=[],y=new Map,$=new Map;for(h=d;h--;){const t=f(r,i,h),s=n(t);let a=c.get(s);a?o&&a.p(t,e):(a=l(s,t),a.c()),y.set(s,g[h]=a),s in m&&$.set(s,Math.abs(h-m[s]))}const b=new Set,v=new Set;function w(t){H(t,1),t.m(s,u,c.has(t.key)),c.set(t.key,t),u=t.first,d--}for(;p&&d;){const e=g[d-1],n=t[p-1],o=e.key,r=n.key;e===n?(u=e.first,p--,d--):y.has(r)?!c.has(o)||b.has(o)?w(e):v.has(r)?p--:$.get(o)>$.get(r)?(v.add(o),w(e)):(b.add(r),p--):(a(n,c),p--)}for(;p--;){const e=t[p];y.has(e.key)||a(e,c)}for(;d;)w(g[d-1]);return g}function J(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],s=e[i];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[i]=s}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function Q(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Y(t,e,o){const{fragment:c,on_mount:s,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,o),M(()=>{const e=s.map(n).filter(i);a?a.push(...e):r(e),t.$$.on_mount=[]}),l.forEach(M)}function Z(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function tt(e,n,i,c,s,a,l=[-1]){const u=k;_(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:l};let h=!1;if(p.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(p.bound[t]&&p.bound[t](r),h&&function(t,e){-1===t.$$.dirty[0]&&(F.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],p.update(),h=!0,r(p.before_update),p.fragment=!!c&&c(p.ctx),n.target){if(n.hydrate){const t=b(n.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();n.intro&&H(e.$$.fragment),Y(e,n.target,n.anchor),q()}_(u)}class et{$destroy(){Z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function ot(e,n=t){let o;const r=[];function i(t){if(c(e,t)&&(e=t,o)){const t=!nt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(c,s=t){const a=[c,s];return r.push(a),1===r.length&&(o=n(i)||t),c(e),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function rt(e,n,o){const c=!Array.isArray(e),a=c?[e]:e,l=n.length<2;return{subscribe:ot(o,e=>{let o=!1;const u=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=n(c?u[0]:u,e);l?e(o):p=i(o)?o:t},h=a.map((t,e)=>s(t,t=>{u[e]=t,f&=~(1<<e),o&&d()},()=>{f|=1<<e}));return o=!0,d(),function(){r(h),p()}}).subscribe}}const it=ot(null),ct=ot([]),st=ot(null),at=(()=>{const{set:t,subscribe:e}=ot("");return{subscribe:e,set(e){e.match(/^\//)?t(e):console.warn("Basepaths must start with /")},update(){console.warn("Use assignment or set to update basepaths.")}}})(),lt=rt([at,st],([t,e])=>{const n=window.location.pathname,[,o,r]=n.match(`^(${t})(${e.regex})`)||[];return{base:o,path:r}}),ut=RegExp(/\:([^/()]+)/g);function ft(t){if(navigator.userAgent.includes("jsdom"))return!1;!function t(e){e&&e.scrollTo&&"scroll-lock"!==e.dataset.routify&&"lock"!==e.dataset["routify-scroll"]&&(e.style["scroll-behavior"]="auto",e.scrollTo({top:0,behavior:"auto"}),e.style["scroll-behavior"]="",t(e.parentElement))}(t),function(){if(navigator.userAgent.includes("jsdom"))return!1;const{hash:t}=window.location;if(t){const e=document.querySelector(t);t&&e&&e.scrollIntoView()}}()}const pt=t=>{const e=[];let n;for(;n=ut.exec(t);)e.push(n[1]);return e};let dt=!1;var ht={queryHandler:{parse:t=>{return e=new URLSearchParams(t),[...e].reduce((t,[e,n])=>(t[e]=n,t),{});var e},stringify:t=>"?"+new URLSearchParams(t).toString()}};function mt(){return O("routify")}const gt={_hooks:[],subscribe:$t},yt={_hooks:[],subscribe:$t};function $t(t){const e=this._hooks,n=e.length;return t(t=>{e[n]=t}),()=>delete e[n]}const bt={subscribe:t=>rt([mt(),it,ct,lt],t=>function(t,e,n,o){return function(r,i,c){const{component:s}=t;if(r=r||"./",c&&!1!==c.strict||(r=r.replace(/index$/,"")),r.match(/^\.\.?\//)){let[,t,e]=r.match(/^([\.\/]+)(.*)/),n=s.path.replace(/\/$/,"");(t.match(/\.\.\//g)||[]).forEach(()=>n=n.replace(/\/[^\/]+\/?$/,"")),r=`${n}/${e}`.replace(/\/$/,"")}else if(r.match(/^\//));else{const t=n.find(t=>t.meta.name===r);t&&(r=t.shortPath)}const a=Object.assign({},e.params,s.params,i);let l=r;for(const[t,e]of Object.entries(a))l=l.replace(`:${t}`,e);return(o.base+l+function(t,e){if(!ht.queryHandler)return"";const n=pt(t),o={};e&&Object.entries(e).forEach(([t,e])=>{n.includes(t)||(o[t]=e)});return ht.queryHandler.stringify(o)}(r,i)).replace(/\?$/,"")}}(...t)).subscribe(t)};const vt={props:{},templates:{},services:{plain:{propField:"name",valueField:"content"},twitter:{propField:"name",valueField:"content"},og:{propField:"property",valueField:"content"}},plugins:[{name:"applyTemplate",condition:()=>!0,action:(t,e)=>[t,(vt.getLongest(vt.templates,t)||(t=>t))(e)]},{name:"createMeta",condition:()=>!0,action(t,e){vt.writeMeta(t,e)}},{name:"createOG",condition:t=>!t.match(":"),action(t,e){vt.writeMeta(`og:${t}`,e)}},{name:"createTitle",condition:t=>"title"===t,action(t,e){document.title=e}}],getLongest(t,e){const n=t[e];if(n){const o=a(it).path;return n[Object.keys(t[e]).filter(t=>o.includes(t)).sort((t,e)=>e.length-t.length)[0]]}},writeMeta(t,e){const n=document.getElementsByTagName("head")[0],o=t.match(/(.+)\:/),r=o&&o[1]||"plain",{propField:i,valueField:c}=wt.services[r]||wt.services.plain,s=document.querySelector(`meta[${i}='${t}']`);s&&s.remove();const a=document.createElement("meta");a.setAttribute(i,t),a.setAttribute(c,e),a.setAttribute("data-origin","routify"),n.appendChild(a)},set(t,e){vt.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})},clear(){const t=document.querySelector("meta");t&&t.remove()},template(t,e){const n=vt.getOrigin();vt.templates[t]=vt.templates[t]||{},vt.templates[t][n]=e},update(){Object.keys(vt.props).forEach(t=>{let e=vt.getLongest(vt.props,t);vt.plugins.forEach(n=>{n.condition(t,e)&&([t,e]=n.action(t,e)||[t,e])})})},batchedUpdate(){vt._pendingUpdate||(vt._pendingUpdate=!0,setTimeout(()=>{vt._pendingUpdate=!1,this.update()}))},_updateQueued:!1,getOrigin(){const t=mt();return t&&a(t).path||"/"},_pendingUpdate:!1},wt=new Proxy(vt,{set(t,e,n,o){const{props:r,getOrigin:i}=t;return Reflect.has(t,e)?Reflect.set(t,e,n,o):(r[e]=r[e]||{},r[e][i()]=n),window.routify.appLoaded&&t.batchedUpdate(),!0}});function xt(t,e,n){const o=t.slice();return o[20]=e[n].component,o[21]=e[n].componentFile,o}function kt(t,e,n){const o=t.slice();return o[20]=e[n].component,o[21]=e[n].componentFile,o}function _t(t){let e,n,o,r;const i=[Pt,Et],c=[];function s(t,e){return!1===t[6].component.isLayout?0:t[5].length?1:-1}return~(e=s(t))&&(n=c[e]=i[e](t)),{c(){n&&n.c(),o=y()},l(t){n&&n.l(t),o=y()},m(t,n){~e&&c[e].m(t,n),p(t,o,n),r=!0},p(t,r){let a=e;e=s(t),e===a?~e&&c[e].p(t,r):(n&&(U(),V(c[a],1,1,()=>{c[a]=null}),K()),~e?(n=c[e],n||(n=c[e]=i[e](t),n.c()),H(n,1),n.m(o.parentNode,o)):n=null)},i(t){r||(H(n),r=!0)},o(t){V(n),r=!1},d(t){~e&&c[e].d(t),t&&d(o)}}}function Et(t){let e,n,o=[],r=new Map,i=[t[6]];const c=t=>t[20].path;for(let e=0;e<1;e+=1){let n=xt(t,i,e),s=c(n);r.set(s,o[e]=Ft(s,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=y()},l(t){for(let e=0;e<1;e+=1)o[e].l(t);e=y()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);p(t,e,r),n=!0},p(t,n){if(201326711&n){const i=[t[6]];U(),o=z(o,n,c,1,t,i,r,e.parentNode,G,Ft,e,xt),K()}},i(t){if(!n){for(let t=0;t<1;t+=1)H(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)V(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&d(e)}}}function Pt(t){let e,n,o=[],r=new Map,i=[t[6]];const c=t=>t[20].path;for(let e=0;e<1;e+=1){let n=kt(t,i,e),s=c(n);r.set(s,o[e]=St(s,n))}return{c(){for(let t=0;t<1;t+=1)o[t].c();e=y()},l(t){for(let e=0;e<1;e+=1)o[e].l(t);e=y()},m(t,r){for(let e=0;e<1;e+=1)o[e].m(t,r);p(t,e,r),n=!0},p(t,n){if(85&n){const i=[t[6]];U(),o=z(o,n,c,1,t,i,r,e.parentNode,G,St,e,kt),K()}},i(t){if(!n){for(let t=0;t<1;t+=1)H(o[t]);n=!0}},o(t){for(let t=0;t<1;t+=1)V(o[t]);n=!1},d(t){for(let e=0;e<1;e+=1)o[e].d(t);t&&d(e)}}}function Ot(t){let e,n;const o=new At({props:{layouts:[...t[5]],Decorator:void 0!==t[27]?t[27]:t[1],childOfDecorator:t[4].isDecorator,scoped:{...t[0],...t[26]}}});return{c(){W(o.$$.fragment),e=g()},l(t){X(o.$$.fragment,t),e=x(t)},m(t,r){Y(o,t,r),p(t,e,r),n=!0},p(t,e){const n={};32&e&&(n.layouts=[...t[5]]),134217730&e&&(n.Decorator=void 0!==t[27]?t[27]:t[1]),16&e&&(n.childOfDecorator=t[4].isDecorator),67108865&e&&(n.scoped={...t[0],...t[26]}),o.$set(n)},i(t){n||(H(o.$$.fragment,t),n=!0)},o(t){V(o.$$.fragment,t),n=!1},d(t){Z(o,t),t&&d(e)}}}function Ft(t,n){let o,r,i;const c=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var s=n[21];function a(t){let n={$$slots:{default:[Ot,({scoped:t,decorator:e})=>({26:t,27:e}),({scoped:t,decorator:e})=>(t?67108864:0)|(e?134217728:0)]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}if(s)var l=new s(a(n));return{key:t,first:null,c(){o=y(),l&&W(l.$$.fragment),r=y(),this.h()},l(t){o=y(),l&&X(l.$$.fragment,t),r=y(),this.h()},h(){this.first=o},m(t,e){p(t,o,e),l&&Y(l,t,e),p(t,r,e),i=!0},p(t,e){const n=21&e?J(c,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},16&e&&Q(t[4].param||{})]):{};if(469762099&e&&(n.$$scope={dirty:e,ctx:t}),s!==(s=t[21])){if(l){U();const t=l;V(t.$$.fragment,1,0,()=>{Z(t,1)}),K()}s?(W((l=new s(a(t))).$$.fragment),H(l.$$.fragment,1),Y(l,r.parentNode,r)):l=null}else s&&l.$set(n)},i(t){i||(l&&H(l.$$.fragment,t),i=!0)},o(t){l&&V(l.$$.fragment,t),i=!1},d(t){t&&d(o),t&&d(r),l&&Z(l,t)}}}function St(t,n){let o,r,i;const c=[{scoped:n[0]},{scopedSync:n[2]},n[4].param||{}];var s=n[21];function a(t){let n={};for(let t=0;t<c.length;t+=1)n=e(n,c[t]);return{props:n}}if(s)var l=new s(a());return{key:t,first:null,c(){o=y(),l&&W(l.$$.fragment),r=y(),this.h()},l(t){o=y(),l&&X(l.$$.fragment,t),r=y(),this.h()},h(){this.first=o},m(t,e){p(t,o,e),l&&Y(l,t,e),p(t,r,e),i=!0},p(t,e){const n=21&e?J(c,[1&e&&{scoped:t[0]},4&e&&{scopedSync:t[2]},16&e&&Q(t[4].param||{})]):{};if(s!==(s=t[21])){if(l){U();const t=l;V(t.$$.fragment,1,0,()=>{Z(t,1)}),K()}s?(W((l=new s(a())).$$.fragment),H(l.$$.fragment,1),Y(l,r.parentNode,r)):l=null}else s&&l.$set(n)},i(t){i||(l&&H(l.$$.fragment,t),i=!0)},o(t){l&&V(l.$$.fragment,t),i=!1},d(t){t&&d(o),t&&d(r),l&&Z(l,t)}}}function jt(e){let n,o,r;return{c(){n=h("span")},l(t){n=v(t,"SPAN",{}),b(n).forEach(d)},m(c,s,a){var l;p(c,n,s),a&&r(),l=o=e[8].call(null,n),r=l&&i(l.destroy)?l.destroy:t},d(t){t&&d(n),r()}}}function It(t){let e,n,o,r=t[6]&&_t(t),i=!t[3]&&jt(t);return{c(){r&&r.c(),e=g(),i&&i.c(),n=y()},l(t){r&&r.l(t),e=x(t),i&&i.l(t),n=y()},m(t,c){r&&r.m(t,c),p(t,e,c),i&&i.m(t,c),p(t,n,c),o=!0},p(t,[o]){t[6]?r?(r.p(t,o),H(r,1)):(r=_t(t),r.c(),H(r,1),r.m(e.parentNode,e)):r&&(U(),V(r,1,1,()=>{r=null}),K()),t[3]?i&&(i.d(1),i=null):i||(i=jt(t),i.c(),i.m(n.parentNode,n))},i(t){o||(H(r),o=!0)},o(t){V(r),o=!1},d(t){r&&r.d(t),t&&d(e),i&&i.d(t),t&&d(n)}}}function Lt(t,e,n){let o,r;l(t,it,t=>n(14,r=t));let i,{layouts:c=[]}=e,{scoped:s={}}=e,{Decorator:u=null}=e,{childOfDecorator:f=!1}=e,p={},d=!1,h=!1,m=null,g=null,y=[];const $=ot(null);l(t,$,t=>n(6,o=t));const b=O("routify");function v(t){const e=a(b);n(2,p={...s}),n(13,g=m),0===y.length&&async function(){gt._hooks.forEach(t=>t(m.api)),await function(){return D(),L}(),ft(i),wt.update(),window.routify.appLoaded||async function(){const t=o.component.path,e=r.path,n=t===e;!window.routify.stopAutoReady&&n&&(dispatchEvent(new CustomEvent("app-loaded")),window.routify.appLoaded=!0)}()}(),$.set({layout:h?e.layout:m,component:m,componentFile:t,child:h?e.child:a($)&&a($).child}),e&&!h&&b.update(t=>(t.child=m||t.child,t))}return h=u&&!f,P("routify",$),t.$set=t=>{"layouts"in t&&n(9,c=t.layouts),"scoped"in t&&n(0,s=t.scoped),"Decorator"in t&&n(1,u=t.Decorator),"childOfDecorator"in t&&n(10,f=t.childOfDecorator)},t.$$.update=()=>{if(4610&t.$$.dirty&&h){const t={component:()=>u,path:`${c[0].path}__decorator`,isDecorator:!0};n(9,c=[t,...c])}512&t.$$.dirty&&n(4,[m,...y]=c,m,(n(5,y),n(9,c),n(12,h),n(1,u))),8208&t.$$.dirty&&(d=!g||g.path!==m.path),16&t.$$.dirty&&function(t){let e=t.component();e instanceof Promise?e.then(v):v(e)}(m)},[s,u,p,i,m,y,o,$,function(t){n(3,i=t.parentElement)},c,f]}class At extends et{constructor(t){super(),tt(this,t,Lt,It,c,{layouts:9,scoped:0,Decorator:1,childOfDecorator:10})}}const{_hooks:Dt}=yt;function Mt(t,e){let n=!1;function o(o,r){const i=window.location.pathname,c=qt(o||i,t),s=[...(r&&qt(i,t)||c).layouts,c];n&&delete n.last,c.last=n,n=c,o||st.set(c),it.set(c),e(s)}const r=function(t){["pushState","replaceState"].forEach(t=>{const e=history[t];history[t]=async function(n={},o,r){const{id:i,path:c,params:s}=a(it);n={id:i,path:c,params:s,...n};const l=new Event(t.toLowerCase());if(Object.assign(l,{state:n,title:o,url:r}),await Nt(l))return e.apply(this,[n,o,r]),dispatchEvent(l)}});let e=!1;const n={click:Rt,pushstate:()=>t(),replacestate:()=>t(),popstate:async n=>{e?e=!1:await Nt(n)?t():(e=!0,n.preventDefault(),history.go(1))}};return Object.entries(n).forEach(t=>addEventListener(...t)),()=>{Object.entries(n).forEach(t=>removeEventListener(...t))}}(o);return{updatePage:o,destroy:r}}function Rt(t){const e=t.target.closest("a"),n=e&&e.getAttribute("href");t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||t.button||t.defaultPrevented||n&&!e.target&&e.host===location.host&&(t.preventDefault(),history.pushState({},"",n))}async function Nt(t){const e=a(it);for(const n of Dt.filter(Boolean))if(await!n(t,e))return!1;return!0}function qt(t,e){const n=a(at),o=e.find(e=>t.match(`^${n}${e.regex}`));if(!o)throw new Error(`Route could not be found. Make sure ${t}.svelte or ${t}/index.svelte exists. A restart may be required.`);const[,r,i]=t.match(`^(${a(at)})(${o.regex})`);if(ht.queryHandler&&(o.params=ht.queryHandler.parse(window.location.search)),o.paramKeys){const t=function(t){const e=[];return t.forEach(t=>{e[t.path.split("/").filter(Boolean).length-1]=t}),e}(o.layouts),e=i.split("/").filter(Boolean);(function(t){return t.split("/").filter(Boolean).map(t=>t.match(/\:(.+)/)).map(t=>t&&t[1])})(o.path).forEach((n,r)=>{n&&(o.params[n]=e[r],t[r]?t[r].param={[n]:e[r]}:o.param={[n]:e[r]})})}return o.leftover=t.replace(new RegExp(r+o.regex),""),o}function Tt(t){let e;const n=new At({props:{layouts:t[0]}});return{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,o){Y(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.layouts=t[0]),n.$set(o)},i(t){e||(H(n.$$.fragment,t),e=!0)},o(t){V(n.$$.fragment,t),e=!1},d(t){Z(n,t)}}}function Bt(t){let e,n,o=t[0]&&null!==t[1]&&Tt(t);return{c(){o&&o.c(),e=y()},l(t){o&&o.l(t),e=y()},m(t,r){o&&o.m(t,r),p(t,e,r),n=!0},p(t,[n]){t[0]&&null!==t[1]?o?(o.p(t,n),H(o,1)):(o=Tt(t),o.c(),H(o,1),o.m(e.parentNode,e)):o&&(U(),V(o,1,1,()=>{o=null}),K())},i(t){n||(H(o),n=!0)},o(t){V(o),n=!1},d(t){o&&o.d(t),t&&d(e)}}}function Ct(t,e,n){let o;l(t,it,t=>n(1,o=t));let r,i,{routes:c}=e,{config:s={}}=e;Object.entries(s).forEach(([t,e])=>{ht[t]=e}),function(){if(dt)return;const t=console.warn;console.warn=function(e,...n){if(!["was created with unknown prop 'scoped'","was created with unknown prop 'scopedSync'"].find(t=>e.includes(t)))return t(e,...n)},dt=!0}(),window.routify||(window.routify={});P("routifyupdatepage",(...t)=>i&&i.updatePage(...t));const a=t=>n(0,r=t),u=()=>{i&&(i.destroy(),i=null)};let f=null;var p;return p=u,E().$$.on_destroy.push(p),t.$set=t=>{"routes"in t&&n(2,c=t.routes),"config"in t&&n(3,s=t.config)},t.$$.update=()=>{4&t.$$.dirty&&c&&(clearTimeout(f),f=setTimeout(()=>{u(),i=Mt(c,a),ct.set(c),i.updatePage()}))},[r,o,c,s]}class Ut extends et{constructor(t){super(),tt(this,t,Ct,Bt,c,{routes:2,config:3})}}async function Kt(t,e,n){const{state:o,scope:r,parent:i}=n||{};return n={file:t,parent:i,state:o||{},scope:Ht(r||{})},await e(n),t.children&&(n.parent=t,await Promise.all(t.children.map(t=>Kt(t,e,n)))),n}function Ht(t){return JSON.parse(JSON.stringify(t))}var Vt=function(t){const e=async function(e){return await Kt(e.tree,t,{state:{treePayload:e}})};return e.sync=function(e){return function t(e,n,o){const{state:r,scope:i,parent:c}=o||{};o={file:e,parent:c,state:r||{},scope:Ht(i||{})},n(o),e.children&&(o.parent=e,e.children.map(e=>t(e,n,o)));return o}(e.tree,t,{state:{treePayload:e}})},e},Gt=Vt;const zt=Gt(({file:t})=>{(t.isPage||t.isFallback)&&(t.regex=((t,e)=>{const n=e?"":"/?$";return t=(t=(t=t.replace(/\/_fallback?$/,"(/|$)")).replace(/\/index$/,"(/index)?")).replace(ut,"([^/]+)")+n})(t.path,t.isFallback))}),Jt=Gt(({file:t})=>{t.paramKeys=pt(t.path)}),Qt=Gt(({file:t})=>{t.isFallback||t.isIndex?t.shortPath=t.path.replace(/\/[^/]+$/,""):t.shortPath=t.path}),Wt=Gt(({file:t})=>{t.ranking=(({path:t})=>t.split("/").filter(Boolean).map(t=>"_fallback"===t?"A":t.startsWith(":")?"B":"C").join(""))(t)}),Xt=Gt(({file:t})=>{const e=t,n=t.meta&&t.meta.children||[];n.length&&(e.children=e.children||[],e.children.push(...n.map(t=>({isMeta:!0,...t,meta:t}))))}),Yt=Gt(t=>{const{file:e}=t,{isLayout:n,isFallback:o,meta:r}=e;e.isIndexable=!n&&!o&&!1!==r.index,e.isNonIndexable=!e.isIndexable}),Zt=Gt(({file:t,parent:e})=>{Object.defineProperty(t,"parent",{get:()=>e}),Object.defineProperty(t,"nextSibling",{get:()=>te(t,1)}),Object.defineProperty(t,"prevSibling",{get:()=>te(t,-1)}),Object.defineProperty(t,"lineage",{get:()=>function t(e,n=[]){e&&(n.unshift(e),t(e.parent,n));return n}(e)})});function te(t,e){if(!t.root){const n=t.parent.children.filter(t=>t.isIndexable),o=n.indexOf(t);return n[o+e]}}const ee=Gt(({file:t,parent:e})=>{t.isIndex&&Object.defineProperty(e,"index",{get:()=>t}),t.isLayout&&Object.defineProperty(e,"layout",{get:()=>t})}),ne=Gt(({file:t,scope:e})=>{Object.defineProperty(t,"layouts",{get:()=>function t(e){const{parent:n}=e,o=n&&n.layout,r=o&&o.isReset,i=n&&!r&&t(n)||[];o&&i.push(o);return i}(t)})}),oe=Gt(({file:t})=>{const e=t.root?function(){}:t.children?(t.isFile,function(){}):(t.isReset||t.isLayout||t.isFallback,function(){});Object.setPrototypeOf(t,e.prototype)});class re{constructor(t){this.__file=t,Object.defineProperty(this,"__file",{enumerable:!1}),this.isMeta=!!t.isMeta,this.path=t.path,this.title=function(t){return void 0!==t.meta.title?t.meta.title:(t.shortPath||t.path).split("/").pop().replace(/-/g," ")}(t),this.meta=t.meta}get parent(){return!this.__file.root&&this.__file.parent.api}get children(){return(this.__file.children||this.__file.isLayout&&this.__file.parent.children||[]).filter(t=>!t.isNonIndexable).sort((t,e)=>t.isMeta&&e.isMeta?0:(t=(t.meta.index||t.meta.title||t.path).toString(),e=(e.meta.index||e.meta.title||e.path).toString(),t.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"}))).map(({api:t})=>t)}get next(){return ie(this,1)}get prev(){return ie(this,-1)}}function ie(t,e){if(!t.__file.root){const n=t.parent.children.indexOf(t);return t.parent.children[n+e]}}const ce={...Object.freeze({__proto__:null,setRegex:zt,setParamKeys:Jt,setShortPath:Qt,setRank:Wt,addMetaChildren:Xt,setIsIndexable:Yt,assignRelations:Zt,assignIndex:ee,assignLayout:ne,createFlatList:t=>{Gt(t=>{(t.file.isPage||t.file.isFallback)&&t.state.treePayload.routes.push(t.file)}).sync(t),t.routes.sort((t,e)=>t.ranking>=e.ranking?-1:1)},setPrototype:oe}),assignAPI:Gt(({file:t})=>{t.api=new re(t)})};function se(e){let n,o,r,i,c,s,a,l,u;return{c(){n=h("div"),o=h("div"),r=m("404"),i=g(),c=h("div"),s=m("Page not found. \n  \n  "),a=h("a"),l=m("Go back"),this.h()},l(t){n=v(t,"DIV",{class:!0});var e=b(n);o=v(e,"DIV",{class:!0});var u=b(o);r=w(u,"404"),u.forEach(d),i=x(e),c=v(e,"DIV",{class:!0});var f=b(c);s=w(f,"Page not found. \n  \n  "),a=v(f,"A",{href:!0});var p=b(a);l=w(p,"Go back"),p.forEach(d),f.forEach(d),e.forEach(d),this.h()},h(){$(o,"class","huge svelte-viq1pm"),$(a,"href",u=e[0]("../")),$(c,"class","big"),$(n,"class","e404 svelte-viq1pm")},m(t,e){p(t,n,e),f(n,o),f(o,r),f(n,i),f(n,c),f(c,s),f(c,a),f(a,l)},p(t,[e]){1&e&&u!==(u=t[0]("../"))&&$(a,"href",u)},i:t,o:t,d(t){t&&d(n)}}}function ae(t,e,n){let o;return l(t,bt,t=>n(0,o=t)),[o]}class le extends et{constructor(t){super(),tt(this,t,ae,se,c,{})}}function ue(e){return{c:t,l:t,m:t,p:t,i:t,o:t,d:t}}function fe(t){let e;const n=t[1].default,o=function(t,e,n,o){if(t){const r=u(t,e,n,o);return t[0](r)}}(n,t,t[0],null);return{c(){o&&o.c()},l(t){o&&o.l(t)},m(t,n){o&&o.m(t,n),e=!0},p(t,e){o&&o.p&&1&e&&o.p(u(n,t,t[0],null),function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(n,t[0],e,null))},i(t){e||(H(o,t),e=!0)},o(t){V(o,t),e=!1},d(t){o&&o.d(t)}}}function pe(e){let n,o;return{c(){n=h("hi"),o=m("Verifying user...")},l(t){n=v(t,"HI",{});var e=b(n);o=w(e,"Verifying user..."),e.forEach(d)},m(t,e){p(t,n,e),f(n,o)},p:t,i:t,o:t,d(t){t&&d(n)}}}function de(t){let e,n,o,r={ctx:t,current:null,token:null,pending:pe,then:fe,catch:ue,value:2,blocks:[,,,]};return function(t,e){const n=e.token={};function o(t,o,r,i){if(e.token!==n)return;e.resolved=i;let c=e.ctx;void 0!==r&&(c=c.slice(),c[r]=i);const s=t&&(e.current=t)(c);let a=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==o&&t&&(U(),V(t,1,1,()=>{e.blocks[n]=null}),K())}):e.block.d(1),s.c(),H(s,1),s.m(e.mount(),e.anchor),a=!0),e.block=s,e.blocks&&(e.blocks[o]=s),a&&q()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const n=E();if(t.then(t=>{_(n),o(e.then,1,e.value,t),_(null)},t=>{_(n),o(e.catch,2,e.error,t),_(null)}),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var r}(n=new Promise((function(t){setTimeout(()=>{console.log("should resolve"),t(!0)},1e3)})),r),{c(){e=y(),r.block.c()},l(t){e=y(),r.block.l(t)},m(t,n){p(t,e,n),r.block.m(t,r.anchor=n),r.mount=()=>e.parentNode,r.anchor=e,o=!0},p(e,[n]){{const o=(t=e).slice();o[2]=r.resolved,r.block.p(o,n)}},i(t){o||(H(r.block),o=!0)},o(t){for(let t=0;t<3;t+=1){V(r.blocks[t])}o=!1},d(t){t&&d(e),r.block.d(t),r.token=null,r=null}}}function he(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class me extends et{constructor(t){super(),tt(this,t,he,de,c,{})}}function ge(e){let n,o,r;return{c(){n=g(),o=h("h1"),r=m("test"),this.h()},l(t){(function(t,e=document.body){return Array.from(e.querySelectorAll(t))})('[data-svelte="svelte-oh6yg0"]',document.head).forEach(d),n=x(t),o=v(t,"H1",{});var e=b(o);r=w(e,"test"),e.forEach(d),this.h()},h(){document.title="Sapper project template"},m(t,e){p(t,n,e),p(t,o,e),f(o,r)},p:t,i:t,o:t,d(t){t&&d(n),t&&d(o)}}}class ye extends et{constructor(t){super(),tt(this,t,null,ge,c,{})}}class $e extends et{constructor(t){super(),tt(this,t,null,null,c,{})}}const be={name:"root",filepath:"/",root:!0,ownMeta:{},children:[{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!0,isPage:!1,ownMeta:{},meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/_fallback",id:"__fallback",component:()=>le},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!0,isReset:!1,isIndex:!1,isFallback:!1,isPage:!1,ownMeta:{},meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/",id:"__layout",component:()=>me},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!0,isFallback:!1,isPage:!0,ownMeta:{},meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/index",id:"_index",component:()=>ye},{isFile:!0,isDir:!1,ext:"svelte",isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,isPage:!0,ownMeta:{},meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/personal",id:"_personal",component:()=>$e}],isLayout:!1,isReset:!1,isIndex:!1,isFallback:!1,meta:{preload:!1,"precache-order":!1,"precache-proximity":!0,recursive:!0},path:"/"},{tree:ve,routes:we}=function(t){const e=["setParamKeys","setRegex","setShortPath","setRank","assignLayout","setPrototype","addMetaChildren","assignRelations","setIsIndexable","assignIndex","assignAPI","createFlatList"],n={tree:t,routes:[]};for(let t of e){(ce[t].sync||ce[t])(n)}return n}(be);function xe(e){let n;const o=new Ut({props:{routes:we}});return{c(){W(o.$$.fragment)},l(t){X(o.$$.fragment,t)},m(t,e){Y(o,t,e),n=!0},p:t,i(t){n||(H(o.$$.fragment,t),n=!0)},o(t){V(o.$$.fragment,t),n=!1},d(t){Z(o,t)}}}function ke(t,e,n){let o;return l(t,at,t=>n(0,o=t)),function(t,e,n=e){t.set(n)}(at,o="/routify"),[]}return function(t,e={target:document.body},n="hmr",o="app-loaded"){const r=document.getElementById(n),i=document.createElement("div");return r?i.style.visibility="hidden":i.setAttribute("id",n),e.target.appendChild(i),addEventListener(o,(function(){r&&r.remove();i.style.visibility="initial",i.setAttribute("id",n)})),new t({...e,target:i})}(class extends et{constructor(t){super(),tt(this,t,ke,xe,c,{})}},{target:document.body},"routify-app")}();
//# sourceMappingURL=bundle.js.map
