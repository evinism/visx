_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{"+wNj":function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}e.d(n,"a",(function(){return r}))},"3Dge":function(t,n,e){"use strict";e.r(n);var r=e("ERkP"),i=e.n(r),o=e("6wy5"),c=e("erk3"),a=e("3Ng6"),u=i.a.createElement;n.default=function(){return u(o.a,{component:c.a,title:"Annotation",codeSandboxDirectoryName:"visx-annotation",packageJson:a},"import React from 'react';\nimport { Label, Connector, CircleSubject, LineSubject } from '@visx/annotation';\nimport { LinePath } from '@visx/shape';\n\nimport ExampleControls from './ExampleControls';\nimport findNearestDatum from './findNearestDatum';\n\nexport type AnnotationProps = {\n  width: number;\n  height: number;\n  compact?: boolean;\n};\n\nexport const orange = '#ff7e67';\nexport const greens = ['#ecf4f3', '#68b0ab', '#006a71'];\n\nexport default function Example({ width, height, compact = false }: AnnotationProps) {\n  return (\n    <ExampleControls width={width} height={height} compact={compact}>\n      {({\n        AnnotationComponent,\n        annotationPosition,\n        approxTooltipHeight,\n        connectorType,\n        data,\n        editLabelPosition,\n        editSubjectPosition,\n        getDate,\n        getStockValue,\n        horizontalAnchor,\n        labelWidth,\n        setAnnotationPosition,\n        showAnchorLine,\n        subjectType,\n        subtitle,\n        title,\n        verticalAnchor,\n        xScale,\n        yScale,\n      }) => (\n        <svg width={width} height={height}>\n          <rect width={width} height={height} fill={greens[0]} />\n          <LinePath\n            stroke={greens[2]}\n            strokeWidth={2}\n            data={data}\n            x={d => xScale(getDate(d)) ?? 0}\n            y={d => yScale(getStockValue(d)) ?? 0}\n          />\n          <AnnotationComponent\n            width={width}\n            height={height}\n            x={annotationPosition.x}\n            y={annotationPosition.y}\n            dx={annotationPosition.dx}\n            dy={annotationPosition.dy}\n            canEditLabel={editLabelPosition}\n            canEditSubject={editSubjectPosition}\n            onDragEnd={({ event, ...nextPosition }) => {\n              // snap Annotation to the nearest data point\n              const nearestDatum = findNearestDatum({\n                accessor: subjectType === 'horizontal-line' ? getStockValue : getDate,\n                data,\n                scale: subjectType === 'horizontal-line' ? yScale : xScale,\n                value: subjectType === 'horizontal-line' ? nextPosition.y : nextPosition.x,\n              });\n              const x = xScale(getDate(nearestDatum)) ?? 0;\n              const y = yScale(getStockValue(nearestDatum)) ?? 0;\n\n              // flip label to keep in view\n              const shouldFlipDx =\n                (nextPosition.dx > 0 && x + nextPosition.dx + labelWidth > width) ||\n                (nextPosition.dx < 0 && x + nextPosition.dx - labelWidth <= 0);\n              const shouldFlipDy = // 100 is est. tooltip height\n                (nextPosition.dy > 0 && height - (y + nextPosition.dy) < approxTooltipHeight) ||\n                (nextPosition.dy < 0 && y + nextPosition.dy - approxTooltipHeight <= 0);\n              setAnnotationPosition({\n                x,\n                y,\n                dx: (shouldFlipDx ? -1 : 1) * nextPosition.dx,\n                dy: (shouldFlipDy ? -1 : 1) * nextPosition.dy,\n              });\n            }}\n          >\n            <Connector stroke={orange} type={connectorType} />\n            <Label\n              backgroundFill=\"white\"\n              showAnchorLine={showAnchorLine}\n              anchorLineStroke={greens[2]}\n              backgroundProps={{ stroke: greens[1] }}\n              fontColor={greens[2]}\n              horizontalAnchor={horizontalAnchor}\n              subtitle={subtitle}\n              title={title}\n              verticalAnchor={verticalAnchor}\n              width={labelWidth}\n            />\n            {subjectType === 'circle' && <CircleSubject stroke={orange} />}\n            {subjectType !== 'circle' && (\n              <LineSubject\n                orientation={subjectType === 'vertical-line' ? 'vertical' : 'horizontal'}\n                stroke={orange}\n                min={0}\n                max={subjectType === 'vertical-line' ? height : width}\n              />\n            )}\n          </AnnotationComponent>\n        </svg>\n      )}\n    </ExampleControls>\n  );\n}\n")}},"67po":function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e("uKU/"),i=e("xx0A"),o=Object(i.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function c(t){return o(Object(r.a)(),t)}},BqYg:function(t,n){function e(t,n,e){var r,i,o,c,a;function u(){var s=Date.now()-c;s<n&&s>=0?r=setTimeout(u,n-s):(r=null,e||(a=t.apply(o,i),o=i=null))}null==n&&(n=100);var s=function(){o=this,i=arguments,c=Date.now();var s=e&&!r;return r||(r=setTimeout(u,n)),s&&(a=t.apply(o,i),o=i=null),a};return s.clear=function(){r&&(clearTimeout(r),r=null)},s.flush=function(){r&&(a=t.apply(o,i),o=i=null,clearTimeout(r),r=null)},s}e.debounce=e,t.exports=e},"VB+g":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("rkTo"),i=e("ZQHj");function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var c={x:0,y:0};function a(t,n){if(!t||!n)return null;var e=function(t){if(!t)return o({},c);if(Object(i.g)(t))return t.changedTouches.length>0?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:o({},c);if(Object(i.c)(t))return{x:t.clientX,y:t.clientY};var n=null==t?void 0:t.target,e=n&&"getBoundingClientRect"in n?n.getBoundingClientRect():null;return e?{x:e.x+e.width/2,y:e.y+e.height/2}:o({},c)}(n),a=Object(i.d)(t)?t.ownerSVGElement:t,u=Object(i.e)(a)?a.getScreenCTM():null;if(Object(i.f)(a)&&u){var s=a.createSVGPoint();return s.x=e.x,s.y=e.y,s=s.matrixTransform(u.inverse()),new r.a({x:s.x,y:s.y})}var l=t.getBoundingClientRect();return new r.a({x:e.x-l.left-t.clientLeft,y:e.y-l.top-t.clientTop})}},ZQHj:function(t,n,e){"use strict";function r(t){return!!t&&t instanceof Element}function i(t){return!!t&&(t instanceof SVGElement||"ownerSVGElement"in t)}function o(t){return!!t&&"createSVGPoint"in t}function c(t){return!!t&&"getScreenCTM"in t}function a(t){return!!t&&"changedTouches"in t}function u(t){return!!t&&"clientX"in t}function s(t){return!!t&&(t instanceof Event||"nativeEvent"in t&&t.nativeEvent instanceof Event)}e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return i})),e.d(n,"f",(function(){return o})),e.d(n,"e",(function(){return c})),e.d(n,"g",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"b",(function(){return s}))},Zbhd:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("PB0s"),i=e("XAd9"),o=e("Cyas"),c=e("VBI3");function a(t,n,e,a){var u,s=Object(r.c)(t,n,e);switch((a=Object(i.a)(null==a?",f":a)).type){case"s":var l=Math.max(Math.abs(t),Math.abs(n));return null!=a.precision||isNaN(u=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(o.a)(n)/3)))-Object(o.a)(Math.abs(t)))}(s,l))||(a.precision=u),Object(c.b)(a,l);case"":case"e":case"g":case"p":case"r":null!=a.precision||isNaN(u=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Object(o.a)(n)-Object(o.a)(t))+1}(s,Math.max(Math.abs(t),Math.abs(n))))||(a.precision=u-("e"===a.type));break;case"f":case"%":null!=a.precision||isNaN(u=function(t){return Math.max(0,-Object(o.a)(Math.abs(t)))}(s))||(a.precision=u-2*("%"===a.type))}return Object(c.a)(a)}},geX1:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("ERkP"),i=e.n(r),o=e("O94r"),c=e.n(o),a=e("dGDr");function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function s(t){var n=t.children,e=t.data,r=void 0===e?[]:e,o=t.x,s=t.y,l=t.fill,d=void 0===l?"transparent":l,f=t.className,h=t.curve,p=t.innerRef,b=t.defined,g=void 0===b?function(){return!0}:b,v=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,["children","data","x","y","fill","className","curve","innerRef","defined"]),m=Object(a.c)({x:o,y:s,defined:g,curve:h});return n?i.a.createElement(i.a.Fragment,null,n({path:m})):i.a.createElement("path",u({ref:p,className:c()("visx-linepath",f),d:m(r)||"",fill:d,strokeLinecap:"round"},v))}},hdX1:function(t,n,e){"use strict";var r=e("ViZ6"),i=e.n(r);n.a=i()((function(t,n){try{var e=document.getElementById("__react_svg_text_measurement_id");if(!e){var r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.style.width="0",r.style.height="0",r.style.position="absolute",r.style.top="-100%",r.style.left="-100%",(e=document.createElementNS("http://www.w3.org/2000/svg","text")).setAttribute("id","__react_svg_text_measurement_id"),r.appendChild(e),document.body.appendChild(r)}return Object.assign(e.style,n),e.textContent=t,e.getComputedTextLength()}catch(i){return null}}),(function(t,n){return t+"_"+JSON.stringify(n)}))},j1R1:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var r=e("ERkP"),i=e("leIH"),o=e.n(i),c=e("hdX1");function a(t){return"number"===typeof t}function u(t){return"number"===typeof t&&Number.isFinite(t)||"string"===typeof t}function s(t){var n=t.verticalAnchor,e=void 0===n?"end":n,i=t.scaleToFit,s=void 0!==i&&i,l=t.angle,d=t.width,f=t.lineHeight,h=void 0===f?"1em":f,p=t.capHeight,b=void 0===p?"0.71em":p,g=t.children,v=t.style,m=function(t,n){if(null==t)return{};var e,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,["verticalAnchor","scaleToFit","angle","width","lineHeight","capHeight","children","style"]),y=m.x,x=void 0===y?0:y,w=m.y,j=void 0===w?0:w,O=!u(x)||!u(j),E=Object(r.useMemo)((function(){return{wordsWithWidth:(null==g?[]:g.toString().split(/(?:(?!\u00A0+)\s+)/)).map((function(t){return{word:t,wordWidth:Object(c.a)(t,v)||0}})),spaceWidth:Object(c.a)("\xa0",v)||0}}),[g,v]),P=E.wordsWithWidth,S=E.spaceWidth,T=Object(r.useMemo)((function(){return O?[]:d||s?P.reduce((function(t,n){var e=n.word,r=n.wordWidth,i=t[t.length-1];if(i&&(null==d||s||(i.width||0)+r+S<d))i.words.push(e),i.width=i.width||0,i.width+=r+S;else{var o={words:[e],width:r};t.push(o)}return t}),[]):[{words:null==g?[]:g.toString().split(/(?:(?!\u00A0+)\s+)/)}]}),[O,d,s,g,P,S]),k=Object(r.useMemo)((function(){return O?"":"start"===e?o()("calc("+b+")"):"middle"===e?o()("calc("+(T.length-1)/2+" * -"+h+" + ("+b+" / 2))"):o()("calc("+(T.length-1)+" * -"+h+")")}),[O,e,b,T.length,h]),C=Object(r.useMemo)((function(){var t=[];if(O)return"";if(a(x)&&a(j)&&a(d)&&s&&T.length>0){var n=T[0].width||1,e=d/n,r=e,i=x-e*x,o=j-r*j;t.push("matrix("+e+", 0, 0, "+r+", "+i+", "+o+")")}return l&&t.push("rotate("+l+", "+x+", "+j+")"),t.length>0?t.join(" "):""}),[O,x,j,d,s,T,l]);return{wordsByLines:T,startDy:k,transform:C}}},jpI8:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e("VB+g"),i=e("ZQHj");function o(t,n){if(Object(i.a)(t)&&n)return Object(r.a)(t,n);if(Object(i.b)(t)){var e=t,o=e.target;if(o)return Object(r.a)(o,e)}return null}},oHGN:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/annotation",function(){return e("3Dge")}])},rkTo:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return i}));var i=function(){function t(t){var n=t.x,e=void 0===n?0:n,i=t.y,o=void 0===i?0:i;r(this,"x",0),r(this,"y",0),this.x=e,this.y=o}var n=t.prototype;return n.value=function(){return{x:this.x,y:this.y}},n.toArray=function(){return[this.x,this.y]},t}()},"uKU/":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"a",(function(){return u}));var r=e("PB0s"),i=e("2+fR"),o=e("W1cA"),c=e("Zbhd");function a(t){var n=t.domain;return t.ticks=function(t){var e=n();return Object(r.a)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var r=n();return Object(c.a)(r[0],r[r.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var i,o,c=n(),a=0,u=c.length-1,s=c[a],l=c[u],d=10;for(l<s&&(o=s,s=l,l=o,o=a,a=u,u=o);d-- >0;){if((o=Object(r.b)(s,l,e))===i)return c[a]=s,c[u]=l,n(c);if(o>0)s=Math.floor(s/o)*o,l=Math.ceil(l/o)*o;else{if(!(o<0))break;s=Math.ceil(s*o)/o,l=Math.floor(l*o)/o}i=o}return t},t}function u(){var t=Object(i.b)();return t.copy=function(){return Object(i.a)(t,u())},o.b.apply(t,arguments),a(t)}},x7Vb:function(t,n,e){"use strict";var r=e("ERkP"),i=e("BqYg");const o=["x","y","top","bottom","left","right","width","height"],c=(t,n)=>o.every(e=>t[e]===n[e]);n.a=function({debounce:t,scroll:n,polyfill:e}={debounce:0,scroll:!1}){const o=e||("undefined"===typeof window?class{}:window.ResizeObserver);if(!o)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[a,u]=Object(r.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),s=Object(r.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:a}),l=t?"number"===typeof t?t:t.scroll:null,d=t?"number"===typeof t?t:t.resize:null,f=Object(r.useRef)(!1);Object(r.useEffect)(()=>(f.current=!0,()=>{f.current=!1}));const[h,p,b]=Object(r.useMemo)(()=>{const t=()=>{if(!s.current.element)return;const{left:t,top:n,width:e,height:r,bottom:i,right:o,x:a,y:l}=s.current.element.getBoundingClientRect(),d={left:t,top:n,width:e,height:r,bottom:i,right:o,x:a,y:l};Object.freeze(d),f.current&&!c(s.current.lastBounds,d)&&u(s.current.lastBounds=d)};return[t,d?Object(i.debounce)(t,d):t,l?Object(i.debounce)(t,l):t]},[u,l,d]);function g(){s.current.scrollContainers&&(s.current.scrollContainers.forEach(t=>t.removeEventListener("scroll",b,!0)),s.current.scrollContainers=null),s.current.resizeObserver&&(s.current.resizeObserver.disconnect(),s.current.resizeObserver=null)}function v(){s.current.element&&(s.current.resizeObserver=new o(b),s.current.resizeObserver.observe(s.current.element),n&&s.current.scrollContainers&&s.current.scrollContainers.forEach(t=>t.addEventListener("scroll",b,{capture:!0,passive:!0})))}var m,y,x;return m=b,y=Boolean(n),Object(r.useEffect)(()=>{if(y){const t=m;return window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",t,!0)}}},[m,y]),x=p,Object(r.useEffect)(()=>{const t=x;return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[x]),Object(r.useEffect)(()=>{g(),v()},[n,b,p]),Object(r.useEffect)(()=>g,[]),[t=>{t&&t!==s.current.element&&(g(),s.current.element=t,s.current.scrollContainers=function t(n){const e=[];if(!n||n===document.body)return e;const{overflow:r,overflowX:i,overflowY:o}=window.getComputedStyle(n);[r,i,o].some(t=>"auto"===t||"scroll"===t)&&e.push(n);return[...e,...t(n.parentElement)]}(t),v())},a,h]}},zjfJ:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))}},[["oHGN",0,2,1,3,4,5,6,7,11,12,16,30,42]]]);