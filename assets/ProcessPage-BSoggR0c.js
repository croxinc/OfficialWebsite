import{d as b,m as C,e as t,c as i,b as l,w as o,a,n as g,T as n,f as c,t as h,F as V,k,i as L,_ as B,r as y,o as P}from"./index-CUF1dr0t.js";const $={class:"container"},S={key:0,class:"image-container"},I=["src","alt"],N={key:1,class:"arrow-container"},T=["src","alt"],E={class:"text-container"},D={class:"description"},F=b({__name:"TheProceeItemComp",props:{index:{},title:{},description:{},image:{},isArrowVisible:{type:Boolean}},setup(v){const e=v,s=C(()=>({transitionDelay:`${e.index*.2}s`}));return(m,A)=>(t(),i("div",$,[e.isArrowVisible?c("",!0):(t(),i("div",S,[l(n,{name:"slide-up-item",appear:""},{default:o(()=>[a("img",{class:"item-image",src:e.image,alt:e.title,style:g(s.value)},null,12,I)]),_:1})])),e.isArrowVisible?(t(),i("div",N,[l(n,{name:"slide-up-item",appear:""},{default:o(()=>[a("img",{class:"arrow-image",src:e.image,alt:e.title,style:g(s.value)},null,12,T)]),_:1})])):c("",!0),a("div",E,[a("div",D,[l(n,{name:"slide-up-item",appear:""},{default:o(()=>[a("p",{class:"description-title",style:g(s.value)},h(e.title),5)]),_:1}),e.description.length>0?(t(!0),i(V,{key:0},k(e.description,(r,d)=>(t(),L(n,{key:m.idx,name:"slide-up-item",appear:""},{default:o(()=>[a("p",{class:"description-text",style:g(s.value)},h(r),5)]),_:2},1024))),128)):c("",!0)])])]))}}),z=B(F,[["__scopeId","data-v-eccf2fa5"]]),R={class:"container"},j={class:"flowchart"},q={key:0,class:"overlay-content"},G={key:0,class:"overlay"},H=b({__name:"ProcessPage",emits:["AnimationCompleted","AnimationStart"],setup(v,{emit:e}){const s=y(!0),m=e,A=y([{title:"釐清專案",description:["需求評估","初步報價"],image:"/images/釐清專案.png",isArrowVisible:!1},{isArrowVisible:!0,title:"",description:[""],image:"/images/right-arrow.png"},{title:"確認合作",description:["項目細節討論","專案時間訂定","訂金支付"],image:"/images/確認合作.png",isArrowVisible:!1},{isArrowVisible:!0,title:"",description:[""],image:"/images/right-arrow.png"},{title:"專案進行",description:["執行項目說明","規格文件確認","階段交付專案","專案測試"],image:"/images/專案進行.png",isArrowVisible:!1},{isArrowVisible:!0,title:"",description:[""],image:"/images/right-arrow.png"},{title:"驗收結案",description:["專案驗收","尾款支付","專案保固"],image:"/images/驗收結案.png",isArrowVisible:!1}]);let r=null,d=!1;const p=()=>{m("AnimationCompleted"),r&&(r(),r=null),d=!1},x=()=>new Promise(f=>{d?f():(s.value=!1,d=!0,r=f)}),_=()=>{m("AnimationStart")};return P(x),(f,J)=>(t(),i("div",R,[a("div",j,[(t(!0),i(V,null,k(A.value,(u,w)=>(t(),i("div",{key:w},[l(z,{title:u.title,description:u.description,image:u.image,isArrowVisible:u.isArrowVisible,index:w},null,8,["title","description","image","isArrowVisible","index"])]))),128))]),l(n,{name:"overlay-effects",onAfterAppear:p,onAfterLeave:p,onBeforeLeave:_,onBeforeEnter:_,appear:""},{default:o(()=>[s.value?(t(),i("div",q)):c("",!0)]),_:1}),l(n,{name:"overlay-effects",onAfterAppear:p,onAfterLeave:p,onBeforeLeave:_,onBeforeEnter:_},{default:o(()=>[s.value?c("",!0):(t(),i("span",G))]),_:1})]))}}),M=B(H,[["__scopeId","data-v-26bc94e6"]]);export{M as default};
