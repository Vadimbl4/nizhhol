import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function MySwiper({data}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {
          data.length ? data.map(el => {
            return <SwiperSlide key={el.title}>
              <p className="slideTitle">{el.title}</p>
              {/* <p className="slideInner"></p>*/}{el.inner} 
              </SwiperSlide>
          }) : (null)
        }
      </Swiper>
    </>
  );
}
