import { useEffect } from 'react';
import { gsap } from 'gsap';

const useGsapPreload = (imgRefs) => {
  useEffect(() => {
    const splitTextIntoSpans = (selector) => {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.innerText;
        const splitText = text
          .split('')
          .map((char) => {
            if (char === ' ') {
              return `<span style="display: inline-block;">&nbsp;</span>`;
            }
            return `<span style="display: inline-block">${char}</span>`;
          })
          .join('');
        element.innerHTML = splitText;
      }
    };

    splitTextIntoSpans('.container.preload h2');

    const h2Element = document.querySelector('.container.preload h2');
    const rectangleOverlay = document.querySelector('.rectangle-overlay');
    if (h2Element && rectangleOverlay) {
      const { width, height } = h2Element.getBoundingClientRect();
      rectangleOverlay.style.width = `${width}px`;
      rectangleOverlay.style.height = `${height}px`;
      rectangleOverlay.style.left = `${h2Element.offsetLeft}px`;
      rectangleOverlay.style.top = `${h2Element.offsetTop}px`;
    }

    // Animación de aparición de letras desde abajo
    gsap.fromTo(
      '.container.preload h2 span',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power2.out',
        onComplete: () => {
          // Animación de entrada del rectángulo con retraso de 0.7 segundos
          gsap.fromTo(
            '.rectangle-overlay',
            {
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', // Oculto
            },
            {
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', // Visible
              duration: 1,
              ease: 'power2.out',
              delay: 0.7,
              onComplete: () => {
                // Desvanecer el texto
                gsap.to('.container.preload h2', {
                  opacity: 0,
                  duration: 0.5,
                  onComplete: () => {
                    // Ocultar el rectángulo
                    gsap.to('.rectangle-overlay', {
                      clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
                      duration: 1,
                      ease: 'power2.in',
                    });
                  },
                });
              },
            }
          );
        },
      }
    );

    // Animación de entrada para cada imagen
    imgRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.5 - 0.5, // Aplicar retraso para cada imagen
        }
      );
    });

    // Animación de cambio de fondo en las imágenes
    gsap.to(".step-2 > img", {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 1, // Retraso entre cada imagen
      delay: 4 // Empezar después de la animación inicial
    });

    // Nueva animación de deslizamiento para pantalla negra y aparición del h2
    gsap.fromTo(".step-3", 
      { x: "-100%" }, // Inicia desde el borde derecho
      { 
        x: "0%",      // Termina en su posición original
        duration: 1.5, 
        ease: "power2.inOut",
        delay: 7 
      }
    );

    // Animación de aparición de cada letra en el h2 "219 LABs" de izquierda a derecha
    gsap.fromTo(
      ".step-3 svg",
      { opacity: 0, },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        delay: 7 // Ajusta este valor si deseas que inicie en otro momento
      }
    );

    const timeline = gsap.timeline({ defaults: { ease: 'power2.inOut', duration: 1, delay: 2.7 } });

    // Inicialmente, aplica el stroke blanco y fill transparente en el SVG
    timeline.to("#logoPath", { stroke: "#fff", fill: "transparent", duration: 0 });

    // Transición a fill blanco mientras el stroke desaparece
    timeline.to("#logoPath", { fill: "#fff", stroke: "transparent", duration: 1 });

    // Escala el SVG para que ocupe toda la pantalla y se convierta en un fondo blanco
    timeline.to(
      "#Capa_1",
      { scale: 20, width: "100vw", height: "100vh", duration: 1, ase: "power2.out" }
    );

    // Opcional: Desvanece el contenedor preload después de la animación
    timeline.to(".preload", { opacity: 0, duration: 1, delay: 0.5 });

    // Animación para las imágenes de carga si están en uso
    imgRefs.current.forEach((img, index) => {
      gsap.fromTo(
        img,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, delay: 0.5 * index, duration: 1.5 }
      );
    });
  }, [imgRefs]);

  return null; 
};

export default useGsapPreload;
