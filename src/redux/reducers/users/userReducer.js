import actiontypes from "../../../interfaces/userActionType";

const initialState = {
    isLoading: false,
    users: null,
    errorMessage: null
}

const userReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case actiontypes.USER_LOAD_START: 
            return {
                ...state,
                isLoading: true,
                users: null,
                errorMessage: null
            }
        case actiontypes.USER_LOAD_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                users: payload,
            }
        case actiontypes.USER_LOAD_FAIL:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            }
        default: 
            return state;
    }
}

export default userReducer;