import { generateImages } from "./api.js";
import { renderGallery } from "./gallery.js";

let images = [];

// початкове завантаження
images = images.concat(generateImages(4));
renderGallery(images);

// кнопка "Завантажити ще 4"
document.getElementById("loadMore").addEventListener("click", () => {
    images = images.concat(generateImages(4));
    renderGallery(images);
});

// очистити галерею
document.getElementById("clearGallery").addEventListener("click", () => {
    images = [];
    renderGallery(images);
});

// видалити останню
document.getElementById("removeLast").addEventListener("click", () => {
    images.pop();
    renderGallery(images);
});

// перевернути
document.getElementById("reverseGallery").addEventListener("click", () => {
    images.reverse();
    renderGallery(images);
});
