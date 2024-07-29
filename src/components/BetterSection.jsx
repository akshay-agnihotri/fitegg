import bg_orange from "../assets/bg_orange.gif";
import hen_egg from "../assets/hen-egg.png";
import feather_image from "../assets/Feather-Images-for-Motion.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BetterSection() {
  const henEggRef = useRef(null);
  const featherImgRef = useRef(null);
  const henEggMobileRef = useRef(null);
  const featherImgMobileRef = useRef(null);
  const BetterSectionWrapperDiv = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      henEggRef.current,
      { transform: "translateY(0rem)" },
      {
        transform: "translateY(-6rem)",
        scrollTrigger: {
          trigger: henEggRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      featherImgRef.current,
      { transform: "translateY(0rem)" },
      {
        transform: "translateY(6rem)",
        scrollTrigger: {
          trigger: featherImgRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      henEggMobileRef.current,
      { transform: "translateY(0rem)" },
      {
        transform: "translateY(-4rem)",
        scrollTrigger: {
          trigger: BetterSectionWrapperDiv.current,
          start: "top top",
          end: "+=400",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      featherImgMobileRef.current,
      { transform: "translateY(0rem)" },
      {
        transform: "translateY(4rem)",
        scrollTrigger: {
          trigger: BetterSectionWrapperDiv.current,
          start: "top top",
          end: "+=400",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div
      ref={BetterSectionWrapperDiv}
      className="w-full  bg-repeat"
      style={{ backgroundImage: `url(${bg_orange})` }}
    >
      <div className="pt-24 px-8 sm:px-16 lg:px-24 bg-gradient-to-b from-[#F6F6F6]">
        <h2 className="text-[8vw] sm:text-[2.5rem] lg:text-[4vw] 2xl:text-[5vw] text-center lg:text-left font-extrabold font-sans text-[#DA3A3B] ">
          HOW ARE WE BETTER?
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex flex-col sm:flex-row justify-center lg:justify-between items-start lg:items-center pt-8 md:pt-14 lg:pt-20 space-y-4 sm:space-y-0">
            <div className="flex flex-col items-start lg:justify-between lg:items-center  lg:w-auto">
              <h2 className="font-sans font-extrabold text-[#C39132] text-[3vw] sm:text-[2.5vw]  lg:text-center ">
                FIT EGG
              </h2>
              <ol className="flex flex-col justify-between list-decimal font-ubuntu list-inside  text-[2.5vw] sm:text-[1.8vw] md:text-[1.6vw] lg:text-[1.4vw] gap-1 sm:gap-2 mt-2 sm:mt-6 w-full">
                <li>Consistent quality from rigorous control measures.</li>
                <li>Higher omega-3 and enriched vitamins for health.</li>
                <li>Eco-friendly packaging that ensures durability.</li>
                <li>
                  Transparent sourcing with detailed information provided.
                </li>
                <li>High satisfaction rate among our loyal customers.</li>
              </ol>
            </div>
            <div className="hidden lg:block relative">
              <img src={hen_egg} alt="" className="w-[32vw]" ref={henEggRef} />
              <img
                src={feather_image}
                alt=""
                className="absolute inset-0"
                ref={featherImgRef}
              />
            </div>
            <div className="flex flex-col justify-between items-start lg:items-center sm:pl-8 w-50% lg:w-auto">
              <h2 className="font-sans font-extrabold text-[#585858] text-[3vw] sm:text-[2.5vw] text-center">
                REGULAR
              </h2>
              <ol className="flex flex-col justify-between items-start list-decimal list-inside font-ubuntu  text-[2.5vw] sm:text-[1.8vw] md:text-[1.6vw] lg:text-[1.4vw] gap-1 sm:gap-2 mt-2 sm:mt-6">
                <li>Quality varies from source to source.</li>
                <li>Provides standard nutritional benefits.</li>
                <li>Often uses basic and less protective packaging.</li>
                <li>Limited or unclear sourcing information available.</li>
                <li>Customer satisfaction can be inconsistent.</li>
              </ol>
            </div>
          </div>
          <div className="flex items-center justify-center sm:hidden relative h-fit">
            <img
              src={hen_egg}
              alt=""
              className=" w-[130px]"
              ref={henEggMobileRef}
            />
            <img
              src={feather_image}
              alt=""
              className="absolute inset-0"
              ref={featherImgMobileRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BetterSection;
