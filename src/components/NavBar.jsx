import React, { useState } from "react";
import CartWidget from "./CartWidget";
import "tw-elements";

import {
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

import { SiCoffeescript } from "react-icons/si"
import { Link } from "react-router-dom";

import {
    Dropdown,
    Ripple,
    initTE,
  } from "tw-elements";
  

    initTE({ Dropdown, Ripple });
  
  
  
  const NavBar = () => {
    

  const [showMenu, setShowMenu] = useState(false);
  return (
  
  <> 
    

      <header className="flex items-center justify-between bg-black xl:justify-start w-full py-4 px-8 h-[10vh] z-50">
          <div className="flex pxl:w-1/6 text-center -mt-4">
       
            <Link className="text-2xl font-custom font-bold relative p-1 bg-black text-white" to={"/"}>
                MorCoffee<span className="text-white text-5xl">.</span>{" "}
                  
            </Link>
                           
          </div>
        <nav
          className={`fixed bg-black w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}
        > 
          <div className="relative" data-te-dropdown-ref>
                
                <button
                    className="flex items-center whitespace-nowrap rounded bg-black text-white focus:text-black hover:bg-white hover:text-black px-6 pb-2 pt-2.5 uppercase font-custom font-semibold leading-normal transition duration-150 ease-in-out focus:bg-white focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.3),0_4px_18px_0_rgba(251,251,251,0.2)] motion-reduce:transition-none"
                    type="button"
                    id="dropdownMenuButton9"
                    data-te-dropdown-toggle-ref
                    aria-expanded="false"
                    data-te-ripple-init>
                    Cafe
                    <SiCoffeescript className=" text-lg ml-2"/>
                    <span className="ml-2 w-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5">
                        <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd" />
                    </svg>
                    </span>
                </button>
                <ul
                    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                    aria-labelledby="dropdownMenuButton9"
                    data-te-dropdown-menu-ref>
                    <li>
        
                        <Link data-te-dropdown-item-ref className="block w-full whitespace-nowrap bg-transparent px-9 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" to={`/categoria/${'A'}`}>
      
                          Cápsulas
                          
                        </Link>
                     
                    </li>
                    <li>
                  
                        <Link data-te-dropdown-item-ref className="block w-full whitespace-nowrap bg-transparent px-9 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600" to={`/categoria/${'B'}`}>
      
                          Paquetes
      
                        </Link>
                      
                    </li>
                      
                </ul>
                </div>



        
            <a href="#home" className="text-white">
              Home
            </a>
            <a href="#cafe" className="text-white">
              Maquinas
            </a>
            <a href="#servicios" className="text-white">
              Servicios
            </a>
            <a href="#maquinas" className="text-white">
              Nosotros
            </a>
          
        </nav>

        <Link to={"/Cart"}>

          <CartWidget />

        </Link>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="xl:hidden text-2xl p-2 text-white"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>

      </header>
    
  </>
  );
};

export default NavBar;



