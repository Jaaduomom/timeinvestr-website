// TimeInvestr Website - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initSmoothScrolling();
    initScrollEffects();
    initDownloadButtons();
    initContactForm();
    initAccessibility();
});

// Mobile Navigation Toggle
function initMobileNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = this.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (navMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                // Reset hamburger menu
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const bars = navToggle.querySelectorAll('.bar');
                bars.forEach(bar => {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                });
            }
        });
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Effects and Animations
function initScrollEffects() {
    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(31, 41, 55, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(31, 41, 55, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .section-header');
    animateElements.forEach(el => observer.observe(el));
}

// Download Button Functionality
function initDownloadButtons() {
    const downloadButtons = document.querySelectorAll('.download-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get button type (Google Play or App Store)
            const isGooglePlay = this.classList.contains('google-play');
            const isAppStore = this.classList.contains('app-store');
            
            if (isGooglePlay) {
                // TODO: Replace with actual Google Play Store URL when app is published
                showComingSoonMessage('Google Play Store');
            } else if (isAppStore) {
                // TODO: Replace with actual App Store URL when app is published
                showComingSoonMessage('App Store');
            }
        });
    });
}

// Show Coming Soon Message
function showComingSoonMessage(storeName) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'coming-soon-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Coming Soon!</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>TimeInvestr will be available on ${storeName} very soon!</p>
                <p>We're currently in final testing and will be launching shortly.</p>
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="closeModal()">Got it!</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .coming-soon-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .modal-content {
            background: white;
            border-radius: 12px;
            padding: 0;
            max-width: 400px;
            width: 90%;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            animation: slideUp 0.3s ease;
        }
        
        .modal-header {
            background: #2563eb;
            color: white;
            padding: 20px;
            border-radius: 12px 12px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            margin: 0;
            color: white;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background 0.2s;
        }
        
        .modal-close:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        
        .modal-body {
            padding: 20px;
            text-align: center;
        }
        
        .modal-body p {
            margin-bottom: 15px;
            color: #6b7280;
        }
        
        .modal-actions {
            margin-top: 20px;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(modalStyles);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Close Modal Function
function closeModal() {
    const modal = document.querySelector('.coming-soon-modal');
    if (modal) {
        modal.remove();
    }
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // TODO: Implement actual form submission
            // For now, show success message
            showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show Notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10001;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 15px 20px;
        }
        
        .notification-message {
            color: #374151;
            margin-right: 15px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #9ca3af;
            font-size: 18px;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s;
        }
        
        .notification-close:hover {
            background: #f3f4f6;
            color: #6b7280;
        }
        
        .notification-success {
            border-left: 4px solid #10b981;
        }
        
        .notification-error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-info {
            border-left: 4px solid #3b82f6;
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(notificationStyles);
    document.body.appendChild(notification);
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
    
    // Close notification on click
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
}

// Accessibility Improvements
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    
    // Add skip link styles
    const skipLinkStyles = document.createElement('style');
    skipLinkStyles.textContent = `
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #2563eb;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10000;
            transition: top 0.3s;
        }
        
        .skip-link:focus {
            top: 6px;
        }
    `;
    
    document.head.appendChild(skipLinkStyles);
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content ID
    const mainContent = document.querySelector('main') || document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main-content';
    }
    
    // Keyboard navigation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Learn more about ${card.querySelector('.feature-title').textContent}`);
        
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

// Performance Optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Preload critical resources
    const criticalResources = [
        '../assets/images/app_icon.png',
        'css/style.css',
        'css/responsive.css'
    ];
    
    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'image';
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizePerformance);
} else {
    optimizePerformance();
}

// Service Worker Registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Analytics (Google Analytics 4)
function initAnalytics() {
    // TODO: Add Google Analytics tracking code when ready
    // This function can be used to track user interactions
    console.log('Analytics ready to be implemented');
}

// Donation Modal Functionality
function showDonationModal() {
    const customAmount = document.getElementById('custom-amount').value;
    const amount = customAmount || 10; // Default to $10 if no custom amount
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'donation-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Support TimeInvestr</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>Thank you for wanting to support TimeInvestr! Your contribution of $${amount} will help us:</p>
                <ul>
                    <li>Keep the app completely free for everyone</li>
                    <li>Develop new features and improvements</li>
                    <li>Maintain servers and infrastructure</li>
                    <li>Reach more users worldwide</li>
                </ul>
                <div class="donation-methods">
                    <h4>Choose Payment Method:</h4>
                    <div class="payment-options">
                        <button class="payment-option" onclick="processDonation('razorpay', ${amount})">
                            <i class="fas fa-credit-card"></i>
                            Credit/Debit Card
                        </button>
                        <button class="payment-option" onclick="processDonation('upi', ${amount})">
                            <i class="fas fa-mobile-alt"></i>
                            UPI Payment
                        </button>
                        <button class="payment-option" onclick="processDonation('paypal', ${amount})">
                            <i class="fab fa-paypal"></i>
                            PayPal
                        </button>
                    </div>
                </div>
                <div class="modal-actions">
                    <button class="btn btn-secondary" onclick="closeDonationModal()">Cancel</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .donation-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .donation-modal .modal-content {
            background: white;
            border-radius: 12px;
            padding: 0;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
            animation: slideUp 0.3s ease;
        }
        
        .donation-modal .modal-header {
            background: #2563eb;
            color: white;
            padding: 20px;
            border-radius: 12px 12px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .donation-modal .modal-header h3 {
            margin: 0;
            color: white;
        }
        
        .donation-modal .modal-body {
            padding: 20px;
        }
        
        .donation-modal .modal-body ul {
            margin: 15px 0;
            padding-left: 20px;
        }
        
        .donation-modal .modal-body li {
            margin-bottom: 8px;
            color: #6b7280;
        }
        
        .donation-methods {
            margin: 20px 0;
        }
        
        .donation-methods h4 {
            margin-bottom: 15px;
            color: #374151;
        }
        
        .payment-options {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .payment-option {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            background: white;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 16px;
        }
        
        .payment-option:hover {
            border-color: #2563eb;
            background: #f8fafc;
        }
        
        .payment-option i {
            font-size: 20px;
            color: #2563eb;
            width: 24px;
        }
        
        .modal-actions {
            margin-top: 20px;
            text-align: center;
        }
    `;
    
    document.head.appendChild(modalStyles);
    document.body.appendChild(modal);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeDonationModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeDonationModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeDonationModal();
        }
    });
}

// Close Donation Modal
function closeDonationModal() {
    const modal = document.querySelector('.donation-modal');
    if (modal) {
        modal.remove();
    }
}

// Process Donation (placeholder for actual payment integration)
function processDonation(method, amount) {
    // TODO: Integrate with actual payment gateways
    // For now, show a success message
    showNotification(`Thank you for your $${amount} support! We'll contact you soon to complete the payment.`, 'success');
    closeDonationModal();
}

// Export functions for global access
window.TimeInvestr = {
    showComingSoonMessage,
    closeModal,
    showNotification,
    initAnalytics,
    showDonationModal,
    closeDonationModal,
    processDonation
};
