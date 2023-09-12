import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  function handleNav() {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Define a scroll threshold at which you want to hide the navbar
      const scrollThreshold = 100; // Adjust this value as needed
      setIsNavbarVisible(scrollY < scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isNavbarVisible
          ? "fixed w-full h-[80px] flex justify-between items-center px-4  bg-white/80 text-gray-700 z-20"
          : "hidden"
      }`}
    >
      <div>
        <h1 className="text-gray-700 font-bold text-2xl">HolidayHaven</h1>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li className="px-4 text-lg font-normal hover:font-medium hover:transition duration-500 hover:scale-105">
          Home
        </li>
        <li className="px-4 text-lg font-normal hover:font-medium hover:transition duration-500 hover:scale-105">
          Destination
        </li>
        <li className="px-4 text-lg font-normal hover:font-medium hover:transition duration-500 hover:scale-105">
          Reservsation
        </li>
        <li className="px-4 text-lg font-normal hover:font-medium hover:transition duration-500 hover:scale-105">
          Amenities
        </li>
        <li className="px-4 text-lg font-normal hover:font-medium hover:transition duration-500 hover:scale-105">
          Rooms
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes className="text-gray-300" />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen text-gray-300 bg-black/90 flex flex-col justify-center items-center duration-500"
        }
      >
        <li className="p-8 text-3xl hover:font-medium hover:transition duration-500 hover:scale-105">
          Home
        </li>
        <li className="p-8 text-3xl hover:font-medium hover:transition duration-500 hover:scale-105">
          Destination
        </li>
        <li className="p-8 text-3xl hover:font-medium hover:transition duration-500 hover:scale-105">
          Reservsation
        </li>
        <li className="p-8 text-3xl hover:font-medium hover:transition duration-500 hover:scale-105">
          Amenities
        </li>
        <li className="p-8 text-3xl hover:font-medium hover:transition duration-500 hover:scale-105">
          Rooms
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
