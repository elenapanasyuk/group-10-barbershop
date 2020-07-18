(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const body = document.querySelector('body');
  const toggleMenu = () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    menuBtnRef.classList.toggle('is-open');
    body.classList.toggle('body-hidden');
    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('is-open');
  };
  menuBtnRef.addEventListener('click', () => {
    toggleMenu();
  });
  mobileMenuRef.addEventListener('click', ({ target }) => {
    target.getAttribute('data-menu-link') === '' && toggleMenu();
  });
})();
