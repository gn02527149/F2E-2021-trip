(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t){},22:function(e,t){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},37:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(19),a=c.n(s),r=c(4),i=c(2),o=(c(28),c(29),c(7)),j=(c(30),c(0)),l=function(){Object(i.f)();var e=Object(n.useState)(!1),t=Object(o.a)(e,2);t[0],t[1];return Object(j.jsx)("div",{id:"top-navigation",children:Object(j.jsxs)("div",{className:"inner-container",children:[Object(j.jsxs)("div",{className:"logoBox",children:[Object(j.jsx)("div",{className:"logo"}),Object(j.jsx)("p",{children:"Travel Taiwan"})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)(r.b,{className:"select",to:"/",children:"\u9996\u9801"}),Object(j.jsx)(r.b,{to:"/:searchKind/search-result",children:"\u666f\u9ede\u5c0e\u89bd"}),Object(j.jsx)(r.b,{className:"not-allowed",to:"/",children:"\u89c0\u5149\u6d3b\u52d5"})]})]})})},d=(c(37),function(){return Object(j.jsx)("div",{id:"footer",children:Object(j.jsx)("div",{className:"inner-container",children:Object(j.jsx)("span",{className:"copyright",children:"#The F2E 3rd Week01 Design_#Tracy | FE_#Ruby "})})})}),b=c(5),u=c.n(b),h=c(10),O=c(23),x=c(11),p=c.n(x),f="https://ptx.transportdata.tw/MOTC/",m=function(){var e=(new Date).toGMTString(),t=new O.a("SHA-1","TEXT");return t.setHMACKey("mPqGsiqokJLEiYoiFKP7eN2nWxw","TEXT"),t.update("x-date: "+e),{Authorization:'hmac username="7a376b59e20f4432ac089f1fa355b119", algorithm="hmac-sha1", headers="x-date", signature="'+t.getHMAC("B64")+'"',"X-Date":e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(f).concat("/v2").concat(e,"?").concat(p.a.stringify(t)),{method:"GET",headers:m()}).then(function(){var e=Object(h.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=5;break}return e.next=3,t.json().then((function(e){return e.Message}));case 3:throw e.sent;case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).then((function(e){return e}))},A=function(e,t){var c="/Tourism/ScenicSpot";return v(e?"".concat(c,"/").concat(e):c,t)},N=c.p+"static/media/unsplash_5Lw1U5BIumE.5e889f92.png",g=(c(41),function(){var e=Object(i.f)(),t=Object(n.useState)("\u63a2\u7d22\u666f\u9ede"),c=Object(o.a)(t,2),s=c[0],a=c[1],r=Object(n.useState)(),l=Object(o.a)(r,2),d=l[0];l[1];Object(n.useEffect)(Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),[]);return Object(j.jsx)("div",{className:"header-search",children:Object(j.jsxs)("div",{className:"inner-container",children:[Object(j.jsx)("div",{className:"sloganBox",children:Object(j.jsx)("p",{className:"slogan",children:"Welcome to Travel Taiwan"})}),Object(j.jsxs)("div",{className:"searchBox",children:[Object(j.jsxs)("select",{className:"search-kind",value:s,onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{children:"\u985e\u5225"}),Object(j.jsx)("option",{children:"\u6240\u6709\u985e\u5225"}),Object(j.jsx)("option",{children:"\u81ea\u7136\u98a8\u666f"}),Object(j.jsx)("option",{children:"\u9ad4\u80b2\u5065\u8eab"}),Object(j.jsx)("option",{children:"\u904a\u61a9\u985e"}),Object(j.jsx)("option",{children:"\u53e4\u8e5f\u985e"})]}),Object(j.jsxs)("select",{className:"search-city",value:d,onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{children:"\u6240\u6709\u7e23\u5e02"}),Object(j.jsx)("option",{children:"\u53f0 \u5317 \u5e02"}),Object(j.jsx)("option",{children:"\u65b0 \u5317 \u5e02"}),Object(j.jsx)("option",{children:"\u6843 \u5712 \u5e02"}),Object(j.jsx)("option",{children:"\u53f0 \u4e2d \u5e02"}),Object(j.jsx)("option",{children:"\u53f0 \u5357 \u5e02"}),Object(j.jsx)("option",{children:"\u9ad8 \u96c4 \u5e02"}),Object(j.jsx)("option",{children:"\u57fa \u9686 \u5e02"}),Object(j.jsx)("option",{children:"\u65b0 \u7af9 \u5e02"}),Object(j.jsx)("option",{children:"\u65b0 \u7af9 \u7e23"}),Object(j.jsx)("option",{children:"\u82d7 \u6817 \u7e23"}),Object(j.jsx)("option",{children:"\u5f70 \u5316 \u7e23"}),Object(j.jsx)("option",{children:"\u5357 \u6295 \u7e23"}),Object(j.jsx)("option",{children:"\u96f2 \u6797 \u7e23"}),Object(j.jsx)("option",{children:"\u5609 \u7fa9 \u7e23"}),Object(j.jsx)("option",{children:"\u5609 \u7fa9 \u5e02"}),Object(j.jsx)("option",{children:"\u5c4f \u6771 \u7e23"}),Object(j.jsx)("option",{children:"\u5b9c \u862d \u7e23"}),Object(j.jsx)("option",{children:"\u82b1 \u84ee \u7e23"}),Object(j.jsx)("option",{children:"\u91d1 \u9580 \u7e23"}),Object(j.jsx)("option",{children:"\u6f8e \u6e56 \u7e23"}),Object(j.jsx)("option",{children:"\u9023 \u6c5f \u7e23"})]}),Object(j.jsx)("div",{className:"search-button",onClick:function(){e.push("/F2E-2021-trip/scenic-spot/search-result?".concat(p.a.stringify({searchKind:s,searchCity:d})))},children:Object(j.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQFSURBVHgB1ZlLaBNbGMf/Z5qYFHOviXBbeq/Yx6LCvdf2ohfswohVRLqoDwRFMIILu1Jwb6EtqAt1oagbEVxUFETwtfCN0m4qKDT1gQ9saxTFCia1LUlt7Xj+p5lxjH3MTLSMPwg5M+ck85/vfN93vpkjkEOw9cpy4fet1cfEOkAvwwwigE5diE5kRloy2+p6c/rGCZ88H04HQk3yxC54AF3DocK0ryW1rTbFYyWUIocDods68B88BC0cGPbVUqzGE7Sk10QSakoXjjaxLYInr5Qh4OuBl/k8Wqsh6G+CxxEFBes0Xdc9N+W56NDWasKDvvk9epmGXwQf8iBaFMHW8hJEi+eidHZQnUuNjKIrOYDLr9/LTx9eDmXwIxDB0zd0OIQCGxdWYJn8no4jzxLY19Ujb2AE+eBYaOO/FdgtRVpp60siMZhW7Tmz/KiK/GZamNCqq2/dy8u6joTmijz6NIG9D7rVdOdCax+v+ccUnK9Y20J5wSdrlqo2hW1qiytLbin/E7GKEmXFsN8n/XMQ8dRHdQMUdWBRJXYsmK9+x/Grb92HG2wLpUjDOkuudihBZ6PVqJ/3x4TjKXJje1wFlnVcQ8djtPa8gVNspSdOoyGytfutEkn2PHwx4bQTjr++YrG0sh/b7z4yx22R1neDLaHWP98rxRlQMP2O01xy7g4Kz9xUU2v44ZxZPunT5ej/NIpT3eNWtN70DxdaLf2P0Mdyg4Fi9zz8GlAc09DxyOyPSR8mzKsG0aK5cIqthF8VHhf6MpuCpoNi+SmdXaiOOf3x1IDZ78aiea1MU+E2uifD1tRPFjBOqA6HzHa/i/+zJZQphqyZVwS3LIz8brbjyQE4xZbQ9ndJ9c0ojtpY3ycils0czADtfUk4xZZQFhbG9B9ctABO4eplFDCXLNHvBFtCaYVjTxKqXRUJYf/iStiFEd6YrQ94s9Y87ATbhTOtauTQnZXz1bI4XZqp/6sIHXU15rjLr97//KKE8ILXVv7/TUXU1vdBLasPZIDQYuxjQqdPTlSvcjFo7XkLpziuRymE5dsym0FF8bRkzLIMuxFb4NuwtdnJD5gDT8mLJKQ1S0NBFAcDmEzgieev0SALEmO8UUHVyzSXGEqjKzVo+7quHkWs0MKsRY1ltj/7zNSVdQUrXPeP1/xtHjuxbN5CneJW7Iw/LrNoZvFswCdYO/y0omQqjAo/Whz5piScihmferf8Mm9KpFDRC48jp7xTvs0buwiPI+R7fU2MiQvwPCMtWia26o6ui8PwKAL64czmul4VTMOfCprpB/AYUqTcbBhqZns86uWuw7DcffCSZWlJKVLuiKz/un1jJXhGbj7otLConvm30aJXYOyi/llcoEtae74A3m/MlkccdegAAAAASUVORK5CYII=",alt:"search"})})]})]})})}),w=c(18),y=c.n(w),C=(c(42),function(){Object(i.f)();var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(o.a)(a,2),l=r[0],d=r[1];return console.log(l),Object(n.useEffect)(Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(){var e=Object(h.a)(u.a.mark((function e(t){var c,n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.coords,e.next=3,A("",{$top:6,$select:"ID,City,Name,Picture,Position",$spatialFilter:"nearby(".concat(n.latitude,",").concat(n.longitude,",5000)"),$filter:"Picture/PictureUrl1 ne null"});case 3:a=e.sent,console.log("nearby me",a),a.City=a.City||(null===(c=a.Address)||void 0===c?void 0:c.substr(0,3)),s(a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Object(h.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!1);case 1:case"end":return e.stop()}}),e)})))),e.next=3,A("",{$filter:"Picture/PictureUrl1 ne null",$orderby:"Keyword desc",$format:"JSON",$skip:Math.floor(97*Math.random()+4),$top:4});case 3:t=e.sent,d(t);case 5:case"end":return e.stop()}}),e)}))),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(g,{}),c&&Object(j.jsx)(y.a,{sliderData:c,needRedirect:!0}),Object(j.jsx)("div",{className:"homepage-container inner-container",children:l.length>0&&Object(j.jsxs)("div",{className:"hot-container",children:[Object(j.jsxs)("p",{className:"title hot",children:[Object(j.jsx)("span",{children:"\u71b1\u9580\u666f\u9ede"}),Object(j.jsxs)("p",{children:["\u53f0\u7063\u7684\u5404\u500b\u7f8e\u666f\uff0c\u90fd\u7f8e\u4e0d\u52dd\u6536\u3002",Object(j.jsx)("br",{})," \u7b49\u4f60\u4e00\u540c\u4f86\u767c\u73fe\u9019\u5ea7\u5bf6\u5cf6\u7684\u5967\u5999\uff01"]})]}),Object(j.jsx)("div",{className:"card-container",children:l.map((function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:e.Picture.PictureUrl1||N}),Object(j.jsx)("p",{className:"title",children:e.Name}),Object(j.jsx)("div",{className:"city-info",children:Object(j.jsx)("span",{children:e.Address||e.City})}),Object(j.jsx)("div",{className:"open-time",children:Object(j.jsx)("span",{children:e.OpenTime})})]},e.ID)}))})]})})]})}),E=C,F=(c(43),c(44),function(){return Object(j.jsx)("span",{className:"separator",children:"/"})}),T=function(){var e=Object(i.f)(),t=Object(i.h)().searchKind,c=void 0===t?"scenic-spot":t,s=Object(i.g)(),a=Object(n.useState)(p.a.parse(s.search.substring(1)).searchCity||""),l=Object(o.a)(a,2),d=l[0],b=l[1],O=Object(n.useState)(p.a.parse(s.search).searchKeyword||""),x=Object(o.a)(O,2),f=x[0],m=x[1],v=Object(n.useState)([]),N=Object(o.a)(v,2),g=(N[0],N[1]),w=Object(n.useState)(!1),y=Object(o.a)(w,2),C=y[0],E=y[1];Object(n.useEffect)(Object(h.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("scenic-spot"!==c){e.next=7;break}return E(!0),e.next=4,A(d,{$filter:"contains(Name,'".concat(f,"')"),$top:20});case 4:t=e.sent,g(t),E(!1);case 7:case"end":return e.stop()}}),e)}))),[s]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"search-result",children:[C&&Object(j.jsx)("div",{className:"mask"}),Object(j.jsxs)("div",{className:"inner-container",children:[Object(j.jsxs)("div",{className:"breadcrumb",children:[Object(j.jsx)(r.b,{to:"/",children:"\u9996\u9801"}),Object(j.jsx)(F,{}),"\u63a2\u7d22\u666f\u9ede"]}),Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)("select",{className:"search-kind",value:d,onChange:function(e){return b(e.target.value)},children:Object(j.jsx)("option",{value:"",children:"\u5168\u90e8\u7e23\u5e02"})}),Object(j.jsx)("input",{className:"search-keyword",placeholder:"\u4f60\u60f3\u53bb\u54ea\u88e1\uff1f\u8acb\u8f38\u5165\u95dc\u9375\u5b57",value:f,onChange:function(e){return m(e.target.value)}}),Object(j.jsx)("div",{className:"search-button",onClick:function(){e.push("/F2E-2021-trip/scenic-spot/search-result?".concat(p.a.stringify({searchCity:d,searchKeyword:f})))},children:"\u641c\u5c0b"})]}),Object(j.jsx)("div",{className:"show-result",children:Object(j.jsxs)("p",{className:"result-text",children:["\u641c\u5c0b\u7d50\u679c"," ",Object(j.jsx)("span",{})]})})]})]})})},k=c(22),K=c.n(k).a,S=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{exact:!0,path:"/F2E-2021-trip/",component:E}),Object(j.jsx)(i.a,{path:"/F2E-2021-trip/:searchKind/search-result",component:T}),Object(j.jsx)(i.a,{path:"/F2E-2021-trip/:searchKind/view/:id",component:K})]}),Object(j.jsx)(d,{})]})})};a.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f1ad3ca2.chunk.js.map