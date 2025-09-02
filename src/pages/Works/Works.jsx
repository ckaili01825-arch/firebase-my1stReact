import './Works.css';
import WebView from '../../components/WebView/WebView';''
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';


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
                    Select<br></br>a<br></br>Work<br></br>Project
                </p>
            </div>
            
            <div className='works-folders'>
                <div className='works-folder'>
                <div className='works-folder-image'>
                    <img src="/cover-freya.png" alt="" />
                    <div className='filter'></div>
                     <div className='filter-decor'></div>
                </div>
                <div className='works-folder-info'>
                    <div className='works-folder-type'>
                        <div className='works-folder-type-icon'></div>
                    </div>
                    <div className='works-folder-text'>
                        <p>Freya Landing Page</p>
                    </div>
                </div>
                </div>
                <div className='works-folder'>
                <div className='works-folder-image'>
                    <img src="/cover-dragonGoddess.png" alt="Dragon Goddess Landing Page" />
                    <div className='filter'></div>
                    <div className='filter-decor'></div>
                </div>
                <div className='works-folder-info'>
                    <div className='works-folder-type'>
                        <div className='works-folder-type-icon'></div>
                    </div>
                    <div className='works-folder-text'>
                        <p>Dragon Goddess Landing Page</p>
                    </div>
                </div>
                </div>
                <div className='works-folder'>
                <div className='works-folder-image'>
                    <img src="/cover-kira.png" alt="news platforms' folder's cover" />
                    <div className='filter'></div>
                     <div className='filter-decor'></div>
                </div>
                <div className='works-folder-info'>
                    <div className='works-folder-type'>
                        <div className='works-folder-type-icon'></div>
                    </div>
                    <div className='works-folder-text'>
                        <p>Kirabase Theme Pages</p>
                    </div>
                </div>
                </div>
                <div className='works-folder'>
                <div className='works-folder-image'>
                    <img src="/cover-para.png" alt="landing pages for games' folder's cover" />
                    <div className='filter'></div>
                     <div className='filter-decor'></div>
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
            </div>
        </div>
    </div>

    </>
)

}
export default Works;