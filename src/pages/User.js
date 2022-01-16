import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {loadUserAsync} from "../redux/reducers/users/userThunk";

const User = () => {
    const dispatch = useDispatch();
    const {isLoading, users, error} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(loadUserAsync());
    }, []);

    return (
        <div>
            <h1>Users Listing</h1>
            {isLoading && <h3>Loading...</h3>}
            {error && <h3>{error}</h3>}
            {users && users.data.map((user) => <h5 key={user._id}>{user.title}</h5>)}
        </div>
    )
}

export default User;
