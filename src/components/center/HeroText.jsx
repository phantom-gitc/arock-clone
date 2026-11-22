import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useRef } from "react";

gsap.registerPlugin(CustomEase);
CustomEase.create(
  "aHero",
  "M0,0 C0.1,0.02 0.26,0.18 0.44,0.56 C0.58,0.86 0.7,1.04 0.84,1.01 C0.93,0.99 1,1 1,1"
);

const LETTERS = "AROCK".split("");

const HeroText = () => {


    const heroRef = useRef(null)
    const charsRef = useRef([])

    useGSAP(() => {
        gsap.timeline()
            .fromTo(charsRef.current, {
                yPercent: 118,
                x: (i) => (i - 2) * 10,
                rotationX: -55,
                autoAlpha: 0,
                filter: "blur(12px)",
            }, {
                yPercent: 0,
                x: 0,
                rotationX: 0,
                autoAlpha: 1,
                filter: "blur(0px)",
                duration: 1,
                ease: "aHero",
                stagger: 0.07,
            }, 1.3);
    }, { scope: heroRef, dependencies: [] })
  return (
    <div>
      <h1 ref={heroRef} className="font-u8 font-black whitespace-nowrap text-[20.8vw]" aria-label="AROCK">
        {LETTERS.map((letter, index) => (
          <span className="hero-clip" key={`${letter}-${index}`} aria-hidden="true">
            <span ref={(el) => { charsRef.current[index] = el }} className="hero-char">{letter}</span>
          </span>
        ))}
      </h1>
    </div>
  )
}

export default HeroText
