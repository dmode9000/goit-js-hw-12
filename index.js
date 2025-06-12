import{S as b,i as w,a as v}from"./assets/vendor-CrlV4O_2.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const u=document.querySelector(".gallery"),h=document.querySelector(".loader"),p=document.querySelector("#load-more");let y;function P(){y=u.children[u.children.length-1].getBoundingClientRect().height,window.scrollBy({top:(y+24)*3,left:0,behavior:"smooth"})}const q=new b(".gallery a",{spinner:!0,captions:!0,captionDelay:500,captionsData:"alt",overlay:!0,overlayOpacity:.9});function g(o){const e=o.map(a=>$(a)).join("");u.insertAdjacentHTML("beforeend",e),q.refresh()}function M(){u.innerHTML=""}function S(){h.style.display="block"}function d(){h.style.display="none"}function x(){p.style.display="block"}function O(){p.style.display="none"}function n(o){w.warning({message:o,position:"topCenter"})}function $({largeImageURL:o,webformatURL:e,tags:a,likes:i,views:t,comments:r,downloads:s}){return`
        <li class="gallery-item">
          <a class="gallery-item-link" href="${o}">
            <img
              class="gallery-item-image"
              src="${e}"
              alt="${a}"
              height="152"
            />
          </a>
          <ul class="gallery-item-specs">
            <li>Likes <span data-likes>${i}</span></li>
            <li>Views <span data-views>${t}</span></li>
            <li>Comments <span data-comments>${r}</span></li>
            <li>Downloads <span data-downloads>${s}</span></li>
          </ul>
        </li>
  
  `}const B="50783021-cc03e5dbcf508bf27b2e23464",E="https://pixabay.com/api/",f=15;async function L(o,e=1){try{return(await v.get(E,{params:{key:B,q:o.trim(),per_page:f,page:e,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(a){n(a),console.log(a)}}const m=document.querySelector(".form");let l=1,c;m.addEventListener("submit",o=>{if(o.preventDefault(),c=m.elements["search-text"].value.trim(),!c){n("Please enter some text");return}M(),S(),l=1,L(c).then(e=>{d(),e.hits.length===0?n("Sorry, there are no images matching your search query. Please try again"):g(e.hits),e.totalHits>f&&x()}).catch(e=>{d(),n(e.message)})});p.addEventListener("click",o=>{l++,L(c,l).then(e=>{g(e.hits),P(),e.totalHits<=f*l&&(O(),n("We're sorry, but you've reached the end of search results."))}).catch(e=>{d(),n(e.message)})});
//# sourceMappingURL=index.js.map
