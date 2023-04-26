import React from "react";
import TechnologySectorCard from "./TechnologySelectorCard";

const TechnologyCard = ({ Name, Image, Description }) => {
  return (
    <div className="flex justify-end items-center relative top-[12rem] w-screen">
      <div className="flex justify-end items-center ">
        <section ><TechnologySectorCard/></section>
        <section className="mr-[16rem]  w-[32.5%]">
          <div className="text-primaryWhite lg:text-primaryGray">
            <p className="text-sm">THE TECHNOLOGY...</p>
            <h2 className="text-[2.5rem] uppercase mb-4 text-primaryWhite font-BarlowCondensed">{Name}</h2>
            <p className="">{Description}</p>
          </div>
        </section>
        <section className="bg-primaryWhite">
          <picture className="">
            <source media="(min-width:1024px )" srcSet={Image[0]} />
            <img className="w-[22rem] h-[22rem]"  src={Image[1]} alt="Hero image" />
          </picture>
        </section>
      </div>
    </div>
  );
};

export default TechnologyCard;
