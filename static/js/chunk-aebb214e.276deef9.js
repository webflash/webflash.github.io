(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aebb214e","chunk-2d0c4c31","chunk-2d2371fe"],{"10a4":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"block"},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:6}},[i("el-input",{attrs:{size:"mini",placeholder:"文件名"},model:{value:t.listQuery.originalFileName,callback:function(e){t.$set(t.listQuery,"originalFileName",e)},expression:"listQuery.originalFileName"}})],1),t._v(" "),i("el-col",{attrs:{span:6}},[i("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-search"},nativeOn:{click:function(e){return t.search(e)}}},[t._v(t._s(t.$t("button.search")))]),t._v(" "),i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(e){return t.reset(e)}}},[t._v(t._s(t.$t("button.reset")))])],1)],1),t._v(" "),i("br")],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""},on:{"current-change":t.handleCurrentChange}},[i("el-table-column",{attrs:{label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"文件名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.originalFileName)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"上传日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.createTime)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{labe:"下载"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{icon:"el-icon-log",size:"mini"},nativeOn:{click:function(i){return t.download(e.row.id,e.row.originalFileName)}}},[t._v("下载")])]}}])})],1),t._v(" "),i("el-pagination",{attrs:{background:"",layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,50,100,500],"page-size":t.listQuery.limit,total:t.total},on:{"size-change":t.changeSize,"current-change":t.fetchPage,"prev-click":t.fetchPrev,"next-click":t.fetchNext}})],1)},a=[],l=i("3be1"),r=i("fa7d"),s={data:function(){return{listQuery:{page:1,limit:20,originalFileName:void 0},total:0,list:null,listLoading:!0,selRow:{},downloadUrl:""}},created:function(){this.init()},methods:{init:function(){this.downloadUrl=Object(r["getApiUrl"])()+"/file/download?idFile=",this.fetchData()},fetchData:function(){var t=this;this.listLoading=!0,Object(l["getList"])(this.listQuery).then((function(e){t.list=e.data.records,t.listLoading=!1,t.total=e.data.total}))},search:function(){this.fetchData()},reset:function(){this.listQuery.originalFileName="",this.fetchData()},handleFilter:function(){this.listQuery.page=1,this.getList()},handleClose:function(){},fetchNext:function(){this.listQuery.page=this.listQuery.page+1,this.fetchData()},fetchPrev:function(){this.listQuery.page=this.listQuery.page-1,this.fetchData()},fetchPage:function(t){this.listQuery.page=t,this.fetchData()},changeSize:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t,e){this.selRow=t},download:function(t,e){window.location.href=this.downloadUrl+t+"&fileName="+e}}},o=s,c=(i("c65d"),i("2877")),u=Object(c["a"])(o,n,a,!1,null,"6d9ec9b6",null);e["default"]=u.exports},"3be1":function(t,e,i){"use strict";i.r(e),i.d(e,"getList",(function(){return a}));var n=i("b775");function a(t){return Object(n["default"])({url:"/fileMgr/list",method:"get",params:t})}},c059:function(t,e,i){},c65d:function(t,e,i){"use strict";var n=i("c059"),a=i.n(n);a.a},fa7d:function(t,e,i){"use strict";i.r(e),i.d(e,"getApiUrl",(function(){return a}));var n="http://ximyan.free.idcfengye.com/dev-api";function a(){return n}}}]);