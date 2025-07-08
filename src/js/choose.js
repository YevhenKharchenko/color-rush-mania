import Swiper from 'swiper';
import 'swiper/css/bundle';

const chooseLeftArrow = document.getElementById('chooseLeftArrow');
const chooseRightArrow = document.getElementById('chooseRightArrow');

let chooseSwiper;

chooseSwiper = new Swiper('.choose-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 12,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    init: () => {
      document.querySelector('.choose-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateChooseArrows(this);
    },
  },
});

updateChooseArrows(chooseSwiper);

function updateChooseArrows(swiper) {
  chooseLeftArrow.disabled = swiper.isBeginning;
  chooseRightArrow.disabled = swiper.isEnd;
}

chooseLeftArrow.addEventListener('click', () => {
  chooseSwiper.slidePrev();
});

chooseRightArrow.addEventListener('click', () => {
  chooseSwiper.slideNext();
});
