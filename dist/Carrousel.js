const grande = document.querySelector('.grande');
const puntos = document.querySelectorAll('.punto');
const prevButton = document.querySelector('.nav-prev');
const nextButton = document.querySelector('.nav-next');

let currentIndex = 0;


function moveCarousel(index) {
  const width = grande.offsetWidth;
  grande.style.transform = `translateX(-${index * width}px)`;

  // Actualizar puntos activos
  puntos.forEach((punto, idx) => {
    if (idx === index) {
      punto.classList.add('activo');
    } else {
      punto.classList.remove('activo');
    }
  });
}
prevButton.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? puntos.length - 1 : currentIndex - 1;
  moveCarousel(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = currentIndex === puntos.length - 1 ? 0 : currentIndex + 1;
  moveCarousel(currentIndex);
});

puntos.forEach((punto, index) => {
  punto.addEventListener('click', () => {
    currentIndex = index;
    moveCarousel(currentIndex);
  });
});
