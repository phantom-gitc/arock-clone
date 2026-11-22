import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const MenuPage = ({ isMenuOpen, onMenuClose }) => {
  const menuContainerRef = useRef(null);

  // Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isMenuOpen) {
        onMenuClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, onMenuClose]);

  // Clip-path reveal animation
  useGSAP(
    () => {
      const menu = menuContainerRef.current;
      if (!menu) return;

      gsap.killTweensOf(menu);

      if (isMenuOpen) {
        gsap.set(menu, {
          clipPath: "inset(100% 0% 0% 0%)",
          pointerEvents: "auto",
        });

        gsap.to(menu, {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.4,
          ease: "expo.inOut",
          force3D: true,
        });
      } else {
        gsap.to(menu, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 1.4,
          ease: "expo.inOut",
          force3D: true,

          onComplete: () => {
            gsap.set(menu, {
              pointerEvents: "none",
              clipPath: "inset(100% 0% 0% 0%)",
            });
          },
        });
      }
    },
    {
      scope: menuContainerRef,
      dependencies: [isMenuOpen],
      revertOnUpdate: false,
    },
  );

  return (
    <div
      ref={menuContainerRef}
      className="fixed inset-0 z-50 flex h-screen w-full bg-pink-700"
      style={{
        clipPath: "inset(100% 0% 0% 0%)",
        willChange: "clip-path",
      }}
      aria-hidden={!isMenuOpen}
    >
      <MenuLeft />
      <MenuRight onMenuClose={onMenuClose} />
    </div>
  );
};

export default MenuPage;