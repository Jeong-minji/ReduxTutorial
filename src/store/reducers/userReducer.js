const initialData = { data: {} };

const userReducer = (state = initialData, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default userReducer;
