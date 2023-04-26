import React from "react";
import "../css/pages.css";
const Home = () => {
  return (
    <>
      <div className=" home-container absolute w-[100svw] h-screen">
        <section className="flex  justify-center items-center w-full relative mt-[22rem] lg:mt-[29rem]">
          <div className="flex flex-col gap-[2rem] lg:gap-[5rem] lg:flex-row text-white absolute w-[100%] lg:w-[80%] justify-between items-center pb-[5%] top-[-18rem]">
            <section className="flex flex-col justify-center items-center  lg:items-start lg:justify-start w-[95%]  lg:w-[62%] xl:w-[40%] p-2 mt-4 bg-gray-600">
              <h5 className="text-primaryGray text-[1rem] lg:text-[1.5rem]">SO, YOU WANT TO TRAVEL TO</h5>
              <h1 className="lg:text-[9rem] mt-[-1rem]">SPACE</h1>
              <p className="text-[0.75rem] leading-6 text-center lg:text-left lg:text-lg px-4 lg:px-0 text-primaryGray lg:mt-[-2rem]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </section>
            <section className="-mb-24 lg:w-[38%] xl:w-[50%] bg-green-400 flex justify-center items-center">
              <div
                className="w-[150px] h-[150px] lg:w-[265px] lg:h-[265px] xl:w-[285px] xl:h-[285px] bg-primaryWhite rounded-[100%]   flex justify-center items-center 
                cursor-pointer outline-black/80 outline-[1.5rem] lg:outline-[2rem] xl:outline-[3.5rem] hover:outline transition-all duration-[0.5s] ease-out"
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
