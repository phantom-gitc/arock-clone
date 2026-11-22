import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const SubHeading = () => {


    const subRef = useRef(null)
    const subsRef = useRef([])
    const playRef = useRef(null)

    useGSAP(() => {
        gsap.timeline()
            .fromTo(subsRef.current, { y: 16, autoAlpha: 0 }, {
                y: 0,
                autoAlpha: 1,
                duration: 0.75,
                ease: "power4.out",
                stagger: 0.08,
            }, 1.9)
            .fromTo(playRef.current, { scale: 0.6, autoAlpha: 0 }, {
                scale: 1,
                autoAlpha: 1,
                duration: 0.8,
                ease: "back.out(2.2)",
            }, 2.0);
    }, { scope: subRef, dependencies: [] })
  return (
    <div
      ref={subRef}
      className="pointer-events-none fixed inset-x-7 bottom-18 z-20 font-a4 text-[10px]  uppercase leading-[0.95] tracking-[0.03em] md:text-[10px] "
    >
      <div ref={(el) => { subsRef.current[0] = el }} className="pointer-events-auto absolute left-[-3%] bottom-[-9%] flex items-center gap-2 rounded-[4px] px-1.5 py-1">
        <button
          ref={playRef}
          type="button"
          aria-label="Play the film"
          className="grid size-7 shrink-0 place-items-center rounded-full border border-white/90"
        >
          <span className="ml-0.5 block h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-white"></span>
        </button>
        <div className="pr-0.5 text-[11px]  leading-[0.95]">
          <div>Play</div>
          <div>The Film</div>
        </div>
      </div>

      <div ref={(el) => { subsRef.current[1] = el }} className="absolute right-[11.5%] bottom-0 hidden text-left md:block">
        <div>Creator</div>
        <div>Curator</div>
      </div>

      <div ref={(el) => { subsRef.current[2] = el }} className="absolute right-[-2%] bottom-[-1%] text-left">
        <div>New York</div>
        <div>Los Angeles</div>
      </div>
    </div>
  )
}

export default SubHeading
