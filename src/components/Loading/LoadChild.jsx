import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, CustomEase);

CustomEase.create(
  "butteryExpo",
  "M0,0 C0.08,0 0.18,0.02 0.35,0.1 C0.58,0.3 0.8,0.68 1,1"
);

const LoadChild = ({ isHeroImageReady }) => {
  const lineRef = useRef(null);
  const [isProgressComplete, setIsProgressComplete] = useState(false);

  useGSAP(() => {
    gsap.to(lineRef.current, {
      width: "100%",
      duration: 1.3,
      delay: 0.05,
      ease: "butteryExpo",
      onComplete: () => setIsProgressComplete(true),
    });
  }, { scope: lineRef, dependencies: [] });

  useGSAP(() => {
    if (!isHeroImageReady || !isProgressComplete) return;

    gsap.to(lineRef.current, {
      autoAlpha: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  }, {
    scope: lineRef,
    dependencies: [isHeroImageReady, isProgressComplete],
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