(this["webpackJsonphover-squares"]=this["webpackJsonphover-squares"]||[]).push([[0],{51:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,s,u,d,b,l,j,p=t(10),f=t(3),O=t(0),h=t(28),g=function(e){return e.modes},x=function(e){return e.isModeSelected},v=function(e){return e.grid},m=function(e){return Math.sqrt(e.grid.length)},y=function(e){return e.grid.reduce((function(e,n){if(n.active){var t=n.row,r=n.col;e.push({row:t,col:r})}return e}),[])},w=function(e){return e.isStarted},S=function(e){return e.isLoading},E=function(e){return e.error},_=t(12),k=t.n(_),M=t(13),T=t(22),L=t(23),C=new(function(){function e(){Object(T.a)(this,e),this._apiBase="https://demo1030918.mockable.io/"}return Object(L.a)(e,[{key:"getModes",value:function(){var e=Object(M.a)(k.a.mark((function e(){var n,t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this._apiBase);case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),D="FETCH_MODES_REQUEST",F="FETCH_MODES_SUCCESS",z="FETCH_MODES_FAILURE",q="SET_MODE",G="TOGGLE_START",H="TOGGLE_CELL_ACTIVE",I=function(e){return{type:F,payload:e}},P=function(e){return{type:z,payload:e}},R=function(){return{type:G}},U=t(2),A=function(){var e=Object(f.c)(g),n=Object(f.b)(),t=e?Object.keys(e).map((function(e){return{value:e,label:e.replace("Mode","")}})):[];return Object(U.jsx)(h.a,{placeholder:"Pick mode",isSearchable:!1,options:t,onChange:function(e){var t,r=e.value;n((t=r,function(e,n){var r=n().modes[t].field;n().isStarted&&e(R()),e({type:q,payload:{gridSize:r}})}))}})},B=t(6),J=t(4),N=t(5),V=N.b.span(r||(r=Object(J.a)(["\n  border: 1px solid #000;\n  background-color: ",";\n  transition: background-color 0.1s;\n"])),(function(e){return e.active?"blueviolet":"transparent"})),X=function(e){var n=e.row,t=e.col,r=e.active,c=Object(f.c)(w),a=Object(f.b)();return Object(U.jsx)(V,{active:r,onMouseEnter:function(){c&&a(function(e,n){return{type:H,payload:{row:e,col:n}}}(n,t))}})},Q=N.b.div(c||(c=Object(J.a)(["\n  display: grid;\n  grid-template: ",";\n  width: 420px;\n  height: 420px;\n  border: 1px solid #000;\n"])),(function(e){var n=e.gridSize;return"repeat(".concat(n,", 1fr) / repeat(").concat(n,", 1fr)")})),K=function(){var e=Object(f.c)(v),n=Object(f.c)(m);return Object(U.jsx)(Q,{gridSize:n,children:e.map((function(e){return Object(U.jsx)(X,Object(B.a)({},e),"".concat(e.row,":").concat(e.col))}))})},W=N.b.div(a||(a=Object(J.a)(["\n  display: flex;\n  justify-content: stretch;\n  margin-bottom: 15px;\n"]))),Y=N.b.div(i||(i=Object(J.a)(["\n  flex-grow: 1;\n  margin-right: 20px;\n"]))),Z=N.b.button(o||(o=Object(J.a)(["\n  min-width: 60px;\n  padding: 10px 15px;\n  border: none;\n  font-family: 'Poppins', sans-serif;\n  text-decoration: none;\n  color: #ffffff;\n  background-color: ",";\n  text-align: center;\n  transition: all 0.2s;\n  cursor: ",";\n"])),(function(e){var n=e.primary,t=e.danger,r=e.disabled;return(n?"green":t&&"red")||r&&"grey"||""}),(function(e){return e.disabled?"not-allowed":"pointer"})),$=function(){var e=Object(f.c)(w),n=Object(f.c)(x),t=Object(f.c)(E),r=Object(f.c)(S),c=Object(f.b)();return Object(O.useEffect)((function(){c(function(){var e=Object(M.a)(k.a.mark((function e(n){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:D}),e.prev=1,e.next=4,C.getModes();case 4:t=e.sent,n(I(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n(P(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(n){return e.apply(this,arguments)}}())}),[c]),Object(U.jsx)("div",{children:r?Object(U.jsx)(U.Fragment,{children:"Loading..."}):t?Object(U.jsxs)(U.Fragment,{children:["Error: ",t.message]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(W,{children:[Object(U.jsx)(Y,{children:Object(U.jsx)(A,{})}),Object(U.jsx)(Z,{primary:n&&!e,danger:n&&e,disabled:!n,onClick:function(){return c(R())},children:e?"Stop":"Start"})]}),Object(U.jsx)(K,{})]})})},ee=N.b.h2(s||(s=Object(J.a)(["\n  margin: 0;\n  margin-bottom: 15px;\n  font-size: 26px;\n"]))),ne=N.b.ul(u||(u=Object(J.a)(["\n  max-height: 423px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  overflow-y: scroll;\n"]))),te=N.b.li(d||(d=Object(J.a)(["\n  padding: 15px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #000;\n"]))),re=function(){var e=Object(f.c)(y);return Object(U.jsxs)("div",{children:[Object(U.jsx)(ee,{children:"Hover (active) squares:"}),Object(U.jsx)(ne,{children:e.map((function(e){var n=e.row,t=e.col;return Object(U.jsxs)(te,{children:["row ",n," col ",t]},"".concat(n,":").concat(t))}))})]})},ce=N.b.div(b||(b=Object(J.a)(["\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n"]))),ae=N.b.div(l||(l=Object(J.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 777px;\n  min-height: 477px;\n"]))),ie=function(){return Object(U.jsx)(ce,{children:Object(U.jsxs)(ae,{children:[Object(U.jsx)($,{}),Object(U.jsx)(re,{})]})})},oe=t(15),se=t(26),ue=t(27),de=function(e){for(var n=[],t=1;t<=e;t++)for(var r=1;r<=e;r++)n.push({row:t,col:r,active:!1});return n},be=function(e,n){var t=n.row,r=n.col,c=Object(ue.cloneDeep)(e),a=c.find((function(e){return e.row===t&&e.col===r}));return a.active=!a.active,c},le={modes:null,grid:[],isModeSelected:!1,isStarted:!1,isLoading:!0,error:null},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case D:return Object(B.a)(Object(B.a)({},e),{},{isLoading:!0,error:null});case F:return Object(B.a)(Object(B.a)({},e),{},{modes:n.payload,isLoading:!1,error:null});case z:return Object(B.a)(Object(B.a)({},e),{},{error:n.payload});case q:return Object(B.a)(Object(B.a)({},e),{},{isModeSelected:!0,grid:de(n.payload.gridSize)});case G:return Object(B.a)(Object(B.a)({},e),{},{isStarted:!e.isStarted});case H:return Object(B.a)(Object(B.a)({},e),{},{grid:be(e.grid,n.payload)});default:return e}},pe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.b,fe=[se.a],Oe=Object(oe.c)(je,pe(oe.a.apply(void 0,fe))),he=Object(N.a)(j||(j=Object(J.a)(["\n  body {\n    margin: 0;\n    font-family: 'Poppins', sans-serif;\n  }\n"])));p.render(Object(U.jsxs)(f.a,{store:Oe,children:[Object(U.jsx)(he,{}),Object(U.jsx)(ie,{})]}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.8ae678a8.chunk.js.map