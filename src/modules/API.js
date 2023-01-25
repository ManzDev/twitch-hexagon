import { shuffle } from "./shuffle.js";

const getUserPicture = async (username) => {
  const response = await fetch(`http://localhost:9999/api/userinfo/${username}`);
  const data = await response.json();

  return data.picture;
};

export const getUsers = async (size) => {
  const response = await fetch("http://localhost:9999/api/users");
  const allUsers = await response.json();

  const usernameList = shuffle(allUsers).slice(0, size);

  const usersList = [];
  for (let i = 0; i < usernameList.length; i++) {
    const username = usernameList[i];
    const picture = await getUserPicture(username);
    usersList.push({ username, picture: picture.replace("70x70", "150x150") });
  }

  return usersList;
};
