import{d as e,v as o,f as a,o as l,k as t,w as n,t as s,i as u,l as d,g as c,Z as i,a0 as f,j as m,N as r}from"./index-JO79l6Za.js";const p={key:0},g=e({name:"XtDialog",__name:"index",props:{modelValue:{type:Boolean},loading:{type:Boolean,default:!1},showCancel:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},cancelButtonText:{default:"取消"},confirmButtonText:{default:"确定"}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:g}){const y=e,x=g,B=o({get:()=>y.modelValue,set(e){x("update:modelValue",e)}});function C(){x("cancel")}function k(){x("confirm")}return(e,o)=>{const g=a("el-button"),y=a("el-dialog");return l(),t(y,f({modelValue:m(B),"onUpdate:modelValue":o[0]||(o[0]=e=>r(B)?B.value=e:null),class:"xt-base-dialog","close-on-click-modal":!1,"close-on-press-escape":!1},e.$attrs),{footer:n((()=>[i(e.$slots,"footer",{},(()=>[e.showCancel||e.showConfirm?(l(),c("span",p,[e.showCancel?(l(),t(g,{key:0,onClick:C},{default:n((()=>[u(s(e.cancelButtonText),1)])),_:1})):d("",!0),e.showConfirm?(l(),t(g,{key:1,type:"primary",loading:e.loading,onClick:k},{default:n((()=>[u(s(e.confirmButtonText),1)])),_:1},8,["loading"])):d("",!0)])):d("",!0)]))])),default:n((()=>[i(e.$slots,"default")])),_:3},16,["modelValue"])}}});export{g as _};
