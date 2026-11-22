import { useRef } from "react";
import CenterText from "../center/CenterText";
import NavBar from "../navbar/NavBar";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create(
  "aCurtain",
  "M0,0 C0.2,0.02 0.36,0.1 0.5,0.28 C0.66,0.5 0.78,0.82 0.9,0.96 C0.95,1 1,1 1,1",
);

const HERO_IMAGE =
  "https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop";

const Home = ({ onMenuClick }) => {
  const homeRef = useRef(null);
  const bgRef = useRef(null);
  const curtainRef = useRef(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(
          bgRef.current,
          { scale: 1.12 },
          {
            scale: 1,
            duration: 1.7,
            ease: "expo.out",
          },
          0.35,
        )
        .to(
          curtainRef.current,
          {
            yPercent: -100,
            duration: 1,
            ease: "aCurtain",
          },
          1.1,
        );
    },
    { scope: homeRef, dependencies: [] },
  );

  return (
    <div ref={homeRef}>
      <div className="relative h-screen w-full overflow-hidden">
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url("${HERO_IMAGE}")` }}
        ></div>

        <NavBar onMenuClick={onMenuClick} />
        <CenterText />
      </div>

      <div
        ref={curtainRef}
        className="fixed inset-0 z-40 bg-zinc-900 will-change-transform"
      />
    </div>
  );
};

export default Home;
