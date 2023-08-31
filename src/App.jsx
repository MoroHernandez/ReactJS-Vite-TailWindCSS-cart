import React from 'react'
import 'tailwindcss/tailwind.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  
  const greeting = "Bienvenidos a MorCoffee."
  
  return (

    <>
      <div className= "white min-h-screen">
          <NavBar />
        <div className="mx-auto max-w-screen-lg">
          <ItemListContainer greeting = {greeting} />
        </div>
      </div>
    </>
  )
}

export default App





