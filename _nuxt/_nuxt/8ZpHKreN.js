import{e as M,m as x,u as A,q as S,o as s,c as p,b as d,w as u,n as v,h as a,s as k,T as y,a as c,t as L,_ as C,r as B,j as h,F as V,p as $,k as D,i as b,f as w,g as R,d as m}from"./CgYmUxGr.js";import{_ as z}from"./DAtCgWO-.js";import{D as f}from"./Bl5UU1Pq.js";const E={class:"container"},F=M({__name:"TheServiceItem",props:x({index:{},totalCount:{},icon:{},name:{}},{deviceType:{},deviceTypeModifiers:{}}),emits:["update:deviceType"],setup(o){const l=A(o,"deviceType"),t=o,r=S(()=>({transitionDelay:`${t.index*.2}s`})),i=S(()=>({transitionDelay:`${t.totalCount*.2}s`}));return(e,n)=>{const _=z;return s(),p("div",E,[d(y,{name:"slide-up-item",appear:""},{default:u(()=>[d(_,{src:e.icon,alt:e.name+" display",class:v({serviceIcon:!0,mobile:l.value==a(f).Mobile}),style:k(r.value),loading:"eager"},null,8,["src","alt","class","style"])]),_:1}),d(y,{name:"slide-up-name",appear:""},{default:u(()=>[c("p",{class:v({serviceName:!0,mobile:l.value==a(f).Mobile}),style:k(i.value)},L(e.name),7)]),_:1})])}}}),P=C(F,[["__scopeId","data-v-64061362"]]),j={class:"services"},q=M({__name:"TheServiceItemList",props:x({isVisible:{type:Boolean}},{deviceType:{},deviceTypeModifiers:{}}),emits:["update:deviceType"],setup(o){const l=A(o,"deviceType"),t=B([{displayText:"流程規劃",path:"/MINICRM.png"},{displayText:"訂單系統",path:"/order.png"},{displayText:"跨系統整合",path:"/integrate.png"},{displayText:"內部系統開發",path:"/內部系統管理開發.png"}]);return(r,i)=>(s(),p("div",j,[r.isVisible?(s(),h(D,{key:0,name:"slide-up-item"},{default:u(()=>[(s(!0),p(V,null,$(a(t),(e,n)=>(s(),h(P,{class:"service",key:n,icon:e.path,name:e.displayText,index:n,"total-count":a(t).length,deviceType:l.value},null,8,["icon","name","index","total-count","deviceType"]))),128))]),_:1})):b("",!0)]))}}),G=C(q,[["__scopeId","data-v-d5450e9a"]]),H={class:"container"},J={class:"item-container"},K=M({__name:"service",props:{deviceType:{},deviceTypeModifiers:{}},emits:x(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(o,{emit:l}){const t=A(o,"deviceType"),r=l,i=B(!1);let e=null,n=!1;const _=()=>{r("AnimationCompleted"),e&&(e(),e=null),n=!1},N=()=>new Promise(g=>{n?g():(i.value=!1,n=!0,e=g)}),I=()=>{r("AnimationStart")};return w(N),R(()=>{i.value=!0}),(g,T)=>(s(),p("div",H,[c("div",{class:v(["service-intro",{mobile:t.value==a(f).Mobile}])},[d(y,{name:"slide-up-title",appear:""},{default:u(()=>[a(i)?(s(),p("div",{key:0,class:v({title:!0,mobile:t.value==a(f).Mobile})},T[0]||(T[0]=[m(" 專屬客製化解決方案"),c("br",null,null,-1),m("全面提升效率與競爭力！")]),2)):b("",!0)]),_:1}),d(y,{name:"slide-up-description",onAfterAppear:_,onAfterLeave:_,onBeforeLeave:I,onBeforeEnter:I,appear:""},{default:u(()=>[a(i)?(s(),p("div",{key:0,class:v({description:!0,mobile:t.value==a(f).Mobile})},T[1]||(T[1]=[m(" 我們致力於為中小企業、新創企業以及需要高度客製化流程的企業，提供量身訂製的管理系統。"),c("br",null,null,-1),m(" 如軟體自動化流程規劃(RPA)、訂單系統、客戶關係管理、人事管理系統，亦或是各類的跨系統整合。"),c("br",null,null,-1),m(" 都能根據您的需求進行， 助您實現業務流程的自動化和數位化轉型。 ")]),2)):b("",!0)]),_:1})],2),c("div",J,[d(y,{name:"slide-close-items"},{default:u(()=>[a(i)?(s(),h(G,{key:0,isVisible:!0,deviceType:t.value},null,8,["deviceType"])):b("",!0)]),_:1})])]))}}),W=C(K,[["__scopeId","data-v-03f54f22"]]);export{W as default};
