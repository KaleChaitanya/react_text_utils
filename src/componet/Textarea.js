import React from "react";

export default function Textarea(props) {
    const [text, setText] = React.useState("");

    function handleChange(event) {
        setText(event.target.value)
    }

    function handleUpperCase() {
        let uppercase = text.toUpperCase();
        setText(uppercase)
        props.showAlert("Convert into uppercase", "success")
    }

    function handleLowerCase() {
        let lowercase = text.toLowerCase();
        setText(lowercase)
        props.showAlert("Convert into lowercase", "success")
    }

    function handleCopyText() {
        let copyText = document.getElementById('myTextArea');
        copyText.select()
        navigator.clipboard.writeText(copyText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied into clipboard", "success")
    }

    function handleExtraSpaces() {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces", "success")
    }
    return (
        <>
            <div className="container my-3 mt-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <textarea
                    id="myTextArea"
                    className="form-control mb-3"
                    rows="8"
                    value={text}
                    onChange={handleChange}
                    style={{ backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "dark" ? "white" : "black" }}
                />

                <button
                    className="btn-info mx-2 my-2"
                    disabled={text.length === 0}
                    onClick={handleUpperCase}>
                    Convert to uppercase
                </button>

                <button
                    className="btn-info mx-2 my-2"
                    disabled={text.length === 0}
                    onClick={handleLowerCase}>
                    Convert to lowercase
                </button>
                <button
                    className="btn-info mx-2 my-2"
                    disabled={text.length === 0}
                    onClick={handleCopyText}>
                    Copy text
                </button>
                <button
                    className="btn-info"
                    disabled={text.length === 0}
                    onClick={handleExtraSpaces}>
                    Remove extra spaces
                </button>
            </div>
            <div className="container">
                <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>Your text summary</h3>
                <h5 style={{ color: props.mode === "dark" ? "white" : "black" }}>{text}</h5>
            </div>
        </>
    )
}