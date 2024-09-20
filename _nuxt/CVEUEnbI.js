import{e as S,u as L,r as g,o as I,c as P,F as R,p as V,b as x,w as B,n as p,h as t,_ as E,s as C,g as A,v as G,x as z,a as M,t as X,q as Y,y as F,z as U,A as q,T as J,i as K,B as O,d as Q}from"./BZr28ihV.js";import{_ as N}from"./Dt2tQwAx.js";import{u as Z}from"./CUjGo2EN.js";import{_ as j}from"./CyHp9n8n.js";import{D as o}from"./Bl5UU1Pq.js";var h=(e=>(e.Default="Default",e.Home="Home",e.About="About",e.Service="Service",e.Process="Process",e.Project="Project",e.Contact="Contact",e))(h||{}),i=(e=>(e.Dark="Dark",e.Light="Light",e.Default="Default",e))(i||{});const f=[{pageIndex:0,mobileIndex:-1,desktopIndex:0,pageType:h.Home,label:"HOME",url:"/",desktop:i.Dark,tablet:i.Dark,mobile:i.Dark,mobileVisible:!1,homeButtonTheme:i.Dark},{pageIndex:1,mobileIndex:0,desktopIndex:1,pageType:h.About,label:"關於我們",url:"/about",desktop:i.Light,tablet:i.Light,mobile:i.Dark,mobileVisible:!0,homeButtonTheme:i.Light},{pageIndex:2,mobileIndex:1,desktopIndex:2,pageType:h.Service,label:"服務項目",url:"/service",desktop:i.Light,tablet:i.Light,mobile:i.Light,mobileVisible:!0,homeButtonTheme:i.Light},{pageIndex:3,mobileIndex:2,desktopIndex:3,pageType:h.Process,label:"合作流程",url:"/process",desktop:i.Light,tablet:i.Light,mobile:i.Light,mobileVisible:!0,homeButtonTheme:i.Light},{pageIndex:4,mobileIndex:3,desktopIndex:4,pageType:h.Project,label:"案例分享",url:"/project",desktop:i.Light,tablet:i.Light,mobile:i.Light,mobileVisible:!0,homeButtonTheme:i.Light},{pageIndex:5,mobileIndex:4,desktopIndex:5,pageType:h.Contact,label:"聯絡我們",url:"/contact",desktop:i.Light,tablet:i.Light,mobile:i.Light,mobileVisible:!0,homeButtonTheme:i.Light}];function H(e,s){var r;var a=f.map(l=>l.pageIndex).reduce((l,m)=>Math.min(l,m)),u=f.map(l=>l.pageIndex).reduce((l,m)=>Math.max(l,m)),v=((r=f.find(l=>l.pageType==e))==null?void 0:r.pageIndex)??0,d=v+s;return d<a&&(d=u),d>u&&(d=a),f.find(l=>l.pageIndex==d)}const ee={class:"container"},te=S({__name:"TheMedia",props:{deviceType:{},deviceTypeModifiers:{},theme:{},themeModifiers:{}},emits:["update:deviceType","update:theme"],setup(e){const s=L(e,"deviceType"),a=L(e,"theme"),u=g([{url:"mailto:Croxinc.studio@gmail.com",icon:"mail.png",alt:"mail"},{url:"https://www.facebook.com/croxinc.studio/",icon:"fb.png",alt:"facebook"},{url:"https://www.instagram.com/croxinc.studio/",icon:"ig.png",alt:"instagram"},{url:"https://lin.ee/u3jhjn9",icon:"line.png",alt:"line"}]);return(v,d)=>{const r=j,l=N;return I(),P("ul",ee,[(I(!0),P(R,null,V(t(u),(m,k)=>(I(),P("li",{key:k},[x(l,{to:m.url,target:"_blank",class:"nuxtLink"},{default:B(()=>[x(r,{class:p({item:!0,mobile:s.value==t(o).Mobile}),src:`/${a.value==t(i).Dark?"dark":"light"}/${m.icon}`,alt:m.alt,loading:"eager"},null,8,["class","src","alt"])]),_:2},1032,["to"])]))),128))])}}}),ie=E(te,[["__scopeId","data-v-c5d0b6e6"]]);function ne(e,s){if(!s)return-1;let a=f.find(u=>u.pageType==s);if(a)switch(e){case o.Desktop:return a.desktopIndex;case o.Mobile:return a.mobileIndex;default:return a.desktopIndex}return-1}function ae(e=o.Desktop){switch(e){case o.Desktop:return f;case o.Mobile:return f.filter(s=>s.mobileVisible);default:return f}}const oe=["name"],le=S({__name:"TheService",props:{theme:{},themeModifiers:{},deviceType:{},deviceTypeModifiers:{},lastPage:{},lastPageModifiers:{},activedPage:{},activedPageModifiers:{}},emits:["update:theme","update:deviceType","update:lastPage","update:activedPage"],setup(e){const s=L(e,"theme"),a=L(e,"deviceType"),u=L(e,"lastPage"),v=L(e,"activedPage"),d=g([]),r=g(null),l=g(!1),m=g(0),k=C(()=>{if(a.value==o.Default||v.value==h.Default||a.value==o.Mobile&&v.value==h.Home||m.value==0||(r.value=d.value[ne(a.value,v.value)],r==null||r.value==null)||r.value.getBoundingClientRect().top<=0)return"";const n=g("");return n.value+="position: fixed;",n.value+="border-radius: 5px;",n.value+="border: 2px solid #c9c9c9;",n.value+="z-index: 2;",n.value+=`top: ${r.value.getBoundingClientRect().top-2}px;`,n.value+=`left: ${r.value.getBoundingClientRect().left-5.5}px;`,n.value+=`width: ${r.value.getBoundingClientRect().width+4}px;`,n.value+=`height: ${r.value.getBoundingClientRect().height+2}px;`,n.value+=u.value==h.Default||l.value==!1?"transition: none;":"transition: all 2.0s cubic-bezier(0.25, 0.1, 0.25, 1);",n.value+=r.value.getBoundingClientRect().top>0?"visibility: visible !important;":"visibility: hidden !important;",n.value});function _(n){n!=null&&(u.value=v.value,v.value=n.pageType,l.value=!0)}function w(){m.value=Date.now(),l.value=!1}return A(async()=>{await G(),w(),window.addEventListener("resize",w),window.addEventListener("scroll",w)}),z(()=>{window.removeEventListener("resize",w),window.removeEventListener("scroll",w)}),(n,y)=>{const T=N;return I(),P("div",{class:p({container:!0,mobile:a.value==t(o).Mobile})},[M("ul",{class:p({services:!0,mobile:a.value==t(o).Mobile}),style:{"list-style":"none",padding:"0",margin:"0"}},[(I(!0),P(R,null,V(("fnGetServiceMap"in n?n.fnGetServiceMap:t(ae))(a.value),(c,b)=>(I(),P("li",{class:p({serviceContainer:!0,mobile:a.value==t(o).Mobile}),name:`item${b}`},[M("div",{class:p({serviceItem:!0,mobile:a.value==t(o).Mobile}),ref_for:!0,ref_key:"serviceItemRefs",ref:d},[x(T,{to:c.url,onClick:D=>{_(c)},class:p({service:!0,light:s.value==t(i).Light,dark:s.value==t(i).Dark,active:v.value==c.pageType})},{default:B(()=>[M("div",{class:p({displayedText:!0,mobile:a.value==t(o).Mobile})},X(c.label),3)]),_:2},1032,["to","onClick","class"])],2)],10,oe))),256))],2),M("div",{style:Y(t(k))},null,4)],2)}}}),se=E(le,[["__scopeId","data-v-97449934"]]);var $=(e=>(e[e.PreviousPage=-1]="PreviousPage",e[e.NextPage=1]="NextPage",e))($||{});const re=S({__name:"TheHeader",props:{theme:{},themeModifiers:{},deviceType:{},deviceTypeModifiers:{},activedPage:{},activedPageModifiers:{}},emits:["update:theme","update:deviceType","update:activedPage"],setup(e){const s=L(e,"theme"),a=L(e,"deviceType"),u=L(e,"activedPage"),v=g(h.Default),d=F();let r=0,l=0;const m=_=>{r=_.touches[0].clientX,l=_.touches[0].clientY},k=_=>{const w=_.changedTouches[0].clientX,n=_.changedTouches[0].clientY,y=w-r,T=n-l;if(Math.abs(y)>Math.abs(T))if(y<0){var c=H(u.value,$.NextPage);d.push(c.url)}else{var c=H(u.value,$.PreviousPage);d.push(c.url)}};return A(()=>{window.addEventListener("touchstart",m),window.addEventListener("touchend",k)}),U(()=>{window.removeEventListener("touchstart",m),window.removeEventListener("touchend",k)}),(_,w)=>{const n=j,y=N;return I(),P("div",{class:p({container:!0,mobile:a.value==t(o).Mobile})},[x(y,{to:"/",class:p({logos:!0,mobile:a.value==t(o).Mobile})},{default:B(()=>[x(n,{class:"logo",src:`/${s.value==t(i).Dark?"dark":"light"}/logo.png`,loading:"eager"},null,8,["src"])]),_:1},8,["class"]),M("div",{class:p({services:!0,mobile:a.value==t(o).Mobile})},[x(se,{theme:s.value,activedPage:u.value,lastPage:t(v),deviceType:a.value},null,8,["theme","activedPage","lastPage","deviceType"])],2),M("div",{class:p({medias:!0,mobile:a.value==t(o).Mobile})},[x(ie,{theme:s.value},null,8,["theme"])],2)],2)}}}),ce=E(re,[["__scopeId","data-v-035b5b2f"]]),ue={class:"app"},de={class:"content"},me=S({__name:"main",setup(e){const s=q(),a=g(i.Default),u=g(!1),v=g(!1),d=g(!1),r=g(!1);function l(){u.value=!1,v.value=!0,d.value=!0}function m(){u.value=!0,d.value=!1}const k=g(0),_=C(()=>{var c;return((c=f.find(b=>b.url==s.path))==null?void 0:c.pageType)??h.Default}),w=C(()=>{var c,b;return n.value==o.Mobile?((c=f.find(D=>D.url==s.path))==null?void 0:c.mobile)??i.Default:((b=f.find(D=>D.url==s.path))==null?void 0:b.desktop)??i.Default}),n=C(()=>k.value<=768?o.Mobile:o.Desktop),y=C(()=>{var c;return((c=f.find(b=>b.url==s.path))==null?void 0:c.homeButtonTheme)??i.Default});function T(){k.value=Math.min(window.innerWidth,window.outerWidth)}return A(()=>{T(),window.addEventListener("resize",T),window.addEventListener("scroll",T)}),z(()=>{window.removeEventListener("resize",T),window.removeEventListener("scroll",T)}),Z({title:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家",link:[{rel:"icon",type:"image/x-icon",href:"/logo.ico"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap"}],meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0"},{name:"title",content:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家"},{name:"description",content:"為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。"},{name:"keywords",content:"客製化系統, 流程自動化, RPA, 軟體開發, 萊數位, Croxinc Studio"},{property:"og:title",content:"萊|數位(Croxinc Studio) - 客製化系統、流程自動化專家"},{property:"og:url",content:"https://www.croxinc.com"},{property:"og:type",content:"website"},{property:"og:site_name",content:"萊|數位(Croxinc Studio)"},{property:"og:description",content:"為您提供量身打造的作業流程、諮詢服務、各類客製化系統，或是RPA軟體流程自動化。"},{property:"og:image",content:"https://www.croxinc.com/images/croxinc.png"},{property:"og:image:type",content:"image/png"},{property:"og:image:width",content:"294"},{property:"og:image:height",content:"263"},{name:"image",content:"https://www.croxinc.com/images/croxinc.png"}]}),(c,b)=>{const D=O,W=N;return I(),P("div",ue,[M("div",{class:p({container:!0,mobile:t(n)==t(o).Mobile})},[x(J,{name:"header-effects"},{default:B(()=>[M("div",{class:p({header:!0,mobile:t(n)==t(o).Mobile})},[x(ce,{theme:t(w),deviceType:t(n),activedPage:t(_)},null,8,["theme","deviceType","activedPage"])],2)]),_:1}),M("div",de,[x(D,{deviceType:t(n),onAnimationCompleted:m,onAnimationStart:l,isHeaderLoaded:t(r)},null,8,["deviceType","isHeaderLoaded"])])],2),t(n)==t(o).Mobile?(I(),P("button",{key:0,class:p({home:!0,dark:t(y)==t(i).Dark,light:t(y)==t(i).Light})},[x(W,{class:p({homeLink:!0,dark:t(y)==t(i).Dark,light:t(y)==t(i).Light}),homeButtonType:t(a),to:"/"},{default:B(()=>b[0]||(b[0]=[Q("HOME")])),_:1},8,["class","homeButtonType"])],2)):K("",!0)])}}}),be=E(me,[["__scopeId","data-v-55f436cc"]]);export{be as default};
