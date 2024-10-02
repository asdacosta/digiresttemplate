import desktop1 from "../../../assets/swipes/desktop1.jpg";
import desktop2 from "../../../assets/swipes/desktop3.jpg";
import desktop3 from "../../../assets/swipes/desktop4.jpg";
import desktop4 from "../../../assets/swipes/bg4.jpg";

import { Swiper as Swipe, SwiperSlide as Slide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-fade";
import "swiper/css/scrollbar";
import { A11y, Autoplay, Scrollbar, EffectFade } from "swiper/modules";
import "./Swipe.css";
import { useState } from "react";

function Swipes() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const desktopData = [
    { src: desktop1, alt: "Desk1 Pizza", id: "desk1" },
    { src: desktop2, alt: "Desk2 Pizza", id: "desk2" },
    { src: desktop3, alt: "Desk3 Pizza", id: "desk3" },
    { src: desktop4, alt: "Desk4 Pizza", id: "desk4" },
  ];

  return (
    <section className="swipeContainer" style={{ position: "sticky" }}>
      <div className="swipeHeaders">
        <h2>Taste the love in every slice – Welcome!</h2>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
          </svg>{" "}
          Book a table
        </button>
      </div>
      <Swipe
        modules={[Scrollbar, A11y, Autoplay, EffectFade]}
        centeredSlides
        effect={"fade"}
        speed={500}
        onRealIndexChange={(slide) => {
          setTimeout(() => setCurrentSlideIndex(slide.realIndex), 400);
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        scrollbar={{ draggable: false }}
        autoHeight={true}
      >
        {desktopData.map((slide, index) => (
          <Slide key={slide.id}>
            <img
              className={index === currentSlideIndex ? "active-slide" : ""}
              src={slide.src}
              alt={slide.alt}
              draggable="false"
            />
          </Slide>
        ))}
      </Swipe>
    </section>
  );
}

export { Swipes };
