import { galleryItems } from "./gallery-items.js";
// import * as basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";

// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryLinkEl = galleryEl.querySelector(".gallery__link");

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

function stopDefAction(evt) {
  evt.preventDefault();
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

const genGalleryItem = (galleryItems) => {
  galleryItems.map((elem) => createHTMLMarkup(elem));
};

genGalleryItem(galleryItems);
