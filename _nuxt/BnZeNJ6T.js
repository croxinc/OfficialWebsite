import{e as S,u as k,r as d,o as P,c as L,F as V,p as z,b as y,w as H,n as b,h as n,_ as N,q as C,g as $,v as j,x as R,a as M,t as G,s as X,y as F,z as U,A as q,T as J,i as K,B as Q}from"./DKKPY444.js";import{u as Z}from"./wlMeOm2S.js";import{_ as W}from"./B8TA9Kin.js";import{_ as B}from"./B7TJDpiX.js";import{D as a}from"./Bl5UU1Pq.js";var x=(e=>(e.Default="Default",e.Home="Home",e.About="About",e.Service="Service",e.Process="Process",e.Project="Project",e.Contact="Contact",e))(x||{}),t=(e=>(e.Dark="Dark",e.Light="Light",e.Default="Default",e))(t||{});const w=[{pageIndex:0,mobileIndex:-1,desktopIndex:0,pageType:x.Home,label:"HOME",url:"/",desktop:t.Dark,tablet:t.Dark,mobile:t.Dark,mobileVisible:!1,homeButtonTheme:t.Dark},{pageIndex:1,mobileIndex:0,desktopIndex:1,pageType:x.About,label:"關於我們",url:"/about",desktop:t.Light,tablet:t.Light,mobile:t.Dark,mobileVisible:!0,homeButtonTheme:t.Light},{pageIndex:2,mobileIndex:1,desktopIndex:2,pageType:x.Service,label:"服務項目",url:"/service",desktop:t.Light,tablet:t.Light,mobile:t.Light,mobileVisible:!0,homeButtonTheme:t.Light},{pageIndex:3,mobileIndex:2,desktopIndex:3,pageType:x.Process,label:"合作流程",url:"/process",desktop:t.Light,tablet:t.Light,mobile:t.Light,mobileVisible:!0,homeButtonTheme:t.Light},{pageIndex:4,mobileIndex:3,desktopIndex:4,pageType:x.Project,label:"案例分享",url:"/project",desktop:t.Light,tablet:t.Light,mobile:t.Light,mobileVisible:!0,homeButtonTheme:t.Light},{pageIndex:5,mobileIndex:4,desktopIndex:5,pageType:x.Contact,label:"聯絡我們",url:"/contact",desktop:t.Light,tablet:t.Light,mobile:t.Light,mobileVisible:!0,homeButtonTheme:t.Light}];function A(e,c){var m;var i=w.map(o=>o.pageIndex).reduce((o,u)=>Math.min(o,u)),p=w.map(o=>o.pageIndex).reduce((o,u)=>Math.max(o,u)),h=((m=w.find(o=>o.pageType==e))==null?void 0:m.pageIndex)??0,f=h+c;return f<i&&(f=p),f>p&&(f=i),w.find(o=>o.pageIndex==f)}const O={class:"container"},ee=S({__name:"TheMedia",props:{deviceType:{},deviceTypeModifiers:{},theme:{},themeModifiers:{}},emits:["update:deviceType","update:theme"],setup(e){const c=k(e,"deviceType"),i=k(e,"theme"),p=d([{url:"mailto:Croxinc.studio@gmail.com",icon:"mail.png",alt:"mail"},{url:"https://www.facebook.com/croxinc.studio/",icon:"fb.png",alt:"facebook"},{url:"https://www.instagram.com/croxinc.studio/",icon:"ig.png",alt:"instagram"},{url:"https://lin.ee/u3jhjn9",icon:"line.png",alt:"line"}]);return(h,f)=>{const m=W,o=B;return P(),L("ul",O,[(P(!0),L(V,null,z(n(p),(u,T)=>(P(),L("li",{key:T},[y(o,{to:u.url,target:"_blank",class:"nuxtLink"},{default:H(()=>[y(m,{class:b({item:!0,mobile:c.value==n(a).Mobile}),src:`/${i.value==n(t).Dark?"dark":"light"}/${u.icon}`,alt:u.alt,loading:"eager"},null,8,["class","src","alt"])]),_:2},1032,["to"])]))),128))])}}}),te=N(ee,[["__scopeId","data-v-a84c9dab"]]);function ie(e,c){if(!c)return-1;let i=w.find(p=>p.pageType==c);if(i)switch(e){case a.Desktop:return i.desktopIndex;case a.Mobile:return i.mobileIndex;default:return i.desktopIndex}return-1}function ne(e=a.Desktop){switch(e){case a.Desktop:return w;case a.Mobile:return w.filter(c=>c.mobileVisible);default:return w}}const ae=["name"],oe=S({__name:"TheService",props:{theme:{},themeModifiers:{},deviceType:{},deviceTypeModifiers:{},lastPage:{},lastPageModifiers:{},activedPage:{},activedPageModifiers:{}},emits:["update:theme","update:deviceType","update:lastPage","update:activedPage"],setup(e){const c=k(e,"theme"),i=k(e,"deviceType"),p=k(e,"lastPage"),h=k(e,"activedPage"),f=d([]),m=d(null),o=d(!1),u=d(0),T=C(()=>{if(i.value==a.Default||h.value==x.Default||i.value==a.Mobile&&h.value==x.Home||u.value==0||(m.value=f.value[ie(i.value,h.value)],m==null||m.value==null)||m.value.getBoundingClientRect().top<=0)return"";const l=d(""),s=m.value.getBoundingClientRect(),v=(i.value==a.Mobile,s.width+4),r=(i.value==a.Mobile,s.height+3),_=i.value==a.Mobile?s.top-4.5:s.top-4,E=i.value==a.Mobile?s.left-4:s.left-5,Y=i.value==a.Mobile?1:2;return l.value+="position: fixed;",l.value+="border-radius: 5px;",l.value+=`border: ${Y}px solid #c9c9c9;`,l.value+="z-index: 2;",l.value+=`top: ${_}px;`,l.value+=`left: ${E}px;`,l.value+=`width: ${v}px;`,l.value+=`height: ${r}px;`,l.value+=p.value==x.Default||o.value==!1?"transition: none;":"transition: all 2.0s cubic-bezier(0.25, 0.1, 0.25, 1);",l.value+=m.value.getBoundingClientRect().top>0?"visibility: visible !important;":"visibility: hidden !important;",l.value});function I(l){l!=null&&(p.value=h.value,h.value=l.pageType,o.value=!0)}function g(){u.value=Date.now(),o.value=!1}return $(async()=>{await j(),g(),window.addEventListener("resize",g),window.addEventListener("scroll",g)}),R(()=>{window.removeEventListener("resize",g),window.removeEventListener("scroll",g)}),(l,s)=>{const v=B;return P(),L("div",{class:b({container:!0,mobile:i.value==n(a).Mobile})},[M("ul",{class:b({services:!0,mobile:i.value==n(a).Mobile}),style:{"list-style":"none",padding:"0",margin:"0"}},[(P(!0),L(V,null,z(("fnGetServiceMap"in l?l.fnGetServiceMap:n(ne))(i.value),(r,_)=>(P(),L("li",{class:b({serviceContainer:!0,mobile:i.value==n(a).Mobile}),name:`item${_}`},[M("div",{class:b({serviceItem:!0,mobile:i.value==n(a).Mobile}),ref_for:!0,ref_key:"serviceItemRefs",ref:f},[y(v,{to:r.url,onClick:E=>{I(r)},class:b({service:!0,light:c.value==n(t).Light,dark:c.value==n(t).Dark,active:h.value==r.pageType})},{default:H(()=>[M("div",{class:b({displayedText:!0,mobile:i.value==n(a).Mobile})},G(r.label),3)]),_:2},1032,["to","onClick","class"])],2)],10,ae))),256))],2),M("div",{style:X(n(T))},null,4)],2)}}}),le=N(oe,[["__scopeId","data-v-b2760091"]]);var D=(e=>(e[e.PreviousPage=-1]="PreviousPage",e[e.NextPage=1]="NextPage",e[e.None=0]="None",e))(D||{});const se=S({__name:"TheHeader",props:{theme:{},themeModifiers:{},deviceType:{},deviceTypeModifiers:{},activedPage:{},activedPageModifiers:{}},emits:["update:theme","update:deviceType","update:activedPage"],setup(e){const c=k(e,"theme"),i=k(e,"deviceType"),p=k(e,"activedPage"),h=d(x.Default),f=F();let m=0;const o=d(D.None),u=d(0),T=d(0),I=d(0),g=s=>{s.touches[0].clientX,m=s.touches[0].clientY},l=s=>{s.changedTouches[0].clientX;const r=s.changedTouches[0].clientY-m;Math.abs(r)<180||(o.value=r<0?D.NextPage:D.PreviousPage,u.value=window.scrollY,T.value=window.innerHeight,I.value=document.documentElement.scrollHeight,(u.value===0&&o.value==D.PreviousPage||u.value+T.value>=I.value&&o.value==D.NextPage)&&f.push(A(p.value,o.value).url))};return $(()=>{window.addEventListener("touchstart",g),window.addEventListener("touchend",l)}),U(()=>{window.removeEventListener("touchstart",g),window.removeEventListener("touchend",l)}),(s,v)=>{const r=W,_=B;return P(),L("div",{class:b({container:!0,mobile:i.value==n(a).Mobile})},[y(_,{to:"/",class:b({logos:!0,mobile:i.value==n(a).Mobile})},{default:H(()=>[y(r,{class:"logo",src:`/${c.value==n(t).Dark?"dark":"light"}/logo.png`,loading:"eager",preload:""},null,8,["src"])]),_:1},8,["class"]),M("div",{class:b({services:!0,mobile:i.value==n(a).Mobile})},[y(le,{theme:c.value,activedPage:p.value,lastPage:n(h),deviceType:i.value},null,8,["theme","activedPage","lastPage","deviceType"])],2),M("div",{class:b({medias:!0,mobile:i.value==n(a).Mobile})},[y(te,{theme:c.value},null,8,["theme"])],2)],2)}}}),re=N(se,[["__scopeId","data-v-5778fe20"]]),ce={class:"app"},ue={class:"content"},de=S({__name:"main",setup(e){const c=q();d(t.Default);const i=d(!1),p=d(!1),h=d(!1),f=d(!1);function m(){i.value=!1,p.value=!0,h.value=!0}function o(){i.value=!0,h.value=!1}const u=d(0),T=C(()=>{var v;return((v=w.find(r=>r.url==c.path))==null?void 0:v.pageType)??x.Default}),I=C(()=>{var v,r;return g.value==a.Mobile?((v=w.find(_=>_.url==c.path))==null?void 0:v.mobile)??t.Default:((r=w.find(_=>_.url==c.path))==null?void 0:r.desktop)??t.Default}),g=C(()=>u.value<=768?a.Mobile:a.Desktop),l=C(()=>{var v;return((v=w.find(r=>r.url==c.path))==null?void 0:v.homeButtonTheme)??t.Default});function s(){u.value=Math.min(window.innerWidth,window.outerWidth)}return $(()=>{s(),window.addEventListener("resize",s),window.addEventListener("scroll",s)}),R(()=>{window.removeEventListener("resize",s),window.removeEventListener("scroll",s)}),Z({title:"雙向數位創意工作室 (Croxinc Studio) - 客製化系統、流程自動化專家",link:[{rel:"icon",type:"image/x-icon",href:"/logo.ico"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap"}],meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0"},{name:"title",content:"雙向數位創意工作室  (Croxinc Studio) - 客製化系統、流程自動化專家"},{name:"description",content:"為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。"},{name:"keywords",content:"客製化系統, 流程自動化, RPA, 軟體開發, 萊數位, Croxinc Studio"},{property:"og:title",content:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家"},{property:"og:url",content:"https://www.croxinc.com"},{property:"og:type",content:"website"},{property:"og:site_name",content:"雙向數位創意工作室 (Croxinc Studio)"},{property:"og:description",content:"為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。"},{property:"og:image",content:"https://www.croxinc.com/images/croxinc.png"},{property:"og:image:type",content:"image/png"},{property:"og:image:width",content:"294"},{property:"og:image:height",content:"263"},{name:"image",content:"https://www.croxinc.com/images/croxinc.png"}]}),(v,r)=>{const _=Q;return P(),L("div",ce,[M("div",{class:b({container:!0,mobile:n(g)==n(a).Mobile})},[y(J,{name:"header-effects"},{default:H(()=>[M("div",{class:b({header:!0,mobile:n(g)==n(a).Mobile})},[y(re,{theme:n(I),deviceType:n(g),activedPage:n(T)},null,8,["theme","deviceType","activedPage"])],2)]),_:1})],2),M("div",ue,[y(_,{deviceType:n(g),onAnimationCompleted:o,onAnimationStart:m,isHeaderLoaded:n(f)},null,8,["deviceType","isHeaderLoaded"])]),n(g)==n(a).Mobile?(P(),L("button",{key:0,class:b({home:!0,dark:n(l)==n(t).Dark,light:n(l)==n(t).Light}),onClick:r[0]||(r[0]=()=>v.$router.push("/"))},"HOME",2)):K("",!0)])}}}),fe=N(de,[["__scopeId","data-v-ad75ae88"]]);export{fe as default};
