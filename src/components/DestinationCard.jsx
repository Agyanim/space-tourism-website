import React from "react";
const DestinationCard = ({ Image, Name, Description, Distance, Travel }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-[100vw] justify-center items-center gap-[rem] lg:gap-[17rem] ">
        {/* Globe image section */}
        <section className="w-[40%] lg:w-[30%] flex justify-center items-center lg:ml-2">
          <img className="w-[16rem]" src={Image} alt="globe" />
        </section>
        <section className="w-[90%] lg:w-[32%] text-primaryWhite">
          <div className="relative top-[4rem] md:top-[2rem] lg:w-full ">
            <h1 className=" text-[4rem] md:text-[4rem] uppercase text-center md:text-left">{Name}</h1>
            <p className=" mb-10 text-base px-  md:text-lg text-primaryGray text-center md:text-left">{Description}</p>
          </div>
          {/* horizontal line */}
          <hr className="mt-[6rem] mb-[1.5rem]  md:mb-5 md:mt-[4rem] w-[95%] m-auto lg:w-[100%]" />
          <div className="flex flex-col lg:flex-row justify-center items-center md:items-start md:justify-start gap-5 md:gap-20 p-2 text-[0.8rem] md:text-base">
            <section >
              <h6 className="text-primaryGray">AVE. DISTANCE</h6>
              <p className="font-normal text-center">{Distance}</p>
            </section>
            <section className="">
              <h6 className="text-primaryGray ">AVE. EST. TRAVEL TIME</h6>
              <p className="text-center">{Travel}</p>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationCard;
