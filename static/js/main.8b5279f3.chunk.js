(this["webpackJsonptrabalho-t2"]=this["webpackJsonptrabalho-t2"]||[]).push([[0],{173:function(e,t,a){},174:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),l=(a(173),a(174),a(249)),o=a(248),s=a(7),u=a(56),d=a(68),j=a(134),b=a.n(j),h=a(143),p=a(120),m=a(52),O=a(2),f=Object(p.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},menuLink:{color:e.palette.text.primary,textDecoration:"none"},ul:{marginTop:"500px"}}}));function x(){var e=r.a.useState(null),t=Object(s.a)(e,2),a=t[0],n=t[1],i=f(),c=function(){n(null)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){n(e.currentTarget)},children:Object(O.jsx)(b.a,{})}),Object(O.jsxs)(h.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:c,children:[Object(O.jsx)(u.a,{onClick:c,children:Object(O.jsx)(m.b,{className:i.menuLink,to:"/formulario-react/",children:"Home"})}),Object(O.jsx)(u.a,{onClick:c,children:Object(O.jsx)(m.b,{className:i.menuLink,to:"/formulario-react/list",children:"Listagem de clientes"})}),Object(O.jsx)(u.a,{onClick:c,children:Object(O.jsx)(m.b,{className:i.menuLink,to:"/formulario-react/new",children:"Cadastrar novo cliente"})})]})]})}var g=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},logo:{width:"300px"},h1:{textShadow:"2px 2px 2px #061639"}}}));function v(){var e=g();return Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(o.a,{position:"static",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(x,{}),Object(O.jsx)("h1",{className:e.h1,children:"REGISTRO DE CLIENTES"})]})})})}var C=a(106),y=a(135),w=a.n(y),N=Object(p.a)((function(e){return{text:{width:"100%",color:e.palette.text.secondary},toolbar:{backgroundColor:e.palette.background.paper,minHeight:"42px",bottom:0,width:"100%",position:"fixed",zIndex:10},link:{color:e.palette.secondary.light,textDecoration:"none","&:hover":{textDecoration:"underline"}}}}));function k(){var e=N();return Object(O.jsx)(l.a,{className:e.toolbar,children:Object(O.jsxs)(C.a,{className:e.text,variant:"caption",align:"center",children:["Desenvolvido com ",Object(O.jsx)(w.a,{fontSize:"small"})," por ",Object(O.jsx)("a",{className:e.link,href:"https://github.com/vimarteleto",target:"_blank",rel:"noreferrer",children:"Vin\xedcius Marteleto"})]})})}var A=a(42),S=a.n(A),R=a(19),E=a(67),P=a(17),L=a(62),F=a(260),M=a(253),W=a(251),B=a(252),D=a(250);function T(e){var t=e.title,a=void 0===t?"Confirmar":t,n=e.isOpen,r=void 0!==n&&n,i=e.onClose,c=e.children,l=function(e){i&&i(e)};return Object(O.jsx)("div",{children:Object(O.jsxs)(F.a,{open:r,onClose:function(){return l(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(O.jsx)(D.a,{id:"alert-dialog-title",children:a}),Object(O.jsx)(W.a,{children:Object(O.jsx)(B.a,{id:"alert-dialog-description",children:c})}),Object(O.jsxs)(M.a,{children:[Object(O.jsx)(L.a,{onClick:function(){return l(!0)},variant:"outlined",children:"OK"}),Object(O.jsx)(L.a,{onClick:function(){return l(!1)},color:"primary",variant:"contained",autoFocus:!0,children:"CANCELAR"})]})]})})}var G=a(105),q=a(258),_=a(261),I=a(139),H=a(137),U=a.n(H),$=a(136),z=a.n($),J=a(138),V=a.n(J),K=a(61),Z=a.n(K),Q=Object(p.a)((function(e){return{table:{minWidth:650},dataGrid:{"& .MuiDataGrid-row button":{visibility:"hidden"},"& .MuiDataGrid-row:hover button":{visibility:"visible"}},toolbar:{justifyContent:"space-between",paddingRight:0,margin:e.spacing(2,0)}}}));function X(){var e=Q(),t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),u=o[0],j=o[1],b=Object(n.useState)(),h=Object(s.a)(b,2),p=h[0],m=h[1],f=Object(n.useState)({open:!1,severity:"success",message:"Registro exclu\xeddo com sucesso"}),x=Object(s.a)(f,2),g=x[0],v=x[1],C=Object(P.f)();function y(){return w.apply(this,arguments)}function w(){return(w=Object(E.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("https://api.faustocintra.com.br/clientes");case 3:(t=e.sent).data.length>0&&i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v({open:!0,severity:"error",message:"ERRO: "+e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function N(){return(N=Object(E.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.delete("https://api.faustocintra.com.br/clientes/".concat(p));case 3:y(),v(Object(R.a)(Object(R.a)({},g),{},{open:!0})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v({open:!0,severity:"error",message:"ERRO: "+e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function k(e,t){"clickaway"!==t&&v(Object(R.a)(Object(R.a)({},g),{},{open:!1}))}function A(e){return Object(O.jsx)(q.a,Object(R.a)({elevation:6,variant:"filled"},e))}Object(n.useEffect)((function(){setTimeout((function(){return y()}),100)}),[]);var F=[{field:"id",headerName:"C\xf3d.",align:"right",headerAlign:"right",width:90},{field:"nome",headerName:"Nome",align:"left",headerAlign:"left",width:200},{field:"cpf",headerName:"CPF",align:"right",headerAlign:"center",width:120,sortable:!1},{field:"rg",headerName:"RG",align:"right",headerAlign:"center",width:120,sortable:!1},{field:"logradouro",headerName:"Logradouro",align:"left",headerAlign:"left",width:200,sortable:!1},{field:"num_imovel",headerName:"N\xba",align:"right",headerAlign:"center",width:80,sortable:!1},{field:"complemento",headerName:"Complemento",align:"left",headerAlign:"left",width:180,sortable:!1},{field:"bairro",headerName:"Bairro",align:"left",headerAlign:"left",width:150,sortable:!1},{field:"municipio",headerName:"Munic\xedpio",align:"left",headerAlign:"left",width:150},{field:"uf",headerName:"UF",align:"center",headerAlign:"center",width:80},{field:"telefone",headerName:"Telefone",align:"right",headerAlign:"left",width:150,sortable:!1},{field:"email",headerName:"Email",align:"left",headerAlign:"left",width:200,sortable:!1},{field:"editar",headerName:"Editar",align:"center",headerAlign:"center",width:80,sortable:!1,renderCell:function(e){return Object(O.jsx)(d.a,{"aria-label":"editar",onClick:function(){return C.push("/edit/".concat(e.id))},children:Object(O.jsx)(z.a,{color:"primary"})})}},{field:"excluir",headerName:"Excluir",align:"center",headerAlign:"center",width:80,sortable:!1,renderCell:function(e){return Object(O.jsx)(d.a,{"aria-label":"excluir",onClick:function(){return t=e.id,m(t),void j(!0);var t},children:Object(O.jsx)(U.a,{color:"error"})})}}];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{isOpen:u,onClose:function(e){j(!1),e&&function(){N.apply(this,arguments)}()},children:"Deseja realmente excluir este registro?"}),Object(O.jsx)(_.a,{open:g.open,autoHideDuration:6e3,onClose:k,children:Object(O.jsx)(A,{onClose:k,severity:g.severity,children:g.message})}),Object(O.jsxs)(l.a,{className:e.toolbar,children:[Object(O.jsx)("h1",{children:"Listagem de clientes"}),Object(O.jsx)(L.a,{color:"primary",variant:"contained",size:"large",startIcon:Object(O.jsx)(V.a,{}),onClick:function(){return C.push("/formulario-react/new")},children:"Novo Cadastro"})]}),Object(O.jsx)(G.a,{elevation:4,children:Object(O.jsx)(I.a,{className:e.dataGrid,rows:r,columns:F,pageSize:10,autoHeight:!0,disableSelectionOnClick:!0,disableColumnMenu:!0})})]})}var Y=a(34),ee=a(113),te=a(101),ae=a.n(te),ne=Object(p.a)((function(e){return{h1:{marginBottom:"42px"},form:{maxWidth:"80%",margin:"0 auto",display:"flex",justifyContent:"space-between",flexWrap:"wrap","& .MuiFormControl-root":{minWidth:"200px",maxWidth:"500px",marginBottom:"24px"},"& Button":{height:"42px",width:"120px",marginLeft:"120px"}},toolbar:{justifyContent:"space-between",paddingRight:0,margin:e.spacing(2,0)}}})),re={A:"[A-Za-z]",0:"[0-9]","#":"[0-9A-Ja-j]"};function ie(){var e=ne(),t=Object(n.useState)({id:null,nome:"",cpf:"",rg:"",logradouro:"",num_imovel:"",complemento:"",bairro:"",municipio:"",uf:"",telefone:"",email:""}),a=Object(s.a)(t,2),r=a[0],i=a[1],c=Object(n.useState)({open:!1,severity:"success",message:"Registro salvo com sucesso"}),o=Object(s.a)(c,2),d=o[0],j=o[1],b=Object(n.useState)({disabled:!1,label:"Enviar"}),h=Object(s.a)(b,2),p=h[0],m=h[1],f=Object(n.useState)(!1),x=Object(s.a)(f,2),g=x[0],v=x[1],C=Object(n.useState)(!1),y=Object(s.a)(C,2),w=y[0],N=y[1],k=Object(P.f)(),A=Object(P.g)();function F(){return(F=Object(E.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z.a.get("https://api.faustocintra.com.br/clientes/".concat(t));case 3:a=e.sent,i(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),j({open:!0,severity:"error",message:"N\xe3o foi poss\xedvel carregar os dados para edi\xe7\xe3o."});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function M(){return(M=Object(E.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,m({disabled:!0,label:"Enviando..."}),!A.id){e.next=7;break}return e.next=5,Z.a.put("https://api.faustocintra.com.br/clientes/".concat(A.id),r);case 5:e.next=9;break;case 7:return e.next=9,Z.a.post("https://api.faustocintra.com.br/clientes",r);case 9:j({open:!0,severity:"success",message:"Registro salvo com sucesso!"}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),j({open:!0,severity:"error",message:"ERRO: "+e.t0.message});case 15:m({disabled:!1,label:"Enviar"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function W(e,t){e.target.id&&(t=e.target.id),i("rg"===t||"num_imovel"===t?Object(R.a)(Object(R.a)({},r),{},Object(Y.a)({},t,e.target.value.toUpperCase().replace(/^\s+/,""))):"nome"===t||"municipio"===t?Object(R.a)(Object(R.a)({},r),{},Object(Y.a)({},t,e.target.value.toLowerCase().replace(/["'~`!@#$%^&()_={}[\]:;,.<>+/?-]+|\d+|^\s+$/g,"").replace(/(?:^|\s)\S/g,(function(e){return e.toUpperCase()})))):"logradouro"===t||"bairro"===t?Object(R.a)(Object(R.a)({},r),{},Object(Y.a)({},t,e.target.value.toLowerCase().replace(/["'~`!@#$%^&()_={}[\]:;,.<>+/?-]+|^\s+$/g,"").replace(/(?:^|\s)\S/g,(function(e){return e.toUpperCase()})))):"complemento"===t?Object(R.a)(Object(R.a)({},r),{},Object(Y.a)({},t,e.target.value.replace(/["'~`!@#$%^&()_={}[\]:;,.<>+/?-]+|^\s+$/g,"").replace(/^\w/,(function(e){return e.toUpperCase()})))):Object(R.a)(Object(R.a)({},r),{},Object(Y.a)({},t,e.target.value))),N(!0)}function B(e){return Object(O.jsx)(q.a,Object(R.a)({elevation:6,variant:"filled"},e))}function D(e,t){"clickaway"!==t&&(j(Object(R.a)(Object(R.a)({},d),{},{open:!1})),k.push("/formulario-react/list"))}return Object(n.useEffect)((function(){A.id&&function(e){F.apply(this,arguments)}(A.id)}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{isOpen:g,onClose:function(e){v(!1),e&&k.push("/formulario-react/list")},children:"H\xe1 dados n\xe3o salvos. Deseja realmente voltar?"}),Object(O.jsx)(_.a,{open:d.open,autoHideDuration:6e3,onClose:D,children:Object(O.jsx)(B,{onClose:D,severity:d.severity,children:d.message})}),Object(O.jsx)(l.a,{className:e.toolbar,children:Object(O.jsx)("h1",{children:"Novo cadastro"})}),Object(O.jsxs)("form",{className:e.form,onSubmit:function(e){e.preventDefault(),function(){M.apply(this,arguments)}()},children:[Object(O.jsx)(ee.a,{id:"nome",label:"Nome",fullWidth:!0,required:!0,variant:"filled",value:r.nome,inputProps:{maxLength:100},onChange:W}),Object(O.jsx)(ae.a,{id:"cpf",formatChars:re,mask:"000.000.000-00",value:r.cpf,onChange:function(e){return W(e,"cpf")},children:function(){return Object(O.jsx)(ee.a,{label:"CPF",variant:"filled",required:!0,fullWidth:!0})}}),Object(O.jsx)(ee.a,{id:"rg",label:"RG",type:"text",fullWidth:!0,required:!0,variant:"filled",value:r.rg,inputProps:{maxLength:20},onChange:W}),Object(O.jsx)(ee.a,{id:"logradouro",label:"Logradouro",fullWidth:!0,required:!0,variant:"filled",value:r.logradouro,inputProps:{maxLength:100},onChange:W}),Object(O.jsx)(ee.a,{id:"num_imovel",label:"N\xfamero",fullWidth:!0,required:!0,variant:"filled",value:r.num_imovel,inputProps:{maxLength:10},onChange:W}),Object(O.jsx)(ee.a,{id:"complemento",label:"Complemento",variant:"filled",fullWidth:!0,value:r.complemento,inputProps:{maxLength:30},onChange:W}),Object(O.jsx)(ee.a,{id:"bairro",label:"Bairro",fullWidth:!0,required:!0,variant:"filled",value:r.bairro,inputProps:{maxLength:50},onChange:W}),Object(O.jsx)(ee.a,{id:"municipio",label:"Munic\xedpio",fullWidth:!0,required:!0,variant:"filled",value:r.municipio,inputProps:{maxLength:50},onChange:W}),Object(O.jsxs)(ee.a,{id:"uf",label:"UF",fullWidth:!0,required:!0,select:!0,variant:"filled",value:r.uf,onChange:function(e){return W(e,"uf")},children:[Object(O.jsx)(u.a,{value:"AC",children:"AC"}),Object(O.jsx)(u.a,{value:"AL",children:"AL"}),Object(O.jsx)(u.a,{value:"AP",children:"AP"}),Object(O.jsx)(u.a,{value:"AM",children:"AM"}),Object(O.jsx)(u.a,{value:"BA",children:"BA"}),Object(O.jsx)(u.a,{value:"CE",children:"CE"}),Object(O.jsx)(u.a,{value:"DF",children:"DF"}),Object(O.jsx)(u.a,{value:"ES",children:"ES"}),Object(O.jsx)(u.a,{value:"GO",children:"GO"}),Object(O.jsx)(u.a,{value:"MA",children:"MA"}),Object(O.jsx)(u.a,{value:"MT",children:"MT"}),Object(O.jsx)(u.a,{value:"MS",children:"MS"}),Object(O.jsx)(u.a,{value:"MG",children:"MG"}),Object(O.jsx)(u.a,{value:"PA",children:"PA"}),Object(O.jsx)(u.a,{value:"PB",children:"PB"}),Object(O.jsx)(u.a,{value:"PR",children:"PR"}),Object(O.jsx)(u.a,{value:"PE",children:"PE"}),Object(O.jsx)(u.a,{value:"PI",children:"PI"}),Object(O.jsx)(u.a,{value:"RJ",children:"RJ"}),Object(O.jsx)(u.a,{value:"RN",children:"RN"}),Object(O.jsx)(u.a,{value:"RS",children:"RS"}),Object(O.jsx)(u.a,{value:"RO",children:"RO"}),Object(O.jsx)(u.a,{value:"RR",children:"RR"}),Object(O.jsx)(u.a,{value:"SC",children:"SC"}),Object(O.jsx)(u.a,{value:"SP",children:"SP"}),Object(O.jsx)(u.a,{value:"SE",children:"SE"}),Object(O.jsx)(u.a,{value:"TO",children:"TO"})]}),Object(O.jsx)(ae.a,{id:"telefone",formatChars:re,mask:"(00) 00000-0000",value:r.telefone,onChange:function(e){return W(e,"telefone")},children:function(){return Object(O.jsx)(ee.a,{label:"Telefone",variant:"filled",fullWidth:!0,required:!0})}}),Object(O.jsx)(ee.a,{id:"email",label:"Email",type:"email",fullWidth:!0,required:!0,variant:"filled",value:r.email,inputProps:{maxLength:100},onChange:W}),Object(O.jsxs)(l.a,{className:e.toolbar,children:[Object(O.jsx)(L.a,{variant:"contained",color:"primary",type:"submit",disabled:p.disabled,children:p.label}),Object(O.jsx)(L.a,{variant:"outlined",onClick:function(){w?v(!0):k.push("/formulario-react/list")},children:"Voltar"})]})]})]})}var ce=a(38),le=Object(ce.a)({surpresa:{display:"block",margin:"0 auto",transition:"opacity 1s linear"},button:{textAlign:"center"}});function oe(){var e=le(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],i=a[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{className:e.button,children:Object(O.jsx)(L.a,{variant:"contained",color:"secondary",onClick:function(){i(!1===r)},children:"SUPRESA!"})}),Object(O.jsxs)("div",{style:{opacity:r?"1":"0"},className:e.surpresa,children:[Object(O.jsx)("h1",{children:"Cria\xe7\xe3o de formul\xe1rio com React.js"}),Object(O.jsx)("p",{children:"Projeto constru\xeddo na disciplina de Programa\xe7\xe3o Web da FATEC Franca."})]})]})}var se=a(257),ue=a(65),de=a(254),je=a(141),be=a.n(je),he=a(142),pe=a.n(he),me=Object(ue.a)({palette:{type:"dark",primary:{main:be.a[500]},secondary:{main:pe.a[500]}}}),Oe=Object(p.a)((function(e){return{box:{backgroundColor:e.palette.background.default,minHeight:"100vh",paddingBottom:"42px"},routed:{padding:"24px",color:e.palette.text.primary,fontFamily:e.typography.fontFamily}}}));function fe(){var e=Oe();return Object(O.jsx)(se.a,{className:e.box,children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(v,{}),Object(O.jsx)(se.a,{id:"routed",className:e.routed,children:Object(O.jsxs)(P.c,{children:[Object(O.jsx)(P.a,{exact:!0,path:"/formulario-react/",children:Object(O.jsx)(oe,{})}),Object(O.jsx)(P.a,{path:"/formulario-react/list",children:Object(O.jsx)(X,{})}),Object(O.jsx)(P.a,{path:"/formulario-react/new",children:Object(O.jsx)(ie,{})}),Object(O.jsx)(P.a,{path:"/formulario-react/edit/:id",children:Object(O.jsx)(ie,{})})]})}),Object(O.jsx)(k,{})]})})}var xe=function(){return Object(O.jsx)(de.a,{theme:me,children:Object(O.jsx)(fe,{})})},ge=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,264)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(xe,{})}),document.getElementById("root")),ge()}},[[201,1,2]]]);
//# sourceMappingURL=main.8b5279f3.chunk.js.map