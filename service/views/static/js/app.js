webpackJsonp([2],[function(t,e){t.exports=vendor_library},,,,,,,,,,,,function(t,e,n){t.exports=n(0)(123)},function(t,e,n){"use strict";function o(t){n(49)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(34),u=n.n(s),i=n(52),a=n(3),r=o,c=a(u.a,i.a,r,"data-v-060bb7b2",null);e.default=c.exports},function(t,e,n){"use strict";function o(t){n(51)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(36),u=n.n(s),i=n(54),a=n(3),r=o,c=a(u.a,i.a,r,"data-v-4dcf4a72",null);e.default=c.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="",s="",u="";o="//hq-jdt-dev.zhongan.com",s="/jdt-web/wx/configdata.do",u="//offline-news-api.herokuapp.com/stories";e.ILOGIN=o+s,e.ITEST=o+u},,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(35),s=n.n(o),u=n(3),i=u(s.a,null,null,null,null);e.default=i.exports},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(21),u=o(s),i=n(5),a=o(i),r={baseUi:[{name:"hello",path:n(13)},{name:"world",path:n(14)},{name:"test",path:n(28)},{name:"test2",path:"components/test2",src:!0}]};(0,u.default)(r).map(function(t,e,o){r[t].map(function(t,e,o){t.src?a.default.component(t.name,function(e){n.e(0).then(function(o){var s=n(95)("./"+t.path+"/index.vue");e(s)}.bind(null,n)).catch(n.oe)}):a.default.component(t.name,t.path.default)})}),e.default=r},function(t,e,n){"use strict";window.onerror=function(t,e,n,o,s){}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(64),u=o(s),i=n(21),a=o(i);e.default=function(t){t.axios.interceptors.request.use(function(t){return t},function(t){return u.default.reject(t)}),t.axios.interceptors.response.use(function(t){return t},function(t){return u.default.reject(t)})};var r=n(5),c=o(r),l=n(80),f=o(l),d=n(55),p=o(d),h=n(58),v=o(h);n(56).polyfill(),n(57),c.default.use(v.default,p.default),p.default.defaults.baseURL="//"+document.domain+"/api",p.default.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",p.default.defaults.timeout=2e4,p.default.postFrom=function(t,e){var n=new f.default;return(0,a.default)(e).forEach(function(t,o,s){n.append(t,e[t])}),p.default.post(t,n)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.axioshttp=void 0;var o=n(31),s=function(t){return t&&t.__esModule?t:{default:t}}(o);n(30);e.axioshttp=s.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(62),s=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"toast",mixins:[s.default],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(15),s=n(81);e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}},components:{VsIosSwitch:s.VsIosSwitch},methods:{fetchTest:function(){var t=this;this.axios.post(o.ILOGIN).then(function(e){console.dir(e),t.$router.push({path:"/test2"})}).catch(function(t){throw console.log(t),new Error(t)}),this.axios.get(o.ITEST).then(function(t){console.dir(t)}).catch(function(t){throw console.log(t),new Error(t)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"test",template:"<div>uuuuuuuuuuuu</div>"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(15);e.default={name:"world",data:function(){return{msg:"Welcome to Your world"}},methods:{fetchTest:function(){this.axios.post(o.ILOGIN).then(function(t){console.dir(t)}).catch(function(t){throw console.log(t),new Error(t)}),this.axios.get(o.ITEST).then(function(t){console.dir(t)}).catch(function(t){throw console.log(t),new Error(t)})}}}},,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v("\n  ======================\n  "),n("VsIosSwitch"),t._v(" "),n("test"),t._v("\n  ======================\n  "),n("test2"),t._v(" "),n("div",{on:{click:t.fetchTest}},[t._v("asdfas")])],1)},s=[],u={render:o,staticRenderFns:s};e.a=u},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},s=[],u={render:o,staticRenderFns:s};e.a=u},function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("this is world")])])},s=[],u={render:o,staticRenderFns:s};e.a=u},function(t,e,n){t.exports=n(0)(122)},function(t,e,n){t.exports=n(0)(124)},function(t,e,n){t.exports=n(0)(125)},function(t,e,n){t.exports=n(0)(126)},function(t,e,n){t.exports=n(0)(127)},function(t,e,n){t.exports=n(0)(60)},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function o(t){n(50)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(33),u=n.n(s),i=n(53),a=n(3),r=o,c=a(u.a,i.a,r,null,null);e.default=c.exports},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.app=void 0,n(12);var s=n(5),u=o(s),i=n(92),a=o(i),r=n(96),c=o(r),l=n(32),f=n(29),d=(o(f),n(63)),p=o(d);n(48),u.default.use(p.default),u.default.config.productionTip=!1;var h=e.app=new u.default({el:"#app",router:c.default,template:"<App/>",components:{App:a.default}});(0,l.axioshttp)(h)},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(61).attach(document.body),e.default={name:"app"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"test2",template:"<div>A  this is test2!</div>",data:function(){return{msg:"this is test2"}}}},,function(t,e){},,function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],u={render:o,staticRenderFns:s};e.a=u},,function(t,e,n){"use strict";function o(t){n(88)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(85),u=n.n(s),i=n(90),a=n(3),r=o,c=a(u.a,i.a,r,null,null);e.default=c.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(86),s=n.n(o),u=n(3),i=u(s.a,null,null,null,null);e.default=i.exports},,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),u=o(s),i=n(59),a=o(i),r=n(13),c=(o(r),n(97)),l=o(c);u.default.use(a.default),e.default=new a.default({routes:l.default})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(13),u=o(s),i=n(93),a=o(i),r=[{path:"/",name:"Hello",component:u.default},{path:"/test2",name:"Hello",component:a.default}];e.default=r},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){n(12),t.exports=n(83)}],[143]);
//# sourceMappingURL=app.js.map?v=6d71efb2f12f15bb3fb5