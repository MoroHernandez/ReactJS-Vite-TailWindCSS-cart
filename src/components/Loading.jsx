import React from 'react'
import { Spinner } from '@material-tailwind/react'

const Loading = () => {

  
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Spinner className="w-12 h-12"/>
    </div>
  )
}

export default Loading