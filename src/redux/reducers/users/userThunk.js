import axios from "axios";
import actions from "../../reducers/users/userAction";

export const loadUserAsync = () => (dispatch) => {
    dispatch(actions.userLoadStart());

    axios.get("http://dev.pixel.sc:1338/v1/contents")
    .then(res => dispatch(actions.userLoadSuccess(res.data)))
    .catch(err => dispatch(actions.userLoadFail(err)));

}