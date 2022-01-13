import { useState } from "react";
import { connect } from "react-redux";
import { add, plus } from "./store/index";

// connect 함수로 redux에 연결하여
// mapStateToProps 함수에서 redux 데이터를 store object에 넣음

const App = ({ store, addText, plusCount }) => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addText(text);
    setText("");
    console.log(store);
  };

  const onClick = (e) => {
    plusCount(store.count);
    console.log(store);
  };

  return (
    <>
      {store.count}
      <button onClick={onClick}>Plus Count</button>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={handleInput} />
        <button>Submit</button>
      </form>
      {store.text}
    </>
  );
};

const mapStateToProps = (state) => {
  return { store: state };
};

// redux 데이터 변경시킬 함수
const mapDispatchToProps = (dispatch) => {
  return {
    addText: (text) => dispatch(add(text)),
    plusCount: () => dispatch(plus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
