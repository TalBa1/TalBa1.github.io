(this.webpackJsonpdemo1=this.webpackJsonpdemo1||[]).push([[0],{12:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(1),i=c.n(n),s=c(7),a=c.n(s),r=(c(12),c(6),c(13),c(3)),j=c(0),b=function(t){var e=Object(r.b)().addItem;return Object(j.jsx)("div",{className:"col-11 col-md-6 col-lg-3 mx-0 mb-4",children:Object(j.jsxs)("div",{className:"card p-0 overflow-hidden h-100 shadow",children:[Object(j.jsx)("img",{src:t.img,className:"card-img-top img-fluid"}),Object(j.jsxs)("div",{className:"card-body text-center",children:[Object(j.jsx)("h5",{className:"card-title",children:t.title}),Object(j.jsxs)("h5",{className:"card-text",children:["\u20ac ",t.price]}),Object(j.jsx)("p",{className:"card-text",children:t.desc}),Object(j.jsx)("button",{className:"btn btn-success",onClick:function(){return e(t.item)},children:"Lis\xe4\xe4 koriin"})]})]})})},l={productData:[{id:1,img:c.p+"static/media/hoodie.1e91d992.jpg",title:"Hoodie",desc:"Tuote on %100 villa",price:25},{id:2,img:c.p+"static/media/farkut.8e858043.jpg",title:"Farkut",desc:"Aitoo Adidas farkut",price:15},{id:3,img:c.p+"static/media/paita.4e3ae94b.jpg",title:"T-paita",desc:"Aitoo Nike T-paita",price:10}]},o=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{className:"text-center mt-3",children:"Kaikki tuotteet"}),Object(j.jsx)("section",{className:"py-4 container",children:Object(j.jsx)("div",{className:"row justify-content-center",children:l.productData.map((function(t,e){return Object(j.jsx)(b,{img:t.img,title:t.title,desc:t.desc,price:t.price,item:t},e)}))})})]})},u=c(4),d=c(2),O=function(t){var e=t.item;return Object(j.jsxs)("div",{className:"siuu",children:[Object(j.jsxs)("p",{children:["Tuote:",e.title]}),Object(j.jsxs)("p",{children:["Tuote per hinta:\u20ac",e.price]}),Object(j.jsxs)("p",{children:["M\xe4\xe4r\xe4:",e.quantity]})]})},m=function(t){var e=t.itemsData;return Object(j.jsx)("div",{children:e.map((function(t){return Object(j.jsx)(O,{item:t},t.id)}))})},h=function(t){var e=t.clientinfo,c=Object(r.b)().items,n=Object(r.b)().inCart;console.log(n);var i=Object(r.b)(),s=i.cartTotal,a=i.emptyCart;return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"wrapper2",children:Object(j.jsxs)("div",{className:"title2",children:["Yhteenveto",Object(j.jsx)("div",{className:"form2",children:Object(j.jsxs)("div",{className:"input_field2",children:["Tilatut tuotteet:",Object(j.jsx)(m,{itemsData:c}),"Kokonaishinta: \u20ac ",s,Object(j.jsxs)("p",{children:["katuosoite:",e.osoite]}),Object(j.jsx)("br",{}),"Kiitos tilauksesta ",e.name,"!",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Tiedot ovat l\xe4hetetty.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit2",onClick:function(){return a()},children:"ok"}),Object(j.jsx)("br",{})]})})]})})})},x=function(){var t=Object(n.useState)(""),e=Object(d.a)(t,2),c=e[0],i=e[1],s=Object(n.useState)(""),a=Object(d.a)(s,2),r=a[0],b=a[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),u=o[0],O=o[1],m=Object(n.useState)(""),x=Object(d.a)(m,2),p=x[0],v=x[1],f=Object(n.useState)(""),N=Object(d.a)(f,2),g=N[0],k=N[1],y=Object(n.useState)(""),C=Object(d.a)(y,2),T=C[0],S=C[1],w=Object(n.useState)(!1),I=Object(d.a)(w,2),D=I[0],q=I[1],F=Object(n.useState)({name:"",email:"",nro:"",osoite:"",pnro:"",toimipaik:""}),K=Object(d.a)(F,2),L=K[0],A=K[1];return console.log(L),Object(j.jsx)("div",{children:Object(j.jsx)("div",{children:Object(j.jsx)("form",{onSubmit:function(t){return function(t){t.preventDefault(),A({name:c,email:r,nro:u,osoite:p,pnro:g,toimipaik:T})}(t)},children:Object(j.jsx)("div",{className:"wrapper",children:Object(j.jsxs)("div",{className:"title",children:["Yhteystiedot",Object(j.jsx)("div",{className:"form",children:Object(j.jsxs)("div",{className:"input_field",children:[Object(j.jsx)("input",{type:"text",placeholder:"Name",value:c,onChange:function(t){return i(t.target.value)},className:"input"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"Email",value:r,onChange:function(t){return b(t.target.value)},className:"input"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"number",placeholder:"number",value:u,onChange:function(t){return O(t.target.value)},className:"input"}),"Toimitus paikka ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"katuosoite",value:p,onChange:function(t){return v(t.target.value)},className:"input"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"number",placeholder:"postinumero",value:g,onChange:function(t){return k(t.target.value)},className:"input"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"postitoimipaikka",value:T,onChange:function(t){return S(t.target.value)},className:"input"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return q(!D)},children:D?"Vahvistus k\xe4ynniss\xe4":"L\xe4het\xe4"}),D&&Object(j.jsx)(h,{clientinfo:L})]})})]})})})})})},p=function(){var t=Object(n.useState)(!1),e=Object(d.a)(t,2),c=e[0],i=e[1],s=Object(r.b)(),a=s.isEmpty,b=s.totalUniqueItems,l=s.items,o=s.totalItems,O=s.updateItemQuantity,m=s.removeItem,h=s.emptyCart,p=s.cartTotal;return a?Object(j.jsx)("h1",{className:"text-center",children:"Korisi on nyt tyhj\xe4"}):Object(j.jsx)("section",{className:"py-4 container",children:Object(j.jsxs)("div",{className:"row justify-content-center",children:[Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("h5",{children:["Ostostkori (",b,"),Tuotteet yhteens\xe4: (",o,")"]}),Object(j.jsx)("table",{className:"table table-light table-hover m-0",children:Object(j.jsx)("tbody",{children:l.map((function(t,e){var c,n;return Object(j.jsx)("tr",{children:Object(j.jsxs)("td",{children:[Object(j.jsx)("img",{src:t.img,style:{height:"6rem"}}),Object(j.jsx)("td",{children:t.title}),Object(j.jsxs)("td",{children:["\u20ac",t.price]}),Object(j.jsxs)("td",{children:["M\xe4\xe4r\xe4 (",t.quantity,")"]}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{className:"btn btn-info ms-2",onClick:function(){return O(t.id,t.quantity-1)},children:"-"}),Object(j.jsx)("button",(c={className:"btn btn-info ms-2"},Object(u.a)(c,"className","btn btn-info ms-2"),Object(u.a)(c,"onClick",(function(){return O(t.id,t.quantity+1)})),Object(u.a)(c,"children","+"),c)),Object(j.jsx)("button",(n={className:"btn btn-danger ms-2"},Object(u.a)(n,"className","btn btn-info ms-2"),Object(u.a)(n,"onClick",(function(){return m(t.id)})),Object(u.a)(n,"children","Poista tuote"),n))]})]})},e)}))})})]}),Object(j.jsx)("div",{className:"col-auto ms-auto",children:Object(j.jsxs)("h2",{children:["Kokonaishinta: \u20ac ",p]})}),Object(j.jsxs)("div",{className:"col-auto",children:[Object(j.jsx)("button",{className:"btn btn-danger m-2",onClick:function(){return h()},children:" Tyhjenn\xe4 ostoskorin"}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return i(!c)},children:c?"Vahvistus k\xe4ynniss\xe4":"Vahvista tilaus"}),c&&Object(j.jsx)(x,{})]})]})})},v=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(o,{}),Object(j.jsx)(p,{})]})})},f=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),n(t),i(t),s(t),a(t)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),f()},6:function(t,e,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.e4bae505.chunk.js.map