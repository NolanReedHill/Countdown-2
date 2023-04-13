import './App.css';
import Button from '@mui/material/Button';
import Trivia from './components/Trivia.js';

function App() {
  let questions = [{"category":"Entertainment: Television","type":"multiple","difficulty":"medium","question":"Which of the following Autobot names in Michael Bay\'s movies was NOT a name for a Transformer in the original 1980\'s cartoon?","correct_answer":"Mudflap","incorrect_answers":["Skids","Sideswipe","Ratchet","Mudflap"]},{"category":"Science & Nature","type":"boolean","difficulty":"medium","question":"Like with the Neanderthals, Homo sapiens sapiens also interbred with the Denisovans.","correct_answer":"True","incorrect_answers":["True","False"]},{"category":"History","type":"multiple","difficulty":"hard","question":"The Battle of Hastings was fought in which year?","correct_answer":"1066","incorrect_answers":["911","1066","1204","1420"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"Which one of these is NOT an official map in Counter-Strike: Global Offensive?","correct_answer":"de_season","incorrect_answers":["de_season","de_sugarcane","de_canals","de_militia"]},{"category":"Entertainment: Music","type":"multiple","difficulty":"medium","question":"Which of these Johns was murdered by gunshots outside the Dakota in New York in 1980?","correct_answer":"John Lennon","incorrect_answers":["Johnny Thunders","John Denver","John Lennon","John Cascella"]}]
  return (
    <div className="App">
      <Trivia 
      questions = {questions}
      />
    </div>
  );
}
export default App;
