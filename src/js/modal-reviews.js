(() => {
  const mobileMenu = document.querySelector('.reviews-modal-container');
  const openMenuBtn = document.querySelector('.reviews-modal-open');
  const closeMenuBtn = document.querySelector('.reviews-modal-close');
  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-hidden');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';

    if (scrollLockMethod === 'enableBodyScroll') {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  // window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  //   if (!e.matches) return;
  //   mobileMenu.classList.remove('is-open');
  //   openMenuBtn.setAttribute('aria-expanded', false);
  // });
})();
