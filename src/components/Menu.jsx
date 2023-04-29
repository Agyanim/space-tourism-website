import React from 'react'
import { NavLink } from 'react-router-dom';
const navLinks = [
    {
      id:"00",
      Name: "HOME",
      Url: "/",
    },
    {
      id:"01",
      Name: "DESTINATION",
      Url: "/destination",
    },
    {
      id:"02",
      Name: "CREW",
      Url: "/crew",
    },
    {
      id:"03",
      Name: "TECHNOLOGY",
      Url: "/technology",
    },
  ];

const Menu = () => {
    const renderLink = navLinks.map((link, id) => {
        return (
          <div
            className="  md:hidden font-BarlowCondensed text-base tracking-[0.18rem] text-primaryWhite"
            key={id}
          >
            <NavLink  to={link.Url} className={({isActive})=>(
              isActive? "text-blue-400" :"text-primaryWhite"
            )
            }>
              <span className='mr-5 font-bold'>{link.id}</span>
            {link.Name}
            </NavLink>
          </div>
        );
      });
    
  return (
    <div className=''
    >

      <div className=' ml-[24re]   w-[70%] h-screen fixed bg-black/40 backdrop-blur-2xl flex flex-col gap-10 pt-[30%] pl-10'>{renderLink}</div>
    </div>
  )
}

export default Menu