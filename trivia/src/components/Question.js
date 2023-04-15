
import React, { useRef } from "react";
import Answer from './Answer.js';
export default function Question({ questionName, questionNumber, answers, correctAnswer }) {
    const answersShuffledRef = useRef(false);
    function shuffle(array) {
        array.push(correctAnswer);
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    shuffle(answers)
    console.log(answers);
    return (
        <>
        <h2> Question {questionNumber}</h2>
        <h3 dangerouslySetInnerHTML={{__html: questionName}}></h3>
        <Answer
        answers={answers}
        correctAnswer = {correctAnswer}
        />
        </>
    );
    
}

