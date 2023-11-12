import{Q as m}from"./QInput.ba61c024.js";import{Q as p}from"./QSelect.95e45280.js";import{Q as f,a as y}from"./QPage.3d3270d2.js";import{Q as b,j as g}from"./QForm.51eae122.js";import{E as V,o as v,I as Q,J as F,K as n,W as S,L as a,U as t,aj as i,_}from"./index.1fb80485.js";import{a as c}from"./artists.96000a2f.js";import{s as e}from"./songs.48f82933.js";import"./use-dark.dc7bba1c.js";import"./format.c1139b3d.js";const q={class:"q-mt-md",style:{position:"sticky",bottom:"0"}},x={class:"row justify-end q-mt-md q-col-gutter-sm"},U={class:"col-auto"},h={class:"col-auto"},D={__name:"SongForm",setup(w){return V(()=>{const{q:r,route:l,router:s}=S;l.params.id!="add"&&e.getDetail()}),v(()=>{e.detail={_id:null,title:"",artist:null,featuring:null,lyric:""}}),(r,l)=>(Q(),F(f,{padding:""},{default:n(()=>[a(g,{onSubmit:t(e).onSubmit},{default:n(()=>{var s,u,d;return[a(y,{flat:"",bordered:"",class:"q-pa-md"},{default:n(()=>[a(m,{label:"Title",outlined:"",dense:"",modelValue:t(e).detail.title,"onUpdate:modelValue":l[0]||(l[0]=o=>t(e).detail.title=o),rules:[o=>!!o||"Title of the song is required"]},null,8,["modelValue","rules"]),a(p,{dense:"",outlined:"","use-input":"",options:t(c).list,modelValue:t(e).detail.artist,"onUpdate:modelValue":l[1]||(l[1]=o=>t(e).detail.artist=o),"map-options":"","emit-value":"",onFilter:t(e).search_artist,"option-label":"name","option-value":"_id",label:"Artist",hint:""},null,8,["options","modelValue","onFilter"]),a(p,{dense:"",outlined:"","use-input":"",multiple:"",options:t(c).list,modelValue:t(e).detail.featuring,"onUpdate:modelValue":l[2]||(l[2]=o=>t(e).detail.featuring=o),"map-options":"","emit-value":"",onFilter:t(e).search_artist,"option-label":"name","option-value":"_id",label:"Featuring artists",hint:""},null,8,["options","modelValue","onFilter"]),a(m,{outlined:"",modelValue:t(e).detail.lyric,"onUpdate:modelValue":l[3]||(l[3]=o=>t(e).detail.lyric=o),type:"text",label:"Lyrics",class:"lyrics-input",autogrow:""},null,8,["modelValue"])]),_:1}),i("div",q,[a(b),i("div",x,[i("div",U,[a(_,{outline:"",to:{name:(d=(u=(s=r.$route.meta)==null?void 0:s.ancestors)==null?void 0:u[0])==null?void 0:d.name},style:{"min-width":"150px"},label:"cancel",color:"primary"},null,8,["to"])]),i("div",h,[a(_,{type:"submit",style:{"min-width":"150px"},label:"Submit",color:"primary"})])])])]}),_:1},8,["onSubmit"])]),_:1}))}};export{D as default};
