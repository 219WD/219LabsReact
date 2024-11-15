import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const useGsapProjects = (containerRef) => {
  useEffect(() => {
    // Verifica si el ancho de la pantalla es mayor a 768px (evita efectos en móviles)
    const isDesktop = window.innerWidth > 768;

    if (!isDesktop) return; // Si es un dispositivo móvil, no aplicar efectos

    const container = containerRef.current;
    const cards = container ? container.querySelectorAll(".card") : [];

    if (cards.length > 0) {
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 100, opacity: 0, scale: 0.7 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 100%",
              end: "top 20%",
              scrub: 1,
              onEnter: () => {
                if (index > 0) {
                  gsap.to(cards[index - 1], { opacity: 0, duration: 1 });
                }
              },
              onLeaveBack: () => {
                if (index > 0) {
                  gsap.to(cards[index - 1], { opacity: 1, duration: 1 });
                }
              },
            },
          }
        );
      });
    }

    // Limpia los efectos de GSAP al desmontar el componente
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [containerRef]);
};

export default useGsapProjects;
