import{d as e,r as t,z as l,f as a,o,k as n,j as i,a as s,G as r,v as d,a2 as u,g as c,Z as p,l as g,m,w as f,N as b,F as h,A as w,i as x,t as v,h as k,a3 as y,a0 as S,J as _,B as C,M as z,a4 as j,a5 as B}from"./index-08899ed8.js";import{_ as D}from"./index-bfcf3b6e.js";import{_ as $}from"./plugin-vueexport-helper-1b428a4d.js";import{_ as N}from"./index-40f92fd0.js";const T=e({__name:"index",props:{pageObject:{}},emits:["pageChange"],setup(e,{emit:s}){const r=e,d=t({pageNumber:1,pageSize:10,total:0,hideOnSinglePage:!1,background:!0,small:!1,disabled:!1,pageSizes:[10,20,50,60,100],layout:"total, sizes, prev, pager, next, jumper"});function u(e){d.value.pageSize=e,s("pageChange",{pageNumber:d.value.pageNumber,pageSize:e})}function c(e){d.value.pageNumber=e,s("pageChange",{pageNumber:e,pageSize:d.value.pageSize})}return l((()=>r.pageObject),(e=>{Object.assign(d.value,e)}),{immediate:!0,deep:!0}),(e,t)=>{const l=a("el-pagination");return o(),n(l,{"current-page":i(d).pageNumber,"onUpdate:currentPage":t[0]||(t[0]=e=>i(d).pageNumber=e),"page-size":i(d).pageSize,"onUpdate:pageSize":t[1]||(t[1]=e=>i(d).pageSize=e),"page-sizes":i(d).pageSizes,small:i(d).small,disabled:i(d).disabled,background:i(d).background,layout:i(d).layout,total:i(d).total,"prev-text":"上一页","next-text":"下一页",onSizeChange:u,onCurrentChange:c},null,8,["current-page","page-size","page-sizes","small","disabled","background","layout","total"])}}}),A={class:"data-grid"},G={key:0,class:"px-2 data-grid-top"},O={key:0,class:"top-action-bar"},R={key:1,class:"top-setting"},W=["onClick"],F={key:2},I={key:0},L={key:0,class:"data-grid-bottom-right"},P=$(e({name:"XtTable",__name:"index",props:{data:{},customConfig:{default:()=>({})},pageObject:{default:()=>({})},paginationAlign:{default:"right"}},emits:["pageChange","singleSelect","multipleSelect"],setup(e,{expose:l,emit:j}){const B=e,$=s({showDataGridTop:!0,showDataGridTopRight:!0,showDataGridTopLeft:!0,showDataGridBottom:!0,showPagination:!0,showSingleSelection:!1,showIndex:!0,showMultipleSelection:!1,showOperation:!0,indexAlignFixed:"left",operationAlignFixed:"right",operationAlign:"center",align:"center",selectionWidth:40,indexWidth:60,operationWidth:200,columns:[],rowButtons:[],selectable:()=>!0,combineBtnLink:!1});r((()=>{Object.assign($,B.customConfig),P.value=$.columns.filter((e=>!e.deleted)),P.value.forEach((e=>{!1!==e.show&&N.value.push(e.prop)}))}));const N=t([]),P=t([]);const V=t(null),U=t(-1);function E(e){$.showSingleSelection&&(U.value=e.index),j("singleSelect",e)}const J=d((()=>$.rowButtons&&$.rowButtons.length?$.rowButtons.filter((e=>!e.putInCombineBox)):[])),M=d((()=>$.rowButtons&&$.rowButtons.length?$.rowButtons.filter((e=>e.putInCombineBox)):[]));let H=[];function X(e){j("multipleSelect",e)}u((()=>{H=[]}));const Z=d((()=>{let e="";switch(B.paginationAlign){case"left":e="flex-start";break;case"center":e="center";break;default:e="flex-end"}return e}));function q(e){j("pageChange",JSON.parse(JSON.stringify(e)))}return l({clearSelection:function(){var e;null==(e=V.value)||e.clearSelection()},toggleRowSelection:function(e,t){var l;null==(l=V.value)||l.toggleRowSelection(e,t)},toggleAllSelection:function(){var e;null==(e=V.value)||e.toggleAllSelection()},toggleRowExpansion:function(e,t){var l;null==(l=V.value)||l.toggleRowExpansion(e,t)},setCurrentRow:function(e){var t;null==(t=V.value)||t.setCurrentRow(e)},clearSort:function(){var e;null==(e=V.value)||e.clearSort()},clearFilter:function(e){var t;null==(t=V.value)||t.clearFilter(e)},doLayout:function(){var e;null==(e=V.value)||e.doLayout()},sort:function(e,t){var l;null==(l=V.value)||l.sort(e,t)}}),(e,t)=>{const l=D,s=a("el-checkbox"),r=a("el-checkbox-group"),d=a("el-popover"),u=a("el-radio"),j=a("el-table-column"),B=a("el-button"),K=a("el-dropdown-item"),Q=a("el-dropdown-menu"),Y=a("el-dropdown"),ee=a("el-table"),te=T;return o(),c("div",A,[i($).showDataGridTop?(o(),c("div",G,[p(e.$slots,"top",{},(()=>[i($).showDataGridTopLeft?(o(),c("div",O,[p(e.$slots,"top-left",{},void 0,!0)])):g("",!0),i($).showDataGridTopRight?(o(),c("div",R,[p(e.$slots,"top-right",{},(()=>[m(d,{placement:"bottom-end",trigger:"click"},{reference:f((()=>[m(l,{name:"ep:operation",class:"cursor-pointer text-xl"})])),default:f((()=>[m(r,{modelValue:i(N),"onUpdate:modelValue":t[0]||(t[0]=e=>b(N)?N.value=e:null),class:"filter-column"},{default:f((()=>[(o(!0),c(h,null,w(i(P),((e,t)=>(o(),n(s,{key:t,label:e.prop},{default:f((()=>[x(v(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})]),!0)])):g("",!0)]),!0)])):g("",!0),k("div",{class:C(["data-grid-table",i($).showDataGridTop?"mt-2":""])},[m(ee,S({ref_key:"dataGridRef",ref:V,data:e.data,"highlight-current-row":"",border:"",class:"xt-table"},e.$attrs,{onCurrentChange:E,onSelectionChange:X}),{default:f((()=>[i($).showSingleSelection?(o(),n(j,{key:0,width:i($).selectionWidth,align:i($).align},{default:f((e=>[m(u,{modelValue:i(U),"onUpdate:modelValue":t[1]||(t[1]=e=>b(U)?U.value=e:null),label:e.$index},null,8,["modelValue","label"])])),_:1},8,["width","align"])):g("",!0),i($).showMultipleSelection?(o(),n(j,{key:1,type:"selection",width:i($).selectionWidth,align:i($).align,selectable:i($).selectable},null,8,["width","align","selectable"])):g("",!0),i($).showIndex?(o(),n(j,{key:2,fixed:i($).indexAlignFixed,type:"index",width:i($).indexWidth,label:"序号",align:i($).align},null,8,["fixed","width","align"])):g("",!0),(o(!0),c(h,null,w(i(P),((t,l)=>(o(),c(h,{key:l},[i(N).includes(t.prop)?(o(),n(j,{key:0,align:t.align,width:t.width,"min-width":t.minWidth,label:t.label,sortable:t.sortable?!t.headerSlot:t.sortable,prop:t.prop,"show-overflow-tooltip":""},y({default:f((l=>[t.slot?p(e.$slots,t.slot,{key:0,row:l.row,prop:t.prop,column:l.column,index:l.$index},void 0,!0):t.click&&"function"==typeof t.click?p(e.$slots,"default",{key:1},(()=>[k("span",{class:"cursor-pointer text-[var(--el-color-primary)]",onClick:e=>t.click(l.row,l.$index)},v(0===l.row[t.prop]?0:l.row[t.prop]||"--"),9,W)]),!0):(o(),c("span",F,v(0===l.row[t.prop]?0:l.row[t.prop]||"--"),1))])),_:2},[t.headerSlot?{name:"header",fn:f((({column:l,$index:a})=>[p(e.$slots,t.headerSlot,{column:l,index:a},void 0,!0)])),key:"0"}:void 0]),1032,["align","width","min-width","label","sortable","prop"])):g("",!0)],64)))),128)),i(J).length||i(M).length?(o(),n(j,{key:3,fixed:i($).operationAlignFixed,width:i($).operationWidth,align:i($).operationAlign,label:"操作"},{default:f((e=>[(o(!0),c(h,null,w(i(J),((t,l)=>(o(),c(h,{key:l},["function"!=typeof t.isShow||t.isShow(e.row)?(o(),n(B,S({key:0,disabled:"function"==typeof t.isDisabled&&t.isDisabled(e.row),title:"function"==typeof t.showTitle?t.showTitle(e.row):""},t.attrs,{onClick:l=>t.click(e.row,e.$index)}),{default:f((()=>[t.onlyIcon?g("",!0):(o(),c("span",I,v(t.name),1))])),_:2},1040,["disabled","title","onClick"])):g("",!0)],64)))),128)),i(M).length?(o(),n(Y,{key:0,ref:"combineBoxDropdownRef","hide-on-click":!0,class:"combine-box-dropdown",trigger:"click",placement:"bottom-start"},{dropdown:f((()=>[m(Q,{class:"combine-box-dropdown-menu"},{default:f((()=>[(o(!0),c(h,null,w(i(M),((t,l)=>(o(),n(K,S({key:l,title:"function"==typeof t.showTitle?t.showTitle(e.row):"",disabled:"function"==typeof t.isDisabled&&t.isDisabled(e.row)},t.attrs,{onClick:_((l=>function(e,t,l){if(M.value.length){let a=!1;if("function"==typeof e.isDisabled&&(a=e.isDisabled(t)||!1),a)return void H[l].show();e.click(t,l)}}(t,e.row,e.$index)),["stop"])}),{default:f((()=>[x(v(t.name),1)])),_:2},1040,["title","disabled","onClick"])))),128))])),_:2},1024)])),default:f((()=>[m(B,{link:i($).combineBtnLink,type:"primary",plain:""},{default:f((()=>[x(" 更多 ")])),_:1},8,["link"])])),_:2},1536)):g("",!0)])),_:1},8,["fixed","width","align"])):g("",!0)])),_:3},16,["data"])],2),i($).showDataGridBottom?(o(),c("div",{key:1,class:"flex mt-2 px-4 data-grid-bottom",style:z({justifyContent:i(Z)})},[p(e.$slots,"bottom",{},(()=>[i($).showPagination?(o(),c("div",L,[p(e.$slots,"bottom-left",{},(()=>[m(te,{"page-object":e.pageObject,onPageChange:q},null,8,["page-object"])]),!0)])):g("",!0)]),!0)],4)):g("",!0)])}}}),[["__scopeId","data-v-3e5fe2e1"]]),V=k("div",{class:"mb-3 text-2xl"}," 表格封装-以配置项驱动的表格 ",-1),U=k("div",null," 具体配置请在项目中查看 ",-1),E={class:"flex items-center justify-center"},J={class:"flex items-center justify-center"},M={class:"ml-3"},H=e({__name:"table",setup(e){const l=s({columns:[{label:"日期",prop:"date",align:"center",sortable:!1,slot:"date",headerSlot:"dateHeader"},{label:"姓名",prop:"name",align:"center",sortable:!1,click:e=>{j.success("点击了姓名")}},{label:"地址",prop:"address",align:"center",sortable:!1}],rowButtons:[{name:"查看",click:e=>{},attr:{type:"primary"}},{name:"添加",click:e=>{},putInCombineBox:!0}]}),n=t([]),d=s({total:0,pageSize:10,pageNumber:1});function u(){B({current:d.pageNumber-1,pageSize:d.pageSize}).then((e=>{n.value=e.result.rows,d.total=e.result.total}))}function p(e){d.pageSize=e.pageSize,d.pageNumber=e.pageNumber,u()}return r((()=>{u()})),(e,t)=>{const s=N,r=a("el-button"),u=D,g=a("el-icon"),b=P;return o(),c(h,null,[m(s,null,{default:f((()=>[V,U])),_:1}),m(s,null,{default:f((()=>[m(b,{data:i(n),"custom-config":i(l),"page-object":i(d),onPageChange:p},{"top-left":f((()=>[k("div",null,[m(r,{type:"primary"},{default:f((()=>[x(" 我是自定义内容 ")])),_:1})])])),dateHeader:f((({column:e,index:t})=>[k("div",E,[m(g,{size:15},{default:f((()=>[m(u,{name:"ep:alarm-clock"})])),_:1}),x(" "+v(t)+"-"+v(e.label)+" 自定义表头 ",1)])])),date:f((({row:e})=>[k("div",J,[m(g,{size:20},{default:f((()=>[m(u,{name:"ep:alarm-clock"})])),_:1}),k("span",M,v(e.date)+"-自定义内容",1)])])),_:1},8,["data","custom-config","page-object"])])),_:1})],64)}}});export{H as default};
