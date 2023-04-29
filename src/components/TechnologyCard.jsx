import React from "react";
import TechnologySectorCard from "./TechnologySelectorCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const TechnologyCard = ({ Name, Image, Description }) => {
  return (
    <div className="flex justify-end items-center relative top-[10rem] lg:top-[12rem] w-screen">
      <div className="flex flex-col-reverse md:flex-row justify-end items-center w-full">
        <section className="flex lg:flex-row flex-col mt-[2rem] md:mt-0 lg:mr-[16rem] w-[90%] lg:w-[44.9%] justify-center items-center "> 
          <section className="">
            <TechnologySectorCard />
          </section>
          <section className="w-[100%] mt-10 lg:mt-0">
            <div className="text-primaryWhite lg:text-primaryGray flex flex-col justify-center items-center lg:justify-start lg:items-start text-center lg:text-left">
              <p className="text-sm w-[12rem]">THE TECHNOLOGY...</p>
              <h2 className="text-[2rem] lg:text-[2.5rem] uppercase mb-4 text-primaryWhite font-BarlowCondensed">
                {Name}
              </h2>
              <p className="text-[0.95rem]">{Description}</p>
            </div>
          </section>
        </section>
        <section className="bg-primaryWhite lg:w-[25%] w-[100%]">
          <picture className="">
            <source media="(min-width:1024px )" srcSet={Image[0]} />
            <img
              className="w-[100%] h-[10rem] lg:w-[22rem] lg:h-[22rem]"
              src={Image[1]}
              alt="Hero image"
            />
          </picture>
        </section>
      </div>
    </div>
  );
};

export default TechnologyCard;
