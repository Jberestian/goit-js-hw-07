import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

function makeGalleryCard() {
  return galleryItems
    .map(
      (el) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </div>`
    )
    .join("");
}

let openImgInstance = null;

galleryEl.insertAdjacentHTML("afterbegin", makeGalleryCard(galleryItems));
galleryEl.addEventListener("click", onClickImgPrewEl);

function onClickImgPrewEl(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  openImgInstance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`);
  openImgInstance.show();
}

const onEscPressKey = (evt) => {
  if (evt.code === "Escape") {
    openImgInstance.close();
  }
};

document.addEventListener("keydown", onEscPressKey);
