import React from 'react'
import Item from './Item'

const ItemList = ( {data} ) => {

    return (
        <>  
            <div className="p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {   
                    
                    data.map((p) => {

                        
                        return(
                            
                            
                                <Item key={p.id}
                                    
                                    {...p}
                                           
                                />
                                                   
                        )
                    })
                }
            </div>

            
                
                        
        </>
    )
}

export default ItemList