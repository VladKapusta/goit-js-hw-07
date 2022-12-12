import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(obj) {
  return obj
    .map(({ preview, original, description }) => {
      return `

<li>
    <a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
    </a>
</li>
`;
    })
    .join(" ");
}
const markupGallery = createGalleryMarkup(galleryItems);

galleryRef.innerHTML = markupGallery;

// console.log(galleryItems);
