import React from 'react'
import { NavLink } from 'react-router-dom';
const navLinks = [
    {
      id:1,
      Name: "HOME",
      Url: "/",
    },
    {
      id:2,
      Name: "DESTINATION",
      Url: "/destination",
    },
    {
      id:3,
      Name: "CREW",
      Url: "/crew",
    },
    {
      id:4,
      Name: "TECHNOLOGY",
      Url: "/technology",
    },
  ];

const Menu = () => {
    const renderLink = navLinks.map((link, id) => {
        return (
          <div
            className="flex md:hidden  font-BarlowCondensed text-[16px] text-primaryWhite bg-white w-[10rem] "
            key={link.id}
          >
            <NavLink  to={link.Url} className={({isActive})=>(
              isActive? "text-blue-400" :"text-black"
            )
            }>
            {link.Name}
            </NavLink>
          </div>
        );
      });
    
  return (
    <div className='absolute translate-x-[15rem] translate-y-[5rem]'>{renderLink}</div>
  )
}

export default Menu