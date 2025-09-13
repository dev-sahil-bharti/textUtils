import React, { useState } from 'react'

export default function Textform(props) {
    //Convert to UpperCase
    const handaleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to Upper Case", "success");
    }
    //Convert to LowerCase
    const handaleLoClick = (event) => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convert to Lower Cass", "success");
    }
    // Clear text
    const handaleClClick = (event) => {
        let newText = ""
        setText(newText)
    }

    // copy text
    const handaleCopy = (event) => {
        let text = document.getElementById("textBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success");
    }
    
    // remove extra spaces
    const handaleExtraSpace = (event) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("remove all extra spaces", "success");
    }

    // handle click event
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="textBox" className="form-label"></label>
                    <textarea className="form-control" id="textBox" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#455eabff' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} rows="8" placeholder='Enter Text Here'></textarea>
                </div>
                <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <button className='btn btn-primary me-2' onClick={handaleUpClick}>Uppercase</button>
                    <button className='btn btn-primary me-2' onClick={handaleLoClick}>Lowercase</button>
                    <button className='btn btn-primary me-2' onClick={handaleClClick}>Clear</button>
                    <button className='btn btn-primary me-2' onClick={handaleCopy}>Copy</button>
                    <button className='btn btn-primary me-2' onClick={handaleExtraSpace}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Text Summary</h3>
                <div className="container px-4 text-center">
                    <div className="row gx-5">
                        <div className="col">
                            <div className="p-3"><p>{text.split(/\s+/).filter((element) => element.length !== 0).length} Words</p></div>
                        </div>
                        <div className="col">
                            <div className="p-3"><p>{text.length} Characters</p></div>
                        </div>
                        <div className="col">
                            <div className="p-3"><p>{0.008 * text.split(/\s+/).filter((element) => element.length !== 0).length} Reading Minutes </p></div>
                        </div>
                    </div>
                </div>
                <h3>Preview</h3>
                <p className="form-control" id="textpera" style={{ backgroundColor: props.mode === 'dark' ? '#455eabff' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>{text}</p>
            </div>
        </>
    )
}
