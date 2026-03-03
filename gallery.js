const gallery = document.getElementById("gallery");

export function renderGallery(images) {
    gallery.innerHTML = "";

    images.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        gallery.appendChild(img);
    });
}
