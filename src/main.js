import './style.css'

// Top of file (after imports)
let app, menuToggle, mobileMenu, overlay;
let carouselInterval = null;

const BASE_PATH = '/';
const ROUTES = {
  [BASE_PATH]: './pages/home.html',
  [`${BASE_PATH}services`]: './pages/services.html',
  [`${BASE_PATH}pests`]: './pages/pest.html',
  [`${BASE_PATH}faq`]: './pages/faq.html',
  [`${BASE_PATH}contact`]: './pages/contact.html',
  [`${BASE_PATH}viber-fallback`]: './pages/viber-fallback.html'
};

// Header HTML
const headerHTML = `
  <header class="bg-navbar shadow-md w-full z-50">
    <nav class="w-full mx-auto flex flex-row justify-between items-center p-1" aria-label="Κύρια Πλοήγηση"> 
      <div class="flex ml-2 md:ml-5 mt-1">
        <img src="./assets/svg/layer1.svg" alt="Λογότυπο PestXperts">
        <div>
        <a href="${BASE_PATH}" data-link>
          <img src="./assets/svg/g788.svg" alt="Logo Name" class="mt-5 ml-1">
        </a>
          
        </div>
      </div>
      <ul class="hidden lg:flex flex-row space-x-6">
        <li><a href="${BASE_PATH}" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Αρχική</a></li>
        <li><a href="${BASE_PATH}services" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Υπηρεσίες</a></li>
        <li><a href="${BASE_PATH}pests" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Έντομα</a></li>
        <li><a href="${BASE_PATH}faq" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Συχνές Ερωτήσεις</a></li>
        <li><a href="${BASE_PATH}contact" data-link class="text-gray-700 font-medium hover:text-logoGold transition-colors duration-300 text-md md:text-lg">Επικοινωνία</a></li>
      </ul>
      <button
         onclick="window.location.href='tel:+306978102685'" 
          class="relative hidden lg:inline-flex items-center justify-center px-5 py-2.5  me-5 text-sm md:text-lg font-medium
           text-logoGold border border-logoGold rounded-lg hover:bg-logoGold hover:text-white focus:ring-4 focus:outline-none
           focus:ring-logoGoldDark shadow-md shadow-logoGold">
             <i class="fa-solid fa-phone mr-2"></i> Καλέστε
      </button>
      <button id="menu-toggle" aria-label="Άνοιγμα μενού" aria-expanded="false" aria-controls="mobile-menu" class="relative mr-3 w-8 h-8 flex flex-col justify-center items-center lg:hidden group z-70">
        <span class="bg-urbanGray block absolute h-1 w-8 rounded transition-all duration-300 ease-in-out top-0 group-[.open]:top-1/2 group-[.open]:translate-y-[-50%] group-[.open]:rotate-45"></span>
        <span class="bg-urbanGray block absolute h-1 w-8 rounded transition-all duration-300 ease-in-out top-1/2 translate-y-[-50%] group-[.open]:opacity-0"></span>
        <span class="bg-urbanGray block absolute h-1 w-8 rounded transition-all duration-300 ease-in-out bottom-0 group-[.open]:bottom-1/2 group-[.open]:translate-y-[50%] group-[.open]:-rotate-45"></span>
      </button>
    </nav>
    <div id="overlay" class="fixed inset-0  bg-white/10 backdrop-blur-xl shadow-xl opacity-0 pointer-events-none transition-opacity duration-300 ease-in-out z-50"></div> 
    <div id="mobile-menu" class="fixed top-0 right-0 w-64 h-full bg-urbanGrayLight shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-60">
      <ul class="flex flex-col space-y-6 p-8">
        <li><a href="${BASE_PATH}" data-link data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Αρχική</a></li>
        <li><a href="${BASE_PATH}services" data-link data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Υπηρεσίες</a></li>
        <li><a href="${BASE_PATH}pests" data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Έντομα</a></li>
        <li><a href="${BASE_PATH}faq" data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Συχνές Ερωτήσεις</a></li>
        <li><a href="${BASE_PATH}contact" data-link class="text-urbanGray hover:text-logoGold text-lg transition-colors duration-200">Επικοινωνία</a></li>
      </ul>
    </div>
  </header>
`;

