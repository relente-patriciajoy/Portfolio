document.addEventListener("DOMContentLoaded", () => {
  // Navbar Toggle
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

  // Testimonial Carousel
  let index = 0;
  const track = document.getElementById('testimonialTrack');

  if (track) {
    const total = track.children.length;

    window.moveTestimonial = function (direction) {
      index += direction;
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      track.style.transform = `translateX(-${index * 100}%)`;
    };
  }
});
