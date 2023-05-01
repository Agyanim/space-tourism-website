import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const DestinationCard = ({ Image, Name, Description, Distance, Travel }) => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-[100vw] justify-center items-center gap-[rem] lg:gap-[17rem] ">
        {/* Globe image section */}
        <section className="w-[40%] lg:w-[30%] flex justify-center items-center lg:ml-2">
          <img className="w-[16rem]" src={Image} alt="globe" />
        </section>
        <section className="w-[90%] md:w-[82%] lg:w-[40%] xl:w-[30%] text-primaryWhite text-center lg:text-left">
          <div className="relative top-[4rem] lg:top-[2rem] lg:w-full md:mt-[3rem]">
            <h1 className=" text-[4rem] md:text-[4rem] uppercase ">
              {Name}
            </h1>
            <p
              className=" mb-10 text-base px-  md:text-lg text-primaryGray "
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1500"
              data-aos-easing="ease-out"
            >
              {Description}
            </p>
          </div>
          {/* horizontal line */}
          <hr className="mt-[6rem] mb-[1.5rem]  md:mb-5 md:mt-[8rem] lg:mt-[4rem] w-[95%] m-auto lg:w-[100%]" />
          <div className="flex flex-col md:flex-row justify-center items-center lg:items-start lg:justify-start gap-5 md:gap-20 p-2 text-[0.8rem] md:text-base">
            <section>
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
