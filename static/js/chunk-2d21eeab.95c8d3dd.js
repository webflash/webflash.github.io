(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eeab"],{d834:function(s,e,t){"use strict";t.r(e);t("7f7f");var r=t("c24f");e["default"]={data:function(){return{form:{oldPassword:"",password:"",rePassword:""},activeName:"updatePwd",user:{}}},computed:{rules:function(){return{password:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:5,max:100,message:"密码长度不能小于5",trigger:"blur"}]}}},mounted:function(){this.init()},methods:{init:function(){this.user=this.$store.state.user.profile},handleClick:function(s,e){this.$router.push({path:"/account/"+s.name})},updatePwd:function(){var s=this;this.$refs["form"].validate((function(e){if(!e)return!1;Object(r["updatePwd"])({oldPassword:s.form.oldPassword,password:s.form.password,rePassword:s.form.rePassword}).then((function(e){s.$message({message:"密码修改成功",type:"success"}),s.$store.dispatch("user/logout");var t=s;setTimeout((function(){t.$router.push("/login")}),1e3)})).catch((function(s){}))}))}}}}}]);