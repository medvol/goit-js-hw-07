import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const createItemMarkup = (items) => {
      
    return items.reduce((acc, item) => {
        const { preview, original, description } = item;

        return acc + `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </div>`

    }, '')
     
}

const containerImage = document.querySelector('.gallery')

const listImage = createItemMarkup(galleryItems);
const addImageMarkup = containerImage.insertAdjacentHTML('beforeend', listImage);

containerImage.addEventListener('click', onClickImage);

function onClickImage(event) {
    event.preventDefault();
    
    if (event.target.classList.contains('gallery__image')) {
       
        const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}">`,
            {
                onShow: (instance) => {

                    document.addEventListener('keydown', event => {
                        if (event.code === 'Escape') {
                            instance.close();
                        }
                    }, {once: true})
                    
                }
                
            })
               
        instance.show()
       
    }
}

