(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/logo.0354cb1c.svg"},45:function(e,t,a){e.exports=a(64)},50:function(e,t,a){},54:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),l=a.n(c),o=(a(50),a(51),a(52),a(53),a(3)),i=a(4),s=a(6),m=a(5),u=a(7),d=(a(54),a(55),a(22)),p=a(15),f=a(9),h=a(16),b=a(35),g=a.n(b);function v(){var e=Object(p.a)(["\n  background: var(--mainBrown);\n  .nav-link {\n    color: var(--mainWhite) !important;\n    font-size:1rem;\n    text-transform:capitalize;\n  }\n  @media (max-width: 576px) {\n    .navbar-nav {\n      flex-direction: row !important;\n"]);return v=function(){return e},e}var E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(x,{className:"navbar navbar-expand-sm  navbar-dark px-sm-5"},r.a.createElement(f.b,{to:"/"},r.a.createElement("img",{src:g.a,alt:"Home",className:"navbar-brand"})),r.a.createElement("ul",{className:"navbar-nav align-items-center"},r.a.createElement("li",{className:"nav-item ml-5"},r.a.createElement(f.b,{to:"/menu",className:"nav-link"},"Menu"))),r.a.createElement(f.b,{to:"/kitchen",className:"nav-link"},"Kitchen"))}}]),t}(n.Component),x=h.a.nav(v()),w=a(12),N=a(25),O=[{id:1,title:"Black coffe",img:"https://claudiagarfias.works/laboratoria/sharedimages/black-coffe.png",price:5,info:"Is normally brewed coffee without any added flavors, cream, or sugar",inCart:!1,count:0,total:0},{id:2,title:"Latte",img:"https://claudiagarfias.works/laboratoria/sharedimages/latte.png",price:16,info:"A latte is espresso and steamed milk with a small layer of milk foam on top. ",inCart:!1,count:0,total:0},{id:3,title:"Sandwich",img:"https://claudiagarfias.works/laboratoria/sharedimages/Ham-cheese-sandwich.png",price:10,info:"Ham and cheese",inCart:!1,count:0,total:0},{id:4,title:"Fresh juice",img:"https://claudiagarfias.works/laboratoria/sharedimages/juice.png",price:7,info:"",inCart:!1,count:0,total:0},{id:5,title:"Hamburger",img:"https://thumbs.gfycat.com/GrotesqueOrnateChanticleer-max-1mb.gif",price:5,info:"",inCart:!1,count:0,total:0},{id:6,title:"X2 Hamburger",img:"https://i.dlpng.com/static/png/4018053_thumb.png",price:15,info:" ",inCart:!1,count:0,total:0},{id:7,title:"Fried Chips",img:"https://www.amsterdamsights.com/eatdrink/pix/frites.png",price:5,info:"",inCart:!1,count:0,total:0},{id:8,title:"Onions Rings",img:"https://www.peppercreekpizza.ca/x/cdn/?https://storage.googleapis.com/wzukusers/user-30498806/images/5bc8733caf1f0wKLmIxR/onion-rings_d400.png",price:5,info:"",inCart:!1,count:0,total:0},{id:9,title:"500 ml Water",img:"https://www.nassaugrocery.com/wp-content/uploads/2017/02/Fiji-Water-500ml.png",price:5,info:"",inCart:!1,count:0,total:0},{id:10,title:"750 ml Water",img:"http://image-cdn.symphonycommerce.com/images/sites/fijiwater/1520094024531_7474445656942580447.400w.png",price:7,info:"",inCart:!1,count:0,total:0},{id:11,title:"500 ml Soda",img:"https://zsuan.cdn.shoprenter.hu/custom/zsuan/image/cache/w400h400wt1/italok/Sz%C3%A9nsavas%20%C3%BCd%C3%ADt%C5%91k/coca-cola%200%2C5.png?lastmod=1520939533.1519397889",price:7,info:"",inCart:!1,count:0,total:0},{id:12,title:"1 l Soda",img:"http://www.pizzeriagonzalez.com/wp-content/uploads/2017/08/Coca-Cola-1L-400x400.png",price:7,info:"",inCart:!1,count:0,total:0}],j={id:1,title:"",img:"",price:10,company:"",info:"",inCart:!1,count:0,total:0},k=r.a.createContext(),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],detailProduct:j,cart:[],modalOpen:!1,modalProduct:j,cartSubTotal:0,cartTax:0,cartTotal:0},a.setProducts=function(){var e=[];O.forEach(function(t){var a=Object(N.a)({},t);e=[].concat(Object(w.a)(e),[a])}),a.setState(function(){return{products:e}},a.checkCartItems)},a.getItem=function(e){return a.state.products.find(function(t){return t.id===e})},a.handleDetail=function(e){var t=a.getItem(e);a.setState(function(){return{detailProduct:t}})},a.addToCart=function(e){var t=Object(w.a)(a.state.products),n=t.indexOf(a.getItem(e)),r=t[n];r.inCart=!0,r.count=1;var c=r.price;r.total=c,a.setState(function(){return{products:Object(w.a)(t),cart:[].concat(Object(w.a)(a.state.cart),[r]),detailProduct:Object(N.a)({},r)}},a.addTotals)},a.openModal=function(e){var t=a.getItem(e);a.setState(function(){return{modalProduct:t,modalOpen:!0}})},a.closeModal=function(){a.setState(function(){return{modalOpen:!1}})},a.increment=function(e){var t=Object(w.a)(a.state.cart),n=t.find(function(t){return t.id===e}),r=t.indexOf(n),c=t[r];c.count=c.count+1,c.total=c.count*c.price,a.setState(function(){return{cart:Object(w.a)(t)}},a.addTotals)},a.decrement=function(e){var t=Object(w.a)(a.state.cart),n=t.find(function(t){return t.id===e}),r=t.indexOf(n),c=t[r];c.count=c.count-1,0===c.count?a.removeItem(e):(c.total=c.count*c.price,a.setState(function(){return{cart:Object(w.a)(t)}},a.addTotals))},a.getTotals=function(){var e=0;a.state.cart.map(function(t){return e+=t.total});var t=parseFloat((.1*e).toFixed(2));return{subTotal:e,tax:t,total:e+t}},a.addTotals=function(){var e=a.getTotals();a.setState(function(){return{cartSubTotal:e.subTotal,cartTax:e.tax,cartTotal:e.total}},function(){})},a.removeItem=function(e){var t=Object(w.a)(a.state.products),n=Object(w.a)(a.state.cart),r=t.indexOf(a.getItem(e)),c=t[r];c.inCart=!1,c.count=0,c.total=0,n=n.filter(function(t){return t.id!==e}),a.setState(function(){return{cart:Object(w.a)(n),products:Object(w.a)(t)}},a.addTotals)},a.clearCart=function(){a.setState(function(){return{cart:[]}},function(){a.setProducts(),a.addTotals()})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setProducts()}},{key:"render",value:function(){return r.a.createElement(k.Provider,{value:Object(N.a)({},this.state,{handleDetail:this.handleDetail,addToCart:this.addToCart,openModal:this.openModal,closeModal:this.closeModal,increment:this.increment,decrement:this.decrement,removeItem:this.removeItem,clearCart:this.clearCart})},this.props.children)}}]),t}(n.Component),C=k.Consumer;function T(){var e=Object(p.a)(["\n  .card {\n    border-color: transparent;\n    transition: all 1s linear;\n  }\n  .card-footer {\n    background: transparent;\n    border-top: transparent;\n    transition: all 1s linear;\n  }\n  &:hover {\n    .card {\n      border: 0.04rem solid rgba(0, 0, 0, 0.2);\n      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);\n    }\n    .card-footer {\n      background: var(--mainBrown);\n    }\n  }\n  .img-container {\n    position: relative;\n    overflow: hidden;\n  }\n  .card-img-top {\n    transition: all 1s linear;\n  }\n  .img-container:hover .card-img-top {\n    transform: scale(1.2);\n  }\n  .cart-btn {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 0.2rem 0.4rem;\n    background: var(--mainOrange);\n    border: none;\n    color: var(--mainWhite);\n    font-size: 1.4rem;\n    border-radius: 0.5rem 0 0 0;\n    transform: translate(100%, 100%);\n    transition: all 1s ease-in-out;\n  }\n  .img-container:hover .cart-btn {\n    transform: translate(0, 0);\n  }\n  .cart-btn:hover {\n    color: var(--mainWhite);\n    cursor: pointer;\n  }\n"]);return T=function(){return e},e}var z=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.product,t=e.id,a=e.title,n=e.img,c=e.price,l=e.inCart;return r.a.createElement(S,{className:"col-9 mx-auto col-md-3 col-lg-3 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement(C,null,function(e){return r.a.createElement("div",{className:"img-container p-5",onClick:function(){return e.handleDetail(t)}},r.a.createElement(f.b,{to:"/details"},r.a.createElement("img",{src:n,alt:"",className:"card-img-top"})),r.a.createElement("button",{className:"cart-btn",disabled:!!l,onClick:function(){e.addToCart(t),e.openModal(t)}},l?r.a.createElement("p",{className:"text-capitalize mb-0",disabled:!0},"in kitchen"):r.a.createElement("i",{className:"fas fa-cart-plus"})))}),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("p",{className:"align-self-center mb-0"},a),r.a.createElement("h5",{className:"text-blue font-italic mb-0"},r.a.createElement("span",{className:"mr-1"},"$"),c))))}}]),t}(n.Component),S=h.a.div(T());function I(e){var t=e.name,a=e.title;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto my-2 text-center text-title"},r.a.createElement("h3",{className:"text-capitalize font-weight-bold"},t," ",r.a.createElement("strong",null,a))))}function B(){var e=Object(p.a)([""]);return B=function(){return e},e}var P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={products:O},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{className:"py-5"},r.a.createElement("div",{className:"container"},r.a.createElement(I,{name:"Our Menu | Burger Queen",title:""}),r.a.createElement("div",{className:"row"},r.a.createElement(C,null,function(e){return e.products.map(function(e){return r.a.createElement(z,{key:e.id,product:e})})})))))}}]),t}(n.Component),W=h.a.section(B());function A(){var e=Object(p.a)(["\n  text-transform: capitalize;\n  font-size: 1.4rem;\n  background: transparent;\n  border: 0.05rem solid var(--lightBlue);\n  border-color: ",";\n  color: var(--lightBlue);\n  color: ",";\n  border-radius: 0.5rem;\n  padding: 0.2rem 0.5rem;\n  outline-color: red;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0.2rem 0.5rem 0.2rem 0;\n  transition: all 0.5s ease-in-out;\n  &:hover {\n    background: var(--lightBlue);\n    background: ",";\n    color: var(--mainBlue);\n  }\n  &:focus {\n    outline: none;\n  }\n"]);return A=function(){return e},e}var M=h.a.button(A(),function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"},function(e){return e.cart?"var(--mainYellow)":"var(--lightBlue)"}),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var t=e.detailProduct,a=t.id,n=t.img,c=t.info,l=t.price,o=t.title,i=t.inCart;return r.a.createElement("div",{className:"container py-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"},r.a.createElement("h1",null,o))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("img",{src:n,className:"img-fluid",alt:""})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},r.a.createElement("h4",{className:"text-blue"},r.a.createElement("strong",null,"price : ",r.a.createElement("span",null,"$"),l)),r.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"ingredients & preparation :"),r.a.createElement("p",{className:"text-muted lead"},c),r.a.createElement("div",null,r.a.createElement(f.b,{to:"/menu"},r.a.createElement(M,null,"back to menu")),r.a.createElement(M,{cart:!0,disabled:!!i,onClick:function(){e.addToCart(a),e.openModal(a)}},i?"in cart":"add to Kitchen")))))})}}]),t}(n.Component);function L(e){return console.log(e),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto text-center text-title text-uppercase pt-5"},r.a.createElement("h1",{className:"display-3"},"404"),r.a.createElement("h1",null,"error"),r.a.createElement("h2",null,"page not found"),r.a.createElement("h3",null,"the requested URL"," ",r.a.createElement("span",{className:"text-danger"},'"',e.location.pathname,'"')," was not found"))))}var $=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid text-center d-none d-lg-block"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"product")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"price")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"quantity")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"remove")),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2"},r.a.createElement("p",{className:"text-uppercase"},"total"))))}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.item,t=e.id,a=e.title,n=(e.img,e.price),c=e.total,l=e.count,o=this.props.value,i=o.increment,s=o.decrement,m=o.removeItem;return r.a.createElement("div",{className:"row my-1 text-capitalize text-center"},r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("span",{className:"d-lg-none"},"product :")," ",a),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("strong",null,r.a.createElement("span",{className:"d-lg-none"},"price :")," $",n)),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 my-2 my-lg-0 "},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",null,r.a.createElement("span",{className:"btn btn-white mx-1",onClick:function(){return s(t)}},"-"),r.a.createElement("span",{className:"btn btn-white mx-1"},l),r.a.createElement("span",{className:"btn btn-white mx-1",onClick:function(){return i(t)}},"+")))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("div",{className:" cart-icon",onClick:function(){return m(t)}},r.a.createElement("i",{className:"fas fa-trash"}))),r.a.createElement("div",{className:"col-10 mx-auto col-lg-2 "},r.a.createElement("strong",null,"total : $",c," ")))}}]),t}(n.Component),Y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.value,t=this.props.value.cart;return r.a.createElement("div",{className:"container-fluid"},t.map(function(t){return r.a.createElement(D,{key:t.id,item:t,value:e})}))}}]),t}(n.Component),q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.value,t=e.cartSubTotal,a=e.cartTax,n=e.cartTotal,c=e.cart,l=e.clearCart,o=(this.props.history,0===c.length);return r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"},r.a.createElement(f.b,{to:"/menu"},r.a.createElement("button",{className:"btn btn-outline-danger text-uppercase mb-2 px-2",type:"button",onClick:function(){l()}},"clear comand")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"}," subtotal :")," ",r.a.createElement("strong",null,"$ ",t," ")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"}," tax :")," ",r.a.createElement("strong",null,"$ ",a," ")),r.a.createElement("h5",null,r.a.createElement("span",{className:"text-title"}," total :")," ",r.a.createElement("strong",null,"$ ",n," "))))))}}]),t}(n.Component);function H(){return r.a.createElement(I,{name:"Order",title:""})}var R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement(C,null,function(t){return t.cart.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(I,{name:"Order",title:""}),r.a.createElement($,null),r.a.createElement(Y,{value:t}),r.a.createElement(q,{value:t,history:e.props.history})):r.a.createElement(H,null)}))}}]),t}(n.Component);function U(){var e=Object(p.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  #modal {\n    background: var(--mainWhite);\n  }\n"]);return U=function(){return e},e}var G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,function(e){var t=e.modalOpen,a=e.closeModal,n=e.modalProduct,c=n.img,l=n.title,o=n.price;return t?r.a.createElement(K,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize",id:"modal"},r.a.createElement("h5",null,"added to order"),r.a.createElement("img",{src:c,className:"img-fluid",alt:""}),r.a.createElement("h5",null,l),r.a.createElement("h5",{className:"text-muted"},"price : $",o),r.a.createElement(f.b,{to:"/menu"},r.a.createElement(M,{onClick:function(){a()}},"Add more")),r.a.createElement(f.b,{to:"/kitchen"},r.a.createElement(M,{cart:!0,onClick:function(){a()}},"Go To Kitchen")))))):null})}}]),t}(n.Component),K=h.a.div(U()),J=a(17),_=function(){return r.a.createElement(J.d,{className:"logIn"},r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement(J.f,null,r.a.createElement(J.c,{md:"4"},r.a.createElement(J.b,{className:"card-image",style:{backgroundImage:"url(https://media.istockphoto.com/photos/bacon-burger-picture-id533436672?k=6&m=533436672&s=612x612&w=0&h=dQ-piy3q5PUohaew9CJiysOS-uFas45UyYnrOekYsxA=)",width:"23rem"}},r.a.createElement("div",{className:"text-white rgba-stylish-strong py-5 px-5 z-depth-4"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",{className:"white-text mb-5 mt-4 font-weight-bold"},r.a.createElement("strong",null,"SIGN"),r.a.createElement("a",{href:"#!",className:"green-text font-weight-bold"},r.a.createElement("strong",null," IN")))),r.a.createElement(J.e,{label:"Your email",group:!0,type:"text",validate:!0}),r.a.createElement(J.e,{label:"Your password",group:!0,type:"password",validate:!0}),r.a.createElement("div",{className:"md-form pb-3"},r.a.createElement("div",{className:"form-check my-4"},r.a.createElement("input",{className:"form-check-input",type:"checkbox",value:"",id:"defaultCheck17"}),r.a.createElement("label",{className:"form-check-label white-text",htmlFor:"defaultCheck17"},"Accept the",r.a.createElement("a",{href:"#!",className:"green-text font-weight-bold"},"Terms and Conditions")))),r.a.createElement(J.f,{className:"d-flex align-items-center mb-4"},r.a.createElement("div",{className:"text-center mb-3 col-md-12"},r.a.createElement(J.a,{color:"success",rounded:!0,type:"button",className:"btn-block z-depth-1"},"Sign in"))),r.a.createElement(J.c,{md:"12"},r.a.createElement("p",{className:"font-small white-text d-flex justify-content-end"},"Have an account?",r.a.createElement("a",{href:"#!",className:"green-text ml-1 font-weight-bold"},"Log in")))))))))},Q=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:_}),r.a.createElement(d.a,{path:"/menu",component:P}),r.a.createElement(d.a,{path:"/details",component:F}),r.a.createElement(d.a,{path:"/kitchen",component:R}),r.a.createElement(d.a,{component:L})),r.a.createElement(G,null))}}]),t}(n.Component),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(y,null,r.a.createElement(f.a,null,r.a.createElement(Q,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/GDL002-burger-queen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/GDL002-burger-queen","/service-worker.js");X?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):V(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):V(t,e)})}}()}},[[45,1,2]]]);
//# sourceMappingURL=main.b7d92c2d.chunk.js.map