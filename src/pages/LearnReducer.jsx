import React, { useReducer, useState } from 'react'

const LearnReducer = () => {4

    // const [count, setcount] = useState(0);

    const reducers = (state, action)=>{
        if(action.type==='increment karwa do'){
            return state+1 //1
        }

        if(action.type==='km krwa do'){
            return  state-1
        }
        
        if(action.type==='multiply'){
            return state*5
        }

    }

    const [state, dispatch] =  useReducer( reducers , 0)


    const handleIncrement = ()=>{
        // setcount(count+1)
        dispatch({type:"increment karwa do"})
    }

    const handleDecrement = ()=>{
        dispatch({type:'km krwa do'})
    }

    const handleMultiply = ()=>{
        dispatch({type:"multiply"})
    }
  return (
    <div>
        
        <button onClick={handleIncrement}>Increment</button>
                <p>{state}</p>
        <button onClick={handleDecrement}>Decrement</button>

        <button onClick={handleMultiply}>Multiply by 5</button>
        
    </div>
  )
}

export default LearnReducer
