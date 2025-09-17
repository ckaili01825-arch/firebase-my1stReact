import './ProjectView.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import PicSlider from '../PicSlider/PicSlider';
import { useState } from 'react';
function ProjectView({ onClose }){
    const [showSlider, setShowSlider] = useState(false);
    const handleProjectClick = () => {
        setShowSlider(true); // 按下去顯示 PicSlider
    };
    return(
        <>
        <div className='projectView-overlay'>
            <div className='projectView-overlay-bg'></div>
            <div className='projectView-container-wrap ver-mb'>
                <p className='projectView-year'>2023-2024 Work Project</p>
                <div className='projectView-container'>
                    <div className='projectView-screen'>
                        <LazyLoadImage src='/fullpic-kiraCat-pc.png' alt='gaming landing page-freya' effect='opacity'/>
                    </div>
                    <div className='projectView-fs-icon-wrap' onClick={handleProjectClick}>
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
                            <div className='projectView-exp-btn'>
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
                    <div className='profile-pic'>
                        <LazyLoadImage src='/profile-pic.png' alt='profile photo' effect='opacity'/>
                    </div>
                    <div className='profileView-description-text'>
                        <p>
                            Kirabase is a Japanese-style themed restaurant famous for its idol waitress performances, with many popular IP collaborations like Sanrio.
                        </p>
                    </div>
                    
                </div>
                <div className='close-btn'  onClick={onClose} >
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