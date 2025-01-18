// Add event listener to the Subscribe button
document.addEventListener('DOMContentLoaded', () => {
    const subscribeButton = document.querySelector('.sidebar button');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Show alert on Subscribe button click
    subscribeButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission
        alert('Thank you for subscribing to Foodie’s Paradise!');
    });

    // Highlight the clicked navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to the clicked link
            event.target.classList.add('active');
        });
    });
});
