import{S as v,i as P,a as q}from"./assets/vendor-CrlV4O_2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const u=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector("#load-more");let y;function M(){y=u.children[u.children.length-1].getBoundingClientRect().height,window.scrollBy({top:(y+24)*3,left:0,behavior:"smooth"})}const S=new v(".gallery a",{spinner:!0,captions:!0,captionDelay:500,captionsData:"alt",overlay:!0,overlayOpacity:.9});function g(o){const e=o.map(a=>B(a)).join("");u.insertAdjacentHTML("beforeend",e),S.refresh()}function x(){u.innerHTML=""}function O(){h.style.display="block"}function d(){h.style.display="none"}function $(){m.style.display="block"}function L(){m.style.display="none"}function s(o){P.warning({message:o,position:"topCenter"})}function B(o){const{largeImageURL:e,webformatURL:a,tags:i,likes:t,views:r,comments:n,downloads:w}=o;return`
        <li class="gallery-item">
          <a class="gallery-item-link" href="${e}">
            <img
              class="gallery-item-image"
              src="${a}"
              alt="${i}"
              height="152"
            />
          </a>
          <ul class="gallery-item-specs">
            <li>Likes <span data-likes>${t}</span></li>
            <li>Views <span data-views>${r}</span></li>
            <li>Comments <span data-comments>${n}</span></li>
            <li>Downloads <span data-downloads>${w}</span></li>
          </ul>
        </li>
  
  `}const E="50783021-cc03e5dbcf508bf27b2e23464",I="https://pixabay.com/api/",f=15;async function b(o,e=1){try{const{data:a}=await q.get(I,{params:{key:E,q:o.trim(),per_page:f,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0}});return a}catch(a){s(a)}}const p=document.querySelector(".form");let l=1,c;p.addEventListener("submit",o=>{if(o.preventDefault(),c=p.elements["search-text"].value.trim(),!c){s("Please enter some text");return}x(),O(),l=1,b(c).then(e=>{d(),e.hits.length===0?s("Sorry, there are no images matching your search query. Please try again"):g(e.hits),e.totalHits>f?$():L()}).catch(e=>{d(),s(e.message)})});m.addEventListener("click",o=>{l++,b(c,l).then(e=>{g(e.hits),M(),e.totalHits<=f*l&&(L(),s("We're sorry, but you've reached the end of search results."))}).catch(e=>{d(),s(e.message)})});
//# sourceMappingURL=index.js.map
