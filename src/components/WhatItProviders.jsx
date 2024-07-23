import gsap from "gsap";
import { useEffect } from "react";

function WhatItProviders() {

  useEffect(() => {
    gsap.fromTo(".marque",{x:"0%"},{
      x: `${100/3}%`,
      duration: 14,
      repeat: -1,
      ease: "linear",
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <p className="text-[4vw] font-bigshoulders font-bold tracking-wide my-[3vw] text-center text-[#3E2F08]">
        wHAT dOES FITEGG pROVIDES???
      </p>
      <div className="flex justify-center">
        <div className="marque flex-shrink-0 flex  justify-between items-center h-[150px] border-2 font-slackey text-[1.5vw] text-[#755454]  py-8 w-[300%]">
          <p className="h-full flex items-center ">HIGH PROTIEN</p>
          <p className="border-l-2 h-full  flex items-center pl-6">
            SOURCE OF OMEGA -3S
          </p>
          <p className="border-l-2 h-full flex items-center pl-6">EYE HEALTH</p>
          <p className="border-l-2 h-full flex items-center pl-6">
            BUILDS MUSCLES
          </p>
          <p className="border-l-2 h-full flex items-center pl-6">
            CONTRIBUTE TO BONE HEALTH
          </p>

          <p className="h-full flex items-center ">HIGH PROTIEN</p>
          <p className="border-l-2 h-full  flex items-center pl-6">
            SOURCE OF OMEGA -3S
          </p>
          <p className="border-l-2 h-full flex items-center pl-6">EYE HEALTH</p>
          <p className="border-l-2 h-full flex items-center pl-6">
            BUILDS MUSCLES
          </p>
          <p className="border-l-2 h-full flex items-center pl-6">
            CONTRIBUTE TO BONE HEALTH
          </p>

          <p className="h-full flex items-center ">HIGH PROTIEN</p>
          <p className="border-l-2 h-full  flex items-center pl-6">
            SOURCE OF OMEGA -3S
          </p>
          <p className="border-l-2 h-full flex items-center pl-6">EYE HEALTH</p>
          <p className="border-l-2 h-full flex items-center pl-6">
            BUILDS MUSCLES
          </p>
          <p className="border-l-2 h-full flex items-center pl-6">
            CONTRIBUTE TO BONE HEALTH
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatItProviders;
