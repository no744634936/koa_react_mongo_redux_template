import axios from "axios"
import {LOGIN_REQUEST,LOGIN_SUCCESSED,LOGIN_FAILED,LOGOUT,USER_LOADED,USER_LOAD_FAILED,DELETE_ACCOUNT,DELETE_ACCOUNT_FAILED} from "../actionTyps.js"



//只能admin登录
export const loginAction=(formData)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:LOGIN_REQUEST})
            let config={
                header:{
                    'Content-Type':'applicaiton/json'
                }
            }
            let result= await axios.post("/api/admin/signin",formData,config);
            // console.log(result);
            // console.log(result.data.data.token);
            if(result.data.errnum===0){
                dispatch({type:LOGIN_SUCCESSED,payload:result.data.data})
            }else{
                // result.data.messages.forEach(msg=>{
                //     dispatch(setAlert(msg,"danger"))
                // })
                dispatch({type:LOGIN_FAILED,payload:result.data.data})
            }
        }catch(error){
            // dispatch({type:LOGIN_FAILED,payload:result.data.data})
            console.log("error");
        }
    }
}

//每次刷新页面redux的state就回丢失，在app.js 文件中使用这个方法，就可以不丢失state
export const loadUserAction=()=>{
    return async(dispatch)=>{
        let token=localStorage.getItem("token");
        if(token){
            let user=JSON.parse(localStorage.getItem("user"));
            
            dispatch({type:USER_LOADED,payload:{token,user}})
        }else{
            dispatch({type:USER_LOAD_FAILED,payload:{err:"failed to login"}})
        }
    }
}