import { useEffect, useState } from 'react'



const ItemCount = ({ onAdd }) => {


  const [counter, setCounter] = useState(parseInt(0));


  const increment = () => {

    if (counter < 10) {
    setCounter(counter + 1)
    }
}

  const decrement = () => {
    if (counter > 0) {
    setCounter(counter - 1)
    }
}

  useEffect (() => {
    setCounter(parseInt(0));
  }, [0])

  return (
    
    <div className="flex gap-3 md:gap-1">
      <div className="flex flex-row h-10 w-24 rounded-lg relative bg-transparent">
        <button onClick={decrement} className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-40 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <button className="focus:outline-none w-full p-2 text-center  bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default text-gray-700  outline-none">{counter}</button>
        <button onClick={increment} className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-40 rounded-r cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
      <button onClick={() => onAdd(counter)} className="font-custom bg-transparent hover:bg-green-600 text-bloack hover:text-white w-20 border border-green-600 hover:border-transparent rounded">
        Agregar
      </button>
    </div>  
    
  )
}

export default ItemCount