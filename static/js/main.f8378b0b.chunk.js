(this.webpackJsonpreacticle=this.webpackJsonpreacticle||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),s=c(18),i=c.n(s),o=(c(26),c(27),c(8)),l=function(){return Object(n.jsx)("div",{className:"nav",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(o.b,{to:"/",children:Object(n.jsx)("h2",{children:"React Article"})})})})},d=c(11),j=c.n(d),u=c(16),b=c(20),h=Object(r.createContext)(),O=c(7),x="SENDING REQUEST",p="REQUEST_FINISHED",g="SET_POSTS",v="SET_POST",f=function(e,t){switch(t.type){case x:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case p:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});case g:return Object(O.a)(Object(O.a)({},e),{},{articles:t.payload});case v:return Object(O.a)(Object(O.a)({},e),{},{currentArticlePost:t.payload});default:return e}},m=function(e){var t=Object(r.useReducer)(f,{articles:[],currentArticlePost:null,loading:!0}),c=Object(b.a)(t,2),a=c[0],s=c[1],i=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/posts");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,s({type:x}),s({type:p}),s({type:g,payload:c}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:5000/posts/".concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,s({type:x}),s({type:p}),s({type:v,payload:n}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)(h.Provider,{value:{articles:a.articles,currentArticlePost:a.currentArticlePost,loading:a.loading,getPosts:i,getPostById:o},children:e.children})},y=c(2),N=function(){return Object(n.jsx)("div",{className:"hero",children:Object(n.jsx)("div",{children:"Reacticle"})})},P=function(e){var t=e.title,c=e.image,r=e.author,a=e.date,s=e.id;return Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-image",style:{width:"100%",height:"200px",backgroundImage:"url('".concat(c,"')"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",borderTopColor:"2px",borderTopRightRadius:"2px"}}),Object(n.jsxs)("div",{className:"card-info",children:[Object(n.jsx)("div",{className:"card-title",children:Object(n.jsx)(o.b,{to:"/".concat(s),children:Object(n.jsxs)("h5",{children:[" ",t," "]})})}),Object(n.jsxs)("div",{className:"card-author-section",children:[Object(n.jsxs)("p",{children:[" ",r," "]}),Object(n.jsxs)("p",{children:[" ",a," "]})]})]})]})},k=function(){var e=Object(r.useContext)(h),t=e.getPosts,c=e.articles,a=e.loading;return Object(r.useEffect)((function(){t()}),[]),console.log(c),Object(n.jsx)("div",{className:"articles",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h2",{children:"Articles"}),a?Object(n.jsx)("div",{children:Object(n.jsx)("h4",{children:"Loading..."})}):Object(n.jsx)("div",{className:"articles-grid-container",children:c.map((function(e,t){return Object(n.jsx)(P,{id:e.id,title:e.title,image:e.image,author:e.author,date:e.date},t)}))})]})})},S=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(N,{}),Object(n.jsx)(k,{})]})},T=function(){var e=Object(r.useContext)(h),t=e.getPostById,c=e.currentArticlePost,a=Object(y.f)().articleId;return Object(r.useEffect)((function(){t(a)}),[]),Object(n.jsx)("div",{className:"article",children:c?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"article-image",style:{width:"100%",height:"300px",backgroundImage:"url('".concat(c.image,"')"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",position:"relative",borderTopColor:"2px",borderTopRightRadius:"2px"}}),Object(n.jsxs)("div",{className:"article-content",children:[Object(n.jsxs)("h2",{children:[" ",c.title," "]}),Object(n.jsxs)("p",{align:"justify",children:[" \xa0 \xa0\xa0 ",c.content," "]})]})]}):Object(n.jsx)("div",{children:"Loading..."})})};var E=function(){return Object(n.jsx)(m,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(l,{}),Object(n.jsxs)(y.c,{children:[Object(n.jsx)(y.a,{exact:!0,path:"/",component:S}),Object(n.jsx)(y.a,{exact:!0,path:"/:articleId",component:T})]})]})})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,35)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),I()}},[[34,1,2]]]);
//# sourceMappingURL=main.f8378b0b.chunk.js.map