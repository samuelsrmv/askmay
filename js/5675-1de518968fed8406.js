(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5675],{29938:function(e,t,i){"use strict";var n=i(930),r=i(85696),o=i(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i=e.src,a=e.sizes,f=e.unoptimized,g=void 0!==f&&f,v=e.priority,A=void 0!==v&&v,x=e.loading,k=e.lazyRoot,E=void 0===k?null:k,I=e.lazyBoundary,R=void 0===I?"200px":I,L=e.className,P=e.quality,_=e.width,q=e.height,C=e.style,N=e.objectFit,D=e.objectPosition,W=e.onLoadingComplete,B=e.placeholder,M=void 0===B?"empty":B,U=e.blurDataURL,F=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=l.useContext(u.ImageConfigContext),V=l.useMemo((function(){var e=p||H||s.imageConfigDefault,t=[].concat(o(e.deviceSizes),o(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return h({},e,{allSizes:t,deviceSizes:i})}),[H]),T=F,G=a?"responsive":"intrinsic";"layout"in T&&(T.layout&&(G=T.layout),delete T.layout);var J=j;if("loader"in T){if(T.loader){var Q=T.loader;J=function(e){e.config;var t=m(e,["config"]);return Q(t)}}delete T.loader}var K="";if(function(e){return"object"==typeof e&&(w(e)||function(e){return void 0!==e.src}(e))}(i)){var X=w(i)?i.default:i;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(U=U||X.blurDataURL,K=X.src,!(G&&"fill"===G||(q=q||X.height,_=_||X.width,X.height&&X.width)))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}i="string"==typeof i?i:K;var Y=S(_),Z=S(q),$=S(P),ee=!A&&("lazy"===x||void 0===x);(i.startsWith("data:")||i.startsWith("blob:"))&&(g=!0,ee=!1),y.has(i)&&(ee=!1);var te,ie=l.useState(!1),ne=r(ie,2),re=ne[0],oe=ne[1],ae=d.useIntersection({rootRef:E,rootMargin:R,disabled:!ee}),le=r(ae,3),ce=le[0],se=le[1],de=le[2],ue=!ee||se,fe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ge={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},he=!1,me={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:D},pe=Object.assign({},C,"raw"===G?{}:me),ye="blur"!==M||re?{}:{filter:"blur(20px)",backgroundSize:N||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:D||"0% 0%"};if("fill"===G)fe.display="block",fe.position="absolute",fe.top=0,fe.left=0,fe.bottom=0,fe.right=0;else if(void 0!==Y&&void 0!==Z){var be=Z/Y,ve=isNaN(be)?"100%":"".concat(100*be,"%");"responsive"===G?(fe.display="block",fe.position="relative",he=!0,ge.paddingTop=ve):"intrinsic"===G?(fe.display="inline-block",fe.position="relative",fe.maxWidth="100%",he=!0,ge.maxWidth="100%",te="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===G&&(fe.display="inline-block",fe.position="relative",fe.width=Y,fe.height=Z)}var we={src:b,srcSet:void 0,sizes:void 0};ue&&(we=z({config:V,src:i,unoptimized:g,layout:G,width:Y,quality:$,sizes:a,loader:J}));var ze=i,Se=(n(t={},"imagesrcset",we.srcSet),n(t,"imagesizes",we.sizes),t),je=l.default.useLayoutEffect,Ae=l.useRef(W),Oe=l.useRef(i);l.useEffect((function(){Ae.current=W}),[W]),je((function(){Oe.current!==i&&(de(),Oe.current=i)}),[de,i]);var xe=h({isLazy:ee,imgAttributes:we,heightInt:Z,widthInt:Y,qualityInt:$,layout:G,className:L,imgStyle:pe,blurStyle:ye,loading:x,config:V,unoptimized:g,placeholder:M,loader:J,srcString:ze,onLoadingCompleteRef:Ae,setBlurComplete:oe,setIntersection:ce,isVisible:ue},T);return l.default.createElement(l.default.Fragment,null,"raw"===G?l.default.createElement(O,Object.assign({},xe)):l.default.createElement("span",{style:fe},he?l.default.createElement("span",{style:ge},te?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:te}):null):null,l.default.createElement(O,Object.assign({},xe))),A?l.default.createElement(c.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+we.src+we.srcSet+we.sizes,rel:"preload",as:"image",href:we.srcSet?void 0:we.src},Se))):null)};var a,l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}(i(67294)),c=(a=i(16505))&&a.__esModule?a:{default:a},s=i(35980),d=i(27215),u=i(11059),f=(i(67206),i(24979));function g(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function h(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){g(e,t,i[t])}))}return e}function m(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",experimentalLayoutRaw:!1},y=new Set,b=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),v=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,o=new URL("".concat(t.path).concat(x(i))),a=o.searchParams;return a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||n.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=["f_auto","c_limit","w_"+e.width,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(t.path).concat(n).concat(x(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(x(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function w(e){return void 0!==e.default}function z(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,a=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var r=e.deviceSizes,a=e.allSizes;if(n&&("fill"===i||"responsive"===i||"raw"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var d=.01*Math.min.apply(Math,s);return{widths:a.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,r,c),u=d.widths,f=d.kind,g=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:u[g]})}}function S(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function j(e){var t,i=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=v.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(i))}function A(e,t,i,n,r,o){e&&e.src!==b&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(y.add(t),"blur"===n&&o(!0),null==r?void 0:r.current)){var i=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:a})}})))}var O=function(e){var t=e.imgAttributes,i=e.heightInt,n=e.widthInt,r=e.qualityInt,o=e.layout,a=e.className,c=e.imgStyle,s=e.blurStyle,d=e.isLazy,u=e.placeholder,f=e.loading,g=e.srcString,p=e.config,y=e.unoptimized,b=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,S=e.setIntersection,j=e.onLoad,O=e.onError,x=(e.isVisible,m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},x,t,"raw"===o?{height:i,width:n}:{},{decoding:"async","data-nimg":o,className:a,style:h({},c,s),ref:l.useCallback((function(e){S(e),(null==e?void 0:e.complete)&&A(e,g,0,u,v,w)}),[S,g,o,u,v,w]),onLoad:function(e){A(e.currentTarget,g,0,u,v,w),j&&j(e)},onError:function(e){"blur"===u&&w(!0),O&&O(e)}})),(d||"blur"===u)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},x,z({config:p,src:g,unoptimized:y,layout:o,width:n,quality:r,sizes:t.sizes,loader:b}),"raw"===o?{height:i,width:n}:{},{decoding:"async","data-nimg":o,style:c,className:a,loading:f||"lazy"}))))};function x(e){return"/"===e[0]?e.slice(1):e}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},25675:function(e,t,i){e.exports=i(29938)}}]);