import React from 'react'
import { useCart } from '../context/ShoppingCartContext'
import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';
import Form from './Form';

const Cart = () => {

  const { cart, totalPrice } = useCart();

  if (cart.length === 0) {
    return (
      
        <div className="flex flex-col items-center justify-center gap-6">
          <h1 className="font-custom mt-10">No hay elementos en el carrito</h1>
          <Link className="font-custom py-1.5 px-4 bg-transparent text-black border border-black rounded hover:bg-black hover:text-white hover:border-transparent transition ease-in duration-200" to='/'>Hacer compras</Link>
        </div>  
    )
  }



  return (
   <>
      {
        cart.map(product => <ItemCart key={product.id} product={product} />)
      }
      <div className="flex flex-col items-center mt-8 gap-10">
        <p className="font-items text-bold uppercase">
          Total:<span className="text-green-500"> ${totalPrice()}</span>
        </p>
        <Form/>
      </div>
        

   </>
  )
  
}

export default Cart