import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const useComoAyuda = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo(
            '.img-2',
            {
                x: 300,
                scale: 0.8
            },
            {
                x: 100,
                scale: 1, 
                scrollTrigger: {
                    trigger: '.container.about', 
                    start: "top 50%",
                    end: "+=125%",
                    scrub: 0.5,
                },
                duration: 3,
                ease: 'power2.out',
            }
        );

        
        gsap.fromTo(
            '.LogoAbout',
            {
                scale: 0.9
            },
            {
                scale: 1, 
                scrollTrigger: {
                    trigger: '.container.about', 
                    start: "top 50%",
                    end: "+=125%",
                    scrub: 0.5,
                },
                duration: 3,
                ease: 'power2.out',
            }
        );
    }, []);
};

export default useComoAyuda;
