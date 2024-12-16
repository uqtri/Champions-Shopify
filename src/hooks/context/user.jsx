import { use } from "react";
import { createContext, useEffect, useState } from "react";
const userContext = createContext();

const URL = import.meta.env.VITE_SERVER_URL;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  console.log(user, "USER DAY");
  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log(username, "USERNAME", username !== "");
    if (username !== "") {
      const URI = URL + `/user/${username}`;
      fetch(URI, {
        method: "GET",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setUser(data.data);
        });
    }
  }, []);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
export { userContext };
