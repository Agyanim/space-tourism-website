import React from "react";
import { pageTitles } from "../data/data";

const newPageTitles =pageTitles
const Crew = () => {
  return (
    <>
      <div className="crew-container container-wrapper">
        <div className="absolute top-[10rem]">
        <h5 className="relative  left-36">
            <span className="mr-5">{newPageTitles[1].id}</span>
            {newPageTitles[1].title}
          </h5>

        </div>
      </div>
    </>
  );
};

export default Crew;
