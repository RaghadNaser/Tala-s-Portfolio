<script setup>
import { onMounted, onUnmounted } from 'vue';
import Header from './layouts/Header.vue';
import Main from './layouts/Main.vue';
import Footer from './layouts/Footer.vue';

let cursor, cursorFollower;

onMounted(() => {
  // Create custom cursor elements
  cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.body.appendChild(cursor);

  cursorFollower = document.createElement('div');
  cursorFollower.className = 'cursor-follower';
  document.body.appendChild(cursorFollower);

  // Mouse move handler
  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = x + 'px';
      cursorFollower.style.top = y + 'px';
    }, 100);
  };

  // Mouse enter handler for interactive elements
  const handleMouseEnter = () => {
    cursor.classList.add('cursor-hover');
    cursorFollower.classList.add('cursor-follower-hover');
  };

  // Mouse leave handler for interactive elements
  const handleMouseLeave = () => {
    cursor.classList.remove('cursor-hover');
    cursorFollower.classList.remove('cursor-follower-hover');
  };

  // Add event listeners
  document.addEventListener('mousemove', handleMouseMove);
  
  // Add hover effects to interactive elements
  const interactiveElements = 'a, button, .hover-scale, .magnetic, .interactive-element';
  document.addEventListener('mouseenter', (e) => {
    if (e.target && e.target.nodeType === 1 && typeof e.target.matches === 'function' && e.target.matches(interactiveElements)) {
      handleMouseEnter();
    }
  }, true);
  
  document.addEventListener('mouseleave', (e) => {
    if (e.target && e.target.nodeType === 1 && typeof e.target.matches === 'function' && e.target.matches(interactiveElements)) {
      handleMouseLeave();
    }
  }, true);

  // Magnetic effect for buttons and links
  const addMagneticEffect = () => {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        element.style.transform = `translate3d(${x * 0.3}px, ${y * 0.3}px, 0)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'translate3d(0, 0, 0)';
      });
    });
  };

  // Parallax effect - DISABLED to prevent header jumping
  const addParallaxEffect = () => {
    // Parallax disabled to prevent header jumping
    return;
  };

  // Particle System
  const createParticleSystem = () => {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      
      // Random colors for particles
      const colors = [
        'rgba(102, 126, 234, 0.5)',
        'rgba(118, 75, 162, 0.5)',
        'rgba(156, 39, 176, 0.5)',
        'rgba(63, 81, 181, 0.5)'
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      particlesContainer.appendChild(particle);
    }

    window.particlesContainer = particlesContainer;
  };

  // Advanced Scroll Effects - DISABLED to prevent header jumping
  const addScrollEffects = () => {
    // All scroll effects disabled to prevent header jumping
    return;
    let ticking = false;
    
    const updateScrollEffects = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      // Parallax background elements
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${rate * speed}px)`;
      });
      
      // Floating elements rotation based on scroll
      const floatingElements = document.querySelectorAll('.float-animation');
      floatingElements.forEach((element, index) => {
        element.style.transform = `translateY(${Math.sin(scrolled * 0.01 + index) * 10}px) rotate(${scrolled * 0.1}deg)`;
      });
      
      ticking = false;
    };
    
    const requestScrollUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', requestScrollUpdate);
  };

  // Text Glitch Effect
  const addGlitchEffect = () => {
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
      element.setAttribute('title', element.textContent);
    });
  };

  // Advanced 3D Tilt Effects
  const add3DTiltEffects = () => {
    const tiltElements = document.querySelectorAll('.tilt-effect');
    
    tiltElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = (mouseY / rect.height) * 30;
        const rotateY = (mouseX / rect.width) * -30;
        
        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      });
    });
  };

  // Dynamic Color Theme Changer
  const addDynamicColors = () => {
    let colorIndex = 0;
    const colorSchemes = [
      ['#667eea', '#764ba2'],
      ['#f093fb', '#f5576c'],
      ['#4facfe', '#00f2fe'],
      ['#43e97b', '#38f9d7'],
      ['#fa709a', '#fee140']
    ];
    
    setInterval(() => {
      colorIndex = (colorIndex + 1) % colorSchemes.length;
      const [color1, color2] = colorSchemes[colorIndex];
      
      // Update CSS custom properties for dynamic theming
      document.documentElement.style.setProperty('--dynamic-color-1', color1);
      document.documentElement.style.setProperty('--dynamic-color-2', color2);
    }, 10000);
  };

  // Advanced Particle Interactions
  const addParticleInteractions = () => {
    document.addEventListener('mousemove', (e) => {
      const particles = document.querySelectorAll('.particle');
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      particles.forEach((particle, index) => {
        const rect = particle.getBoundingClientRect();
        const particleX = rect.left + rect.width / 2;
        const particleY = rect.top + rect.height / 2;
        const distance = Math.sqrt((mouseX - particleX) ** 2 + (mouseY - particleY) ** 2);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          const angle = Math.atan2(particleY - mouseY, particleX - mouseX);
          const moveX = Math.cos(angle) * force * 20;
          const moveY = Math.sin(angle) * force * 20;
          
          particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force * 0.5})`;
          particle.style.opacity = 0.8 + force * 0.2;
        } else {
          particle.style.transform = 'translate(0px, 0px) scale(1)';
          particle.style.opacity = 0.5;
        }
      });
    });
  };

  // Initialize effects
  setTimeout(() => {
    addMagneticEffect();
    addParallaxEffect();
    createParticleSystem();
    addScrollEffects();
    addGlitchEffect();
    add3DTiltEffects();
    addDynamicColors();
    addParticleInteractions();
    addScrollProgress();
    addFloatingButton();
    addScrollAnimations();
  }, 100);

  // Store cleanup functions
  // Scroll Progress Bar
  const addScrollProgress = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
    document.body.appendChild(progressBar);

    const bar = progressBar.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      bar.style.width = scrollProgress + '%';
    });

    window.progressBar = progressBar;
  };

  // Floating Action Button
  const addFloatingButton = () => {
    const fab = document.createElement('div');
    fab.className = 'fab magnetic interactive-element';
    fab.innerHTML = `
      <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    `;
    
    fab.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.body.appendChild(fab);
    window.fab = fab;
  };

  // Enhanced Intersection Observer for animations
  const addScrollAnimations = () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements with animation classes
    setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll('.hero-animation, .interactive-element, .parallax-element');
      elementsToAnimate.forEach(el => observer.observe(el));
    }, 500);
  };

    window.cleanupCursor = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    if (cursor) document.body.removeChild(cursor);
    if (cursorFollower) document.body.removeChild(cursorFollower);
    if (window.particlesContainer) document.body.removeChild(window.particlesContainer);
  };
});

onUnmounted(() => {
  if (window.cleanupCursor) {
    window.cleanupCursor();
  }
});
</script>

<template>
    <Header/>
    <Main/>
    <Footer />
</template>

<style scoped></style>
