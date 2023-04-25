import React from "react";
import { selectorStore } from "../context/store";
// import { useStore } from "zustand";

const TechnologySectorCard = () => {
  const {selector,setSelector}=selectorStore();

const onSelectorHandler =(event)=> { 
setSelector(event.target.id)
}


  return (
    <div className="flex flex-col gap-24 ">
      <div className="relative">
        <label className={(selector===0 )? "lbl-input lbl text-black":"lbl-input lbl z-10 text-white"} htmlFor="selector-1">1</label>
        <input className="technologySelector lbl-input z-0" type="radio" name="selector" id="0" onClick={onSelectorHandler}/>
      </div>
      <div className="relative">
        <label className="lbl-input  lbl" htmlFor="selector-2">2</label>
        <input className="technologySelector lbl-input" type="radio" name="selector" id="1" onClick={onSelectorHandler}/>
      </div>
      <div className="relative">
        <label className="lbl-input lbl"htmlFor="selector-3">3</label>
        <input className="technologySelector lbl-input" type="radio" name="selector" id="2" onClick={onSelectorHandler}/>
      </div>
    </div>
  );
};

export default TechnologySectorCard;
