import React, { useState } from "react";
import { pageTitles, data } from "../data/data";
import CrewCard from "../components/CrewCard";

const newPageTitles = pageTitles;

const { crew } = data;
console.log(crew);
const crewList = [
  <CrewCard
    Role={crew[0].role}
    Name={crew[0].name}
    Bio={crew[0].bio}
    Image={crew[0].images.webp}
  />,
  <CrewCard
    Role={crew[1].role}
    Name={crew[1].name}
    Bio={crew[1].bio}
    Image={crew[1].images.webp}
  />,
  <CrewCard
    Role={crew[2].role}
    Name={crew[2].name}
    Bio={crew[2].bio}
    Image={crew[2].images.webp}
  />,
  <CrewCard
    Role={crew[3].role}
    Name={crew[3].name}
    Bio={crew[3].bio}
    Image={crew[3].images.webp}
  />,
];
const Crew = () => {
  const [selector, Setselector] = useState(0);

  const selectHandler = (e) => {
    Setselector(e.target.id);
  };

  return (
    <>
      <div className="crew-container container-wrapper relative">
        {/* page title */}
        <section className="absolute top-[10rem]">
          <h5 className="relative  left-36">
            <span className="mr-5 opacity-50">{newPageTitles[1].id}</span>
            {newPageTitles[1].title}
          </h5>
        </section>
        {/* page content */}
        <section className="absolute mt-52">{crewList[selector]}</section>
        <section className=" absolute flex gap-2 top-[90%] left-[8.5%]">
          <input type="radio" name="select" id={0} onClick={selectHandler}/>
          <input type="radio" name="select" id={2} onClick={selectHandler} />
          <input type="radio" name="select" id={3} onClick={selectHandler} />
          <input type="radio" name="select" id={1} onClick={selectHandler} />
        </section>
      </div>
    </>
  );
};

export default Crew;
