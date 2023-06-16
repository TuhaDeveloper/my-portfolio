import LogoS from '../../images/j.png'
import './index.scss'

// const Logo = () => {
//     return (
//         <div className='logo-container'>
//             <img className='solid-logo' src={LogoS} alt='L' />
//             {/* <h1>logo</h1> */}
//         </div>
//     )
// }

// export default Logo

import React, { useEffect, useRef } from 'react';

const ImageAnimation = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;

        const fadeInAnimation = () => {
            let opacity = 0;
            const animationId = setInterval(() => {
                opacity += 0.05;
                image.style.opacity = opacity;

                if (opacity >= 1) {
                    clearInterval(animationId);
                }
            }, 50);
        };

        const delay = 1000; // Delay in milliseconds
        setTimeout(fadeInAnimation, delay);
    }, []);

    return (
        <div className='image-container'>
            <img
                ref={imageRef}
                className='rotation-image'
                src={LogoS}
                alt="Your Image"
                style={{ opacity: 0, transition: 'opacity 1s ease' }}
            />
        </div>
    );
};

export default ImageAnimation;
