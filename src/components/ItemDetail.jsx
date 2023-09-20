import React from 'react'
import imagenGranos  from "../assets/granos.png"


const ItemDetail = ( { data } ) => <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                                <div className="bg-white shadow-xl pr-0 pl-0 pt-1 pb-6 border h-48">
                                
                                <p className="bg-yellow-900 text-[0.6rem] mb-3 font-semibold inline-block font-items tracking-wider px-1 uppercase text-white last:mr-0 mr-1">{data.aromatizado}</p>
                                
                                    <section className="flex pl-4 w-full">

                                        <div className="flex h-28 gap-7">
                                    
                                        <img
                                            src={imagenGranos} alt='granos de cafe' className="w-28 shadow-lg"
                                        />

                                            <div className="flex-1 flex flex-col justify-between mr-9">
                                        
                                            <p className="text-gray-500 font-items tracking-wide text-xs xl:text">{data.descripcionDet}</p>
                                        
                                            <section className="flex justify-between items-center gap-5 xl:mt-3">
                                            
                                                <p className="text-green-600 font-semibold font-custom tracking-wide text-xl">${data.precio}</p>
                                                <button className=" font-custom bg-transparent hover:bg-green-600 text-bloack hover:text-white py-1 w-20 border border-green-600 hover:border-transparent rounded">
                                                    Agregar
                                                </button>

                                            </section>  

                                            </div>
                                        </div>
                                    </section>
                                </div>
                            
        </div>                

export default ItemDetail