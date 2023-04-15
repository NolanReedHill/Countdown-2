import Button from '@mui/material/Button';
import React, {useState} from 'react';
export default function Answer({answers,correctAnswer}) {
    for (let i = 0; i<answers.length;i++) {
        for (let j = i+1; j<answers.length;j++) {
            if (answers[i] === answers[j]) {
                delete answers[i];

            }
        }
    }
    const showAlert = (answerCheck) => {
        if (answerCheck === correctAnswer) {
            alert("Correct!");
        } else {
            alert("Wrong!")
        }
        
      }
      const [disabled, setDisabled] = useState(false);
    function handleClick(answer,index) {
        setDisabled(true);
        if (answer === correctAnswer) {
            document.getElementById(index).style.backgroundColor="green";
        }
        else {
            document.getElementById(index).style.backgroundColor="red";
        }
        showAlert(answer);
    }
    return (
        <>
        {answers.map((element, index) => (
            <Button 
            id={element}
            disabled={disabled}
            variant="contained" 
            onClick={() => handleClick(answers[index],element)}
            >{element}
            </Button>
        ))}
        </>
    )
}