
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrambleTextPlugin, useGSAP);

const SubHeading = () => {
  const subRef = useRef(null);
  const subsRef = useRef([]);
  const playRef = useRef(null);

  useGSAP(
    () => {
      // Original entrance animation
      gsap
        .timeline()
        .fromTo(
          subsRef.current,
          {
            y: 16,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power4.out",
            stagger: 0.08,
          },
          1.9
        )
        .fromTo(
          playRef.current,
          {
            scale: 0.6,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            ease: "back.out(2.2)",
          },
          2.0
        );

      // Cyber scramble hover animation
      const textElements = gsap.utils.toArray(
        ".subheading-text",
        subRef.current
      );

      const cleanups = [];

      textElements.forEach((element) => {
        const originalText = element.dataset.text;
        let animation;

        const handleEnter = () => {
          animation?.kill();
          gsap.killTweensOf(element);

          element.textContent = originalText;

          animation = gsap.to(element, {
            duration: 1.1,
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

        const handleLeave = () => {
          animation?.kill();
          gsap.killTweensOf(element);

          element.textContent = originalText;
        };

        element.addEventListener("mouseenter", handleEnter);
        element.addEventListener("mouseleave", handleLeave);

        cleanups.push(() => {
          element.removeEventListener("mouseenter", handleEnter);
          element.removeEventListener("mouseleave", handleLeave);

          animation?.kill();
          gsap.killTweensOf(element);
        });
      });

      return () => {
        cleanups.forEach((cleanup) => cleanup());
      };
    },
    {
      scope: subRef,
      dependencies: [],
    }
  );

  return (
    <div
      ref={subRef}
      className="pointer-events-none fixed inset-x-7 bottom-18 z-20 font-a4 text-[10px] uppercase leading-[0.95] tracking-[0.03em] md:text-[10px]"
    >
      {/* Play Film */}
      <div
        ref={(el) => {
          subsRef.current[0] = el;
        }}
        className="pointer-events-auto absolute bottom-[-9%] left-[-3%] flex items-center gap-2 rounded-[4px] px-1.5 py-1"
      >
        <button
          ref={playRef}
          type="button"
          aria-label="Play the film"
          className="grid size-7 shrink-0 place-items-center rounded-full border border-white/90"
        >
          <span className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white" />
        </button>

        <div className="pr-0.5 text-[11px] leading-[0.95]">
          <div>
            <span
              className="subheading-text inline-block cursor-pointer"
              data-text="PLAY"
            >
              PLAY
            </span>
          </div>

          <div>
            <span
              className="subheading-text inline-block cursor-pointer"
              data-text="THE FILM"
            >
              THE FILM
            </span>
          </div>
        </div>
      </div>

      {/* Creator Curator */}
      <div
        ref={(el) => {
          subsRef.current[1] = el;
        }}
        className="pointer-events-auto absolute bottom-0 right-[11.5%] hidden text-left md:block"
      >
        <div>
          <span
            className="subheading-text inline-block cursor-pointer"
            data-text="CREATOR"
          >
            CREATOR
          </span>
        </div>

        <div>
          <span
            className="subheading-text inline-block cursor-pointer"
            data-text="CURATOR"
          >
            CURATOR
          </span>
        </div>
      </div>

      {/* Locations */}
      <div
        ref={(el) => {
          subsRef.current[2] = el;
        }}
        className="pointer-events-auto absolute bottom-[-1%] right-[-2%] text-left"
      >
        <div>
          <span
            className="subheading-text inline-block cursor-pointer"
            data-text="NEW YORK"
          >
            NEW YORK
          </span>
        </div>

        <div>
          <span
            className="subheading-text inline-block cursor-pointer"
            data-text="LOS ANGELES"
          >
            LOS ANGELES
          </span>
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
