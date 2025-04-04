(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=`
  <header class=" bg-white shadow-md">
    <nav class="w-full mx-auto flex flex-row justify-between items-center p-1"> 

      <div class="flex ml-2 mt-1">
        <img src="/src/assets/svg/layer1.svg" alt="Logo">
        <div>
          <img src="/src/assets/svg/g788.svg" alt="Logo Name" class="mt-5 ml-1">
        </div>
      </div>

        <ul class="hidden md:flex flex-row space-x-6">
            <li><a href="/index.html" class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Αρχική</a></li>
            <li><a href="#" class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Υπηρεσίες</a></li>
            <li><a href="#" class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Συχνές Ερωτήσεις</a></li>
            <li><a href="/contact.html" class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Επικοινωνία</a></li>
        </ul>

        <button class="relative hidden md:inline-flex items-center justify-center px-5 py-2.5 mb-2 me-2 text-sm md:text-lg font-medium
         text-logoGold border border-logoGold rounded-lg hover:bg-logoGold hover:text-white focus:ring-4 focus:outline-none
         focus:ring-logoGoldDark shadow-md shadow-logoGold">
              Καλέστε
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
        <li><a href="#" class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Home</a></li>
        <li><a href="#" class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Υπηρεσίες</a></li>
        <li><a href="#" class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Πιστοποιητικά</a></li>
        <li><a href="#" class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Επικοινωνία</a></li>
      </ul>
    </div>

  </header>

`,f=`
    <footer class="footer footer-horizontal footer-center bg-urbanGrayLight text-base-content rounded p-10">
    <nav class="flex flex-col md:flex-row justify-center gap-10">
      <a href="./index.html" class="link link-hover">Αρχική</a>
      <a href="./index.html" class="link link-hover">Υπηρεσίες</a>
      <a href="./index.html" class="link link-hover">Συχνές Ερωτήσεις</a>
      <a href="./contact.html" class="link link-hover">Επικοινωνία</a>
    </nav>
    <nav>
    
      <div class="flex flex-col md:flex-row justify-center m-10 gap-10 align">
        <p class="text-xl ">Find us</p>    
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="fill-current">
            <path
              d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </div>
    </nav>
    <aside class="flex justify-center mt-2">
      <p>Copyright © 2025 - All rights reserved by PestXperts</p>
    </aside>
  </footer>
`;document.getElementById("header").innerHTML=h;document.getElementById("footer").innerHTML=f;const d=document.getElementById("menu-toggle"),c=document.getElementById("mobile-menu"),u=document.getElementById("overlay");d.addEventListener("click",()=>{d.classList.toggle("open"),c.classList.toggle("translate-x-0"),c.classList.toggle("translate-x-full"),u.classList.toggle("opacity-100"),u.classList.toggle("pointer-events-none")});document.addEventListener("DOMContentLoaded",()=>{});const n=document.querySelectorAll(".carousel-item");let o=0;function g(a){n.forEach((l,r)=>{l.style.opacity=r===a?"1":"0"})}function m(){o=(o+1)%n.length,g(o)}function p(){o=(o-1+n.length)%n.length,g(o)}document.getElementById("nextBtn").addEventListener("click",m);document.getElementById("prevBtn").addEventListener("click",p);setInterval(m,5e3);
