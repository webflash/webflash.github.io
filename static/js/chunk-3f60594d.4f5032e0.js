(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f60594d","chunk-140d3c64","chunk-2d0c7ad7","chunk-2d0c1974","chunk-2d2371fe","chunk-2d22ba4d","chunk-2d0c4f7a"],{"11e9":function(t,e,n){var i=n("52a7"),a=n("4630"),r=n("6821"),o=n("6a99"),c=n("69a8"),s=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=r(t),e=o(e,!0),s)try{return l(t,e)}catch(n){}if(c(t,e))return a(!i.f.call(t,e),t[e])}},"28a5":function(t,e,n){"use strict";var i=n("aae3"),a=n("cb7c"),r=n("ebd6"),o=n("0390"),c=n("9def"),s=n("5f1b"),l=n("520a"),u=n("79e5"),d=Math.min,f=[].push,h="split",p="length",m="lastIndex",g=4294967295,b=!u((function(){RegExp(g,"y")}));n("214f")("split",2,(function(t,e,n,u){var v;return v="c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[p]||2!="ab"[h](/(?:ab)*/)[p]||4!="."[h](/(.?)(.?)/)[p]||"."[h](/()()/)[p]>1||""[h](/.?/)[p]?function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return n.call(a,t,e);var r,o,c,s=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,h=void 0===e?g:e>>>0,b=new RegExp(t.source,u+"g");while(r=l.call(b,a)){if(o=b[m],o>d&&(s.push(a.slice(d,r.index)),r[p]>1&&r.index<a[p]&&f.apply(s,r.slice(1)),c=r[0][p],d=o,s[p]>=h))break;b[m]===r.index&&b[m]++}return d===a[p]?!c&&b.test("")||s.push(""):s.push(a.slice(d)),s[p]>h?s.slice(0,h):s}:"0"[h](void 0,0)[p]?function(t,e){return void 0===t&&0===e?[]:n.call(this,t,e)}:n,[function(n,i){var a=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,a,i):v.call(String(a),n,i)},function(t,e){var i=u(v,t,this,e,v!==n);if(i.done)return i.value;var l=a(t),f=String(this),h=r(l,RegExp),p=l.unicode,m=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(b?"y":"g"),y=new h(b?l:"^(?:"+l.source+")",m),_=void 0===e?g:e>>>0;if(0===_)return[];if(0===f.length)return null===s(y,f)?[f]:[];var k=0,w=0,O=[];while(w<f.length){y.lastIndex=b?w:0;var I,C=s(y,b?f:f.slice(w));if(null===C||(I=d(c(y.lastIndex+(b?0:w)),f.length))===k)w=o(f,w,p);else{if(O.push(f.slice(k,w)),O.length===_)return O;for(var j=1;j<=C.length-1;j++)if(O.push(C[j]),O.length===_)return O;w=k=I}}return O.push(f.slice(k)),O}]}))},3829:function(t,e,n){},"3ca5":function(t,e,n){"use strict";n.r(e);var i=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"];e["default"]=i},"41c4":function(t,e,n){"use strict";var i=n("b89f"),a=n.n(i);a.a},"456d":function(t,e,n){var i=n("4bf8"),a=n("0d58");n("5eda")("keys",(function(){return function(t){return a(i(t))}}))},4761:function(t,e,n){"use strict";n.r(e),n.d(e,"getList",(function(){return a})),n.d(e,"save",(function(){return r})),n.d(e,"remove",(function(){return o}));var i=n("b775");function a(t){return Object(i["default"])({url:"/channel/list",method:"get",params:t})}function r(t){return Object(i["default"])({url:"/channel",method:"post",params:t})}function o(t){return Object(i["default"])({url:"/channel",method:"delete",params:{id:t}})}},"4ed8":function(t,e,n){"use strict";var i=n("3829"),a=n.n(i);a.a},5248:function(t,e,n){"use strict";n.r(e),n.d(e,"getList",(function(){return a})),n.d(e,"save",(function(){return r})),n.d(e,"remove",(function(){return o})),n.d(e,"get",(function(){return c}));var i=n("b775");function a(t){return Object(i["default"])({url:"/article/list",method:"get",params:t})}function r(t){return Object(i["default"])({url:"/article",method:"post",data:t})}function o(t){return Object(i["default"])({url:"/article",method:"delete",params:{id:t}})}function c(t){return Object(i["default"])({url:"/article",method:"get",params:{id:t}})}},"5dbc":function(t,e,n){var i=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var r,o=e.constructor;return o!==n&&"function"==typeof o&&(r=o.prototype)!==n.prototype&&i(r)&&a&&a(t,r),t}},"5eda":function(t,e,n){var i=n("5ca1"),a=n("8378"),r=n("79e5");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],o={};o[t]=e(n),i(i.S+i.F*r((function(){n(1)})),"Object",o)}},8256:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-container"},[n("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"el-icon-upload",size:"mini",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),t._v(" "),n("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("el-upload",{staticClass:"editor-slide-upload",attrs:{multiple:!0,"file-list":t.fileList,"show-file-list":!0,"on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload,headers:t.uploadHeaders,action:t.fileUrl,"list-type":"picture-card"}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},a=[],r=(n("ac6a"),n("456d"),n("fa7d")),o=n("5f87"),c={name:"EditorSlideUpload",props:{color:{type:String,default:"#1890ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[],fileUrl:"",uploadHeaders:{Authorization:""}}},created:function(){this.fileUrl=Object(r["getApiUrl"])()+"/file",this.uploadHeaders["Authorization"]=Object(o["getToken"])()},methods:{checkAllSuccess:function(){var t=this;return Object.keys(this.listObj).every((function(e){return t.listObj[e].hasSuccess}))},handleSubmit:function(){var t=this,e=Object.keys(this.listObj).map((function(e){return t.listObj[e]}));this.checkAllSuccess()?(this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,e){for(var n=e.uid,i=Object.keys(this.listObj),a=0,r=i.length;a<r;a++)if(this.listObj[i[a]].uid===n)return this.listObj[i[a]].url=this.fileUrl+"/download?idFile="+t.data.id,void(this.listObj[i[a]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,n=Object.keys(this.listObj),i=0,a=n.length;i<a;i++)if(this.listObj[n[i]].uid===e)return void delete this.listObj[n[i]]},beforeUpload:function(t){var e=this,n=window.URL||window.webkitURL,i=t.uid;return this.listObj[i]={},new Promise((function(a,r){var o=new Image;o.src=n.createObjectURL(t),o.onload=function(){e.listObj[i]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},a(!0)}))}}},s=c,l=(n("4ed8"),n("2877")),u=Object(l["a"])(s,i,a,!1,null,"f0ccb948",null);e["default"]=u.exports},"8b97":function(t,e,n){var i=n("d3f4"),a=n("cb7c"),r=function(t,e){if(a(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:r}},9093:function(t,e,n){var i=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,a)}},aa77:function(t,e,n){var i=n("5ca1"),a=n("be13"),r=n("79e5"),o=n("fdef"),c="["+o+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t,e,n){var a={},c=r((function(){return!!o[t]()||s[t]()!=s})),l=a[t]=c?e(f):o[t];n&&(a[n]=l),i(i.P+i.F*c,"String",a)},f=d.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=d},b89f:function(t,e,n){},c5f6:function(t,e,n){"use strict";var i=n("7726"),a=n("69a8"),r=n("2d95"),o=n("5dbc"),c=n("6a99"),s=n("79e5"),l=n("9093").f,u=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,h="Number",p=i[h],m=p,g=p.prototype,b=r(n("2aeb")(g))==h,v="trim"in String.prototype,y=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():f(e,3);var n,i,a,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:i=2,a=49;break;case 79:case 111:i=8,a=55;break;default:return+e}for(var o,s=e.slice(2),l=0,u=s.length;l<u;l++)if(o=s.charCodeAt(l),o<48||o>a)return NaN;return parseInt(s,i)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof p&&(b?s((function(){g.valueOf.call(n)})):r(n)!=h)?o(new m(y(e)),n,p):y(e)};for(var _,k=n("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)a(m,_=k[w])&&!a(p,_)&&d(p,_,u(m,_));p.prototype=g,g.constructor=p,n("2aba")(i,h,p)}},f09f:function(t,e,n){"use strict";n.r(e);var i=["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"];e["default"]=i},fa7d:function(t,e,n){"use strict";n.r(e),n.d(e,"getApiUrl",(function(){return a}));var i="http://ximyan.free.idcfengye.com/dev-api";function a(){return i}},fbd4:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"block"},[n("el-form",{ref:"form",attrs:{model:t.form}},[n("el-input",{ref:"content",attrs:{type:"hidden"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}}),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:t.save}},[t._v(t._s(t.$t("button.submit")))]),t._v(" "),n("el-button",{attrs:{icon:"el-icon-back",size:"mini"},nativeOn:{click:function(e){return t.back(e)}}},[t._v(t._s(t.$t("button.back")))])],1),t._v(" "),n("el-col",{attrs:{span:12}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:24}},[n("el-input",{staticStyle:{"font-size":"1.2rem",margin:".2rem 0rem"},attrs:{minlength:"1",placeholder:"文章标题"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1)],1),t._v(" "),n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:8}},[n("el-select",{attrs:{placeholder:"选择栏目"},model:{value:t.form.idChannel,callback:function(e){t.$set(t.form,"idChannel",e)},expression:"form.idChannel"}},t._l(t.options,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),n("el-col",{attrs:{span:16}},[n("el-input",{staticStyle:{"margin-bottom":".2rem"},attrs:{minlength:"1",placeholder:"作者"},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}})],1)],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[t.ifUpload?n("el-form-item",{attrs:{label:"题图"}},[n("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:t.uploadUrl,headers:t.uploadHeaders,"before-upload":t.handleBeforeUpload,"on-success":t.handleUploadSuccess}},[n("i",{staticClass:"el-icon-upload"}),t._v(" "),n("div",{staticClass:"el-upload__text"},[t._v("上传图片")])])],1):t._e(),t._v(" "),!0!==t.ifUpload?n("img",{staticStyle:{height:"8rem"},attrs:{src:t.articleImg}}):t._e(),t._v(" "),!0!==t.ifUpload?n("el-button",{attrs:{icon:"el-icon-edit"},nativeOn:{click:function(e){return t.uploadImg(e)}}},[t._v("修改题图")]):t._e()],1)],1),t._v(" "),n("br")],1),t._v(" "),n("div",{staticClass:"tinymce-container editor-container",class:{fullscreen:t.fullscreen}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}}),t._v(" "),n("div",{staticClass:"editor-custom-btn-container"},[n("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#1890ff"},on:{successCBK:t.imageSuccessCBK}})],1)])],1)])},a=[],r=(n("28a5"),n("ac6a"),n("c5f6"),n("8256")),o=n("5c96"),c=n("f09f"),s=n("3ca5"),l=n("5248"),u=n("4761"),d=n("fa7d"),f=n("5f87"),h={name:"Tinymce",components:{editorImage:r["default"]},props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:Number,required:!1,default:360}},data:function(){return{uploadUrl:"",uploadFileId:"",uploadHeaders:{Authorization:""},loadingInstance:{},form:{title:"",author:"",idChannel:"1",content:"",img:""},articleImg:"",ifUpload:!0,options:[],hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN"}}},computed:{language:function(){return this.languageTypeList[this.$store.getters.language]}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))},language:function(){var t=this;this.destroyTinymce(),this.$nextTick((function(){return t.initTinymce()}))}},mounted:function(){this.init(),this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;this.uploadUrl=Object(d["getApiUrl"])()+"/file",this.uploadHeaders["Authorization"]=Object(f["getToken"])();var e=this.$route.query.id;e&&Object(l["get"])(e).then((function(e){t.form=e.data,t.setContent(e.data.content),t.articleImg=t.uploadUrl+"/getImgStream?idFile="+e.data.img,t.ifUpload=!1})),Object(u["getList"])().then((function(e){t.options=e.data}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({value:"aaaaaa",language:this.language,selector:"#".concat(this.tinymceId),height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:s["default"],menubar:this.menubar,plugins:c["default"],end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0;var e=n.getContent();t.form.content=e}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))},save:function(){var t=this;this.$refs["form"].validate((function(e){if(!e)return!1;var n=t.form.content.split("%").join("%25");Object(l["save"])({id:t.form.id,title:t.form.title,author:t.form.author,idChannel:t.form.idChannel,content:n,img:t.form.img}).then((function(e){t.$message({message:t.$t("common.optionSuccess"),type:"success"}),t.back()}))}))},back:function(){this.$router.go(-1)},handleBeforeUpload:function(){if(""!==this.uploadFileId)return this.$message({message:this.$t("common.mustSelectOne"),type:"warning"}),!1;this.loadingInstance=o["Loading"].service({lock:!0,text:this.$t("common.uploading"),spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"})},handleUploadSuccess:function(t,e){this.loadingInstance.close(),2e4===t.code?this.form.img=t.data.id:this.$message({message:this.$t("common.uploadError"),type:"error"})},uploadImg:function(){this.ifUpload=!this.ifUpload}}},p=h,m=(n("41c4"),n("2877")),g=Object(m["a"])(p,i,a,!1,null,"2ff21208",null);e["default"]=g.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);