import React from "react";
import { menuData } from "../data/data";
import DestinationCard from "../components/DestinationCard";
import { data } from "../data/data";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Destination = () => {
  const { destinations } = data;
  const [destinationId, setDestinationId] = useState(0);

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

  const selectId = (event) => {
    setDestinationId(event.target.id);
  };
  const list = menuData.map((menu, i) => {
    return (
      <button
        className="text-white active:border-b-2 border-white"
        key={i}
        id={i}
        onClick={selectId}
      >
        {menu}
      </button>
    );
  });

  return (
    <>
      <div className="destinaion-container relative w-screen h-[100vh]">
        <div className="container absolute top-[10rem]">
          <h5 className="relative text-primaryWhite uppercase left-[20rem]">
            <span className="mr-5">01</span>
            Pick your destination
          </h5>
          <div className="destination-wrapper">
            <div className="relative left-[65%] flex gap-5">{list}</div>
            <section className="description-wrapper absolute">
              {cardList[destinationId]}
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
