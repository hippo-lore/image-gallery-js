export function generateImages(count = 4) {
    const images = [];

    for (let i = 0; i < count; i++) {
        const id = Math.floor(Math.random() * 1000);
        images.push(`https://picsum.photos/id/${id}/400/300`);
    }

    return images;
}
