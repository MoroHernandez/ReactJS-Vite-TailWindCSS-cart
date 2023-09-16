import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({name, descripcion, aromatizado, id }) => {


  return (
    <>
      
      <div className="bg-white shadow-xl pr-0 pl-0 pt-1 pb-6 border h-48">
        
        <p className="bg-yellow-900 text-[0.6rem] mb-3 font-semibold inline-block font-items tracking-wider px-1 uppercase text-white last:mr-0 mr-1">{aromatizado}</p>
        
        <section className="flex pl-4 w-full">

          <div className="flex h-28 gap-7">
            
            <img
              src="" alt="" className="w-28 shadow-lg"
            />

            <div className="flex-1 flex flex-col justify-between mr-9">

              <p className="text-base font-custom font-bold uppercase text-black">{name}</p>
              
              <p className="text-gray-500 font-items tracking-wide text-xs">{descripcion}</p>
              
              <button className=" font-custom bg-transparent hover:bg-green-600 text-bloack hover:text-white py-1 w-20 mt-5 border border-green-600 hover:border-transparent rounded">
                <Link to={`/item/${id}`}>
                  
                  Detalles

                </Link>
              </button>

            </div>
          </div>
        </section>
      </div>

    </>
           



      
  )
}

export default Item
        
           
     