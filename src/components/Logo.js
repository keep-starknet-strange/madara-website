import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoSVG } from "../assets/madara-logo.svg";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
`;

const Logo = () => {
  return (
    <LogoText>
      <StyledLink
        to="https://github.com/keep-starknet-strange/madara"
        target="_blank"
        rel="noreferrer"
      >
        <LogoSVG style={{ width: "56px", height: "56px" }} />
      </StyledLink>
    </LogoText>
  );
};

export default Logo;
