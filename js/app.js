const slidesWrapper = document.querySelector(`.carousel__wrapper`);
const nextArrow = document.querySelector(`.carousel__arrow--next`);
const prevArrow = document.querySelector(`.carousel__arrow--prev`);

const slides = [
  `./img/01.jpg`,
  `./img/02.jpg`,
  `./img/03.jpg`,
  `./img/04.jpg`,
  `./img/05.jpg`,
];

const slidesElements = [];
let currentIndex = 0;

for (let i = 0; i < slides.length; i++) {
  const li = document.createElement("li");
  const src = slides[i];
  const img = document.createElement("img");
  img.src = src;
  li.appendChild(img);
  li.className = `carousel__slide`;
  slidesWrapper.appendChild(li);
  slidesElements.push(li);

  if (i === currentIndex) {
    li.classList.add(`carousel-slide--active`);
  }
}

nextArrow.addEventListener("click", function () {
  const slideActive = slidesElements[currentIndex];
  slideActive.classList.remove(`carousel-slide--active`);

  if (currentIndex < slidesElements.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  const nextSlide = slidesElements[currentIndex];
  nextSlide.classList.add(`carousel-slide--active`);
});

prevArrow.addEventListener("click", function () {
  const slideActive = slidesElements[currentIndex];
  slideActive.classList.remove(`carousel-slide--active`);

  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slidesElements.length - 1;
  }

  const nextSlide = slidesElements[currentIndex];
  nextSlide.classList.add(`carousel-slide--active`);
});
