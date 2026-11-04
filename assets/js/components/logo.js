const logoSection = document.querySelector("header section");

if (logoSection) {
    logoSection.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}