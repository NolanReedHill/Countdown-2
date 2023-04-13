import Question from './Question.js'
export default function Trivia({questions}) {
    return (
        <>
        <h1>Trivia Time!</h1>
        {questions.map((element,index) => (
            <Question
            questionNumber={element.questionNumber}
            questionName={element.question}
            answers={element.incorrect_answers}
            correctAnswer={element.correct_answer}
            />
            ))}
        </>
    );
}