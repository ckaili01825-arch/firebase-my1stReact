import './PicSlider.css';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
function PicSlider({ onClose,slideKey }){
    const [slides, setSlides] = useState([]);
    useEffect(() => {
    fetch("/data/aboutProjectSlides.json") // 讀 public/data/slides.json
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
    return(
        <>
        <div className='fulpic-overlay'>
            <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
            {slides.map((item) => (
                <SwiperSlide key={item.id}>
                <div className="p-6 bg-gray-100 rounded-xl text-center">
                    <img src={item.imgsrc} alt={item.title} />
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            <button className="close-btn" aria-label="關閉"   onClick={() => {
                    console.log("close clicked");
                    onClose();
                }}>
                <div className="close-icon"></div>
            </button>
        </div>

        </>
    )
}
export default PicSlider;