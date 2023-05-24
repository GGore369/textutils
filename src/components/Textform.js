import React, { useState } from 'react'

export default function Textform(props) {
    // text = "new text";  // wrong way to change the text
    // setText("new text"); // correct way to change the text

    // we can not update text as text as text = "sefdadfafd"; we can set it easily using only class
    // But here we are using function. 

    const handleUpClick = () => {
        // console.log("Uppercase was clicked");-
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert('converted to Uppercase','success')
    }
    const handleLowClick = () => {
        // console.log("Lowercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert('converted to Lowercase','success')
    }

    const handleCapClick = () => {  // capitalise the first letter of sentence using Js.
        const words = text.split(".");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }

        let newtext = words.join(".");
        setText(newtext);
        props.showAlert('Capitalised successfully','success')
    }

    const handleClearClick = () => {  // clear the text 
        let newText = "";
        setText(newText);
        props.showAlert('text is cleared','success')
    }

    // const handleUndoClick = () => {  // clear the text 
    //     const arr = [];
    //     let textarea = document.querySelector('textarea');
    //         function main2(){
    //             arr.push(textarea.target.value); 
    //         }
    //         function main3(){
    //             const lastarr = arr.pop()
    //             textarea.value = lastarr ? lastarr : textarea.value;
    //         }

        
    //     let newText = main3();
    //     setText(newText);
    // }

        const handleCopy = () => {
            var text = document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert('text is Copied','success')
        }

        const handleOnExtraSpaces = ()=> {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert('Extra space removed','success')
        }


    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' style = {{color : props.mode === "dark"?"white":"black"}}>
                <div className="mb-3 my-3">
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCapClick}>Convert to Capitalise</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleOnExtraSpaces}>Remove Spaces</button>
                {/* <button className="btn btn-primary mx-2" onClick={handleUndoClick}>Undo</button> */}
            </div>
            <div className="container my-3" style = {{color : props.mode === "dark"?"white":"black"}}>
                <h2>Your text summary</h2>
                <p>{text.split(".").length} sentences and {text.length} characteres</p> {/*split() splits a string into an array of substrings, and returns the*/}
                <p> Maximum time to learn the above text is  : {.008 * text.split(" ").length} </p>
                <h3>Preview</h3>
                <p> {text.length > 0 ? text : "Enter above in the textbox to preview here"} </p>
            </div>
        </>
    )
}
