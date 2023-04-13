
import { useState } from "react";
import Answer from './Answer.js';
export default function Question({ questionName, questionNumber, answers, correctAnswer }) {
    return (
        <>
        <h2>Question {questionNumber}</h2>
        <h3>{questionName}</h3>
        <Answer
        answers={answers}
        correctAnswer = {correctAnswer}
        />
        </>
    );
    
}

