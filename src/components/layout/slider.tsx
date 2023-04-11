import img from "../../../public/slider1.png";
import img1 from "../../../public/slider1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Slider = () => {

    return (
        <div className="mt-10 px-10">
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="container mx-auto object-cover "
            >
                <SwiperSlide>
                    <img src={img} alt="" className="object-cover" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img1} alt="" className=" object-cover" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Slider