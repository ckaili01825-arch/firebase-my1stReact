import React, { useEffect,useRef} from "react";
import '../pages/Home/Home.css'
function ParallaxBackground(){
    const layer1Ref = useRef(null);//初始值
    const layer2Ref = useRef(null);
    const layer3Ref = useRef(null);
    useEffect(() => {
        const layer1 = layer1Ref.current;
        const layer2 = layer2Ref.current;
        const layer3 = layer3Ref.current;
        if (!layer1 || !layer2 || !layer3){
            console.warn("ParallaxBackground: Layer references are not set correctly.");
            return;
        } 
    }, []);

    return(
        <>
                  <div className="container-bg">
        
                    <div ref={layer1Ref} className='container-bg-parallax layer-1'>
                      <div className="container-bg-parallax__layer"></div>
                    </div>
                    <div ref={layer2Ref} className='container-bg-parallax layer-2'>
                      <div className="container-bg-parallax__layer"></div>
                    </div>
                    <div ref={layer3Ref} className='container-bg-parallax layer-3'>
                      <div className="container-bg-parallax__layer"></div>
                    </div>
                  </div>
        </>
    );
}
export default ParallaxBackground;