import React, { lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
// import Carousel from '../Carousel'
import Button from "../Button";
import { madara_on_white } from "../../styles/Themes";
import Loading from "../Loading";

const Carousel = lazy(() => import("../Carousel"));

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;
  justify-content: center;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carousel />{" "}
          </Suspense>{" "}
        </Box>
        <Box>
          <Title>
            Welcome To <br /> Madara.
          </Title>
          <SubText>
            Madara is a standard, customizable and blazing fast Starknet
            sequencer designed to make your projects soar!
          </SubText>
          <SubTextLight>
            Experience the flexibility and power of Madara, enabling you to
            launch your very own Starknet appchain or L3. Harness the
            capabilities of Cairo while maintaining complete control over your
            custom appchain, tailored to your specific requirements. Madara is
            designed to empower a multitude of projects, fueling growth within
            the Starknet ecosystem.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={madara_on_white}>
              <Button
                text="JOIN OUR TELEGRAM"
                link="https://t.me/MadaraStarknet"
              />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
