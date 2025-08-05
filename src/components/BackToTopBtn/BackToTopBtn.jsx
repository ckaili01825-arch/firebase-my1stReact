import React, { useState, useEffect} from 'react';
import './BackToTopBtn.css';

function BackToTopBtn() {
    const [isBTTbtnVisible, setisBTTbtnVisible] = useState(false);
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 50){
                setisBTTbtnVisible(true);
                //console.log('show button');
            }else{
                setisBTTbtnVisible(false);
               // console.log('hide button');
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //清除事件監聽器，避免記憶體洩漏
        }
    },[])
    const handleClickBackToTop = (event) =>{
        event.preventDefault();//保險用，阻止事件的預設行為
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return(
        <div className = {`back-to-top-btn ${isBTTbtnVisible ? 'show' : ''}`} onClick={handleClickBackToTop} ></div>
        /*React 使用了 虛擬 DOM + JSX 語法，
            所以你寫在 JSX 裡的 onClick={handleClick} 會：
            1.在背後幫你加上事件監聽器（addEventListener）；
            2.當組件卸載時，React 也會自動移除監聽器（避免記憶體洩漏）；
            3.讓你的事件處理邏輯維持在元件邏輯內部，更容易維護。*/
        
    )
}

export default BackToTopBtn;