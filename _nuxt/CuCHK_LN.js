import{e as k,u as l,s as $,r as h,g as L,h as a,o as s,c,a as i,b as v,w as y,n as d,q as b,T as _,t as I,F as D,p as N,j as E,i as M,_ as S,m as P,f as V}from"./JXgNvwjy.js";import{_ as z}from"./BSxSxxXZ.js";import{D as u}from"./Bl5UU1Pq.js";const F={class:"imageContainer"},j={class:"description"},q=k({__name:"TheProcessItem",props:{index:{},indexModifiers:{},description:{},descriptionModifiers:{},deviceType:{},deviceTypeModifiers:{},isArrow:{type:Boolean},isArrowModifiers:{},image:{},imageModifiers:{},title:{},titleModifiers:{}},emits:["update:index","update:description","update:deviceType","update:isArrow","update:image","update:title"],setup(e){const w=l(e,"index"),m=l(e,"description"),t=l(e,"deviceType"),p=l(e,"isArrow"),T=l(e,"image"),o=l(e,"title"),r=$(()=>({transitionDelay:`${w.value*.2}s`})),n=h(!1);return L(()=>{n.value=!0}),(x,f)=>{const g=z;return a(n)?(s(),c("div",{key:0,class:d({container:!0,mobile:t.value==a(u).Mobile})},[i("div",{class:d({cardContainer:!0,mobile:t.value==a(u).Mobile})},[i("div",F,[v(_,{name:"slide-up-item",appear:""},{default:y(()=>[v(g,{class:d({itemImage:!0,mobile:t.value==a(u).Mobile,arrowImage:p.value}),src:T.value,alt:o.value,style:b(r.value),loading:"eager"},null,8,["class","src","alt","style"])]),_:1})])],2),i("div",{class:d({cardContainer:!0,mobile:t.value==a(u).Mobile,arrowText:p.value})},[i("div",{class:d({textContainer:!0,mobile:t.value==a(u).Mobile})},[i("div",j,[v(_,{name:"slide-up-item",appear:""},{default:y(()=>[i("p",{class:"descriptionTitle",style:b(r.value)},I(o.value),5)]),_:1}),(s(!0),c(D,null,N(m.value,C=>(s(),E(_,{name:"slide-up-item",appear:""},{default:y(()=>[i("p",{class:"descriptionText",style:b(r.value)},I(C),5)]),_:2},1024))),256))])],2)],2)],2)):M("",!0)}}}),R=S(q,[["__scopeId","data-v-24b3ca87"]]),G={class:"container"},H={key:0,class:"overlay-content"},J={key:0,class:"overlay"},K=k({__name:"process",props:{deviceType:{},deviceTypeModifiers:{}},emits:P(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(e,{emit:w}){const m=h(!0),t=w,p=l(e,"deviceType"),T=h([{title:"釐清專案",description:["需求評估","初步報價"],image:"/釐清專案.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"確認合作",description:["項目細節討論","專案時間訂定","訂金支付"],image:"/確認合作.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"專案進行",description:["執行項目說明","規格文件確認","階段交付專案","專案測試"],image:"/專案進行.png",isArrow:!1},{isArrow:!0,title:"",description:[""],image:"/right-arrow.png"},{title:"驗收結案",description:["專案驗收","尾款支付","專案保固"],image:"/驗收結案.png",isArrow:!1}]);let o=null,r=!1;const n=()=>{t("AnimationCompleted"),o&&(o(),o=null),r=!1},x=()=>new Promise(g=>{r?g():(m.value=!1,r=!0,o=g)}),f=()=>{t("AnimationStart")};return V(x),L(()=>{m.value=!0}),(g,C)=>(s(),c("div",G,[i("div",{class:d({flowchart:!0,mobile:p.value==a(u).Mobile})},[(s(!0),c(D,null,N(T.value,(A,B)=>(s(),c("div",{key:B},[v(R,{title:A.title,description:A.description,image:A.image,isArrow:A.isArrow,index:B,deviceType:p.value},null,8,["title","description","image","isArrow","index","deviceType"])]))),128))],2),v(_,{name:"overlay-effects",onAfterAppear:n,onAfterLeave:n,onBeforeLeave:f,onBeforeEnter:f,appear:""},{default:y(()=>[m.value?(s(),c("div",H)):M("",!0)]),_:1}),v(_,{name:"overlay-effects",class:d({mobile:p.value==a(u).Mobile}),onAfterAppear:n,onAfterLeave:n,onBeforeLeave:f,onBeforeEnter:f,appear:""},{default:y(()=>[m.value?M("",!0):(s(),c("span",J))]),_:1},8,["class"])]))}}),W=S(K,[["__scopeId","data-v-3cdf148b"]]);export{W as default};
