function w(){}function E(t){return t()}function v(){return Object.create(null)}function i(t){t.forEach(E)}function L(t){return typeof t=="function"}function I(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function N(t){return Object.keys(t).length===0}function J(t,e){t.appendChild(e)}function K(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode.removeChild(t)}function Q(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function R(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function U(){return T(" ")}function V(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}function W(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function B(t){return Array.from(t.childNodes)}function X(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Y(t,e,n){t.classList[n?"add":"remove"](e)}let j;function l(t){j=t}const a=[],A=[],d=[],S=[],M=Promise.resolve();let g=!1;function P(){g||(g=!0,M.then(C))}function m(t){d.push(t)}let p=!1;const $=new Set;function C(){if(!p){p=!0;do{for(let t=0;t<a.length;t+=1){const e=a[t];l(e),q(e.$$)}for(l(null),a.length=0;A.length;)A.pop()();for(let t=0;t<d.length;t+=1){const e=d[t];$.has(e)||($.add(e),e())}d.length=0}while(a.length);for(;S.length;)S.pop()();g=!1,p=!1,$.clear()}}function q(t){if(t.fragment!==null){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(m)}}const z=new Set;function D(t,e){t&&t.i&&(z.delete(t),t.i(e))}function F(t,e,n,c){const{fragment:o,on_mount:h,on_destroy:u,after_update:_}=t.$$;o&&o.m(e,n),c||m(()=>{const f=h.map(E).filter(L);u?u.push(...f):i(f),t.$$.on_mount=[]}),_.forEach(m)}function G(t,e){const n=t.$$;n.fragment!==null&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function H(t,e){t.$$.dirty[0]===-1&&(a.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(t,e,n,c,o,h,u,_=[-1]){const f=j;l(t);const r=t.$$={fragment:null,ctx:null,props:h,update:w,not_equal:o,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:v(),dirty:_,skip_bound:!1,root:e.target||f.$$.root};u&&u(r.root);let y=!1;if(r.ctx=n?n(t,e.props||{},(s,b,...x)=>{const k=x.length?x[0]:b;return r.ctx&&o(r.ctx[s],r.ctx[s]=k)&&(!r.skip_bound&&r.bound[s]&&r.bound[s](k),y&&H(t,s)),b}):[],r.update(),y=!0,i(r.before_update),r.fragment=c?c(r.ctx):!1,e.target){if(e.hydrate){const s=B(e.target);r.fragment&&r.fragment.l(s),s.forEach(O)}else r.fragment&&r.fragment.c();e.intro&&D(t.$$.fragment),F(t,e.target,e.anchor,e.customElement),C()}l(f)}class tt{$destroy(){G(this,1),this.$destroy=w}$on(e,n){const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const o=c.indexOf(n);o!==-1&&c.splice(o,1)}}$set(e){this.$$set&&!N(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{tt as S,W as a,K as b,J as c,O as d,R as e,Y as f,X as g,U as h,Z as i,Q as j,V as l,w as n,i as r,I as s,T as t};
