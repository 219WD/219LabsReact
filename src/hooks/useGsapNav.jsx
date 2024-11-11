import { useEffect } from 'react';
import { gsap } from 'gsap';

const useGsapNav = () => {
    useEffect(() => {
        const currentTime = document.querySelector("#currentTime");
        const menuToggleBtn = document.querySelector(".menu");
        const menuItemsContainer = document.querySelector(".menu-container");
        const menuItems = document.querySelectorAll(".menu-item");
        let isMenuOpen = false; // `isMenuOpen` está inicializado en false

        // Inicializar opacidad del contenido con opacidad 0
        gsap.set(".container.navBar", { opacity: 0 });

        // Mostrar todo el contenido con una opacidad gradual después de 15 segundos
        setTimeout(() => {
            gsap.to(".container.navBar", {
                opacity: 1,
                duration: 1,
                ease: "power2.out",
            });
        }, 16500); // 15 segundos de retraso


        // Inicializar opacidad y posición del menú y los elementos
        gsap.set(menuItemsContainer, { y: 50, opacity: 0 });
        gsap.set(menuItems, { y: 50, opacity: 0 });

        // Mostrar la hora actual
        function time() {
            const d = new Date();
            const s = d.getSeconds();
            const m = d.getMinutes();
            const h = d.getHours();
            if (currentTime) {
                currentTime.textContent =
                    ("0" + h).substr(-2) + ":" +
                    ("0" + m).substr(-2) + ":" +
                    ("0" + s).substr(-2);
            }
        }
        setInterval(time, 1000);

        // Función para alternar el menú
        function toggleMenu() {
            if (!isMenuOpen) {
                menuToggleBtn.classList.add("active");
                gsap.to(menuItemsContainer, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out",
                });
                gsap.to(menuItems, {
                    pointerEvents: "all",
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power2.out",
                    onComplete: () => {
                        isMenuOpen = true;
                    },
                });
            } else {
                menuToggleBtn.classList.remove("active");
                gsap.to(menuItemsContainer, {
                    y: -50,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                        // Restablecer el estado y opacidad después del cierre
                        gsap.set(menuItemsContainer, { y: 50, opacity: 0 });
                        gsap.set(menuItems, { y: 50, opacity: 0, pointerEvents: "none" });
                        isMenuOpen = false;
                    },
                });
            }
        }

        // Añadir listeners si los elementos existen
        if (menuItems && menuToggleBtn) {
            menuItems.forEach((menuItem) => {
                menuItem.addEventListener("click", toggleMenu);
            });
            menuToggleBtn.addEventListener("click", toggleMenu);
        }

        // Limpieza de listeners al desmontar
        return () => {
            if (menuItems && menuToggleBtn) {
                menuItems.forEach((menuItem) => {
                    menuItem.removeEventListener("click", toggleMenu);
                });
                menuToggleBtn.removeEventListener("click", toggleMenu);
            }
        };
    }, []);
};

export default useGsapNav;
