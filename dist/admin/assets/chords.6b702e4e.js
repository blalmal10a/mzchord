import{ag as f,W as l,ak as d,al as m}from"./index.1fb80485.js";const u="chord",s=f({list:[],detail:{_id:null,data:"",difficulty:"Intermediate",song:null,isDraft:!0},pagination:{rowsPerPage:15,rowsNumber:0},getList:h,getDetail:y,onSubmit:p,columns:[{label:"Difficulty",name:"difficulty",field:a=>a.difficulty,align:"left"},{label:"Status",name:"isDraft",field:a=>a.isDraft?"Draft":"Confirmed",align:"left"},{name:"actions",align:"right"}]});async function h(a){var i,n,e;try{const{q:t,route:c,router:r}=l;let o={page:s.pagination.page,limit:s.pagination.rowsPerPage};a!=null&&a.pagination&&(o.page=a.pagination.page,o.limit=a.pagination.rowsPerPage,a.pagination.search&&(o["difficulty[eq]"]=a.pagination.search),console.log(o));const g=await d.get(`song/${l.route.params.songId}/chord`,{params:o});s.list=g.data.data,s.pagination.rowsNumber=g.data.total}catch(t){console.error(t.message),m.create((e=(n=(i=t.response)==null?void 0:i.data)==null?void 0:n.message)!=null?e:"Server error")}}async function p(){var a,i,n;try{const{q:e,route:t,router:c}=l,{detail:r}=s,o=r._id?`${u}/${r._id}`:`song/${t.params.songId}/chord`,g=r._id?"put":"post",w=await d[g](o,r);c.push({name:"song-chords",params:{songId:t.params.songId}})}catch(e){m.create((n=(i=(a=e.response)==null?void 0:a.data)==null?void 0:i.message)!=null?n:"Server error"),console.error(e.message)}}async function y(){var e,t,c;const{q:a,route:i,router:n}=l;try{a.loading.show();const r=await d.get(`${u}/${i.params.id}`);s.detail=r.data,a.loading.hide()}catch(r){a.loading.hide(),m.create((c=(t=(e=r.response)==null?void 0:e.data)==null?void 0:t.message)!=null?c:"Server error")}}export{s as c};
