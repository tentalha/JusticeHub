import { createSlice } from "@reduxjs/toolkit";
import signUpUser from "features/thunk/signUpUser";
import signInUser from "features/thunk/signInUser";

const initialState = {
    msg:'',
    jwtToken:null,
    loading: false,
    error:'',
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{

        getToken: (state,action)=>{
            state.jwtToken = localStorage.getItem("jwtToken")
        },

        logout:(state, action)=>{
            state.jwtToken = null;
            localstorage.clear();
        }
    },
    extraReducers:{

         [signUpUser.pending]:(state,action)=>{
            state.loading = true
         },
         [signUpUser.fulfilled]:(state,action)=>{
            state.loading = false;
         },
         [signUpUser.rejected]:(state,action)=>{
            state.loading = true
         },
         
         [signInUser.pending]:(state,action)=>{
            state.loading = true
         },
         [signInUser.fulfilled]:(state,{payload})=>{
            state.loading = false;
            state.isLoggedIn = true;
            
            state.jwtToken = jwtToken;               
            localStorage.setItem('jwtToken', jwtToken)
            console.log(payload);
         },
         [signInUser.rejected]:(state,action)=>{
            state.loading = true;
         },
    },
}
)

export const {getToken, getUser, logout} = authSlice.reducer;
export default authSlice.reducer;


