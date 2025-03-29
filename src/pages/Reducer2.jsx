import React, { useReducer, useRef } from 'react'

const Reducer2 = () => {

    const reducers = (state,action)=>{
        if(action.type ==='removeItem'){
                let copyArr = [...state]
                copyArr.splice(action.payload , 1)
            return copyArr
        }

        if(action.type==='add'){
            let copyArr = [...state, action.payload]
            return copyArr
        }
    }

    let arr = [
        {id:1, task:"one"},
        {id:2, task:"two"},
        {id:3, task:"three"}
    ]

    const [ state, dispatch] = useReducer(  reducers ,arr)


    const handleDelete = (obj , i)=>{
        console.log(obj)
        console.log(i)
        dispatch({type:'removeItem', payload:i})
    }

    let inputRef = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        let obj = {
            task:inputRef.current.value
        }
        console.log(obj)
        dispatch({type:"add",payload:obj})
      
    }
  return (
    <div>

            <form action="">
                <input ref={inputRef} type="text" className='px-3 py-2 rounded-md border'  placeholder='add a task'/>
                <button onClick={handleSubmit} className='bg-red px-3 py-2 bg-blue-400 rounded-md'>submit</button>
            </form>

        <table className='border w-[60%] m-auto text-center'>
            <thead>
                <tr className=''>
                    <th className='p-2'>Sno</th>
                    <th>Task</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                   state.map((ele,i)=>{
                    return <tr >
                        <td className='p-2'>{i+1}</td>
                        <td>{ele.task}</td>
                        <td><button onClick={()=>handleDelete(ele, i)}>Delete</button></td>
                    </tr>
                   }) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default Reducer2
