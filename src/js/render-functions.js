import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  spinner: true,
  captions: true,
  captionDelay: 500,
  captionsData: 'alt',
  overlay: true,
  overlayOpacity: 0.9,
});

export function createGallery(images) {
  gallery.innerHTML = images.map(e => galleryItemMarkup(e)).join('');
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showMessage(message) {
  iziToast.warning({
    message: message,
    position: 'topCenter',
  });
}

function galleryItemMarkup({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
        <li class="gallery-item">
          <a class="gallery-item-link" href="${largeImageURL}">
            <img
              class="gallery-item-image"
              src="${webformatURL}"
              alt="${tags}"
              height="152"
            />
          </a>
          <ul class="gallery-item-specs">
            <li>Likes <span data-likes>${likes}</span></li>
            <li>Views <span data-views>${views}</span></li>
            <li>Comments <span data-comments>${comments}</span></li>
            <li>Downloads <span data-downloads>${downloads}</span></li>
          </ul>
        </li>
  
  `;
}
