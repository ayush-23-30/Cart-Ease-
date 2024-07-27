import { createContext, useContext, useReducer } from "react";
import faker from "faker";
import { CartReducer } from "./Reducers";


const CartData = createContext();

const Context = (({children})=>{
  // creating fake data of products from Node Faker npm 

  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
    inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  }));

 const [state, dispatch ] =  useReducer(CartReducer , {
  products : products, 
  cart : []
 }) // an  alternative to useState. accepts reducer type (state , action) => newState , and returns the current state paired with dispatch method ( it is mainly use with REDUX ) 


return <CartData.Provider value={{state , dispatch}}>
  {children} 
</CartData.Provider>
})

export default Context;

export const CartState =  ()=>{
 return  useContext(CartData)
}

// children is the whole app 
// id  from data base 