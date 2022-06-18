import React from "react"

export default function Question(props) {

    const [chooseAnswer, setChooseAnswer] = React.useState()

    function determineButtonStyles(answer){
        const styles = {
            cursor: "not-allowed",
            pointerEvents: "none"
        }
        if (answer === chooseAnswer) {
            if (chooseAnswer === props.correct_answer){
                styles.backgroundColor="rgba(60, 179, 113, 0.7)"
            }else{
                styles.backgroundColor="rgba(255, 0, 0, 0.7)"
            }
        }else{
            styles.backgroundColor="rgba(255, 255, 255, 0.3)"
        }
        return styles
    }

    function handleClick(answer) {
        setChooseAnswer(answer)
        props.checkCorrectAnswer(answer===props.correct_answer)
    }

    const answerButtons = props.answers.map(answer => {
        return <button
            style = { props.isCheckAnswer ? 
                        determineButtonStyles(answer) :
                        (
                            answer===chooseAnswer?
                            {backgroundColor: "rgba(0, 0, 255, 0.3)"} :
                            {backgroundColor: "rgba(255, 255, 255, 0.3)"}
                        )
                    }
            className="answer-button" 
            onClick={() => handleClick(answer)}
            key={answer}>
            {answer}
        </button>
    })

    return (
        <div className="question-group">
            <h1 className="question">{props.question}</h1>
            <div className="answer-group">
                {answerButtons}
            </div>
            <hr />
        </div>
    )
}