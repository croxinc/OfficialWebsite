import{_ as A}from"./CgxDXY8f.js";import{_ as x}from"./DVjbVnbN.js";import{e as k,r as w,f as B,g as C,c as d,b as e,w as n,T as r,a as l,o as _,h as N,i as b,_ as L}from"./B_TI6uhu.js";const h={class:"container"},y={key:0,class:"background"},V={class:"flicker"},E=k({__name:"index",emits:["AnimationCompleted","AnimationStart"],setup(I,{emit:p}){const c=p,a=w(!1);let t=null,s=!1;const m=()=>{c("AnimationCompleted"),t&&(t(),t=null),s=!1},u=()=>new Promise(i=>{s?i():(a.value=!1,s=!0,t=i)}),f=()=>{c("AnimationStart")};return B(u),C(()=>{a.value=!0}),(i,o)=>{const v=A,g=x;return _(),d("div",h,[e(r,{name:"home-effects",onAfterAppear:m,onAfterLeave:m,onBeforeLeave:f,onBeforeEnter:f,appear:"",mode:"out-in"},{default:n(()=>[N(a)?(_(),d("div",y)):b("",!0)]),_:1}),e(r,{name:"overlay-effects",appear:""},{default:n(()=>o[0]||(o[0]=[l("div",{class:"background-overlay"},null,-1)])),_:1}),e(r,{name:"description-effects",appear:""},{default:n(()=>o[1]||(o[1]=[l("div",{class:"description"}," 為您的企業搭建成功的基石 ",-1)])),_:1}),l("div",V,[e(g,{to:"/about"},{default:n(()=>[e(v,{src:"/scroll_down.png",alt:"scroll down",class:"scroll-down",loading:"eager"})]),_:1})])])}}}),P=L(E,[["__scopeId","data-v-f3765584"]]);export{P as default};
