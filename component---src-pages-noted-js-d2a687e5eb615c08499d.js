"use strict";(self.webpackChunkdiy_compendium=self.webpackChunkdiy_compendium||[]).push([[841],{8169:function(e,r,t){var s=t(4942),n=t(5987),c=t(5900),o=t.n(c),i=t(7294),d=t(9541),a=t(5893),p=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var h=i.forwardRef((function(e,r){var t=e.bsPrefix,s=e.className,c=e.striped,i=e.bordered,l=e.borderless,h=e.hover,j=e.size,f=e.variant,b=e.responsive,v=(0,n.Z)(e,p),x=(0,d.vE)(t,"table"),y=o()(s,x,f&&"".concat(x,"-").concat(f),j&&"".concat(x,"-").concat(j),c&&"".concat(x,"-").concat("string"==typeof c?"striped-".concat(c):"striped"),i&&"".concat(x,"-bordered"),l&&"".concat(x,"-borderless"),h&&"".concat(x,"-hover")),m=(0,a.jsx)("table",u(u({},v),{},{className:y,ref:r}));if(b){var O="".concat(x,"-responsive");return"string"==typeof b&&(O="".concat(O,"-").concat(b)),(0,a.jsx)("div",{className:O,children:m})}return m}));r.Z=h},9561:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var s=t(5697),n=t.n(s),c=t(3639),o=t(8169),i=t(4961),d=t(262),a=t(5893);function p({data:e}){const r=e.postgres.allEpisodes.nodes.map((r=>({...r,guests:e.postgres.allEpisodeUsers.nodes.filter((e=>e.episodeByEpisodeId.date===r.date)).map((e=>e.discordUserByDiscordUserId.username)).join(", ")})));return(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(d.Z,{title:"Noted Episodes"}),(0,a.jsxs)(c.Z,{children:[(0,a.jsx)("h1",{children:"Noted Episodes"}),(0,a.jsxs)(o.Z,{striped:!0,children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Date"}),(0,a.jsx)("th",{children:"Name"}),(0,a.jsx)("th",{children:"Guests"})]})}),(0,a.jsx)("tbody",{children:r.map((e=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:e.date}),(0,a.jsx)("td",{children:e.name}),(0,a.jsx)("td",{children:e.guests})]},e.id)))})]})]})]})}p.propTypes={data:n().object}}}]);
//# sourceMappingURL=component---src-pages-noted-js-d2a687e5eb615c08499d.js.map