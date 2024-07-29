import aboutUsVideo from "../assets/aboutus_video.mp4";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  const videoRef = useRef(null);
  const headingRef = useRef(null);
  const AboutUsWrapperDiv = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, clipPath: "inset(45% 20% 45% 20%)" },
      {
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        scrollTrigger: {
          trigger: AboutUsWrapperDiv.current,
          start: "top 300",
          end:"+=300",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, transform: "translateX(-150%)" },
      {
        opacity: 1,
        transform: "translateX(0%)",
        scrollTrigger: {
          trigger: AboutUsWrapperDiv.current,
          start: "top 300",
          end:"+=300",
          scrub: 2,
        },
      }
    );
  }, []);

  return (
    <div
      ref={AboutUsWrapperDiv}
      className="AboutUsWrapperDiv flex flex-col px-[6vw] xl:px-24 lg:pt-28 pt-10 min-h-[100vh]"
    >
      <h2
        className="font-sans font-extrabold text-[2rem] sm:text-[2.5rem] lg:text-[3vw] 2xl:text-[5vw] tracking-wide sm:mb-12 md:mb-8 text-center md:text-left bg-white w-fit pr-7 pl-3"
        style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)" }}
        ref={headingRef}
      >
        ABOUT US
      </h2>
      <div className="flex lg:flex-row flex-col sm:gap-7 lg:gap-0 w-full justify-between items-center text-[#042F1A]">
        {/* left */}
        <p className="font-ubuntu my-3 sm:my-0 sm:font-bold sm:text-[1.15rem] 2xl:text-[1.8rem] lg:w-[42%] w-full">
          Welcome to FIT EGG, your trusted source for high-quality eggs. With
          multiple locations, our mission is to deliver freshness and excellence
          in every egg we sell. At FIT EGG, we take pride in sourcing premium
          eggs from reliable suppliers, ensuring they meet our rigorous quality
          standards. Our commitment extends beyond product quality—we aim to
          provide exceptional customer service and a seamless shopping
          experience. Whether you visit us in-store or shop with us online, we
          guarantee that every egg you purchase is a symbol of quality and care.
          Discover the FIT EGG difference today and enjoy the best in eggs!
        </p>
        {/* right */}
        <video
          src={aboutUsVideo}
          autoPlay
          loop
          muted
          className="rounded-3xl aboutUsVideoElement lg:w-[55%]"
          ref={videoRef}
        />
      </div>
    </div>
  );
}

export default AboutUs;
