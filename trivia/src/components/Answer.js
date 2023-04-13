import Button from '@mui/material/Button';
export default function Answer({answers,correctAnswer}) {
    const showAlert = (answerCheck) => {
        if (answerCheck === correctAnswer) {
            alert("Correct!");
        } else {
            alert("Wrong!")
        }
        
      }
    return (
        <>
        {answers.map((element, index) => (
            <Button variant="contained" color="secondary"onClick={() => showAlert(answers[index])}>{answers[index]}</Button>
        ))}
        </>
    )
}