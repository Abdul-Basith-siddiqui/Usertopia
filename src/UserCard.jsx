import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #ddd;
  margin: 10px;
  margin-left: 30px;
  padding: 20px;
  width: 25%;
`;

const Avatar = styled.img`
  border-radius: 50%;
  height: 100px;
  margin-bottom: 10px;
  width: 100px;
`;

const Name = styled.h3`
  margin-bottom: 5px;
`;

const Email = styled.p`
  color: #888;
  margin-bottom: 10px;
`;

function UserCard({ user }) {
  return (
    <Card>
      <Avatar src={user.avatar} alt={user.first_name} />
      <Name>
        {user.first_name} {user.last_name}
      </Name>
      <Email>{user.email}</Email>
    </Card>
  );
}

export default UserCard;
