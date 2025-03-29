import React, { useReducer, useRef } from 'react'

const MixReducer = () => {

    const reducers = (state, action)=>{
        if(action.type ==='increment'){
            
            return {...state, count:state.count+1}
        }

        if(action.type === 'decrement'){
            return {...state, count:state.count-1}
        }

        if(action.type==="deleteItem"){
            let copyArr = [...state.arr] //[{},{}]
            copyArr.splice(action.payload, 1)
            return {...state,arr:copyArr}
        }

        if(action.type==="addItem"){
            let copyArr = [...state.arr, action.payload]
            return {...state, arr:copyArr}
        }
    }

    let initialstate={
        count:0,
        arr:[
            {task:"one"},
            {task:"two"},
            {task:"three"}
        ]
    }

    let inputRef = useRef()


    const [state, dispatch] = useReducer(reducers,initialstate)
    console.log(state) //{cont, arr}  // {count,arr}


    const handleDelete = (obj ,i)=>{
        console.log(obj)
        console.log(i)
        dispatch({type:"deleteItem",payload:i})
    }


    const taskHandler = (e)=>{
        e.preventDefault()
        let obj = {
            task:inputRef.current.value
        }

        console.log(obj)
        dispatch({type:"addItem", payload:obj})
    }
  return (
    <div>
        <h1 className='text-center text-3xl'>Count = {state.count}</h1>

   <div className='flex justify-center gap-2 my-3'>
   <button onClick={()=>dispatch({type:"increment"})} className='bg-green-400 px-4 py-2 rounded-md'>Increment</button>
   <button onClick={()=>dispatch({type:"decrement"})} className='bg-amber-400 px-4 py-2 rounded-md'>Decrement</button>
   </div>


        <form action="" className='flex justify-center gap-2 my-8'>
            <input ref={inputRef} type="text" className='border px-4 py-2 rounded-md'  placeholder='enter a task'/>
            <button onClick={taskHandler} className='bg-amber-400 px-4 py-2 rounded-md'>Add Task</button>
        </form>
        <table className='w-[70%] text-center m-auto'>
            <thead>
                <tr className='border-b'>
                    <th className='p-3'>SNo</th>
                    <th>Task</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    state.arr.map((ele,i)=>{
                        return <tr key={i} className='border-b'>
                            <td className='p-3'>{i+1}</td>
                            <td>{ele.task}</td>
                            <td><button onClick={()=>handleDelete(ele,i)} className='bg-blue-600 px-3 py-2 rounded-md'>delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default MixReducer
