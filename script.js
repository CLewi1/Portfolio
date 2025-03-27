document.addEventListener('DOMContentLoaded', function() {
    // Get the hamburger menu and mobile menu elements
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    
    // Toggle the mobile menu when the hamburger is clicked
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    });
    
    // Close the mobile menu when a link is clicked
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });
});
