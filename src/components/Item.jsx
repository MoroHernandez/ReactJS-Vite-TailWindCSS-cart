import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

const Item = ({name, price, descripcion, aromatizado }) => {


  return (
    <>
      <div className="bg-white shadow-xl pr-0 pl-0 pt-1 pb-6 border">
        
        <p className="bg-yellow-900 text-[0.6rem] mb-3 font-semibold inline-block font-items tracking-wider px-1 uppercase text-white last:mr-0 mr-1">{aromatizado}</p>
        
        <section className="flex pl-4 w-full">

          <div className="flex justify-between items-center gap-7">
            
            <img
              src="" className="w-28 h-28 shadow-lg"
            />

            <div className="flex-1 w-16">
              <p className=" text-base font-custom font-bold uppercase text-black">{name}</p>
              <p className=" text-gray-500 font-items tracking-wide text-xs">{descripcion}</p>
              <p className=" text-green-500 text-bold font-items mt-7">${price}</p>
            </div>

            <button className=" bg-green-600 w-12 h-12 rounded-full -mb-16 text-white text-xl uppercase font-custom">
             Add
            </button>

          </div>

        </section>
      </div>
    </>
      
  )
}

export default Item
        
           
     