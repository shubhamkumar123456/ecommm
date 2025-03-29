import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
    let ctx = useContext(CartContext)

    let sum = 0;
    ctx.arr.forEach((item)=>{
        sum = sum+ item.price
    })

    console.log(sum)
  return (
    <div>
      <table className='w-[80%] text-center m-auto'>
        <thead>
            <tr>
                <th className='p-3'>Sno</th>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                ctx.arr.map((ele,i)=>{
                    return <tr>
                        <td className='p-3'>{i+1}</td>
                        <td><img src={ele.thumbnail} className='h-32 w-32 m-auto' alt="" /></td>
                        <td>{ele.title}</td>
                        <td>{ele.price}</td>
                        <td>
                            <button>+</button>
                                {ele.quantity}
                            <button>-</button>
                        </td>
                        <td><button>delete</button></td>
                    </tr>
                })
            }
        </tbody>
      </table>
      <h1 className='text-end my-3  w-[75%]'>Total = ${sum}</h1>
    </div>
  )
}

export default Cart
