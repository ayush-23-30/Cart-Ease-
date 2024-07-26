import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './component/Home.jsx';
import Cart from './component/Cart.jsx';

const router = createBrowserRouter([
  {
    path : "/", 
    element : <App/>, 
    children : [
      {
        path : "/home", 
        element : <Home></Home>
      } , 
      {
        path : "/cart", 
        element: <Cart></Cart>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    {/* <App /> */}
    </RouterProvider>
  </React.StrictMode>,
)
