import { useState } from "react";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const addToDo = () => {
    dispatch(actionCreators.addToDo(text));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo();
    setText("");
  };

  return (
    <>
      <h1>ToDoList</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>add</button>
      </form>
      <ul>
        {toDoList.map((toDo) => {
          return <ToDo {...toDo} key={toDo.id} />;
        })}
      </ul>
    </>
  );
};

export default Home;
