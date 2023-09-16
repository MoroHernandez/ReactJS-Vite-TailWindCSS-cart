import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = ({}) => {
  
  const productos = [
    
    { id: "1", categoria:"A", name: "Chocolate", descripcion:"El chocolate más puro", descripcionDet:"Captura el contraste, al que se le unen las Arábicas de Brasil con su propia complejidad de sabores y aromas.", aromatizado:"Aromatizado", precio: 500 , stock: 100},
    { id: "2", categoria:"A", name: "Vainilla", descripcion: "Dulce cápsula de vainilla", descripcionDet:"Captura el contraste, al que se le unen las Arábicas de Brasil con su propia complejidad de sabores y aromas.", aromatizado:"Aromatizado", precio: 500, stock: 100},
    { id: "3", categoria:"A", name: "Caramelo", descripcion: "Hecha con ramas ultra finas", descripcionDet:"Captura el contraste, al que se le unen las Arábicas de Brasil con su propia complejidad de sabores y aromas.", aromatizado:"Aromatizado", precio: 450, stock: 100},
    { id: "4", categoria:"B", name: "Canela", descripcion:"Artesanal preparacion", descripcionDet:"Captura el contraste, al que se le unen las Arábicas de Brasil con su propia complejidad de sabores y aromas." , aromatizado:"Aromatizado", precio: 500 , stock: 100},
    { id: "5", categoria:"B", name: "Almendra", descripcion: "Frutos secos del sur", descripcionDet:"Captura el contraste, al que se le unen las Arábicas de Brasil con su propia complejidad de sabores y aromas." , aromatizado:"Aromatizado", precio: 500, stock: 100},
    { id: "6", categoria:"B", name: "Frutilla", descripcion: "Las mejores frutas rojas", descripcionDet:"Captura el contraste, al que se le unen las Arábicas de Brasil con su propia complejidad de sabores y aromas." , aromatizado:"Aromatizado", precio: 450, stock: 100}
    
    
  ]
  
  const [data, setData] = useState({});
  const { id } = useParams(); 
  
  useEffect(() => {
    
    const getData = new Promise((resolve, reject) => {
      const item = productos.find((el) => el.id === id);
      
      if(item) {

        setTimeout (() => {
            resolve(item);
        }, 5000)

      } else {
        reject({
          error: 'No se encuentra el producto'
        })
      }
    });
  

    getData
      .then((res) => {
        setData(res)
      })
      .catch((error) => {
        console.log(error);
      })

  }, [id])

  return (
    
    <>
      <ItemDetail data={data}/>
    </>
      
  );
};

export default ItemDetailContainer;


