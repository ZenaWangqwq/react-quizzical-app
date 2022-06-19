import React from "react"

export default function Intro(props) {
    return (
        <div className="intro-page">
            <h1 className="app-name">Quizzical</h1>
            <p className="description">Start the quiz to test your random knowledge for fun!</p>
            <button className="start-button" onClick={props.toggleQuiz}>Start quiz</button>
        </div>
    )
}