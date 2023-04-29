import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const CrewCard = ({ Name, Role, Bio, Image }) => {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center  md:mt-[-3.8rem]  md:gap-[5rem] lg:gap-[7rem] lg:w-[100%]">
        {/* content wrapper */}
        <section className="text-primaryWhite w-[90%] md:w-[35.5%] flex  flex-col justify-center items-center lg:justify-start  lg:items-start mt-[6rem] lg:mt-0 text-center lg:text-left">
          <h4 className="text-primaryWhite opacity-50 uppercase mix-blend-normal mb-2 text-base md:text-lg tracking-[0.2rem]">
            {Role}
          </h4>
          <h2 className="uppercase text-[1.4rem] md:text-[2.5rem] mb-5 ">
            {Name}
          </h2>
          <p
            className="opacity-50 text-[1rem] md:w-[88.5%] lg:w-[80%] text-primaryGray"
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
          className="w-[15rem] h-[15rem] lg:w-[28rem] lg:h-[28rem] mt-[-2rem] md:mt-[0.5rem] lg:mt-[3rem] ml-[3rem]"
          style={{
            backgroundColor: "transparent",
            backgroundImage: `url(${Image})`,
            backgroundSize: "contain",
            backgroundPosition: "left",
            backgroundRepeat: " no-repeat",
          }}
        ></section>
      </div>
    </>
  );
};

export default CrewCard;
