import StyledButton from './components/StartButton';
import './App.css';
import { useState } from 'react';
// import styled from 'styled-components';

//fetching word and console logging on click TestBtn.
function TestBtn({ onSquareClick }) {
  return (
    <StyledButton className="square" onClick={onSquareClick}>
      Test Button
    </StyledButton>
  );
}

let word = 'The Word';

async function handleClick() {
  let response = await fetch('https://www.wordgamedb.com/api/v1/words/random');
  let data = await response.json();

  word = data.word;

  console.log(word);
}

//Displaying the word as a prop.

function WordContainer({ value }) {
  return <h2>{value}</h2>;
}

function App() {
  return (
    <div className="App">
      <h1> Start the game</h1>
      <TestBtn onSquareClick={() => handleClick()}></TestBtn>
      <WordContainer value={word}></WordContainer>
    </div>
  );
}

export default App;
