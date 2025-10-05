document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const itemWidth = 300;
  let isScrolling = false;

  gallery.style.scrollBehavior = 'smooth';

  gallery.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (isScrolling || Math.abs(e.deltaY) < 10) return; // ignoriši blage pokrete

    isScrolling = true;

    const direction = Math.sign(e.deltaY);
    gallery.scrollLeft += direction * itemWidth * 2;

    setTimeout(() => {
      isScrolling = false;
    }, 300); // debounce vreme (u ms), prilagodi po potrebi
  }, { passive: false });
});
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const itemWidth = 300;
  let isScrolling = false;

  gallery.style.scrollBehavior = 'smooth';

  gallery.addEventListener('wheel', (e) => {
    e.preventDefault();

    if (isScrolling || Math.abs(e.deltaY) < 10) return;

    isScrolling = true;

    const direction = Math.sign(e.deltaY);
    gallery.scrollLeft += direction * itemWidth * 2;

    setTimeout(() => {
      isScrolling = false;
    }, 300);
  }, { passive: false });

  const videos = document.querySelectorAll('.image-container video');

  videos.forEach(video => {
    video.parentElement.addEventListener('mouseenter', () => video.play());
    video.parentElement.addEventListener('mouseleave', () => video.pause());
  });
});