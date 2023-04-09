import React from "react";
import "../css/pages.css";
const Home = () => {
  return (
    <>
      <div className=" home-container relative w-screen h-[100vh]">
        <section className="flex justify-center items-center w-full absolute top-[60%]">
        <div className=" flex text-white absolute w-[80%] justify-between items-center">
            <div className="w-[40%] p-2">
              <h5>SO, YOU WANT TO TRAVEL TO</h5>
              <h1>SPACE</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="w-[274px] h-[274px] bg-primaryWhite rounded-[50%] absolute right-0 bottom-0 flex justify-center items-center cursor-pointer border-8 border-white/50 ">
              <h4 className="text-primaryDark absolute text-center">EXPLORE</h4>
            </div>
        </div>
        </section>
      </div>
    </>
  );
};

export default Home;
