import { createSlice } from "@reduxjs/toolkit";

const getToken=()=>{
    const token = localStorage.getItem('token')
    if(token){
        return token
    }
}
const initialState ={
    token:getToken(),

}
    const userSlice = createSlice({
        name:'user',
        initialState:initialState,
        reducers:{
            setToken :(state,action) =>{
                state.token=action.payload,
                localStorage.setItem('token',action.payload)
            },
            // setName:(state,action) =>{
                // state.name = action.payload
                // localStorage.setItem('name',action.payload)
            // }
        
       
        setLogOut:(state)=>{
            state.token='',
            localStorage.removeItem('token')

        }
    }

})



export default userSlice.reducer;
export const {setToken ,setLogOut} = userSlice.actions