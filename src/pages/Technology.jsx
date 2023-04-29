import React from "react";
import { pageTitles, data } from "../data/data";
import TechnologyCard from "../components/TechnologyCard";
import { selectorStore } from "../context/store";

const newPageTitles = pageTitles;
const { technology } = data;
const technologyList = [
  <TechnologyCard
    Name={technology[0].name}
    Image={[technology[0].images.portrait, technology[0].images.landscape]}
    Description={technology[0].description}
  />,
  <TechnologyCard
    Name={technology[1].name}
    Image={[technology[1].images.portrait, technology[1].images.landscape]}
    Description={technology[1].description}
  />,
  <TechnologyCard
    Name={technology[2].name}
    Image={[technology[2].images.portrait, technology[2].images.landscape]}
    Description={technology[2].description}
  />,
];


const Technology = () => {
  const {technologySelector}=selectorStore();

  return (
    <>
      <div className="technology-container container-wrapper">
        <section className="page-title">
          <h5 className="text-[0.7rem] md:text-lg">
            <span className="mr-5">{newPageTitles[2].id}</span>
            {newPageTitles[2].title}
          </h5>
        </section>
        <section>
         {technologyList[technologySelector]}
        </section>
      </div>
    </>
  );
};

export default Technology;
