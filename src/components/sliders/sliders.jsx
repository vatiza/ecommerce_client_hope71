import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import slider1 from "../../assets/img/img (1).jpg";
import slider2 from "../../assets/img/img (2).jpg";
import slider3 from "../../assets/img/img (3).jpg";
const Sliders = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div>
            <img src={slider1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slider2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={slider3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
