(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const m=sessionStorage.getItem("redirect-path");m&&(history.replaceState({},"",m),sessionStorage.removeItem("redirect-path"));const w=`
  <header class="bg-navbar shadow-md">
    <nav class="w-full mx-auto flex flex-row justify-between items-center p-1"> 
      <div class="flex ml-2 mt-1">
        <img src="./assets/svg/layer1.svg" alt="Logo">
        <div>
          <img src="./assets/svg/g788.svg" alt="Logo Name" class="mt-5 ml-1">
        </div>
      </div>
      <ul class="hidden md:flex flex-row space-x-6">
        <li><a href="/pestxperts-1/" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Αρχική</a></li>
        <li><a href="/pestxperts-1/services" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Υπηρεσίες</a></li>
        <li><a href="/pestxperts-1/faq" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Συχνές Ερωτήσεις</a></li>
        <li><a href="/pestxperts-1/contact" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Επικοινωνία</a></li>
      </ul>
      <button class="relative hidden md:inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 text-sm md:text-lg font-medium
         text-logoGold border border-logoGold rounded-lg hover:bg-logoGold hover:text-white focus:ring-4 focus:outline-none
         focus:ring-logoGoldDark shadow-md shadow-logoGold">
             <i class="fa-solid fa-phone mr-2"></i> Καλέστε
      </button>
      <button id="menu-toggle" class="relative w-8 h-8 flex flex-col justify-center items-center md:hidden group z-50">
        <span class="bg-urbanGray block absolute h-1 w-8 rounded transition-all duration-300 ease-in-out top-0 group-[.open]:top-1/2 group-[.open]:translate-y-[-50%] group-[.open]:rotate-45"></span>
        <span class="bg-urbanGray block absolute h-1 w-8 rounded transition-all duration-300 ease-in-out top-1/2 translate-y-[-50%] group-[.open]:opacity-0"></span>
        <span class="bg-urbanGray block absolute h-1 w-8 rounded transition-all duration-300 ease-in-out bottom-0 group-[.open]:bottom-1/2 group-[.open]:translate-y-[50%] group-[.open]:-rotate-45"></span>
      </button>
    </nav>
    <div id="overlay" class="fixed inset-0 bg-urbanGray opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out"></div> 
    <div id="mobile-menu" class="fixed top-0 right-0 w-64 h-full bg-urbanGrayLight shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-40">
      <ul class="flex flex-col space-y-6 p-8">
        <li><a href="/pestxperts-1/" data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Αρχική</a></li>
        <li><a href="/pestxperts-1/services" data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Υπηρεσίες</a></li>
        <li><a href="/pestxperts-1/faq" data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Συχνές Ερωτήσεις</a></li>
        <li><a href="/pestxperts-1/contact" data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Επικοινωνία</a></li>
      </ul>
    </div>
  </header>
`,G=`
    <footer class="footer footer-horizontal footer-center bg-urbanGrayLight text-base-content rounded p-10">
    <nav class="flex flex-col md:flex-row justify-center items-center gap-10">
      <a href="/pestxperts-1/" data-link class="link link-hover">Αρχική</a>
      <a href="/pestxperts-1/services" data-link class="link link-hover">Υπηρεσίες</a>
      <a href="/pestxperts-1/faq" data-link class="link link-hover">Συχνές Ερωτήσεις</a>
      <a href="/pestxperts-1/contact" data-link class="link link-hover">Επικοινωνία</a>
    </nav>
    <nav>
      <div class="flex justify-center m-10 gap-10 align">
        <p class="text-xl ">Find us</p>    
        <a href="#"><i class="fa-brands fa-facebook text-2xl"></i></a>
        <a href="#"><i class="fa-brands fa-instagram text-2xl "></i></a>
        <a href="#"><i class="fa-brands fa-google text-2xl"></i></a>
      </div>
    </nav>
    <aside class="flex justify-center mt-2">
      <p>Copyright © 2025 - All rights reserved by PestXperts</p>
    </aside>
  </footer>
`;document.addEventListener("DOMContentLoaded",()=>{document.getElementById("header").innerHTML=w,document.getElementById("footer").innerHTML=G;const d=document.getElementById("menu-toggle"),a=document.getElementById("mobile-menu"),n=document.getElementById("overlay");d.addEventListener("click",()=>{i()}),n.addEventListener("click",()=>{i(!1)});function i(t=null){t===null?(d.classList.toggle("open"),a.classList.toggle("translate-x-0"),a.classList.toggle("translate-x-full"),n.classList.toggle("opacity-100"),n.classList.toggle("pointer-events-none")):t===!1&&(d.classList.remove("open"),a.classList.remove("translate-x-0"),a.classList.add("translate-x-full"),n.classList.remove("opacity-100"),n.classList.add("pointer-events-none"))}const e={"/pestxperts-1/":"/pestxperts-1/src/pages/home.html","/pestxperts-1/services":"/pestxperts-1/src/pages/services.html","/pestxperts-1/faq":"/pestxperts-1/src/pages/faq.html","/pestxperts-1/contact":"/pestxperts-1/src/pages/contact.html"},s=document.querySelector("#app");let r=null;async function p(t){try{const l=await(await fetch(e[t]||e["/pestxperts-1/"])).text();s.innerHTML=l,i(!1),x()}catch(o){console.error("Σφάλμα φόρτωσης σελίδας:",o),s.innerHTML="<p>Σφάλμα φόρτωσης σελίδας. Παρακαλώ δοκιμάστε ξανά.</p>"}}function x(){r&&clearInterval(r),h(),v()}function h(){const t=document.querySelectorAll(".carousel-item");if(t.length===0)return;let o=0;function l(b){t.forEach((L,k)=>{L.style.opacity=k===b?"1":"0"})}function c(){o=(o+1)%t.length,l(o)}function u(){o=(o-1+t.length)%t.length,l(o)}l(o);const f=document.getElementById("nextBtn"),g=document.getElementById("prevBtn");f&&f.addEventListener("click",c),g&&g.addEventListener("click",u),r=setInterval(c,5e3)}function v(){const t=document.querySelectorAll(".faqBtn");t.length>0&&t.forEach((o,l)=>{o.addEventListener("click",function(){const c=document.getElementById(`answer${l+1}`),u=o.querySelector("svg");c&&u&&(c.classList.toggle("hidden"),u.classList.toggle("rotate-180"))})})}function y(t){if(t.target.matches("[data-link]")){t.preventDefault();const o=t.target.getAttribute("href");history.pushState(null,"",o),p(o)}}window.addEventListener("popstate",()=>p(location.pathname)),document.addEventListener("click",y),p(location.pathname)});
