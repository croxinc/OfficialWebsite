import{d as g,r as A,o as b,c as t,a as _,b as n,w as i,T as c,e as a,f as r,p as C,g as B,_ as k}from"./index-D9ca0sJ4.js";const x="/images/bg_about.jpg",f=o=>(C("data-v-1b4e9399"),o=o(),B(),o),w={class:"outer-container"},L={class:"container"},S={class:"text-section"},y={key:0},I={key:0},N={key:0,class:"signature"},P=f(()=>_("p",{class:"name"},"Lester",-1)),V=[P],E={key:0,class:"image-section"},T=f(()=>_("img",{src:x,alt:"about"},null,-1)),j=[T],R=g({__name:"AboutPage",emits:["AnimationCompleted","AnimationStart"],setup(o,{emit:v}){const p=v,e=A(!0);let s=null,l=!1;const u=()=>{p("AnimationCompleted"),s&&(s(),s=null),l=!1},h=()=>new Promise(d=>{l?d():(e.value=!1,l=!0,s=d)}),m=()=>{p("AnimationStart")};return b(h),(d,q)=>(a(),t("div",w,[_("div",L,[_("div",S,[n(c,{name:"slide-up-title",onAfterAppear:u,onAfterLeave:u,onBeforeLeave:m,onBeforeEnter:m,appear:""},{default:i(()=>[e.value?(a(),t("h2",y,"關於 Croxinc")):r("",!0)]),_:1}),n(c,{name:"slide-up-title",appear:""},{default:i(()=>[e.value?(a(),t("p",I," 我們深信每一個企業的需求都是獨特的，您的軟體和網站也應該反映這一點。我們專注於與您緊密合作，從深入了解您的業務流程和挑戰開始，共同設計符合您需求的定製解決方案。 ")):r("",!0)]),_:1}),n(c,{name:"slide-up-creator",appear:""},{default:i(()=>[e.value?(a(),t("div",N,V)):r("",!0)]),_:1})]),n(c,{name:"slide-up",appear:""},{default:i(()=>[e.value?(a(),t("div",E,j)):r("",!0)]),_:1})])]))}}),D=k(R,[["__scopeId","data-v-1b4e9399"]]);export{D as default};
