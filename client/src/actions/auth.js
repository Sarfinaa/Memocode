import {AUTH} from '../constants/actionTypes'
import * as api from '../api/index';

export const signin=(formData,history)=>async(dispatch)=>{
    try{
        const {data}=await api.signIn(formData);
    //login the user and send user to home page
    dispatch({type:AUTH,data})
    history.push('/cards')
    }catch(error){
    console.log(error);
    }
    }
    export const signup=(formData,history)=>async(dispatch)=>{
        try{
            const {data}=await api.signUp(formData);
            dispatch({type:AUTH,data})
        history.push('/cards')
        }catch(error){
        console.log(error);
        }
        }