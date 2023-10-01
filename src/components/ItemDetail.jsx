import React from 'react'
import ItemCount from './ItemCount'
import imagenGranos  from "../assets/granos.png"
import { BsArrowLeftShort } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useCart } from '../context/ShoppingCartContext'
import Loading from './Loading'





const ItemDetail = ( { data } ) => {

    const { addProduct } = useCart();

    const onAdd = ( quantity ) => {     
        addProduct(data, quantity);
    }
 

    return (
        
        <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                                <div className="bg-white shadow-xl pr-0 pl-0 pt-1 pb-4 border h-60">
                                
                                <p className="bg-yellow-900 text-[0.6rem] mb-3 font-semibold inline-block font-items tracking-wider px-1 uppercase text-white last:mr-0 mr-1">{data.aromatizado}</p>
                                
                                    <section className="flex ml-2 mr-2 w-full">

                                        <div className="flex justify-between mr-2 ml-2 md:ml-1 md:mr-1 xl:m-0">
                                            <div className="flex flex-col items-start justify-between gap-7 w-full">
                                                <img
                                                    src={imagenGranos} alt='granos de cafe' className="w-28 h-28 xl:flex-1 shadow-lg"
                                                    />
                                                <Link to={'/'}>
                                                    <button className="font-custom bg-transparent hover:bg-black text-bloack hover:text-white p-2 border border-black hover:border-transparent rounded">
                                                        <BsArrowLeftShort className="text-xl"/>
                                                    </button>
                                                </Link>
                                                
                                            </div>


                                            <div className="flex-1 flex flex-col justify-between mr-3">
                                            
                                                <p className="text-gray-500 font-items tracking-wide text-xs xl:ml-2">{data.descripcionDet}</p>
                                            
                                                <section className="flex flex-col items-start justify-between gap-1 xl:ml-2">

                                                    <p className="text-green-600 font-semibold font-custom tracking-wide text-2xl mb-4">${data.price}</p>

                                                    <ItemCount onAdd={onAdd}/>
                                                    
                                                </section>  
                            

                                            </div>
                                        </div>
                                    </section>
                                </div>
                            
        </div>                
    )
}

    
    
    export default ItemDetail