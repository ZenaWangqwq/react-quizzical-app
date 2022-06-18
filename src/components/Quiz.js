import { nanoid } from "nanoid"
import React from "react"
import Question from "./Question"

export default function Quiz(props) {
    const [questionData, setQuestionData] = React.useState([]) 

    React.useEffect(() =>{
        fetch(`https://opentdb.com/api.php?amount=5`)
            .then(res => res.json())
            .then(data => setQuestionData(data.results))
    }, [props.startQuiz])

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    const questionElements = questionData.map(element => {
        const answers = (element.incorrect_answers)
        answers.push(element.correct_answer)
        const uniqueAnswers = shuffleArray([...new Set(answers)])
        return <Question 
            key={nanoid()}
            question={element.question}
            answers={uniqueAnswers}
            correct_answer={element.correct_answer}
            type={element.type}
            difficulty={element.difficulty}
            category={element.category}
        />
    })


    return (
        <div>
            {questionElements}
        </div>
    )
}