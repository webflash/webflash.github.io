(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bbad33c","chunk-4899d080","chunk-a017e36c"],{"07d8":function(e,t,n){"use strict";var a=n("9f28"),r=n.n(a);r.a},"0e1e":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n("5df3"),n("1c4c"),n("ac6a");var a=n("2b0e");function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=[];return Array.from(e).forEach((function(e){void 0===e._expanded&&a["default"].set(e,"_expanded",t);var s=1;if(void 0!==l&&null!==l&&(s=l+1),a["default"].set(e,"_level",s),n&&a["default"].set(e,"parent",n),o.push(e),e.children&&e.children.length>0){var i=r(e.children,t,e,s);o=o.concat(i)}})),o}},"1c4c":function(e,t,n){"use strict";var a=n("9b43"),r=n("5ca1"),l=n("4bf8"),o=n("1fa8"),s=n("33a4"),i=n("9def"),c=n("f1ae"),u=n("27ee");r(r.S+r.F*!n("5cc5")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,f,d=l(e),m="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,v=void 0!==h,b=0,_=u(d);if(v&&(h=a(h,p>2?arguments[2]:void 0,2)),void 0==_||m==Array&&s(_))for(t=i(d.length),n=new m(t);t>b;b++)c(n,b,v?h(d[b],b):d[b]);else for(f=_.call(d),n=new m;!(r=f.next()).done;b++)c(n,b,v?o(f,h,[r.value,b],!0):r.value);return n.length=b,n}})},"5dba":function(e,t,n){"use strict";var a=n("f624"),r=n.n(a);r.a},"5df3":function(e,t,n){"use strict";var a=n("02f4")(!0);n("01f9")(String,"String",(function(e){this._t=String(e),this._i=0}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=a(t,n),this._i+=e.length,{value:e,done:!1})}))},"8ad4":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",e._b({attrs:{data:e.formatData,"row-style":e.showRow}},"el-table",e.$attrs,!1),[0===e.columns.length?n("el-table-column",{attrs:{width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._l(t.row._level,(function(e){return n("span",{key:e,staticClass:"ms-tree-space"})})),e._v(" "),e.iconShow(0,t.row)?n("span",{staticClass:"tree-ctrl",on:{click:function(n){return e.toggleExpanded(t.$index)}}},[t.row._expanded?n("i",{staticClass:"el-icon-arrow-down"}):n("i",{staticClass:"el-icon-arrow-right"})]):e._e()]}}],null,!1,3948369855)}):e._l(e.columns,(function(t,a){return n("el-table-column",{key:t.value,attrs:{label:t.text,width:t.width},scopedSlots:e._u([{key:"default",fn:function(r){return[e._l(r.row._level,(function(t){return 0===a?n("span",{key:t,staticClass:"ms-tree-space"}):e._e()})),e._v(" "),e.iconShow(a,r.row)?n("span",{staticClass:"tree-ctrl",on:{click:function(t){return e.toggleExpanded(r.$index)}}},[r.row._expanded?n("i",{staticClass:"el-icon-arrow-down"}):n("i",{staticClass:"el-icon-arrow-right"})]):e._e(),e._v("\n      "+e._s(r.row[t.value])+"\n    ")]}}],null,!0)})})),e._v(" "),e._t("default")],2)},r=[],l=n("0e1e"),o={name:"treeTable",props:{data:{type:[Array,Object],required:!0},columns:{type:Array,default:function(){return[]}},evalFunc:Function,evalArgs:Array,expandAll:{type:Boolean,default:!1}},computed:{formatData:function(){var e;e=Array.isArray(this.data)?this.data:[this.data];var t=this.evalFunc||l["default"],n=this.evalArgs?Array.concat([e,this.expandAll],this.evalArgs):[e,this.expandAll];return t.apply(null,n)}},methods:{showRow:function(e){var t=!e.row.parent||e.row.parent._expanded&&e.row.parent._show;return e.row._show=t,t?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},toggleExpanded:function(e){var t=this.formatData[e];t._expanded=!t._expanded},iconShow:function(e,t){return 0===e&&t.children&&t.children.length>0}}},s=o,i=(n("e9b3"),n("07d8"),n("2877")),c=Object(i["a"])(s,a,r,!1,null,"f159fe78",null);t["default"]=c.exports},"9f28":function(e,t,n){},be00:function(e,t,n){},e9b3:function(e,t,n){"use strict";var a=n("be00"),r=n.n(a);r.a},f1ae:function(e,t,n){"use strict";var a=n("86cc"),r=n("4630");e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},f624:function(e,t,n){},f794:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"block"},[n("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){return e.add(t)}}},[e._v(e._s(e.$t("button.add")))])],1),e._v(" "),n("tree-table",{attrs:{data:e.data,expandAll:e.expandAll,"highlight-current-row":"",border:""}},[n("el-table-column",{attrs:{label:"名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.edit(t.row)}}},[e._v(e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"编码"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.code))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"组件"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.component))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"是否是菜单"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.isMenuName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"URL"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.url))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"是否启用"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.statusName))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"是否隐藏"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.hidden))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"顺序"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.num))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text"},on:{click:function(n){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:e.formTitle,visible:e.formVisible,width:"70%"},on:{"update:visible":function(t){e.formVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[n("el-row",[n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"名称",prop:"name"}},[n("el-input",{attrs:{minlength:"1"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"请求地址",prop:"url"}},[n("el-input",{attrs:{minlength:"1"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否是菜单"}},[n("el-radio-group",{model:{value:e.form.ismenu,callback:function(t){e.$set(e.form,"ismenu",t)},expression:"form.ismenu"}},[n("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否启用"}},[n("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},[n("el-radio",{attrs:{label:1}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:0}},[e._v("否")])],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"菜单编号",prop:"code"}},[n("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"组件",prop:"num"}},[n("el-input",{model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"是否隐藏"}},[n("el-radio-group",{model:{value:e.form.hidden,callback:function(t){e.$set(e.form,"hidden",t)},expression:"form.hidden"}},[n("el-radio",{attrs:{label:!0}},[e._v("是")]),e._v(" "),n("el-radio",{attrs:{label:!1}},[e._v("否")])],1)],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"图标"}},[n("el-input",{model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"排序",prop:"num"}},[n("el-input",{attrs:{type:"number"},model:{value:e.form.num,callback:function(t){e.$set(e.form,"num",t)},expression:"form.num"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:"父菜单"}},[n("el-input",{attrs:{placeholder:"请选择父菜单",readonly:"readonly"},nativeOn:{click:function(t){e.showTree=!e.showTree}},model:{value:e.form.pname,callback:function(t){e.$set(e.form,"pname",t)},expression:"form.pname"}}),e._v(" "),e.showTree?n("el-tree",{staticClass:"input-tree",attrs:{"empty-text":"暂无数据","expand-on-click-node":!1,data:e.data,props:e.defaultProps},on:{"node-click":e.handleNodeClick}}):e._e()],1)],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.save}},[e._v(e._s(e.$t("button.submit")))]),e._v(" "),n("el-button",{nativeOn:{click:function(t){e.formVisible=!1}}},[e._v(e._s(e.$t("button.cancel")))])],1)],1)],1)],1)},r=[],l=(n("7f7f"),n("8ad4")),o=n("a6dc"),s={name:"treeTableDemo",components:{treeTable:l["default"]},data:function(){return{showTree:!1,defaultProps:{id:"code",label:"name",children:"children"},listLoading:!0,expandAll:!0,formTitle:"",formVisible:!1,isAdd:!1,form:{id:"",pname:"",name:"",code:"",url:"",pcode:"",ismenu:1,num:1},rules:{name:[{required:!0,message:"请输入菜单名称",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],code:[{required:!0,message:"请输入编码",trigger:"blur"},{min:2,max:20,message:"长度在 2 到 20 个字符",trigger:"blur"}],url:[{required:!0,message:"请输入请求地址",trigger:"blur"}],num:[{required:!0,message:"请输入排序",trigger:"blur"}]},data:[],selRow:{}}},created:function(){this.init()},methods:{init:function(){this.fetchData()},fetchData:function(){var e=this;this.listLoading=!0,Object(o["getList"])().then((function(t){e.data=t.data,e.listLoading=!1}))},handleNodeClick:function(e,t){this.form.pcode=e.code,this.form.pname=e.name,this.showTree=!1},checkSel:function(){return!(!this.selRow||!this.selRow.id)||(this.$message({message:"请选中操作项",type:"warning"}),!1)},add:function(){this.form={},this.formTitle="添加菜单",this.formVisible=!0,this.isAdd=!0},save:function(){var e=this,t=this;this.$refs["form"].validate((function(n){if(!n)return!1;var a=t.form;delete a.parent,delete a.children,Object(o["save"])(a).then((function(n){e.$message({message:"提交成功",type:"success"}),t.fetchData(),t.formVisible=!1}))}))},edit:function(e){this.form=e,"是"===e.isMenuName?this.form.ismenu=1:this.form.ismenu=0,"启用"===e.statusName?this.form.status=1:this.form.status=0,e.parent&&(this.form.pcode=e.parent.code,this.form.pname=e.parent.name),console.log(this.form.pcode),this.formTitle="编辑菜单",this.formVisible=!0,this.isAdd=!1},remove:function(e){var t=this;this.$confirm("确定删除该记录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(o["delMenu"])(e.id).then((function(e){t.$message({message:"删除成功",type:"success"}),t.fetchData()})).catch((function(e){t.$notify.error({title:"错误",message:e})}))}))}}},i=s,c=(n("5dba"),n("2877")),u=Object(c["a"])(i,a,r,!1,null,"1fe4c93a",null);t["default"]=u.exports}}]);