import React from 'react';
import { MainSwiperData } from '../../components/Swiper/SwiperData';
import MySwiper from '../../components/Swiper/Swiper';

export default function Main() {
  return (
    <>
      <div className="main-wrap container">
          <MySwiper data={MainSwiperData}/>
      </div>
    </>
  );
}
