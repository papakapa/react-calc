(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c,r,i,a,o,s,l,j=n(0),x=n.n(j),d=n(10),b=n.n(d),p=(n(18),n(4)),u=n(2),h=n(3),O=h.a.div(c||(c=Object(u.a)(["\n  min-width: 1000px;\n  min-height: 700px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  color: #FCEEEA;\n"]))),g=h.a.div(r||(r=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  height: 525px;\n  background: #394273;\n"]))),k=h.a.div(i||(i=Object(u.a)(["\n  height: 125px;\n\n  display: flex;\n  flex-direction: column;\n\n  text-align: right;\n"]))),f=h.a.div(a||(a=Object(u.a)(["\n  height: 75px;\n  font-size: 30px;\n  padding-top: 40px;\n  padding-right: 5px;\n"]))),v=h.a.div(o||(o=Object(u.a)(["\n  height: 50px;\n  padding-right: 5px;\n"]))),C=n(1),F=function(e){var t=e.expression,n=e.currentValue;return Object(C.jsxs)(k,{children:[Object(C.jsx)(v,{children:t}),Object(C.jsx)(f,{children:n})]})},S=h.a.div(s||(s=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),E=n(9),w=h.a.button(l||(l=Object(u.a)(["\n  background: #F25757;\n  width: 80px;\n  height: 80px;\n\n  font-size: 18px;\n  \n  color: #FCEEEA;\n  border: 1px solid #F29B94;\n  \n  &:focus {\n    background: #E33D3D;\n    border: 1px solid #F29B94;\n  }\n  &:active {\n    background: #E33D3D;\n    border: 1px solid #F29B94;\n  }\n"]))),y=function(e){return Object(C.jsx)(w,Object(E.a)(Object(E.a)({},e),{},{tabIndex:-1,children:e.children}))},V={width:"160px"},m={color:"#F29B94"},B=function(e){var t=e.setCurrent,n=e.setExpression,c=e.setOperand,r=e.setPreviousValue,i=e.setNext,a=e.nextValue,o=e.previousValue,s=e.currentOperand,l=e.currentValue,j=function(e){""!==s&&a?(t(e.target.innerText),i("")):"0"===l?t(e.target.innerText):(l.length<11&&"-"===l[0]&&t(l.concat(e.target.innerText)),l.length<10&&"-"!==l[0]&&t(l.concat(e.target.innerText)))},x=function(e){switch(e.target.innerText){case"+":if("+"===s){c("+");var a=parseFloat(o)+parseFloat(l);r(a.toString()),t(a.toString()),n("".concat(a.toString()," + ")),i(!0)}else c("+"),r(l),n("".concat(l," + ")),i(!0);break;case"-":if("-"===s){c("-");var j=parseFloat(o)-parseFloat(l);r(j.toString()),t(j.toString()),n("".concat(j.toString()," - ")),i(!0)}else c("-"),r(l),n("".concat(l," - ")),i(!0);break;case"/":if("/"===s){c("/");var x=parseFloat(o)/parseFloat(l);r(x.toString()),t(x.toString()),n("".concat(x.toString()," / ")),i(!0)}else c("/"),r(l),n("".concat(l," / ")),i(!0);break;case"*":if("*"===s){c("*");var d=parseFloat(o)*parseFloat(l);r(d.toString()),t(d.toString()),n("".concat(d.toString()," * ")),i(!0)}else c("*"),r(l),n("".concat(l," * ")),i(!0)}};return Object(C.jsxs)(S,{children:[Object(C.jsx)(y,{style:m,onClick:function(){t("0"),n("0"),c(""),r(""),i(!1)},children:"C"}),Object(C.jsx)(y,{style:m,onClick:function(){"-"===l[0]&&"0"!==l&&t(l.slice(1)),"-"!==l[0]&&"0"!==l&&t("-".concat(l))},children:"+/-"}),Object(C.jsx)(y,{style:m,onClick:function(){return t((parseFloat(l)/100).toString())},children:"%"}),Object(C.jsx)(y,{onClick:x,children:"/"}),Object(C.jsx)(y,{onClick:j,children:"7"}),Object(C.jsx)(y,{onClick:j,children:"8"}),Object(C.jsx)(y,{onClick:j,children:"9"}),Object(C.jsx)(y,{onClick:x,children:"*"}),Object(C.jsx)(y,{onClick:j,children:"4"}),Object(C.jsx)(y,{onClick:j,children:"5"}),Object(C.jsx)(y,{onClick:j,children:"6"}),Object(C.jsx)(y,{onClick:x,children:"-"}),Object(C.jsx)(y,{onClick:j,children:"1"}),Object(C.jsx)(y,{onClick:j,children:"2"}),Object(C.jsx)(y,{onClick:j,children:"3"}),Object(C.jsx)(y,{onClick:x,children:"+"}),Object(C.jsx)(y,{style:V,onClick:j,children:"0"}),Object(C.jsx)(y,{onClick:function(){-1===l.search(",")&&t(l.concat(","))},children:"."}),Object(C.jsx)(y,{onClick:function(){switch(c(""),r(""),n("0"),i(!1),s){case"+":var e=parseFloat(o)+parseFloat(l);t(e.toString());break;case"-":var a=parseFloat(o)-parseFloat(l);t(a.toString());break;case"/":var j=parseFloat(o)/parseFloat(l);t(j.toString());break;case"*":var x=parseFloat(o)*parseFloat(l);t(x.toString())}},children:"="})]})};var T=function(){var e=Object(j.useState)("0"),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(j.useState)("0"),i=Object(p.a)(r,2),a=i[0],o=i[1],s=Object(j.useState)(""),l=Object(p.a)(s,2),x=l[0],d=l[1],b=Object(j.useState)(""),u=Object(p.a)(b,2),h=u[0],k=u[1],f=Object(j.useState)(!1),v=Object(p.a)(f,2),S=v[0],E=v[1];return Object(C.jsx)(O,{children:Object(C.jsxs)(g,{children:[Object(C.jsx)(F,{expression:"0"!==a?a:"",currentValue:n}),Object(C.jsx)(B,{setCurrent:c,setExpression:o,setOperand:k,setPreviousValue:d,setNext:E,currentOperand:h,currentValue:n,nextValue:S,previousValue:x})]})})};b.a.render(Object(C.jsx)(x.a.StrictMode,{children:Object(C.jsx)(T,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.dc912d7f.chunk.js.map