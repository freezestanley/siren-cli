webpackJsonp([2],{0:function(t,e){t.exports=vendor_library},10:function(t,e,n){t.exports=n(0)(123)},120:function(t,e){},121:function(t,e){},126:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("this is aa")]),t._v(" "),n("div",{on:{click:t.fetchTest}},[t._v("asdfas")])])},s=[],i={render:o,staticRenderFns:s};e.a=i},127:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._v("\n  this is share\n  "),n("router-view")],1)},s=[],i={render:o,staticRenderFns:s};e.a=i},132:function(t,e,n){"use strict";function o(t){n(120)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(76),i=n.n(s),u=n(126),a=n(11),r=o,c=a(i.a,u.a,r,"data-v-46e886d3",null);e.default=c.exports},133:function(t,e,n){"use strict";function o(t){n(121)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(77),i=n.n(s),u=n(127),a=n(11),r=o,c=a(i.a,u.a,r,null,null);e.default=c.exports},135:function(t,e,n){n(10),t.exports=n(71)},24:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="",s="",i="";o="//hq-jdt-dev.zhongan.com",s="/jdt-web/wx/configdata.do",i="//offline-news-api.herokuapp.com/stories";e.ILOGIN=o+s,e.ITEST=o+i},25:function(t,e,n){"use strict";window.onerror=function(t,e,n,o,s){}},26:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(51),i=o(s),u=n(50),a=o(u);e.default=function(t){t.axios.interceptors.request.use(function(t){return t},function(t){return i.default.reject(t)}),t.axios.interceptors.response.use(function(t){return t},function(t){return i.default.reject(t)})};var r=n(12),c=o(r),l=n(68),f=o(l),d=n(42),p=o(d),h=n(45),v=o(h);n(43).polyfill(),n(44),c.default.use(v.default,p.default),p.default.defaults.baseURL="//"+document.domain+"/api",p.default.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",p.default.defaults.timeout=2e4,p.default.postFrom=function(t,e){var n=new f.default;return(0,a.default)(e).forEach(function(t,o,s){n.append(t,e[t])}),p.default.post(t,n)}},27:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.axioshttp=void 0;var o=n(26),s=function(t){return t&&t.__esModule?t:{default:t}}(o);n(25);e.axioshttp=s.default},28:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(48),s=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"toast",mixins:[s.default],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},40:function(t,e){},41:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},s=[],i={render:o,staticRenderFns:s};e.a=i},42:function(t,e,n){t.exports=n(0)(122)},43:function(t,e,n){t.exports=n(0)(124)},44:function(t,e,n){t.exports=n(0)(125)},45:function(t,e,n){t.exports=n(0)(126)},46:function(t,e,n){t.exports=n(0)(127)},47:function(t,e,n){t.exports=n(0)(60)},69:function(t,e,n){"use strict";function o(t){n(40)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(28),i=n.n(s),u=n(41),a=n(11),r=o,c=a(i.a,u.a,r,null,null);e.default=c.exports},71:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.app=void 0,n(10);var s=n(12),i=o(s),u=n(133),a=o(u),r=n(73),c=o(r),l=n(27),f=n(49),d=o(f);i.default.use(d.default),i.default.config.productionTip=!1;var p=e.app=new i.default({el:"#app",router:c.default,template:"<App/>",components:{App:a.default}});p.$vux.toast.show({text:"请重新登录!",type:"text",width:"50%",isShowMask:!0,onHide:function(){}}),(0,l.axioshttp)(p)},73:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(12),i=o(s),u=n(46),a=o(u),r=n(132),c=o(r);i.default.use(a.default),e.default=new a.default({routes:[{path:"/",name:"Hello",component:c.default}]})},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24);e.default={name:"aa",data:function(){return{msg:"Welcome to Your Vue.js App"}},methods:{fetchTest:function(){this.axios.post(o.ILOGIN).then(function(t){console.dir(t)}).catch(function(t){throw console.log(t),new Error(t)}),this.axios.get(o.ITEST).then(function(t){console.dir(t)}).catch(function(t){throw console.log(t),new Error(t)})}}}},77:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(67).attach(document.body),e.default={name:"share"}}},[135]);
//# sourceMappingURL=share.js.map?v=c5181b1b722cbd1c5a05