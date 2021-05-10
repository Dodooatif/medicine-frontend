const medicationsReducer = (state, action) => {
  switch (action.type) {
    case "GET_MEDICATIONS":
      return {
        ...state,
        medications: action.payload,
        loading: false,
      };
    case "ADD_MEDICATION":
      return {
        ...state,
        medications: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default medicationsReducer;
