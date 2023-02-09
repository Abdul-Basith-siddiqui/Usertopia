import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Brand = styled.h3`
  margin: 0;
`;

const Button = styled.button`
  background-color: #fff;
  border: 1px solid #333;
  border-radius: 5px;
  color: #333;
  padding: 10px 20px;
`;

function Navbar({ fetchData }) {
  return (
    <Nav>
      <Brand>Usertopia</Brand>
      <Button onClick={fetchData}>Get Users</Button>
    </Nav>
  );
}

export default Navbar;
