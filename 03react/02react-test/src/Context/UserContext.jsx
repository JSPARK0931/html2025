import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// function UserContext() {
//   return (
//     <div>UserContext</div>
//   )
// }

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
      console.log(data);
      console.log(data.name);
    };
    fetchData();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
