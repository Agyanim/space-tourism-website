import React from "react";
import { selectorStore } from "../context/store";
// import { useStore } from "zustand";

const TechnologySectorCard = () => {
  const {selector,setSelector}=selectorStore();

const onSelectorHandler =(event)=> { 
setSelector(event.target.id)
}
const select=selector
  return (
    <div className="flex flex-col gap-8 ">
      <div className="relative">
        <label className={+select===0 ? "lbl text-black bg-white ":"lbl-input lbl border border-whilte text-white"} htmlFor="0">1</label>
        <input className=" hidden" type="radio" name="selector" id="0" onClick={onSelectorHandler}/>
      </div>
      <div className="relative">
        <label className={+select===1 ? "lbl text-black bg-white ":"lbl-input lbl border border-whilte text-white"}  htmlFor="1">2</label>
        <input className="hidden" type="radio" name="selector" id="1" onClick={onSelectorHandler}/>
      </div>
      <div className="relative">
        <label className={+select===2 ? "lbl text-black bg-white ":"lbl-input lbl border border-whilte text-white"} htmlFor="2">3</label>
        <input className="hidden" type="radio" name="selector" id="2" onClick={onSelectorHandler}/>
      </div>
    </div>
  );
};

export default TechnologySectorCard;
