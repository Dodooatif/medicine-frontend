const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case "SIGNUP_USER":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case "LOGOUT":    
      return {
        ...state,
        loading: false,
        userInfo: "",
      };
    default:
      return state;
  }
};

export default userReducer;