
import './App.css'

import Cart from './component/Cart'
import { Outlet } from 'react-router-dom'
import MainHeader from './component/MainHeader'
// import CartOpener from './component/CartOpener'


function App() {
  

  return (
 <div className="">
 
  <MainHeader></MainHeader>
 
    <Outlet></Outlet>
  
 </div>
  )
}

export default App
