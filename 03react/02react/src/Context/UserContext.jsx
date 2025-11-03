import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

// function UserContext({ children }) {
//   return <UserContext.Provider value="홍길동">{children}</UserContext.Provider>;
// }

// export default UserContext;

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
