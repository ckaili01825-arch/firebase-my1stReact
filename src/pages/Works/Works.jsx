import './Works.css';
import WebView from '../../components/WebView/WebView';''
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Works() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, [location]);

return(
    <>
    
    <div className='works-container'>
        <div className='works-container-wrap'>
            <div className="title">
                <p>
                    Select<br></br>A<br></br>Work<br></br>Project
                </p>
            </div>
            
            <div className='works-folders'>
                <div className='works-folder'>
                <div className='works-folder-image'>
                    <img src="/project03.png" alt="" />
                    <div className='filter'></div>
                </div>
                <div className='works-folder-info'>
                    <div className='works-folder-type'>
                        <div className='works-folder-type-icon'></div>
                    </div>
                    <div className='works-folder-text'>
                        <p>Paradaily News</p>
                    </div>
                </div>
                </div>
                <div className='works-folder'>
                <div className='works-folder-image'>
                    <img src="/project01.png" alt="news platforms' folder's cover" />
                    <div className='filter'></div>
                </div>
                <div className='works-folder-info'>
                    <div className='works-folder-type'>
                        <div className='works-folder-type-icon'></div>
                    </div>
                    <div className='works-folder-text'>
                        <p>news platforms</p>
                    </div>
                </div>
                </div>
                <div className='works-folder'>
                <div className='works-folder-image'>
                    <img src="/project01.png" alt="news platforms' folder's cover" />
                    <div className='filter'></div>
                </div>
                <div className='works-folder-info'>
                    <div className='works-folder-type'>
                        <div className='works-folder-type-icon'></div>
                    </div>
                    <div className='works-folder-text'>
                        <p>news platforms</p>
                    </div>
                </div>
                </div>
                <div className='works-folder'>
                <div className='works-folder-image'>
                    <img src="/project04.png" alt="landing pages for games' folder's cover" />
                    <div className='filter'></div>
                </div>
                <div className='works-folder-info'>
                    <div className='works-folder-type'>
                        <div className='works-folder-type-icon'></div>
                    </div>
                    <div className='works-folder-text'>
                        <p>landing pages for games</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    
        <WebView />
   


    </>
)

}
export default Works;