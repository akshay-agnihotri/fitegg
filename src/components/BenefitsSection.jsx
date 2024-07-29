import { useMediaQuery } from "react-responsive";
import benefits_left from "../assets/benefits-left.png";
import benefits_right from "../assets/benefits-right.png";
import circle from "../assets/circle.png";
import benefit_egg from "../assets/benefit-egg.png";
import benifits_mobile_left from "../assets/benefit-mobile-left.png";
import benifits_mobile_right from "../assets/benefit-mobile-right.png";
import { HashLink } from "react-router-hash-link";

function BenefitsSection() {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div id="benefit" className="benifitsSectionWrapperDiv bg-[#FFF6F6] pt-[6rem] overflow-hidden">
      <div className="benifitsSectionDiv flex flex-col justify-center items-center w-full bg-[#d6f268] pt-16 pb-24">
        <div className="relative flex items-center justify-center">
          <h2 className="BENEFITS_heading text-[9vw] font-lora font-[900] text-center text-[#042F1A]">
            BENEFITS
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="pt-16 benefits_left_img">
            <img
              src={isMobile ? benifits_mobile_left : benefits_left}
              alt=""
              className="w-[24vw] translate-y-6"
            />
          </div>
          <div className="relative mx-6 flex flex-col justify-center items-center">
            <img src={circle} alt="" className="w-[28vw]" />
            <img
              src={benefit_egg}
              alt=""
              className="benifit_egg absolute w-[20vw]"
            />
          </div>
          <div className="pt-16 benefits_right_img">
            <img
              src={isMobile ? benifits_mobile_right : benefits_right}
              alt=""
              className="w-[24vw] translate-y-6"
            />
          </div>
        </div>
        <HashLink smooth to="#benefit1">
          <button className="px-20 py-5 text-white tex-[1.2rem] bg-[#042F1A] rounded-3xl  mt-24 font-bigshoulders font-extrabold">
            READ MORE
          </button>
        </HashLink>
      </div>
    </div>
  );
}

export default BenefitsSection;
