import React from "react";
import Card3 from "./Card";

const SocialMedia = (props) => {
  return (
    <div className="relative flex items-center justify-center md:my-40  px-10 gap-10 xl:gap-24 2xl:gap-36">
      
      <div className="hidden   group  z-50  drop-shadow">
        <div className="w-full flex justify-center items-start group  ">
          <div className="h-60   w-60 -rotate-6 -mr-20 group-hover:rotate-0 transform transition-all duration-500 delay-75 ease-in-out group-hover:-mr-3 ">
           </div>
          <div className="h-72   w-60  bg-alt/60 backdrop-blur-sm p-2 rounded-md   shadow-lg  scale-105 group-hover:scale-100 hover:shadow-none  z-10  transform transition-all duration-500 ">
            <img
              className="h-full    w-full object-cover rounded-md hidden"
              src={"socialImg1"}
              alt="Girl in a jacket"
              width="500"
              height="600"
            ></img>
          </div>
          <div className="h-60   w-60 rotate-6 -ml-20 group-hover:rotate-0 transform transition-all duration-500 delay-75 ease-in-out group-hover:-ml-3 ">
            
          </div>
        </div>
      </div>

      <div className=" z-50 drop-shadow">
        <Card3
          tasks={props.tasks}  
          headBefore={props.headBefore}
          headTitle={props.headTitle}
          
          cards={
            <div className="scale-75 group absolute z-50 left-1/2 -translate-x-1/2 lg:translate-x-1/2 translate-y-3">
              <div className="w-full flex justify-center items-start group  ">
                <div className="h-60   w-60 -rotate-6 -mr-36 sm:-mr-20 group-hover:rotate-0 transform transition-all duration-500 delay-75 ease-in-out group-hover:-mr-3 ">
                   
                </div>
                <div className="h-72   w-60 rounded-sm bg-alt/60 backdrop-blur-sm p-2 rounded-md   shadow-lg  scale-105 group-hover:scale-100 hover:shadow-none  z-10  transform transition-all duration-500 ">
                  <img
                    className="h-full    w-full object-cover rounded-md"
                    src={"socialImg1"}
                    alt="Girl in a jacket"
                    width="500"
                    height="600"
                  ></img>
                </div>
                <div className="h-60   w-60 rotate-6 -ml-36 sm:-ml-20 group-hover:rotate-0 transform transition-all duration-500 delay-75 ease-in-out group-hover:-ml-3 ">
                   
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default SocialMedia;
