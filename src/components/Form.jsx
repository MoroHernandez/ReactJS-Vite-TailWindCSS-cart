import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useCart } from '../context/ShoppingCartContext';

const Form = () => {
  const { cart } = useCart();

  const [orderId, setOrderId] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const db = getFirestore();

  const handleSubmit = (e) => {
      
      const order = {
          buyer: {
              name,
              email,
            },
            items: cart.map(({ id, name, price, quantity }) => ({
                id,
                name,
                price,
                quantity,
            })),
        };
        
        const orderCollection = collection(db, 'orden');
        
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
        setError(alert('Por favor, completa todos los campos.'))
      } else {

          addDoc(orderCollection, order)
            .then(({ id }) => setOrderId(id))
            .catch((error) => console.error('Error al agregar documento: ', error));
      }
  };

  return (
    <div className="mt-4 border p-4">
      <h1 className="font-custom text-xl text-center uppercase">Completar compra</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start justify-center gap-3 mb-4 mt-8">
          <input
            className="h-8 text-start pl-2"
            type="text"
            placeholder="Nombre y apellido"
            onChange={(e) => setName(e.target.value)}
                
          />
          <input
            className="h-8 text-start pl-2"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="font-custom py-1.5 px-4 bg-transparent text-black border border-black rounded hover:bg-black hover:text-white hover:border-transparent transition ease-in duration-200"
          type="submit"
        >
          Comprar
        </button>
      </form>

      {orderId === '' ? (
        error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p> No has enviado información</p>
        )
      ) : (
        <p className="text-gray-500 text-sm mt-20">
          {' '}
          Tu compra se identificará con el siguiente ID: {orderId}
        </p>
      )}
    </div>
  );
};

export default Form;