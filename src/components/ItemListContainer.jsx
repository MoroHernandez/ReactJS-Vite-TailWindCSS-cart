import React from 'react';


const ItemListContainer = ({greeting}) => {
  return (
    <>
        <h2 className="text-center font-custom text-3xl font-semibold mt-28">{greeting}</h2>
    </>
  );
};

export default ItemListContainer;