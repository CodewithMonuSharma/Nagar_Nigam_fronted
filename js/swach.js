let currentCarouselIndex = 0;
const carouselSlides = document.querySelectorAll('.carousel-slide');

  function showCarouselSlide(index) {
    carouselSlides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  function changeCarouselSlide(direction) {
    currentCarouselIndex = (currentCarouselIndex + direction + carouselSlides.length) % carouselSlides.length;
    showCarouselSlide(currentCarouselIndex);
  }

  // Initialize carousel on page load
  showCarouselSlide(currentCarouselIndex);