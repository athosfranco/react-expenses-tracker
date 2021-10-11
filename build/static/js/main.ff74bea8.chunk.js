(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),c=(n(20),n(8)),l=n(2),r=n(1),o=(n(21),n(22),n(0)),i=function(e){var t=e.date.split("-"),n=t[2],a=t[1];switch(a){case"01":a="Jan.";break;case"02":a="Fev.";break;case"03":a="Mar.";break;case"04":a="Abr.";break;case"05":a="Maio";break;case"06":a="Jun.";break;case"07":a="Jul.";break;case"08":a="Ago.";break;case"09":a="Set.";break;case"10":a="Out.";break;case"11":a="Nov.";break;case"12":a="Dez."}var s=t[0];return Object(o.jsxs)("div",{className:"expense-date",children:[Object(o.jsxs)("div",{className:"expense-date__day",children:[n," "]}),Object(o.jsx)("div",{className:"expense-date__month",children:a}),Object(o.jsx)("div",{className:"expense-date__year",children:s})]})},d=(n(24),function(e){var t="card ".concat(e.className);return Object(o.jsx)("div",{className:t,onClick:e.onClick,children:e.children})}),u=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d,{className:"expense-item",onClick:function(){e.onExpenseId(e.id)},children:[Object(o.jsx)("div",{children:Object(o.jsx)(i,{date:e.date})}),Object(o.jsxs)("div",{className:"expense-item__description",children:[Object(o.jsxs)("div",{className:"expense-item__descbox",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("span",{children:e.type})]}),Object(o.jsx)("div",{className:"expense-item__price",children:e.amount.toLocaleString("pt-BR",{minimumFractionDigits:2,style:"currency",currency:"BRL"})})]})]})})},j=(n(25),function(e){var t=(new Date).getFullYear();return Object(o.jsx)("div",{className:"expenses-filter",children:Object(o.jsx)("div",{className:"expenses-filter__control",children:Object(o.jsxs)("select",{onChange:function(t){return e.onGetPickedYear(t.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"Mostrar tudo"}),Object(o.jsx)("option",{value:t,children:t}),Object(o.jsx)("option",{value:t-1,children:t-1}),Object(o.jsx)("option",{value:t-2,children:t-2}),Object(o.jsx)("option",{value:t-3,children:t-3})]})})})}),b=n(13),p=(n(26),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(o.jsxs)("div",{className:"chart-bar",children:[Object(o.jsx)("div",{className:"chart-bar__inner",children:Object(o.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(o.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),x=(n(27),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(c.a)(t));return Object(o.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(o.jsx)(p,{value:e.value,maxValue:n,label:e.label},Math.random())}))})}),O=function(e){var t,n=[{label:"Jan",value:0},{label:"Fev",value:0},{label:"Mar",value:0},{label:"Abr",value:0},{label:"Mai",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Ago",value:0},{label:"Set",value:0},{label:"Out",value:0},{label:"Nov",value:0},{label:"Dez",value:0}],a=Object(b.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var s=t.value;console.log(s),n[s.date.split("-")[1]-1].value+=s.amount}}catch(c){a.e(c)}finally{a.f()}return Object(o.jsx)(x,{dataPoints:n})},v=n.p+"static/media/not-found.5361d1a2.svg",m=(n(28),function(e){var t=Object(r.useState)("all"),n=Object(l.a)(t,2),a=n[0],s=n[1],c=e.expenses.filter((function(e){return e.year===a})),i=function(t){e.onExpenseId(t)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(d,{className:"expenses",children:[Object(o.jsx)(j,{selectedYear:a,onGetPickedYear:function(e){s(e)}}),"all"!==a?Object(o.jsx)(O,{expenses:c}):console.log("filter not selected"),"all"===a?0===e.expenses.length?Object(o.jsxs)("div",{className:"no-expenses-found__container",children:[Object(o.jsx)("img",{src:v,alt:"Sem despesa"}),Object(o.jsx)("p",{className:"no-expenses-found__msg",children:"N\xe3o h\xe1 nenhuma despesa a ser exibida."})]}):e.expenses.map((function(e){return Object(o.jsx)(u,{id:e.id,title:e.title,type:e.type,amount:e.amount,date:e.date,onExpenseId:i},e.id)})):0===c.length?Object(o.jsxs)("div",{className:"no-expenses-found__container",children:[Object(o.jsx)("img",{src:v,alt:"Sem despesa"}),Object(o.jsxs)("p",{className:"no-expenses-found__msg",children:["N\xe3o h\xe1 nenhuma despesa registrada em ",a,"."]})]}):c.map((function(e){return Object(o.jsx)(u,{id:e.id,title:e.title,type:e.type,amount:e.amount,date:e.date,onExpenseId:i},e.id)}))]})})}),h=(n(29),function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return"".concat(a,"-").concat(n,"-").concat(t)}),f=n(5),_=function(e){var t,n,a,s,c,i,d,u,j,b,p=h(),x=e.expenses.filter((function(t){return t.id===e.editedExpense})),O=Object(r.useState)(""),v=Object(l.a)(O,2),m=v[0],_=v[1],g=Object(r.useState)(""),N=Object(l.a)(g,2),y=N[0],S=N[1],C=Object(r.useState)(null===(t=x[0])||void 0===t?void 0:t.title),w=Object(l.a)(C,2),D=w[0],E=w[1],k=Object(r.useState)(null===(n=x[0])||void 0===n?void 0:n.amount),A=Object(l.a)(k,2),I=A[0],J=A[1],M=Object(r.useState)(null===(a=x[0])||void 0===a?void 0:a.date),F=Object(l.a)(M,2),G=F[0],P=F[1],R=Object(r.useState)(null===(s=x[0])||void 0===s?void 0:s.type),T=Object(l.a)(R,2),L=T[0],z=T[1],V=Object(r.useState)(null===(c=x[0])||void 0===c?void 0:c.year),B=Object(l.a)(V,2),Y=B[0],U=B[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"overlay",style:{display:e.show?"flex":"none"}}),Object(o.jsxs)("div",{className:"expense-edit__container",style:{display:e.show?"flex":"none"},children:[Object(o.jsx)("h2",{children:"Editar Despesa"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=2;if(D.length<=2||!D.replace(/\s/g,"").length?(_("Deve ter ao menos 3 caracteres."),D.replace(/\s/g,"").length?console.log("no empty spaces"):E(""),n--):(_(""),D.trim()),I<=0||I>999999?(S("Valor deve ser entre 1 e 999,999."),n--):S(""),2===n){var a=JSON.parse(localStorage.getItem("expensesArray"));a.forEach((function(t){t.id===e.editedExpense&&(t.title=D,t.amount=+I,t.date=G,t.year=Y,t.type=L)})),f.NotificationManager.success("Despesa editada com sucesso."),e.onUpdateUi(a),e.onGetCanceled("no id yet")}},children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"T\xedtulo/Descri\xe7\xe3o"}),Object(o.jsx)("input",{className:"new-expense__control__input",autoFocus:!0,type:"text",placeholder:null===(i=x[0])||void 0===i?void 0:i.title,maxLength:"15",onChange:function(e){return E(e.target.value)}}),Object(o.jsx)("p",{children:m})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Valor da despesa"}),Object(o.jsx)("input",{className:"new-expense__control__input",type:"number",step:"0.05",placeholder:null===(d=x[0])||void 0===d?void 0:d.amount,onChange:function(e){return J(e.target.value)}}),Object(o.jsx)("p",{children:y})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Tipo de Despesa"}),Object(o.jsxs)("p",{style:{color:"black",backgroundColor:"rgba(255, 255, 255, 0.2)",margin:"0.5rem"},children:["Tipo atual: ",null===(u=x[0])||void 0===u?void 0:u.type]}),Object(o.jsxs)("select",{className:"new-expense__control__select",onChange:function(e){return z(e.target.value)},selected:String(null===(j=x[0])||void 0===j?void 0:j.type),children:[Object(o.jsx)("option",{selected:!0,disabled:!0,children:"Selecione um novo tipo"}),Object(o.jsx)("option",{value:"Geral",children:"Geral"}),Object(o.jsx)("option",{value:"Contas & Impostos",children:"Contas & Impostos"}),Object(o.jsx)("option",{value:"Lazer & Entretenimento",children:"Lazer & Entretenimento"}),Object(o.jsx)("option",{value:"Sa\xfade & Rem\xe9dios",children:"Sa\xfade & Rem\xe9dios"}),Object(o.jsx)("option",{value:"Academia",children:"Academia & Educa\xe7\xe3o F\xedsica"}),Object(o.jsx)("option",{value:"Transporte & Carro",children:"Transporte & Carro"}),Object(o.jsx)("option",{value:"Alimenta\xe7\xe3o",children:"Alimenta\xe7\xe3o"}),Object(o.jsx)("option",{value:"Necessidades Dom\xe9sticas",children:"Necessidades Dom\xe9sticas"}),Object(o.jsx)("option",{value:"Custos com Pet's",children:"Custos com Pet's"}),Object(o.jsx)("option",{value:"Emerg\xeancias",children:"Emerg\xeancias"})]})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Data"}),Object(o.jsxs)("p",{style:{color:"black",backgroundColor:"rgba(255, 255, 255, 0.2)",margin:"0.5rem"},children:["Data atual:",null===(b=x[0])||void 0===b?void 0:b.date.split("-").reverse().join("/")]}),Object(o.jsx)("input",{type:"date",min:"2018-01-01",max:p,className:"new-expense__control__input",onChange:function(e){var t=e.target.value;P(t);var n=t.split("-")[0];U(n)}})]}),Object(o.jsxs)("div",{className:"button-container",children:[Object(o.jsx)("button",{className:"cancel",onClick:function(t){t.preventDefault(),e.onGetCanceled("no id yet")},children:"Cancelar"}),Object(o.jsx)("button",{className:"save",children:"Salvar Altera\xe7\xf5es"})]}),Object(o.jsx)("hr",{}),Object(o.jsx)("button",{className:"delete",onClick:function(t){var n;t.preventDefault();var a=JSON.parse(localStorage.getItem("expensesArray")).filter((function(t){return t.id!==e.editedExpense}));localStorage.setItem("expensesArray",JSON.stringify(a)),f.NotificationManager.info("A despesa '".concat(null===(n=x[0])||void 0===n?void 0:n.title,"' foi exclu\xedda.")),e.onGetDeleted()},children:"Deletar Despesa"})]})]}),Object(o.jsx)(f.NotificationContainer,{})]})},g=n(14),N=(n(35),function(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),a=Object(r.useRef)(),s=h(),c=Object(r.useState)(!1),i=Object(l.a)(c,2),d=i[0],u=i[1],j=Object(r.useState)(""),b=Object(l.a)(j,2),p=b[0],x=b[1],O=Object(r.useState)("new-expense__control__input"),v=Object(l.a)(O,2),m=v[0],_=v[1],g=Object(r.useState)("new-expense__control__input"),N=Object(l.a)(g,2),y=N[0],S=N[1],C=Object(r.useState)(""),w=Object(l.a)(C,2),D=w[0],E=w[1],k=Object(r.useState)(""),A=Object(l.a)(k,2),I=A[0],J=A[1],M=function(){return u(!d)};return Object(o.jsx)(o.Fragment,{children:d?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("form",{onSubmit:function(c){var l=2;if(c.preventDefault(),t.current.value.trim(),t.current.value.length<=2||!t.current.value.replace(/\s/g,"").length?(_("new-expense__control__error"),E("O t\xedtulo precisa ter pelo menos 3 caracteres."),t.current.value.replace(/\s/g,"").length?console.log("no empty spaces"):t.current.value="",l--):(_("new-expense__control__input"),E("")),n.current.value<=0||n.current.value>999999?(S("new-expense__control__error"),J("O valor precisa ser maior que zero e menor que 999,999."),l--):(S("new-expense__control__input"),J("")),2===l){var r={title:t.current.value,amount:+n.current.value,date:a.current.value,year:a.current.value.split("-")[0],type:""===p?"Geral":p};f.NotificationManager.success('Despesa do tipo "'.concat(r.type,'" registrada em ').concat(r.date.split("-").reverse().join("/")),"".concat(r.title)),e.onExpenseData(r),t.current.value="",a.current.value=s,n.current.value=""}else console.log("failed validation tests")},children:Object(o.jsxs)("div",{className:"new-expense__controls",children:[Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"T\xedtulo/Descri\xe7\xe3o"}),Object(o.jsx)("input",{className:m,autoFocus:!0,type:"text",maxLength:"15",ref:t}),Object(o.jsx)("p",{children:D})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Valor da despesa"}),Object(o.jsx)("input",{className:y,type:"number",step:"0.05",ref:n}),Object(o.jsx)("p",{children:I})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Tipo de Despesa"}),Object(o.jsxs)("select",{onChange:function(e){x(e.target.value)},className:"new-expense__control__select",defaultValue:"geral",children:[Object(o.jsx)("option",{value:"Geral",children:"Geral"}),Object(o.jsx)("option",{value:"Contas & Impostos",children:"Contas & Impostos"}),Object(o.jsx)("option",{value:"Lazer & Entretenimento",children:"Lazer & Entretenimento"}),Object(o.jsx)("option",{value:"Sa\xfade & Rem\xe9dios",children:"Sa\xfade & Rem\xe9dios"}),Object(o.jsx)("option",{value:"Academia",children:"Academia & Educa\xe7\xe3o F\xedsica"}),Object(o.jsx)("option",{value:"Transporte & Carro",children:"Transporte & Carro"}),Object(o.jsx)("option",{value:"Alimenta\xe7\xe3o",children:"Alimenta\xe7\xe3o"}),Object(o.jsx)("option",{value:"Necessidades Dom\xe9sticas",children:"Necessidades Dom\xe9sticas"}),Object(o.jsx)("option",{value:"Custos com Pet's",children:"Custos com Pet's"}),Object(o.jsx)("option",{value:"Emerg\xeancias",children:"Emerg\xeancias"})]})]}),Object(o.jsxs)("div",{className:"new-expense__control",children:[Object(o.jsx)("label",{children:"Data"}),Object(o.jsx)("input",{type:"date",min:"2018-01-01",max:s,className:"new-expense__control__input",ref:a})]}),Object(o.jsxs)("div",{className:"new-expense__actions",children:[Object(o.jsx)("button",{onClick:M,children:"Cancelar"}),Object(o.jsx)("button",{children:"Adicionar Despesa"})]})]})})}):Object(o.jsx)("button",{onClick:M,children:"Nova Despesa"})})}),y=(n(36),function(e){var t=function t(n,a){var s=String(Math.floor(Math.random()*(a-n)+n));if(void 0===e.expenses.find((function(e){return e.id===s})))return s;t(1e3,9999)};return Object(o.jsx)("div",{className:"new-expense",children:Object(o.jsx)(N,{onExpenseData:function(n){var a=Object(g.a)({id:t(1e3,9999)},n);e.onGetNewExpense(a)}})})}),S=[],C=function(){var e=Object(r.useState)(localStorage.expensesArray?JSON.parse(localStorage.expensesArray):S),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)("no id yet"),d=Object(l.a)(i,2),u=d[0],j=d[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(y,{expenses:S,onGetNewExpense:function(e){a((function(t){var n=[e].concat(Object(c.a)(t));return localStorage.setItem("expensesArray",JSON.stringify(n)),n}))}}),Object(o.jsx)(m,{expenses:n,onExpenseId:function(e){return j(e)}}),"no id yet"===u?console.log("no expense being edited"):s.a.createPortal(Object(o.jsx)(_,{expenses:n,editedExpense:u,show:"no id yet"!==u,onGetCanceled:function(e){j(e)},onGetDeleted:function(){a(JSON.parse(localStorage.expensesArray)),j("no id yet")},onUpdateUi:function(e){localStorage.setItem("expensesArray",JSON.stringify(e)),a(e)}}),document.getElementById("overlay-root")),s.a.createPortal(Object(o.jsx)(f.NotificationContainer,{}),document.getElementById("notification-root"))]})};s.a.render(Object(o.jsx)(C,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.ff74bea8.chunk.js.map