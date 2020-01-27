import React from "react";
import styled from "@emotion/styled";

const Location = props => {
  const Container = styled.div`
    text-align: center;
  `;
  const City = styled.h1`
    font-family: "Merriweather Sans", sans-serif;
  `;
  const Country = styled.h3`
    font-family: "Merriweather", sans-serif;
    font-size: 1.5rem;
    font-weight: 200;
  `;

  return (
    <Container>
      <City>Sydney</City>
      <Country>AU</Country>
    </Container>
  );
};

export default Location;
