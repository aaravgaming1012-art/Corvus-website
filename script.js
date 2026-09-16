// Copy IP functionality with toast feedback
function copyIP() {
}


// Toast Display Function
function showToast(message) {
}


// Mobile-friendly click offset for smooth scroll alignment
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - navbarHeight;


            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});      