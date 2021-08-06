import React, { createContext, useState } from 'react'
export const MedicineContext = createContext();

const Context = (props) => {
  const [cart, setcart] = useState([])
  const addCart = (item) => {
    setcart(cart.find(cartItem => cartItem.id === item.id) ?
      cart.map(cartItem => cartItem.id === item.id ?
        { ...cartItem, count: cartItem.count + 1 } : cartItem) : [...cart, { ...item, count: 1 }])
  }
  const delCart = (item) => {
    setcart(cart.filter(i => i.id !== item.id))
  }
  const decrease = (id) => {
    setcart(cart.map(cartItem => cartItem.id === id ?
      { ...cartItem, count: cartItem.count >1 ? cartItem.count - 1 :1 } : cartItem))
  }
  const increase = id =>{
    setcart(cart.map(cartItem => cartItem.id === id ?
      { ...cartItem, count: cartItem.count + 1} : cartItem))
  }
  const clearCart = () =>{
    setcart([])
  }
    return (
        <MedicineContext.Provider value={{ cart, addCart, delCart, increase, decrease, clearCart }}>
            {props.children}
        </MedicineContext.Provider>

    )
}

export default Context
