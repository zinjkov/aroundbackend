webpackJsonp([0],{"3eGE":function(t,e){},"71n1":function(t,e,n){"use strict";var i=n("g+HW");e.a={name:"main",components:{Grid:i.a},data:function(){return{title_list:["Наименовение","Количество","Цена"],object_list:[]}},methods:{onRemoveElement:function(t){this.object_list.splice(t,1)},onChangeElement:function(t,e){var n={};for(var i in t)n[i]=t[i];this.object_list.splice(e,1,n)},onAddElement:function(t){this.object_list.push(t)}}}},"95v3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("grid",{staticClass:"grid",attrs:{grid_name:"Накладная таблица",data_list:t.object_list,title_list:t.title_list},on:{removeElement:t.onRemoveElement,changeElement:t.onChangeElement,addElement:t.onAddElement}})],1)},o=[],a={render:i,staticRenderFns:o};e.a=a},CkM6:function(t,e){},"Dr/4":function(t,e){},GHxK:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid_item"},[t.edit?n("input",{directives:[{name:"model",rawName:"v-model",value:t.item.object_name,expression:"item.object_name"}],staticClass:"cell",attrs:{type:"text"},domProps:{value:t.item.object_name},on:{input:function(e){e.target.composing||(t.item.object_name=e.target.value)}}}):n("div",{staticClass:"cell white"},[t._v("\n    "+t._s(t.item.object_name)+"\n  ")]),t._v(" "),t.edit?n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.item.object_count,expression:"item.object_count",modifiers:{number:!0}}],staticClass:"cell",attrs:{type:"number"},domProps:{value:t.item.object_count},on:{input:function(e){e.target.composing||(t.item.object_count=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}):n("div",{staticClass:"cell gray"},[t._v("\n    "+t._s(t.item.object_count)+"\n  ")]),t._v(" "),t.edit?n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.item.object_cost,expression:"item.object_cost",modifiers:{number:!0}}],staticClass:"cell",attrs:{type:"number"},domProps:{value:t.item.object_cost},on:{input:function(e){e.target.composing||(t.item.object_cost=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}):n("div",{staticClass:"cell white"},[t._v("\n    "+t._s(t.item.object_cost)+"\n  ")]),t._v(" "),n("div",{staticClass:"gray"},[t.edit?n("button",{on:{click:t.onSaveClick}},[t._v("Сохранить")]):n("button",{on:{click:function(e){t.edit=!0}}},[t._v("Изменить")]),t._v(" "),n("button",{on:{click:function(e){t.$emit("remove")}}},[t._v("Удалить")])])])},o=[],a={render:i,staticRenderFns:o};e.a=a},M93x:function(t,e,n){"use strict";function i(t){n("CkM6")}var o=n("xJD8"),a=n("qqx/"),c=n("VU/8"),s=i,r=c(o.a,a.a,s,null,null);e.a=r.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),o=n("M93x");i.a.config.productionTip=!0,new i.a({el:"#app",template:"<App/>",components:{App:o.a}})},OIAS:function(t,e,n){"use strict";function i(t){n("jFCc")}var o=n("71n1"),a=n("95v3"),c=n("VU/8"),s=i,r=c(o.a,a.a,s,"data-v-57dd7a53",null);e.a=r.exports},Si3X:function(t,e,n){"use strict";e.a={name:"GridItem",data:function(){return{item:{object_name:"",count:0,cost:0},edit:!1}},props:{object_name:{type:String,default:""},object_count:{type:Number,default:0},object_cost:{type:Number,default:0},editing:{type:Boolean,default:!1}},created:function(){this.edit=this.editing,this.item.object_name=this.object_name,this.item.object_cost=this.object_cost,this.item.object_count=this.object_count},methods:{onSaveClick:function(){this.$emit("change",this.item),this.edit=!1}}}},ZIBF:function(t,e,n){"use strict";var i=n("aDkv");e.a={name:"Grid",components:{GridItem:i.a},props:{grid_name:{type:String},title_list:{type:Array},data_list:{type:Array}},data:function(){return{addItem:!1}},computed:{total:function(){return this.data_list.reduce(function(t,e){return t+e.object_cost*e.object_count},0)}},methods:{onRemoveEvent:function(t){this.$emit("removeElement",t)},onChangeEvent:function(t,e){this.$emit("changeElement",e,t)},onAddClick:function(){this.addItem=!this.addItem},onRemoveNewItemEvent:function(){this.addItem=!this.addItem},onSaveNewItemEvent:function(t){this.$emit("addElement",t),this.addItem=!this.addItem}}}},aDkv:function(t,e,n){"use strict";function i(t){n("Dr/4")}var o=n("Si3X"),a=n("GHxK"),c=n("VU/8"),s=i,r=c(o.a,a.a,s,"data-v-6297e761",null);e.a=r.exports},"g+HW":function(t,e,n){"use strict";function i(t){n("3eGE")}var o=n("ZIBF"),a=n("iYAk"),c=n("VU/8"),s=i,r=c(o.a,a.a,s,"data-v-4ad8c4ae",null);e.a=r.exports},iYAk:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"grid brd"},[n("h1",[t._v(t._s(t.grid_name))]),t._v(" "),n("div",{staticClass:"grid__header"},t._l(t.title_list,function(e){return n("div",{staticClass:"grid__header_title"},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),t._l(t.data_list,function(e,i){return n("div",[n("grid-item",{attrs:{object_name:e.object_name,object_cost:e.object_cost,object_count:e.object_count},on:{remove:function(e){t.onRemoveEvent(i)},change:function(e){t.onChangeEvent(i,e)}}})],1)}),t._v(" "),t.addItem?n("div",[n("grid-item",{attrs:{editing:!0},on:{remove:t.onRemoveNewItemEvent,change:t.onSaveNewItemEvent}})],1):t._e(),t._v(" "),n("footer",[t._v("\n      Итог: "+t._s(t.total)+"\n    ")])],2),t._v(" "),n("button",{staticClass:"add_btn",on:{click:t.onAddClick}},[t._v("Добавить")])])},o=[],a={render:i,staticRenderFns:o};e.a=a},jFCc:function(t,e){},"qqx/":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main-table")],1)},o=[],a={render:i,staticRenderFns:o};e.a=a},xJD8:function(t,e,n){"use strict";var i=n("OIAS");e.a={name:"app",components:{MainTable:i.a}}}},["NHnr"]);
//# sourceMappingURL=app.15b918cb3ff178e2a5b0.js.map