import React from "react"

export default function Question(props) {

    const [chooseAnswer, setChooseAnswer] = React.useState()

    const answerButtons = props.answers.map(answer => {
        return <button
            style = {
                answer===chooseAnswer?
                {backgroundColor: "rgba(0, 0, 255, 0.3)"} :
                {backgroundColor: "rgba(255, 255, 255, 0.3)"}
            }
            className="answer-button" 
            onClick={() => {setChooseAnswer(answer)}}
            key={answer}>
            {answer}
        </button>
    })

    return (
        <div className="question-group">
            <h1 className="questions">{props.question}</h1>
            <div className="answer-group">
                {answerButtons}
            </div>
            <hr />
        </div>
    )
}