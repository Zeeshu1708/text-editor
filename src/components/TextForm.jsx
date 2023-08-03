import React, { useState } from 'react'

export default function TextForm(props) {
    const handelUpClick = () => {
        // console.log(text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handelLoClick = () => {
        // console.log(text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    
    const handelclearClick = () => {
        // console.log(text);
        let newText = '';
        setText(newText)
        props.showAlert("Text has been removed!", "success")
    }


    const handelCopyk = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied to clipboard!", "success")
    }

    const handelExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '));
        props.showAlert("Removed extra spaces!", "success")
    }

    const handelOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container" style={{color: props.mode=== 'light'? 'black':'white'}}>
            <h1 className="mt-3">{props.heading}</h1>
            <div className="mt-3">
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor: props.mode=== 'light'? 'white':'grey' ,color: props.mode=== 'light'? 'black':'white' }} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} dissabled={text.length===0} className="btn btn-primary m-2" onClick={handelUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handelLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handelclearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handelCopyk}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handelExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container" style={{color: props.mode=== 'light'? 'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length } munutes to read this</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter something in the above text box to preview it here"}</p>
        </div>
        </>
    )
}
