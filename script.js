const gallery = document.getElementById("gallery");

let images = [];

// Функція отримання картинок
function fetchImages(count = 4) {
    for (let i = 0; i < count; i++) {
        const id = Math.floor(Math.random() * 1000);
        images.push(`https://picsum.photos/id/${id}/400/300`);
    }
    renderGallery();
}

// Функція рендеру галереї
function renderGallery() {
    gallery.innerHTML = "";
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });
}

// Кнопка "Завантажити ще 4 картинки"
document.getElementById("loadMore").addEventListener("click", () => {
    fetchImages(4);
});

// Кнопка "Очистити галерею"
document.getElementById("clearGallery").addEventListener("click", () => {
    images = [];
    renderGallery();
});

// Кнопка "Видалити останню картинку"
document.getElementById("removeLast").addEventListener("click", () => {
    images.pop();
    renderGallery();
});

// Кнопка "Перевернути галерею"
document.getElementById("reverseGallery").addEventListener("click", () => {
    images.reverse();
    renderGallery();
});

// Початкове завантаження
fetchImages(4);
