import { galleryItems } from "./gallery-items.js";
// Change code below this line


const galleryRef = document.querySelector(".gallery");
galleryRef.innerHTML = addMarkupGallary(galleryItems);

function addMarkupGallary(arr) {
  return arr
    .map(({ original, preview, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href=${original}>
            <img
            loading ='lazy'
              class="gallery__image"
              data-src=${preview}
              data-source=${original}
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join("");
}

// ====================LAZYLOAD==========================
const imgRef = galleryRef.querySelectorAll("img");

if ("loading" in HTMLImageElement.prototype) {
    imgRef.forEach((el) => {
    el.src = el.dataset.src;
  });
} else {
  imgRef.forEach((el) => {
    el.classList.add('lazyload');
  });
  const script = document.createElement("script");
  script.src =
    "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
  script.integrity =
    "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==";
  script.crossOrigin = "anonymous";

  document.body.appendChild(script);
}
// =======================================================

galleryRef.addEventListener("click", onImagesOpenModal);

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
      galleryRef.removeEventListener("keydown", onEscapeCloseModal);
    }
  }
}

// const galleryRef = document.querySelector(".gallery");
// galleryRef.addEventListener("click", onImagesOpenModal);

// function addMarkupGallary(arr) {
//   return arr
//     .map(({ original, preview, description }) => {
//       return `
//         <div class="gallery__item">
//           <a class="gallery__link" href=${original}>
//             <img
//               class="gallery__image"
//               src=${preview}
//               data-source=${original}
//               alt="${description}"
//             />
//           </a>
//         </div>`;
//     })
//     .join("");
// }

// galleryRef.innerHTML = addMarkupGallary(galleryItems);

// function onImagesOpenModal(evt) {
//   evt.preventDefault();
//   const urlElementGallery = evt.target.dataset.source;
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   const instance = basicLightbox.create(`
//           <img src="${urlElementGallery}" width="800" height="600">
//       `);
//   instance.show();
//   galleryRef.addEventListener("keydown", onEscapeCloseModal);
//   function onEscapeCloseModal(evt) {
//     if (evt.code === "Escape") {
//       instance.close();
//       galleryRef.removeEventListener('keydown', onEscapeCloseModal)
//     }
    
//   }
 
// }

  



// console.log(galleryItems);
