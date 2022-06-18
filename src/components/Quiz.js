import { nanoid } from "nanoid"
import React from "react"
import Question from "./Question"

export default function Quiz(props) {
    const [questionData, setQuestionData] = React.useState([]) 

    React.useEffect(() =>{

        function shuffleArray(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        fetch(`https://opentdb.com/api.php?amount=5`)
            .then(res => res.json())
            .then(data => setQuestionData(data.results.map(data => {
                const answers = (data.incorrect_answers)
                answers.push(data.correct_answer)
                const uniqueAnswers = shuffleArray([...new Set(answers)])
                return {
                    ...data,
                    id: nanoid(),
                    answers: uniqueAnswers,
                    isCheckAnswer: false
                }
            })))
    }, [])

    console.log(questionData)
 
    const questionElements = questionData.map(element => {
        return <Question 
            key={element.id}
            question={element.question}
            answers={element.answers}
            correct_answer={element.correct_answer}
            type={element.type}
            difficulty={element.difficulty}
            category={element.category}
            isCheckAnswer={element.isCheckAnswer}
        />
    })

    function handleClick() {
        setQuestionData(prevData => prevData.map(data => {
            return {...data, isCheckAnswer: true}
        }))
    }

    return (
        <div className="quiz">
            <header className="app-name">Quizzical</header>
            {questionElements}
            <footer>
                <button className="check-button" onClick={handleClick}>check answers</button>
            </footer>
        </div>
    )
}