import React from 'react';
import Question from './Question.js'
export default function Trivia({questions}) {
    return (
        <>
        <h1>Trivia Time!</h1>
        {questions.map((element, index) => 
            <Question
            key={index}
            questionNumber={index+1}
            questionName={element.question}
            answers={element.incorrect_answers}
            correctAnswer={element.correct_answer}
            />
            )}
        </>
    );
}