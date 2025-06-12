import { getImagesByQuery } from './js/pixabay-api';
import {
  showMessage,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const queryText = form.elements['search-text'].value.trim();
  if (!queryText) {
    showMessage('Please enter some text');
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(queryText)
    .then(images => {
      hideLoader();

      if (images.length === 0) {
        showMessage(
          'Sorry, there are no images matching your search query. Please try again'
        );
      } else {
        createGallery(images);
      }
    })
    .catch(error => {
      hideLoader();
      showMessage(error.message);
    });
});
