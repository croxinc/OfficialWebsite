import{d as y,s as A,f as t,c as a,e as r,b as c,w as d,q as w,t as j,g as p,T as _,_ as b,r as u,o as k,a as S,F as L,n as $}from"./index-aE5XdDcC.js";const N={class:"container"},T={class:"text-container"},V={class:"description"},q={class:"image-container"},D=["src","alt"],E=y({__name:"TheProjectItemComp",props:{showContent:{type:Boolean},index:{},title:{},image:{}},emits:["AnimationCompleted","AnimationStart"],setup(g,{emit:f}){const e=g,n=A(()=>({transitionDelay:`${e.index*.2}s`}));return(o,s)=>(t(),a("div",N,[r("div",T,[r("div",V,[c(_,{name:"slide-up-item",appear:""},{default:d(()=>[e.showContent?(t(),a("p",{key:0,class:"description-title",style:w(n.value)},j(e.title),5)):p("",!0)]),_:1})])]),r("div",q,[c(_,{name:"slide-up-item",appear:""},{default:d(()=>[e.showContent?(t(),a("img",{key:0,class:"item-image",src:e.image,alt:e.title,style:w(n.value)},null,12,D)):p("",!0)]),_:1})])]))}}),F=b(E,[["__scopeId","data-v-72ea195c"]]),z={class:"container"},M={class:"flowchart"},R={key:0,class:"overlay-content"},G=y({__name:"ProjectPage",emits:["AnimationCompleted","AnimationStart"],setup(g,{emit:f}){const e=u(!0),n=f,o=u(0),s=u([{title:"後端串接展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/api.gif",index:0},{title:"訂單管理",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/ordering.gif",index:1},{title:"跨系統集成展示",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/qs.gif",index:2},{title:"各類工具製作",image:"https://raw.githubusercontent.com/croxinc/portfolio-images/master/tool-demo.gif",index:3}]),B=A(()=>s.value.slice(o.value,o.value+2)),P=()=>{setInterval(()=>{o.value<s.value.length-1&&(o.value=(o.value+2)%s.value.length)},5e3)};let i=null,l=!1;const v=()=>{n("AnimationCompleted"),i&&(i(),i=null),l=!1},I=()=>new Promise(m=>{l?m():(e.value=!1,l=!0,i=m)}),h=()=>{n("AnimationStart")};return k(I),S(()=>{P()}),(m,H)=>(t(),a("div",z,[r("div",M,[(t(!0),a(L,null,$(B.value,(x,C)=>(t(),a("div",{key:C,class:"step-container"},[c(F,{showContent:e.value,title:x.title,image:x.image,index:C},null,8,["showContent","title","image","index"])]))),128))]),c(_,{name:"overlay-effects",onAfterAppear:v,onAfterLeave:v,onBeforeLeave:h,onBeforeEnter:h,appear:""},{default:d(()=>[e.value?(t(),a("div",R)):p("",!0)]),_:1})]))}}),K=b(G,[["__scopeId","data-v-ae7b8abc"]]);export{K as default};
