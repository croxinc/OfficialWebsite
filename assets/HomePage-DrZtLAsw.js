import{d as A,r as i,o as k,q as C,c as o,b as r,w as c,T as l,a as p,u as B,e as a,f as d,s as b,_ as y}from"./index-CUF1dr0t.js";const x="/images/scroll_down.png",H={class:"container"},L={key:0,class:"background-base"},N={key:0,class:"background-overlay"},P={key:0,class:"description"},V={class:"flicker"},E=A({__name:"HomePage",emits:["AnimationCompleted","AnimationStart"],setup(S,{emit:v}){const u=v,e=i(!0);let t=null,n=!1;const g=i(0),h=i(0),m=()=>{u("AnimationCompleted"),t&&(t(),t=null),n=!1},w=()=>new Promise(s=>{n?s():(e.value=!1,n=!0,t=s)}),f=()=>{u("AnimationStart")};return k(w),C(async()=>{g.value=window.innerHeight,h.value=window.innerWidth}),(s,_)=>(a(),o("div",H,[r(l,{name:"home-effects",onAfterAppear:m,onAfterLeave:m,onBeforeLeave:f,onBeforeEnter:f,appear:"",mode:"out-in"},{default:c(()=>[e.value?(a(),o("div",L)):d("",!0)]),_:1}),r(l,{name:"overlay-effects",appear:""},{default:c(()=>[e.value?(a(),o("div",N)):d("",!0)]),_:1}),r(l,{name:"description-effects",appear:""},{default:c(()=>[e.value?(a(),o("div",P," 為您的企業搭建成功的基石 ")):d("",!0)]),_:1}),p("div",V,[p("img",{class:"scroll-down",src:x,alt:"scroll down",onClick:_[0]||(_[0]=()=>B(b).push("/about"))})])]))}}),W=y(E,[["__scopeId","data-v-e63df6fe"]]);export{W as default};
