import { EMAIL, NAME } from "../types";

// src/store/reducers.js
const initialState = {
    email:'',
    name:'',
  };
  
  const authReducer = (state = initialState, action) => {
     switch (action.type) {
        case NAME:
            return {
                ...state,
               name: action.payload,
            };
            case EMAIL:
            return {
                ...state,
                email: action.payload,
            };
            default:
              return state;
          }
  };
  
  export default authReducer;
  