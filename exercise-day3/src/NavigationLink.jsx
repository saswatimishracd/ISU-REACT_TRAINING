import React from "react";
import styled from "styled-components";

const NavLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 18px;

  &:hover {
    color: red;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;


const NavigationLink = () => {
  return <NavLink href="#">Hide it by shrinking the screen</NavLink>;
};

export default NavigationLink;