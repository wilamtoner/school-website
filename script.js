/**
 * Bright Future Academy - Interactive Website Engine
 */

document.addEventListener('DOMContentLoaded', function() {
  initHeroSlider();
  initGalleryFilter();
  initFormHandlers();
  initModals();
});

// Hero Slider
function initHeroSlider() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length <= 1) return;

  let currentIndex = 0;
  setInterval(() => {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
  }, 5000);
}

// Program Tabs Switcher
function switchProgramTab(tabName) {
  const btns = document.querySelectorAll('.program-tabs .tab-btn');
  const contents = document.querySelectorAll('.program-content');

  btns.forEach(b => b.classList.remove('active'));
  contents.forEach(c => c.style.display = 'none');

  const activeBtn = Array.from(btns).find(b => b.textContent.toLowerCase().includes(tabName.toLowerCase()));
  if (activeBtn) activeBtn.classList.add('active');

  const activeContent = document.getElementById(`program-${tabName}`);
  if (activeContent) activeContent.style.display = 'grid';
}

// Gallery Filtering
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.gallery-filter .tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Open Lightbox Modal for Gallery Image
function openLightbox(imgSrc, title) {
  const modal = document.getElementById('lightboxModal');
  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');

  if (modal && imgEl && titleEl) {
    imgEl.src = imgSrc;
    titleEl.textContent = title;
    modal.classList.add('active');
  }
}

// Modal Toggle Handlers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
}

// Form Handlers
function initFormHandlers() {
  // Admissions Form
  const admissionsForm = document.getElementById('admissionsForm');
  if (admissionsForm) {
    admissionsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const studentName = document.getElementById('admStudentName').value;
      const grade = document.getElementById('admGrade').value;
      const email = document.getElementById('admEmail').value;

      const applicationRef = 'BFA-ADM-' + Math.floor(100000 + Math.random() * 900000);
      const applications = JSON.parse(localStorage.getItem('bfa_admissions')) || [];
      applications.push({ applicationRef, studentName, grade, email, date: new Date().toLocaleDateString() });
      localStorage.setItem('bfa_admissions', JSON.stringify(applications));

      closeModal('admissionsModal');
      showToast(`🎉 Application Submitted! Reference ID: #${applicationRef}`);
      admissionsForm.reset();
    });
  }

  // Portal Login Form
  const portalLoginForm = document.getElementById('portalLoginForm');
  if (portalLoginForm) {
    portalLoginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const role = document.getElementById('portalRoleSelect').value;
      const username = document.getElementById('portalUsername').value;

      closeModal('portalModal');
      showToast(`Welcome back, ${username}! (${role} Portal logged in successfully)`);
      portalLoginForm.reset();
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;

      const inquiries = JSON.parse(localStorage.getItem('bfa_inquiries')) || [];
      inquiries.push({ name, email, date: new Date().toLocaleDateString() });
      localStorage.setItem('bfa_inquiries', JSON.stringify(inquiries));

      showToast(`Thank you ${name}! Your inquiry has been sent to our admissions counselor.`);
      contactForm.reset();
    });
  }
}

// Toast Alerts
function showToast(message) {
  const container = document.getElementById('toastContainer') || createToastContainer();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🎓</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.id = 'toastContainer';
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}
