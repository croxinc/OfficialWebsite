import{d as h,r as g,o as A,c as t,e as l,b as n,w as i,T as c,f as a,g as r,p as b,i as C,_ as B}from"./index-DKWQF61d.js";const k="/images/bg_about.jpg",x=s=>(b("data-v-6c106966"),s=s(),C(),s),w={class:"container"},L={class:"text-section"},S={class:"intro"},y={key:0,class:"title"},I={key:0,class:"description"},N={key:0,class:"signature"},P=x(()=>l("p",{class:"name"},"Lester",-1)),V=[P],E={class:"image-section"},T={key:0,class:"about-image",src:k,alt:"about"},j=h({__name:"AboutPage",emits:["AnimationCompleted","AnimationStart"],setup(s,{emit:f}){const p=f,e=g(!0);let o=null,_=!1;const u=()=>{p("AnimationCompleted"),o&&(o(),o=null),_=!1},v=()=>new Promise(d=>{_?d():(e.value=!1,_=!0,o=d)}),m=()=>{p("AnimationStart")};return A(v),(d,R)=>(a(),t("div",w,[l("div",L,[l("div",S,[n(c,{name:"slide-up-title",onAfterAppear:u,onAfterLeave:u,onBeforeLeave:m,onBeforeEnter:m,appear:""},{default:i(()=>[e.value?(a(),t("p",y,"關於 Croxinc")):r("",!0)]),_:1}),n(c,{name:"slide-up-title",appear:""},{default:i(()=>[e.value?(a(),t("p",I," 我們深信每一個企業的需求都是獨特的，您的軟體和網站也應該反映這一點。我們專注於與您緊密合作，從深入了解您的業務流程和挑戰開始，共同設計符合您需求的量身打造解決方案。 ")):r("",!0)]),_:1}),n(c,{name:"slide-up-creator",appear:""},{default:i(()=>[e.value?(a(),t("div",N,V)):r("",!0)]),_:1})])]),l("div",E,[n(c,{name:"slide-up",appear:""},{default:i(()=>[e.value?(a(),t("img",T)):r("",!0)]),_:1})])]))}}),z=B(j,[["__scopeId","data-v-6c106966"]]);export{z as default};
