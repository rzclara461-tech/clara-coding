
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carousel() {
  return (
    <Swiper spaceBetween={20} slidesPerView={1}>
      <SwiperSlide>
        <div>website portofolio</div>
      </SwiperSlide>

      <SwiperSlide>
        <div>aplikasi kasir</div>
      </SwiperSlide>

      <SwiperSlide>
        <div>website sekolah</div>
      </SwiperSlide>
    </Swiper>
  );
}