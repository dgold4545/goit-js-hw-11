import{S as l,i as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="44734756-d98c11aebccc1bae684f0851d";function f(o){const s="https://pixabay.com",i="/api/",r=new URLSearchParams({key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${i}?${r}`,t=new Headers;return t.append("Content-Type","application/json"),fetch(e,{options:r,requestOptions:{method:"GET",headers:t,redirect:"follow"}}).then(a=>{if(!a.ok)throw new Error(a.status);return a.json()})}function m(o){const{webformatURL:s,largeImageURL:i,tags:r,likes:e,views:t,comments:n,downloads:a}=o;return`<li class="gallery">
            <a href="${i}"><img src="${s}" alt="${r}"></a>
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
          </li>`}function d(o){return o.map(m).join("")}new l(".gallery a",{});const c={form:document.querySelector(".js-form"),list:document.querySelector(".js-list")};c.form.addEventListener("submit",h);function h(o){o.preventDefault();const i=o.currentTarget.elements.query.value.trim().toLowerCase();i&&f(i).then(r=>{r.hits.length||u.error({title:"Caution",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});const e=d(r.hits);c.list.innerHTML=e}).catch(r=>{console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
