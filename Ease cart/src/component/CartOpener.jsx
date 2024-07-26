import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";

function CartOpener() {
  const [cart , setCart]  = useState(0)
  const [isOpen , setisOpen] = useState(false)

  const openCart = ()=>{
    console.log("clicked")
    setisOpen(!isOpen)
  }
  
  return (
    <div className='w-full h-[85vh] flex items-center justify-center flex-col '>

      <button 
      onClick={openCart}
      className="bg-blue-500 h-12 w-20  gap-2 text-white cursor-pointer flex items-center justify-center rounded-lg hover:bg-blue-600">
       <FaShoppingCart className='text-3xl'/>

       <div className="relative top-2">
      <p className='flex justify-center items-center bg-red-500 rounded-full w-7 h-7 text-sm'>{cart}</p>
       </div>

      </button>

      {
        isOpen&& (
      <div className="bg-gray-500 relative right-12 rounded-lg w-44 flex items-center justify-center flex-row h-16 mt-2 z-0">

        {/*  ternary operator -> */}
        
        {
          cart.length === 0 ? <h6 className=''> Cart is Empty!</h6> 
          : (
            <ul>
                
            </ul>
          )
        }
        
      </div>
        )
      }

    </div>
  )
}

export default CartOpener
// //  cart. map ((itm , index )=>{
  
// })
