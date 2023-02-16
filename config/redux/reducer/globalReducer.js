const initialState = {
  name: "Ray",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "adzany",
    };
  }
  return state;
};

export default globalReducer;
