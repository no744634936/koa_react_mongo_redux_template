import {combineReducers} from "redux"
import registerReducer from "./signup/registerReducer.js"
import authenticationReducer from "./authentication/authReducer.js"

const rootReducer=combineReducers({
    registerData:registerReducer,
    loginData:authenticationReducer,

})


export default rootReducer