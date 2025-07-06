import React from 'react'
import Mainroutes from './pages/routes/Mainroutes'
import Navbar from './componenets/Navbar'

const App = () => {
  return (
   <div className="py-10 text-3xl px-[10%] text-white font-thin w-screen min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-blue-900 animate-gradient-x">
    <Navbar/>
    <Mainroutes/>
   </div>
  )
}

export default App