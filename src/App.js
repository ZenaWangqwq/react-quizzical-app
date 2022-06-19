import React from "react"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"

export default function App() {
    const [isStart, setIsStart] = React.useState(false)
    const [isNewGame, setIsNewGame] = React.useState(0)
    
    function startQuiz() {
        setIsStart(true)
    }

    function toggleNewGame() {
        setIsNewGame(prevState => prevState + 1)
    }

    return (
        <main>
            {
                isStart ? 
                <Quiz isNewGame={isNewGame} toggleNewGame={toggleNewGame}/> : 
                <Intro startQuiz={startQuiz}/>
            }
        </main>
    )
}