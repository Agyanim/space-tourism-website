import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const CrewCard = ({ Name, Role, Bio, Image }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-center items-center  md:mt-[3rem]  md:gap-[5rem] lg:gap-0 xl:gap-[7rem] lg:w-[100%] lg:mt-[-0.5rem]">
        {/* content wrapper */}
        <section className="text-primaryWhite w-[90%]  lg:w-[39rem] xl:w-[35.5] flex  flex-col justify-center items-center lg:justify-start  lg:items-start mt-[6rem] md:mt-[-2rem] lg:top-[10rem] text-center lg:text-left lg:absolute lg:left-[7rem] xl:left-[11rem]  ">
          <h4 className="text-primaryWhite opacity-50 uppercase mix-blend-normal mb-2 text-base md:text-lg lg:text-xl tracking-[0.2rem] ">
            {Role}
          </h4>
          <h2 className="uppercase text-[1.4rem] md:text-[2.5rem] mb-5 xl:text-[3rem] ">
            {Name}
          </h2>
          <p
            className="opacity-50 text-sm px-5 md:px-0 md:w-[59.5%]  lg:w-[70%] text-primaryGray lg:text-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500"
            data-aos-easing="ease-out"
          >
            {Bio}
          </p>
        </section>
        {/* horizontal line */}
        <div className="w-full flex items-center justify-center md:hidden">
          <hr className="bg-white opacity-20 w-[80%] " />
        </div>
        {/* hero image */}
        <section
          className="w-[15rem] h-[15rem] md:w-[20rem] md:h-[12.2rem] lg:w-[25rem] lg:h-[31.5rem] xl:w-[38rem] xl:h-[29rem] mt-[-2rem] md:mt-[0.5rem] ml-[0rem]  md:absolute lg:top-[-2rem] lg:left-[35rem] md:top-[17.5rem] md:left-[12rem] xl:top-[0.5rem] xl:left-[44rem] card-image-cover"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url(${Image})`,
            backgroundRepeat: " no-repeat",
          }}
        ></section>
      </div>
    </>
  );
};

export default CrewCard;
