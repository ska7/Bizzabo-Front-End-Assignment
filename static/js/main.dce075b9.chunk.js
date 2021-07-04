(this["webpackJsonpbizzabo-front-end-assignment"]=this["webpackJsonpbizzabo-front-end-assignment"]||[]).push([[0],{107:function(e,t,n){"use strict";n.r(t);var a=n(0),A=n.n(a),r=n(10),c=n.n(r),o=(n(80),n(153)),i=n(16),s=n(45),l=(n(81),n(144)),g=n(110),b=n(139),d=n(156),p=n(62),u=n(154),f=n(4),j=Object(b.a)({input:{marginTop:"50px",width:"30vw"}}),h=function(e){var t=e.setSearchString,n=j(),A=function(e){return t(e.target.value)},r=Object(a.useMemo)((function(){return Object(p.debounce)(A,500)}),[]);return Object(a.useEffect)((function(){return function(){return function(){r.cancel()}}}),[]),Object(f.jsx)(u.a,{onChange:r,color:"secondary",className:n.input,id:"outlined-basic",label:"Type in a repo name",variant:"outlined",inputProps:{autoComplete:"off"}})},O=n(68),m=n.n(O),x=n(149),U=n(143),v=n(150),y=n(151),S=n(146),C=n(147),w=n(152),B=n(148),q=n(145),k=n(69),T=n.n(k),P=n(70),N=n.n(P),D=function(e){if(e.toString().length>=10)return"> 1b";if(e.toString().length<4)return e.toString();if(e.toString().length>3&&e.toString().length<=6){var t=e.toString().slice(0,-3),n=e.toString().slice(-3);return"".concat(parseFloat("".concat(t,".").concat(n)).toFixed(),"k")}if(e.toString().length>=7&&e.toString().length<10){var a=e.toString().slice(0,-6),A=e.toString().slice(-6);return"".concat(parseFloat("".concat(a,".").concat(A)).toFixed(),"m")}return e},E=Object(b.a)({repositoryInfoGrid:{width:"50%",display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},icon:{display:"flex",justifyContent:"center",padding:"0px 10px"},aligntTextRight:{textAlign:"right",width:"50%"}}),J=function(e){var t=e.forks,n=e.stars,a=E();return Object(f.jsxs)(l.a,{className:a.repositoryInfoGrid,children:[Object(f.jsx)(g.a,{className:a.aligntTextRight,children:D(t)}),Object(f.jsx)(q.a,{className:a.icon,children:Object(f.jsx)(T.a,{fontSize:"small"})}),Object(f.jsx)(q.a,{className:a.icon,children:Object(f.jsx)(N.a,{fontSize:"small"})}),Object(f.jsx)(g.a,{children:D(n)})]})},L=Object(b.a)({tableRow:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"75px",width:"100%",borderBottom:"1px solid rgba(224, 224, 224, 1)","&:hover":{cursor:"pointer",textDecoration:"none"}},tableCell:{padding:"20px 0px",width:"100%",border:"none",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},repositoryName:{width:"50%",paddingLeft:"25px"},link:{width:"100%",display:"flex",textDecoration:"none",color:"black",padding:0,margin:0,"&:hover":{textDecoration:"none"}}}),I=function(e){var t=e.repository,n=L();return Object(f.jsx)(S.a,{hover:!0,className:n.tableRow,children:Object(f.jsx)(C.a,{component:"th",scope:"row",className:n.tableCell,children:Object(f.jsxs)(B.a,{href:t.html_url,className:n.link,target:"_blank",rel:"noreferrer noopener",children:[Object(f.jsx)(g.a,{className:n.repositoryName,children:t.full_name}),Object(f.jsx)(J,{forks:t.forks,stars:t.stargazers_count})]})})},t.html_url)},Q=Object(b.a)((function(e){return Object(d.a)({tableContainer:{margin:"50px 0px",width:"80vw",display:"flex",justifyContent:"center"},table:{height:"100%",width:"100%"},tableHead:{background:"grey",textAlign:"center",display:"flex",justifyContent:"center",width:"100%"},tableCell:{width:"100%",border:"none"},tableCellHeader:{color:"white",fontWeight:"bold"},tableBody:{height:"auto"},noResultsMessage:Object(s.a)({},e.defaultMessage)})})),V=function(e){var t=e.repositories,n=e.repositoriesCount,a=Q();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(x.a,{component:U.a,className:a.tableContainer,children:Object(f.jsxs)(v.a,{className:a.table,size:"medium","aria-label":"a dense table",children:[Object(f.jsx)(y.a,{className:a.tableHead,children:Object(f.jsx)(S.a,{children:Object(f.jsxs)(C.a,{className:"".concat(a.tableCell," ").concat(a.tableCellHeader),children:["Found"," ",n," ","repositories"]})})}),Object(f.jsx)(w.a,{className:a.tableBody,children:t.map((function(e){return Object(f.jsx)(I,{repository:e},e.full_name)}))})]})}),t.length?null:Object(f.jsx)(g.a,{className:a.noResultsMessage,children:"No repositories found, try to adjust your request"})]})},X=n(155),Z=Object(b.a)((function(e){return Object(d.a)({active:{background:e.palette.secondary.main,color:"white","&:focus":{background:e.palette.secondary.main},"&:hover":{background:e.palette.secondary.main}},page:{height:"50px",minWidth:"50px",padding:0,margin:"0px 10px"}})})),K=function(e){var t=e.pageNumber,n=e.activePage,a=e.setActivePage,A=Z();return Object(f.jsx)(X.a,{variant:"text",disableElevation:!0,disableFocusRipple:!0,className:"".concat(A.page," ").concat(t===n&&A.active),onClick:function(){return a(t)},children:t})},M=Object(b.a)({paginationBlock:{position:"absolute",bottom:"30px"},hidden:{visibility:"hidden"}}),z=function(e){var t=e.pages,n=e.activePage,a=e.setActivePage,A=e.totalPageCount,r=M();return Object(f.jsxs)(l.a,{className:r.paginationBlock,children:[Object(f.jsx)(X.a,{className:1===n?r.hidden:"",onClick:function(){return a(n-1)},children:"Prev"}),t.map((function(e){return Object(f.jsx)(K,{activePage:n,pageNumber:e,setActivePage:a},"page-item-".concat(e))})),Object(f.jsx)(X.a,{className:n===A?r.hidden:"",onClick:function(){return a(n+1)},children:"Next"})]})},F=function(e){var t=e.activePage,n=e.setActivePage,A=e.totalPageCount,r=Object(a.useState)([]),c=Object(i.a)(r,2),o=c[0],s=c[1];return Object(a.useEffect)((function(){s(function(e,t){var n=[];if(t>7)if(e>=5)for(var a=e-3;a<e+4;a++)n.push(a);else for(var A=1;A<8;A++)n.push(A);else for(var r=1;r<t;r++)n.push(r);return n}(t,A))}),[t]),Object(f.jsx)(z,{activePage:t,pages:o,setActivePage:n,totalPageCount:A})},R=Object(b.a)({"@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},loader:{top:0,bottom:0,left:0,right:0,margin:"auto auto",position:"absolute",animation:"$spin 1s forwards linear infinite",height:"150px",width:"150px"}}),H=function(){var e=R();return Object(f.jsx)("img",{className:e.loader,src:"data:image/png;base64,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",alt:"loader"})},Y=function(e){var t=e.searchQuery,n=e.resultsPerPage,A=Object(a.useState)(1),r=Object(i.a)(A,2),c=r[0],o=r[1],s=Object(a.useState)([]),l=Object(i.a)(s,2),g=l[0],b=l[1],d=Object(a.useState)(!0),p=Object(i.a)(d,2),u=p[0],j=p[1],h=Object(a.useState)(0),O=Object(i.a)(h,2),x=O[0],U=O[1],v=Object(a.useState)(0),y=Object(i.a)(v,2),S=y[0],C=y[1];return Object(a.useEffect)((function(){j(!0),function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6;return m.a.get("https://api.github.com/search/repositories?q=".concat(e,"&per_page=").concat(n,"&page=").concat(t))}(t,c,n).then((function(e){var t=e.data;b(t.items),C(t.total_count/n),U(t.total_count)})).catch((function(e){return alert(e.message)})).finally((function(){return j(!1)}))}),[t,c]),Object(f.jsxs)(f.Fragment,{children:[u?Object(f.jsx)(H,{}):Object(f.jsx)(V,{repositories:g,repositoriesCount:x}),x>n?Object(f.jsx)(F,{totalPageCount:S,activePage:c,setActivePage:o}):null]})},G=Object(b.a)((function(e){return Object(d.a)({defaultMessage:Object(s.a)({},e.defaultMessage)})})),W=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],A=t[1];Object(a.useEffect)((function(){}),[n]);var r=G();return Object(f.jsxs)(l.a,{className:"App",children:[Object(f.jsx)(h,{setSearchString:A}),n.length>=2?Object(f.jsx)(Y,{searchQuery:n,resultsPerPage:6}):Object(f.jsx)(g.a,{className:r.defaultMessage,children:"Start your search!"})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,157)).then((function(t){var n=t.getCLS,a=t.getFID,A=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),A(e),r(e),c(e)}))},$=n(71),ee=Object($.a)({defaultMessage:{marginTop:"100px",fontWeight:"bold",fontSize:"25px"}});c.a.render(Object(f.jsx)(A.a.StrictMode,{children:Object(f.jsx)(o.a,{theme:ee,children:Object(f.jsx)(W,{})})}),document.getElementById("root")),_()},80:function(e,t,n){},81:function(e,t,n){}},[[107,1,2]]]);
//# sourceMappingURL=main.dce075b9.chunk.js.map