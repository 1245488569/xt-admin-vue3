import{d as e,v as o,f as a,o as l,k as t,w as n,Z as s,g as u,i as d,t as c,l as i,a0 as f,j as m,N as r}from"./index-fdc50b9e.js";const p={key:0},g=e({name:"XtDialog",__name:"index",props:{modelValue:{type:Boolean},loading:{type:Boolean,default:!1},showCancel:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},cancelButtonText:{default:"取消"},confirmButtonText:{default:"确定"}},emits:["update:modelValue","cancel","confirm"],setup(e,{emit:g}){const y=e,x=o({get:()=>y.modelValue,set(e){g("update:modelValue",e)}});function B(){g("cancel")}function C(){g("confirm")}return(e,o)=>{const g=a("el-button"),y=a("el-dialog");return l(),t(y,f({modelValue:m(x),"onUpdate:modelValue":o[0]||(o[0]=e=>r(x)?x.value=e:null),class:"xt-base-dialog","close-on-click-modal":!1,"close-on-press-escape":!1},e.$attrs),{footer:n((()=>[s(e.$slots,"footer",{},(()=>[e.showCancel||e.showConfirm?(l(),u("span",p,[e.showCancel?(l(),t(g,{key:0,onClick:B},{default:n((()=>[d(c(e.cancelButtonText),1)])),_:1})):i("",!0),e.showConfirm?(l(),t(g,{key:1,type:"primary",loading:e.loading,onClick:C},{default:n((()=>[d(c(e.confirmButtonText),1)])),_:1},8,["loading"])):i("",!0)])):i("",!0)]))])),default:n((()=>[s(e.$slots,"default")])),_:3},16,["modelValue"])}}});export{g as _};
