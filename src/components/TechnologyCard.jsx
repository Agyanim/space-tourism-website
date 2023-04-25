import React from "react";
import TechnologySectorCard from "./TechnologySelectorCard";

const TechnologyCard = ({ Name, Image, Description }) => {
  return (
    <div className="flex justify-end items-center relative top-[14rem] w-screen">
      <div className="flex justify-end items-center ">
        <section className="text-white mr-[5rem]"><TechnologySectorCard/></section>
        <section className="mr-[14rem]  w-[25%]">
          <div className="text-white lg:text-blue-200">
            <p className="">THE TECHNOLOGY</p>
            <h2 className="text-[2.5rem] uppercase mb-4">{Name}</h2>
            <p className="p-[px]">{Description}</p>
          </div>
        </section>

        <section className="bg-white">
          <picture className="">
            <source media="(min-width:1024px )" srcSet={Image[0]} />
            <img className="w-[20rem] h-[20rem]"  src={Image[1]} alt="Hero image" />
          </picture>
        </section>
      </div>
    </div>
  );
};

export default TechnologyCard;
