import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(Link)`
text-decoration=none;
color:black;
margin:0.7rem;
`;

const Nav = () => {
  return (
    <Wrapper>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">about</NavLink>
    </Wrapper>
  );
};

export default Nav;
