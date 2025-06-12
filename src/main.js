import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';
import {
  showMessage,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  loadMoreBtn,
  showLoadMoreButton,
  hideLoadMoreButton,
  scrollUp,
} from './js/render-functions';

const form = document.querySelector('.form');
let page = 1;
let queryText;

form.addEventListener('submit', event => {
  event.preventDefault();
  queryText = form.elements['search-text'].value.trim();
  if (!queryText) {
    showMessage('Please enter some text');
    return;
  }
  clearGallery();
  showLoader();
  page = 1;

  getImagesByQuery(queryText)
    .then(response => {
      hideLoader();

      if (response.hits.length === 0) {
        showMessage(
          'Sorry, there are no images matching your search query. Please try again'
        );
      } else {
        createGallery(response.hits);
      }

      if (response.totalHits > PER_PAGE) showLoadMoreButton();
    })
    .catch(error => {
      hideLoader();
      showMessage(error.message);
    });
});

loadMoreBtn.addEventListener('click', event => {
  page++;
  getImagesByQuery(queryText, page)
    .then(response => {
      createGallery(response.hits);
      scrollUp();
      if (response.totalHits <= PER_PAGE * page) {
        hideLoadMoreButton();
        showMessage(
          `We're sorry, but you've reached the end of search results.`
        );
      }
    })

    .catch(error => {
      hideLoader();
      showMessage(error.message);
    });
});
