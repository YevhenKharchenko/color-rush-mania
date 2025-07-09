import Swiper from 'swiper';
import 'swiper/css/bundle';

const skillsLeftArrow = document.getElementById('skillsLeftArrow');
const skillsRightArrow = document.getElementById('skillsRightArrow');

let skillsSwiper;

skillsSwiper = new Swiper('.skills-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 24,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 2,
      grabCursor: false,
      allowTouchMove: false,
    },
  },
  on: {
    init: () => {
      document.querySelector('.skills-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateSkillsArrows(this);
    },
  },
});

updateSkillsArrows(skillsSwiper);

function updateSkillsArrows(swiper) {
  skillsLeftArrow.disabled = swiper.isBeginning;
  skillsRightArrow.disabled = swiper.isEnd;
}

skillsLeftArrow.addEventListener('click', () => {
  skillsSwiper.slidePrev();
});

skillsRightArrow.addEventListener('click', () => {
  skillsSwiper.slideNext();
});
