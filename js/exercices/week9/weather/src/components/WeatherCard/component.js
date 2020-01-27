import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";

const WeatherCard = props => {
  if (props.temp > 12) {
    let highColor = (1 - (props.temp - 12) / 28) * 255;
    let lowColor = highColor - 150;
  } else if (props.temp <= 12) {
    let highColor = (1 - (props.temp + 20) / 32) * 255;
    let lowColor = highColor - 150;
  }

  const Card = styled.div`
    margin: 0 auto;
    margin-top: 1rem;
    background: linear-gradient(to top,
        rgba(255, ${highColor}, 0);
        rgba(255, ${lowColor}, 0);
    width: 200px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <Icon />
      <Condition />
    </Card>
  );
};

export default WeatherCard;
