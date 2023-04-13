export default function Sources() {
    async function getQuestions() {
        const response = await fetch('https://opentdb.com/api.php?amount=1');
        return await response.json();
    }
    let questions = getQuestions()
    return (
        questions
    );
}