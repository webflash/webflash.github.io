(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-140d3c64","chunk-2d2371fe"],{3829:function(i,t,e){},"456d":function(i,t,e){var s=e("4bf8"),n=e("0d58");e("5eda")("keys",(function(){return function(i){return n(s(i))}}))},"4ed8":function(i,t,e){"use strict";var s=e("3829"),n=e.n(s);n.a},"5eda":function(i,t,e){var s=e("5ca1"),n=e("8378"),l=e("79e5");i.exports=function(i,t){var e=(n.Object||{})[i]||Object[i],o={};o[i]=t(e),s(s.S+s.F*l((function(){e(1)})),"Object",o)}},8256:function(i,t,e){"use strict";e.r(t);var s=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{staticClass:"upload-container"},[e("el-button",{style:{background:i.color,borderColor:i.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(t){i.dialogVisible=!0}}},[i._v("上传图片\n  ")]),i._v(" "),e("el-dialog",{attrs:{visible:i.dialogVisible},on:{"update:visible":function(t){i.dialogVisible=t}}},[e("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":i.fileList,"show-file-list":!0,"on-remove":i.handleRemove,"on-success":i.handleSuccess,"before-upload":i.beforeUpload,headers:i.uploadHeaders,action:i.fileUrl,"list-type":"picture-card"}},[e("el-button",{attrs:{size:"small",type:"primary"}},[i._v("点击上传")])],1),i._v(" "),e("el-button",{on:{click:function(t){i.dialogVisible=!1}}},[i._v("取 消")]),i._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:i.handleSubmit}},[i._v("确 定")])],1)],1)},n=[],l=(e("ac6a"),e("456d"),e("fa7d")),o=e("5f87"),c={name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[],fileUrl:"",uploadHeaders:{Authorization:""}}},created:function(){this.fileUrl=Object(l["getApiUrl"])()+"/file",this.uploadHeaders["Authorization"]=Object(o["getToken"])()},methods:{checkAllSuccess:function(){var i=this;return Object.keys(this.listObj).every((function(t){return i.listObj[t].hasSuccess}))},handleSubmit:function(){var i=this,t=Object.keys(this.listObj).map((function(t){return i.listObj[t]}));this.checkAllSuccess()?(this.$emit("successCBK",t),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(i,t){for(var e=t.uid,s=Object.keys(this.listObj),n=0,l=s.length;n<l;n++)if(this.listObj[s[n]].uid===e)return this.listObj[s[n]].url=this.fileUrl+"/download?idFile="+i.data.id,void(this.listObj[s[n]].hasSuccess=!0)},handleRemove:function(i){for(var t=i.uid,e=Object.keys(this.listObj),s=0,n=e.length;s<n;s++)if(this.listObj[e[s]].uid===t)return void delete this.listObj[e[s]]},beforeUpload:function(i){var t=this,e=window.URL||window.webkitURL,s=i.uid;return this.listObj[s]={},new Promise((function(n,l){var o=new Image;o.src=e.createObjectURL(i),o.onload=function(){t.listObj[s]={hasSuccess:!1,uid:i.uid,width:this.width,height:this.height}},n(!0)}))}}},r=c,a=(e("4ed8"),e("2877")),u=Object(a["a"])(r,s,n,!1,null,"f0ccb948",null);t["default"]=u.exports},fa7d:function(i,t,e){"use strict";e.r(t),e.d(t,"getApiUrl",(function(){return n}));var s="/prod-api";function n(){return s}}}]);