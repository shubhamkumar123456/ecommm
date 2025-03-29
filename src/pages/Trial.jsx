import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementData, insertValues } from '../redux/counterSlice';

const Trial = () => {

    let arr = [
        {
            id:1,
            name:"one",
            email:"one@gmail.com"
        },
        {
            id:2,
            name:"two",
            email:"two@gmail.com"
        },
        {
            id:1,
            name:"three",
            email:"three@gmail.com"
        },
    ]
    console.log(arr)
    let dispatch = useDispatch();

    let ctx = useSelector((state)=>state.x)
    console.log(ctx)

    const handleIncrement = ()=>{
        // console.log("running")
        // dispatch(incrementData(10))
        dispatch(insertValues(arr))
    }

  return (
    <div>
      <h1>This is trial page 1</h1>

      <h1>Count = {ctx.value}</h1>

      <button onClick={handleIncrement} className='bg-blue-400 px-4 py-2 rounded-md mx-1'>Increment</button>
      <button className='bg-blue-400 px-4 py-2 rounded-md mx-1'>Decrement</button>
    </div>
  )
}

export default Trial
