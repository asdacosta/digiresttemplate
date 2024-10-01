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
// import "./ServicesSlide.css";
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
    <>
      <Swipe
        modules={[Scrollbar, A11y, Autoplay, EffectFade]}
        centeredSlides
        effect={"fade"}
        speed={500}
        onRealIndexChange={(slide) => setCurrentSlideIndex(slide.realIndex)}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        scrollbar={{ draggable: false }}
        autoHeight={true}
      >
        {desktopData.map((slide) => (
          <Slide key={slide.id}>
            <img
              style={{
                width: "100vw",
                height: "100vh",
                objectFit: "fill",
                userSelect: "none",
              }}
              src={slide.src}
              alt={slide.alt}
              draggable="false"
            />
          </Slide>
        ))}
      </Swipe>
    </>
  );
}

export { Swipes };
