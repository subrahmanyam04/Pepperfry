import * as types from "../Actions/actionType";
const initialState  = {
  loading: false,
  currentUser: null,
  error: null,
  expritiontime:"",
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.REGISTER_START:
        case types.LOGIN_START:
        
        return {
          ...state,
          loading: true,
        };
      case types.REGISTER_SUCCESS:
       
          case types.LOGIN_SUCCESS:
           
    
        return {
          ...state,
          loading: false,
          currentUser: action.payload,
        };
        case types.LOGOUT:
          return {
            ...state,
            currentUser: null,
            expritiontime:action.payload
          };
     
      
      case types.REGISTER_FAIL:
          case types.LOGIN_FAIL:
          
  
     
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      
        
      default:
        return state;
    }
  };
  
  export default userReducer;