// Footer HTML
const footerHTML = `
    <footer class=" footer footer-horizontal footer-center bg-gray-100 text-gray-900 text-lg rounded p-12">
    <nav class="flex flex-col md:flex-row justify-center items-center gap-10" aria-label="Πλοήγηση σελίδας">
      <a href="${BASE_PATH}" data-link class="link link-hover font-semibold">Αρχική</a>
      <a href="${BASE_PATH}services" data-link class="link link-hover font-semibold">Υπηρεσίες</a>
      <a href="${BASE_PATH}pests" data-link class="link link-hover font-semibold">Έντομα</a>
      <a href="${BASE_PATH}faq" data-link class="link link-hover font-semibold">Συχνές Ερωτήσεις</a>
      <a href="${BASE_PATH}contact" data-link class="link link-hover font-semibold">Επικοινωνία</a>
    </nav>
    <nav aria-label="Σύνδεσμοι κοινωνικών δικτύων">
      <div class="flex justify-center m-10 gap-6 items-center">
        <p class="text-2xl font-bold ">Find us</p>
        <div class="gap-4 flex pt-1">
          <a href="https://www.facebook.com/profile.php?id=61556143096333" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fa-brands fa-facebook text-2xl"></i></a>
          <a href="https://www.instagram.com/pestxperts.gr" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram text-2xl "></i></a>
          <a href="https://g.co/kgs/2WvvY1t" target="_blank" rel="noopener noreferrer" aria-label="Google"><i class="fa-brands fa-google text-2xl"></i></a>
          <a href="https://www.tiktok.com/@pestxperts?_t=ZN-8wJbQx9r7d0&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i class="fa-brands fa-tiktok text-2xl"></i></a>
        </div>    
      </div>
    </nav>
    <aside class="flex justify-center pt-10 mt-10">
      <p>Copyright © 2025 - All rights reserved by PestXperts</p>
    </aside>
  </footer>
`;

async function loadPage(url = location.pathname) {
  try {
    const path = url.startsWith(BASE_PATH) ? url : `${BASE_PATH}${url.replace(/^\//, '')}`;
    const pagePath = ROUTES[path] || ROUTES[BASE_PATH];
    
    const response = await fetch(pagePath);
    if (!response.ok) throw new Error('Page not found');
    
    app.innerHTML = await response.text();
    window.scrollTo(0, 0);

    if (path.includes('/services') || path.includes('/home') || path === '/') {
      const { initModals } = await import('./scripts/services.js');
      initModals();
    }

    // Initialize modules based on route
    if (path.includes('/pests')) {
      const { initPests } = await import('./scripts/pests.js');
      await initPests();
    }

    updateActiveLink(path);
    initPageFeatures();
    toggleMobileMenu(false);
    
    if (location.pathname !== path) {
      history.pushState(null, '', path);
    }
  } catch (error) {
    console.error("Page load error:", error);
    // Redirect to home if page not found
    if (location.pathname !== BASE_PATH) {
      history.replaceState(null, '', BASE_PATH);
      loadPage(BASE_PATH);
    }
  }
}


function initPageFeatures() {
  clearInterval(carouselInterval);
  initCarousel();
  initFaqToggles();
}

function initCarousel() {
  const slides = document.querySelectorAll(".carousel-item");
  if (!slides.length) return;
  
  let currentIndex = 0;
  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
    });
  };

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  if (nextBtn) nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  };

  if (prevBtn) prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  };

  showSlide(0);
  carouselInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);
}

function initFaqToggles() {
  document.querySelectorAll(".faqBtn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const answer = document.getElementById(`answer${index + 1}`);
      const arrow = btn.querySelector("svg");
      
      if (answer) answer.classList.toggle("hidden");
      if (arrow) arrow.classList.toggle("rotate-180");
    });
  });
}

function updateActiveLink(currentPath) {
  document.querySelectorAll('[data-link]').forEach(link => {
    const linkPath = link.getAttribute('href');
    const isActive = currentPath === linkPath || 
                    (currentPath === `${BASE_PATH}` && linkPath === `${BASE_PATH}`);
    
    link.classList.toggle('active', isActive);
    link.classList.toggle('text-logoGold', isActive);
  });
}

function toggleMobileMenu(show = null) {
  const shouldShow = show ?? !menuToggle.classList.contains('open');
  
  menuToggle.classList.toggle('open', shouldShow);
  mobileMenu.classList.toggle('translate-x-0', shouldShow);
  mobileMenu.classList.toggle('translate-x-full', !shouldShow);
  overlay.classList.toggle('opacity-100', shouldShow);
  overlay.classList.toggle('pointer-events-none', !shouldShow);
}

function handleNavigation(event) {
  if (event.target.matches('[data-link]')) {
    event.preventDefault();
    loadPage(event.target.getAttribute('href'));
  }
}

function navigateTo(route){
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.add('hidden');
  });
  document.body.style.overflow = '';
  loadPage('/' + route);
}

window.openViber = function () {
  const now = Date.now();
  window.location.href = "viber://chat?number=%2B306978102685";

  setTimeout(() => {
    if (Date.now() - now < 2500) {
      navigateTo('viber-fallback');
    }
  }, 2000);
};


// Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Inject templates
  document.getElementById('header').innerHTML = headerHTML;
  document.getElementById('footer').innerHTML = footerHTML;

   // Cache elements
   app = document.querySelector("#app");
   menuToggle = document.getElementById('menu-toggle');
   mobileMenu = document.getElementById('mobile-menu');
   overlay = document.getElementById('overlay');
 
   // Event listeners
   menuToggle.addEventListener('click', () => toggleMobileMenu());
   overlay.addEventListener('click', () => toggleMobileMenu(false));
   document.addEventListener('click', handleNavigation);
   window.addEventListener('popstate', () => loadPage());
 
   window.navigateTo = navigateTo;
   
  // Initial load
  loadPage();
});