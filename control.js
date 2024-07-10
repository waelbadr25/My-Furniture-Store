function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const navList = document.getElementById('nav-list');
    const links = navList.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            const current = document.getElementsByClassName('active');
            if (current.length > 0) {
                current[0].classList.remove('active');
            }
            this.parentElement.classList.add('active');
        });
    }
});


const imageUrls = [
    'images/مطابخ 2.jpeg',
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/اثاث 2.jpeg',
    'images/مطابخ1.jpeg',
    'images/الوستيل-معدات-مطاعم-وفنادق4.jpg',
    'images/مطعم 1.jpeg',
    'images/غرفة-نوم-كاملة-لون-أبيض-و-بني-0910-1.jpg',
    'images/d985d8b7d8a7d8b9d985-01150570201d8aad8acd987d98ad8b2d8a7d8aa-d985d8b9d8afd8a7d8aa.webp',
    'images/333-930x620-1.jpg',
    'images/AF1QipNk2PEjRRFJVcZJncgnOmXnIqZ5daMW7wgIDS--=w1080-h608-p-no-v0.png',
    'images/img-20181024-wa0025.webp',
    'images/thumb-816x460-921f35dd8e3f8fbbb2fa3ec26aebaf95.jpg'
];

const container = document.getElementById('gallery-item');

// Loop through the image URLs and create img elements
for (let i = 0; i < imageUrls.length; i++) {
    // Create an img element
    const img = document.createElement('img');
    // Set the src attribute
    img.src = imageUrls[i];
    // Optionally set alt text
    img.alt = `Image ${i + 1}`;
    // Optionally set a class for styling
    img.className = 'dynamic-image';
    // Add the img element to the container
    container.appendChild(img);
}

