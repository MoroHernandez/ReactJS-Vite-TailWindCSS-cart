import React from 'react';
import ItemList from './ItemList';


const ItemListContainer = ({}) => {
  const productos = [

    { id: 1, name: "Chocolate", descripcion:"El chocolate más puro", aromatizado:"Aromatizado", price: 500 , stock: 100},
    { id: 2, name: "Vainilla", descripcion: "Dulce cápsula de vainilla", aromatizado:"Aromatizado", price: 500, stock: 100},
    { id: 3, name: "Caramelo", descripcion: "Hecha con ramas ultra finas", aromatizado:"Aromatizado", price: 450, stock: 100},
    { id: 4, name: "Canela", descripcion:"Artesanal preparacion", aromatizado:"Aromatizado", price: 500 , stock: 100},
    { id: 5, name: "Almendra", descripcion: "Frutos secos del sur", aromatizado:"Aromatizado", price: 500, stock: 100},
    { id: 6, name: "Frutilla", descripcion: "Las mejores frutras rojas", aromatizado:"Aromatizado", price: 450, stock: 100}
  
  
  ]

  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 5000)
    } else {
      reject("No se pueden mostrar los productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })

  return (
    
    <>
      <ItemList productos={productos}/>
    </>
      
  );
};

export default ItemListContainer;