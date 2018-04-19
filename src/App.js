import React, { Component } from "react";
import styled from "styled-components";

const Game = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  flex-direction: column;
`;
const Descr = styled.div`
  color: #666;
  margin-bottom: 10px;
  text-align: center;
`;
const Target = styled.div`
  border: thin solid #999;
  width: 300px;
  font-size: 45px;
  text-align: center;
  display: inline-block;
  background-color: lightblue;
`;
const NumbersWrap = styled.div`
  width: 100%;
  margin: 10px auto;
`;
const StyledNumber = styled.div`
  border: thin solid lightgrey;
  background-color: #eee;
  width: 40%;
  text-align: center;
  font-size: 36px;
  border-radius: 5px;
  margin: 1rem 5%;
  display: inline-block;
`;
const FooterWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Timer = styled.div`
  color: #911;
  font-size: 150%;
`;

const randomNumberBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

class Number extends Component {
  render() {
    return <StyledNumber>{this.props.value}</StyledNumber>;
  }
}

class App extends Component {
  challengeNumbers = Array.from({ length: this.props.challengeSize }).map(() =>
    randomNumberBetween(...this.props.challengeRange)
  );

  render() {
    return (
      <Game challengeSize={6} challengeRange={[2, 9]}>
        <Descr>
          Pick 4 numbers that total the target number within the time limit
        </Descr>
        <Target>{this.target}</Target>
        <NumbersWrap>
          {this.challengeNumbers.map((value, index) => (
            <Number key={index} value={value} />
          ))}
        </NumbersWrap>
        <FooterWrap>
          <Timer>15</Timer>
          <button>Start</button>
        </FooterWrap>
      </Game>
    );
  }
}

export default App;
