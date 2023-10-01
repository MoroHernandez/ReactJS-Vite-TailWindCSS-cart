import React from 'react'
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import 'tailwindcss/tailwind.css'
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ItemListContainer from './components/ItemListContainer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  
  
  return (

    <>

      <BrowserRouter>
      <ShoppingCartProvider>

        <div className= "min-h-screen">

        <NavBar />
          
          <div className="mx-auto max-w-screen-lg">
        <Routes>

          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/Cart' element={<Cart/>}/>
          <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
          
        </Routes>
        
        </div>
          </div>
          
        
      </ShoppingCartProvider>
      </BrowserRouter>
        

    </>

  )
}

export default App
            
        


          

          
            
          






