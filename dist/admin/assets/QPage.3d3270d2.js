import{u as y,a as q}from"./use-dark.dc7bba1c.js";import{c as i,b as s,h as d,i as l,n as g,j as c,k as t,m as v,ab as m}from"./index.1fb80485.js";var b=i({name:"QCard",props:{...y,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:o}){const{proxy:{$q:r}}=g(),e=q(a,r),u=s(()=>"q-card"+(e.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>d(a.tag,{class:u.value},l(o.default))}}),$=i({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(a,{slots:o}){const{proxy:{$q:r}}=g(),e=c(v,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(c(m,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const h=s(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof a.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:r.screen.height;return a.styleFn(n,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":r.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":r.screen.height-n+"px"}}),f=s(()=>`q-page${a.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:f.value,style:h.value},l(o.default))}});export{$ as Q,b as a};
