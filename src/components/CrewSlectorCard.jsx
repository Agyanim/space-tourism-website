import React  from "react";
import { selectorStore } from "../context/store";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


const CrewSlectorCard = () => {
  const { setSelector,selector } = selectorStore();

  const selectHandler = (e) => {
    setSelector(e.target.id);
  };


  return (
    <div className="flex justify-center items-center lg:justify-start lg:items-start lg:mt-[0rem]">
      <section className=" absolute flex top-[26rem] md:top-[25rem] gap-2 lg:top-[90%] lg:left-[8.5%]">
        <input
          className={selector===0? "crewSelector bg-white opacity-100":" crewSelector"}
          type="radio"
          name="select"
          id="0"
          onClick={selectHandler}
        />
        <input
          className={selector===1? "crewSelector bg-white opacity-100":"crewSelector"}
          type="radio"
          name="select"
          id="1"
          onClick={selectHandler}
        />
        <input
          className={selector===2? "crewSelector bg-white opacity-100":"crewSelector"}
          type="radio"
          name="select"
          id="2"
          onClick={selectHandler}
        />
        <input
          className={selector===3? "crewSelector bg-white opacity-100":"crewSelector"}
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
