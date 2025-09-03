import './Works.css';
import WebView from '../../components/WebView/WebView';''
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import PicSlider from '../../components/PicSlider/PicSlider';   


function Works() {
    const [showSlider, setShowSlider] = useState(false);
    const [selectedProjectKey,setSelectedProjectKey] = useState(null);
    const handleProjectClick = (slideKey) => {
        console.log("slideKey:", slideKey); 
        setSelectedProjectKey(slideKey);
        setShowSlider(true);
    };

return(
<>

    <div className='works-page'>
        {/*
        <section className='side-project'>
            <div className='title-wrap'>
                <div className='section-title'>
                    <div className='title-moving-space'>
                        <h1>Side Project</h1>
                        
                    </div> 
                </div>
                <div className='side-project-title'>
                    <div className='title-moving-space'>
                        <h2>Landing Page Design</h2>
                    </div>
                </div>
            </div>

            <div className='side-project-gallery'>
                <div className='cover-photo' onClick={()=>handleProjectClick("mellon")}>
                    <LazyLoadImage src="mellon smoothie.png" alt="" effect='opacity'/>
                </div>
                <div className='cover-photo' onClick={()=>handleProjectClick("pandancake")}>
                    <LazyLoadImage src="PANDAN CAKE.png" alt="" effect='opacity'/>
                </div>
                <div className='cover-photo' onClick={()=>handleProjectClick("donuts")}>
                    <LazyLoadImage src="donuts.png" alt="" effect='opacity'/>
                </div>
            </div>
        </section>
        */}
        <section className='side-project'>
            <div className='title-wrap'>
                <div className='section-title'>
                    <div className='title-moving-space'>
                        <h1>Side Project</h1>
                    </div>
                </div>

                <div className='side-project-title'>
                    <div className='title-moving-space'>
                        <h2>Page Design</h2>
                    </div>
                </div>
            </div>

            <div className='side-project-gallery'>
                
                <div className='cover-photo' onClick={()=>handleProjectClick("pandancake")}>
                    <LazyLoadImage src="PANDAN CAKE.png" alt="" effect='opacity'/>
                </div>
                <div className='cover-photo' onClick={()=>handleProjectClick("ebook")}>
                    <LazyLoadImage src="fullpic-ebook02.png" alt="" effect='opacity'/>
                </div>
                <div className='cover-photo' onClick={()=>handleProjectClick("gameapp")}>
                    <LazyLoadImage src="fullpic-gameapp-tb.png" alt="" effect='opacity'/>
                </div>
            </div>
        </section>
        <section className='work-project'>
            <div className='side-project-title'>
                <div className='title-moving-space'>
                    <h2>Work Project</h2>
                </div>

            </div>
            <div className='side-project-gallery'>
                <div className='cover-photo' onClick={()=>handleProjectClick("freya")}>
                    <LazyLoadImage src="fullpic-freya-pc.png" alt="" effect='opacity'/>
                </div>
                <div className='cover-photo' onClick={()=>handleProjectClick("dragonGoddess")}>
                    <LazyLoadImage src="fullpic-dragonGoddess-pc.png" alt="" effect='opacity'/>
                </div>
                <div className='cover-photo' onClick={()=>handleProjectClick("paradaily")}>
                    <LazyLoadImage src="fullpic-para-pc.png" alt="" effect='opacity'/>
                </div>
                <div className='cover-photo' onClick={()=>handleProjectClick("kirabase")}>
                    <LazyLoadImage src="fullpic-kiraIdol-pc.png" alt="" effect='opacity'/>
                </div>
            </div>
        </section>

        <section className='side-project video-section'>
            <div className='title-wrap'>
                <div className='section-title'>
                    <div className='title-moving-space'>
                        <h1>Demo Video</h1>
                    </div>
                </div>
            </div>

            <div className='gallery-contents'>
                <div className='side-project-gallery'>
                    <a className='cover-photo' target='_blank' href="https://www.youtube.com/watch?v=eueIY_kEy4s">
                        <LazyLoadImage src="video-cover-freya.png" alt="" effect='opacity'/>
                        <div className='video-interface'>
                            <div className='play-btn'></div>
                        </div>
                    </a>
                </div>
                <div className='side-project-gallery'>
                    <a className='cover-photo' target='_blank' href="https://youtu.be/cf9f_VBZXGo?si=RDkOocHwh89FfXAk">
                        <LazyLoadImage src="video-cover-dragonGoddess.png" alt="" effect='opacity'/>
                        <div className='video-interface'>
                            <div className='play-btn'></div>
                        </div>
                        
                    </a>
                </div>
            </div>
        </section>
     </div>   
    {
        showSlider && 
        <PicSlider 
        onClose={() => setShowSlider(false)} 
        slideKey={selectedProjectKey}
        />
    }
</>
)

}


export default Works;