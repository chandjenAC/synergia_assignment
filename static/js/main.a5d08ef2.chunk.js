(this.webpackJsonpsime_labs_project=this.webpackJsonpsime_labs_project||[]).push([[0],{290:function(t,e,n){},445:function(t,e,n){"use strict";n.r(e);var a=n(14),c=n(0),i=n.n(c),r=n(26),o=n.n(r),s=(n(290),n(86)),u=n(44),l=n.n(u),d=n(101),j=n(38),b=n(479),m=n(482),f=n(494),p=n(485),h=n(497),O=n(240),x=n.n(O),y=function(){var t=Object(d.a)(l.a.mark((function t(e){var n,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){return(c=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get(e).then((function(t){n=t.data})).catch((function(t){var e;n=null===t||void 0===t||null===(e=t.response)||void 0===e?void 0:e.data,console.log(t)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)},a=function(){return c.apply(this,arguments)},t.next=4,a();case 4:return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g="https://api.openaq.org/v1/cities?country=IN&limit=260",v=function(t){var e=t.city,n=t.dateFrom,a=t.dateTo;return"https://api.openaq.org/v1/measurements?country=IN&city=".concat(e,"&date_from=").concat(n,"&date_to=").concat(a,"&limit=150")},k=n(484),w=Object(b.a)((function(t){return{progress:{zIndex:99,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},cont:{width:200}}})),C=function(t){var e=t.loaderText,n=w();return Object(a.jsx)("div",{className:n.progress,children:Object(a.jsxs)(m.a,{container:!0,direction:"column",alignItems:"center",justify:"center",className:n.cont,children:[Object(a.jsx)(m.a,{item:!0,children:Object(a.jsx)(k.a,{size:28})}),Object(a.jsx)(m.a,{item:!0,children:Object(a.jsx)(p.a,{variant:"caption",children:e})})]})})},S=n(27),N=n(261),T=n(498),D=n(265),I=n(253),M=n(254),F=n(157),L=n(500),X=n(491),_=n(121),B=n(85),E=n(486),P=function(t,e,n){if(t){if(e)return Object(B.a)(new Date(Object(E.a)(t)),"MM/dd/yyyy");if(n){var a=new Date(t).toISOString();return"".concat(a.substr(11,8))}return t}return""},q=["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf","#8884d8","#82ca9d"],W=n(487),z=function(t){var e=t.isDateOnXaxis,n=t.isTimeOnXaxis;return Object(a.jsxs)(W.a,{style:{padding:10},children:[Object(a.jsx)(p.a,{variant:"subtitle2",children:P(t.label,e,n)}),t.payload&&t.payload.map((function(t,e){return Object(a.jsx)(p.a,{variant:"body2",align:"left",style:{color:t.color,padding:"3px 0px"},children:"".concat(t.name,": ").concat((n=t.value,n=Number(n),new Intl.NumberFormat("en-US").format(n))).concat(t.unit)},e);var n}))]})},J=function(t){var e=t.data,n=t.width,c=t.height,i=t.isDateOnXaxis,r=t.isTimeOnXaxis,o=q;return(null===e||void 0===e?void 0:e.data)&&Object(a.jsx)(L.a,{width:n,height:c,children:Object(a.jsxs)(T.a,{data:e.data,margin:{top:5,right:30,left:5,bottom:5},children:[Object(a.jsx)(I.a,{dataKey:"name",tick:{fill:"#949494"},stroke:"#5c5c5c",strokeWidth:.5,tickLine:!1,axisLine:!0,tickFormatter:function(t){return P(t,i,r)}}),Object(a.jsx)(M.a,{tick:{fill:"#949494"},stroke:"#5c5c5c",strokeWidth:.5,tickLine:!1}),Object(a.jsx)(X.a,{strokeWidth:.5}),Object(a.jsx)(F.a,{content:Object(a.jsx)(z,Object(s.a)({isDateOnXaxis:i,isTimeOnXaxis:r},t))}),Object(a.jsx)(_.a,{wrapperStyle:{color:"#c2c9d9"}}),e.lines.map((function(t,e){return Object(a.jsx)(D.a,{name:t.name,dataKey:t.key,unit:t.unit,stroke:o[e],strokeDasharray:t.dashedLine?"5 5":null,dot:{fill:o[e]}},e)}))]})})},K=i.a.memo(J),R=n(264),U=n(33),V=n(260),A=n(116),G=n(146),H=n.n(G),Q=n(259),Y=n.n(Q),Z=Object(b.a)((function(t){return{root:{background:"#f5f5f5",height:"100vh",padding:"0px 60px"},titleCont:{marginBottom:"1.5rem"},selectCont:{margin:"1.5rem"},chartCont:{display:"grid",placeItems:"center",marginTop:"2.5rem",width:"100%",height:500},centerDiv:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},fieldCont:{padding:"0px 16px"},submitButtonCont:{padding:"12px 16px 0px 16px"}}})),$=function(){var t=Z(),e=Object(c.useState)(!1),n=Object(j.a)(e,2),i=n[0],r=n[1],o=Object(c.useState)("Loading Cities..."),u=Object(j.a)(o,2),b=u[0],O=u[1],x=Object(c.useState)([]),k=Object(j.a)(x,2),w=k[0],T=k[1],D=Object(c.useState)({data:[],lines:[{key:"no2",name:"NO2",unit:"\xb5g/m\xb3"},{key:"pm25",name:"PM25",unit:"\xb5g/m\xb3"},{key:"o3",name:"O3",unit:"\xb5g/m\xb3"},{key:"co",name:"CO",unit:"\xb5g/m\xb3"},{key:"pm10",name:"PM10",unit:"\xb5g/m\xb3"},{key:"so2",name:"SO2",unit:"\xb5g/m\xb3"}]}),I=Object(j.a)(D,2),M=I[0],F=I[1];Object(c.useEffect)((function(){L()}),[]);var L=function(){var t=Object(d.a)(l.a.mark((function t(){var e,n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],r(!0),t.next=4,y(g);case 4:(null===(a=t.sent)||void 0===a||null===(e=a.results)||void 0===e?void 0:e.length)>0&&a.results.forEach((function(t){n.push({label:t.name,value:t.name})})),T(n),r(!1);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=Object(d.a)(l.a.mark((function t(e,n){var a,c,i,o,u,d,j,b;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.city.label,i=Object(B.a)(new Date(e.date),"yyyy-MM-dd"),o=Object(B.a)(Object(A.a)(new Date(e.date),1),"yyyy-MM-dd"),r(!0),O("Loading pollution data..."),u=v({city:c,dateFrom:i,dateTo:o}),t.next=8,y(u);case 8:(null===(d=t.sent)||void 0===d||null===(a=d.results)||void 0===a?void 0:a.length)>0&&(j=[],b=H()(Y()(d.results,"date.utc")),Object.keys(b).forEach((function(t){var e={};e.name=t,b[t].forEach((function(t){e[t.parameter]=t.value})),j.push(e)})),j.reverse(),F(Object(s.a)(Object(s.a)({},M),{},{data:j}))),r(!1),n(!1);case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(a.jsxs)(m.a,{container:!0,direction:"column",className:t.root,alignItems:"center",justify:"center",children:[i&&Object(a.jsx)("div",{className:t.centerDiv,children:Object(a.jsx)(C,{loaderText:b})}),Object(a.jsx)(m.a,{item:!0,className:t.titleCont,children:Object(a.jsx)(p.a,{variant:"h5",align:"center",children:"Pollution count by City"})}),Object(a.jsx)(m.a,{item:!0,className:t.selectCont,children:Object(a.jsx)(U.c,{initialValues:{date:new Date,city:null},validate:function(t){var e={};return t.city||(e.city="Required!"),t.date||(e.date="Required!"),e},onSubmit:function(t,e){var n=e.setSubmitting;setTimeout((function(){X(t,n)}),500)},children:function(e){var n=e.submitForm,c=e.isSubmitting,i=e.touched,r=e.errors;return Object(a.jsx)(S.a,{utils:N.a,children:Object(a.jsx)(U.b,{children:Object(a.jsxs)(m.a,{container:!0,alignItems:"flex-start",children:[Object(a.jsx)(m.a,{item:!0,className:t.fieldCont,children:Object(a.jsx)(U.a,{name:"city",component:R.a,options:w,getOptionLabel:function(t){return t.label},style:{width:230},renderInput:function(t){return Object(a.jsx)(h.a,Object(s.a)(Object(s.a)({},t),{},{margin:"dense",error:i.city&&!!r.city,helperText:i.city&&r.city,label:"Select City"}))}})}),Object(a.jsx)(m.a,{item:!0,className:t.fieldCont,children:Object(a.jsx)(U.a,{component:V.a,autoOk:!0,format:"dd/MM/yyyy",variant:"outlined",margin:"dense",name:"date",label:"Select Date"})}),Object(a.jsx)(m.a,{item:!0,className:t.submitButtonCont,children:Object(a.jsx)(f.a,{variant:"contained",color:"primary",disabled:c,onClick:n,children:"Search"})})]})})})}})}),Object(a.jsx)(m.a,{item:!0,className:t.chartCont,children:M.data.length>0&&Object(a.jsx)(K,{width:"80%",height:500,data:M,isTimeOnXaxis:!0})})]})},tt=n(495),et=n(262),nt=n(502),at=Object(et.a)({palette:{primary:{main:"#2574fb",light:"#d0e1ff",dark:"#303f9f"},secondary:{main:"#6e19ce"},green:{main:"#26c738",dark:"#079417"},text:{secondary:"#898b8f"}},typography:{fontFamily:["Comfortaa"].join(","),button:{textTransform:"none"}}}),ct=at=Object(nt.a)(at),it=n(496),rt=function(){return Object(a.jsxs)(tt.a,{theme:ct,children:[Object(a.jsx)(it.a,{})," ",Object(a.jsx)($,{})]})},ot=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,505)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(rt,{})}),document.getElementById("root")),ot()}},[[445,1,2]]]);
//# sourceMappingURL=main.a5d08ef2.chunk.js.map