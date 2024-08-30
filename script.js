document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.bottom-nav a');
    const footer = document.querySelector('footer');
    const aboutSection = document.getElementById('about');
    const aboutSectionHeading = document.querySelector('.about-text h2');
    const aboutText = document.querySelector('.about-text');
    const aboutImage = document.querySelector('.about-image');
    const aboutDivider = document.querySelector('.about-divider');
    const contactSection = document.getElementById('contact'); // Assuming you have an ID for your Contact section

    // Function to handle highlighting active section and navigation behavior
    function highlightActiveSection() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop - sectionHeight / 3 && 
                scrollPosition < sectionTop + sectionHeight - sectionHeight / 3) {
                const currentId = section.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${currentId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });

        // Check if scroll position is at the top to highlight 'Home' initially
        if (scrollPosition === 0) {
            navLinks.forEach(link => {
                if (link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }

        // Check if footer is visible and hide navigation bar
        if (isFooterVisible()) {
            document.querySelector('.bottom-nav').style.visibility = 'hidden';
        } else {
            document.querySelector('.bottom-nav').style.visibility = 'visible';
        }
    }

    // Function to trigger About Me section animations
    function triggerAboutMeAnimations() {
        resetAboutMeAnimations(); // Reset animations before triggering

        aboutSectionHeading.style.animation = 'fadeIn 1.5s ease-in-out forwards';
        aboutText.style.animation = 'fadeInFromLeft 1s ease-in-out';
        aboutImage.style.animation = 'fadeInFromRight 1s ease-in-out';
        aboutDivider.style.animation = 'drawLine 1s ease-in-out';
    }

    // Function to reset About Me section animations
    function resetAboutMeAnimations() {
        aboutSectionHeading.style.animation = 'none';
        aboutText.style.animation = 'none';
        aboutImage.style.animation = 'none';
        aboutDivider.style.animation = 'none';

        // Force reflow to restart animations
        aboutSectionHeading.offsetHeight;
        aboutText.offsetHeight;
        aboutImage.offsetHeight;
        aboutDivider.offsetHeight;
    }

    // Function to check if footer is visible
    function isFooterVisible() {
        const footerTop = footer.offsetTop;
        const scrollPosition = window.scrollY;
        return scrollPosition + window.innerHeight >= footerTop;
    }

    // Event listener for scroll and resize to update active section and navigation
    window.addEventListener('scroll', highlightActiveSection);
    window.addEventListener('resize', highlightActiveSection);
    highlightActiveSection(); // Initial call to highlight based on initial scroll position

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            let offset = -50; // Default offset value

            // Check if the target section is the contact section
            if (targetId === 'contact') {
                offset = 30; // Adjust this value for the contact section to scroll a bit more
            }

            const topPosition = targetSection.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({
                top: topPosition,
                behavior: 'smooth'
            });
            
            if (targetId === 'about') {
                setTimeout(triggerAboutMeAnimations, 500); // Adjust delay if needed
            }
        });
    });

    // Smooth scrolling for the About Me button
    document.querySelector('.about-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.getElementById('about');
        const offset = -60; // Adjust this value as needed to control the scroll position
        const targetPosition = targetSection.offsetTop + offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        setTimeout(triggerAboutMeAnimations, 500); // Adjust delay if needed
    });

    // Alternating designations with smooth fade animation
    const designations = [
        "Computer Science Student",
        "Software Developer",
        "Aspiring Cinematographer",
        "Musician"
    ];

    const designationElement = document.getElementById('designation');
    let index = 0;

    function updateDesignation() {
        designationElement.style.opacity = 0;
        setTimeout(function() {
            designationElement.textContent = designations[index];
            designationElement.style.opacity = 1;
            index = (index + 1) % designations.length;
        }, 500); // Adjust timing for smoother transition
    }

    // Start the loop
    updateDesignation();
    setInterval(updateDesignation, 2000); // Change designation every 2 seconds (2000 milliseconds)

    // Intersection Observer to trigger About Me animations when in view
    const observerOptions = {
        threshold: 0.3 // Trigger when 30% of the section is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                triggerAboutMeAnimations();
            }
        });
    }, observerOptions);

    observer.observe(aboutSection);
});


document.addEventListener('DOMContentLoaded', function() {
    const aboutAvatar = document.querySelector('.avatar-img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutAvatar.classList.add('floating');
            }
        });
    }, { threshold: 0.3 });

    observer.observe(document.querySelector('.about-section'));
});
