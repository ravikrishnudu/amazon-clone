(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{11:function(e,t,a){e.exports={header:"Header_header__2fIN1",headerLogo:"Header_headerLogo__2rXbA",headerSearch:"Header_headerSearch__2VmrN",headerSearchInput:"Header_headerSearchInput__2idUM",headerSearchIcon:"Header_headerSearchIcon__1UGPp",headerNav:"Header_headerNav__3O4_n",headerOption:"Header_headerOption__GaUDE",headerOptionLineOne:"Header_headerOptionLineOne__1OoEm",headerOptionLineTwo:"Header_headerOptionLineTwo__BwOUW",headerOptionCart:"Header_headerOptionCart__P5s-R",headerCartCount:"Header_headerCartCount__1VxZ-"}},22:function(e,t,a){e.exports={home:"Home_home__30XlI",homeImage:"Home_homeImage__3vz4B",homeRow:"Home_homeRow__2M4gL"}},23:function(e,t,a){e.exports={checkoutProduct:"CheckoutProduct_checkoutProduct__CamGR",image:"CheckoutProduct_image__2eOaj",info:"CheckoutProduct_info__1ACYf",title:"CheckoutProduct_title__2xzU5",rating:"CheckoutProduct_rating__26R7w"}},25:function(e,t,a){e.exports={checkout:"Checkout_checkout__tp70N",checkoutAd:"Checkout_checkoutAd__3_M0F",checkoutTitle:"Checkout_checkoutTitle__o9j4q"}},26:function(e,t,a){e.exports={login:"Login_login__3e7jP",logo:"Login_logo__11GzW",container:"Login_container__1Ju3Y",signInButton:"Login_signInButton__12pjJ",registerButton:"Login_registerButton__1yrB-"}},28:function(e,t,a){e.exports={product:"Product_product__DLfb6",productInfo:"Product_productInfo__1escQ",productPrice:"Product_productPrice__jt71F",productRating:"Product_productRating__2Qj1q"}},36:function(e,t,a){e.exports={subtotal:"Subtotal_subtotal__1ENGQ",subtotalGift:"Subtotal_subtotalGift__2Am_K"}},53:function(e,t,a){},54:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a.n(c),i=a(30),s=a.n(i),r=(a(53),a(44)),o=a(13),d=(a(54),a(11)),l=a.n(d),j=a(45),u=a.n(j),h=a(46),m=a.n(h),b=a(20),O=a(2),p=Object(c.createContext)(),_=function(e){var t=e.reducer,a=e.initialState,n=e.children;return Object(O.jsx)(p.Provider,{value:Object(c.useReducer)(t,a),children:n})},g=function(){return Object(c.useContext)(p)},x=a(37),f=(x.a.initializeApp({apiKey:"AIzaSyCa7WsypRhuWh3rLMgrkiW-xrNmQQliSkI",authDomain:"clone-ddbf5.firebaseapp.com",projectId:"clone-ddbf5",storageBucket:"clone-ddbf5.appspot.com",messagingSenderId:"166012993797",appId:"1:166012993797:web:ae41d80bb7e5780cc7776c",measurementId:"G-N6V94M2D8H"}).firestore(),x.a.auth());var v=function(){var e=g(),t=Object(o.a)(e,1)[0],a=t.basket,c=t.user;return Object(O.jsxs)("div",{className:l.a.header,children:[Object(O.jsx)(b.b,{to:"/",children:Object(O.jsx)("img",{className:l.a.headerLogo,src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"main-logo"})}),Object(O.jsxs)("div",{className:l.a.headerSearch,children:[Object(O.jsx)("input",{className:l.a.headerSearchInput,type:"text"}),Object(O.jsx)(u.a,{className:l.a.headerSearchIcon})]}),Object(O.jsxs)("div",{className:l.a.headerNav,children:[Object(O.jsx)(b.b,{to:!c&&"/login",children:Object(O.jsxs)("div",{onClick:function(){c&&f.signOut()},className:l.a.headerOption,children:[Object(O.jsx)("span",{className:l.a.headerOptionLineOne,children:"Hello Guest"}),Object(O.jsx)("span",{className:l.a.headerOptionLineTwo,children:c?"sign Out":"sign In"})]})}),Object(O.jsxs)("div",{className:l.a.headerOption,children:[Object(O.jsx)("span",{className:l.a.headerOptionLineOne,children:"Returns"}),Object(O.jsx)("span",{className:l.a.headerOptionLineTwo,children:"& Orders"})]}),Object(O.jsxs)("div",{className:l.a.headerOption,children:[Object(O.jsx)("span",{className:l.a.headerOptionLineOne,children:"Your"}),Object(O.jsx)("span",{className:l.a.headerOptionLineTwo,children:"Prime"})]}),Object(O.jsx)(b.b,{to:"/checkout",children:Object(O.jsxs)("div",{className:l.a.headerOptionCart,children:[Object(O.jsx)(m.a,{}),Object(O.jsx)("span",{className:l.a.headerCartCount,children:null===a||void 0===a?void 0:a.length})]})})]})]})},N=a(22),k=a.n(N),C=a(28),S=a.n(C);var A=function(e){var t=e.id,a=e.title,c=e.image,n=e.price,i=e.rating,s=g(),r=Object(o.a)(s,2),d=(r[0].basket,r[1]);return Object(O.jsxs)("div",{className:S.a.product,children:[Object(O.jsxs)("div",{className:S.a.productInfo,children:[Object(O.jsx)("p",{children:a}),Object(O.jsxs)("p",{className:S.a.productPrice,children:[Object(O.jsx)("small",{children:"$"}),Object(O.jsxs)("strong",{children:[n," "]})]}),Object(O.jsx)("div",{className:S.a.productRating,children:Array(i).fill().map((function(e,t){return Object(O.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(O.jsx)("img",{src:c,alt:""}),Object(O.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:a,image:c,price:n,rating:i}})},children:"Add to Basket"})]})};var L=function(){return Object(O.jsx)("div",{className:k.a.home,children:Object(O.jsxs)("div",{className:k.a.homeContainer,children:[Object(O.jsx)("img",{className:k.a.homeImage,src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(O.jsxs)("div",{className:k.a.homeRow,children:[Object(O.jsx)(A,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(O.jsx)(A,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(O.jsxs)("div",{className:k.a.homeRow,children:[Object(O.jsx)(A,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(O.jsx)(A,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(O.jsx)(A,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(O.jsx)("div",{className:k.a.homeRow,children:Object(O.jsx)(A,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},I=a(25),P=a.n(I),E=a(36),w=a.n(E),B=a(47),y=a.n(B),R=a(38),T=a(24),G=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},H=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(T.a)(Object(T.a)({},e),{},{basket:[].concat(Object(R.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),c=Object(R.a)(e.basket);return a>=0?c.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(T.a)(Object(T.a)({},e),{},{basket:c});case"SET_USER":return Object(T.a)(Object(T.a)({},e),{},{user:t.user});default:return e}};var z=function(){var e=g(),t=Object(o.a)(e,2),a=t[0].basket;return t[1],Object(O.jsxs)("div",{className:w.a.subtotal,children:[Object(O.jsx)(y.a,{renderText:function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:["Subtotal (",a.length," items): ",Object(O.jsx)("strong",{children:e})]}),Object(O.jsxs)("small",{className:w.a.subtotalGift,children:[Object(O.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:G(a),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(O.jsx)("button",{children:"Proceed to checkout"})]})},D=a(23),M=a.n(D);var U=function(e){var t=e.id,a=e.image,c=e.title,n=e.price,i=e.rating,s=g(),r=Object(o.a)(s,2),d=(r[0].basket,r[1]);return Object(O.jsxs)("div",{className:M.a.checkoutProduct,children:[Object(O.jsx)("img",{className:M.a.image,src:a,alt:""}),Object(O.jsxs)("div",{className:M.a.info,children:[Object(O.jsx)("p",{className:M.a.title,children:c}),Object(O.jsxs)("p",{className:M.a.price,children:[Object(O.jsx)("small",{children:"$"}),Object(O.jsx)("strong",{children:n})]}),Object(O.jsx)("div",{className:M.a.rating,children:Array(i).fill().map((function(e,t){return Object(O.jsx)("p",{children:"\ud83c\udf1f"})}))}),Object(O.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from cart"})]})]})};var F=function(){var e=g(),t=Object(o.a)(e,1)[0],a=t.basket,c=t.user;return Object(O.jsxs)("div",{className:P.a.checkout,children:[Object(O.jsxs)("div",{className:P.a.checkoutLeft,children:[Object(O.jsx)("img",{className:P.a.checkoutAd,src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["Hello, ",null===c||void 0===c?void 0:c.email," "]}),Object(O.jsx)("h2",{className:P.a.checkoutTitle,children:"Your shopping Basket"}),a.map((function(e){return Object(O.jsx)(U,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(O.jsx)("div",{className:P.a.checkoutRight,children:Object(O.jsx)(z,{})})]})},W=a(26),K=a.n(W),X=a(9);var V=function(){var e=Object(X.f)(),t=Object(c.useState)(""),a=Object(o.a)(t,2),n=a[0],i=a[1],s=Object(c.useState)(""),r=Object(o.a)(s,2),d=r[0],l=r[1];return Object(O.jsxs)("div",{className:K.a.login,children:[Object(O.jsx)(b.b,{to:"/",children:Object(O.jsx)("img",{className:K.a.logo,src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(O.jsxs)("div",{className:K.a.container,children:[Object(O.jsx)("h1",{children:"Sign-in"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("h5",{children:"E-mail"}),Object(O.jsx)("input",{type:"text",value:n,onChange:function(e){return i(e.target.value)}}),Object(O.jsx)("h5",{children:"Password"}),Object(O.jsx)("input",{type:"password",value:d,onChange:function(e){return l(e.target.value)}}),Object(O.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),f.signInWithEmailAndPassword(n,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:K.a.signInButton,children:"Sign In"})]}),Object(O.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(O.jsx)("button",{onClick:function(t){t.preventDefault(),f.createUserWithEmailAndPassword(n,d).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:K.a.registerButton,children:"Create your Amazon Account"})]})]})};var Q=function(){var e=g(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var a=t[1];return Object(c.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("THE USER is>>> ",e),a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(O.jsx)(b.a,{children:Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(X.c,{children:[Object(O.jsx)(X.a,{path:"/login",children:Object(O.jsx)(V,{})}),Object(O.jsxs)(X.a,{path:"/checkout",children:[Object(O.jsx)(v,{}),Object(O.jsx)(F,{})]}),Object(O.jsxs)(X.a,{path:"/",children:[Object(O.jsx)(v,{}),Object(O.jsx)(L,{})]})]})})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,79)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(_,{initialState:{basket:[],user:null},reducer:H,children:Object(O.jsx)(Q,{})})}),document.getElementById("root")),q()}},[[67,1,2]]]);
//# sourceMappingURL=main.f1ab5951.chunk.js.map