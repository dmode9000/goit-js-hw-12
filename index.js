import{S as P,i as q,a as M}from"./assets/vendor-CrlV4O_2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const u=document.querySelector(".gallery"),g=document.querySelector(".loader"),y=document.querySelector("#load-more");let p;function S(){p=u.children[u.children.length-1].getBoundingClientRect().height,window.scrollBy({top:(p+24)*3,left:0,behavior:"smooth"})}const x=new P(".gallery a",{spinner:!0,captions:!0,captionDelay:500,captionsData:"alt",overlay:!0,overlayOpacity:.9});function h(o){const e=o.map(s=>O(s)).join("");u.insertAdjacentHTML("beforeend",e),x.refresh()}function B(){u.innerHTML=""}function w(){g.style.display="block"}function d(){g.style.display="none"}function I(){y.style.display="block"}function L(){y.style.display="none"}function a(o){q.warning({message:o,position:"topCenter"})}function O(o){const{largeImageURL:e,webformatURL:s,tags:i,likes:t,views:r,comments:n,downloads:v}=o;return`
        <li class="gallery-item">
          <a class="gallery-item-link" href="${e}">
            <img
              class="gallery-item-image"
              src="${s}"
              alt="${i}"
              height="152"
            />
          </a>
          <ul class="gallery-item-specs">
            <li>Likes <span data-likes>${t}</span></li>
            <li>Views <span data-views>${r}</span></li>
            <li>Comments <span data-comments>${n}</span></li>
            <li>Downloads <span data-downloads>${v}</span></li>
          </ul>
        </li>
  
  `}const $="50783021-cc03e5dbcf508bf27b2e23464",E="https://pixabay.com/api/",m=15;async function b(o,e=1){try{const{data:s}=await M.get(E,{params:{key:$,q:o.trim(),per_page:m,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0}});return s}catch(s){a(s)}}const f=document.querySelector(".form");let l=1,c;f.addEventListener("submit",async o=>{if(o.preventDefault(),c=f.elements["search-text"].value.trim(),!c){a("Please enter some text");return}B(),w(),l=1;try{const e=await b(c);d(),e.hits.length===0?a("Sorry, there are no images matching your search query. Please try again"):h(e.hits),e.totalHits>m?I():L()}catch(e){d(),a("getImagesByQuery() "+e.message)}});y.addEventListener("click",async o=>{l++,w();try{const e=await b(c,l);d(),h(e.hits),S(),e.totalHits<=m*l&&(L(),a("We're sorry, but you've reached the end of search results."))}catch(e){d(),a(e.message)}});
//# sourceMappingURL=index.js.map
