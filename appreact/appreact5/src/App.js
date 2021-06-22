import React from 'react'
import Slide from './Slide'




const App = () => {

  const slides = [ 
    {
      id: "slide 1",
      text: "slide 1"
    },
    {
      id: "slide 2",
      text: "slide 2"
    },
    {
      id: "slide 3",
      text: "slide 3"
    },
  ]
   

  return (
    <div>
      <Slide  slides={slides}/>
    </div>
  )
}

export default App
