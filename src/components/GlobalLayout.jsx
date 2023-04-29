import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Menu from "./Menu";

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

const GlobalLayout = () => {
  const activeLink = " border-b-4 border-white flex py-7";
  const normalLink = "flex hover:border-b-2 py-7 ";
  const [toggleMenu, settoggleMenu] = useState(true);

  const togleMenuHandler=()=>{
    settoggleMenu(!toggleMenu)
  }
  const renderLink = navLinks.map((link, id) => {
    return (
      // Main navigation links
      <div
        className="font-BarlowCondensed text-[16px] text-primaryWhite leading-10 border-white/50  transition-all duration-[0.1s]"
        key={id}
      >
        <NavLink
          to={link.Url}
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <span className="mr-3 font-extrabold opacity-100 md:hidden lg:flex">
            {link.id}
          </span>
          <span className="opacity-50">{link.Name}</span>
        </NavLink>
      </div>
    );
  });

  return (
    <div className="relative h-screen bg-slate-500">
      <section className="flex justify-end absolute right-0 top-[2rem] md:top-0 lg:top-[2rem] z-20">
        <header className="flex w-[95Vw] items-center justify-between relative ml-0">
          {/* logo */}
          <div className="w-100% ">
            <img
              className="w-[40px] md:w-[48px]"
              src="shared/logo.svg"
              alt="logo"
            />
          </div>
          {/* hamburger */}
          <div className=" flex absolute  md:hidden left-[80%]">
            {/* open menu icon */}
            <div className={toggleMenu? " flex":" hidden"}>
              <img className=" cursor-pointer" src="shared/icon-hamburger.svg" alt="open icon"  onClick={togleMenuHandler}/>
            </div>
            {/* close menu icon */}
            <div className={toggleMenu? " hidden  ":"  flex z-40"}>
              <img
                className=" cursor-pointer"
                src="shared/icon-close.svg"
                alt="close icon"
                onClick={togleMenuHandler}
              />
            </div>
          </div>
          {/* horrizontal line */}
          <div className=" hidden lg:flex w-[38%] h-[1px] bg-primaryWhite ml-[5rem] absolute right-[55%] z-20"></div>
          {/* rendering main nav links */}
          <nav className="hidden md:flex w-[62%] h-[6rem] right-0  justify-center items-center  backdrop-blur-[50px] gap-10">
            {renderLink}
          </nav>
        </header>
      </section>

      <div className={toggleMenu?"w-full absolute z-20 ml-[100%] transition-all duration-300 ease-in ":"w-full absolute z-10 flex ml-[30%] transition-all duration-500 ease-out"}

      onMouseLeave={togleMenuHandler}
      >
        {/* mobile view menu */}
        <Menu />
      </div>
      <Outlet />
    </div>
  );
};

export default GlobalLayout;
