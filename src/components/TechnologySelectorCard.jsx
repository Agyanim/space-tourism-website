import React from "react";
import { selectorStore } from "../context/store";

const TechnologySectorCard = () => {
  // importing from Zustand
  const {technologySelector,setTechnologySelector}=selectorStore();

const onSelectorHandler =(event)=> { 
setTechnologySelector(event.target.id)
}
// active and normal styling of lable
const active="technology-lbl text-black bg-primaryWhite"
const normal=" technology-lbl border border-primaryWhite primaryWhite"
  return (
    <div className="flex flex-col gap-8 text-primaryWhite mr-[6rem] mt-5">
      <div className="relative">
        <label className={+technologySelector===0 ? active:normal} htmlFor="0">1</label>
        <input className=" hidden" type="radio" name="selector" id="0" onClick={onSelectorHandler}/>
      </div>
      <div className="relative">
        <label className={+technologySelector===1 ? active:normal}  htmlFor="1">2</label>
        <input className="hidden" type="radio" name="selector" id="1" onClick={onSelectorHandler}/>
      </div>
      <div className="relative">
        <label className={+technologySelector===2 ? active:normal} htmlFor="2">3</label>
        <input className="hidden" type="radio" name="selector" id="2" onClick={onSelectorHandler}/>
      </div>
    </div>
  );
};

export default TechnologySectorCard;