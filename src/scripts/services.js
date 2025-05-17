// services.js
export function initModals() {
  
  
  // Άνοιγμα modal
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault(); // Αποφυγή πιθανών ανακατευθύνσεων
      const modalId = btn.getAttribute('data-modal-open');
      const modal = document.getElementById(modalId);
   
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Κλείσιμο modal
  document.querySelectorAll('[data-modal-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

  // Κλείσιμο με κλικ έξω ή ESC
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(modal => {
        if (!modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
          document.body.style.overflow = '';
        }
      });
    }
  });


  
}

export function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    if (!modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
  document.body.style.overflow = '';
}
