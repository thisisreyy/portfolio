// Global variables
let currentSection = 'home';
let showSocialInHeader = false;
let isLandingLoaded = false;

// Rotating text functionality
const roles = [
  'Computer Science Student',
  'Full Stack Developer',
  'UI/UX Enthusiast',
  'Freelancer',
  'Problem Solver'
];

let currentRoleIndex = 0;
let isVisible = true;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS with your public key
  emailjs.init('gegier-Yoscu9d5Cj'); // Replace with your actual EmailJS public key
  
  // Landing page animation trigger
  setTimeout(() => {
    setIsLandingLoaded(true);
  }, 100);

  // Start rotating text
  startRotatingText();

  // Setup scroll handler
  setupScrollHandler();

  // Setup intersection observers
  setupIntersectionObservers();

  // Setup contact form
  setupContactForm();

  // Setup navigation
  updateNavigation();
});

// Landing page loaded state
function setIsLandingLoaded(loaded) {
  isLandingLoaded = loaded;
  const landingContent = document.getElementById('landing-content');
  const greeting = document.getElementById('greeting');
  const actionButtons = document.getElementById('action-buttons');
  const profileImage = document.getElementById('profile-image');

  if (loaded) {
    landingContent.classList.remove('opacity-0', 'translate-y-8');
    landingContent.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      greeting.classList.remove('opacity-0', 'translate-y-8');
      greeting.classList.add('opacity-100', 'translate-y-0');
    }, 200);

    setTimeout(() => {
      actionButtons.classList.remove('opacity-0', 'translate-y-8');
      actionButtons.classList.add('opacity-100', 'translate-y-0');
    }, 400);

    setTimeout(() => {
      profileImage.classList.remove('opacity-0', 'translate-y-8');
      profileImage.classList.add('opacity-100', 'translate-y-0');
    }, 600);
  }
}

// Rotating text functionality
function startRotatingText() {
  const rotatingTextElement = document.getElementById('rotating-text');
  
  setInterval(() => {
    rotatingTextElement.style.opacity = '0';
    
    setTimeout(() => {
      currentRoleIndex = (currentRoleIndex + 1) % roles.length;
      rotatingTextElement.textContent = roles[currentRoleIndex];
      rotatingTextElement.style.opacity = '1';
    }, 1000); // 1 second fade out
  }, 2000); // Display each text for 2 seconds
}

// Scroll handler
function setupScrollHandler() {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);
}

function handleScroll() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  
  const aboutSection = document.getElementById('about-section');
  const projectsSection = document.getElementById('projects-section');
  const techStackSection = document.getElementById('techstack-section');
  const contactSection = document.getElementById('contact-section');
  
  // Check if user has scrolled to footer area (last 20% of the page)
  const footerThreshold = documentHeight - windowHeight * 1.2;
  const isInFooterArea = scrollPosition >= footerThreshold;
  
  // Only show social icons in header on desktop when in footer area
  const newShowSocialInHeader = isInFooterArea && window.innerWidth >= 1280; // xl breakpoint
  
  if (newShowSocialInHeader !== showSocialInHeader) {
    showSocialInHeader = newShowSocialInHeader;
    updateHeaderSocialIcons();
    updateSocialSidebar();
  }
  
  // Update current section
  if (scrollPosition < windowHeight * 0.5) {
    setCurrentSection('home');
  } else if (aboutSection && projectsSection && techStackSection && contactSection) {
    const aboutTop = aboutSection.offsetTop;
    const projectsTop = projectsSection.offsetTop;
    const techStackTop = techStackSection.offsetTop;
    const contactTop = contactSection.offsetTop;
    
    if (scrollPosition >= aboutTop - 200 && scrollPosition < projectsTop - 200) {
      setCurrentSection('about');
    } else if (scrollPosition >= projectsTop - 200 && scrollPosition < techStackTop - 200) {
      setCurrentSection('projects');
    } else if (scrollPosition >= techStackTop - 200 && scrollPosition < contactTop - 200) {
      setCurrentSection('techstack');
    } else if (scrollPosition >= contactTop - 200) {
      setCurrentSection('contact');
    }
  }
}

function handleResize() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const footerThreshold = documentHeight - windowHeight * 1.2;
  const isInFooterArea = scrollPosition >= footerThreshold;
  
  const newShowSocialInHeader = isInFooterArea && window.innerWidth >= 1280;
  
  if (newShowSocialInHeader !== showSocialInHeader) {
    showSocialInHeader = newShowSocialInHeader;
    updateHeaderSocialIcons();
    updateSocialSidebar();
  }
}

function setCurrentSection(section) {
  if (currentSection !== section) {
    currentSection = section;
    updateNavigation();
  }
}

function updateHeaderSocialIcons() {
  const headerSocial = document.getElementById('header-social');
  if (showSocialInHeader) {
    headerSocial.classList.remove('xl:hidden');
    headerSocial.classList.add('xl:flex');
  } else {
    headerSocial.classList.remove('xl:flex');
    headerSocial.classList.add('xl:hidden');
  }
}

function updateSocialSidebar() {
  const socialSidebar = document.getElementById('social-sidebar');
  if (showSocialInHeader) {
    socialSidebar.classList.add('opacity-0', '-translate-x-full', 'pointer-events-none');
    socialSidebar.classList.remove('opacity-100', 'translate-x-0');
  } else {
    socialSidebar.classList.remove('opacity-0', '-translate-x-full', 'pointer-events-none');
    socialSidebar.classList.add('opacity-100', 'translate-x-0');
  }
}

function updateNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    const section = item.getAttribute('data-section');
    if (section === currentSection) {
      item.classList.add('active');
      item.style.backgroundColor = '#98948A';
      item.style.color = 'white';
      item.style.boxShadow = '0 4px 20px rgba(152, 148, 138, 0.3)';
    } else {
      item.classList.remove('active');
      item.style.backgroundColor = 'transparent';
      item.style.color = '';
      item.style.boxShadow = '';
    }
  });
}

// Intersection Observer for fade-in animations
function setupIntersectionObservers() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class to all fade-up elements in this section
          const elements = entry.target.querySelectorAll('.fade-up-element');
          elements.forEach((element) => {
            element.classList.add('visible');
          });
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  );

  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    observer.observe(section);
  });
}

// Navigation functions
function navigateTo(section) {
  setCurrentSection(section);

  if (section === 'home') {
    scrollToTop();
  } else {
    const targetSection = document.getElementById(`${section}-section`);
    if (targetSection) {
      const elementPosition = targetSection.offsetTop;
      const offsetPosition = elementPosition - 60; // Stop 60px before the section
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToAbout() {
  const aboutSection = document.getElementById('about-section');
  if (aboutSection) {
    const elementPosition = aboutSection.offsetTop;
    const offsetPosition = elementPosition - 80; // Stop 80px before the section
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

function downloadCV() {
  // Replace with your actual CV URL
  window.open('/path-to-your-cv.pdf', '_blank');
}

// Contact form functionality
function setupContactForm() {
  const form = document.getElementById('contact-form');
  
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearFormErrors();
    
    // Get form data
    const formData = {
      fullName: document.getElementById('fullName').value.trim(),
      email: document.getElementById('email').value.trim(),
      message: document.getElementById('message').value.trim()
    };
    
    // Validate form
    if (!validateForm(formData)) {
      return;
    }
    
    // Set loading state
    setFormLoading(true);
    
    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = 'service_bpwk6u9'; // Replace with your EmailJS Service ID
      const templateId = 'template_kzvd2nd'; // Replace with your EmailJS Template ID
      
      // Template parameters that will be sent to your email
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        to_email: 'aatreyeechatterjeee@gmail.com', // Your email address
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200) {
        setFormSuccess();
        form.reset();
        showThankYouModal();
        
        // Reset status after showing success message
        setTimeout(() => {
          setFormLoading(false);
        }, 2000);
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormError();
      setTimeout(() => {
        setFormLoading(false);
      }, 5000);
    }
  });

  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', function() {
      clearFieldError(input.name);
    });
  });
}

function validateForm(formData) {
  let isValid = true;
  
  if (!formData.fullName) {
    showFieldError('fullName', 'Full name is required');
    isValid = false;
  }
  
  if (!formData.email) {
    showFieldError('email', 'Email is required');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    showFieldError('email', 'Please enter a valid email address');
    isValid = false;
  }
  
  if (!formData.message) {
    showFieldError('message', 'Message is required');
    isValid = false;
  }
  
  return isValid;
}

function showFieldError(fieldName, message) {
  const field = document.getElementById(fieldName);
  const errorElement = document.getElementById(`${fieldName}-error`);
  
  field.classList.add('border-red-400/60');
  field.classList.remove('border-[#D4B896]/30');
  
  if (errorElement) {
    const span = errorElement.querySelector('span');
    if (span) {
      span.textContent = message;
    }
    errorElement.classList.remove('hidden');
    errorElement.classList.add('flex');
  }
}

function clearFieldError(fieldName) {
  const field = document.getElementById(fieldName);
  const errorElement = document.getElementById(`${fieldName}-error`);
  
  field.classList.remove('border-red-400/60');
  field.classList.add('border-[#D4B896]/30');
  
  if (errorElement) {
    errorElement.classList.add('hidden');
    errorElement.classList.remove('flex');
  }
}

function clearFormErrors() {
  const fields = ['fullName', 'email', 'message'];
  fields.forEach(fieldName => {
    clearFieldError(fieldName);
  });
  
  const errorMessage = document.getElementById('error-message');
  errorMessage.classList.add('hidden');
}

function setFormLoading(loading) {
  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const sendIcon = document.getElementById('send-icon');
  
  if (loading) {
    submitBtn.disabled = true;
    submitBtn.classList.add('disabled:bg-[#D4B896]/50', 'disabled:cursor-not-allowed', 'disabled:hover:scale-100');
    
    sendIcon.innerHTML = '<div class="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>';
    submitText.textContent = 'Sending...';
  } else {
    submitBtn.disabled = false;
    submitBtn.classList.remove('disabled:bg-[#D4B896]/50', 'disabled:cursor-not-allowed', 'disabled:hover:scale-100');
    
    sendIcon.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>';
    submitText.textContent = 'Send Message';
  }
}

function setFormSuccess() {
  const submitText = document.getElementById('submit-text');
  const sendIcon = document.getElementById('send-icon');
  
  sendIcon.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
  submitText.textContent = 'Message Sent!';
}

function setFormError() {
  const submitText = document.getElementById('submit-text');
  const sendIcon = document.getElementById('send-icon');
  const errorMessage = document.getElementById('error-message');
  
  sendIcon.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
  submitText.textContent = 'Try Again';
  
  errorMessage.classList.remove('hidden');
}

function showThankYouModal() {
  const modal = document.getElementById('thank-you-modal');
  modal.classList.remove('hidden');
}

function closeThankYouModal() {
  const modal = document.getElementById('thank-you-modal');
  modal.classList.add('hidden');
}

// Make functions globally available
window.navigateTo = navigateTo;
window.scrollToTop = scrollToTop;
window.scrollToAbout = scrollToAbout;
window.downloadCV = downloadCV;
window.closeThankYouModal = closeThankYouModal;