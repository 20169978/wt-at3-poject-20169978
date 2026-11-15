import "../components/hamburger.js";
import "../components/logo.js";

const downloadButton = document.getElementById("download-button");
if (downloadButton) {
    downloadButton.addEventListener("click", () => {
        downloadResume();
    });
} else {
    console.error("Download button not found in the DOM.");
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = "assets/images/Resume.jpg";
    link.download = "Resume.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}