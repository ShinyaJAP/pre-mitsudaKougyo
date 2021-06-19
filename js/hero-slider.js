document.addEventListener('DOMContentLoaded', () => {
    const hero = new HeroSlider('.swiper-container');
  });
  
  class HeroSlider {
    constructor(el) {
      this.el = el;
      this.swiper = this._initSwiper();
    }
  
    _initSwiper() {
      return new Swiper(this.el, {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        effect: "fade",
        // スライダーをセンターに
        centeredSlides: true,
        // 何枚表示？
        slidesPerView: 1,
        // トランジションの間隔
        speed: 4000,
        // サイズによって表示を変える
        // breakpoints: {
        //   1024: {
        //     slidesPerView:2,
        //   }
        // },
        // 自動スライド
        autoplay: {
          delay: 4000,
          // クリックしてもずっとオート
          disableOnInteraction: false,
        }
      });
    }
  }
  
  