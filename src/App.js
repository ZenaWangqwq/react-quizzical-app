import React from "react"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"

export default function App() {
    const [isStart, setIsStart] = React.useState(false)
    const [isNewGame, setIsNewGame] = React.useState(0)
    
    function toggleQuiz() {
        setIsStart(prevState => !prevState)
    }

    function toggleNewGame() {
        setIsNewGame(prevState => prevState + 1)
    }

    return (
        <main>
            {
                isStart ? 
                <Quiz isNewGame={isNewGame} toggleNewGame={toggleNewGame} toggleQuiz={toggleQuiz}/> : 
                <Intro toggleQuiz={toggleQuiz}/>
            }
        </main>
    )
}