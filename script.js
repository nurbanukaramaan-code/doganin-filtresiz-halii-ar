const gallery = document.getElementById('gallery');
const loadBtn = document.getElementById('loadImage');

// Projede kullanacağın tüm görsellerin yolu
const images = [
    'assets/sebzeler/sebze1.png',
    'assets/sebzeler/sebze2.png',
    'assets/meyveler/meyve1.png',
    'assets/meyveler/meyve2.png'
];

loadBtn.addEventListener('click', () => {
    gallery.innerHTML = ''; // önceki görselleri temizle
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });
});

