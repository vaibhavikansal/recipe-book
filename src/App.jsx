import React from 'react'
import Mainroutes from './pages/routes/Mainroutes'
import Navbar from './componenets/Navbar'

const App = () => {
  return (
   <div className='py-10 text-3xl px-[10%] text-white bg-gray-800 font-thin w-screen h-screen'>
    <Navbar/>
    <Mainroutes/>
   </div>
  )
}

export default App