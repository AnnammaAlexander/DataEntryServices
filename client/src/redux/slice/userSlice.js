import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    items:{
        name:'',
        phonenumber: "",
        email: "",
        nationality: "",
        currentlocation: "",
        UploadId: null,
    },
    name:""
}
    const userSlice = createSlice({
        name:'user',
        initialState:initialState,
        reducers:{
            setUser :(state,action) =>{
                state.items = action.payload
                localStorage.setItem('userdata',JSON.stringify(action.payload))
            },
            // setName:(state,action) =>{
                // state.name = action.payload
                // localStorage.setItem('name',action.payload)
            // }
        },
        clearUserData:(state) =>{
            state.items={
                name:null,
                phonenumber: null,
                email: null,
                nationality:null,
                currentlocation:null,
                UploadId: null, 
            }
        }

})



export default userSlice.reducer;
export const {setUser ,clearUserData,setName} = userSlice.actions