(self.webpackChunkdiy_compendium=self.webpackChunkdiy_compendium||[]).push([[303,883],{429:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(9196),c=r(6065),o=r(4272),i=r(8119),s=r(2760),a=r(5893);function l(){return(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(i.Z,{title:"Not Found"}),(0,a.jsx)(n.Z,{children:(0,a.jsx)(c.Z,{children:(0,a.jsxs)(o.Z,{md:"12",children:[(0,a.jsx)("h1",{children:"Not Found"}),(0,a.jsx)("p",{children:"Sorry, this URL is not valid."})]})})})]})}},3886:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var n=r(7294),c=r(1082),o=r(5697),i=r.n(o),s=r(9196),a=r(6065),l=r(4272),d=r(4942),u=r(5987),f=r(8626),p=r.n(f),v=(r(2473),r(536)),j=r(2029),b=r(3605),h=r(9439),O=r(4319),y=r(9422),m=r(9215),x=r(5893),g=["bsPrefix","active","disabled","eventKey","className","variant","action","as"];function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.active,c=e.disabled,o=e.eventKey,i=e.className,s=e.variant,a=e.action,l=e.as,d=(0,u.Z)(e,g);r=(0,b.vE)(r,"list-group-item");var f=(0,y.v)(P({key:(0,m.h)(o,d.href),active:n},d)),v=(0,h.Z)(f,2),j=v[0],w=v[1],Z=(0,O.Z)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();j.onClick(e)}));c&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0);var k=l||(a?d.href?"a":"button":"div");return(0,x.jsx)(k,P(P(P({ref:t},d),j),{},{onClick:Z,className:p()(i,r,w.isActive&&"active",c&&"disabled",s&&"".concat(r,"-").concat(s),a&&"".concat(r,"-action"))}))}));Z.displayName="ListGroupItem";var k=Z,N=["className","bsPrefix","variant","horizontal","numbered","as"];function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=n.forwardRef((function(e,t){var r,n=(0,v.Ch)(e,{activeKey:"onSelect"}),c=n.className,o=n.bsPrefix,i=n.variant,s=n.horizontal,a=n.numbered,l=n.as,d=void 0===l?"div":l,f=(0,u.Z)(n,N),h=(0,b.vE)(o,"list-group");return s&&(r=!0===s?"horizontal":"horizontal-".concat(s)),(0,x.jsx)(j.Z,D(D({ref:t},f),{},{as:d,className:p()(c,h,i&&"".concat(h,"-").concat(i),r&&"".concat(h,"-").concat(r),a&&"".concat(h,"-numbered"))}))}));C.displayName="ListGroup";var L=Object.assign(C,{Item:k}),E=r(8119),S=r(429),F=r(2760),$=r(8439);function z({data:e}){if(!e||!e.allReviewsJson)return(0,x.jsx)(S.default,{});const t=[],r=new Map;for(const{node:n}of e.allReviewsJson.edges){const{vendor:{code:e}}=n;t.find((t=>t.code===e))||(t.push(n.vendor),r.set(e,[])),r.get(e).push(n)}return(0,x.jsxs)(F.Z,{children:[(0,x.jsx)(E.Z,{title:"Flavor Reviews"}),(0,x.jsxs)(s.Z,{children:[(0,x.jsx)(a.Z,{children:(0,x.jsx)(l.Z,{md:"12",children:(0,x.jsx)("h1",{children:"Flavor Reviews"})})}),(0,x.jsx)(a.Z,{children:(0,x.jsx)(l.Z,{md:"12",children:t.map((e=>(0,x.jsxs)(n.Fragment,{children:[(0,x.jsx)("h2",{children:e.name}),(0,x.jsx)(L,{children:r.get(e.code).map((e=>(0,x.jsx)(k,{children:(0,x.jsx)(c.Link,{to:(0,$.getReviewUrl)(e),children:e.title})},`${e.vendor.code}-${e.title}`)))})]},e.code)))})})]})]})}z.propTypes={data:i().shape({allReviewsJson:i().shape({edges:i().arrayOf(i().object)})})}},8439:function(e){e.exports={getReviewUrl:({vendor:{code:e},title:t})=>`/reviews/${e.toLowerCase()}-${t.replace(/"/g,"").replace(/\s+/g,"-").toLowerCase()}`,getListUrl:({code:e})=>`/lists/${e}`}}}]);
//# sourceMappingURL=component---src-pages-reviews-js-6873fd18977aecb699c9.js.map