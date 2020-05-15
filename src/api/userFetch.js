// database request for list of users
const userFetch = async () => {
  const dataEndPoint =
    "https://res.cloudinary.com/mattkellough/raw/upload/v1572115420/userJson.json";
  try {
    const response = await fetch(dataEndPoint);
    const user = await response.json();
    return user;
  } catch (err) {
    // throw error if server error
    alert(err);
  }
};

export default userFetch;
