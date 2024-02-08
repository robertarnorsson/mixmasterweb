document.addEventListener("DOMContentLoaded", function() {
  var menuOpen = document.getElementById('menu-open');
  var menuClose = document.getElementById('menu-close');
  var mobileMenu = document.getElementById('mobile-menu');

  menuOpen.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
    setTimeout(() => mobileMenu.classList.add('opacity-100'), 0);
  });

  menuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('opacity-100');
    setTimeout(() => mobileMenu.classList.add('hidden'), 250);
  });
});
