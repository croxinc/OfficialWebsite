import{_ as N}from"./NWsnZOKw.js";import{e as h,u as r,q as _,r as I,g as x,c as m,i as S,h as i,o as n,n as a,a as l,b as v,T as f,w,s as y,t as A,F as C,p as B,j as P,_ as k,m as V,f as $}from"./D0o70G6M.js";import{D as t}from"./Bl5UU1Pq.js";const z={class:"imageContainer"},F={class:"description"},j=h({__name:"TheProcessItem",props:{index:{},indexModifiers:{},description:{},descriptionModifiers:{},deviceType:{},deviceTypeModifiers:{},isArrow:{type:Boolean},isArrowModifiers:{},mobileImage:{},mobileImageModifiers:{},image:{},imageModifiers:{},title:{},titleModifiers:{}},emits:["update:index","update:description","update:deviceType","update:isArrow","update:mobileImage","update:image","update:title"],setup(s){const M=r(s,"index"),d=r(s,"description"),e=r(s,"deviceType"),u=r(s,"isArrow"),p=r(s,"mobileImage"),T=r(s,"image"),g=_(()=>e.value==t.Mobile?p.value:T.value),b=r(s,"title"),o=_(()=>({transitionDelay:`${M.value*.2}s`})),c=I(!1);return x(()=>{c.value=!0}),(R,G)=>{const D=N;return i(c)?(n(),m("div",{key:0,class:a({container:!0,mobile:e.value==i(t).Mobile})},[l("div",{class:a({cardContainer:!0,mobile:e.value==i(t).Mobile})},[l("div",z,[v(f,{name:"slide-up-item",class:a({mobile:e.value==i(t).Mobile}),appear:""},{default:w(()=>[v(D,{class:a({itemImage:!0,mobile:e.value==i(t).Mobile,arrowImage:u.value}),src:g.value,alt:b.value,style:y(o.value)},null,8,["class","src","alt","style"])]),_:1},8,["class"])])],2),l("div",{class:a({cardContainer:!0,mobile:e.value==i(t).Mobile,arrowText:u.value})},[l("div",{class:a({textContainer:!0,mobile:e.value==i(t).Mobile})},[l("div",F,[v(f,{name:"slide-up-item",class:a({mobile:e.value==i(t).Mobile}),appear:""},{default:w(()=>[l("p",{class:"descriptionTitle",style:y(o.value)},A(b.value),5)]),_:1},8,["class"]),(n(!0),m(C,null,B(d.value,L=>(n(),P(f,{name:"slide-up-item",class:a({mobile:e.value==i(t).Mobile}),appear:""},{default:w(()=>[l("p",{class:"descriptionText",style:y(o.value)},A(L),5)]),_:2},1032,["class"]))),256))])],2)],2)],2)):S("",!0)}}}),q=k(j,[["__scopeId","data-v-013e442c"]]),E=h({__name:"process",props:{deviceType:{},deviceTypeModifiers:{}},emits:V(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(s,{emit:M}){const d=I(!0),e=r(s,"deviceType"),u=I([{title:"釐清專案",description:["需求評估","初步報價"],image:"/釐清專案.png",isArrow:!1,mobileImage:"/釐清專案.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"確認合作",description:["項目細節討論","專案時間訂定","訂金支付"],image:"/確認合作.png",isArrow:!1,mobileImage:"/確認合作.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"專案進行",description:["執行項目說明","規格文件確認","階段交付專案","專案測試"],image:"/專案進行.png",isArrow:!1,mobileImage:"/專案進行.png"},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png",mobileImage:"/down-arrow.png"},{title:"驗收結案",description:["專案驗收","尾款支付","專案保固"],image:"/驗收結案.png",isArrow:!1,mobileImage:"/驗收結案.png"}]);let p=!1;return $(()=>new Promise(g=>{p?g():(d.value=!1,p=!0)})),x(()=>{d.value=!0}),(g,b)=>(n(),m("div",{class:a(["container",{mobile:e.value==i(t).Mobile}])},[l("div",{class:a({flowchart:!0,mobile:e.value==i(t).Mobile})},[(n(!0),m(C,null,B(u.value,(o,c)=>(n(),m("div",{key:c},[v(q,{title:o.title,description:o.description,image:o.image,"mobile-image":o.mobileImage,isArrow:o.isArrow,index:c,deviceType:e.value},null,8,["title","description","image","mobile-image","isArrow","index","deviceType"])]))),128))],2)],2))}}),O=k(E,[["__scopeId","data-v-5fd54b93"]]);export{O as default};
