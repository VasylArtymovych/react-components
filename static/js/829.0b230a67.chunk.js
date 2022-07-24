"use strict";(self.webpackChunkreact_components=self.webpackChunkreact_components||[]).push([[829],{1704:function(n,t,e){e.d(t,{x:function(){return i}});var r=e(6031),o=e(407),i=(0,r.ZP)("div")(o.$_,o.Dh,o.bK,o.GQ,o.FK)},2940:function(n,t,e){e.d(t,{z:function(){return a}});var r,o=e(1413),i=e(168),c=e(6031).ZP.button.attrs((function(n){return{type:n.type||"button"}}))(r||(r=(0,i.Z)(["\n    display: ",";\n    align-items: ",";\n    justify-content: ",";\n\n    width: ",";\n    height: ",";\n    padding: ","px;\n    font-size: ","px;\n    border: ",";\n    outline: ",";\n    border-radius: ",";\n    background-color: ",";\n    color: ",";\n    \n"])),(function(n){return n.display||"block"}),(function(n){return n.alignItems||"stretch"}),(function(n){return n.justifyContent||"stretch"}),(function(n){return n.width||"3rem"}),(function(n){return n.height||"auto"}),(function(n){return n.padding||n.theme.space[2]}),(function(n){return n.fontSize||n.theme.fontSizes.s}),(function(n){return n.border||"none"}),(function(n){return n.outline||"none"}),(function(n){return n.borderRadius||n.theme.radii.normal}),(function(n){return n.backgroundColor||"transparent"}),(function(n){return n.color||n.theme.text})),u=e(184),a=function(n){return(0,u.jsx)(c,(0,o.Z)({},n))}},5373:function(n,t,e){e.d(t,{D:function(){return a}});var r,o=e(168),i=e(1413),c=e(6031),u=e(184),a=function(n){return(0,u.jsx)(s,(0,i.Z)({},n))},s=(0,c.ZP)("h2")(r||(r=(0,o.Z)(["\n    font-size: ","px;\n    font-weight: ",";\n    color: ",";\n    text-align: ",";\n    margin: ",";\n"])),(function(n){return n.fontSize||n.theme.fontSizes.l}),(function(n){return n.fontWeight||n.theme.normal}),(function(n){return n.color||n.theme.colors.text}),(function(n){return n.textAlign||"start"}),(function(n){return n.margin||"0 0 0 0"}))},4829:function(n,t,e){e.r(t),e.d(t,{default:function(){return X}});var r=e(2791),o=e(9434),i=e(2872),c=e(4165),u=e(5861),a=e(4569),s=e.n(a);s().defaults.baseURL="http://localhost:4040";var l,d,f,h,x,p,m,g,v,j,b=e(168),Z=e(6031),y=e(1704),k=e(184),w=function(n){var t=n.total,e=n.completed;return(0,k.jsxs)(y.x,{mb:15,children:[(0,k.jsxs)(C,{children:["Total Todos: ",t]}),(0,k.jsxs)(C,{children:["Comleted Todos: ",e]})]})},C=(0,Z.ZP)("p")(l||(l=(0,b.Z)(["\n    margin: 0 0 5px 0;\n    font-size: 18px;\n    font-weight: 700;\n    color: ","\n"])),(function(n){return n.theme.colors.text})),z=e(885),P=e(2940),T=function(n){var t=n.onAddTodo,e=(0,r.useState)(""),o=(0,z.Z)(e,2),i=o[0],c=o[1];return(0,k.jsxs)(D,{onSubmit:function(n){n.preventDefault(),t(i),c("")},children:[(0,k.jsx)(S,{value:i,name:"text",onChange:function(n){c(n.target.value)}}),(0,k.jsx)(P.z,{type:"submit",width:"100%",backgroundColor:function(n){return n.theme.colors.secondary},color:"white",children:"create"})]})},D=(0,Z.ZP)("form")(d||(d=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),S=(0,Z.ZP)("textarea")(f||(f=(0,b.Z)(["\n  width: 350px;\n  height: 75px;\n\n  padding: ","px;\n  resize: none;\n"])),(function(n){return n.theme.space[3]})),F=e(7425),A=function(n){var t=n.id,e=n.text,r=n.completed,c=n.onDelete,u=(0,o.I0)();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("input",{type:"checkbox",checked:r,onChange:function(){u(function(n){var t=n.id,e=n.completed;return function(n){n((0,i.lE)());var r={completed:e};s().patch("/todos/".concat(t),r).then((function(t){var e=t.data;return n((0,i.pV)(e))})).catch((function(t){return n((0,i.oC)(t.message))}))}}({id:t,completed:!r}))}}),(0,k.jsx)(L,{checked:r,children:e}),(0,k.jsx)(P.z,{onClick:function(){c(t)},children:(0,k.jsx)(F.GnT,{size:20,color:"inherit"})})]})},L=(0,Z.ZP)("p")(h||(h=(0,b.Z)(["\n  ",";\n"])),(function(n){return n.checked?(0,Z.iv)(x||(x=(0,b.Z)(["\n        color: ",";\n        text-decoration: line-through;\n      "])),n.theme.colors.secondary):(0,Z.iv)(p||(p=(0,b.Z)(["\n      color: ",";\n      text-decoration: none;\n    "])),n.theme.colors.text)})),G=function(n){var t=n.todos,e=n.onDeleteTodo;return(0,k.jsx)(I,{children:t.map((function(n){var t=n.id,r=n.text,o=n.completed;return(0,k.jsx)(U,{cheked:o,children:(0,k.jsx)(A,{id:t,text:r,completed:o,onDelete:e})},t)}))})},I=(0,Z.ZP)("ul")(m||(m=(0,b.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 10px;\n  margin-right: -10px;\n"]))),U=(0,Z.ZP)("li")(g||(g=(0,b.Z)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  width: calc(100% / 3 - 10px);\n  height: 50px;\n  padding: 5px 10px;\n  margin: 0 10px 10px 0;\n\n  background-color: grey;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4px;\n\n    background-color: ",";\n\n    transform: ",";\n    transition: transform 250ms linear;\n  }\n"])),(function(n){return n.theme.colors.effects}),(function(n){return n.cheked?"scaleX(1)":"scaleX(0) "})),_=e(6429),E=e.n(_),H=function(n){var t=n.value,e=n.onChange,r=E().generate();return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(O,{htmlFor:r,children:"Filter by Text:"}),(0,k.jsx)(K,{id:r,type:"text",name:"filter",value:t,onChange:e})]})},K=(0,Z.ZP)("input")(v||(v=(0,b.Z)(["\n    width: 200px;\n    height: 30px;\n    border: ",";\n    border-color: ",";\n    outline: none;\n"])),(function(n){return n.theme.borders.bold}),(function(n){return n.theme.colors.secondary})),O=(0,Z.ZP)("label")(j||(j=(0,b.Z)(["\n    font-size: ","px;\n    color: ",";\n    margin-right: ","px;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.space[3]})),R=e(5373);console.log(JSON.stringify([{id:1,name:"\u0420\u043e\u0431\u0435\u0440\u0442 \u0428\u0435\u043a\u043b\u0438"},{id:2,name:"\u041a\u0440\u0438\u0441\u0442\u043e\u0444\u0435\u0440 \u0424\u0430\u0443\u043b\u0435\u0440"},{id:3,name:"\u0413\u043e\u0432\u0430\u0440\u0434 \u041b\u0430\u0432\u043a\u0440\u0430\u0444\u0442"},{id:4,name:"\u0412\u044f\u0447\u0435\u0441\u043b\u0430\u0432 \u0428\u0430\u043b\u044b\u0433\u0438\u043d"}]));var V=function(){var n=(0,o.v9)((function(n){return n.asyncTodos})),t=n.todos,e=n.filter,a=(0,o.I0)();(0,r.useEffect)((function(){a(function(){var n=(0,u.Z)((0,c.Z)().mark((function n(t){var e,r;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t((0,i.UU)()),n.prev=1,n.next=4,s().get("/todos");case 4:e=n.sent,r=e.data,t((0,i.B9)(r)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),t((0,i.VO)(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(t){return n.apply(this,arguments)}}())}),[a]);var l=t.reduce((function(n,t){return t.completed?n+1:n}),0),d=function(){var n=e.toLowerCase();return t.filter((function(t){return t.text.toLowerCase().includes(n)}))}();return(0,k.jsxs)(y.x,{children:[(0,k.jsx)(R.D,{textAlign:"center",margin:"10px 0 20px 0",children:"Your Todo List"}),(0,k.jsxs)(y.x,{display:"flex",justifyContent:"space-around",children:[(0,k.jsx)(T,{onAddTodo:function(n){var t;a((t=n,function(n){var e={text:t,completed:!1};n((0,i.Ht)()),s().post("/todos",e).then((function(t){var e=t.data;return n((0,i.yZ)(e))})).catch((function(t){return n((0,i.rG)(t.message))}))}))}}),(0,k.jsxs)(y.x,{mb:20,children:[(0,k.jsx)(w,{total:t.length,completed:l}),(0,k.jsx)(H,{onChange:function(n){var t=n.target.value;a((0,i.M6)(t))}})]})]}),(0,k.jsx)(G,{todos:d,onDeleteTodo:function(n){a(function(n){return function(t){t((0,i.ut)()),s().delete("/todos/".concat(n)).then((function(){return t((0,i.eH)(n))})).catch((function(n){return t((0,i.Pt)(n.message))}))}}(n))}})]})},X=function(){return(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(V,{})})}}}]);
//# sourceMappingURL=829.0b230a67.chunk.js.map