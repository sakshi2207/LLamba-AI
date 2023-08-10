import { combineReducers } from "redux";
import { USER_LOGOUT } from "../types";
import authReducer from "./auth.tsx";


  
  const appReducer = combineReducers({
    authReducer: authReducer,
  });
  
  let rootReducer = (state, action) => {
    if (action.type === USER_LOGOUT) {
      state = undefined;
    }
    return appReducer(state, action);
  };
  
  export default rootReducer;