
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({}) => {
  const { categoria } = useParams()
  const productos = [
    
    { id: 1, categoria:"A", name: "Chocolate", descripcion:"El chocolate más puro", aromatizado:"Aromatizado", price: 500 , stock: 100},
    { id: 2, categoria:"A", name: "Vainilla", descripcion: "Dulce cápsula de vainilla", aromatizado:"Aromatizado", price: 500, stock: 100},
    { id: 3, categoria:"A", name: "Caramelo", descripcion: "Hecha con ramas ultra finas", aromatizado:"Aromatizado", price: 450, stock: 100},
    { id: 4, categoria:"B", name: "Canela", descripcion:"Artesanal preparacion", aromatizado:"Aromatizado", price: 500 , stock: 100},
    { id: 5, categoria:"B", name: "Almendra", descripcion: "Frutos secos del sur", aromatizado:"Aromatizado", price: 500, stock: 100},
    { id: 6, categoria:"B", name: "Frutilla", descripcion: "Las mejores frutras rojas", aromatizado:"Aromatizado", price: 450, stock: 100}
    
    
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

    
    const filtrarProductos = categoria ? productos.filter((producto) => producto.categoria === categoria ) : productos
    
    return (
      
      <>
        
        <ItemList productos={filtrarProductos}/>
      </>
      
      );
};

export default ItemListContainer;