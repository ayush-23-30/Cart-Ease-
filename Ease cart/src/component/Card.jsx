import React from 'react'
import imgage from "../../images/imgage.jpg"
import { CartState } from '../context/Context'

function Card() {
  const {state : {products}} = CartState();
  // console.log(products.name);
  return (
    <div>

 {
    products.map((prod , index) =>{
      return (
        

        <div className=" flex  flex-col tracking-tighter leading-[8px] ml-3 md:h-60 md:w-48  shadow-lg mt-3  w-40 h-56">

        <div className="">
          <img src= {imgage} alt="" className='md:w-48 md:h-32 p-2 w-40 h-28' />
        </div>
        <div className="content pl-2">
        <div className="capitalize my-1">
          <p> {prod.name} </p>
        </div>
        <div className="mb-1">
          <p>discount</p>
        </div>
        <div className="m-0">
          <p>price</p>
        </div>

        
        </div>

      </div>
       
      )
    })
}

    </div>
  )
}

export default Card
