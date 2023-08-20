import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const signUpUser = createAsyncThunk('signUpUser',async(data)=>{

    try {
        const response = await axios.post(
          "http://localhost:3500/backend/api/auth/register",
          data,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return response.data;
      } catch (error) {
        throw Error('Failed to Create new User');
      }
})
    
 export default signUpUser;
