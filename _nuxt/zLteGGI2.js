import{e as h,u as r,q as _,r as I,g as x,h as i,o as n,c,a as l,b as v,w as f,n as t,s as w,T as y,t as A,F as C,p as B,j as N,i as S,_ as k,m as P,f as V}from"./DKKPY444.js";import{_ as $}from"./B8TA9Kin.js";import{D as a}from"./Bl5UU1Pq.js";const z={class:"imageContainer"},F={class:"description"},j=h({__name:"TheProcessItem",props:{index:{},indexModifiers:{},description:{},descriptionModifiers:{},deviceType:{},deviceTypeModifiers:{},isArrow:{type:Boolean},isArrowModifiers:{},mobileImage:{},mobileImageModifiers:{},image:{},imageModifiers:{},title:{},titleModifiers:{}},emits:["update:index","update:description","update:deviceType","update:isArrow","update:mobileImage","update:image","update:title"],setup(s){const M=r(s,"index"),d=r(s,"description"),e=r(s,"deviceType"),u=r(s,"isArrow"),p=r(s,"mobileImage"),T=r(s,"image"),g=_(()=>e.value==a.Mobile?p.value:T.value),b=r(s,"title"),o=_(()=>({transitionDelay:`${M.value*.2}s`})),m=I(!1);return x(()=>{m.value=!0}),(R,G)=>{const D=$;return i(m)?(n(),c("div",{key:0,class:t({container:!0,mobile:e.value==i(a).Mobile})},[l("div",{class:t({cardContainer:!0,mobile:e.value==i(a).Mobile})},[l("div",z,[v(y,{name:"slide-up-item",class:t({mobile:e.value==i(a).Mobile}),appear:""},{default:f(()=>[v(D,{class:t({itemImage:!0,mobile:e.value==i(a).Mobile,arrowImage:u.value}),src:g.value,alt:b.value,style:w(o.value),loading:"eager"},null,8,["class","src","alt","style"])]),_:1},8,["class"])])],2),l("div",{class:t({cardContainer:!0,mobile:e.value==i(a).Mobile,arrowText:u.value})},[l("div",{class:t({textContainer:!0,mobile:e.value==i(a).Mobile})},[l("div",F,[v(y,{name:"slide-up-item",class:t({mobile:e.value==i(a).Mobile}),appear:""},{default:f(()=>[l("p",{class:"descriptionTitle",style:w(o.value)},A(b.value),5)]),_:1},8,["class"]),(n(!0),c(C,null,B(d.value,L=>(n(),N(y,{name:"slide-up-item",class:t({mobile:e.value==i(a).Mobile}),appear:""},{default:f(()=>[l("p",{class:"descriptionText",style:w(o.value)},A(L),5)]),_:2},1032,["class"]))),256))])],2)],2)],2)):S("",!0)}}}),q=k(j,[["__scopeId","data-v-72323565"]]),E=h({__name:"process",props:{deviceType:{},deviceTypeModifiers:{}},emits:P(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(s,{emit:M}){const d=I(!0),e=r(s,"deviceType"),u=I([{title:"釐清專案",description:["需求評估","初步報價"],image:"/釐清專案.png",isArrow:!1,mobileImage:"/釐清專案.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"確認合作",description:["項目細節討論","專案時間訂定","訂金支付"],image:"/確認合作.png",isArrow:!1,mobileImage:"/確認合作.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"專案進行",description:["執行項目說明","規格文件確認","階段交付專案","專案測試"],image:"/專案進行.png",isArrow:!1,mobileImage:"/專案進行.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"驗收結案",description:["專案驗收","尾款支付","專案保固"],image:"/驗收結案.png",isArrow:!1,mobileImage:"/驗收結案.png"}]);let p=!1;return V(()=>new Promise(g=>{p?g():(d.value=!1,p=!0)})),x(()=>{d.value=!0}),(g,b)=>(n(),c("div",{class:t(["container",{mobile:e.value==i(a).Mobile}])},[l("div",{class:t({flowchart:!0,mobile:e.value==i(a).Mobile})},[(n(!0),c(C,null,B(u.value,(o,m)=>(n(),c("div",{key:m},[v(q,{title:o.title,description:o.description,image:o.image,"mobile-image":o.mobileImage,isArrow:o.isArrow,index:m,deviceType:e.value},null,8,["title","description","image","mobile-image","isArrow","index","deviceType"])]))),128))],2)],2))}}),O=k(E,[["__scopeId","data-v-4f4faeb9"]]);export{O as default};
