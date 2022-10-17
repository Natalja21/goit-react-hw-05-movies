"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[577],{560:function(n,e,t){t.d(e,{Z:function(){return h}});var r,i,o=t(87),a=t(689),s=t(442),c=t(168),u=t(444),l=u.ZP.ul(r||(r=(0,c.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\n  margin-right: -40px;\n  \n"]))),p=u.ZP.li(i||(i=(0,c.Z)(["\n  flex-basis: calc(100% / 4 - 40px);\n  background: #fff;\n  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);\n  max-width: 200px;\n  margin-right: 40px;\n  margin-bottom: 30px;\n  border-radius: 10px;\n  list-style: none;\n\n  .linkItem {\n    width: 100%;\n    display: inline-block;\n    text-decoration: none;\n    color: black;\n    &:hover {\n      cursor: pointer;\n      color: brown;\n    }\n  }\n\n  .img {\n    padding: 0;\n    margin: 0;\n    height: 260px;\n    width: 100%;\n    display: block;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n  .text {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 5px;\n    margin: 10px 0;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.19;\n    text-align: center;\n    letter-spacing: 0.03em;\n    text-transform: uppercase;\n  }\n"]))),d=t(184),h=function(n){var e=n.filmList,t=(0,a.TH)();return(0,d.jsx)(l,{children:e.map((function(n){var e=n.name,r=n.title,i=n.id,a=n.poster_path;return(0,d.jsx)(p,{children:(0,d.jsxs)(o.rU,{className:"linkItem",to:"/movies/".concat(i),state:{from:t},children:[(0,d.jsx)("img",{className:"img",src:a?"".concat(s.bV,"/").concat(a):"https://assets.zoom.us/images/en-us/desktop/generic/video-not-working.PNG",alt:r||e,width:"200",height:"200"}),(0,d.jsx)("p",{className:"text",children:r||e})]})},i)}))})}},577:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,i=t(982),o=t(861),a=t(885),s=t(757),c=t.n(s),u=t(791),l=t(596),p=t(168),d=t(444).ZP.form(r||(r=(0,p.Z)(["\n  margin: 30px auto;\n  display: flex;\n  justify-content: center;\n  border: 2px solid #000;\n  border-radius: 5px;\n  width: 400px;\n\n  & > input {\n    padding: 8px;\n    width: 100%;\n    border: none;\n    outline: none;\n  }\n  & > button {\n     border: none;\n     background:transparent;\n \n  }\n"]))),h=t(184),x=function(n){var e=(0,u.useState)(""),t=(0,a.Z)(e,2),r=t[0],i=t[1];return(0,h.jsx)("div",{children:(0,h.jsxs)(d,{onSubmit:function(e){e.preventDefault(),""!==r.trim()?(n.onSubmitSearchBar(r),i("")):l.Am.warning("Please, enter query !",{theme:"colored",closeOnClick:!0})},children:[(0,h.jsx)("input",{name:"query",type:"text",autoComplete:"off",value:r,autoFocus:!0,placeholder:"Search movies",onChange:function(n){i(n.currentTarget.value.toLowerCase())}}),(0,h.jsx)("button",{type:"submit",children:(0,h.jsx)("span",{children:"Search"})})]})})},m=t(560),f=t(442),g=t(7),b=t.n(g),v=function(n){var e=n.type,t=n.text,r=n.onLoading;return(0,h.jsx)("div",{children:(0,h.jsx)("button",{type:e,onClick:function(){return r()},children:t})})},w=v;v.prototype={type:b().string.isRequired,text:b().string.isRequired,onLoading:b().func.isRequired};var y=function(){var n=(0,u.useState)([]),e=(0,a.Z)(n,2),t=e[0],r=e[1],s=(0,u.useState)(""),p=(0,a.Z)(s,2),d=p[0],g=p[1],b=(0,u.useState)(1),v=(0,a.Z)(b,2),y=v[0],k=v[1],j=(0,u.useState)(!1),Z=(0,a.Z)(j,2),S=Z[0],C=Z[1];(0,u.useEffect)((function(){if(""!==d){var n=function(){var n=(0,o.Z)(c().mark((function n(){var e,t,o,a,s;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return C(!0),n.prev=1,n.next=4,(0,f.bp)(d,y);case 4:e=n.sent,t=e.results,o=e.total_results,a=e.total_pages,0===o&&(l.Am.warning('Sorry, there are no movies matching search query "'.concat(d,'". Please try again.'),{theme:"colored",closeOnClick:!0}),r([])),r((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(t))})),y<a&&C(!1),n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(1),s=l.Am.warning("Oops, something went wrong try again later!",{theme:"colored",closeOnClick:!0}),n.abrupt("return",s);case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(){return n.apply(this,arguments)}}();n()}else C(!0)}),[d,y]);return(0,h.jsx)("main",{children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(x,{onSubmitSearchBar:function(n){d!==n&&(g((function(e){return n})),r([]))}}),t.length>0&&(0,h.jsx)(m.Z,{filmList:t}),t.length>0&&!S&&(0,h.jsx)(w,{type:"button",text:"Load More",onLoading:function(){k((function(n){return n+1}))}})]})})}}}]);
//# sourceMappingURL=577.d04c60ae.chunk.js.map