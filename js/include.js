async function loadInclude(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

loadInclude("header", "includes/header.html");
loadInclude("footer", "includes/footer.html");
function loadInclude(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            // Initialize mobile menu if header is loaded
            if (id === "header") {
                const mobileMenu = document.getElementById("mobileMenu");
                const navLinks = document.getElementById("navLinks");

                if (mobileMenu && navLinks) {
                    mobileMenu.addEventListener("click", () => {
                        navLinks.classList.toggle("active");
                        mobileMenu.classList.toggle("open");
                    });
                }
            }
        });
}
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



// Load header and footer
loadInclude("header", "includes/header.html");
loadInclude("footer", "includes/footer.html");

