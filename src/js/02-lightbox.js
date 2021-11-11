import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');

let gallery = new SimpleLightbox('.gallery a');


galleryEl.addEventListener('click', onOriginalImg)


function onOriginalImg (e){
  e.preventDefault();
  
}



function createHTMLMarkup(elem) {
  gallery.on('show.simplelightbox', function () {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <img src="${evt.target.dataset.source}" width="800" height="600">
    `
    );
  });

  galleryEl.insertAdjacentHTML(
    "beforeend",
    `
      <a class="gallery__item" href="${elem.original}">
        <img class="gallery__image" src="${elem.preview}" alt="${elem.description}" />
      </a>
    `
  );
};

const genGalleryItem = (galleryItems) => {
  galleryItems.map((elem) => createHTMLMarkup(elem));
};
genGalleryItem(galleryItems);


