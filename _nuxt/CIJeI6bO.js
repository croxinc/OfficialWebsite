import{e as I,m as h,q as j,u as k,c as n,o,n as s,h as t,a as _,b as p,T as y,w as x,i as b,s as B,t as N,j as D,_ as S,r as g,f as $,g as R,F as V,p as q}from"./CW90CnB4.js";import{_ as z}from"./SiUfW_KF.js";import{D as r}from"./Bl5UU1Pq.js";const E={class:"description"},F=I({__name:"TheProjectItem",props:h({showContent:{type:Boolean},index:{},title:{},image:{}},{deviceType:{},deviceTypeModifiers:{}}),emits:h(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(c,{emit:w}){const e=c,l=j(()=>({transitionDelay:`${e.index*.2}s`})),i=k(c,"deviceType");return(a,m)=>{const d=z;return o(),n("div",{class:s({container:!0,mobile:i.value==t(r).Mobile})},[_("div",E,[p(y,{name:"slide-up-item",appear:""},{default:x(()=>[e.showContent?(o(),n("p",{key:0,class:s(["description-title",{mobile:i.value==t(r).Mobile}]),style:B(l.value)},N(e.title),7)):b("",!0)]),_:1})]),_("div",{class:s({imageContainer:!0,mobile:i.value==t(r).Mobile})},[p(y,{name:"slide-up-item",appear:""},{default:x(()=>[e.showContent?(o(),D(d,{key:0,class:s(["item-image",{mobile:i.value==t(r).Mobile}]),src:e.image,alt:e.title,style:B(l.value),loading:"eager"},null,8,["class","src","alt","style"])):b("",!0)]),_:1})],2)],2)}}}),G=S(F,[["__scopeId","data-v-f7471d14"]]),H=window.setInterval,J={class:"container"},K={key:0,class:"overlay-content",style:{height:"0px"}},O=I({__name:"project",props:{deviceType:{},deviceTypeModifiers:{}},emits:h(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(c,{emit:w}){const e=g(!1),l=w,i=k(c,"deviceType"),a=g(0),m=g([{title:"後端串接展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/api.gif",index:0},{title:"訂單管理",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/ordering.gif",index:1},{title:"跨系統整合展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/qs.gif",index:2},{title:"各類工具製作",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/tool-demo.gif",index:3},{title:"RPA流程整合",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/RPA.png",index:4},{title:"即時銷售監控",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/monitorSchedule.png",index:5}]),d=j(()=>m.value.slice(a.value,a.value+2)),P=()=>{H(()=>{a.value<m.value.length-1&&(a.value=(a.value+2)%m.value.length)},5e3)};let u=null,v=!1;const T=()=>{l("AnimationCompleted"),u&&(u(),u=null),v=!1},L=()=>new Promise(f=>{v?f():(e.value=!1,v=!0,u=f)}),C=()=>{l("AnimationStart")};return $(L),R(()=>{e.value=!0,P()}),(f,Q)=>(o(),n("div",J,[_("div",{class:s({flowchart:!0,mobile:i.value==t(r).Mobile})},[(o(!0),n(V,null,q(t(d),(A,M)=>(o(),n("div",{key:M,class:s({stepContainer:!0,mobile:i.value==t(r).Mobile})},[p(G,{showContent:t(e),title:A.title,image:A.image,index:M,deviceType:i.value},null,8,["showContent","title","image","index","deviceType"])],2))),128))],2),p(y,{name:"overlay-effects",onAfterAppear:T,onAfterLeave:T,onBeforeLeave:C,onBeforeEnter:C,appear:""},{default:x(()=>[t(e)?(o(),n("div",K)):b("",!0)]),_:1})]))}}),Y=S(O,[["__scopeId","data-v-5991c92f"]]);export{Y as default};
