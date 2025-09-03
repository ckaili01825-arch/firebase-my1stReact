import './WebView.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

function WebView(){

    return(
        <>
        
        <div className='project-display-box'>
            <div className='project-container project1' id='section1'>
                <div className='project-bg1'></div>
                <div className='project-bg2-shadow'>
                    <div className='project-bg2'></div>
                </div>
                <div className='project-num'>
                    <LazyLoadImage
                        src="/01.svg"
                        alt="project01"
                        effect="opacity"
                    />
                </div>
                <div className='project-decoration-text'>
                    <p>2024 Work Project</p>
                </div>

                <div className='project-screen'>
                    <div className='project-screen-contents'>
                        <LazyLoadImage
                            src="/fullpic-freya-pc.png"
                            alt="freya gaming website"
                            effect="opacity"
                        />
                    </div>
                </div>
                <div className='project-title'>
                    <p>Gaming<br></br>Landing Page</p>
                </div>
                <div className='project-subtitle'>
                    <p>title: </p>
                    <p>FREYA</p>
                </div>
                <div className='project-jobs-title'>
                    <p>Jobs:</p>
                </div>
                <div className='project-jobs-list'>
                    <p>Web Design</p>
                    <p>Programming</p>
                </div>
                <div className='project-visual-full'>
                    <LazyLoadImage
                    src="/fullpic-freya-pc.png"
                    alt="freya gaming website"
                    effect="opacity"
                    />
                </div>
            </div>
            <div className='project-container project2 reverse-direct'>
                <div className='project-bg1'></div>
                <div className='project-bg2-shadow'>
                    <div className='project-bg2'></div>
                </div>
                <div className='project-num'>
                    <LazyLoadImage
                        src="/01.svg"
                        alt="project01"
                        effect="opacity" 
                    />
                </div>
                <div className='project-decoration-text'>
                    <p>2024 Work Project</p>
                </div>

                <div className='project-screen'>
                    <div className='project-screen-contents'>
                    <LazyLoadImage
                        src="/fullpic-kiraHome-pc.png"
                        alt="Kirabase x Paradaily theme page"
                        effect="opacity"
                    />
                    </div>
                </div>
                <div className='project-title'>
                    <p>Gaming<br></br>Landing Page</p>
                </div>
                <div className='project-subtitle'>
                    <p>title: </p>
                    <p>Dragon Goddess</p>
                </div>
                <div className='project-jobs-title'>
                    <p>Jobs:</p>
                </div>
                <div className='project-jobs-list'>
                    <p>Wireframe</p>
                    <p>Web Design</p>
                    <p>Programming</p>
                </div>
                <div className='project-visual-full'>
                    <LazyLoadImage
                        src="/fullpic-kiraHome-pc.png"
                        alt="Kirabase x Paradaily theme page"
                        effect="opacity"
                    />
                </div>
            </div>
            <div className='project-container project3'>
                <div className='project-bg1'></div>
                <div className='project-bg2-shadow'>
                    <div className='project-bg2'></div>
                </div>
                <div className='project-num'>
                    <LazyLoadImage
                        src="/01.svg"
                        alt="project01"
                        effect="opacity"  // 透明淡入
                    />
                </div>
                <div className='project-decoration-text'>
                    <p>2023-2024 Work Project</p>
                </div>

                <div className='project-screen'>
                    <div className='project-screen-contents'>
                    <LazyLoadImage
                        src="/fullpic-kiraHome-pc.png"
                        alt="Kirabase x Paradaily theme page"
                        effect="opacity"
                    />
                    </div>
                </div>
                <div className='project-title'>
                    <p>Kirabase</p><p>x</p><p>Paradaily<br></br>Theme Pages</p>
                </div>
                <div className='project-jobs-title'>
                    <p>Jobs:</p>
                </div>
                <div className='project-jobs-list'>
                    <p>Wireframe</p>
                    <p>Web Design</p>
                    <p>Programming</p>
                </div>
                <div className='project-visual-full'>
                    <LazyLoadImage
                        src="/fullpic-kiraHome-pc.png"
                        alt="Kirabase x Paradaily theme page"
                        effect="opacity"
                    />
                </div>
            </div>
            <div className='project-container project4 reverse-direct'>
                <div className='project-bg1'></div>
                <div className='project-bg2-shadow'>
                    <div className='project-bg2'></div>
                </div>
                <div className='project-num'>
                    <LazyLoadImage
                        src="/01.svg"
                        alt="project01"
                        effect="opacity" 
                    />
                </div>
                <div className='project-decoration-text'>
                    <p>2023-2025 Work Project</p>
                </div>

                <div className='project-screen'>
                    <div className='project-screen-contents'>
                    <LazyLoadImage
                        src="/fullpic-para-pc.png"
                        alt="Kirabase x Paradaily theme page"
                        effect="opacity"
                    />
                    </div>
                </div>
                <div className='project-title'>
                    <p>Gaming<br></br>Landing Page</p>
                </div>
                <div className='project-subtitle'>
                    <p>title: </p>
                    <p>Dragon Goddess</p>
                </div>
                <div className='project-jobs-title'>
                    <p>Jobs:</p>
                </div>
                <div className='project-jobs-list'>
                    <p>Wireframe</p>
                    <p>Web Design</p>
                    <p>Programming</p>
                </div>
                <div className='project-visual-full'>
                    <LazyLoadImage
                        src="/fullpic-kiraHome-pc.png"
                        alt="Kirabase x Paradaily theme page"
                        effect="opacity"
                    />
                </div>
            </div>
        </div>

        </>
    )
}
export default WebView;