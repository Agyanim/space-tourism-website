import React from "react";
import "../css/pages.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Home = () => {
  return (
    <>
      <div className=" home-container absolute w-full h-screen">
        <section className="flex  justify-center items-center w-full relative mt-[23rem] md:mt-[27rem] lg:mt-[29rem]">
          <div className="flex flex-col  lg:gap-[5rem] lg:flex-row text-white absolute w-[100%] lg:w-[80%] justify-between items-center pb-[5%] top-[-18rem]">
            <section className="flex flex-col justify-center items-center mb-[4rem] md:mb-[1rem] lg:items-start lg:justify-start w-[95%]  lg:w-[62%] xl:w-[40%] p-2 mt-4 ">
              <h5
                className="text-primaryGray text-[1rem] lg:text-[1.5rem]"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
              >
                SO, YOU WANT TO TRAVEL TO
              </h5>
              <h1 className="md:text-[10rem] lg:text-[9rem] my-[1rem] ">
                SPACE
              </h1>
              <p
                className="text-[0.75rem] leading-6 text-center md:text-[1.2rem] md:px-[6rem] md:leading-10 lg:text-left lg:text-lg px-4 lg:px-0 text-primaryGray lg:mt-[-2rem]"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
                data-aos-easing="ease-in-out"
              >
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience! data-aos="fade-up"
              </p>
            </section>
            <section className=" lg:w-[38%] xl:w-[50%]  flex justify-center items-center">
              <div
                className="w-[150px] h-[150px] md:w-[280px] md:h-[280px] lg:w-[265px] lg:h-[265px] xl:w-[285px] xl:h-[285px] bg-primaryWhite rounded-[100%]   flex justify-center items-center 
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
