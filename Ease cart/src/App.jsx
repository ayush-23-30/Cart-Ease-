
import './App.css'

import { Outlet } from 'react-router-dom'
import MainHeader from './component/MainHeader'
import SideBar from './component/SideBar'

function App() {
  

  return (
 <div className="flex flex-col">
  <MainHeader></MainHeader>
  <SideBar></SideBar>

  <Outlet></Outlet>


  
 </div>
  )
}

export default App
