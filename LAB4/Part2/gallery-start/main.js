const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg': 'Closeup of a human eye',
    'pic2.jpg': 'Landscape of a forest',
    'pic3.jpg': 'Beautiful mountain view',
    'pic4.jpg': 'City skyline at night',
    'pic5.jpg': 'Ocean waves crashing on shore'
};

/* Looping through images */
imageFiles.forEach((fileName) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${fileName}`);
    newImage.setAttribute('alt', altText[fileName]);
    thumbBar.appendChild(newImage);

    // Event listener for each thumbnail
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', `images/${fileName}`);
        displayedImage.setAttribute('alt', altText[fileName]);
    });
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const isDark = btn.getAttribute('class') === 'dark';
    if (isDark) {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
