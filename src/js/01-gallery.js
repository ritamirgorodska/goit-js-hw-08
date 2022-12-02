import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);
const listGallery = document.querySelector('.gallery')
const markUp = createGal(galleryItems)
listGallery.innerHTML = markUp
function createGal (galleryItems) {
    return galleryItems.map(({preview, original, description})=>{
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/>
      </a>`
    }).join('')
}
new SimpleLightbox ( '.gallery a' ,  {captions: true,
    captionsData: 'alt',
    captionDelay: 250,} )