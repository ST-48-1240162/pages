/* ========================================================================
   Common JavaScript functionality for the portfolio - Vanilla JS only
   ======================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(event) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        window.scrollTo(0, target.offsetTop - 70);
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const scroll = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    const progress = document.getElementById('progress');
    
    // Add shadow on scroll
    if (scroll >= 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    // Update progress bar
    const scrollPercent = (scroll / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (progress) {
      progress.value = scrollPercent;
    }
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        const navbar = document.getElementById('navbarNav');
        navbar.classList.remove('show');
      }
    });
  });

  // Active section highlighting
  window.addEventListener('scroll', function() {
    const scrollPos = window.pageYOffset + 100;
    
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
      const href = link.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        const refElement = document.querySelector(href);
        if (refElement) {
          if (refElement.offsetTop <= scrollPos && 
              refElement.offsetTop + refElement.offsetHeight > scrollPos) {
            document.querySelectorAll('.navbar-nav .nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      }
    });
  });

  // Note: Navbar scrolled styles are now handled in CSS

  // Initialize progress bar
  window.dispatchEvent(new Event('scroll'));
});

// Mobile navbar toggle
function toggleNavbar() {
  const navbar = document.getElementById('navbarNav');
  navbar.classList.toggle('show');
}

