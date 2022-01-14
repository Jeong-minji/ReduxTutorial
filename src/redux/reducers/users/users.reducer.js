import actionTypes from "./users.actionTypes";
import initialStates from "./users.initialStates";

const usersReducer = (state = initialStates, { type, payload }) => {
  switch (type) {
    case actionTypes.USERS_LOAD_START:
      return {
        ...state,
        isLoading: true,
        users: null,
        errorMesssage: null,
      };

    case actionTypes.USERS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: payload,
      };

    case actionTypes.USERS_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMesssage: payload,
      };

    default:
      return state;
  }
};

export default usersReducer;
