import{d as g,r as A,o as k,c as o,b as r,w as i,T as c,a as _,u as h,e as a,f as l,q as C,_ as w}from"./index-B_uSU-US.js";const B="/images/scroll_down.png",b={class:"container"},y={key:0,class:"background-base"},x={key:0,class:"background-overlay"},L={key:0,class:"description"},N={class:"flicker"},P=g({__name:"HomePage",emits:["AnimationCompleted","AnimationStart"],setup(V,{emit:p}){const d=p,e=A(!0);let t=null,s=!1;const m=()=>{d("AnimationCompleted"),t&&(t(),t=null),s=!1},v=()=>new Promise(n=>{s?n():(e.value=!1,s=!0,t=n)}),f=()=>{d("AnimationStart")};return k(v),(n,u)=>(a(),o("div",b,[r(c,{name:"home-effects",onAfterAppear:m,onAfterLeave:m,onBeforeLeave:f,onBeforeEnter:f,appear:"",mode:"out-in"},{default:i(()=>[e.value?(a(),o("div",y)):l("",!0)]),_:1}),r(c,{name:"overlay-effects",appear:""},{default:i(()=>[e.value?(a(),o("div",x)):l("",!0)]),_:1}),r(c,{name:"description-effects",appear:""},{default:i(()=>[e.value?(a(),o("div",L," 為您的企業搭建成功的基石 ")):l("",!0)]),_:1}),_("div",N,[_("img",{class:"scroll-down",src:B,alt:"scroll down",onClick:u[0]||(u[0]=()=>h(C).push("/about"))})])]))}}),H=w(P,[["__scopeId","data-v-737683d2"]]);export{H as default};
