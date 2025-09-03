import './PicSlider.css';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css';
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
function PicSlider({ onClose, slideKey }) {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/data/aboutProjectSlides.json")
      .then((res) => res.json())
      .then((data) => {
        if (data[slideKey]) {
          setSlides(data[slideKey]);
        } else {
          console.warn(`找不到 key: ${slideKey}`);
        }
      })
      .catch((err) => console.error("載入失敗:", err));
  }, [slideKey]);

  return (
    <div className="fulpic-overlay">
        {slides.length > 0 && (
            <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
             modules={[Navigation, Pagination]}
            navigation
            pagination={{ type: "fraction" }} 
            onSwiper={(swiper) => {
                // 確保 navigation 正確初始化
                setTimeout(() => {
                swiper.navigation.init();
                swiper.navigation.update();
                });
            }}
            >
            {slides.map((item) => (
                <SwiperSlide key={item.id}>
                <div className="p-6 bg-gray-100 rounded-xl text-center">
                    <img src={item.imgsrc} alt={item.title} />
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            

        )}

        <button
            className="close-btn"
            aria-label="close slider"
            onClick={() => {
            console.log("close clicked");
            onClose();
            }}
        >
            <div className="close-icon"></div>
        </button>
    </div>
  );
}

export default PicSlider;
