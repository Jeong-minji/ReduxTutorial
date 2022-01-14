import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchUserData } from "./store/actions";

const User = () => {
  useEffect(() => {
    dispatch(fetchUserData("FETCH_USER_DATA"));
  }, []);

  const dispatch = useDispatch();
  const user = useSelector((store) => store.userReducer);

  return (
    <>
      <div>{user.data}</div>
    </>
  );
};

export default User;
