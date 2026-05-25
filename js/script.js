// Initialize Lucide Icons
lucide.createIcons();

// --- Hero Carousel ---
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    let autoPlayTimer;

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        currentSlide = (n + slideCount) % slideCount;
        
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function startAutoPlay() {
        autoPlayTimer = setInterval(nextSlide, 6000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        startAutoPlay();
    }

    // Event Listeners for Carousel
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
    }

    indicators.forEach((indicator) => {
        indicator.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            goToSlide(index);
            resetAutoPlay();
        });
    });

    // Start auto play
    if (slides.length > 0) {
        startAutoPlay();
    }
});

// --- Modal Logic ---
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Close modal on clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// --- Pre-fill Form from Gallery/Hero ---
function selectMurti(murtiName) {
    const selectEl = document.getElementById('murtiType');
    if (selectEl) {
        selectEl.value = murtiName;
    }
}

// --- Form Submission Logic ---
function submitForm(e) {
    e.preventDefault(); // Prevent page reload
    
    const form = document.getElementById('booking-form');
    const successMsg = document.getElementById('success-message');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Original button content
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i data-lucide="loader" class="animate-spin"></i> Processing...';
    lucide.createIcons();
    submitBtn.disabled = true;

    // Simulate API Call (800ms)
    setTimeout(() => {
        form.classList.add('hidden');
        successMsg.classList.remove('hidden');
        
        // Reset button state
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
        lucide.createIcons();
    }, 800);
}

function resetForm() {
    const form = document.getElementById('booking-form');
    const successMsg = document.getElementById('success-message');
    
    form.reset();
    
    successMsg.classList.add('hidden');
    form.classList.remove('hidden');
}

// --- Smooth Scrolling for Navigation ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// --- Gallery Filter Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('#gallery-grid .gallery-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            galleryCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden-card');
                } else {
                    card.classList.add('hidden-card');
                }
            });
        });
    });
});

// --- Mobile Menu Toggle ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');
    
    if (mobileBtn && desktopNav) {
        mobileBtn.addEventListener('click', () => {
            desktopNav.classList.toggle('show-mobile-menu');
            
            // Toggle icon from menu to x
            const icon = mobileBtn.querySelector('i');
            if (icon) {
                if (desktopNav.classList.contains('show-mobile-menu')) {
                    icon.setAttribute('data-lucide', 'x');
                } else {
                    icon.setAttribute('data-lucide', 'menu');
                }
                lucide.createIcons();
            }
        });
    }
});
