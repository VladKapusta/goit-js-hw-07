import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onImagesOpenModal);

function addMarkupGallary(arr) {
  return arr
    .map(({ original, preview, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href=>
            <img
              class="gallery__image"
              src=${preview}
              data-source=${original}
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join("");
}

galleryRef.innerHTML = addMarkupGallary(galleryItems);

function onImagesOpenModal(evt) {
  evt.preventDefault();
  const urlElementGallery = evt.target.dataset.source;
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
          <img src="${urlElementGallery}" width="800" height="600">
      `);
  instance.show();
  galleryRef.addEventListener("keydown", onEscapeCloseModal);
  function onEscapeCloseModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
      galleryRef.removeEventListener('keydown', onEscapeCloseModal)
    }
    
  }
 
}

  



// console.log(galleryItems);
