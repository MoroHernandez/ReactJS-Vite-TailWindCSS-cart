import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Loading from './Loading';




const ItemListContainer = ({}) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams()

    useEffect(() => {
      const querydb = getFirestore();
      const queryCollection = collection(querydb, 'cafe');

      setLoading(true);

      if (categoria) {

        const queryFilter = query(queryCollection, where('categoria', '==', categoria))
        getDocs(queryFilter)
          .then(res => {
            setData(res.docs.map(product => ({id: product.id, ...product.data() })))
            setLoading(false);
      
          })
          
        } else {
        
        getDocs(queryCollection)
          .then(res => {
            setData(res.docs.map(product => ({id: product.id, ...product.data()})))
            setLoading(false);
          })
          
      }

    }, [categoria])
    
    return (
      
      <>
        {loading ? (
          <Loading />
        ) : (
          <ItemList data={data}/>

        )}
      </>
      
    );
};

export default ItemListContainer;