import React, { useRef, useState } from 'react';
import './ProjectViewPC.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import PicSlider from '../PicSlider/PicSlider';

function ProjectView({ onClose }) {
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
      const progress = Math.min(elapsed / duration, 1); // 0~1

      // 線性速度，progress 就是線性比例
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

    // 如果動畫正在執行，取消動畫（暫停）
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
      startTimeRef.current = null;
      setIsScrolling(false);
      return;
    }

    const el = screenRef.current;
    // 用 Math.abs 解決浮點數誤差
    const isAtBottom = Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 1;

    if (isAtBottom) {
      smoothScrollTo(el, 0, 5000);
    } else {
      smoothScrollTo(el, el.scrollHeight, 30000);
    }
  };

  return (
    <>
      <div className='projectView-overlay'>
        <div className='projectView-overlay-bg'></div>
        <div className='projectView-container-wrap ver-pc'>
          <p className='projectView-year'>
            2023
            <br />
            <span
              style={{
                display: 'inline-block',
                transform: 'rotate(90deg)',
                transformOrigin: 'center',
                margin: '8px 4px 0px 0',
              }}
            >
              -
            </span>
            <br />
            2025
            <br />
            Work
            <br />
            Project
          </p>
          <div className='projectView-container'>
            <div
              className='projectView-screen'
              ref={screenRef}
            >
              <LazyLoadImage src='/fullpic-para-pc.png' alt='gaming landing page-freya' effect='opacity' />
              <LazyLoadImage src='/fullpic-paraCat-pc.png' alt='gaming landing page-freya' effect='opacity' />
              <LazyLoadImage src='/fullpic-paraPost-pc.png' alt='gaming landing page-freya' effect='opacity' />
            </div>
            <div className='projectView-fs-icon-wrap' onClick={handleClick}>
              <div className='projectView-fs-icon'></div>
            </div>
            <div className='projectView-info'>
              <div className='projectView-info-title-wrap'>
                <div className='main-title'>
                  <p>04</p>
                  <p>Paradaily</p>
                </div>
                <div className='sub-title'>
                  <p>News Platform</p>
                </div>
              </div>
              <div className='projectView-exp-btn-col'>
                <div className='projectView-exp-btn' onClick={handleScroll}>
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
                <p>Web Design</p>
              </div>
              <div className='projectView-tag'>
                <p>Programming</p>
              </div>
              <div className='projectView-tag'>
                <p>Web Optimization</p>
              </div>
            </div>
          </div>
          <div className='projectView-description'>
            <div className='projectView-description-box'>
              <div className='profile-pic'>
                <LazyLoadImage src='/profile-pic.png' alt='profile photo' effect='opacity' />
              </div>
              <div className='profileView-description-text'>
                <p>
                  Paradaily新聞
                  <br />
                  介紹遊戲/動漫/3C資訊的新聞媒體平台
                </p>
              </div>
            </div>
            <div className='projectView-description-box'>
              <div className='profileView-description-text'>
                <p>
                  成果：
                  <br />
                  1. 跨裝置設計及切版，改善網頁易讀性
                  <br />
                  2. 優化前端效能，提升Google PageSpeed分數
                  <br />
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
            slideKey="paradaily" 
            />
        )}
    </>
  );
}

export default ProjectView;
