import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseNumber, decreaseNumber } from "./store/actions/count";

import "./style/Count.css";

const Count = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);

  const handleButton = (e) => {
    if (e.target.id === "increase") {
      dispatch(increaseNumber("+"));
    } else {
      dispatch(decreaseNumber("-"));
    }
  };

  return (
    <div>
      <button id="decrease" onClick={handleButton}>
        -
      </button>
      <span>{count.value}</span>
      <button id="increase" onClick={handleButton}>
        +
      </button>
    </div>
  );
};

export default Count;
