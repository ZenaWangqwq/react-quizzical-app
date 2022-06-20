import React from "react"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"
import Customize from "./components/Customize"

export default function App() {
    const [isStart, setIsStart] = React.useState(false)
    const [isNewGame, setIsNewGame] = React.useState(0)
    const [isCustomize, setIsCustomize] = React.useState(false)
    const [formData, setFormData] = React.useState(
        {
            number: 5,
            category: "",
            difficulty: "",
            type: ""
        }
    )
    
    function toggleQuiz() {
        setIsStart(prevState => !prevState)
    }

    function toggleNewGame() {
        setIsNewGame(prevState => prevState + 1)
    }

    function toggleCustomize() {
        setIsCustomize(prevState => !prevState)
    }

    return (
        <main>
            {
                isStart ? 
                <Quiz isNewGame={isNewGame} toggleNewGame={toggleNewGame} toggleQuiz={toggleQuiz} formData={formData}/> : 
                isCustomize ? 
                <Customize toggleCustomize={toggleCustomize} setFormData={setFormData} formData={formData}/>: 
                <Intro toggleQuiz={toggleQuiz} toggleCustomize={toggleCustomize}/>
            }
        </main>
    )
}