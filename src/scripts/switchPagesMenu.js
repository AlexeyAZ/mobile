function switchPagesMenu() {
  const pagesMenu = document.querySelector('.js-pages');
  const pagesButton = pagesMenu.querySelector('.js-pages-button');

  pagesButton.addEventListener('click', e => {
    e.preventDefault();
    pagesMenu.classList.toggle('pages_show');
  });
}

export default switchPagesMenu;
