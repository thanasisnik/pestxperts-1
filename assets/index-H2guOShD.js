(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u=`
  <header class=" bg-navbar shadow-md">
    <nav class="w-full mx-auto flex flex-row justify-between items-center p-1"> 

      <div class="flex ml-2 mt-1">
        <img src="./assets/svg/layer1.svg" alt="Logo">
        <div>
          <img src="./assets/svg/g788.svg" alt="Logo Name" class="mt-5 ml-1">
        </div>
      </div>

        <ul class="hidden md:flex flex-row space-x-6">
            <li><a href="/index.html" class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Αρχική</a></li>
            <li><a href="#" class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Υπηρεσίες</a></li>
            <li><a href="#" class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Συχνές Ερωτήσεις</a></li>
            <li><a href="./contact.html" class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Επικοινωνία</a></li>
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
        <li><a href="#" class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Αρχική</a></li>
        <li><a href="#" class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Υπηρεσίες</a></li>
        <li><a href="#" class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Συχνές Ερωτήσεις</a></li>
        <li><a href="#" class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Επικοινωνία</a></li>
      </ul>
    </div>

  </header>

`,g=`
    <footer class="footer footer-horizontal footer-center bg-urbanGrayLight text-base-content rounded p-10">
    <nav class="flex flex-col md:flex-row justify-center items-center gap-10">
      <a href="#" class="link link-hover">Αρχική</a>
      <a href="#" class="link link-hover">Υπηρεσίες</a>
      <a href="#" class="link link-hover">Συχνές Ερωτήσεις</a>
      <a href="#" class="link link-hover">Επικοινωνία</a>
    </nav>
    <nav>
    
      <div class="flex justify-center m-10 gap-10 align">
        <p class="text-xl ">Find us</p>    
        <a href="#">
          <i class="fa-brands fa-facebook text-2xl"></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-instagram text-2xl "></i>
        </a>
        <a href="#">
          <i class="fa-brands fa-google text-2xl"></i>
        </a>
      </div>
    </nav>
    <aside class="flex justify-center mt-2">
      <p>Copyright © 2025 - All rights reserved by PestXperts</p>
    </aside>
  </footer>
`;document.getElementById("header").innerHTML=u;document.getElementById("footer").innerHTML=g;const s=document.getElementById("menu-toggle"),i=document.getElementById("mobile-menu"),d=document.getElementById("overlay");s.addEventListener("click",()=>{s.classList.toggle("open"),i.classList.toggle("translate-x-0"),i.classList.toggle("translate-x-full"),d.classList.toggle("opacity-100"),d.classList.toggle("pointer-events-none")});document.addEventListener("DOMContentLoaded",()=>{const l=document.querySelectorAll(".carousel-item");let o=0;function a(t){l.forEach((r,c)=>{r.style.opacity=c===t?"1":"0"})}function n(){o=(o+1)%l.length,a(o)}function e(){o=(o-1+l.length)%l.length,a(o)}document.getElementById("nextBtn").addEventListener("click",n),document.getElementById("prevBtn").addEventListener("click",e),setInterval(n,5e3)});
