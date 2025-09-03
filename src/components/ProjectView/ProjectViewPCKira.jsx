import './ProjectViewPC.css';
import React, { useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import PicSlider from '../PicSlider/PicSlider';
function ProjectView({ onClose }){
  const screenRef = useRef(null);
  const animationIdRef = useRef(null);
  const startTimeRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
    const [showSlider, setShowSlider] = useState(false);
    const handleClick = () => {
        setShowSlider(true); // 按下去顯示 PicSlider
    };
  function smoothScrollTo(element, target, duration = 500) {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }

    const start = element.scrollTop;
    const change = target - start;
    startTimeRef.current = performance.now();

    function animateScroll(currentTime) {
      if (!startTimeRef.current) startTimeRef.current = currentTime;
      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      element.scrollTop = start + change * progress;

      if (progress < 1) {
        animationIdRef.current = requestAnimationFrame(animateScroll);
      } else {
        animationIdRef.current = null;
        startTimeRef.current = null;
        setIsScrolling(false);
      }
    }

    setIsScrolling(true);
    animationIdRef.current = requestAnimationFrame(animateScroll);
  }

  const handleScroll = () => {
    if (!screenRef.current) return;
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
      startTimeRef.current = null;
      setIsScrolling(false);
      return;
    }

    const el = screenRef.current;
    const isAtBottom = Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 1;

    if (isAtBottom) {
      smoothScrollTo(el, 0, 5000);
    } else {
      smoothScrollTo(el, el.scrollHeight, 30000);
    }
  };    
    return(
        <>
        <div className='projectView-overlay'>
            <div className='projectView-overlay-bg'></div>
            <div className='projectView-container-wrap ver-pc'>
                <p className='projectView-year'>2023<br></br>
                <span style={{ display: 'inline-block', transform: 'rotate(90deg)', transformOrigin: 'center',margin:'8px 4px 0px 0' }}>-</span>
                <br></br>2024<br></br>Work<br></br>Project</p>
                <div className='projectView-container'>
                    <div className='projectView-screen' ref={screenRef}>
                        <LazyLoadImage src='/fullpic-kiraCat-pc.png' alt='kirabase x paradaily Category version page pc' effect='opacity'/>
                         <LazyLoadImage src='/fullpic-kiraIdol-pc.png' alt='kirabase x paradaily Category version page pc' effect='opacity'/>
                         <LazyLoadImage src='/fullpic-kiraPost-pc.png' alt='kirabase x paradaily Category version page pc' effect='opacity'/>
                    </div>
                    <div className='projectView-fs-icon-wrap' onClick={handleClick}>
                            <div className='projectView-fs-icon'></div>
                    </div>
                    <div className='projectView-info'>
                        <div className='projectView-info-title-wrap'>
                            <div className='main-title'>
                                <p>03</p>
                                <p>Kirabase x Paradaily</p>
                            </div>
                            <div className='sub-title'>
                                <p>Themed Pages</p>
                            </div>

                        </div>
                        <div className='projectView-exp-btn-col'>
                            <div className='projectView-exp-btn'  onClick={handleScroll}>
                                <div className='projectView-exp-btn-wrap'>
                                    <div className='projectView-exp-btn-shadow'></div>
                                    <div className='projectView-exp-btn-circle'></div>
                                    <div className='projectView-exp-btn-icon'>
                                        <div className='projectView-exp-btn-icon-content'></div>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className='projectView-tags'>
                        <div className='projectView-tag'>
                            <p>Jobs:</p>
                        </div>
                        <div className='projectView-tag'>
                            <p>Wireframe</p>
                        </div>
                        <div className='projectView-tag'>
                            <p>Web Design</p>
                        </div>
                        <div className='projectView-tag'>
                            <p>Programming</p>
                        </div>
                    </div>
                </div>
                <div className='projectView-description'>

                    <div className='projectView-description-box'>
                        <div className='profile-pic'>
                            <LazyLoadImage src='/profile-pic.png' alt='profile photo' effect='opacity'/>
                        </div>
                        <div className='profileView-description-text'>
                            <p>
                                Kirabase x Paradaily collaboration news pages, providing exclusive Kirabase information.
                            </p>
                        </div>
                    </div>
                        <div className='projectView-description-box'>

                        <div className='profileView-description-text'>
                            <p>
                            Kirabase is a Japanese-style themed restaurant famous for its idol waitress performances, with many popular IP collaborations like Sanrio.
                            </p>
                        </div>
                    </div>
                </div>
                


                    
        
                <div className='close-btn' onClick={onClose}>
                    <div className='close-icon'></div>
                </div>
            </div>
        </div>
        {showSlider && (
             <PicSlider 
            onClose={() => setShowSlider(false)} 
            slideKey="kirabase" 
            />
        )}
        </>
    );
}
export default ProjectView;