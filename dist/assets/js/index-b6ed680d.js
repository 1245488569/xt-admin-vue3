import{_ as e}from"./index-8f323ab0.js";import{d as s,r as a,f as o,o as t,g as l,N as i,j as n,m as p,w as r,l as d,B as c,M as u}from"./index-f8ace2db.js";import{_ as m}from"./plugin-vueexport-helper-1b428a4d.js";const f=m(s({name:"PageMain",__name:"index",props:{size:{default:20},collaspe:{type:Boolean,default:!1},height:{default:""}},setup(s){const m=a(s.collaspe);function f(){m.value=!1}return(s,a)=>{const _=e,g=o("el-icon");return t(),l("div",{class:c(["page-main",{"is-collaspe":n(m)}]),style:u({height:n(m)?s.height:""})},[i(s.$slots,"default",{},void 0,!0),n(m)?(t(),l("div",{key:0,class:"collaspe",title:"open",onClick:f},[p(g,{size:s.size},{default:r((()=>[p(_,{name:"ep:arrow-down"})])),_:1},8,["size"])])):d("",!0)],6)}}}),[["__scopeId","data-v-b98a3e03"]]);export{f as _};