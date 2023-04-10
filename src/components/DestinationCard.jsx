import React from "react";

 const DestinationCard = ({Image,Name,Description,Distance,Travel}) => {


  return (
    <div>
      <div className="flex w-[100vw] justify-between items-center">
        <section className="w-[40%] flex justify-center">
          <img
            className="w-[50%]"
            src={Image}
            alt="globe"
          />
        </section>
        <section className="w-[40%] text-primaryWhite">

          <div>
            <h1>{Name}</h1>
            <p className="w-[75%] mb-10">{Description}</p>
          </div>
          <hr className="w-[75%]" />
          <section className="flex justify-start gap-20">

          <div>
            <h6>AVE. DISTANCE</h6>
            <p className="font-normal">{Distance}</p>
          </div>
          <div>
            <h6>AVE. EST. TRAVEL TIME</h6>
            <p>{Travel}</p>
          </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default DestinationCard