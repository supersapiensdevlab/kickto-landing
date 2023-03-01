import React from "react";
import blockAudits from "../../assets/images/BlockAudit.svg";
function Partners() {
  return (
    <>
      <div className="hero  md:my-12    text-black/80 ">
        <div className="hero-content   flex flex-col  space-y-4  ">
          <div className="text-white bg-primary rounded-full text-2xl sm:text-5xl  py-5 px-10 w-max font-bold block mx-auto  rotate-4 -mt-10">
            Partners
          </div>
          <div className="grid grid-cols-1 justify-center">
            <img src={blockAudits} className="w-full h-24"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
