import React from 'react'
import { selectorStore } from '../context/store';

const DestinationSelectorCard = () => {
    const{setDestinationSelector,destinationSelector }=selectorStore()
    const selectIdHandler = (event) => {
        setDestinationSelector(event.target.id);
      };
const active="destination-lbl border-b-4 "
const normal="destination-lbl"

  return (
    <div className='flex gap-10 w-1/4 ml-[59.5%]'>
        <div>
            <label className={+destinationSelector===0? active:normal} htmlFor="0">MOON</label>
            <input className="hidden" type="radio" name='selector' id='0' onClick={selectIdHandler} />
        </div>
        <div>
            <label className={+destinationSelector===1? active:normal} htmlFor="1">MARS</label>
            <input className="hidden" type="radio" name='selector' id='1' onClick={selectIdHandler} />
        </div>
        <div>
            <label className={+destinationSelector===2? active:normal} htmlFor="2">EUROPA</label>
            <input className="hidden" type="radio" name='selector' id='2' onClick={selectIdHandler} />
        </div>
        <div>
            <label className={+destinationSelector===3? active:normal} htmlFor="3">TITAN</label>
            <input className="hidden" type="radio" name='selector' id='3' onClick={selectIdHandler} />
        </div>
    </div>
  )
}

export default DestinationSelectorCard