import React, { useState } from "react";

export default function TextFrom(props) {
  const handleUpClick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text has been converted to UpperCase!", "success");
  };

  const handleLoClick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text has been converted to LowerCase!", "success");
  
};

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your text has been Cleared!", "success");
  
};

  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Your text has been Copied!", "success");

  };

  const handleRemoveExtra = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces have been removed from your text!", "success");

  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light' ? 'white':'#212121', color:props.mode==='light' ? '#212121':'white'}} //outer {} for writing Js and inner {} for writing an object in JS
            value={text}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-5" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-5" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-5" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-5" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 my-5" onClick={handleRemoveExtra}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p> 
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text in the above box to Preview"}</p>
      </div>
    </>
  );
}
