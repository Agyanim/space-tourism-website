import React from "react";
const DestinationCard = ({ Image, Name, Description, Distance, Travel }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-[100vw] justify-center items-center gap-[10rem] lg:gap-[17rem] ">
        {/* Globe image section */}
        <section className="w-[60%] lg:w-[30%] flex justify-center items-center lg:ml-2">
          <img className="w-[16rem]" src={Image} alt="globe" />
        </section>
        <section className="lg:w-[32%] text-primaryWhite">
          <div className="mt-[-20%] lg:mt-5 lg:w-full ">
            <h1 className=" overflow-hidden text-[2rem] md:text-[4rem] uppercase text-center md:text-left">{Name}</h1>
            <p className=" mb-10 text-base p-4  md:text-lg text-primaryGray text-center md:text-left">{Description}</p>
          </div>
          <hr className="lg:w-[75%]" />
          <div className="flex flex-col lg:flex-row justify-center items-center md:items-start md:justify-start gap-10 md:gap-20 p-2">
            <section >
              <h6 className="text-primaryGray">AVE. DISTANCE</h6>
              <p className="font-normal text-center">{Distance}</p>
            </section>
            <section className="">
              <h6 className="text-primaryGray">AVE. EST. TRAVEL TIME</h6>
              <p className="text-center">{Travel}</p>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationCard;
