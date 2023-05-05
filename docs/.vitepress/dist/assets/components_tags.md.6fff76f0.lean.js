import{_ as a,D as e,i as l,j as o,G as n,B as D,z as t,l as A,O as p}from"./chunks/framework.a4d4515f.js";const E=JSON.parse('{"title":"tags","description":"","frontmatter":{"title":"tags"},"headers":[],"relativePath":"components/tags.md"}'),r={name:"components/tags.md"},c=t("h2",{id:"基础用法",tabindex:"-1"},[A("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),d=t("p",null,"右键打开菜单，可以执行相应操作",-1),i=t("p",null,"tags/basic",-1),C=p("",6);function h(g,y,B,F,f,m){const s=e("Demo");return l(),o("div",null,[c,d,n(s,{source:"%3Ctemplate%3E%0D%0A%20%20%3Cu-tags%0D%0A%20%20%20%20v-model%3D%22tagsList%22%0D%0A%20%20%20%20classic%0D%0A%20%20%20%20%40select%3D%22onSelect%22%0D%0A%20%20%20%20%40refresh%3D%22refresh%22%0D%0A%20%20%20%20%40close%3D%22close%22%0D%0A%20%20%20%20%40close-other%3D%22closeOther%22%0D%0A%20%20%20%20%40close-all%3D%22closeAll%22%0D%0A%20%20%20%20%40full-screen%3D%22fullScreen%22%0D%0A%20%20%3E%3C%2Fu-tags%3E%0D%0A%20%20%3Cel-button%20%40click%3D%22add('b')%22%3Eadd%3C%2Fel-button%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0D%0Aimport%20%7B%20TagApi%20%7D%20from%20'undraw-ui'%0D%0A%0D%0Aconst%20tagsList%20%3D%20ref%3CTagApi%5B%5D%3E(%5B%0D%0A%20%20%7B%0D%0A%20%20%20%20path%3A%20'%2Fhome'%2C%0D%0A%20%20%20%20meta%3A%20%7B%0D%0A%20%20%20%20%20%20title%3A%20'%E9%A6%96%E9%A1%B5'%2C%0D%0A%20%20%20%20%20%20isAffix%3A%20true%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20path%3A%20'%2Fuser'%2C%0D%0A%20%20%20%20meta%3A%20%7B%0D%0A%20%20%20%20%20%20title%3A%20'%E7%94%A8%E6%88%B7%E7%AE%A1%E7%90%86'%2C%0D%0A%20%20%20%20%20%20isAffix%3A%20false%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20path%3A%20'%2Frole'%2C%0D%0A%20%20%20%20meta%3A%20%7B%0D%0A%20%20%20%20%20%20title%3A%20'%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86'%2C%0D%0A%20%20%20%20%20%20isAffix%3A%20false%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%0D%0A%20%20%20%20path%3A%20'%2Fother'%2C%0D%0A%20%20%20%20meta%3A%20%7B%0D%0A%20%20%20%20%20%20title%3A%20'%E5%85%B6%20%E4%BB%96xxxxxxxxxxxx'%2C%0D%0A%20%20%20%20%20%20isAffix%3A%20false%0D%0A%20%20%20%20%7D%0D%0A%20%20%7D%0D%0A%5D)%0D%0A%0D%0Aconst%20onSelect%20%3D%20(tag%3A%20TagApi)%20%3D%3E%20%7B%0D%0A%20%20console.log('select')%0D%0A%7D%0D%0A%0D%0Alet%20n%20%3D%200%0D%0Aconst%20add%20%3D%20(val%3A%20string)%20%3D%3E%20%7B%0D%0A%20%20tagsList.value.push(%7B%20path%3A%20%60%24%7Bn%2B%2B%7D%60%2C%20meta%3A%20%7B%20title%3A%20%60val-%24%7Bn%2B%2B%7D%60%2C%20isAffix%3A%20false%20%7D%20%7D)%0D%0A%7D%0D%0A%0D%0Aconst%20refresh%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log('refresh')%0D%0A%7D%0D%0A%0D%0Aconst%20close%20%3D%20(tag%3A%20TagApi)%20%3D%3E%20%7B%0D%0A%20%20console.log('close')%0D%0A%7D%0D%0A%0D%0Aconst%20closeOther%20%3D%20(tag%3A%20TagApi)%20%3D%3E%20%7B%0D%0A%20%20console.log('closeOther')%0D%0A%7D%0D%0A%0D%0Aconst%20closeAll%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log('closeAll')%0D%0A%7D%0D%0A%0D%0Aconst%20fullScreen%20%3D%20()%20%3D%3E%20%7B%0D%0A%20%20console.log('fullScreen')%0D%0A%7D%0D%0A%3C%2Fscript%3E%0D%0A%0D%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%3C%2Fstyle%3E%0D%0A",path:"tags/basic",description:""},{default:D(()=>[i]),_:1}),C])}const _=a(r,[["render",h]]);export{E as __pageData,_ as default};