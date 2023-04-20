
import img1 from "../../../public/slide2.webp";
import img2 from "../../../public/slide3.webp";
import img3 from "../../../public/slide4.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Slider = () => {

    return (
        <div className="mt-10 ">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="w-3/4"
            >

                <SwiperSlide>
                    <img src={img1} alt="" className=" w-full h-full" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img2} alt="" className=" w-full h-full" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={img3} alt="" className=" w-full h-full" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider