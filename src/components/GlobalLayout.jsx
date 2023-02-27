import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const GlobalLayout = () => {
    const activeLink=" py-9  border-b-4 border-white"
    const normalLink=""

  const navLinks = [
    {
      id: "00",
      Name: "HOME",
      Url: "/",
    },
    {
      id: "01",
      Name: "DESTINATION",
      Url: "/destination",
    },
    {
      id: "02",
      Name: "CREW",
      Url: "/crew",
    },
    {
      id: "03",
      Name: "TECHNOLOGY",
      Url: "/technology",
    },
  ];

  const renderLink = navLinks.map((link, id) => {
    return (
      <div
        className="font-BarlowCondensed text-[16px] text-primaryWhite leading-10 border-white/50 hover:border-b-2 py-7 transition-all duration-[0.1s]"
        key={id}
      >
        <NavLink  to={link.Url} className={({isActive})=>(
          isActive? activeLink :normalLink
        )
        }>
        <span className="mr-3 font-extrabold">{link.id}</span>{link.Name}
        </NavLink>
      </div>
    );
  });

  return (
    <>
      <section className="flex justify-end absolute right-0 top-[2rem] z-20">
        <header className="flex w-[95Vw] items-center justify-between relative ml-0">
          {/* logo */}
          <div className="w-100% ">
            <img src="shared/logo.svg" alt="" />
          </div>
          {/* horrizontal line */}
          <div className=" hidden lg:flex w-[45%] h-[1px] bg-primaryWhite ml-[5rem] absolute right-[48%] z-20"></div>
          {/* nav links */}
          <nav className="hidden lg:flex w-[50%] h-[6rem] right-0  justify-center items-center gap-[3rem]  backdrop-blur-[50px] ">
            {renderLink}
          </nav>
        </header>
      </section>
      <Outlet />
    </>
  );
};

export default GlobalLayout;
