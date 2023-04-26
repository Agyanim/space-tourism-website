import React from "react";
 const DestinationCard = ({Image,Name,Description,Distance,Travel}) => {

  return (
    <div>
      <div className="flex w-[100vw]  justify-center items-center gap-[17rem] mt-10">
        <section className="w-[30%] flex justify-center items-center ml-2">
          <img
            className="w-[16rem]"
            src={Image}
            alt="globe"
          />
        </section>
        <section className="w-[32%] text-primaryWhite">

          <div>
            <h1 className=" overflow-hidden text-[4rem] uppercase">{Name}</h1>
            <p className="w-[75%] lg:w-full mb-10  text-lg text-primaryGray">{Description}</p>
          </div>
          <hr className="w-[75%]" />
          <section className="flex justify-start gap-20 p-2">

          <div>
            <h6 className="text-primaryGray">AVE. DISTANCE</h6>
            <p className="font-normal ">{Distance}</p>
          </div>
          <div className="">
            <h6 className="text-primaryGray">AVE. EST. TRAVEL TIME</h6>
            <p >{Travel}</p>
          </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default DestinationCard