import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'

const Navbar = () => {
    let ctx = useContext(CartContext);
    console.log(ctx)

    let inputRef = useRef();

    const handleSearch = ()=>{
      // console.log("running")
      let val = inputRef.current.value;
      console.log(val)
      ctx.setsearchValue(val)
    }
  return (
    <div className='flex fixed top-0 left-0 right-0 justify-center items-center bg-black h-[60px]'>
      <ul className='flex gap-8 items-center'>
        <li className='text-amber-200'><Link to={'/'}> Trial</Link></li>
        <li className='text-amber-200'><Link to={'/home'}> Trial2</Link></li>
        <li className='text-amber-200' ><Link to={'/cart'}>Cart <sup>{ctx.arr.length}</sup></Link></li>
        <li>
          <input ref={inputRef} type="text" className='px-4 py-2 border border-white text-white' placeholder='enter a product'/> 
          <button onClick={handleSearch} className='bg-green-400 px-4 py-2 rounded-md '>Search</button></li>
      </ul>
    </div>
  )
}

export default Navbar
