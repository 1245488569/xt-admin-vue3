import{_ as a}from"./index-eAyt8zx4.js";import{d as s,o as e,f as t,i as n,ao as l,ap as o,j as r,w as p,l as u,h as d,g as i,q as m}from"./index-CCR-krXi.js";/* empty css                  */import{_ as x}from"./plugin-vueexport-helper-BCo6x5W8.js";import"./index-BumZ7-TY.js";const c=s({name:"Auth",__name:"index",props:{value:{}},setup:a=>(a,s)=>(e(),t("div",null,[n(l)().auth(a.value)?o(a.$slots,"default",{key:0}):o(a.$slots,"no-auth",{key:1})]))}),g={},f=i("div",{class:"mb-2"},[d(" 你可以先用 "),i("span",{class:"mx-1 text-orange-400"},"账号：admin"),i("span",{class:"mx-1 text-orange-400"},"密码：123456"),d(" 登录，然后你可以看到"),i("span",{class:"text-orange-400"},"列表菜单"),d("中有"),i("span",{class:"text-orange-400"},"两个菜单（用户和商品）"),d("，以及这里有个有权限的按钮 ")],-1),v=i("div",{class:"mb-2"},[d(" 然后你在用 "),i("span",{class:"mx-1 text-orange-400"},"账号：test"),i("span",{class:"mx-1 text-orange-400"},"密码：123456"),d(" 登录，然后你可以看到"),i("span",{class:"text-orange-400"},"列表菜单"),d("只有"),i("span",{class:"text-orange-400"},"一个菜单（商品）"),d("，以及这里有个无权限的按钮 ")],-1),_=i("div",{class:"mb-2"},[i("span",{class:"text-orange-400"},"在登录界面点击快速登录，更加方便快捷哟")],-1),b=i("div",{class:"mb-2"},[i("span",{class:"text-orange-400"},"点击右上角的小头像，会有退出功能")],-1);const h=x(g,[["render",function(s,t){const n=m,l=c,o=a;return e(),r(o,null,{default:p((()=>[f,v,_,b,u(l,{value:"user.add"},{"no-auth":p((()=>[u(n,{type:"primary",disabled:""},{default:p((()=>[d(" 没权限 ")])),_:1})])),default:p((()=>[u(n,{type:"primary"},{default:p((()=>[d(" 有权限 ")])),_:1})])),_:1})])),_:1})}]]);export{h as default};