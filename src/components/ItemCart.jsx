import React from 'react'
import { useCart } from '../context/ShoppingCartContext'
import imagenGranos  from "../assets/granos.png"

const ItemCart = ({ product }) => {

    const { removeProduct } = useCart();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

        <div className='bg-white mr-3 ml-3 shadow-xl pr-0 pl-0 pt-1 pb-4 border mt-6'>
            <div className="flex justify-start gap-6 md:gap-3 ml-4">  
                <img src={imagenGranos} alt="granos de cafe" className="w-40 h-40 shadow-lg"/>
                <div className="md:text-sm">
                    <p className="font-items text-black font-semibold uppercase mb-2"> {product.name}</p>
                    <p className="font-items text-black font-semibold">x{product.quantity}</p>
                    <p className="font-items text-black font-semibold">c/u <span className="text-green-500">${product.price}</span></p>
                    <p className="font-items text-black font-semibold">Subtotal: <span className="text-green-500">${product.quantity * product.price}</span></p>
                    <button className="font-custom mt-5 md:mt-9 py-1.5 px-4 bg-transparent text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white hover:border-transparent transition ease-in duration-200" onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default ItemCart