(() => {
    const menuBtnOpen = document.querySelector('[data-menu-open]');
    const menuBtnClose = document.querySelector('[data-menu-close]');
    const mobileMenuRef = document.querySelector('[data-menu]');
  
    const body = document.querySelector('body');
  
    menuBtnOpen.addEventListener('click', openMenu);
    menuBtnClose.addEventListener('click', openMenu);
  
    function openMenu() {
      const expanded = menuBtnOpen.getAttribute('aria-expanded') === 'true' || false;
      menuBtnOpen.setAttribute('aria-expanded', !expanded);
  
      mobileMenuRef.classList.toggle('is-open');
  
      body.classList.toggle('no-scroll');
    }
  })();