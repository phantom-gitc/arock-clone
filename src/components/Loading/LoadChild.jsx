import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, CustomEase);

CustomEase.create(
  "butteryExpo",
  "M0,0 C0.08,0 0.18,0.02 0.35,0.1 C0.58,0.3 0.8,0.68 1,1"
);

const LoadChild = () => {
  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.timeline()
      .fromTo(
        lineRef.current,
        { width: 0 },
        {
          width: "100%",
          duration: 1.3,
          ease: "butteryExpo",
        },
        0.05
      )
      .to(
        lineRef.current,
        {
          autoAlpha: 0,
          duration: 0.3,
          ease: "power1.out",
        },
        1.15
      );
  });

  return (
    <div className="h-full w-full">
      <div
        ref={lineRef}
        className="h-full w-0 rounded bg-white"
      />
    </div>
  );
};

export default LoadChild;