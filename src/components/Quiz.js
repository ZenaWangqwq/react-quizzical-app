import { nanoid } from "nanoid"
import React from "react"
import Question from "./Question"

export default function Quiz(props) {
    const [questionData, setQuestionData] = React.useState([])
    const [isCheckAnswer, setIsCheckAnswer] = React.useState(false)
    const [correctNumber, setCorrectNumber] = React.useState(0)

    React.useEffect(() => {

        function shuffleArray(array) {
            return array.sort(() => Math.random() - 0.5);
        }

        fetch(`https://opentdb.com/api.php?amount=${props.formData.number}&category=${props.formData.category}&difficulty=${props.formData.difficulty}&type=${props.formData.type}`)
            .then(res => res.json())
            .then(data => data.results.map(result => {
                    const answers = (result.incorrect_answers)
                    answers.push(result.correct_answer)
                    const uniqueAnswers = shuffleArray([...new Set(answers)])
                    return {
                        ...result,
                        id: nanoid(),
                        answers: uniqueAnswers,
                        isCheckAnswer: false
                    }
                }))
            .then(data => setQuestionData(data))
    }, [props.isNewGame])

    function changePunctuation(str) {
        return str
                    .replace(/&lt;/g, "<")
                    .replace(/&gt;/g, ">")
                    .replace(/&quot;/g, '"')
                    .replace(/&#039;/g, "'")
                    .replace(/&amp;/g, "&");
    }
 
    const questionElements = questionData.map(element => {

        return <Question 
            key={element.id}
            question={changePunctuation(element.question)}
            answers={element.answers.map(answer => changePunctuation(answer))}
            correct_answer={changePunctuation(element.correct_answer)}
            type={element.type}
            difficulty={element.difficulty}
            category={element.category}
            isCheckAnswer={element.isCheckAnswer}
            checkCorrectAnswer={checkCorrectAnswer}
        />
    })

    function checkCorrectAnswer(isCorrectAnswer) {
        if(isCorrectAnswer){
            setCorrectNumber(preScore => preScore + 1)
        }
    }

    function handleCheckButtonClick() {
        setQuestionData(prevData => prevData.map(data => {
            return {...data, isCheckAnswer: true}
        }))
        setIsCheckAnswer(true)
    }

    function handlePlayAgainButtonClick() {
        setCorrectNumber(0)
        setIsCheckAnswer(false)
        props.toggleNewGame()
    }

    return (
        <div className="quiz">
            <header className="app-name">Quizzical</header>
            <div className="question-group">{questionElements}</div>
            <footer>
                {isCheckAnswer ?
                    <div className="result">
                        <h3>You scored <font color="green" size="4">{correctNumber}/{props.formData.number}</font> correct answers</h3>
                        <button className="button play-again-button" onClick={handlePlayAgainButtonClick}>Play Again</button>
                    </div> :
                    <button className="button check-button" onClick={handleCheckButtonClick}>check answers</button>
                }
                <button className="button back-button" onClick={props.toggleQuiz} >Back</button>
            </footer>
        </div>
    )
}