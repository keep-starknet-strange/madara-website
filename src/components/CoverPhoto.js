import React from "react";
import styled from "styled-components";
import MadaraCover from "../assets/madara-cover.png";

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverPhoto = () => {
  return (
    <ImageContainer>
      <img src={MadaraCover} alt="Cover Image" />
    </ImageContainer>
  );
};

export default CoverPhoto;
