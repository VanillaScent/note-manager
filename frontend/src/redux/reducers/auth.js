import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from "../actionTypes";

const initialState = {
  isAuthenticated: false,
  user: {},

  loading: false,
  errored: false,
  error: {}
};

export default function(state = initialState, action) {
  switch (action.type) {

    case AUTH_ERROR: {
      const  { error } = action.payload;

      return {
        ...state,
        isAuthenticated: false,
        user: {},
        
        loading: false,
        errored: true,
        error: error
      };
    }

    case AUTH_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }

    case AUTH_SUCCESS: {
        return {
          ...state,
            isAuthenticated: true,
            loading: false
          };
      };
      

    default:
      return state;
  }
}
