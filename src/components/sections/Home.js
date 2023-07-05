import React, { lazy, Suspense } from "react";
import styled, { keyframes } from "styled-components";
import Loading from "../Loading";

const CoverPhoto = lazy(() => import("../CoverPhoto"));
const TypeWriterText = lazy(() => import("../TypeWriterText"));

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 80%;
  min-height: 80vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`;
const Round = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 6rem;
  height: 6rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 50%;

  img {
    width: 100%;
    height: auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
    right: 1rem;
  }
`;

const Circle = styled.span`
  position: absolute;
  bottom: 2rem;
  right: 90%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.hoverColor};
  font-size: ${(props) => props.theme.fontxl};

  @media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    right: 85%;
  }
`;

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <CoverPhoto />
          </Suspense>
        </Box>
        <Circle>&#x2193;</Circle>
      </Container>
    </Section>
  );
};

export default Home;
