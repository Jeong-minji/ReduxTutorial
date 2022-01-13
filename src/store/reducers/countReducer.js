const initialCount = { value: 0 };

const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case "increase":
      return { ...state, value: state.value + 1 };
    case "decrease":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default countReducer;
