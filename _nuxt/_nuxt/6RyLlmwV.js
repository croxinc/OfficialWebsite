import{e as I,m as h,q as j,u as k,o,c as n,a as _,b as p,w as y,n as s,h as t,s as B,t as N,i as x,T as b,j as D,_ as S,r as f,f as $,g as R,F as V,p as q}from"./DlbsTCqc.js";import{_ as z}from"./ilrgHc0Z.js";import{D as r}from"./Bl5UU1Pq.js";const E=window.setInterval,F={class:"description"},G=I({__name:"TheProjectItem",props:h({showContent:{type:Boolean},index:{},title:{},image:{}},{deviceType:{},deviceTypeModifiers:{}}),emits:h(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(c,{emit:w}){const e=c,l=j(()=>({transitionDelay:`${e.index*.2}s`})),i=k(c,"deviceType");return(a,m)=>{const d=z;return o(),n("div",{class:s({container:!0,mobile:i.value==t(r).Mobile})},[_("div",F,[p(b,{name:"slide-up-item",appear:""},{default:y(()=>[e.showContent?(o(),n("p",{key:0,class:s(["description-title",{mobile:i.value==t(r).Mobile}]),style:B(l.value)},N(e.title),7)):x("",!0)]),_:1})]),_("div",{class:s({imageContainer:!0,mobile:i.value==t(r).Mobile})},[p(b,{name:"slide-up-item",appear:""},{default:y(()=>[e.showContent?(o(),D(d,{key:0,class:s(["item-image",{mobile:i.value==t(r).Mobile}]),src:e.image,alt:e.title,style:B(l.value),loading:"eager"},null,8,["class","src","alt","style"])):x("",!0)]),_:1})],2)],2)}}}),H=S(G,[["__scopeId","data-v-c7181141"]]),J={class:"container"},K={key:0,class:"overlay-content",style:{height:"0px"}},O=I({__name:"project",props:{deviceType:{},deviceTypeModifiers:{}},emits:h(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(c,{emit:w}){const e=f(!1),l=w,i=k(c,"deviceType"),a=f(0),m=f([{title:"後端串接展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/api.gif",index:0},{title:"訂單管理",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/ordering.gif",index:1},{title:"跨系統整合展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/qs.gif",index:2},{title:"各類工具製作",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/tool-demo.gif",index:3},{title:"RPA流程整合",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/RPA.png",index:4},{title:"即時銷售監控",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/monitorSchedule.png",index:5}]),d=j(()=>m.value.slice(a.value,a.value+2)),P=()=>{E(()=>{a.value<m.value.length-1&&(a.value=(a.value+2)%m.value.length)},5e3)};let u=null,v=!1;const T=()=>{l("AnimationCompleted"),u&&(u(),u=null),v=!1},L=()=>new Promise(g=>{v?g():(e.value=!1,v=!0,u=g)}),C=()=>{l("AnimationStart")};return $(L),R(()=>{e.value=!0,P()}),(g,Q)=>(o(),n("div",J,[_("div",{class:s({flowchart:!0,mobile:i.value==t(r).Mobile})},[(o(!0),n(V,null,q(t(d),(A,M)=>(o(),n("div",{key:M,class:s({stepContainer:!0,mobile:i.value==t(r).Mobile})},[p(H,{showContent:t(e),title:A.title,image:A.image,index:M,deviceType:i.value},null,8,["showContent","title","image","index","deviceType"])],2))),128))],2),p(b,{name:"overlay-effects",onAfterAppear:T,onAfterLeave:T,onBeforeLeave:C,onBeforeEnter:C,appear:""},{default:y(()=>[t(e)?(o(),n("div",K)):x("",!0)]),_:1})]))}}),Y=S(O,[["__scopeId","data-v-c47f68a4"]]);export{Y as default};
