import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

function onModalElemnt(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {return}

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  if (basicLightbox.visible()) {
    document.addEventListener("keydown", (evt) => {
      if (evt.key !== "Escape") {return}
      instance.close();
    });
  }
}

function createHTMLMarkup(elem) {
  galleryEl.insertAdjacentHTML(
    "beforeend",
    `<div class="gallery__item">
      <a class="gallery__link" href="${elem.original}">
        <img
          class="gallery__image"
          src="${elem.preview}"
          data-source="${elem.original}"
          alt="${elem.description}"
        />
      </a>
    </div> `
  );
}

galleryEl.addEventListener("click", onModalElemnt);

const genGalleryItem = (galleryItems) => {
  galleryItems.map((elem) => createHTMLMarkup(elem));
};

genGalleryItem(galleryItems);
