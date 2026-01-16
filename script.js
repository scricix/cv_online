// Portfolio loaded
console.log("Portfolio loaded");

// Download PDF File Functionality
document.addEventListener('DOMContentLoaded', function () {
    const downloadBtn = document.getElementById('downloadPdfBtn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            // Show loading state
            const originalText = downloadBtn.querySelector('span').textContent;
            downloadBtn.querySelector('span').textContent = 'Descărcare...';
            downloadBtn.disabled = true;

            // Create a temporary anchor element to trigger download
            const link = document.createElement('a');
            link.href = 'CV_Moldoveanu_Titi_Adrian.pdf';
            link.download = 'CV_Moldoveanu_Titi_Adrian.pdf'; // Name for the downloaded file
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Success feedback
            downloadBtn.querySelector('span').textContent = '✓ Descărcat!';
            setTimeout(() => {
                downloadBtn.querySelector('span').textContent = originalText;
                downloadBtn.disabled = false;
            }, 2000);
        });
    }
});
