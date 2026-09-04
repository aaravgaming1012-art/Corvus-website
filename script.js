// Copy IP functionality with toast feedback
function copyIP() {
    const serverIP = "Corvus.vedicin.cloud";
    
    navigator.clipboard.writeText(serverIP).then(() => {
        showToast("Server IP copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Toast Display Function
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";
    
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
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
