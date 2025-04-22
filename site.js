document.addEventListener("DOMContentLoaded", () => {
  //Navbar Toggle
  const toggle = document.getElementById('navToggle');
  const navList = document.querySelector('.nav-menu');

  toggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close the nav when a link is clicked
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
});