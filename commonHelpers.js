import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="44734756-d98c11aebccc1bae684f0851d";function f(o){const r="https://pixabay.com",i="/api/",s=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${i}?${s}`,t=new Headers;return t.append("Content-Type","application/json"),fetch(e,{options:s,requestOptions:{method:"GET",headers:t,redirect:"follow"}}).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function d(o){const{webformatURL:r,largeImageURL:i,tags:s,likes:e,views:t,comments:n,downloads:a}=o;return`<li class="list__card">
            <a href="${i}"><img src="${r}" alt="${s}"></a>
            <ul>
              <li>
                <p>Likes</p>
                <p>${e}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${t}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${n}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${a}</p>
              </li>
            </ul>
          </li>`}function m(o){return o.map(d).join("")}function h(){return`<li class='pre-loader'>
    <div class='loader'></div>
  </li>`}const c={form:document.querySelector(".js-form"),list:document.querySelector(".js-list")};c.form.addEventListener("submit",g);function g(o){o.preventDefault();const r=o.currentTarget,i=r.elements.query.value.trim().toLowerCase();if(!i)return;const s=h();c.list.insertAdjacentHTML("afterbegin",s),f(i).then(e=>{e.hits.length||l.error({title:"Caution",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const t=m(e.hits);c.list.innerHTML=t}).catch(e=>{console.log(e)}).finally(()=>{r.reset(),new u(".js-list a",{})})}
//# sourceMappingURL=commonHelpers.js.map
