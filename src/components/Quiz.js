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

    console.log(questionData)

    const questionElements = questionData.map(element => 
        <Question 
            key={nanoid()}
            question={element.question}
            incorrect_answers={element.incorrect_answers}
            correct_answer={element.correct_answer}
            type={element.type}
            difficulty={element.difficulty}
            category={element.category}
        />
    )

    return (
        <div>
            {questionElements}
        </div>
    )
}