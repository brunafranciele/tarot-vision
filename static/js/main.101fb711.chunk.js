(this.webpackJsonptarotvision=this.webpackJsonptarotvision||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n(19),r=n.n(s),i=n(10),o=(n(26),n(2)),j=n(9),u=n.n(j),d=n(12),l=n(7),b=Object(c.createContext)(),h="https://rws-cards-api.herokuapp.com/api/v1/cards/random";function O(){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(u.a.mark((function e(){var t,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.cards[0],console.log("resultado api",a),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){var t=e.children,n=Object(c.useState)(""),s=Object(l.a)(n,2),r=s[0],i=s[1],o=Object(c.useState)([]),j=Object(l.a)(o,2),h=j[0],x=j[1],p={getDataFromAPI:function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),dataAPI:h,setDataAPI:x,nameUser:r,setNameUser:i};return Object(a.jsx)(b.Provider,{value:p,children:t})},m=n.p+"static/media/logo2.82df64ff.png";var f=function(){return Object(a.jsx)("footer",{id:"rodape",children:Object(a.jsx)("p",{children:"Bruna Franciele, Alessandra Santos e J\xfalia P\xf4rto \xa9 2020 - Todos os direitos reservados "})})};n(28);var v=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),o=Object(l.a)(r,2),j=o[0],u=o[1],d=Object(c.useContext)(b).setNameUser;return Object(c.useEffect)((function(){n.length>=2&&u(!1)}),[n]),Object(a.jsxs)("main",{className:"bodyLogin",children:[Object(a.jsx)("div",{className:"logoLogin",children:Object(a.jsx)("img",{src:m,alt:"Logo Tarot Vision"})}),Object(a.jsx)("h1",{children:" What's your name, querent? "}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{type:"text",required:"required",placeholder:"Name",onChange:function(e){var t=e.target;return s(t.value)}}),Object(a.jsx)("div",{children:Object(a.jsx)(i.b,{to:"/main-page",children:Object(a.jsx)("button",{type:"button",disabled:j,onClick:function(){d(n)},children:"Start"})})})]}),Object(a.jsx)("div",{className:"div-footer",children:Object(a.jsx)(f,{})})]})};n(18);var g=function(){var e=Object(c.useContext)(b).dataAPI;return 0===e.length?(console.log("if"),Object(a.jsx)("h1",{children:"Loading..."})):Object(a.jsxs)("div",{className:"bodyMain",children:[Object(a.jsx)("div",{className:"div-image",children:Object(a.jsx)("img",{src:"/".concat(e.name_short,".png"),alt:"tentativa de foto"})}),Object(a.jsxs)("div",{className:"div-answer",children:[Object(a.jsx)("h2",{className:"text-answer h2answer",children:e.name}),Object(a.jsx)("p",{className:"text-answer",children:e.meaning_up}),Object(a.jsx)("p",{className:"text-answer",children:e.meaning_rev}),Object(a.jsx)("p",{className:"text-answer",children:e.desc})]})]})};var N=function(){var e=Object(c.useContext)(b),t=e.dataAPI,n=e.getDataFromAPI,s=e.nameUser,r=Object(c.useState)(!1),i=Object(l.a)(r,2),o=i[0],j=i[1];return Object(c.useEffect)((function(){n()}),[]),t.length,Object(a.jsxs)("div",{className:"bodyMain",children:[Object(a.jsx)("div",{children:o?Object(a.jsx)(g,{}):Object(a.jsxs)("h1",{className:"question",children:[s||"Querent",", think about a question..."]})}),!o&&Object(a.jsx)("button",{className:"button",type:"button",onClick:function(){j(!0)},children:"Get my answer"}),Object(a.jsx)("div",{className:"div-footer",children:Object(a.jsx)(f,{})})]})};var w=function(){return Object(a.jsx)(p,{children:Object(a.jsxs)(o.c,{children:[Object(a.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(a.jsx)(o.a,{exact:!0,path:"/main-page",component:N})]})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(a.jsx)(i.a,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),y()}},[[34,1,2]]]);
//# sourceMappingURL=main.101fb711.chunk.js.map