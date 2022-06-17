import React from "react"

export default function Question(props) {

    const answers = (props.incorrect_answers)
    answers.push(props.correct_answer)
    const uniqueAnswers = [...new Set(answers)]

    const answerButtons = uniqueAnswers.map(answer=>
        <button className="answer-button" key={answer}>
            {answer}
        </button>
    )

    return (
        <div className="question-group">
            <h1 className="questions">{props.question}</h1>
            <div className="answers">
                {answerButtons}
            </div>
            <hr />
        </div>
    )
}