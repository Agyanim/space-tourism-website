import React, { useEffect, useRef } from "react";
import { selectorStore } from "../context/store";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const CrewSlectorCard = () => {
  const { setSelector } = selectorStore();

  const selectHandler = (e) => {
    setSelector(e.target.id);
  };

  const firstSelectorRef = useRef();

  useEffect(() => {
    firstSelectorRef.current.checked = "true";

  }, []);

  return (
    <div className="flex justify-center items-center md:justify-start md:items-start">
      <section className=" absolute flex top-[26rem]  gap-2 md:top-[90%] md:left-[8.5%]">
        <input
          className="crewSelector"
          ref={firstSelectorRef}
          type="radio"
          name="select"
          id="0"
          onClick={selectHandler}
        />
        <input
          className="crewSelector"
          type="radio"
          name="select"
          id="1"
          onClick={selectHandler}
        />
        <input
          className="crewSelector"
          type="radio"
          name="select"
          id="2"
          onClick={selectHandler}
        />
        <input
          className="crewSelector"
          type="radio"
          name="select"
          id="3"
          onClick={selectHandler}
        />
      </section>
    </div>
  );
};

export default CrewSlectorCard;
