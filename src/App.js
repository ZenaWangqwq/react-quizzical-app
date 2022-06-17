import React from "react"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"

export default function App() {
    const [isStart, setIsStart] = React.useState(false)
    
    function startQuiz() {
        setIsStart(true)
    }

    return (
        <main>
            {isStart ? <Quiz startQuiz={startQuiz}/> : <Intro startQuiz={startQuiz}/>}
        </main>
    )
}