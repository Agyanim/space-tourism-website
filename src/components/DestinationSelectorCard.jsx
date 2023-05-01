import React from 'react'
import { selectorStore } from '../context/store';
import {menuData} from "../data/data"

const DestinationSelectorCard = () => {
    const{setSelector,selector }=selectorStore()
    const selectIdHandler = (event) => {
        setSelector(event.target.id);
      };
const active="destination-lbl border-b-4 text-primaryWhite tracking-[0.2rem]"
const normal="destination-lbl tracking-[0.2rem]"

  return (
    <div className='md:relative translate-y-[12.5rem] md:translate-y-[20rem] lg:translate-y-0 md:top-0 flex justify-center lg:justify-start gap-7 w-[70%] m-auto md:gap-5 lg:w-1/4 lg:ml-[59.5%]'>
        <div>
            <label className={+selector===0? active:normal} htmlFor="0">{menuData[0]}</label>
            <input className="hidden tracking-wid" type="radio" name='selector' id='0' onClick={selectIdHandler} />
        </div>
        <div>
            <label className={+selector===1? active:normal} htmlFor="1">{menuData[1]}</label>
            <input className="hidden" type="radio" name='selector' id='1' onClick={selectIdHandler} />
        </div>
        <div>
            <label className={+selector===2? active:normal} htmlFor="2">{menuData[2]}</label>
            <input className="hidden" type="radio" name='selector' id='2' onClick={selectIdHandler} />
        </div>
        <div>
            <label className={+selector===3? active:normal} htmlFor="3">{menuData[3]}</label>
            <input className="hidden" type="radio" name='selector' id='3' onClick={selectIdHandler} />
        </div>
    </div>
  )
}

export default DestinationSelectorCard