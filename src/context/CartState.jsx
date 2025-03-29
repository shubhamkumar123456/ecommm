import React, { useState } from 'react'
import CartContext from './CartContext'

const CartState = (props) => {
    const [arr, setarr] = useState([]);
    const [searchValue, setsearchValue] = useState("");

    function addItem(obj){
        obj.quantity= 1

        let copyArr = [...arr] 
        copyArr.push(obj)
        setarr(copyArr)
    }

    
  
  return (
    <CartContext.Provider value={{arr, addItem, searchValue, setsearchValue}}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartState
