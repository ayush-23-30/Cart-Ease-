import React from 'react'
import { CartState } from '../context/Context'
import Card from './Card';



function Home() {
  const {state : {products}} = CartState(); 
  console.log(products);


  return (
    <div>
      <Card></Card>
    <div className="">

      {/* {
        products.map((prod , index) =>{
          return <h1  key={index} className='p-2'> {prod.name} </h1>
        }) */}
      {/* } */}
    </div>
    </div>
  )
}

export default Home
 