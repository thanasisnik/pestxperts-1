// /src/scripts/pests.js
export async function initPests() {
    try {
        const response = await fetch('/data/pests.json');
    
        // Έλεγχος για 404
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Έλεγχος content type
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("Δεν έλαβα JSON");
        }
    
        const data = await response.json();
  
      const tabButtons = document.querySelector('.tab-buttons');
      const tabContentArea = document.querySelector('.tab-content-area');
      
      // Clear existing content (optional)
      tabButtons.innerHTML = '';
      tabContentArea.innerHTML = '';
  
      data.pests.forEach(pest => {
        // Create tab button
        const tabBtn = document.createElement('button');
        tabBtn.className = 'tab-btn';
        tabBtn.dataset.tab = pest.id;
        tabBtn.textContent = pest.title;
        //accessibility
        tabBtn.setAttribute('role', 'tab');
        tabBtn.setAttribute('aria-controls', `panel-${pest.id}`);

        tabButtons.appendChild(tabBtn);
  
        // Create content
        const tabContent = document.createElement('div');
        tabContent.className = 'tab-content';
        tabContent.id = pest.id;
        tabContent.innerHTML = `
            <div class="pest-container bg-white rounded-lg shadow-md overflow-hidden">
                <div class="flex flex-col md:flex-row gap-6 p-6">
                <img src="${pest.image}" alt="${pest.title}" 
                    class="insect-image w-full md:w-1/3 h-48 object-cover rounded-lg">
                
                <div class="flex-1">
                    <div class="flex items-center gap-4 mb-4">
                    <h2 class="insect-title text-2xl font-bold text-gray-800">${pest.title}</h2>
                    
                    </div>

                    <p class="insect-description text-gray-600 mb-6">${pest.characteristics.description}</p>

                    <div class="mb-6">
                    <h3 class="font-bold text-lg mb-2 text-gray-800">Είδη:</h3>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        ${pest.characteristics.commonSpecies.map(species => `
                        <li class="bg-gray-50 p-2 rounded">
                            <span class="font-medium">${species.name}</span>
                            <span class="text-gray-500 text-sm">(${species.scientificName})</span>
                        </li>
                        `).join('')}
                    </ul>
                    </div>

                   
                    <div class="mb-6 bg-red-50 p-4 rounded-lg border border-red-100">
                      <h3 class="font-bold text-lg mb-2 text-red-800 flex items-center gap-2">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        </svg>
                        Πιθανοί Κίνδυνοι:
                      </h3>
                      <ul class="list-disc pl-5 space-y-1 text-red-700">
                        ${pest.risks.map(risk => `<li>${risk}</li>`).join('')}
                      </ul>
                    </div>

                    <div>
                    <h3 class="font-bold text-lg mb-3 text-gray-800">Τρόποι Αντιμετώπισης:</h3>
                    <div class="grid gap-4">
                        ${Object.entries(pest.solutions).map(([type, solutions]) => `
                        <div class="solution-type">
                            <h4 class="font-semibold mb-2 text-gray-700">
                            ${type === 'chemical' ? 'Χημικοί' : 
                            type === 'physical' ? 'Ατοξικοί' : 'Προληπτικοί'} Τρόποι:
                            </h4>
                            <ul class="list-disc pl-5 space-y-1 text-gray-600">
                            ${solutions.map(solution => `<li>${solution}</li>`).join('')}
                            </ul>
                        </div>
                        `).join('')}
                    </div>
                    </div>
                    ${pest.highlight ? `<p class="mt-2 p-2 text-base text-center font-semibold">${pest.highlight}</p>` : ''}
                </div>
                </div>
            </div>
            `;
        tabContentArea.appendChild(tabContent);
      });
  
      setupTabEvents();
      initTabIndicators();
      activateFirstTab();
  
    } catch (error) {
      console.error('Pests initialization error:', error);
    }
  }
  
  // Helper function
  function getSolutionsHtml(solutions) {
    return Object.values(solutions)
      .flat()
      .map(solution => `<li>${solution}</li>`)
      .join('');
  }
  
  function setupTabEvents() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');

        scrollTabIntoView(btn);
      });
    });
  }
  
  function activateFirstTab() {
    const firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
      firstTab.classList.add('active');
      document.getElementById(firstTab.dataset.tab)?.classList.add('active');
    } 
  }

  function scrollTabIntoView(tabButton) {
    // Έλεγχος αν είμαστε σε κινητή συσκευή (όπου τα tabs είναι οριζόντια)
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      // Υπολογισμός της θέσης του tab στο scroll container
      const tabContainer = document.querySelector('.tab-buttons');
      const tabRect = tabButton.getBoundingClientRect();
      const containerRect = tabContainer.getBoundingClientRect();
      
      // Βρίσκουμε όλα τα tab buttons
      const allTabs = Array.from(document.querySelectorAll('.tab-btn'));
      const currentTabIndex = allTabs.indexOf(tabButton);
      const tabsCount = allTabs.length;
      
      // Υπολογίζουμε αν το tab είναι πλήρως ορατό με περισσότερη ακρίβεια
      const marginOfError = 2; // pixels
      const leftEdgeVisible = tabRect.left >= (containerRect.left - marginOfError);
      const rightEdgeVisible = tabRect.right <= (containerRect.right + marginOfError);
      const fullyVisible = leftEdgeVisible && rightEdgeVisible;
      
      // Ακόμα κι αν το tab είναι ορατό, μπορεί να θέλουμε να το τοποθετήσουμε καλύτερα
      let scrollLeft;
      
      // Πρώτο tab - scrollLeft = 0
      if (currentTabIndex === 0) {
        scrollLeft = 0;
      } 
      // Τελευταίο tab - scrollLeft = max
      else if (currentTabIndex === tabsCount - 1) {
        scrollLeft = tabContainer.scrollWidth - tabContainer.clientWidth;
      }
      // Κοντά στην αρχή (πρώτα 2 tabs)
      else if (currentTabIndex <= 1) {
        scrollLeft = 0;
      }
      // Κοντά στο τέλος (τελευταία 2 tabs)
      else if (currentTabIndex >= tabsCount - 2) {
        scrollLeft = tabContainer.scrollWidth - tabContainer.clientWidth;
      }
      // Αν το tab δεν είναι πλήρως ορατό ή είναι στην άκρη
      else if (!fullyVisible || 
               (tabRect.left - containerRect.left < tabButton.offsetWidth / 2) || 
               (containerRect.right - tabRect.right < tabButton.offsetWidth / 2)) {
        
        // Κεντράρουμε το tab
        scrollLeft = tabButton.offsetLeft - (tabContainer.clientWidth / 2) + (tabButton.offsetWidth / 2);
        
        // Αν κάνουμε κλικ σε tab που είναι αριστερά από το τρέχον ορατό σημείο
        if (tabRect.left < containerRect.left) {
          // Για tab προς τα αριστερά, τοποθετούμε το tab λίγο μετά την αρχή του container
          scrollLeft = tabButton.offsetLeft - (tabButton.offsetWidth / 2);
        }
        // Αν κάνουμε κλικ σε tab που είναι δεξιά από το τρέχον ορατό σημείο
        else if (tabRect.right > containerRect.right) {
          // Για tab προς τα δεξιά, τοποθετούμε το tab λίγο πριν το τέλος του container
          scrollLeft = tabButton.offsetLeft - tabContainer.clientWidth + (tabButton.offsetWidth * 1.5);
        }
      } else {
        // Αν το tab είναι ήδη ορατό και όχι στις άκρες, δεν κάνουμε τίποτα
        return;
      }
      
      // Διασφάλιση ότι το scrollLeft δεν είναι εκτός ορίων
      scrollLeft = Math.max(0, Math.min(scrollLeft, tabContainer.scrollWidth - tabContainer.clientWidth));
      
      // Κάνουμε scroll μόνο αν η νέα θέση είναι διαφορετική από την τρέχουσα
      if (Math.abs(tabContainer.scrollLeft - scrollLeft) > 10) {
        tabContainer.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }



function checkTabsOverflow() {
  const tabContainer = document.querySelector('.tab-buttons');
  if (!tabContainer) return;
  
  // Ελέγχουμε αν υπάρχει οριζόντιο scroll
  const hasScroll = tabContainer.scrollWidth > tabContainer.clientWidth;
  
  // Ελέγχουμε αν υπάρχει περιεχόμενο προς τα δεξιά
  const hasMoreRight = tabContainer.scrollLeft < (tabContainer.scrollWidth - tabContainer.clientWidth);
  
  // Προσθέτουμε/αφαιρούμε την κλάση για την ένδειξη
  if (hasScroll && hasMoreRight) {
    tabContainer.classList.add('has-more-right');
  } else {
    tabContainer.classList.remove('has-more-right');
  }
}

// Αρχικοποίηση της ένδειξης κατά το φόρτωμα και μετά από κάθε scroll
function initTabIndicators() {
  const tabContainer = document.querySelector('.tab-buttons');
  if (!tabContainer) return;
  
  // Αρχικός έλεγχος
  checkTabsOverflow();
  
  // Έλεγχος κατά το scroll
  tabContainer.addEventListener('scroll', checkTabsOverflow);
  
  // Έλεγχος κατά την αλλαγή μεγέθους παραθύρου
  window.addEventListener('resize', checkTabsOverflow);
}


// HTML To show the danger-level
{/* <span class="danger-level px-3 py-1 rounded-full text-sm font-medium
    ${pest.dangerLevel === 'Υψηλός' ? 'bg-red-100 text-red-800' : 
        pest.dangerLevel === 'Μέτριος' ? 'bg-yellow-100 text-yellow-800' : 
        'bg-green-100 text-green-800'}">
    ${pest.dangerLevel} Κίνδυνος
</span> */}