import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './LazyImage.css';

const LazyImage = ({ src, alt, className = '', style = {}, skeletonHeight = '200px' }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [loaded, setLoaded] = useState(false);

    return (
        <div
        ref={ref}
        className={`lazy-image-wrapper ${className}`}
        style={{ position: 'relative', ...style }}
        >
            {!loaded && (
                <div
                className="lazy-image-skeleton"
                style={{ height: skeletonHeight }}
                />
            )}
            {inView && (
                <img
                src={src}
                alt={alt}
                className={`lazy-image ${loaded ? 'loaded' : ''}`}
                onLoad={() => setLoaded(true)}
                style={{ display: loaded ? 'block' : 'none' }}
                />
            )}
        </div>
    );
};

export default LazyImage;
