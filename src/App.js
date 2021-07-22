import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://reqres.in/api/users?delay=2")
      .then((res) => {
        if (!res.ok) {
          throw new Error("unable to fetch data");
        }
        return res.json();
      })
      .then((result) => {
        setLoading(false);
        return setUsers(result.data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <h1>Users number</h1>
      <div>{users.length === 0 ? "" : users.length}</div>
      <div>{loading && "Loading"}</div>
    </div>
  );
};

export default App;
