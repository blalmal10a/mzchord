import{Q as d}from"./QInput.5b8e5873.js";import{Q as V}from"./QSelect.9bc3ff68.js";import{Q as g,a as k}from"./QPage.1d65c121.js";import{Q as y,j as Q}from"./QForm.f376eef8.js";import{r as v,E as x,o as q,I as r,J as S,K as m,W as U,L as t,aj as a,U as s,P as f,S as h,R as w,_}from"./index.440f000c.js";import{a as o}from"./artists.4a5d0365.js";import"./use-dark.d364a23f.js";import"./format.2ca1748e.js";const B={class:"row q-col-gutter-sm"},F={class:"col-12 col-sm-6 col-lg-4"},N={class:"col-12 col-sm-6 col-lg-4"},P={class:"col-12 col-sm-6 col-lg-4"},j={class:"q-mt-md",style:{position:"sticky",bottom:"0"}},I={class:"row justify-end q-mt-md q-col-gutter-sm"},M={class:"col-auto"},C={class:"col-auto"},T={__name:"FormPage",setup(E){return v(null),x(()=>{const{q:u,route:l,router:n}=U;l.params.id!="add"&&o.getDetail()}),q(()=>{o.detail={_id:null,name:"",sex:"Male",pic:null,socials:[{name:"Facebook",link:""},{name:"Instagram",link:""},{name:"Twitter",link:""}]}}),(u,l)=>(r(),S(g,{padding:""},{default:m(()=>[t(Q,{onSubmit:s(o).onSubmit},{default:m(()=>{var n,c,p;return[t(k,{flat:"",bordered:"",class:"q-pa-md"},{default:m(()=>[a("div",B,[a("div",F,[t(d,{autofocus:"",outlined:"",dense:"","no-error-icon":"",modelValue:s(o).detail.name,"onUpdate:modelValue":l[0]||(l[0]=e=>s(o).detail.name=e),rules:[e=>!!e||"Name of the artist is required"],label:"Name"},null,8,["modelValue","rules"])]),a("div",N,[t(V,{dense:"",outlined:"",label:"Gender",modelValue:s(o).detail.sex,"onUpdate:modelValue":l[1]||(l[1]=e=>s(o).detail.sex=e),options:["Male","Female","Others"]},null,8,["modelValue"])]),a("div",P,[t(d,{dense:"",outlined:"",modelValue:s(o).detail.pic,"onUpdate:modelValue":l[2]||(l[2]=e=>s(o).detail.pic=e),type:"text",label:"Profile image"},null,8,["modelValue"])]),(r(!0),f(w,null,h(s(o).detail.socials,(e,b)=>(r(),f("div",{key:b,class:"col-12 col-sm-6 col-lg-4"},[t(d,{dense:"",outlined:"",onFocus:l[3]||(l[3]=i=>i.target.select()),modelValue:e.link,"onUpdate:modelValue":i=>e.link=i,type:"text",label:`${e.name} profile link`},null,8,["modelValue","onUpdate:modelValue","label"])]))),128))])]),_:1}),a("div",j,[t(y),a("div",I,[a("div",M,[t(_,{outline:"",to:{name:(p=(c=(n=u.$route.meta)==null?void 0:n.ancestors)==null?void 0:c[0])==null?void 0:p.name},style:{"min-width":"150px"},label:"cancel",color:"primary"},null,8,["to"])]),a("div",C,[t(_,{type:"submit",style:{"min-width":"150px"},label:"Submit",color:"primary"})])])])]}),_:1},8,["onSubmit"])]),_:1}))}};export{T as default};
