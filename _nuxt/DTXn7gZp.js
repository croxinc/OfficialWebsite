import{_ as B}from"./CY4vS0p6.js";import{_ as I}from"./u8_6_vbW.js";import{r as g,e as L,m as F,u as N,f as E,g as S,c as i,b as m,w as d,T as y,k as V,j as D,a as s,i as f,l as G,o,n as a,h as e,F as z,p as R,t as Q,_ as $}from"./CGOfYi6i.js";import{D as n}from"./Bl5UU1Pq.js";const j=g([{name:"電子郵件",link:"mailto:Croxinc.studio@gmail.com",icon:"/light/mail.png",action:"_blank"},{name:"Facebook",link:"https://www.facebook.com/croxinc.studio/",icon:"/light/fb.png",action:"_blank"},{name:"Instagram",link:"https://www.instagram.com/croxinc.studio/",icon:"/light/ig.png",action:"_blank"},{name:"Line@",link:"https://line.me/R/ti/p/@134sbzgh?ts=04241459&oat_content=url",icon:"/light/line.png",action:"_blank"},{name:"填寫表單",link:"",icon:"/order.png",action:"openForm"}]),P={class:"container"},U={key:0,class:"form-overlay"},W=L({__name:"contact",props:{deviceType:{},deviceTypeModifiers:{}},emits:F(["AnimationCompleted","AnimationStart"],["update:deviceType"]),setup(M,{emit:w}){let u=null;const l=g(!1);let v=!1;const t=N(M,"deviceType"),_=w,b=g(!1);function A(){b.value=!b.value}const k=()=>{_("AnimationCompleted"),u&&(u(),u=null),v=!1},C=()=>new Promise(c=>{v?c():(l.value=!1,v=!0,u=c)}),h=()=>{_("AnimationStart")};return E(C),S(()=>{l.value=!0}),(c,p)=>{const x=B,T=I;return o(),i("div",P,[m(y,{name:"slide-up-title",onAfterAppear:k,onAfterLeave:k,onBeforeLeave:h,onBeforeEnter:h,appear:""},{default:d(()=>[l.value?(o(),i("div",{key:0,class:a({title:!0,mobile:t.value==e(n).Mobile})},"如何聯絡我們？",2)):f("",!0)]),_:1}),m(y,{name:"slide-up-title",appear:""},{default:d(()=>[l.value?(o(),i("div",{key:0,class:a({description:!0,mobile:t.value==e(n).Mobile})}," 若您有想要製作的軟體系統、跨系統整合或是作業上需要利於作業的工具的需求，可以隨時和我們聯絡討論。 ",2)):f("",!0)]),_:1}),m(V,{name:"slide-up-title",appear:""},{default:d(()=>[(o(),i("ul",{class:a(["contactItems",{mobile:t.value==e(n).Mobile}]),key:"x"},[l.value?(o(!0),i(z,{key:0},R("contactMap"in c?c.contactMap:e(j),(r,X)=>(o(),i("li",{key:r.link,class:a(["contactItem",{mobile:t.value==e(n).Mobile}])},[s("div",{class:a(["itemContainer",{mobile:t.value==e(n).Mobile}])},[m(T,{to:r.icon,target:"_blank",class:a(["nuxtLink",{mobile:t.value==e(n).Mobile}])},{default:d(()=>[m(x,{class:a({icon:!0,mobile:t.value==e(n).Mobile}),src:`/${r.icon}`,alt:r.name,loading:"eager"},null,8,["class","src","alt"]),s("span",{class:a(["iconName",{mobile:t.value==e(n).Mobile}])},Q(r.name),3)]),_:2},1032,["to","class"])],2)],2))),128)):f("",!0)],2))]),_:1}),(o(),D(G,{to:"body"},[b.value?(o(),i("div",U,[s("div",{class:"form-container"},[s("button",{onClick:A,class:"close-button"},"關閉表單"),p[0]||(p[0]=s("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfBnVEk5mT0sDzCtWDQEgspt3VGG7IRSSGcUXdE761mGyIEtA/viewform?embedded=true",width:"100%",height:"980",frameborder:"0",marginheight:"0",marginwidth:"0"}," 載入中… ",-1)),p[1]||(p[1]=s("span",{class:"version",style:{color:"#666"}},"1.0.1.0714003",-1))])])):f("",!0)]))])}}}),O=$(W,[["__scopeId","data-v-95cb467d"]]);export{O as default};
