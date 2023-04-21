import React from "react";
import { pageTitles } from "../data/data";


const newPageTitles=pageTitles
const Technology = () => {


  return (
    <>
      <div className="crew-container container-wrapper">
        <div className="absolute top-[10rem]">
        <h5 className="relative  left-36">
            <span className="mr-5">{newPageTitles[2].id}</span>
            {newPageTitles[2].title}
          </h5>

        </div>
      </div>
    </>
  );
};

export default Technology;
