import './WebView.css';


function WebView(){
    return(
        <>
        <div className='project-display-box'>
            <div className='project-container' id='section1'>
                <div className='project-bg1'></div>
                <div className='project-bg2-shadow'>
                    <div className='project-bg2'></div>
                </div>
                <div className='project-num'>
                    <img src="/01.svg" alt="project01" />
                </div>
                <div className='project-decoration-text'>
                    <p> 2024 Work Project</p>
                </div>

                <div className='project-screen'>
                    <div className='project-screen-contents'>
                        <img src="/fullpic-freya-pc.png" alt="freya gaming website" />
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
                      <img src="/fullpic-freya-pc.png" alt="freya gaming website" />
                </div>
            </div>
            <div className='project-container project3'>
                <div className='project-bg1'></div>
                <div className='project-bg2-shadow'>
                    <div className='project-bg2'></div>
                </div>
                <div className='project-num'>
                    <img src="/01.svg" alt="project01" />
                </div>
                <div className='project-decoration-text'>
                    <p> 2024 Work Project</p>
                </div>

                <div className='project-screen'>
                    <div className='project-screen-contents'>
                        <img src="/fullpic-kiraHome-pc.png" alt="Kirabase x Paradaily theme page" />
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
                      <img src="/fullpic-kiraHome-pc.png" alt="Kirabase x Paradaily theme page" />
                </div>
            </div>
        </div>

        </>
    )
}
export default WebView;