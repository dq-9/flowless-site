document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.site-header');
  const nav = header ? header.querySelector('.site-nav') : null;

  if (!header || !nav) return;

  if (!nav.id) nav.id = 'site-navigation';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'menu-toggle';
  button.setAttribute('aria-controls', nav.id);
  button.setAttribute('aria-expanded', 'false');
  button.innerHTML =
    '<span class="menu-toggle-icon" aria-hidden="true"></span>' +
    '<span>' + (document.documentElement.lang === 'ja' ? 'メニュー' : 'Menu') + '</span>';

  header.classList.add('has-mobile-menu');
  nav.before(button);

  function closeMenu() {
    header.classList.remove('nav-open');
    button.setAttribute('aria-expanded', 'false');
  }

  button.addEventListener('click', function () {
    const isOpen = header.classList.toggle('nav-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', function (event) {
    if (!header.contains(event.target)) closeMenu();
  });
});
