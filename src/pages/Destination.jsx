import React from "react";
import { menuData, pageTitles } from "../data/data";
import DestinationCard from "../components/DestinationCard";
import { data } from "../data/data";
import DestinationSelectorCard from "../components/DestinationSelectorCard";
import { selectorStore } from "../context/store";
const Destination = () => {
  const { destinations } = data;
  const newPageTitles = pageTitles;
  const{destinationSelector}=selectorStore()

  const cardList = [
    <DestinationCard
      Image={destinations[0].images.webp}
      Name={destinations[0].name}
      Description={destinations[0].description}
      Distance={destinations[0].distance}
      Travel={destinations[0].travel}
    />,
    <DestinationCard
      Image={destinations[1].images.webp}
      Name={destinations[1].name}
      Description={destinations[1].description}
      Distance={destinations[1].distance}
      Travel={destinations[1].travel}
    />,
    <DestinationCard
      Image={destinations[2].images.webp}
      Name={destinations[2].name}
      Description={destinations[2].description}
      Distance={destinations[2].distance}
      Travel={destinations[2].travel}
    />,
    <DestinationCard
      Image={destinations[3].images.webp}
      Name={destinations[3].name}
      Description={destinations[3].description}
      Distance={destinations[3].distance}
      Travel={destinations[3].travel}
    />,
  ];

  // const list = menuData.map((menu, i) => {
  //   return (
  //     <button
  //       className="text-[#D0D6F9] active:border-b-2 border-white"
  //       key={i}
  //       id={i}
  //       onClick={selectId}
  //     >
  //       {menu}
  //     </button>
  //   );
  // });

  return (
    <>
      <div className="destinaion-container container-wrapper">
        <div className=" relative top-[10rem]">
          <h5 className="relative  left-36 w-1/3">
            <span className="mr-5 text-primaryWhite opacity-50">{newPageTitles[0].id}</span>
            {newPageTitles[0].title}
          </h5>
        </div>
        <div className="relative top-[10rem]">
          <div ><DestinationSelectorCard/></div>
          <section >{cardList[destinationSelector]}</section>
        </div>
      </div>
    </>
  );
};

export default Destination;
