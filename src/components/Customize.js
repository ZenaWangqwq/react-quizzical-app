import React from "react"

export default function Customize(props) { 

    function handleChange(event) {
        props.setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        alert("Customize Successfully!")
        props.toggleCustomize()
    }


    return (
        <div className="customize-page">
            <header className="app-name">Quizzical</header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="number" className="customize-title">Number of Question:</label><br />
                <select
                    id="number"
                    value={props.formData.number}
                    onChange={handleChange}
                    name="number"
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select><br />
                <label htmlFor="difficulty" className="customize-title">Difficulty:</label><br />
                <select
                    id="difficulty"
                    value={props.formData.difficulty}
                    onChange={handleChange}
                    name="difficulty"
                >
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select><br />
                <label htmlFor="category" className="customize-title">Category:</label><br />
                <select
                    id="category"
                    value={props.formData.category}
                    onChange={handleChange}
                    name="category"
                >
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals & Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science & Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime & Manga</option>
                    <option value="32">Entertainment: Cartoon & Animations</option>
                </select><br />
                <label htmlFor="type" className="customize-title">Question Type:</label><br />
                <select
                    id="type"
                    value={props.formData.type}
                    onChange={handleChange}
                    name="type"
                >
                    <option value="">Any Type</option>
                    <option value="multiple">Multiple Question</option>
                    <option value="boolean">True/False</option>
                </select><br />
                <button className="button set-button">Set</button>
            </form>
        </div>
    )
}