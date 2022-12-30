import React from "react";
import RoadmapCard from "../Roadmap-card";
import RoadmapCardAlt from "../Roadmap-card-alt";

import Roadmap from "./Roadmap";
const WhyTheyUseIt = () => {
  return (
    <div className="h-max w-full why-background  my-36  ">
      <div className="h-full w-full">
        <div className="text-white   bg-primary rounded-full text-2xl sm:text-5xl  py-5 px-10 w-max font-bold block mx-auto  rotate-4 -mt-10">
          Roadmap
        </div>
        <div className="hidden lg:block h-full">
          <Roadmap />
        </div>
        <div className="w-full z-10">
          <RoadmapCard
            tasks={[
              "Idea & Concept Building",
              "Team Formation",
              "Roadmap Formation",
              "Creating Social Media platforms",
              "Website concept building",
              "App Development started",
              "Dex, Farming , Staking Development started",

              "Shoes NFTs Development Started",

              "NFT marketplace development started",
            ]}
            headBefore="Q4 2022"
            headTitle="INCEPTION"
          ></RoadmapCard>
          <RoadmapCardAlt
            tasks={[
              "Launching of website",
              "Private sale started",
              "Fund Raising",
              "Token Launch Event",
              "Dex, staking platform Launch",

              "5000 Shoes NFTs Launch",

              "NFT marketplace launch",

              "Dex / coin gecko / coin market cap listing",

              "NFT Airdrop Contest Campaign",

              "Development of Kickto Academy to Educate Community",

              "Referral Programme for the Community",

              "Start of Marketing Activities",
            ]}
            headBefore="Q1 2023"
            headTitle="LAUNCH"
          ></RoadmapCardAlt>
          <RoadmapCard
            tasks={[
              "Start of PR & Media Campaign",

              "Kickto App Phase - 1 Launch",

              "launch of Mobile and Smart Watch Application",

              "Launching of Kickto Club",

              "In App Trade Function & In App Marketplace",
            ]}
            headBefore="Q2 2023"
            headTitle="MARKETING"
          ></RoadmapCard>

          <RoadmapCard
            tasks={[
              "Indroducing New Product for More Utility",

              "Launching Governance Platfrom",

              "Brand Ambassador, Social Media Influencers On Board",

              "Special NFT Collections and Drops with Influencers and Brands",
            ]}
            headBefore="Q3 2023"
            headTitle="PARTNERSHIPS"
          ></RoadmapCard>
          <RoadmapCard
            tasks={[
              "In App System Optimisation",

              "In App Releasing Renting System",

              "Creating NFT Avatars",

              "launching More Utility Product on Governance Platforms",

              "More Updates Coming Soon Stay Tuned!",
            ]}
            headBefore="Q4 2023"
            headTitle="LFG"
          ></RoadmapCard>
        </div>
      </div>
    </div>
  );
};

export default WhyTheyUseIt;
