import './page.css';

export default class SitePage {
  constructor() {
    const body = document.querySelector('body');
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');
    body.appendChild(pageContainer);
    return pageContainer;
  }
}