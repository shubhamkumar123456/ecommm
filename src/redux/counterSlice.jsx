import { createSlice } from '@reduxjs/toolkit'


//this initial state will be accessible for any child... any child can access this state and its variable
const initialState = {
  value: 0,
  arr:[],
  name:''
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   incrementData:(state,action)=>{
        console.log(action)
        console.log(action.payload) //10
        state.value = state.value+action.payload
   },

   insertValues:(state,action)=>{
        console.log(action.payload) //[3,5,7,9] data coming from child
        state.arr = action.payload
   }




  },
})

// Action creators are generated for each case reducer function
export const { incrementData,insertValues} = counterSlice.actions

export default counterSlice.reducer