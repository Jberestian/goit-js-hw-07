import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

function makeGalleryCard() {
  return galleryItems
    .map(
      (el) =>
        `<a class="gallery__item" href="${el.original}">
        <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
        </a>`
    )
    .join("");
}

galleryEl.insertAdjacentHTML("afterbegin", makeGalleryCard(galleryItems));

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
