
import logo from "../../assets/logo.png";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrambleTextPlugin, useGSAP);

const MenuRight = ({ onMenuClose }) => {
  const menuRef = useRef(null);

  const menuItems = ["ABOUT", "STORY", "PROJECTS", "RELEASES"];

  useGSAP(
    () => {
      const links = gsap.utils.toArray(".menu-link");

      const cleanups = [];

      links.forEach((link) => {
        const originalText = link.dataset.text;

        let animation;

        const enter = () => {
          animation?.kill();
          gsap.killTweensOf(link);

          // Restore original text before every hover
          link.textContent = originalText;

          // Cyber decoding / scramble animation
          animation = gsap.to(link, {
            duration: 1.2,
            ease: "none",
            scrambleText: {
              text: originalText,
              chars: "▓▒░█XO!#01<>/",
              speed: 0.5,
              revealDelay: 0,
              tweenLength: false,
            },
          });
        };

        const leave = () => {
          animation?.kill();
          gsap.killTweensOf(link);

          // Keep original text visible
          link.textContent = originalText;
        };

        link.addEventListener("mouseenter", enter);
        link.addEventListener("mouseleave", leave);

        cleanups.push(() => {
          link.removeEventListener("mouseenter", enter);
          link.removeEventListener("mouseleave", leave);

          animation?.kill();
          gsap.killTweensOf(link);
        });
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    { scope: menuRef }
  );

  return (
    <div
      ref={menuRef}
      className="relative flex h-full w-1/3 flex-col bg-[#1a1a1a] pb-3 pl-[clamp(3rem,8.5vw,9rem)] pr-8 pt-3 max-xl:w-full max-xl:pl-[clamp(2rem,8vw,8rem)] max-sm:px-5"
    >
      <button
        type="button"
        onClick={onMenuClose}
        className="absolute right-3 top-3 font-a4 text-[10px] max-sm:right-5"
      >
        CLOSE
      </button>

      <img
        src={logo}
        alt="A-Rock"
        className="mt-8 h-9 w-16 object-contain max-sm:mt-5"
      />

      <nav className="mt-20 pb-[11vh] max-sm:mt-12 max-sm:pb-8" aria-label="Main menu">
        <ul className="space-y-0 font-u8 text-[clamp(1.75rem,2.1vw,2.25rem)] font-black leading-[1]">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="menu-link inline-block cursor-pointer"
                data-text={item}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-2 gap-x-6 gap-y-12 font-a4 text-[10px] leading-[1.15] max-sm:gap-y-6">
        <div>
          <p>FOLLOW</p>
          <p>(AROCK®)</p>
        </div>

        <div>
          <p>INSTAGRAM</p>
          <p>YOUTUBE</p>
        </div>

        <div>
          <p>LISTEN</p>
          <p>(AROCK®)</p>
        </div>

        <div>
          <p>SPOTIFY</p>
          <p>MIXCLOUD</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 items-center gap-x-6 font-a4 text-[10px] max-sm:mt-6">
        <p>▪ GET IN TOUCH</p>

        <button
          type="button"
          className="w-fit bg-white px-2 py-1 font-a4 text-[10px]"
        >
          <span style={{ color: "#1a1a1a" }}>EMAIL</span>{" "}
          <span style={{ color: "#1a1a1a" }} aria-hidden="true">
            ›
          </span>
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-6 font-a4 text-[10px] leading-[1.15] max-sm:mt-6">
        <address className="not-italic">
          SAN DIEGO
          <br />
          BPM MUSIC
          <br />
          1600 NATIONAL AVE
          <br />
          SAN DIEGO, CA 92123
        </address>

        <address className="not-italic">
          LOS ANGELES
          <br />
          6255 SUNSET BLVD.
          <br />
          SUITE #700
          <br />
          LOS ANGELES, CA 90028
        </address>
      </div>
    </div>
  );
};

export default MenuRight;
