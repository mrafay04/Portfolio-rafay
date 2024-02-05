alert("portfolio")
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navList = document.querySelector('.nav-list');

    // Toggle the mobile navigation
    hamburger.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Close the mobile navigation when a link is clicked
    navList.addEventListener('click', function () {
        navList.classList.remove('show');
    });
});
