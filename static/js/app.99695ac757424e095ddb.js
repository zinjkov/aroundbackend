webpackJsonp([1],{0:function(t,i,e){function n(t){e(149)}var s=e(2)(e(86),e(970),n,null,null);t.exports=s.exports},101:function(t,i,e){"use strict";function n(){_.$store.dispatch("fetch_position_list")}Object.defineProperty(i,"__esModule",{value:!0});var s=e(14),a=e(83),o=e.n(a),r=e(77),u=e(79),l=e(80),c=(e.n(l),e(81)),d=(e.n(c),e(82),e(0)),p=e.n(d),m=e(85),f=(e.n(m),e(84)),v=e.n(f),h=e(78);s.a.component("icon",p.a),s.a.use(u.a),s.a.config.productionTip=!1,s.a.use(m,{load:{key:"AIzaSyCGOya76cyO2HGKPXT_b3BI4_J1JyCgSRs"}}),s.a.use(v.a);s.a.http.options.root="http://aroundisland.ru/api";var _=new s.a({el:"#app",router:r.a,store:h.a,template:"<App/>",components:{App:o.a}});n(),function(){setInterval(function(){return n()},5e3)}()},102:function(t,i,e){"use strict";var n=e(57);i.a={fetch_all_position:function(t){var i=0;for(i=t.state.downloaded;i<t.state.pointCount;i++)t.dispatch("fetch_position",i);t.commit("set_downloaded",i)},fetch_position_count:function(t){n.a.fetchBoardInfoCount().then(function(i){t.commit("update_count",i.data),parseInt(i.data.data)!==parseInt(t.state.downloaded)&&t.dispatch("fetch_all_position")})},fetch_position:function(t,i){n.a.getPosition(i).then(function(i){t.commit("add_position",i.data)})},fetch_position_list:function(t){n.a.fetchBoardInfoList().then(function(i){t.commit("add_positions",i.data)})},fetch_team_list:function(t){n.a.fetchTeamList().then(function(i){t.commit("add_team_list",i.data)})}}},103:function(t,i,e){"use strict";function n(t){return{lat:parseFloat(t.latitude_gps),lng:parseFloat(t.longitude_gps)}}i.a={allPositions:function(t){if(0!==t.positions.length)return t.positions},last_img:function(t){return 0!==t.positions.length?t.positions[t.positions.length-1].image:"#"},image_list:function(t){return 0!==t.positions.length?t.positions.map(function(t){return"http://127.0.0.1:8000/"+t.image}):[]},team_list:function(t){return 0!==t.team_list.length?t.team_list:[]},last_position:function(t){return 0!==t.positions.length?t.positions[t.positions.length-1]:[]},get_waypoint_list:function(t){return 0!==t.positions.length?t.positions.map(function(t){return{lat:parseFloat(t.latitude_gps),lng:parseFloat(t.longitude_gps)}}):[]},path:function(t){if(0!==t.positions.length)return t.positions.map(function(t,i,e){return n(t)})},position_list:function(t){if(0!==t.positions.length)return t.positions}}},104:function(t,i,e){"use strict";function n(t,i){return t.id-i.id}var s=e(110),a=e.n(s);i.a={update_count:function(t,i){i=JSON.parse(i.data),t.pointCount=i},add_position:function(t,i){i=i.data,console.log(i),t.positions=[].concat(a()(t.positions),[i]).sort(n),t.clicked_markers=[].concat(a()(t.clicked_markers),[!1])},set_downloaded:function(t,i){t.downloaded=i},add_positions:function(t,i){i=i.data,t.positions=i.sort(n)},add_team_list:function(t,i){t.team_list=i.data}}},142:function(t,i){},143:function(t,i){},144:function(t,i){},145:function(t,i){},146:function(t,i){},147:function(t,i){},148:function(t,i){},149:function(t,i){},150:function(t,i){},151:function(t,i){},152:function(t,i){},153:function(t,i){},157:function(t,i,e){t.exports=e.p+"static/img/board2.47ba8b6.jpg"},158:function(t,i,e){t.exports=e.p+"static/img/pernov.b606563.jpg"},57:function(t,i,e){"use strict";var n=e(108),s=e.n(n),a=e(109),o=e.n(a),r=e(14),u=function(){function t(){s()(this,t)}return o()(t,null,[{key:"ApiInit",value:function(t){}},{key:"fetchBoardInfoList",value:function(){return r.a.http.get("board/get_list")}},{key:"fetchBoardInfoByPath",value:function(t){return r.a.http.get("board/get_list_by_path",{id_path_id:t})}},{key:"fetchBoardInfoCount",value:function(){return r.a.http.get("board/count")}},{key:"fetchTeamList",value:function(){return r.a.http.get("team/list")}}]),t}();i.a=u},77:function(t,i,e){"use strict";var n=e(14),s=e(976),a=e(955),o=e.n(a),r=e(954),u=e.n(r),l=e(953),c=e.n(l),d=e(956),p=e.n(d);n.a.use(s.a),i.a=new s.a({routes:[{path:"/",name:"home",component:o.a},{path:"/about",name:"about",component:c.a},{path:"/gallery",name:"gallery",component:u.a},{path:"/tracker",name:"tracker",component:p.a}]})},78:function(t,i,e){"use strict";var n=e(14),s=e(33),a=e(102),o=e(103),r=e(104);n.a.use(s.a),i.a=new s.a.Store({state:{positions:[],downloaded:0,pointCount:0,team_list:[]},actions:a.a,getters:o.a,mutations:r.a})},80:function(t,i){},81:function(t,i){},83:function(t,i,e){function n(t){e(147)}var s=e(2)(e(87),e(967),n,null,null);t.exports=s.exports},86:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(14),s={};i.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in s||(n.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(n.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,i=t.width,e=t.height;return Math.max(i,e)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(i){i.outerScale=t.normalizedScale});var i=0,e=0;this.$children.forEach(function(t){i=Math.max(i,t.width),e=Math.max(e,t.height)}),this.childrenWidth=i,this.childrenHeight=e,this.$children.forEach(function(t){t.x=(i-t.width)/2,t.y=(e-t.height)/2})}},register:function(t){for(var i in t){var e=t[i];e.paths||(e.paths=[]),e.d&&e.paths.push({d:e.d}),e.polygons||(e.polygons=[]),e.points&&e.polygons.push({points:e.points}),s[i]=e}},icons:s}},87:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(958),s=e.n(n),a=e(957),o=e.n(a);e(57);i.default={name:"app",created:function(){},components:{AroundFooter:o.a,AroundHeader:s.a},mounted:function(){this.$store.dispatch("fetch_position_list")}}},88:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(36),s=e.n(n),a=e(33);i.default={name:"about",data:function(){return{domain:"http://www.aroundisland.ru/"}},mounted:function(){this.$store.dispatch("fetch_team_list")},computed:s()({},e.i(a.b)(["team_list"]))}},89:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(36),s=e.n(n),a=e(33),o=e(959),r=e.n(o);i.default={name:"gallery",components:{ImageList:r.a},data:function(){return{src_img:""}},mounted:function(){this.src_img="http://www.aroundisland.ru/"+this.last_img},computed:s()({},e.i(a.b)(["last_img","image_list"]))}},90:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(0),s=e.n(n);i.default={components:{Icon:s.a},name:"home",data:function(){return{access_token:""}},mounted:function(){}}},91:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(36),s=e.n(n),a=e(33),o=e(960),r=e.n(o);i.default={name:"tracker",components:{InfoWindow:r.a},data:function(){return{center:{lat:43.127877,lng:131.892663},info_opened:!1,info_obj:null,infoOptions:{geodesic:!0,pixelOffset:{width:0,height:0},clickable:!0},modal_show:!1,info_pos:{lat:0,lng:0}}},computed:s()({},e.i(a.b)(["get_waypoint_list","last_position","path","position_list"])),methods:{onMarkerClick:function(t){this.info_obj=this.position_list[t],this.info_pos.lat=parseFloat(this.info_obj.latitude_gps),this.info_pos.lng=parseFloat(this.info_obj.longitude_gps),this.info_opened=!0},onShowClick:function(t){this.clicked_marker=this.position_list[t],this.modal_show=!0}}}},92:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"around-footer"}},93:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"around-header"}},94:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"ImageList",props:{imageList:{default:[]}},data:function(){return{show:!1,imageModal:""}},methods:{triggerModal:function(t){this.show=!this.show,this.imageModal=t}}}},948:function(t,i,e){var n=e(2)(e(96),e(973),null,null,null);t.exports=n.exports},949:function(t,i,e){var n=e(2)(e(97),e(969),null,null,null);t.exports=n.exports},95:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"info",data:function(){return{srcsI:function(){return this.getImgSrc()}}},props:["img","info"],computed:{srcImg:function(){return"http://www.aroundisland.ru/"+this.info.image},Fields:function(){return{speed_gps:this.info.speed_gps,created_at:this.info.created_at,altitude_gps:this.info.altitude_gps,satellites_gps:this.info.satellites_gps,hdop_gps:this.info.hdop_gps,ip_client:this.info.ip_client,latitude_gps:this.info.latitude_gps,latitude_point:this.info.latitude_point,longitude_gps:this.info.longitude_gps,longitude_point:this.info.longitude_point,vcc:this.info.vcc,yaw_compass:this.info.yaw_compass,yaw_gps:this.info.yaw_gps}}},method:{}}},950:function(t,i,e){function n(t){e(152)}var s=e(2)(e(98),e(974),n,null,null);t.exports=s.exports},951:function(t,i,e){var n=e(2)(e(99),e(964),null,null,null);t.exports=n.exports},952:function(t,i,e){function n(t){e(145)}var s=e(2)(e(100),e(965),n,null,null);t.exports=s.exports},953:function(t,i,e){function n(t){e(142)}var s=e(2)(e(88),e(961),n,"data-v-0c2e6fa4",null);t.exports=s.exports},954:function(t,i,e){function n(t){e(151)}var s=e(2)(e(89),e(972),n,"data-v-ba6e999a",null);t.exports=s.exports},955:function(t,i,e){function n(t){e(143)}var s=e(2)(e(90),e(962),n,"data-v-144c2b64",null);t.exports=s.exports},956:function(t,i,e){function n(t){e(153)}var s=e(2)(e(91),e(975),n,"data-v-e7829fce",null);t.exports=s.exports},957:function(t,i,e){function n(t){e(146)}var s=e(2)(e(92),e(966),n,"data-v-4f3c3dd3",null);t.exports=s.exports},958:function(t,i,e){function n(t){e(148)}var s=e(2)(e(93),e(968),n,"data-v-706ea1c5",null);t.exports=s.exports},959:function(t,i,e){function n(t){e(150)}var s=e(2)(e(94),e(971),n,"data-v-a76803c4",null);t.exports=s.exports},960:function(t,i,e){function n(t){e(144)}var s=e(2)(e(95),e(963),n,"data-v-1b55a7ee",null);t.exports=s.exports},961:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"about"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"whoiswho"},[e("div",{staticClass:"row"},t._l(t.team_list,function(i){return e("div",{staticClass:"col-lg-6"},[e("b-card",[e("img",{attrs:{src:t.domain+i.avatar}}),t._v(" "),e("h4",[t._v(t._s(i.name))]),t._v(" "),e("p",[t._v("\n              "+t._s(i.description)+"\n            ")])])],1)}))])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"about-team"},[e("h3",[t._v("как и зачем собрались вообще")]),t._v(" "),e("p",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo\n        id, dignissim scelerisque velit. In bibendum, eros sit amet cursus\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo\n        id, dignissim scelerisque velit. In bibendum, eros sit amet cursus\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo\n        id, dignissim scelerisque velit. In bibendum, eros sit amet cursus\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo\n        id, dignissim scelerisque velit. In bibendum, eros sit amet cursus\n      ")])])}]}},962:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"home"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:" wrapper"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-4"},[n("icon",{staticClass:"icon",attrs:{name:"ship"}}),t._v(" "),n("h5",[t._v("\n            Идея\n          ")]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo id, dignissim scelerisque velit.\n          ")])],1),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("icon",{staticClass:"icon",attrs:{name:"font-awesome"}}),t._v(" "),n("h5",[t._v("\n            Цели\n          ")]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo id, dignissim scelerisque velit.\n          ")])],1),t._v(" "),n("div",{staticClass:"col-lg-4"},[n("icon",{staticClass:"icon",attrs:{name:"cloud-upload"}}),t._v(" "),n("h5",[t._v("\n            Бла-Бла\n          ")]),t._v(" "),n("p",[t._v("\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo id, dignissim scelerisque velit.\n          ")])],1)])])]),t._v(" "),n("div",{staticClass:"container "},[n("b-card",{staticClass:"card-history "},[n("div",{staticClass:"row"},[n("img",{staticClass:"col-lg-6",attrs:{src:e(158)}}),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("p",[t._v("\n            «Пернов» — головной миноносец типа «Пернов»,\n            первый из 25 построенных для Российского императорского флота.\n          ")]),t._v(" "),n("p",[t._v("\n            Головной миноносец «Пернов» строился силами завода А. Нормана в Гавре (Франция).\n            Спустя год после постройки миноносец передали Невскому заводу для изучения на предмет возможности серийной постройки. В 1893 были заключены контракты на постройку 24 таких кораблей. Постройка кораблей на отечественных заводах не удалась и миноносцы сильно отставали от прототипа по техническим данным. В то время как «Пернов» на испытаниях развил 25,46 узлов, некоторые корабли отечественной постройки не могли достичь и 17-узловой отметки.\n          ")])])])])],1),t._v(" "),t._m(2)])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"topic"},[e("h2",[t._v("\n      ПЕРНОВ АВТОНОМНЫЙ.\n      ТЕПЕРЬ УМНЫЙ.\n    ")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container"},[e("h3",[t._v("\n      О Проекте\n    ")]),t._v(" "),e("p",[t._v("\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo id, dignissim scelerisque velit. In bibendum, eros sit amet cursus convallis, risus arcu porta lectus, non facilisis elit massa at augue. Suspendisse a varius lorem. Phasellus in hendrerit velit, vel tristique odio. Praesent dignissim lobortis sapien et tempor. Fusce purus urna, vestibulum ut eros at, laoreet placerat urna. Vivamus eu lobortis felis, in efficitur eros. Suspendisse potenti. Duis vitae justo quis est dapibus mollis. Suspendisse nisl nunc, finibus vel tempus quis, mattis quis ante. Etiam odio risus, maximus a est nec, laoreet molestie nisi. Fusce at mauris a risus venenatis aliquam eu id metus.\n\n    ")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-2"}),t._v(" "),e("div",{staticClass:"col-lg-8"},[e("h3",[t._v("Партнеры?")]),t._v(" "),e("p",[t._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel magna a risus dictum ullamcorper. Phasellus purus metus, iaculis sed justo id, dignissim scelerisque velit. In bibendum, eros sit amet cursus convallis, risus arcu porta lectus, non facilisis elit massa at augue. Suspendisse a varius lorem. Phasellus in hendrerit velit, vel tristique odio. Praesent dignissim lobortis sapien et tempor. Fusce purus urna, vestibulum ut eros at, laoreet placerat urna. Vivamus eu lobortis felis, in efficitur eros. Suspendisse potenti. Duis vitae justo quis est dapibus mollis. Suspendisse nisl nunc, finibus vel tempus quis, mattis quis ante. Etiam odio risus, maximus a est nec, laoreet molestie nisi. Fusce at mauris a risus venenatis aliquam eu id metus.\n\n          Curabitur quam lacus, dapibus ac tincidunt eu, porta eu neque. Proin id nisl mi. Praesent malesuada velit leo, et ornare sapien placerat vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras molestie libero erat, sed ullamcorper turpis rhoncus vel. Pellentesque nec odio dolor. Ut sed tristique eros. Nullam tortor eros, rutrum eget urna eu, facilisis lacinia nibh. Phasellus a gravida ipsum. Ut mattis varius faucibus. Integer non laoreet felis. Morbi finibus fermentum nibh. Duis congue venenatis lacus, a hendrerit velit placerat sed. Vivamus venenatis enim nec risus ornare tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\n\n          Morbi tincidunt, magna nec ornare elementum, augue lectus molestie elit, eget fringilla leo lacus et diam. Proin sodales vel purus nec tincidunt. Morbi sit amet nisl eget magna fermentum condimentum eu in turpis. Morbi commodo quam ac quam euismod varius sed nec leo. Integer vitae quam lobortis, facilisis ante sit amet, cursus tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse id nisi condimentum, auctor dui id, ultricies eros. Donec eu dapibus nisi, in dapibus sem. Quisque velit ligula, convallis eget sem nec, bibendum lobortis enim.\n\n          Aliquam pretium libero massa. Duis vel quam porta, tempus leo vitae, condimentum dui. Pellentesque sit amet elementum ipsum, quis aliquet ipsum. Donec vitae sapien lorem. Nunc augue odio, vehicula vel facilisis in, finibus hendrerit mi. Mauris porta a libero sit amet sodales. Donec cursus mollis mauris vitae tristique. Phasellus sit amet sollicitudin nisl. Nullam laoreet ut sem non mattis. Sed tempus lacus vel odio porta gravida. Aenean blandit facilisis ipsum, sed luctus sapien fringilla ut. Curabitur ullamcorper mi ut nisi commodo, in condimentum orci euismod.\n\n          Praesent quis ante id mauris congue blandit vitae non nibh. Sed facilisis eleifend neque non efficitur. Pellentesque fermentum consectetur felis sed dictum. Donec sed ornare nisl. Donec gravida volutpat dui. Etiam non purus arcu. Proin malesuada risus diam, et cursus orci tempus ut. Nullam condimentum quis urna eu volutpat. Nulla dapibus ipsum ipsum, eget feugiat tellus consequat ege")])]),t._v(" "),e("div",{staticClass:"col-lg-2"})])])}]}},963:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrap"},[e("img",{directives:[{name:"show",rawName:"v-show",value:0!==t.info.image,expression:"info.image!==0"}],attrs:{src:t.srcImg,width:"200px",height:"200px"},on:{click:function(i){t.$emit("show")}}}),t._v(" "),e("div",{staticClass:"info-block",on:{click:function(i){t.$emit("show")}}},t._l(t.Fields,function(i,n){return e("b",{staticClass:"text-info"},[t._v("\n      "+t._s(n)+" : "+t._s(i)+"\n    ")])}))])},staticRenderFns:[]}},964:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("label",[e("span",{domProps:{textContent:t._s(t.label)}}),t._v(" "),e("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},staticRenderFns:[]}},965:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._v(" "),t._t("default")],2)},staticRenderFns:[]}},966:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("b-navbar",{staticClass:"aroundFooter",attrs:{toggleable:"",type:"light",variant:"link","toggle-breakpoint":"md"}})},staticRenderFns:[]}},967:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"app"}},[e("around-header"),t._v(" "),e("router-view"),t._v(" "),e("around-footer")],1)},staticRenderFns:[]}},968:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("b-navbar",{staticClass:"aroundHeader",attrs:{toggleable:"",type:"light",variant:"link","toggle-breakpoint":"md"}},[e("b-nav-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),e("b-navbar-brand",{attrs:{href:"#"}},[e("img",{attrs:{src:"static/logo.png"}})]),t._v(" "),e("b-navbar-brand",{attrs:{href:"#"}},[e("img",{staticStyle:{"max-height":"60px"},attrs:{src:"static/island_logo.jpeg"}})]),t._v(" "),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-nav",{staticClass:"ml-auto",attrs:{"is-nav-bar":""}},[e("b-nav",{attrs:{"is-nav-bar":""}},[e("b-button-group",[e("b-nav-item",[e("b-button",{attrs:{variant:"link"}},[e("router-link",{attrs:{to:"/"}},[e("span",[e("icon",{attrs:{name:"home"}}),t._v(" Домой")],1)])],1)],1),t._v(" "),e("b-nav-item",{attrs:{href:"#"}},[e("b-button",{attrs:{variant:"link"}},[e("router-link",{attrs:{to:"/about"}},[e("span",[e("icon",{attrs:{name:"group"}}),t._v(" О нас")],1)])],1)],1),t._v(" "),e("b-nav-item",{attrs:{href:"#"}},[e("b-button",{attrs:{variant:"link"}},[e("router-link",{attrs:{to:"/gallery"}},[e("span",[e("icon",{attrs:{name:"photo"}}),t._v(" Галерея")],1)])],1)],1),t._v(" "),e("b-nav-item",{attrs:{href:"#"}},[e("b-button",{attrs:{variant:"link"}},[e("router-link",{attrs:{to:"/tracker"}},[e("span",[e("icon",{attrs:{name:"map-marker"}}),t._v(" Трекер")],1)])],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},969:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{ref:"flyaway"},[t._t("default")],2)])},staticRenderFns:[]}},970:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(i){return e("path",t._b({},"path",i,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(i){return e("polygon",t._b({},"polygon",i,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[e("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},971:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"wrapper"},[e("b-modal",{staticClass:"container",attrs:{size:"lg"},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[e("div",{slot:"modal-footer"}),t._v(" "),e("img",{attrs:{src:t.imageModal}})]),t._v(" "),e("div",{staticClass:"container"},[t._v("\n    ImageList\n    "),e("div",{staticClass:"row"},t._l(t.imageList,function(i){return e("img",{staticClass:"col-lg-3",attrs:{src:i},on:{click:function(e){t.triggerModal(i)}}})}))])],1)},staticRenderFns:[]}},972:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",[n("div",{staticClass:"gallery"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("b-card",{staticClass:"col-lg-4"},[n("img",{attrs:{src:e(157)}}),t._v(" "),n("div",{staticClass:"card-view"},[n("b-button",{attrs:{variant:"primary"}},[t._v("С лодки")])],1)])],1)])]),t._v(" "),n("div",{staticClass:"container"},[n("h3",[t._v("FROM BOARD")]),t._v(" "),n("image-list",{attrs:{imageList:t.image_list}})],1)])},staticRenderFns:[]}},973:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;return(t._self._c||i)("input",{ref:"input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value}})},staticRenderFns:[]}},974:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),t._v(" "),e("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._v(" "),t._t("visible")],2)},staticRenderFns:[]}},975:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tracker"},[e("gmap-map",{staticClass:"map",attrs:{center:{lat:parseFloat(t.last_position.latitude_gps),lng:parseFloat(t.last_position.longitude_gps)},zoom:16}},[t.info_opened?e("gmap-info-window",{staticStyle:{"max-height":"300px","max-width":"300px"},attrs:{clickable:!0,options:t.infoOptions,position:t.info_pos},on:{closeclick:function(i){t.info_opened=!1}}},[e("info-window",{staticStyle:{"max-width":"500px"},attrs:{info:t.info_obj},on:{show:function(i){t.onShowClick(t.info_obj)}}})],1):t._e(),t._v(" "),t._l(t.get_waypoint_list,function(i,n){return e("gmap-marker",{attrs:{position:i,clickable:!0,draggable:!1},on:{click:function(i){t.onMarkerClick(n)}}})}),t._v(" "),e("gmap-polyline",{attrs:{path:t.path,editable:!1,deepWatch:!0}},[e("gmap-circle",{attrs:{radius:3}})],1)],2)],1)},staticRenderFns:[]}}},[101]);
//# sourceMappingURL=app.99695ac757424e095ddb.js.map