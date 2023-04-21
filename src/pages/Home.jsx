import React from "react";
import "../css/pages.css";
const Home = () => {
  return (
    <>
      <div className=" home-container absolute w-[100svw] h-screen">
        <section className="flex  justify-center items-center w-full relative mt-[22rem] lg:mt-[26rem]">
          <div className="flex flex-col gap-[2rem] lg:gap-0 lg:flex-row text-white absolute w-[95%] lg:w-[80%] justify-between items-center pb-[5%] top-[-18rem]">
            <section className="flex flex-col justify-center items-center  lg:items-start lg:justify-start w-[100%] lg:w-1/2 p-2 mt-4">
              <h5 className="text-primaryGray ">SO, YOU WANT TO TRAVEL TO</h5>
              <h1>SPACE</h1>
              <p className="text-base font-Barlow text-center lg:text-left lg:text-lg px-4 lg:px-0 text-primaryGray w-[28rem]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </section>
            <section className="-mb-24">
              <div
                className="w-[150px] h-[150px] lg:w-[274px] lg:h-[274px] bg-primaryWhite rounded-[100%]   flex justify-center items-center 
                cursor-pointer outline-black/80 outline-[1.5rem] lg:outline-[3.5rem] hover:outline transition-all duration-[0.5s] ease-out"
              >
                <h3 className="text-primaryDark absolute text-center">
                  EXPLORE
                </h3>
              </div>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
