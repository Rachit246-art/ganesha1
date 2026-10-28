document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Menu Toggle
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var header = document.querySelector('.header');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            header.classList.toggle('active');
        });
    }

    // Close menu when a navigation link is clicked
    var newMenuLinks = document.querySelectorAll('.nav a');
    newMenuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            header.classList.remove('active');
        });
    });

    // 2. Add intersection observer for fade-in animations on scroll
    var observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.classList.add('pre-animation-state');
        observer.observe(section);
    });


});

// Lightbox functionality
function openLightbox(imageSrc) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = imageSrc;
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeLightbox(event) {
    // Close if clicked on the background or the close button
    if (event.target.classList.contains('lightbox') || event.target.classList.contains('close-lightbox')) {
        document.getElementById('lightbox').classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Product Carousel Logic
function moveCarousel(carouselId, direction) {
    var carousel = document.getElementById('carousel-' + carouselId);
    if (!carousel) return;
    
    var mediaItems = carousel.querySelectorAll('.carousel-images img, .carousel-images video');
    var dots = carousel.querySelectorAll('.carousel-dots .dot');
    var currentIdx = parseInt(carousel.getAttribute('data-current') || '0');
    
    var newIdx = currentIdx + direction;
    if (newIdx < 0) newIdx = mediaItems.length - 1;
    if (newIdx >= mediaItems.length) newIdx = 0;
    
    setCarousel(carouselId, newIdx);
}

function setCarousel(carouselId, index) {
    var carousel = document.getElementById('carousel-' + carouselId);
    if (!carousel) return;
    
    var mediaItems = carousel.querySelectorAll('.carousel-images img, .carousel-images video');
    var dots = carousel.querySelectorAll('.carousel-dots .dot');
    
    // Update active classes
    mediaItems.forEach(function(media, i) {
        if (i === index) {
            media.classList.add('active');
            if (media.tagName.toLowerCase() === 'video') {
                media.play().catch(function(e){});
            }
        } else {
            media.classList.remove('active');
            if (media.tagName.toLowerCase() === 'video') {
                media.pause();
            }
        }
    });
    
    dots.forEach(function(dot, i) {
        if (i === index) dot.classList.add('active');
        else dot.classList.remove('active');
    });
    
    // Save current index
    carousel.setAttribute('data-current', index);
}

// Countdown Timer Logic for Product Cards
document.addEventListener('DOMContentLoaded', function() {
    var timerElements = document.querySelectorAll('.timer-countdown');
    if (timerElements.length === 0) return;
    
    // Initial time (e.g., 3 hours, 22 mins, 25 secs)
    var timeInSeconds = 3 * 3600 + 22 * 60 + 25;
    
    setInterval(function() {
        if (timeInSeconds <= 0) timeInSeconds = 24 * 3600; // Reset to 24h if it hits 0
        timeInSeconds--;
        
        var h = Math.floor(timeInSeconds / 3600);
        var m = Math.floor((timeInSeconds % 3600) / 60);
        var s = timeInSeconds % 60;
        
        var formatted = 
            (h < 10 ? '0' + h : h) + 'H:' + 
            (m < 10 ? '0' + m : m) + 'M:' + 
            (s < 10 ? '0' + s : s) + 'S';
            
        timerElements.forEach(function(el) {
            el.textContent = formatted;
        });
    }, 1000);
});

// Testimonial Video Carousel Logic
document.addEventListener('DOMContentLoaded', function() {
    var track = document.getElementById('testimonial-track');
    var cards = document.querySelectorAll('.testimonial-card');
    var videos = document.querySelectorAll('.testimonial-video');
    var dots = document.querySelectorAll('#testimonial-dots .dot');
    if (!track || cards.length === 0 || videos.length === 0) return;

    var currentIndex = 0;
    var carouselInView = false;

    function updateCarousel() {
        var cardWidth = cards[0].offsetWidth;
        var gap = 30; // 30px gap from CSS
        var offset = (cardWidth + gap) * currentIndex;
        
        track.style.transform = 'translateX(-' + offset + 'px)';

        videos.forEach(function(vid, i) {
            if (i === currentIndex && carouselInView) {
                var playPromise = vid.play();
                if (playPromise !== undefined) {
                    playPromise.catch(function(e) {
                        console.log("Autoplay with audio blocked. Falling back to muted autoplay.");
                        vid.muted = true;
                        vid.play();
                    });
                }
            } else {
                vid.pause();
                vid.currentTime = 0;
            }
        });

        if (dots.length > 0) {
            dots.forEach(function(d, i) {
                if (i === currentIndex) d.classList.add('active');
                else d.classList.remove('active');
            });
        }
    }

    videos.forEach(function(vid, i) {
        vid.addEventListener('ended', function() {
            if (i === currentIndex) {
                currentIndex++;
                if (currentIndex >= videos.length) {
                    currentIndex = 0;
                }
                updateCarousel();
            }
        });
    });

    if (dots.length > 0) {
        dots.forEach(function(dot) {
            dot.addEventListener('click', function() {
                currentIndex = parseInt(this.getAttribute('data-index'));
                updateCarousel();
            });
        });
    }

    window.addEventListener('resize', function() {
        updateCarousel();
    });

    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting) {
            carouselInView = true;
            updateCarousel();
        } else {
            carouselInView = false;
            videos.forEach(function(vid) { vid.pause(); });
        }
    }, { threshold: 0.4 });
    observer.observe(document.querySelector('.testimonials'));

    setTimeout(updateCarousel, 500);

    // Handle fixed wrapper padding
    function updateBodyPadding() {
        var wrapper = document.querySelector('.sticky-wrapper');
        if (wrapper) {
            document.body.style.paddingTop = wrapper.offsetHeight + 'px';
        }
    }
    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);
});
