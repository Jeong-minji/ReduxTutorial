import axios from "axios";

export const increaseNumber = (item) => {
  return {
    type: "increase",
    payload: item,
  };
};

export const decreaseNumber = (item) => {
  return {
    type: "decrease",
    payload: item,
  };
};

export const fetchUserData = async () => {
  const response = await axios.get("http://dev.pixel.sc:1338/v1/contents");

  return {
    type: "FETCH_USER_DATA",
    payload: response,
  };
};
