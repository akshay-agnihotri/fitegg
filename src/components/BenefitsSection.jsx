import { useMediaQuery } from "react-responsive";
import benefits_left from "../assets/benefits-left.png";
import benefits_right from "../assets/benefits-right.png";
import circle from "../assets/circle.png";
import benefit_egg from "../assets/benefit-egg.png";
import benifits_mobile_left from "../assets/benefit-mobile-left.png";
import benifits_mobile_right from "../assets/benefit-mobile-right.png";
import { HashLink } from "react-router-hash-link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function BenefitsSection() {
  const benifitsSectionWrapperDiv = useRef(null);
  const benifitsSectionDiv = useRef(null);
  const BENEFITS_heading = useRef(null);
  const benifit_egg = useRef(null);
  const benefits_left_img = useRef(null);
  const benefits_right_img = useRef(null);

  useEffect(() => {
    const element = benifitsSectionDiv.current;
    const wrapper = benifitsSectionWrapperDiv.current;
    const heading = BENEFITS_heading.current;
    const egg = benifit_egg.current;
    const leftImg = benefits_left_img.current;
    const rightImg = benefits_right_img.current;

    gsap.fromTo(
      element,
      { borderRadius: "30% 30% 0 0" },
      {
        borderRadius: "0% 0% 0% 0%",
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "top top",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      wrapper,
      { paddingTop: "6rem" },
      {
        paddingTop: "0rem",
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "top top",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      heading,
      { scale: 0.2, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: wrapper,
          start: "top bottom",
          end: "top top",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      egg,
      { transform: "translateY(6rem)", opacity: 0.5 },
      {
        transform: "translateY(0rem)",
        opacity: 1,
        scrollTrigger: {
          trigger: egg,
          start: "top bottom",
          end: "top center",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      leftImg,
      { transform: "translateX(-100px)", opacity: 0.4 },
      {
        transform: "translateX(0px)",
        opacity: 1,
        scrollTrigger: {
          trigger: egg,
          start: "top bottom",
          end: "top center",
          scrub: 2,
        },
      }
    );
    gsap.fromTo(
      rightImg,
      { transform: "translateX(100px)", opacity: 0.4 },
      {
        transform: "translateX(0px)",
        opacity: 1,
        scrollTrigger: {
          trigger: egg,
          start: "top bottom",
          end: "top center",
          scrub: 2,
        },
      }
    );
  }, []);

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div
      id="benefit"
      ref={benifitsSectionWrapperDiv}
      className="benifitsSectionWrapperDiv bg-[#FFF6F6] pt-[6rem]"
    >
      <div
        ref={benifitsSectionDiv}
        className="benifitsSectionDiv flex flex-col justify-center items-center w-full bg-[#d6f268] pt-16 pb-24 rounded-t-[30%]"
      >
        <div className="relative flex items-center justify-center">
          <h2
            ref={BENEFITS_heading}
            className="BENEFITS_heading text-[9vw] font-lora font-[900] text-center text-[#042F1A] scale-[0.2] opacity-[0.5]"
          >
            BENEFITS
          </h2>
        </div>

        <div className="flex justify-center">
          <div
            ref={benefits_left_img}
            className="pt-16 benefits_left_img translate-x-[-100px] opacity-[0.4]"
          >
            <img
              src={isMobile ? benifits_mobile_left : benefits_left}
              alt=""
              className="w-[24vw] translate-y-6"
            />
          </div>
          <div className="relative mx-6 flex flex-col justify-center items-center">
            <img src={circle} alt="" className="w-[28vw]" />
            <img
              ref={benifit_egg}
              src={benefit_egg}
              alt=""
              className="benifit_egg absolute w-[20vw] translate-y-[6rem] opacity-[0.5]"
            />
          </div>
          <div
            ref={benefits_right_img}
            className="pt-16 benefits_right_img translate-x-[100px] opacity-[0.4]"
          >
            <img
              src={isMobile ? benifits_mobile_right : benefits_right}
              alt=""
              className="w-[24vw] translate-y-6"
            />
          </div>
        </div>
        <HashLink smooth to="#benefit1">
          <button className="px-20 py-5 text-white tex-[1.2rem] bg-[#042F1A] rounded-3xl mt-24 font-bigshoulders font-extrabold">
            READ MORE
          </button>
        </HashLink>
      </div>
    </div>
  );
}

export default BenefitsSection;
