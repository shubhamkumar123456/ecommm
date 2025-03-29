import React from 'react'
import { useSelector } from 'react-redux'

const Trial2 = () => {
    let ctx = useSelector((state)=>state.x)
    console.log(ctx)
    console.log(ctx.arr)

  
  return (
    <div>
      <h1>THis is trial page 2</h1>
      <h1>Count = {ctx.value}</h1>
      {/* <h1>{ctx.arr[0].name}</h1> */}
     
      {
        ctx.arr.map((ele)=>{
            return <div>
                <p>{ele.name}</p>
                <p>{ele.email}</p>
            </div>
        })
      }
    </div>
  )
}

export default Trial2
