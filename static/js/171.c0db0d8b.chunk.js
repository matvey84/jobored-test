"use strict";(self.webpackChunkjobored=self.webpackChunkjobored||[]).push([[171],{5702:function(n,a,t){t.d(a,{Z:function(){return C}});var e=t(3433),r=t(9439),i=t(2791),c=t(7689),s=t(3796),o=t(3153),u=t(1323),l=t(1413),d=t(5984),f=t(1087),m=t(8026),g=t(7472),p=t(3329),h=(0,i.memo)((function(n){var a=(0,o.T)(),t=(0,c.TH)(),e=n.numIndex,h=n.buttonCreate,v=(0,o.C)((function(n){return n.paginationStateSlice.currentPage})),x=(0,o.C)((function(n){return n.paginationStateSlice.currentPageForFavoritePage})),C=(0,i.useState)(0),j=(0,r.Z)(C,2),y=j[0],b=j[1],w=(0,f.lr)(),S=(0,r.Z)(w,2),N=(S[0],S[1]),P=(0,o.C)((function(n){return n.dataSlice.fetchQuery}));return(0,i.useEffect)((function(){return t.pathname.includes("favorite")?b(x):b(v)}),[v,x,t.pathname]),(0,p.jsx)(p.Fragment,{children:h().length?h()[e].map((function(n){return(0,p.jsx)("button",{className:"btn-page",id:String(n),disabled:n===y,onClick:function(n){return function(n){var e=(0,l.Z)({},P);e.page=Number(n.currentTarget.id),t.pathname.includes("favorite")&&a((0,u.bp)(Number(n.currentTarget.id))),!t.pathname.includes("favorite")&&a((0,u.D4)(Number(n.currentTarget.id))),a((0,g.l6)(e)),a((0,m.HQ)((0,s.kY)(e))),N((0,s.kY)(e).trim())}(n)},children:(0,p.jsx)("span",{id:String(n),className:"btn-page-text",children:n})},(0,d.x0)())})):(0,p.jsx)(p.Fragment,{})})})),v=function(n){return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("svg",{className:"arrowSVG",width:"30",height:"30",viewBox:"0 0 32 32",fill:n.disabled?"#5E96FC":"none",xmlns:"http://www.w3.org/2000/svg",children:(0,p.jsx)("path",{d:"M15.367 16L18.667 12.7L17.724 11.757L13.481 16L17.724 20.243L18.667 19.3L15.367 16Z",fill:n.disabled?"#FFFFFF":"#7B7C88"})})})},x=function(n){var a=n.id,t=n.contexClass,e=n.numIndex,i=n.disabled,d=(0,o.T)(),h=(0,c.TH)(),x=(0,o.C)((function(n){return n.paginationStateSlice.firstAndLastPaginationPages})),C=(0,f.lr)(),j=(0,r.Z)(C,2),y=(j[0],j[1]),b=(0,o.C)((function(n){return n.dataSlice.fetchQuery}));return(0,p.jsx)("button",{className:"btn-arrow ".concat(t),id:a,onClick:function(n){return function(n){var a=(0,l.Z)({},b);"right-arrow"===n.currentTarget.id&&(h.pathname.includes("favorite")?d((0,u.nU)(e+1)):d((0,u.Iv)(e+1)),a.page=x.lastPaginationPage+1),"left-arrow"===n.currentTarget.id&&(h.pathname.includes("favorite")?d((0,u.nU)(e-1)):d((0,u.Iv)(e-1)),a.page=x.firstPaginationPage-1),!h.pathname.includes("favorite")&&d((0,m.HQ)((0,s.kY)(a))),d((0,g.l6)(a)),h.pathname.includes("favorite")?d((0,u.bp)(Number(a.page))):d((0,u.D4)(Number(a.page))),y((0,s.kY)(a))}(n)},disabled:i,children:(0,p.jsx)(v,{disabled:i})})};var C=function(n){var a=n.numIndex,t=n.pagesAmmount,l=n.totalVacancies,d=(0,o.T)(),f=(0,c.TH)(),m=(0,o.C)((function(n){return n.dataSlice.pageCount})),g=(0,i.useState)(!0),v=(0,r.Z)(g,2),C=v[0],j=v[1],y=(0,i.useState)(!1),b=(0,r.Z)(y,2),w=b[0],S=b[1],N=(0,o.C)((function(n){return n.paginationStateSlice.firstAndLastPaginationPages})),P=(0,i.useCallback)((function(){return(0,s.mB)(t,a)}),[a,t]);return(0,i.useEffect)((function(){var n={firstPaginationPage:Math.min.apply(Math,(0,e.Z)(P()[a])),lastPaginationPage:Math.max.apply(Math,(0,e.Z)(P()[a]))};d((0,u.bG)(n))}),[P,d,f.pathname,a]),(0,i.useEffect)((function(){j(N.firstPaginationPage-1<=1),S((N.lastPaginationPage-1)*Number(m)>=l-Number(m))}),[l,N.lastPaginationPage,f.pathname,a,m,N.firstPaginationPage]),(0,p.jsx)("div",{className:"paginator-wrapper",children:(0,p.jsxs)("div",{className:"paginator",children:[(0,p.jsx)(x,{id:"left-arrow",contexClass:"left-arrow",numIndex:a,disabled:C}),P().length?(0,p.jsx)(h,{numIndex:a,pagesAmmount:t,buttonCreate:P}):(0,p.jsx)(p.Fragment,{}),(0,p.jsx)(x,{id:"right-arrow",contexClass:"right-arrow",numIndex:a,disabled:w})]})})}},4821:function(n,a,t){t.d(a,{Z:function(){return l}});t(2791);var e=t(3329),r=function(){return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("svg",{width:"16",height:"18",viewBox:"0 0 16 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,e.jsx)("path",{d:"M12.714 12.8807C11.9335 13.6612 10.3013 15.2935 9.17814 16.4166C8.52727 17.0675 7.47304 17.0678 6.82217 16.4169C5.7186 15.3134 4.11797 13.7127 3.28593 12.8807C0.682439 10.2772 0.682439 6.05612 3.28593 3.45262C5.88943 0.849126 10.1105 0.849126 12.714 3.45262C15.3175 6.05612 15.3175 10.2772 12.714 12.8807Z",stroke:"#ACADB9",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),(0,e.jsx)("path",{d:"M10.5 8.16667C10.5 9.54738 9.38069 10.6667 7.99998 10.6667C6.61927 10.6667 5.49998 9.54738 5.49998 8.16667C5.49998 6.78595 6.61927 5.66667 7.99998 5.66667C9.38069 5.66667 10.5 6.78595 10.5 8.16667Z",stroke:"#ACADB9",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]})})},i=t(3153),c=t(7472),s=function(n){var a=(0,i.C)((function(n){return n.dataSlice.favoriteVacancyList}));return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("svg",{width:"22",height:"20",viewBox:"0 0 22 20",fill:a.some((function(a){return Number(a.id)===Number(n.id)}))?"#5E96FC":"none",xmlns:"http://www.w3.org/2000/svg",className:"star",children:(0,e.jsx)("path",{d:"M9.97183 1.70846C10.4382 0.933481 11.5618 0.933482 12.0282 1.70847L14.3586 5.58087C14.5262 5.85928 14.7995 6.05784 15.116 6.13116L19.5191 7.15091C20.4002 7.35499 20.7474 8.42356 20.1545 9.10661L17.1918 12.5196C16.9788 12.765 16.8744 13.0863 16.9025 13.41L17.2932 17.9127C17.3714 18.8138 16.4625 19.4742 15.6296 19.1214L11.4681 17.3583C11.1689 17.2316 10.8311 17.2316 10.5319 17.3583L6.37038 19.1214C5.53754 19.4742 4.62856 18.8138 4.70677 17.9127L5.09754 13.41C5.12563 13.0863 5.02124 12.765 4.80823 12.5196L1.8455 9.1066C1.25257 8.42356 1.59977 7.35499 2.48095 7.15091L6.88397 6.13116C7.20053 6.05784 7.47383 5.85928 7.64138 5.58087L9.97183 1.70846Z",stroke:"#ACADB9",strokeWidth:"1.5"})})})},o=function(n){var a=(0,i.T)();return(0,e.jsx)("button",{id:n.id,className:"add-favorite-vacancy-button","data-elem":"vacancy-".concat(n.id,"-shortlist-button"),onClick:function(n){return function(n){n.stopPropagation(),a((0,c.rR)(n.currentTarget.id))}(n)},children:(0,e.jsx)(s,{id:n.id})})},u=t(7689);var l=function(n){var a=n.data,t=(0,u.TH)(),i=(0,u.s0)();return(0,e.jsxs)("section",{onClick:function(){!t.pathname.includes("".concat(a.id))&&i("/vacancy/".concat(a.id))},className:"vacancy",id:String(a.id),"data-elem":"vacancy-".concat(String(a.id)),children:[(0,e.jsxs)("article",{className:"vacancy-short-info",children:[t.pathname.includes("".concat(a.id))?(0,e.jsx)("h2",{className:"vacancy-title",children:a.profession}):(0,e.jsx)("h3",{className:"vacancy-title",children:a.profession}),(0,e.jsxs)("section",{className:"vacancy-offers",children:[(0,e.jsx)("span",{className:"vacancy-salary",children:a.payment_from<=0&&a.payment_to<=0?"\u0437/\u043f \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430":a.payment_from<=0?null:"\u0437/\u043f \u043e\u0442 ".concat(a.payment_from," ").concat(a.currency)}),a.payment_to<=0||a.payment_from<=0?"":(0,e.jsx)("b",{children:"-"}),(0,e.jsx)("span",{className:"vacancy-salary",children:a.payment_from<=0&&a.payment_to<=0?null:a.payment_from<=0?"\u0437/\u043f \u0434\u043e ".concat(a.payment_to," ").concat(a.currency):a.payment_to<=0?null:"\u0434\u043e ".concat(a.payment_to," ").concat(a.currency)}),(0,e.jsx)("b",{children:"\u2022"}),(0,e.jsx)("span",{className:"vacancy-working-mode",children:a.type_of_work.title})]}),(0,e.jsxs)("p",{className:"vacancy-location",children:[(0,e.jsx)("span",{className:"point",children:(0,e.jsx)(r,{})}),(0,e.jsx)("span",{className:"city",children:a.town.title})]})]}),(0,e.jsx)(o,{id:String(a.id)})]})}},37:function(n,a,t){t(2791);var e=t(4821),r=t(6382),i=t(6184),c=t(6183),s=t(3329);a.Z=function(n){var a=n.vacancyData,t=n.spinnerStatus;return(0,s.jsx)("div",{className:"vacancy-list__wrapper",children:(0,s.jsx)("section",{className:"main-page_vacancy-list",children:t?(0,s.jsx)(c.Z,{}):a.length?a.map((function(n){return(0,s.jsx)(e.Z,{data:n},(0,r.x0)())})):(0,s.jsx)(i.Z,{})})})}},2139:function(n,a,t){t.r(a),t.d(a,{default:function(){return d}});var e=t(9439),r=t(2791),i=t(3153),c=t(37),s=t(5702),o=t(6183),u=t(3796),l=t(3329);var d=function(){var n=(0,i.C)((function(n){return n.paginationStateSlice.numIndexFavoritePage})),a=(0,i.C)((function(n){return n.paginationStateSlice.currentPageForFavoritePage})),t=(0,i.C)((function(n){return n.dataSlice.pageCount})),d=(0,i.C)((function(n){return n.dataSlice.favoriteVacancyList})),f=(0,i.C)((function(n){return n.dataSlice.favoritePageButtonsAmount})),m=(0,r.useState)([]),g=(0,e.Z)(m,2),p=g[0],h=g[1],v=(0,r.useState)(!1),x=(0,e.Z)(v,2),C=x[0],j=x[1],y=(0,r.useCallback)((function(){return(0,u.Qz)(d,t)}),[d]);return(0,r.useEffect)((function(){j(!0);var n=d.length?y()[a-1]:d;h(n),j(!1)}),[y,a,d,n]),(0,l.jsx)("section",{className:"page favorite-vacancy-page",children:(0,l.jsxs)("div",{className:"favorite-vacancy-page-container",children:[C&&(0,l.jsx)(o.Z,{}),!C&&(0,l.jsx)(c.Z,{vacancyData:p,spinnerStatus:C}),d.length?(0,l.jsx)(s.Z,{numIndex:n,pagesAmmount:f,totalVacancies:d.length}):(0,l.jsx)(l.Fragment,{})]})})}},5984:function(n,a,t){t.d(a,{x0:function(){return e}});var e=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,a){return n+=(a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=171.c0db0d8b.chunk.js.map