(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[167],{9435:function(n,e,t){"use strict";t.d(e,{_L:function(){return s},bV:function(){return d},bp:function(){return u},dB:function(){return p},l$:function(){return l},ug:function(){return f}});var r=t(5861),a=t(7757),o=t.n(a),i={api_key:"d7d9ab2863712e08ff43c2cdf6d8066a"},c=t(1044).Z.create({baseURL:"https://api.themoviedb.org/3",params:i}),s=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(o().mark((function n(e,t){var r,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:e,page:t}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("\n/movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d="https://image.tmdb.org/t/p/original"},6560:function(n,e,t){"use strict";t.d(e,{Z:function(){return x}});var r,a,o=t(1087),i=t(7689),c=t(9435),s=t(168),u=t(6444),p=u.ZP.ul(r||(r=(0,s.Z)(["\ndisplay: flex;\nflex-wrap: wrap;\n  margin-right: -30px;\n"]))),l=u.ZP.li(a||(a=(0,s.Z)(["\n  flex-basis: calc(100% / 5 - 30px);\n  background: transparent ;\n  box-shadow: 0 6px 18px rgb(0 0 0 / 10%);\n  margin-right: 30px;\n  margin-bottom: 30px;\n  border-radius: 5px;\n  list-style: none;\n  :hover {\n      transform: scale(1.02);\n        cursor: pointer;\n        box-shadow: 0px 0px 59px -17px rgba(255, 107, 1, 1), inset 0px 0px 24px -9px rgba(84, 84, 84, 0.5);\n      color: brown;\n    }\n  \n\n  .linkItem {\n    width: 100%;\n    display: inline-block;\n    text-decoration: none;\n    color: black;  \n  }\n\n  .img {\n    padding: 0;\n    margin: 0;\n    height: 100%;\n    width: 100%;\n    display: block;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n  }\n  .text {\n    margin: 10px;\n    font-weight: 700;\n    font-size: 15px;\n    line-height: 1.2;\n    text-align: center;\n    letter-spacing: 0.03em;\n    text-transform: uppercase;\n  }\n"]))),f=t(1787),d=t(184),x=function(n){var e=n.filmList,t=(0,i.TH)();return(0,d.jsx)(p,{children:e.map((function(n){var e=n.name,r=n.title,a=n.id,i=n.poster_path;return(0,d.jsx)(l,{children:(0,d.jsxs)(o.rU,{className:"linkItem",to:"/movies/".concat(a),state:{from:t},children:[(0,d.jsx)("img",{className:"img",src:i?"".concat(c.bV,"/").concat(i):"".concat(f),alt:r||e}),(0,d.jsx)("p",{className:"text",children:r||e})]})},a)}))})}},167:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var r,a,o,i=t(2982),c=t(5861),s=t(885),u=t(7757),p=t.n(u),l=t(2791),f=t(7596),d=t(168),x=t(6444),h=x.ZP.form(r||(r=(0,d.Z)(["\n  margin: 30px auto;\n  display: flex;\n  justify-content: center;\n  border: 2px solid orange;\n  border-radius: 10px;\n  width: 400px;\n  box-shadow: 0px 0px 59px -17px rgba(255, 107, 1, 1),\n    inset 0px 0px 24px -9px rgba(84, 84, 84, 0.5);\n\n  & > input {\n    padding: 8px;\n    width: 100%;\n    border: none;\n    outline: none;\n    color: orange;\n    background: transparent;\n    :hover,\n    :focus {\n      color: black;\n    }\n  }\n  & > button {\n    border: none;\n    background: transparent;\n    color: orange;\n    :hover {\n      color: black;\n    }\n  }\n"]))),g=t(184),m=function(n){var e=(0,l.useState)(""),t=(0,s.Z)(e,2),r=t[0],a=t[1];return(0,g.jsx)("div",{children:(0,g.jsxs)(h,{onSubmit:function(e){e.preventDefault(),""!==r.trim()?(n.onSubmitSearchBar(r),a("")):f.Am.warning("Please, enter query !",{theme:"colored",closeOnClick:!0})},children:[(0,g.jsx)("input",{name:"query",type:"text",autoComplete:"off",value:r,autoFocus:!0,placeholder:"Search movies",onChange:function(n){a(n.currentTarget.value.toLowerCase())}}),(0,g.jsx)("button",{type:"submit",children:(0,g.jsx)("span",{children:"Search"})})]})})},b=t(6560),v=t(9435),y=t(2007),w=t.n(y),k=x.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),Z=x.ZP.button(o||(o=(0,d.Z)(["\n  background-color: transparent;\n  padding: 10px 12px;\n  width: 400px;\n  font-weight: 900;\n  font-size: 16px;\n  line-height: 1.87;\n  align-items: center;\n  margin: 10px 0;\n  border: 2px solid orange;\n  border-radius: 10px;\n  box-shadow: 0px 0px 59px -17px rgba(255, 107, 1, 1),\n    inset 0px 0px 24px -9px rgba(84, 84, 84, 0.5);\n  color: orange;\n  :hover {\n    color: black;\n  }\n"]))),j=function(n){var e=n.type,t=n.text,r=n.onLoading;return(0,g.jsx)(k,{children:(0,g.jsx)(Z,{type:e,onClick:function(){return r()},children:t})})},_=j;j.prototype={type:w().string.isRequired,text:w().string.isRequired,onLoading:w().func.isRequired};var S=function(){var n=(0,l.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(""),o=(0,s.Z)(a,2),u=o[0],d=o[1],x=(0,l.useState)(1),h=(0,s.Z)(x,2),y=h[0],w=h[1],k=(0,l.useState)(!1),Z=(0,s.Z)(k,2),j=Z[0],S=Z[1];(0,l.useEffect)((function(){if(""!==u){var n=function(){var n=(0,c.Z)(p().mark((function n(){var e,t,a,o,c;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return S(!0),n.prev=1,n.next=4,(0,v.bp)(u,y);case 4:e=n.sent,t=e.results,a=e.total_results,o=e.total_pages,0===a&&(f.Am.warning('Sorry, there are no movies matching search query "'.concat(u,'". Please try again.'),{theme:"colored",closeOnClick:!0}),r([])),r((function(n){return[].concat((0,i.Z)(n),(0,i.Z)(t))})),y<o&&S(!1),n.next=17;break;case 13:return n.prev=13,n.t0=n.catch(1),c=f.Am.warning("Oops, something went wrong try again later!",{theme:"colored",closeOnClick:!0}),n.abrupt("return",c);case 17:case"end":return n.stop()}}),n,null,[[1,13]])})));return function(){return n.apply(this,arguments)}}();n()}else S(!0)}),[u,y]);return(0,g.jsx)("main",{children:(0,g.jsxs)("div",{className:"container",children:[(0,g.jsx)(m,{onSubmitSearchBar:function(n){u!==n&&(d((function(e){return n})),r([]))}}),t.length>0&&(0,g.jsx)(b.Z,{filmList:t}),t.length>0&&!j&&(0,g.jsx)(_,{type:"button",text:"Load More",onLoading:function(){w((function(n){return n+1}))}})]})})}},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function o(){}o.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1787:function(n,e,t){"use strict";n.exports=t.p+"static/media/camera-2008489_640.b2e9ad6fdb1576521596.png"}}]);
//# sourceMappingURL=167.d1a06447.chunk.js.map