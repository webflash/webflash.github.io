(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5783369e","chunk-2d0e5972"],{"2ce6":function(t,e,n){"use strict";var a=n("cee3"),i=n.n(a);i.a},3914:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"block"},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{icon:"el-icon-back",size:"mini"},nativeOn:{click:function(e){return t.back(e)}}},[t._v(t._s(t.$t("button.back")))])],1)],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"任务名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"执行时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.execAt)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"执行结果"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(1===e.row.execSuccess?"成功":"失败")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"异常信息"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.jobExecption)+"\n      ")]}}])})],1),t._v(" "),n("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,50,100,500],"page-size":t.listQuery.limit,total:t.total},on:{"size-change":t.changeSize,"current-change":t.fetchPage,"prev-click":t.fetchPrev,"next-click":t.fetchNext}})],1)},i=[],s=n("94ab"),r={data:function(){return{taskId:"",listQuery:{page:1,limit:20,taskId:void 0},total:0,list:null,listLoading:!0,selRow:{}}},created:function(){this.init()},methods:{init:function(){this.listQuery.taskId=this.$route.query.taskId,this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0,Object(s["logList"])(this.listQuery).then((function(e){t.list=e.data.records,t.listLoading=!1,t.total=e.data.total}))},fetchNext:function(){this.listQuery.page=this.listQuery.page+1,this.fetchData()},fetchPrev:function(){this.listQuery.page=this.listQuery.page-1,this.fetchData()},fetchPage:function(t){this.listQuery.page=t,this.fetchData()},changeSize:function(t){this.listQuery.limit=t,this.fetchData()},back:function(){this.$router.go(-1)}}},c=r,l=(n("2ce6"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,"34cb680c",null);e["default"]=u.exports},"94ab":function(t,e,n){"use strict";n.r(e),n.d(e,"getList",(function(){return i})),n.d(e,"save",(function(){return s})),n.d(e,"remove",(function(){return r})),n.d(e,"logList",(function(){return c})),n.d(e,"enable",(function(){return l})),n.d(e,"disable",(function(){return u}));var a=n("b775");function i(t){return Object(a["default"])({url:"/task/list",method:"get",params:t})}function s(t){return Object(a["default"])({url:"/task",method:"post",params:t})}function r(t){return Object(a["default"])({url:"/task",method:"delete",params:{id:t}})}function c(t){return Object(a["default"])({url:"/task/logList",method:"get",params:t})}function l(t){return Object(a["default"])({url:"/task/enable/",method:"POST",params:{taskId:t}})}function u(t){return Object(a["default"])({url:"/task/disable/",method:"POST",params:{taskId:t}})}},cee3:function(t,e,n){}}]);