import{d as f,m as C,e as t,c as l,b as p,w as c,a as r,n as S,T as d,t as I,_ as h,r as T,i as v,F as k,k as B,h as b,f as m,o as L,l as _,p as V,g as $}from"./index-B0VzDUW2.js";const M={class:"container"},N=["src","alt"],w=f({__name:"TheServiceItemComp",props:{index:{},totalCount:{},icon:{},name:{}},setup(a){const s=a,o=C(()=>({transitionDelay:`${s.index*.2}s`})),n=C(()=>({transitionDelay:`${s.totalCount*.2}s`}));return(e,i)=>(t(),l("div",M,[p(d,{name:"slide-up-item",appear:""},{default:c(()=>[r("img",{src:e.icon,alt:e.name+" display",class:"service-icon",style:S(o.value)},null,12,N)]),_:1}),p(d,{name:"slide-up-name",appear:""},{default:c(()=>[r("p",{class:"service-name",style:S(n.value)},I(e.name),5)]),_:1})]))}}),R=h(w,[["__scopeId","data-v-4116e161"]]),D={class:"services"},P=f({__name:"TheServiceListComp",props:{isVisible:{type:Boolean}},setup(a){const s=T([{displayText:"MiniCRM",path:"/images/MINICRM.png"},{displayText:"訂單系統",path:"/images/訂單系統.png"},{displayText:"跨系統集成",path:"/images/跨系統集成.png"},{displayText:"內部管理系統開發",path:"/images/內部系統管理開發.png"}]);return(o,n)=>(t(),l("div",D,[o.isVisible?(t(),v(b,{key:0,name:"slide-up-item"},{default:c(()=>[(t(!0),l(k,null,B(s.value,(e,i)=>(t(),v(R,{key:i,icon:e.path,name:e.displayText,index:i,"total-count":s.value.length},null,8,["icon","name","index","total-count"]))),128))]),_:1})):m("",!0)]))}}),E=h(P,[["__scopeId","data-v-60f08ce0"]]),x=a=>(V("data-v-5d65fd3e"),a=a(),$(),a),F={class:"container"},z={class:"service-intro"},G={key:0,class:"title"},j={key:0,class:"description"},q=x(()=>r("br",null,null,-1)),H=x(()=>r("br",null,null,-1)),J={class:"item-container"},K=f({__name:"ServicePage",emits:["AnimationCompleted","AnimationStart"],setup(a,{emit:s}){const o=s,n=T(!0);let e=null,i=!1;const y=()=>{o("AnimationCompleted"),e&&(e(),e=null),i=!1},A=()=>new Promise(u=>{i?u():(n.value=!1,i=!0,e=u)}),g=()=>{o("AnimationStart")};return L(A),(u,O)=>(t(),l("div",F,[r("div",z,[p(d,{name:"slide-up-title",appear:""},{default:c(()=>[n.value?(t(),l("div",G,"專屬客製化解決方案，全面提升效率與競爭力！")):m("",!0)]),_:1}),p(d,{name:"slide-up-description",onAfterAppear:y,onAfterLeave:y,onBeforeLeave:g,onBeforeEnter:g,appear:""},{default:c(()=>[n.value?(t(),l("div",j,[_(" 我們致力於為中小企業、新創企業以及需要高度客製化流程的企業，提供量身訂製的管理系統。"),q,_(" 我們的專業團隊擁有豐富的經驗，無論是MiniCRM、人事管理系統，亦或是各類的跨系統集成。"),H,_(" 都能根據您的需求進行深度定制， 助您實現業務流程的自動化和數位化轉型。 ")])):m("",!0)]),_:1})]),r("div",J,[p(d,{name:"slide-close-items"},{default:c(()=>[n.value?(t(),v(E,{key:0,isVisible:!0})):m("",!0)]),_:1})])]))}}),U=h(K,[["__scopeId","data-v-5d65fd3e"]]);export{U as default};
