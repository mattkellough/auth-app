import { USERS_ENDPOINT } from "../constants";

// database request for list of users
const userFetch = async () => {
  try {
    const response = await fetch(USERS_ENDPOINT);
    const user = await response.json();
    return user;
  } catch (err) {
    // throw error if server error
    alert(err);
  }
};

export default userFetch;
