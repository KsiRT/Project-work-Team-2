(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();(()=>{const t=document.querySelector(".reviews-modal-container"),o=document.querySelector(".reviews-modal-open"),r=document.querySelector(".reviews-modal-close"),l=document.body,e=()=>{const n=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!n),t.classList.toggle("is-hidden"),(n?"enableBodyScroll":"disableBodyScroll")==="enableBodyScroll"?l.style.overflow="auto":l.style.overflow="hidden"};o.addEventListener("click",e),r.addEventListener("click",e)})();new Swiper(".reviews-cards-container",{spaceBetween:16,loop:!0,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:2e3,pauseOnMouseEnter:!0},grabCursor:!0,breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:3,spaceBetween:28}}});new Swiper(".prod-list-container",{slidesPerView:1,spaceBetween:18,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2.6},1200:{slidesPerView:4}}});(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn2:document.querySelector("[data-modal-open-two]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",o),t.openModalBtn2.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",o),t.closeMenuBtn.addEventListener("click",o);function o(){t.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-sub-open]"),closeModalBtn:document.querySelector("[data-modal-sub-close]"),modal:document.querySelector("[data-sub-modal]")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o);function o(){t.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();