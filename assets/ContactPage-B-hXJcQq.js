import{d as A,r as p,o as B,c as a,a as e,b as _,w as u,T as k,h as C,i as E,f as c,j as S,e as t,F as x,k as I,n as L,l as V,t as F,p as T,g as G,_ as N}from"./index-B_uSU-US.js";const D="/images/%E8%A8%82%E5%96%AE%E7%B3%BB%E7%B5%B1.png",z=o=>(T("data-v-b6840674"),o=o(),G(),o),P={class:"container"},R={class:"text-section"},Q={key:0},W={key:0},j={key:0,class:"contact-methods"},M={class:"item-display"},U=["href"],X=["src","alt"],$={key:0,class:"form-overlay"},q=z(()=>e("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfBnVEk5mT0sDzCtWDQEgspt3VGG7IRSSGcUXdE761mGyIEtA/viewform?embedded=true",width:"100%",height:"980",frameborder:"0",marginheight:"0",marginwidth:"0"}," 載入中… ",-1)),H=A({__name:"ContactPage",emits:["AnimationCompleted","AnimationStart"],setup(o,{emit:b}){let s=null;const n=p(!0);let l=!1;const f=b,w=p([{name:"電子郵件",link:"mailto:Croxinc.studio@gmail.com",icon:"/images/email_b.png"},{name:"Facebook",link:"https://www.facebook.com/croxinc.studio/",icon:"/images/fb_b.png"},{name:"Instagram",link:"https://www.instagram.com/croxinc.studio/",icon:"/images/ig_b.png"},{name:"Line@",link:"https://line.me/R/ti/p/@134sbzgh?ts=04241459&oat_content=url",icon:"/images/line_b.png"}]),r=p(!1);function m(){r.value=!r.value}const g=()=>{f("AnimationCompleted"),s&&(s(),s=null),l=!1},y=()=>new Promise(d=>{l?d():(n.value=!1,l=!0,s=d)}),h=()=>{f("AnimationStart")};return B(y),(d,J)=>(t(),a("div",P,[e("div",R,[_(k,{name:"slide-up-title",onAfterAppear:g,onAfterLeave:g,onBeforeLeave:h,onBeforeEnter:h,appear:""},{default:u(()=>[n.value?(t(),a("h2",Q,"如何聯絡我們？")):c("",!0)]),_:1}),_(k,{name:"slide-up-title",appear:""},{default:u(()=>[n.value?(t(),a("p",W," 如果您有想要客製的網站系統、Windows用的系統或工具，我們提供多元的方式，您可以隨時與我們聯絡。 ")):c("",!0)]),_:1}),_(C,{name:"slide-up-title",appear:""},{default:u(()=>[n.value?(t(),a("ul",j,[(t(!0),a(x,null,I(w.value,(i,v)=>(t(),a("li",{key:v,style:L({animationDelay:`${v*.2}s`}),class:"fade-in"},[e("div",M,[e("a",{href:i.link,target:"_blank"},[e("img",{src:i.icon,alt:i.name,class:"contact-icon"},null,8,X),V(F(i.name),1)],8,U)])],4))),128)),e("li",null,[e("div",{class:"item-display"},[e("img",{src:D,alt:"表單",class:"contact-icon",onClick:m}),e("span",{onClick:m},"填寫表單")])])])):c("",!0)]),_:1})]),(t(),E(S,{to:"body"},[r.value?(t(),a("div",$,[e("div",{class:"form-container"},[e("button",{onClick:m,class:"close-button"},"關閉表單"),q])])):c("",!0)]))]))}}),O=N(H,[["__scopeId","data-v-b6840674"]]);export{O as default};
