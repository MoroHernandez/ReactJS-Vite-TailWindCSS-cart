import React from 'react';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';
import {getFirestore, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Loading from './Loading';


const ItemDetailContainer = () => {
  
  
  
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  
  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'cafe', id);

    setLoading(true);

    getDoc(queryDoc)
      .then(res => {
        setData({id: res.id, ...res.data()})
        setLoading(false);
      })
  
    }, [])

  return (
    
    <>
      {loading ? (
          <Loading />
        ) : (
          <ItemDetail data={data}/>

        )}
    </>
      
  );
};

export default ItemDetailContainer;


