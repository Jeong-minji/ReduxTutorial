import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "./store/actions/user";
import { connect } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(fetchUserData("FETCH_USER_DATA"));
  }, []);

  return (
    <>
      {console.log(user)}
      {/* <div>{user.data.data}</div> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state,
  };
};

export default connect(mapStateToProps, { fetchUserData })(User);
