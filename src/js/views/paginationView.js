import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    const _prevButton = `
    <button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
            </svg>
        <span>Page ${curPage - 1}</span>
    </button>
    `;

    const _nextButton = `
    <button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;

    // Page 1 and there are more pages.
    if (curPage === 1 && numPages > 1) {
      return _nextButton;
    }

    // Last page.
    if (curPage === numPages && numPages > 1) {
      return _prevButton;
    }

    // in the middle pages. (between first and last)
    if (curPage < numPages) {
      return _prevButton.concat(_nextButton);
    }

    // Page 1 and last.
    return '';
  }
}

export default new PaginationView();
