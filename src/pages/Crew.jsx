import React, { useEffect, useRef, useState } from "react";
import { pageTitles, data } from "../data/data";
import CrewCard from "../components/CrewCard";
import CrewSlectorCard from "../components/CrewSlectorCard";
import { selectorStore } from "../context/store";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const newPageTitles = pageTitles;

const { crew } = data;
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
  const{selector }=selectorStore()



  return (
    <>
      <div className="crew-container container-wrapper relative">
        {/* page title */}
        <section className="page-title">
          <h5 className="text-[1.2rem] md:text-lg"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          >
            <span className="mr-5 opacity-50">{newPageTitles[1].id}</span>
            {newPageTitles[1].title}
          </h5>
        </section>
        {/* page content */}
        <section className="absolute top-[10rem] md:mt-5">{crewList[+selector]}</section>
        {/* selector */}
        <section>
          <CrewSlectorCard/>
        </section>
      </div>
    </>
  );
};

export default Crew;
