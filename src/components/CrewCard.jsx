import React, { useState } from "react";

const CrewCard = ({ Name, Role, Bio, Image }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center  md:mt-[-3.8rem]  md:gap-[10rem] lg:w-[95%]">
        {/* content wrapper */}
        <section className="text-primaryWhite w-[90%] md:w-[35.5%] flex  flex-col justify-center items-center md:items-start mt-[6rem] md:mt-0">
          <h4 className="text-primaryWhite opacity-50 uppercase mix-blend-normal mb-2 text-base md:text-lg tracking-[0.2rem]">
            {Role}
          </h4>
          <h2 className="uppercase text-[1.4rem] md:text-[2.5rem] mb-5 ">{Name}</h2>
          <p className="opacity-50 text-[1rem] md:w-[88.5%]">{Bio}</p>
        </section>
        {/* horizontal line */}
        <div className="w-full flex items-center justify-center md:hidden">
          <hr className="bg-white opacity-20 w-[80%] " />
        </div>
        {/* hero image */}
        <section
          className="w-[15rem] h-[15rem] lg:w-[30rem] lg:h-[30rem] mt-[-2rem] md:mt-[0.5rem] ml-[3rem]"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url(${Image})`,
            backgroundSize: "contain",
            backgroundPosition: "left",
            backgroundRepeat: " no-repeat",

          }}
        >

          {/* <img src={Image} alt="" srcset="Crew image" /> */}
        </section>
      </div>
    </>
  );
};

export default CrewCard;
