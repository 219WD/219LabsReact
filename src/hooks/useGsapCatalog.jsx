import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

const useCatalog = () => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const split = new SplitType(".container.catalogo h3", {
            types: "words, chars",
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".container.catalogo",
                start: "top 50%",
                end: "+=125%",
                scrub: 0.5,
            },
        }).set(
            split.chars,
            {
                duration: 0.3,
                color: "#fff",
                stagger: 0.1,
            },
            0.1
        );

        gsap.fromTo(
            '.paintCatalog',
            {
                x: -100,
                scale: 0.8
            },
            {
                x: 0,
                scale: 1, 
                scrollTrigger: {
                    trigger: '.container.catalogo', 
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

export default useCatalog;
