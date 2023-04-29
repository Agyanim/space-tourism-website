import React from "react";
import { selectorStore } from "../context/store";

const TechnologySectorCard = () => {
  // importing from Zustand
  const {selector,setSelector}=selectorStore();

const onSelectorHandler =(event)=> { 
setSelector(event.target.id)
}
// active and normal styling of lable
const active="technology-lbl text-black bg-primaryWhite"
const normal=" technology-lbl border border-primaryWhite primaryWhite"
  return (
    <div className="flex flex-row lg:flex-col lg:gap-8 gap-4 text-primaryWhite lg:mr-[6rem] mt-2">
      <div className="relative">
        <label className={+selector===0 ? active:normal} htmlFor="0">1</label>
        <input className=" hidden" type="radio" name="selector" id="0" onClick={onSelectorHandler}/>
      </div>
      <div className="relative">
        <label className={+selector===1 ? active:normal}  htmlFor="1">2</label>
        <input className="hidden" type="radio" name="selector" id="1" onClick={onSelectorHandler}/>
      </div>
      <div className="relative">
        <label className={+selector===2 ? active:normal} htmlFor="2">3</label>
        <input className="hidden" type="radio" name="selector" id="2" onClick={onSelectorHandler}/>
      </div>
    </div>
  );
};

export default TechnologySectorCard;
