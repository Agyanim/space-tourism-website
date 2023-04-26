import React, { useState } from "react";

const CrewCard = ({ Name, Role, Bio, Image }) => {
  return (
    <>
      <div className="flex justify-center items-center  lg:mt-[-3.8rem]  gap-[3rem] lg:w-[95%]">
        {/* content wrapper */}
        <section className="text-primaryWhite lg:w-[35.5%]">
          <h4 className="text-primaryWhite opacity-50 uppercase mix-blend-normal text-lg tracking-[0.2rem]">
            {Role}
          </h4>
          <h2 className="uppercase text-[2.5rem] mb-5 ">{Name}</h2>
          <p className="opacity-50 lg:w-[88.5%]">{Bio}</p>
        </section>
        {/* hero image */}
        <section
          className="lg:w-[45%] lg:h-[30rem] mt-[0.5rem] overflow-hidden"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url(${Image})`,
            backgroundSize: "contain",
            backgroundPosition:"right",
            backgroundRepeat: " no-repeat",
          }}
        >
        </section>
      </div>
    </>
  );
};

export default CrewCard;
