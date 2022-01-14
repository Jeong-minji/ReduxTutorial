import axios from "axios";

export const fetchUserData = () => {
  // dispatch와 getState를 매개변수로 가지는 함수를 반환
  return async function (dispatch) {
    const response = await axios.get("http://dev.pixel.sc:1338/v1/contents");

    dispatch({ type: "FETCH_USER_DATA", payload: response });
  };
};
