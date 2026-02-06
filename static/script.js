// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap dropdowns
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
        return new bootstrap.Dropdown(dropdownToggleEl);
    });

    // Initialize Bootstrap navbar collapse
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }

    // Let browser handle anchor jumps for instant navigation

    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            
            // Here you would typically send data to server
            // For now, just show success message
            alert(`Thank you ${name} for your message! We will contact you soon.`);
            this.reset();
        });
    }

    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (email) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            }
        });
    }

    // Add active class to nav links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function highlightNavLink() {
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        link.classList.add('active');
                    }
                }
            });
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);

    // Hero slider (simple implementation)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(index) {
        if (slides.length > 0) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }
    }
    
    // Auto slide change every 5 seconds
    if (slides.length > 1) {
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 5000);
    }

    // Search functionality
    const searchInput = document.querySelector('.nav-search input');
    const searchIcon = document.querySelector('.nav-search i');
    
    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', () => {
            searchInput.focus();
        });

        searchInput.addEventListener('focus', () => {
            searchInput.style.width = '250px';
        });

        searchInput.addEventListener('blur', () => {
            if (window.innerWidth > 768) {
                searchInput.style.width = '200px';
            }
        });
    }

    // Adjust header for mobile
    function adjustHeaderForMobile() {
        const headerMiddle = document.querySelector('.header-middle');
        const navbar = document.querySelector('.navbar');
        const windowWidth = window.innerWidth;
        
        if (windowWidth <= 768) {
            headerMiddle.style.padding = '0.5rem 0';
            if (navbar) navbar.style.padding = '0.5rem 0';
        } else {
            headerMiddle.style.padding = '1rem 0';
            if (navbar) navbar.style.padding = '0.8rem 0';
        }
    }

    // Adjust on load and resize
    window.addEventListener('load', adjustHeaderForMobile);
    window.addEventListener('resize', adjustHeaderForMobile);

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
        
        // Call adjustHeaderForMobile on load
        adjustHeaderForMobile();
    });

    // Sticky header on scroll (collapse navbar without leaving a gap)
    let lastScroll = 0;
    const headerBottom = document.querySelector('.header-bottom');
    
    window.addEventListener('scroll', () => {
        if (!headerBottom) return;

        const currentScroll = window.pageYOffset;
        const isScrollingDown = currentScroll > lastScroll;
        const shouldHide = currentScroll > 200 && isScrollingDown;

        if (currentScroll > 50 && shouldHide) {
            document.body.classList.add('nav-hidden');
        } else {
            document.body.classList.remove('nav-hidden');
        }
        
        lastScroll = currentScroll;
    });
});

// Share functionality
document.addEventListener('DOMContentLoaded', function() {
    // Update share links with current page URL
    const currentUrl = encodeURIComponent(window.location.href);
    const shareLinks = document.querySelectorAll('.dropdown-item[href*="sharer"]');
    
    shareLinks.forEach(link => {
        const originalHref = link.getAttribute('href');
        const updatedHref = originalHref.replace(/url=.*?(?=&|$)/, `url=${currentUrl}`);
        link.setAttribute('href', updatedHref);
    });
});
