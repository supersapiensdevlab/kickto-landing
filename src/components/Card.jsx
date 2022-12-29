import React from "react";

const Card3 = (props) => {
  return (
    <div className="bg-primary/5 text-secondary rounded-2xl md:w-96 w-full h-max p-10 block mx-auto  shadow-mintflick z-20 ">
      <h2 className="text-xl font-extrabold">{props.headBefore}</h2>
      <h1 className="text-3xl uppercase text-primary font-bold">
        {props.headTitle}
      </h1>
      <ul>
        {props.tasks?.map((track) => (
          <li className="list-disc font-semibold">{track}</li>
        ))}
      </ul>
      {/* <p className='text-md font-semibold mt-4'>{props.headAfter}</p>

      <div className=' lg:hidden h-72 '>{props.cards}</div>
      <p className=' mt-4'>{props.desc}</p> */}
    </div>
  );
};

export default Card3;
