import React from "react"

export default function Customize(props) {
    return (
        <div className="customize-form">
            <button className="back-button" onClick={props.toggleCustomize}>Back</button>
        </div>
    )
}