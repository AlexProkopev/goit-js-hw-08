// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);

const listGalleryRef = document.querySelector(".gallery");
listGalleryRef.style.listStyle = "none"

const createRef = () => {
   return galleryItems
    .map(
      (obj) => `<li class="gallery__item">
   <a class="gallery__link" href="${obj.original}">
      <img class="gallery__image" src="${obj.preview}" alt="${obj.description}" />
   </a>
</li>`
    )
    .join("");
}
    

listGalleryRef.insertAdjacentHTML("beforeend", createRef());

new SimpleLightbox(`.gallery__item a`, {
    captionsData: "alt",
    captionDelay: 250
});