import apiClient from "../helpers/apiClient";

class UsersService {
  getAllUsers = () => apiClient().get("contents");
}

export default new UsersService();
