import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }

    const handleLoClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleClearClick = (event) => {
        setText("")
        props.showAlert("Text cleared","success")
    }

    const showFile = (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = (e) => {
            const text = (e.target.result)
            setText(text)
        };
        reader.readAsText(e.target.files[0])
    }

    const [text, setText] = useState('Enter Text');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="txtBox" rows="8"></textarea>
                </div>
                <input type="file" className="form-control" onChange={(e) => showFile(e)} />
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-2">
                <h3 className=''>Text Summary</h3>
                <p>{text.split(' ').filter(function (n) { return n !== '' }).length} Words and {text.trim().length} Characters</p>
                <p>{0.008 * text.split(" ").filter(function (n) { return n !== '' }).length} Minutes read </p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
