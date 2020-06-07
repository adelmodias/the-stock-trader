(function(t){function e(e){for(var r,s,i=e[0],c=e[1],u=e[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("1356"),o=n.n(r);o.a},1356:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("bb71");n("da64");r["a"].use(o["a"],{iconfont:"md"});var a=n("bc3a"),s=n.n(a);r["a"].use({install:function(t){t.prototype.$http=s.a.create({baseURL:"https://stock-trader-90c35.firebaseio.com/"})}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Header"),n("v-content",[n("v-container",[n("transition",{attrs:{name:"slide",mode:"out-in"}},[n("router-view")],1)],1)],1)],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase mr-4"},[n("span",[t._v("Stock")]),n("span",{staticClass:"font-weight-light"},[t._v("Trader")])]),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("v-btn",{attrs:{flat:"",to:"/"}},[t._v("Início")]),n("v-btn",{attrs:{flat:"",to:"/portfolio"}},[t._v("Portfólio")]),n("v-btn",{attrs:{flat:"",to:"/stocks"}},[t._v("Ações")])],1),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{flat:""},on:{click:t.endDay}},[t._v("Finalizar Dia")]),n("v-menu",{attrs:{"offset-y":""}},[n("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Salvar & Carregar")]),n("v-list",[n("v-list-tile",{on:{click:t.saveData}},[n("v-list-tile-title",[t._v("Salvar Dados")])],1),n("v-list-tile",{on:{click:t.loadDataLocal}},[n("v-list-tile-title",[t._v("Carregar Dados")])],1)],1)],1),n("v-layout",{attrs:{"align-center":""}},[n("span",{staticClass:"text-uppercase gray--text text-darken-2"},[t._v("Saldo: "+t._s(t._f("currency")(t.funds)))])])],1)],1)},l=[],f=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),d=n("2f62");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(n,!0).forEach((function(e){Object(f["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={computed:{funds:function(){return this.$store.getters.funds}},methods:v({},Object(d["b"])(["randomizeStocks","loadData"]),{endDay:function(){this.randomizeStocks()},saveData:function(){var t=this.$store.getters,e=t.funds,n=t.stockPortfolio,r=t.stocks;this.$http.put("data.json",{funds:e,stockPortfolio:n,stocks:r})},loadDataLocal:function(){this.loadData()}}),created:function(){this.loadData()}},y=b,h=n("2877"),k=n("6544"),m=n.n(k),g=n("8336"),O=n("a722"),_=n("8860"),j=n("ba95"),w=n("5d23"),P=n("e449"),S=n("9910"),x=n("71d9"),C=n("2a7f"),q=Object(h["a"])(y,u,l,!1,null,null,null),V=q.exports;m()(q,{VBtn:g["a"],VLayout:O["a"],VList:_["a"],VListTile:j["a"],VListTileTitle:w["a"],VMenu:P["a"],VSpacer:S["a"],VToolbar:x["a"],VToolbarItems:C["a"],VToolbarTitle:C["b"]});var D={components:{Header:V},created:function(){this.$store.dispatch("initStocks")}},$=D,T=(n("034f"),n("7496")),E=n("a523"),I=n("549c"),F=Object(h["a"])($,i,c,!1,null,null,null),L=F.exports;m()(F,{VApp:T["a"],VContainer:E["a"],VContent:I["a"]});var M=n("8c4f"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"display-3 font-weight-light mb-4"},[t._v("Negocie e consulte suas ações")]),n("v-sheet",{staticClass:"pa-2",attrs:{elevation:6,color:"primary"}},[n("v-icon",{staticClass:"white--text mr-3"},[t._v("info")]),n("span",{staticClass:"headline white--text font-weight-light"},[t._v("Você pode salvar e carregar os dados")])],1),n("v-sheet",{staticClass:"pa-2 mt-3",attrs:{elevation:6,color:"success darken-1"}},[n("v-icon",{staticClass:"white--text mr-3"},[t._v("info")]),n("span",{staticClass:"headline white--text font-weight-light"},[t._v("Clique em 'Finalizar dia' para iniciar um novo dia!")])],1),n("v-divider",{staticClass:"my-4"}),n("p",{staticClass:"display-1"},[t._v("\n    Seu saldo:\n    "),n("strong",[t._v(t._s(t._f("currency")(t.funds)))])])],1)},Q=[],A={computed:{funds:function(){return this.$store.getters.funds}}},N=A,B=n("ce7e"),H=n("132d"),J=n("8dd9"),R=Object(h["a"])(N,z,Q,!1,null,null,null),G=R.exports;m()(R,{VDivider:B["a"],VIcon:H["a"],VSheet:J["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.stocks,(function(t){return n("Stock",{key:t.id,attrs:{stock:t}})})),1)},W=[],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"pr-3 pb-3",attrs:{xs12:"",md6:"",lg4:""}},[n("v-card",{staticClass:"blue darken-3 white--text"},[n("v-card-title",{staticClass:"headline"},[n("strong",{staticClass:"mr-1"},[t._v(t._s(t.stock.name)+" ")]),n("small",[t._v(" - Preço: "+t._s(t._f("currency")(t.stock.price))+" | Quantidade: "+t._s(t.stock.quantity))])])],1),n("v-card",[n("v-container",{attrs:{"fill-height":""}},[n("v-text-field",{attrs:{label:"Quantidade",type:"number",error:t.insufficientQuantity||!Number.isInteger(t.quantity)},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}}),n("v-btn",{staticClass:"blue darken-3 white--text",attrs:{disabled:t.quantity<=0||!Number.isInteger(t.quantity)||t.insufficientQuantity},on:{click:t.sellStock}},[t._v(t._s(t.insufficientQuantity?"Insuficiente":"Vender"))])],1)],1)],1)},X=[];function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(n,!0).forEach((function(e){Object(f["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var tt={props:["stock"],data:function(){return{quantity:0}},computed:{insufficientQuantity:function(){return this.quantity>this.stock.quantity}},methods:Z({},Object(d["b"])({sellStockAction:"sellStock"}),{sellStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.sellStockAction(t),this.quantity=0}})},et=tt,nt=n("b0af"),rt=n("12b2"),ot=n("0e8f"),at=n("2677"),st=Object(h["a"])(et,K,X,!1,null,null,null),it=st.exports;function ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ut(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?ct(n,!0).forEach((function(e){Object(f["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ct(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}m()(st,{VBtn:g["a"],VCard:nt["a"],VCardTitle:rt["a"],VContainer:E["a"],VFlex:ot["a"],VTextField:at["a"]});var lt={components:{Stock:it},computed:ut({},Object(d["c"])({stocks:"stockPortfolio"}))},ft=lt,dt=Object(h["a"])(ft,U,W,!1,null,null,null),pt=dt.exports;m()(dt,{VLayout:O["a"]});var vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.stocks,(function(t){return n("Stock",{key:t.id,attrs:{stock:t}})})),1)},bt=[],yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"pr-3 pb-3",attrs:{xs12:"",md6:"",lg4:""}},[n("v-card",{staticClass:"green darken-3 white--text"},[n("v-card-title",{staticClass:"headline"},[n("strong",{staticClass:"mr-1"},[t._v(t._s(t.stock.name))]),n("small",[t._v(" - Preço: "+t._s(t._f("currency")(t.stock.price)))])])],1),n("v-card",[n("v-container",{attrs:{"fill-height":""}},[n("v-text-field",{attrs:{label:"Quantidade",type:"number",error:t.insufficientFunds||!Number.isInteger(t.quantity)},model:{value:t.quantity,callback:function(e){t.quantity=t._n(e)},expression:"quantity"}}),n("v-btn",{staticClass:"green darken-3 white--text",attrs:{disabled:t.quantity<=0||!Number.isInteger(t.quantity)||t.insufficientFunds},on:{click:t.buyStock}},[t._v(t._s(t.insufficientFunds?"Insuficiente":"Comprar"))])],1)],1)],1)},ht=[],kt={props:["stock"],data:function(){return{quantity:0}},computed:{funds:function(){return this.$store.getters.funds},insufficientFunds:function(){return this.quantity*this.stock.price>this.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockPrice:this.stock.price,quantity:this.quantity};this.$store.dispatch("buyStock",t),this.quantity=0}}},mt=kt,gt=Object(h["a"])(mt,yt,ht,!1,null,null,null),Ot=gt.exports;m()(gt,{VBtn:g["a"],VCard:nt["a"],VCardTitle:rt["a"],VContainer:E["a"],VFlex:ot["a"],VTextField:at["a"]});var _t={components:{Stock:Ot},computed:{stocks:function(){return this.$store.getters.stocks}}},jt=_t,wt=Object(h["a"])(jt,vt,bt,!1,null,null,null),Pt=wt.exports;m()(wt,{VLayout:O["a"]}),r["a"].use(M["a"]);var St=new M["a"]({routes:[{path:"/",component:G},{path:"/portfolio",component:pt},{path:"/stocks",component:Pt}]}),xt={loadData:function(t){var e=t.commit;r["a"].prototype.$http.get("data.json").then((function(t){var n=t.data;n&&(e("setStocks",n.stocks),e("setPortfolio",{funds:n.funds,stockPortfolio:n.stockPortfolio}))}))}},Ct=[{id:1,name:"BMW",price:437},{id:2,name:"Google",price:546},{id:3,name:"Apple",price:785},{id:4,name:"Twitter",price:573}],qt={state:{stocks:[]},mutations:{setStocks:function(t,e){t.stocks=e},randomizeStocks:function(t){t.stocks.forEach((function(t){t.price=Math.round(t.price*(1+Math.random()-.45))}))}},actions:{buyStock:function(t,e){var n=t.commit;n("buyStock",e)},initStocks:function(t){var e=t.commit;e("setStocks",Ct)},randomizeStocks:function(t){var e=t.commit;e("randomizeStocks")}},getters:{stocks:function(t){return t.stocks}}},Vt=(n("7f7f"),n("7514"),{state:{funds:1e4,stocks:[]},mutations:{buyStock:function(t,e){var n=e.stockId,r=e.quantity,o=e.stockPrice,a=t.stocks.find((function(t){return t.id==n}));a?a.quantity+=r:t.stocks.push({id:n,quantity:r}),t.funds-=o*r},sellStock:function(t,e){var n=e.stockId,r=e.quantity,o=e.stockPrice,a=t.stocks.find((function(t){return t.id==n}));a.quantity>r?a.quantity-=r:t.stocks.splice(t.stocks.indexOf(a),1),t.funds+=o*r},setPortfolio:function(t,e){t.funds=e.funds,t.stocks=e.stockPortfolio?e.stockPortfolio:[]}},actions:{sellStock:function(t,e){var n=t.commit;n("sellStock",e)}},getters:{stockPortfolio:function(t,e){return t.stocks.map((function(t){var n=e.stocks.find((function(e){return e.id==t.id}));return{id:t.id,quantity:t.quantity,name:n.name,price:n.price}}))},funds:function(t){return t.funds}}});r["a"].use(d["a"]);var Dt=new d["a"].Store({actions:xt,modules:{stocks:qt,portfolio:Vt}});r["a"].config.productionTip=!1,r["a"].filter("currency",(function(t){return"R$ "+t.toLocaleString()})),new r["a"]({router:St,store:Dt,render:function(t){return t(L)}}).$mount("#app")}});
//# sourceMappingURL=app.77a12078.js.map