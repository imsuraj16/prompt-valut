import axios from "../../api/apiconfig";
import { userPrompts } from "../reducers/promptSlice";
import { currentUser } from "./userActions";



export const createPrompt = (promptData)=>async(dispatch)=>{

    const{data} = await axios.post('/api/prompt/create',promptData)
   dispatch(getUserPrompts());
}


export const getUserPrompts = ()=>async(dispatch)=>{

    const{data} = await axios.get('/api/prompt/myPrompts')
    dispatch(userPrompts(data.prompts));
  
}