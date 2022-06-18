import React from "react"

export default function Question(props) {

    const [chooseAnswer, setChooseAnswer] = React.useState()

    function determineButtonStyles(answer){
        const styles = {}
        if (answer === chooseAnswer) {
            if (chooseAnswer === props.correct_answer){
                styles.backgroundColor="green"
            }else{
                styles.backgroundColor="red"
            }
        }else{
            styles.backgroundColor="rgba(255, 255, 255, 0.3)"
        }
        return styles
    }

    // console.log("question" + chooseAnswer)
    console.log("question" + props.isCheckAnswer)

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
            onClick={() => {setChooseAnswer(answer)}}
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