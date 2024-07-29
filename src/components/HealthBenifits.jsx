import pushup from "../assets/pushup.png";
import yolk from "../assets/yolk.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HealthBenifits() {
  const yolkRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      yolkRef.current,
      { transform: "translateY(10rem)", opacity: 0.5 },
      {
        transform: "translateY(0)",
        opacity: 1,
        scrollTrigger: {
          trigger: yolkRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full items-center sm:items-start justify-between px-[6vw] gap-6 sm:gap-0">
      <div className="w-full lg:w-1/2">
        {/* left */}
        <h2 className="w-full font-sans font-extrabold text-[8vw] sm:text-[4.5vw] md:text-[5.5vw] lg:text-[4vw] 2xl:text-[4vw] text-center sm:text-left tracking-wide text-[#FFD729] mb-4 sm:mb-6 lg:mb-8">
          HEALTH BENEFITS
        </h2>
        <ol className="text-[3vw] sm:text-[2.5vw] lg:text-[1.6vw] xl:text-[1.6vw] font-ubuntu font-medium list-decimal list-inside flex flex-col gap-y-[1.5vw] px-6 sm:px-0">
          <li>High-quality protein source for muscle growth.</li>
          <li>Rich in essential vitamins and minerals.</li>
          <li>Contains antioxidants for eye health.</li>
          <li>Promotes brain health with choline.</li>
          <li>Supports heart health with omega-3s.</li>
          <li>Aids weight management, keeps you full.</li>
          <li>Boosts immune system with essential nutrients.</li>
        </ol>
      </div>
      <div className="flex justify-center items-center relative w-full lg:w-auto sm:max-lg:mt-8">
        {/* right */}
        <img
          src={pushup}
          alt=""
          className="w-[45vw] h-[60vw] sm:w-[46vw] sm:h-[32vw] lg:w-[24vw] lg:h-[30vw] xl:w-[23vw] xl:h-[30vw] object-cover rounded-[32px] sm:rounded-[64px] -rotate-6"
        />
        <div className="yolk_img">
          <img
            src={yolk}
            alt=""
            className="object-cover w-[16vw] sm:w-[10vw] xl:w-[12vw] -translate-x-8 sm:-translate-x-16 xl:-translate-x-20"
            ref={yolkRef}
          />
        </div>
      </div>
    </div>
  );
}

export default HealthBenifits;
