import React, { useState } from "react";
import Navbar from "./Navbar";
import UserCard from "./UserCard";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Loader = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "80px",
  margin: "auto",
  color: "black",
};

const DisplayFlex = styled.div`
  display: flex;
  flexwrap: wrap;
  margin: 10%;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://reqres.in/api/users?page=1");
    const data = await res.json();
    setTimeout(() => {
      setUsers(data.data);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="App">
      <Navbar fetchData={fetchData} />
      {loading ? (
        <ReactLoading type="bars" style={Loader} />
      ) : (
        <DisplayFlex style={{ display: "flex", flexWrap: "wrap" }}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </DisplayFlex>
      )}
    </div>
  );
}

export default App;
