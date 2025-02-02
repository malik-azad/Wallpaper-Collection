document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.remove('loading');
        });

        img.addEventListener('error', () => {
            img.classList.remove('loading');
            img.src = 'path/to/placeholder-image.jpg'; // Fallback image
        });
    });

    const lightbox = GLightbox({
        selector: '.gallery img',
        touchNavigation: true,
        loop: true,
        zoomable: true,
        draggable: true,
        autoplayVideos: true
    });
});
function openRandomImage() {
    const images = document.querySelectorAll('.gallery img');
    if (images.length > 0) {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        randomImage.click();
    }
}