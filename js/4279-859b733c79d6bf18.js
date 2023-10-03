"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4279],{94279:function(e,n,t){t.d(n,{YI:function(){return F}});var r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,a=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&u(e,t,n[t]);if(o)for(var t of o(n))s.call(n,t)&&u(e,t,n[t]);return e};function d(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(void 0===e.marks||Array.isArray(e.marks)&&e.marks.every((e=>"string"==typeof e)))}function m(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||Array.isArray(e.markDefs)&&e.markDefs.every((e=>"string"==typeof e._key)))&&"children"in e&&Array.isArray(e.children)&&e.children.every((e=>"object"==typeof e&&"_type"in e))}function y(e){return m(e)&&"listItem"in e&&"string"==typeof e.listItem&&(void 0===e.level||"number"==typeof e.level)}function p(e){return"@list"===e._type}function f(e){return"@span"===e._type}function h(e){return"@text"===e._type}const k=["strong","em","code","underline","strike-through"];function b(e,n,t){if(!d(e)||!e.marks)return[];if(!e.marks.length)return[];const r=e.marks.slice(),l={};return r.forEach((e=>{l[e]=1;for(let r=n+1;r<t.length;r++){const n=t[r];if(!(n&&d(n)&&Array.isArray(n.marks)&&-1!==n.marks.indexOf(e)))break;l[e]++}})),r.sort(((e,n)=>function(e,n,t){const r=e[n],l=e[t];if(r!==l)return l-r;const i=k.indexOf(n),o=k.indexOf(t);return i!==o?i-o:n.localeCompare(t)}(l,e,n)))}function v(e,n){return(e.level||1)===n.level&&e.listItem===n.listItem}function I(e,n,t){return{_type:"@list",_key:`${e._key||`${n}`}-parent`,mode:t,level:e.level||1,listItem:e.listItem,children:[e]}}function E(e,n){const t=n.level||1,r=n.listItem||"normal",l="string"==typeof n.listItem;if(p(e)&&(e.level||1)===t&&l&&(e.listItem||"normal")===r)return e;if(!("children"in e))return;const i=e.children[e.children.length-1];return i&&!d(i)?E(i,n):void 0}function _(e){let n="";return e.children.forEach((e=>{h(e)?n+=e.text:f(e)&&(n+=_(e))})),n}var g=t(67294),x=Object.defineProperty,w=Object.defineProperties,O=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,T=(e,n,t)=>n in e?x(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,P=(e,n)=>{for(var t in n||(n={}))$.call(n,t)&&T(e,t,n[t]);if(N)for(var t of N(n))j.call(n,t)&&T(e,t,n[t]);return e},A=(e,n)=>w(e,O(n)),D=(e,n)=>{var t={};for(var r in e)$.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&N)for(var r of N(e))n.indexOf(r)<0&&j.call(e,r)&&(t[r]=e[r]);return t};function S(e,n,t){const r=n[t],l=e[t];return"function"==typeof r||r&&"function"==typeof l?r:r?P(P({},l),r):l}const M={textDecoration:"underline"},C=(e,n)=>`Unknown ${e}, specify a component for it in the \`components.${n}\` prop`,L=e=>C(`block type "${e}"`,"types");function B(e){console.warn(e)}const K={display:"none"},q={types:{},block:{normal:({children:e})=>g.createElement("p",null,e),blockquote:({children:e})=>g.createElement("blockquote",null,e),h1:({children:e})=>g.createElement("h1",null,e),h2:({children:e})=>g.createElement("h2",null,e),h3:({children:e})=>g.createElement("h3",null,e),h4:({children:e})=>g.createElement("h4",null,e),h5:({children:e})=>g.createElement("h5",null,e),h6:({children:e})=>g.createElement("h6",null,e)},marks:{em:({children:e})=>g.createElement("em",null,e),strong:({children:e})=>g.createElement("strong",null,e),code:({children:e})=>g.createElement("code",null,e),underline:({children:e})=>g.createElement("span",{style:M},e),"strike-through":({children:e})=>g.createElement("del",null,e),link:({children:e,value:n})=>g.createElement("a",{href:null==n?void 0:n.href},e)},list:{number:({children:e})=>g.createElement("ol",null,e),bullet:({children:e})=>g.createElement("ul",null,e)},listItem:({children:e})=>g.createElement("li",null,e),hardBreak:()=>g.createElement("br",null),unknownType:({value:e,isInline:n})=>{const t=L(e._type);return n?g.createElement("span",{style:K},t):g.createElement("div",{style:K},t)},unknownMark:({markType:e,children:n})=>g.createElement("span",{className:`unknown__pt__mark__${e}`},n),unknownList:({children:e})=>g.createElement("ul",null,e),unknownListItem:({children:e})=>g.createElement("li",null,e),unknownBlockStyle:({children:e})=>g.createElement("p",null,e)},U=(0,g.createContext)(q);function F({value:e,components:n,listNestingMode:t,onMissingComponent:r=B}){const o=r||G,c=function(e,n){const t=[];let r;for(let s=0;s<e.length;s++){const u=e[s];if(u)if(y(u))if(r)if(v(u,r))r.children.push(u);else if((u.level||1)>r.level){const e=I(u,s,n);if("html"===n){const n=r.children[r.children.length-1],t=(o=a({},n),c={children:[...n.children,e]},l(o,i(c)));r.children[r.children.length-1]=t}else r.children.push(e);r=e}else if((u.level||1)<r.level){const e=t[t.length-1],l=e&&E(e,u);if(l){r=l,r.children.push(u);continue}r=I(u,s,n),t.push(r)}else if(u.listItem===r.listItem)console.warn("Unknown state encountered for block",u),t.push(u);else{const e=t[t.length-1],l=e&&E(e,{level:u.level||1});if(l&&l.listItem===u.listItem){r=l,r.children.push(u);continue}r=I(u,s,n),t.push(r)}else r=I(u,s,n),t.push(r);else t.push(u),r=void 0}var o,c;return t}(Array.isArray(e)?e:[e],t||"html"),s=(0,g.useContext)(U),u=(0,g.useMemo)((()=>n?function(e,n){const t=n,{block:r,list:l,listItem:i,marks:o,types:c}=t,s=D(t,["block","list","listItem","marks","types"]);return P(A(P({},e),{block:S(e,n,"block"),list:S(e,n,"list"),listItem:S(e,n,"listItem"),marks:S(e,n,"marks"),types:S(e,n,"types")}),s)}(s,n):s),[s,n]),d=(0,g.useMemo)((()=>Y(u,o)),[u,o]),m=c.map(((e,n)=>d({node:e,index:n,isInline:!1,renderNode:d})));return n?g.createElement(U.Provider,{value:u},m):g.createElement(g.Fragment,null,m)}const Y=(e,n)=>function t(r){const{node:l,index:i,isInline:o}=r,c=l._key||`node-${i}`;return p(l)?function(r,l,i){const o=r.children.map(((e,n)=>t({node:e._key?e:A(P({},e),{_key:`li-${l}-${n}`}),index:l,isInline:!1,renderNode:t}))),c=e.list,s=("function"==typeof c?c:c[r.listItem])||e.unknownList;if(s===e.unknownList){const e=r.listItem||"bullet";n(C(`list style "${e}"`,"list"),{nodeType:"listStyle",type:e})}return g.createElement(s,{key:i,value:r,index:l,isInline:!1,renderNode:t},o)}(l,i,c):y(l)?function(r,l,i){const o=z({node:r,index:l,isInline:!1,renderNode:t}),c=e.listItem,s=("function"==typeof c?c:c[r.listItem])||e.unknownListItem;if(s===e.unknownListItem){const e=r.listItem||"bullet";n(C(`list item style "${e}"`,"listItem"),{type:e,nodeType:"listItemStyle"})}let u=o.children;if(r.style&&"normal"!==r.style){const e=r,{listItem:n}=e;u=t({node:D(e,["listItem"]),index:l,isInline:!1,renderNode:t})}return g.createElement(s,{key:i,value:r,index:l,isInline:!1,renderNode:t},u)}(l,i,c):f(l)?function(r,l,i){const{markDef:o,markType:c,markKey:s}=r,u=e.marks[c]||e.unknownMark,a=r.children.map(((e,n)=>t({node:e,index:n,isInline:!0,renderNode:t})));return u===e.unknownMark&&n((e=>C(`mark type "${e}"`,"marks"))(c),{nodeType:"mark",type:c}),g.createElement(u,{key:i,text:_(r),value:o,markType:c,markKey:s,renderNode:t},a)}(l,0,c):m(l)?function(r,l,i,o){const c=z({node:r,index:l,isInline:o,renderNode:t}),{_key:s}=c,u=D(c,["_key"]),a=u.node.style||"normal",d=("function"==typeof e.block?e.block:e.block[a])||e.unknownBlockStyle;return d===e.unknownBlockStyle&&n(C(`block style "${a}"`,"block"),{nodeType:"blockStyle",type:a}),g.createElement(d,A(P({key:i},u),{value:u.node,renderNode:t}))}(l,i,c,o):h(l)?function(n,t){if("\n"===n.text){const n=e.hardBreak;return n?g.createElement(n,{key:t}):"\n"}return n.text}(l,c):function(r,l,i,o){const c=e.types[r._type],s={value:r,isInline:o,index:l,renderNode:t};if(c)return g.createElement(c,P({key:i},s));n(L(r._type),{nodeType:"block",type:r._type});const u=e.unknownType;return g.createElement(u,P({key:i},s))}(l,i,c,o)};function z(e){const{node:n,index:t,isInline:r,renderNode:l}=e,i=function(e){var n;const{children:t,markDefs:r=[]}=e;if(!t||!t.length)return[];const l=t.map(b),i={_type:"@span",children:[],markType:"<unknown>"};let o=[i];for(let e=0;e<t.length;e++){const i=t[e];if(!i)continue;const c=l[e]||[];let s=1;if(o.length>1)for(;s<o.length;s++){const e=(null==(n=o[s])?void 0:n.markKey)||"",t=c.indexOf(e);if(-1===t)break;c.splice(t,1)}o=o.slice(0,s);let u=o[o.length-1];if(u){for(const e of c){const n=r.find((n=>n._key===e)),t=n?n._type:e,l={_type:"@span",_key:i._key,children:[],markDef:n,markType:t,markKey:e};u.children.push(l),o.push(l),u=l}if(d(i)){const e=i.text.split("\n");for(let n=e.length;n-- >1;)e.splice(n,0,"\n");u.children=u.children.concat(e.map((e=>({_type:"@text",text:e}))))}else u.children=u.children.concat(i)}}return i.children}(n),o=i.map(((e,n)=>l({node:e,isInline:!0,index:n,renderNode:l})));return{_key:n._key||`block-${t}`,children:o,index:t,isInline:r,node:n}}function G(){}}}]);