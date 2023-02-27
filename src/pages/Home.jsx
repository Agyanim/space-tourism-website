import React from "react";
import "../css/pages.css";
const Home = () => {
  return (
    <>
      <div className=" home-container relative w-screen h-[667px]">
        <section className="flex  justify-center items-center w-full absolute top-[50%]">
          <div className="flex flex-col gap-[2rem] lg:gap-0 lg:flex-row text-white absolute w-[95%] lg:w-[80%] justify-between items-center pb-[5%] top-[-15rem]">
            <section className="flex flex-col justify-center items-center  lg:mt-0 lg:items-start lg:justify-start w-[100%] lg:w-[43%] p-2">
              <h5 className="text-primaryGray ">SO, YOU WANT TO TRAVEL TO</h5>
              <h1>SPACE</h1>
              <p className="text-[15px] font-Barlow text-center lg:text-left lg:text-lg px-4 lg:px-0 text-primaryGray">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </section>
            <section
              className="w-[150px] h-[150px] lg:w-[274px] lg:h-[274px] bg-primaryWhite rounded-[100%] lg:absolute right-0 mb-[2re] lg:mb-0 lg:bottom-[3rem] flex justify-center items-center 
                cursor-pointer outline-black/80 outline-[1.5rem] lg:outline-[3.5rem] hover:outline transition-all duration-[0.5s] ease-out "
            >
              <h4 className="text-primaryDark absolute text-center">EXPLORE</h4>
            </section>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
