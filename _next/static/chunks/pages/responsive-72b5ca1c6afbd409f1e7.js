_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[118],{"67po":function(n,r,t){"use strict";t.d(r,"a",(function(){return i}));var e=t("uKU/"),a=t("xx0A"),o=Object(a.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function i(n){return o(Object(e.a)(),n)}},"91Pn":function(n,r,t){"use strict";r.a=Math.random},"G/4L":function(n,r,t){"use strict";t.r(r),t.d(r,"randomUniform",(function(){return a})),t.d(r,"randomInt",(function(){return o})),t.d(r,"randomNormal",(function(){return i.a})),t.d(r,"randomLogNormal",(function(){return u})),t.d(r,"randomBates",(function(){return f})),t.d(r,"randomIrwinHall",(function(){return c})),t.d(r,"randomExponential",(function(){return l})),t.d(r,"randomPareto",(function(){return s})),t.d(r,"randomBernoulli",(function(){return d})),t.d(r,"randomGeometric",(function(){return h})),t.d(r,"randomBinomial",(function(){return m})),t.d(r,"randomGamma",(function(){return p})),t.d(r,"randomBeta",(function(){return v})),t.d(r,"randomWeibull",(function(){return g})),t.d(r,"randomCauchy",(function(){return b})),t.d(r,"randomLogistic",(function(){return M})),t.d(r,"randomPoisson",(function(){return w})),t.d(r,"randomLcg",(function(){return y.a}));var e=t("91Pn"),a=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,1===arguments.length?(t=n,n=0):t-=n,function(){return r()*t+n}}return t.source=n,t}(e.a),o=function n(r){function t(n,t){return arguments.length<2&&(t=n,n=0),n=Math.floor(n),t=Math.floor(t)-n,function(){return Math.floor(r()*t+n)}}return t.source=n,t}(e.a),i=t("VEyW"),u=function n(r){var t=i.a.source(r);function e(){var n=t.apply(this,arguments);return function(){return Math.exp(n())}}return e.source=n,e}(e.a),c=function n(r){function t(n){return(n=+n)<=0?()=>0:function(){for(var t=0,e=n;e>1;--e)t+=r();return t+e*r()}}return t.source=n,t}(e.a),f=function n(r){var t=c.source(r);function e(n){if(0===(n=+n))return r;var e=t(n);return function(){return e()/n}}return e.source=n,e}(e.a),l=function n(r){function t(n){return function(){return-Math.log1p(-r())/n}}return t.source=n,t}(e.a),s=function n(r){function t(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-r(),n)}}return t.source=n,t}(e.a),d=function n(r){function t(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(r()+n)}}return t.source=n,t}(e.a),h=function n(r){function t(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return 0===n?()=>1/0:1===n?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-r())/n)})}return t.source=n,t}(e.a),p=function n(r){var t=i.a.source(r)();function e(n,e){if((n=+n)<0)throw new RangeError("invalid k");if(0===n)return()=>0;if(e=null==e?1:+e,1===n)return()=>-Math.log1p(-r())*e;var a=(n<1?n+1:n)-1/3,o=1/(3*Math.sqrt(a)),i=n<1?()=>Math.pow(r(),1/n):()=>1;return function(){do{do{var n=t(),u=1+o*n}while(u<=0);u*=u*u;var c=1-r()}while(c>=1-.0331*n*n*n*n&&Math.log(c)>=.5*n*n+a*(1-u+Math.log(u)));return a*u*i()*e}}return e.source=n,e}(e.a),v=function n(r){var t=p.source(r);function e(n,r){var e=t(n),a=t(r);return function(){var n=e();return 0===n?0:n/(n+a())}}return e.source=n,e}(e.a),m=function n(r){var t=h.source(r),e=v.source(r);function a(n,r){return n=+n,(r=+r)>=1?()=>n:r<=0?()=>0:function(){for(var a=0,o=n,i=r;o*i>16&&o*(1-i)>16;){var u=Math.floor((o+1)*i),c=e(u,o-u+1)();c<=i?(a+=u,o-=u,i=(i-c)/(1-c)):(o=u-1,i/=c)}for(var f=i<.5,l=t(f?i:1-i),s=l(),d=0;s<=o;++d)s+=l();return a+(f?d:o-d)}}return a.source=n,a}(e.a),g=function n(r){function t(n,t,e){var a;return 0===(n=+n)?a=n=>-Math.log(n):(n=1/n,a=r=>Math.pow(r,n)),t=null==t?0:+t,e=null==e?1:+e,function(){return t+e*a(-Math.log1p(-r()))}}return t.source=n,t}(e.a),b=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,function(){return n+t*Math.tan(Math.PI*r())}}return t.source=n,t}(e.a),M=function n(r){function t(n,t){return n=null==n?0:+n,t=null==t?1:+t,function(){var e=r();return n+t*Math.log(e/(1-e))}}return t.source=n,t}(e.a),w=function n(r){var t=p.source(r),e=m.source(r);function a(n){return function(){for(var a=0,o=n;o>16;){var i=Math.floor(.875*o),u=t(i)();if(u>o)return a+e(i-1,o/u)();a+=i,o-=u}for(var c=-Math.log1p(-r()),f=0;c<=o;++f)c-=Math.log1p(-r());return a+f}}return a.source=n,a}(e.a),y=t("J4UP")},J4UP:function(n,r,t){"use strict";t.d(r,"a",(function(){return a}));const e=1/4294967296;function a(n=Math.random()){let r=0|(0<=n&&n<1?n/e:Math.abs(n));return()=>(r=1664525*r+1013904223|0,e*(r>>>0))}},JmwF:function(n,r,t){"use strict";t.d(r,"a",(function(){return l}));var e=t("aWzz"),a=t.n(e),o=t("ERkP"),i=t.n(o),u=t("O94r"),c=t.n(u);function f(){return(f=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n}).apply(this,arguments)}function l(n){var r=n.top,t=void 0===r?0:r,e=n.left,a=void 0===e?0:e,o=n.transform,u=n.className,l=n.children,s=n.innerRef,d=function(n,r){if(null==n)return{};var t,e,a={},o=Object.keys(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["top","left","transform","className","children","innerRef"]);return i.a.createElement("g",f({ref:s,className:c()("visx-group",u),transform:o||"translate("+a+", "+t+")"},d),l)}l.propTypes={top:a.a.number,left:a.a.number,transform:a.a.string,className:a.a.string,children:a.a.node,innerRef:a.a.oneOfType([a.a.string,a.a.func,a.a.object])}},QfcF:function(n,r,t){"use strict";t.r(r);var e=t("ERkP"),a=t.n(e),o=t("6wy5"),i=t("kV9C"),u=t("DcUO"),c=a.a.createElement;r.default=function(){return c(o.a,{component:i.a,title:"Responsive",codeSandboxDirectoryName:"visx-responsive",packageJson:u},'import React, { useState } from \'react\';\nimport ParentSize from \'@visx/responsive/lib/components/ParentSize\';\n\nimport Lines from \'./Lines\';\n\nexport type ResponsiveProps = {\n  width: number;\n  height: number;\n};\n\nconst Nav = () => (\n  <ul>\n    <li>\n      <span role="img" aria-label="robot">\n        \ud83e\udd16\n      </span>\n    </li>\n    <li>Home</li>\n    <li>Profile</li>\n    <li>Favorites</li>\n    <li>Settings</li>\n  </ul>\n);\n\nexport default function Example({ width, height }: ResponsiveProps) {\n  const [showSidebar, setShowSidebar] = useState<boolean>(true);\n\n  return width < 20 || height < 20 ? null : (\n    <div className="app" style={{ width, height }}>\n      {showSidebar && (\n        <div className="app-nav">\n          <Nav />\n        </div>\n      )}\n      <div className="app-content">\n        <div>\n          <button\n            onClick={event => {\n              // on gallery page, don\'t go to example\n              event.preventDefault();\n              event.stopPropagation();\n              setShowSidebar(!showSidebar);\n            }}\n          >\n            toggle nav\n          </button>\n        </div>\n        <div className="app-graph">\n          <ParentSize className="graph-container" debounceTime={10}>\n            {({ width: visWidth, height: visHeight }) => (\n              <Lines width={visWidth} height={visHeight} />\n            )}\n          </ParentSize>\n        </div>\n      </div>\n\n      <style jsx>{`\n        .app {\n          display: flex;\n        }\n\n        .app-nav {\n          border: 1px solid lightgray;\n          border-right: none;\n          display: flex;\n          flex: 0.5;\n          padding: 1rem;\n        }\n\n        .app-content {\n          display: flex;\n          flex: 1;\n          flex-direction: column;\n          overflow: hidden;\n          padding: 1rem;\n          border: 1px solid lightgray;\n        }\n\n        .app-graph {\n          display: flex;\n          flex: 1;\n          overflow: hidden;\n          background: #222;\n        }\n      `}</style>\n    </div>\n  );\n}\n')}},VEyW:function(n,r,t){"use strict";var e=t("91Pn");r.a=function n(r){function t(n,t){var e,a;return n=null==n?0:+n,t=null==t?1:+t,function(){var o;if(null!=e)o=e,e=null;else do{e=2*r()-1,o=2*r()-1,a=e*e+o*o}while(!a||a>1);return n+t*o*Math.sqrt(-2*Math.log(a)/a)}}return t.source=n,t}(e.a)},Zbhd:function(n,r,t){"use strict";t.d(r,"a",(function(){return u}));var e=t("PB0s"),a=t("XAd9"),o=t("Cyas"),i=t("VBI3");function u(n,r,t,u){var c,f=Object(e.c)(n,r,t);switch((u=Object(a.a)(null==u?",f":u)).type){case"s":var l=Math.max(Math.abs(n),Math.abs(r));return null!=u.precision||isNaN(c=function(n,r){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(o.a)(r)/3)))-Object(o.a)(Math.abs(n)))}(f,l))||(u.precision=c),Object(i.b)(u,l);case"":case"e":case"g":case"p":case"r":null!=u.precision||isNaN(c=function(n,r){return n=Math.abs(n),r=Math.abs(r)-n,Math.max(0,Object(o.a)(r)-Object(o.a)(n))+1}(f,Math.max(Math.abs(n),Math.abs(r))))||(u.precision=c-("e"===u.type));break;case"f":case"%":null!=u.precision||isNaN(c=function(n){return Math.max(0,-Object(o.a)(Math.abs(n)))}(f))||(u.precision=c-2*("%"===u.type))}return Object(i.a)(u)}},geX1:function(n,r,t){"use strict";t.d(r,"a",(function(){return f}));var e=t("ERkP"),a=t.n(e),o=t("O94r"),i=t.n(o),u=t("dGDr");function c(){return(c=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n}).apply(this,arguments)}function f(n){var r=n.children,t=n.data,e=void 0===t?[]:t,o=n.x,f=n.y,l=n.fill,s=void 0===l?"transparent":l,d=n.className,h=n.curve,p=n.innerRef,v=n.defined,m=void 0===v?function(){return!0}:v,g=function(n,r){if(null==n)return{};var t,e,a={},o=Object.keys(n);for(e=0;e<o.length;e++)t=o[e],r.indexOf(t)>=0||(a[t]=n[t]);return a}(n,["children","data","x","y","fill","className","curve","innerRef","defined"]),b=Object(u.c)({x:o,y:f,defined:m,curve:h});return r?a.a.createElement(a.a.Fragment,null,r({path:b})):a.a.createElement("path",c({ref:p,className:i()("visx-linepath",d),d:b(e)||"",fill:s,strokeLinecap:"round"},g))}},"t+gW":function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/responsive",function(){return t("QfcF")}])},"uKU/":function(n,r,t){"use strict";t.d(r,"b",(function(){return u})),t.d(r,"a",(function(){return c}));var e=t("PB0s"),a=t("2+fR"),o=t("W1cA"),i=t("Zbhd");function u(n){var r=n.domain;return n.ticks=function(n){var t=r();return Object(e.a)(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var e=r();return Object(i.a)(e[0],e[e.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var a,o,i=r(),u=0,c=i.length-1,f=i[u],l=i[c],s=10;for(l<f&&(o=f,f=l,l=o,o=u,u=c,c=o);s-- >0;){if((o=Object(e.b)(f,l,t))===a)return i[u]=f,i[c]=l,r(i);if(o>0)f=Math.floor(f/o)*o,l=Math.ceil(l/o)*o;else{if(!(o<0))break;f=Math.ceil(f*o)/o,l=Math.floor(l*o)/o}a=o}return n},n}function c(){var n=Object(a.b)();return n.copy=function(){return Object(a.a)(n,c())},o.b.apply(n,arguments),u(n)}}},[["t+gW",0,2,1,3,4,5,6,7,9,11,47]]]);