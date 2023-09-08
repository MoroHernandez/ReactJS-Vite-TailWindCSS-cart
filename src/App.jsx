import React from 'react'
import 'tailwindcss/tailwind.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  
  
  return (

    <>
      <div className= "min-h-screen">
          <NavBar />
        <div className="mx-auto max-w-screen-lg">
          <ItemListContainer />
        </div>
      </div>
    </>
  )
}

export default App





