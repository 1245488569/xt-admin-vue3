import{_ as e}from"./index-307a927b.js";import{d as l,r as t,G as a,f as r,j as o,o as s,k as p,w as u,g as n,F as i,A as d,a0 as m,Z as c,V as b,l as h,i as f,t as y,m as g,a1 as v,Q as k,h as x}from"./index-fdc50b9e.js";import"./index-350ef589.js";import"./plugin-vueexport-helper-1b428a4d.js";const _=l({__name:"index",props:{options:{}},setup(e,{expose:l}){const x=e,_=t(null),V=t();return a((()=>{!function(){if(x.options&&x.options.length){const e={};x.options.forEach((l=>e[l.prop]=l.value)),_.value=k(e)}}()})),l({resetFields:function(){var e;null==(e=V.value)||e.resetFields()},validate:function(){return V.value.validate},getFormData:function(){return _.value}}),(e,l)=>{const t=r("el-form-item");return o(_)?(s(),p(o(v),m({key:0,ref_key:"form",ref:V,model:o(_),"validate-on-rule-change":!1},e.$attrs),{default:u((()=>[(s(!0),n(i,null,d(e.options,(l=>(s(),n(i,{key:l.prop},["slot"===l.type?(s(),p(t,m({key:0,prop:l.prop,label:l.label},l.fromItemOtherAttrs),{default:u((()=>[c(e.$slots,l.slot,{item:l,model:o(_)})])),_:2},1040,["prop","label"])):(s(),n(i,{key:1},[l.children&&l.children.length?h("",!0):(s(),p(t,m({key:0,prop:l.prop,label:l.label},l.fromItemOtherAttrs),{default:u((()=>[(s(),p(b(`el-${l.type}`),m(l.attrs,{modelValue:o(_)[l.prop],"onUpdate:modelValue":e=>o(_)[l.prop]=e}),null,16,["modelValue","onUpdate:modelValue"]))])),_:2},1040,["prop","label"])),l.children&&l.children.length?(s(),p(t,m({key:1,prop:l.prop,label:l.label},l.fromItemOtherAttrs),{default:u((()=>[(s(),p(b(`el-${l.type}`),m(l.attrs,{modelValue:o(_)[l.prop],"onUpdate:modelValue":e=>o(_)[l.prop]=e}),{default:u((()=>[(s(!0),n(i,null,d(l.children,((e,l)=>(s(),n(i,{key:l},[["radio","radio-button","checkbox","checkbox-button"].includes(e.type)?(s(),p(b(`el-${e.type}`),{key:0,label:e.label},{default:u((()=>[f(y(e.value),1)])),_:2},1032,["label"])):(s(),p(b(`el-${e.type}`),{key:1,label:e.label,value:e.value},null,8,["label","value"]))],64)))),128))])),_:2},1040,["modelValue","onUpdate:modelValue"]))])),_:2},1040,["prop","label"])):h("",!0)],64))],64)))),128)),g(t,null,{default:u((()=>[c(e.$slots,"action",{form:o(V),model:o(_)})])),_:3})])),_:3},16,["model"])):h("",!0)}}}),V=x("div",{class:"mb-3 text-2xl"}," 表单组件 ",-1),A=l({__name:"form",setup(l){const a=[{type:"input",value:"222",label:"用户名",prop:"username",fromItemOtherAttrs:{style:{width:"45%"},rules:[{required:!0,message:"用户名不能为空",trigger:"blur"},{min:2,max:6,message:"用户名在2-6位之间",trigger:"blur"}]},attrs:{style:{width:"400px"},placeholder:"请输入用户名",clearable:!0}},{type:"input",value:"",label:"密码",prop:"password",fromItemOtherAttrs:{style:{width:"45%"},rules:[{required:!0,message:"密码不能为空",trigger:"blur"},{min:6,max:15,message:"密码在6-15位之间",trigger:"blur"}]},attrs:{style:{width:"400px"},placeholder:"请输入密码",showPassword:!0,clearable:!0}},{type:"radio-group",value:"2",prop:"gender",label:"性别",fromItemOtherAttrs:{rules:[{required:!0,message:"性别不能为空",trigger:"change"}]},children:[{type:"radio",label:"1",value:"男"},{type:"radio",label:"2",value:"女"},{type:"radio",label:"3",value:"未知"}]},{type:"checkbox",value:!0,label:"多选框",prop:"checked",attrs:{label:"我是单多选框"}},{type:"checkbox-group",value:["1"],prop:"like",label:"爱好",fromItemOtherAttrs:{rules:[{required:!0,message:"爱好不能为空",trigger:"change"}]},children:[{type:"checkbox",label:"1",value:"足球"},{type:"checkbox",label:"2",value:"篮球"},{type:"checkbox",label:"3",value:"排球"}]},{type:"select",value:"",prop:"select",label:"下拉框",fromItemOtherAttrs:{rules:[{required:!0,message:"下拉框不能为空",trigger:"change"}]},children:[{type:"option",label:"足球",value:1},{type:"option",label:"篮球",value:2},{type:"option",label:"排球",value:3}],attrs:{clearable:!0,onChange:function(e){}}},{type:"slot",value:"",label:"插槽测试",prop:"slot1",slot:"slot1",fromItemOtherAttrs:{style:{width:"45%"}},attrs:{placeholder:"请选择",clearable:!0}}],n=t();function i(){n.value.resetFields()}const d=["a","b","c","d","e","f","g","h","i","j"],c=Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${d[l%10]}${l}`})));return(l,t)=>{const d=r("el-select-v2"),b=r("el-button"),h=_,y=e;return s(),p(y,null,{default:u((()=>[V,g(h,{ref_key:"formRef",ref:n,inline:"",options:a},{slot1:u((({item:e,model:l})=>[g(d,m({modelValue:l[e.prop],"onUpdate:modelValue":t=>l[e.prop]=t,options:o(c)},e.attrs),null,16,["modelValue","onUpdate:modelValue","options"])])),action:u((e=>[g(b,{type:"primary",onClick:l=>function(e){var l;null==(l=e.form)||l.validate((e=>{}))}(e)},{default:u((()=>[f(" 提交 ")])),_:2},1032,["onClick"]),g(b,{onClick:i},{default:u((()=>[f(" 重置 ")])),_:1})])),_:1},512)])),_:1})}}});export{A as default};
