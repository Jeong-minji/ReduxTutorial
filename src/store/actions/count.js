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
