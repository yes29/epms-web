/*! 版权所有，翻版必究 */
webpackJsonp([19],{"+g8z":function(t,n){},0:function(t,n,e){e("briU"),t.exports=e("NHnr")},"1v+/":function(t,n){},"8Fkr":function(t,n){},NHnr:function(t,n,e){"use strict";function a(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function a(i,o){try{var c=n[i](o),r=c.value}catch(t){return void e(t)}if(!c.done)return Promise.resolve(r).then(function(t){a("next",t)},function(t){a("throw",t)});t(r)}return a("next")})}}function i(t){e("o+HJ")}Object.defineProperty(n,"__esModule",{value:!0});var o=(e("8Fkr"),e("DbeI")),c=e.n(o),r=e("83B7"),s={name:"app"},l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},u=[],p={render:l,staticRenderFns:u},d=p,h=e("C7Lr"),f=h(s,d,!1,null,null,null),v=f.exports,m={cHeight:window.document.body.clientHeight,cWidth:window.document.body.clientWidth,setLocal:function(t,n){return window.localStorage&&window.localStorage.setItem(t,n)},getLocal:function(t){return window.localStorage&&window.localStorage.getItem(t)},setObjLocal:function(t,n){window.localStorage[t]=JSON.stringify(n)},getObjLocal:function(t){return JSON.parse(window.localStorage[t]||"{}")},removeLocal:function(t){return window.localStorage.removeItem(t)}},b=e("2sCs"),w=e.n(b),y={server:"/api/v1/zh/"},g=y,_={post:function(t,n,e){t=g.server+t;var a="application/json; charset=utf-8";e&&1===e.contentType&&(a="multipart/form-data");var i=m.getObjLocal("hd_userInfo"),o={"Content-type":a};i.token&&(o.Authorization="Bearer "+i.token);var c={method:"post",url:t,headers:o,data:n};return new Promise(function(t,e){w()(c,n).then(function(n){t(n)}).catch(function(t){e(t)})})}},k=e("R4Sj"),C={state:{dialogVisible:!1},mutations:{},actions:{}},S=C;r.default.use(k.a);var x=new k.a.Store({modules:{app:S}}),L=x,O=e("KGCO"),D=[{id:1,icon:"icon-nav01_work",name:"工作台",node:[{id:11,name:"工作看板",node:[{id:111,path:"takeCharge",name:"负责项目看板"},{id:112,path:"participation",name:"参与项目看板"}]},{id:12,name:"流转事项",node:[{id:121,path:"followUp",name:"待处理流转"},{id:122,path:"processed",name:"已处理流转"}]},{id:13,path:"information",name:"消息通告"}]},{id:2,icon:"icon-nav01_department-work",name:"部门工作",node:[{id:21,name:"运营产品",node:[{id:211,path:"group",name:"运营系统产品组"},{id:213,path:"fileEnd",name:"归档事项"},{id:214,path:"fileSys",name:"部门文件库"}]}]},{id:3,icon:"icon-nav01_administrator",name:"管理员",node:[{id:31,icon:"",name:"运营产品",node:[{id:311,path:"frame",name:"架构设置"},{id:312,path:"crew",name:"人员设置"}]},{id:32,icon:"",name:"产品部设置",node:[{id:321,path:"phase",name:"阶段设置"},{id:322,path:"label",name:"标签设置"},{id:323,path:"member",name:"成员设置"},{id:324,path:"packet",name:"分组设置"}]}]}],N=D,E={name:"tdNav",data:function(){return{active:"",navTitle:"部门工作",chdData:Array,navData:Array}},mounted:function(){this.navData=N,this.setStatus()},methods:{setStatus:function(){var t=this;return a(regeneratorRuntime.mark(function n(){var e,a,i,o,c,r,s,l,u,p,d,h,f,v,m,b;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.util.getLocal("navActive"),e||(e="takeCharge"),a=t.util.getObjLocal("navChdData"),t.chdData=N[0].node,t.navTitle=N[0].name,!a){n.next=54;break}i=a.node,o=!0,c=!1,r=void 0,n.prev=10,s=i[Symbol.iterator]();case 12:if(o=(l=s.next()).done){n.next=38;break}if(u=l.value,!(p=u.node)){n.next=35;break}for(d=!0,h=!1,f=void 0,n.prev=19,v=p[Symbol.iterator]();!(d=(m=v.next()).done);d=!0)b=m.value,e===b.path&&(u.isOpen=!0);n.next=27;break;case 23:n.prev=23,n.t0=n.catch(19),h=!0,f=n.t0;case 27:n.prev=27,n.prev=28,!d&&v.return&&v.return();case 30:if(n.prev=30,!h){n.next=33;break}throw f;case 33:return n.finish(30);case 34:return n.finish(27);case 35:o=!0,n.next=12;break;case 38:n.next=44;break;case 40:n.prev=40,n.t1=n.catch(10),c=!0,r=n.t1;case 44:n.prev=44,n.prev=45,!o&&s.return&&s.return();case 47:if(n.prev=47,!c){n.next=50;break}throw r;case 50:return n.finish(47);case 51:return n.finish(44);case 52:t.chdData=i,t.navTitle=a.name;case 54:t.active=e;case 55:case"end":return n.stop()}},n,t,[[10,40,44,52],[19,23,27,35],[28,,30,34],[45,,47,51]])}))()},cliOpen:function(t,n){if(!n.node)return void this.cliSelect(n.path);var e=[],a=!0,i=!1,o=void 0;try{for(var c,r=t[Symbol.iterator]();!(a=(c=r.next()).done);a=!0){var s=c.value;if(s.id===n.id){var l=!0;n.isOpen&&(l=!1),s.isOpen=l}else s.isOpen=!1;e.push(s)}}catch(t){i=!0,o=t}finally{try{!a&&r.return&&r.return()}finally{if(i)throw o}}this.chdData=e},cliNav:function(t){this.util.setObjLocal("navChdData",t),this.cliSelect(t.node[0].node[0].path),this.setStatus()},cliSelect:function(t){this.active=t,this.util.setLocal("navActive",t),this.$router.push({name:t})}}},j=E,A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"nav"},[e("ul",{staticClass:"nav-left"},[e("li",{staticClass:"bg-main"},[e("div",{staticClass:" logo"},[e("div",{staticClass:"header"}),t._v(" "),e("el-row",{staticClass:"l-row"},[e("div",{staticClass:"left"}),t._v(" "),e("div",{staticClass:"right"})])],1)]),t._v(" "),t._l(t.navData,function(n){return e("li",{class:t.navTitle===n.name?"is-active":"",on:{click:function(e){return t.cliNav(n)}}},[e("div",{staticClass:"icon",class:n.icon}),t._v(" "),e("div",{staticClass:"char"},[t._v(t._s(n.name))])])})],2),t._v(" "),e("div",{staticClass:"nav-right br"},[e("h3",[t._v(t._s(t.navTitle))]),t._v(" "),e("ul",{staticClass:"menu",attrs:{"el-scroll-bar":""}},t._l(t.chdData,function(n){return e("li",{key:n.id},[e("div",{staticClass:"nav-title",on:{click:function(e){return e.stopPropagation(),t.cliOpen(t.chdData,n)}}},[e("h5",[t._v(t._s(n.name))]),t._v(" "),n.node?e("i",{staticClass:"icon-arrow icon-nav02_unfold",class:n.isOpen?"icon-arrow-up":""}):t._e()]),t._v(" "),e("el-collapse-transition",[n.node&&n.isOpen?e("ul",{staticClass:"sub-menu"},t._l(n.node,function(n){return e("li",{key:n.id,staticClass:"item",class:t.active===n.path?"is-active":"",on:{click:function(e){return e.stopPropagation(),t.cliSelect(n.path)}}},[e("span",{staticClass:"ml25 icon-nav02_number left"}),t._v(" "),e("span",{staticClass:"left ml5"},[t._v(t._s(n.name))])])}),0):t._e()])],1)}),0)])])},H=[],J={render:A,staticRenderFns:H},T=J,G=e("C7Lr"),I=i,P=G(j,T,!1,I,"data-v-e4dab6b4",null),R=P.exports,F={components:{TdNav:R},data:function(){return{}},mounted:function(){}},W=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-h-100"},[e("td-nav"),t._v(" "),e("div",{staticClass:"nav-content"},[e("keep-alive",[e("router-view")],1)],1)],1)},z=[],B={render:W,staticRenderFns:z},Q=B,$=e("C7Lr"),U=$(F,Q,!1,null,null,null),V=U.exports,K=[{path:"/take-charge",name:"takeCharge",component:function(t){e.e(1).then(function(){var n=[e("tE7G")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/participation",name:"participation",component:function(t){e.e(0).then(function(){var n=[e("3GoD")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/follow-up",name:"followUp",component:function(t){e.e(14).then(function(){var n=[e("dG0P")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/processed",name:"processed",component:function(t){e.e(9).then(function(){var n=[e("IG5G")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/information",name:"information",component:function(t){e.e(13).then(function(){var n=[e("mNPd")];t.apply(null,n)}.bind(this)).catch(e.oe)}}],M=K,Y=[{path:"/group",name:"group",component:function(t){e.e(17).then(function(){var n=[e("QsGY")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/file-end",name:"fileEnd",component:function(t){e.e(5).then(function(){var n=[e("BJwI")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/file-sys",name:"fileSys",component:function(t){e.e(4).then(function(){var n=[e("bJcJ")];t.apply(null,n)}.bind(this)).catch(e.oe)}}],q=Y,X=[{path:"/frame",name:"frame",component:function(t){e.e(6).then(function(){var n=[e("BxtL")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/crew",name:"crew",component:function(t){e.e(15).then(function(){var n=[e("Gs7D")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/phase",name:"phase",component:function(t){e.e(10).then(function(){var n=[e("uIkv")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/label",name:"label",component:function(t){e.e(11).then(function(){var n=[e("Vjma")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/member",name:"member",component:function(t){e.e(7).then(function(){var n=[e("TWie")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/packet",name:"packet",component:function(t){e.e(16).then(function(){var n=[e("xW7L")];t.apply(null,n)}.bind(this)).catch(e.oe)}}],Z=X;r.default.use(O.a);var tt=[{path:"/401",name:"401",component:function(t){e.e(3).then(function(){var n=[e("eRLo")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/404",name:"404",component:function(t){e.e(2).then(function(){var n=[e("AejC")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/",name:"login",component:function(t){e.e(8).then(function(){var n=[e("SW4b")];t.apply(null,n)}.bind(this)).catch(e.oe)}}],nt={path:"/tb",name:"td",component:V,children:[{path:"/dashboard",name:"dashboard",component:function(t){e.e(12).then(function(){var n=[e("ARoL")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]};[M,q,Z].forEach(function(t){t.forEach(function(t){nt.children.push(t)})}),tt.push(nt);var et={mode:"history",routes:tt},at=new O.a(et),it=(e("Qbok"),e("+g8z"),e("1v+/"),e("E4C3")),ot=e.n(it);e("ve9D");at.beforeEach(function(t,n,e){ot.a.start(),0===t.matched.length?e({path:"/404"}):e()}),at.afterEach(function(){ot.a.done()}),r.default.directive("contentHeight",{bind:function(t,n){var e=window.document.body.clientHeight,a=e-120-128-60;n.value>0&&(a-=n.value),t.style.minHeight=a+"px"}});var ct=e("cLQA"),rt=e.n(ct),st={success:function(t){return{success:!0,data:t}},error:function(t){return{error:t,success:!1,data:void 0}}},lt=[{userName:"admin",pwd:"admin",type:1,introduction:"超级管理员",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",name:"admin"},{userName:"yeSong",pwd:"yeSong",type:2,introduction:"普通用户",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",name:"Normal Editor"}],ut={login:function(t){var n=JSON.parse(t.body),e=!0,a=!1,i=void 0;try{for(var o,c=lt[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var r=o.value;if(r.userName===n.userName&&r.pwd===n.pwd)return st.success(r)}}catch(t){a=!0,i=t}finally{try{!e&&c.return&&c.return()}finally{if(a)throw i}}return st.error("用户名或者密码错误！")},logout:function(){return st.success()}};rt.a.mock(/api\/login/,"post",ut.login),rt.a.mock(/logout/,"post",ut.logout),r.default.config.productionTip=!1,r.default.use(c.a),new r.default({el:"#app",router:at,store:L,template:"<App/>",components:{App:v}}),r.default.prototype.set=r.default.set,r.default.prototype.util=m,r.default.prototype.post=_.post},Qbok:function(t,n){},"o+HJ":function(t,n){},ve9D:function(t,n){}},[0]);
//# sourceMappingURL=app.ad2927c39dcfc8fb2a9e.js.map