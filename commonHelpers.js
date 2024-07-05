import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d="44734756-d98c11aebccc1bae684f0851d";function h(s){const r="https://pixabay.com",i="/api/",o=new URLSearchParams({key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${i}?${o}`,t=new Headers;return t.append("Content-Type","application/json"),fetch(e,{options:o,requestOptions:{method:"GET",headers:t,redirect:"follow"}}).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function f(s){const{webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:a}=s;return`<li class="list__card">
<a href="${i}"><img src="${r}" alt="${o}"></a>
<ul>
<li class="list__card-headers">
<h3>Likes</h3>
<h4>${e}</h4>
</li>
<li class="list__card-headers">
<h3>Views</h3>
<h4>${t}</h4>
</li>
<li class="list__card-headers">
<h3>Comments</h3>
<h4>${n}</h4>
</li>
<li class="list__card-headers">
<h3>Downloads</h3>
<h4>${a}</h4>
</li>
</ul>
</li>`}function m(s){return s.map(f).join("")}function p(){return`<li class='pre-loader'>
    <div class='loader'></div>
  </li>`}const c={form:document.querySelector(".js-form"),list:document.querySelector(".js-list")};c.form.addEventListener("submit",g);function g(s){s.preventDefault();const r=s.currentTarget,i=r.elements.query.value.trim().toLowerCase();if(!i)return;const o=p();c.list.insertAdjacentHTML("afterbegin",o),h(i).then(e=>{e.hits.length||l.error({title:"Caution",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const t=m(e.hits);c.list.innerHTML=t}).catch(e=>{console.log(e)}).finally(()=>{r.reset(),new u(".js-list a",{})})}
//# sourceMappingURL=commonHelpers.js.map
