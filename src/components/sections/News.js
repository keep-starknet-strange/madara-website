import React from "react";
import styled from "styled-components";
import { Tweet } from "react-tweet";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  overflow: hidden;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 2rem auto;

  display: flex;
  gap: 25px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 64em) {
    width: 80%;
    flex-direction: column;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
    flex-direction: column;
  }

  .react-tweet-theme {
    border: 1px solid rgba(230, 38, 0, .4);
  
`;

const News = () => {
  return (
    <Section id="news">
      <Title>News</Title>
      <Container>
        <Tweet id="1674815181556269065" />
        <Tweet id="1675809439188746241" />
        <Tweet id="1676857274483228672" />
        <Tweet id="1664571583795453952" />
      </Container>
    </Section>
  );
};

export default News;
