import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const useAboutTeam = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        gsap.fromTo(
            '.paint-2',
            {
                x: -100,
                scale: 0.8
            },
            {
                x: 0,
                scale: 1, 
                scrollTrigger: {
                    trigger: '.container.technologies', 
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

export default useAboutTeam;
