import actionTypes from "../../../interfaces/userActionType";

const userLoadStart = () => ({
    type: actionTypes.USER_LOAD_START,
});

const userLoadSuccess = (userData) => ({
    type: actionTypes.USER_LOAD_SUCCESS,
    payload: userData,
});

const userLoadFail = (error) => ({
    type: actionTypes.USER_LOAD_FAIL,
    payload: error,
});

export default {userLoadStart, userLoadSuccess, userLoadFail};