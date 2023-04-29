import React, { useEffect, useRef } from "react";
import { selectorStore } from "../context/store";

const CrewSlectorCard = () => {
  const { setCrewSelector } = selectorStore();

  const selectHandler = (e) => {
    setCrewSelector(e.target.id);
  };

  const firstSelectorRef = useRef(null);

  useEffect(() => {
    firstSelectorRef.current.checked = "true";

    return () => {
      firstSelectorRef.current.checked = "false";
    };
  }, []);

  return (
    <div className="flex justify-center items-center md:justify-start md:items-start">
      <section className=" absolute flex top-[26rem]  gap-2 md:top-[90%] md:left-[8.5%]">
        <input
          className="crewSelector"
          ref={firstSelectorRef}
          type="radio"
          name="select"
          id={0}
          onClick={selectHandler}
        />
        <input
          className="crewSelector"
          type="radio"
          name="select"
          id={1}
          onClick={selectHandler}
        />
        <input
          className="crewSelector"
          type="radio"
          name="select"
          id={2}
          onClick={selectHandler}
        />
        <input
          className="crewSelector"
          type="radio"
          name="select"
          id={3}
          onClick={selectHandler}
        />
      </section>
    </div>
  );
};

export default CrewSlectorCard;
