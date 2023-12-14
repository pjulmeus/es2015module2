import React from 'react';
import fruits from './food';
import { choice, remove } from './helpers';
import './App.css';


function App() {
  let fruit = choice(fruits)
 let fruitArr = remove(fruits, fruit)
  return (
    <>
    <h2>I’d like one {fruit}, please. </h2>
    <h2> Here you go: {fruit} </h2>
    <h2> Delicious! May I have another </h2>
    <h2>I’m sorry, we’re all out. We have {fruitArr.length} left</h2>
   </>
  );
}

export default App;
