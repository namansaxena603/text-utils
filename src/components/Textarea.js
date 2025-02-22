import React from "react";
import { useState } from "react";

function Textarea(props) {
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleUpClick = () => {
    let newText1 = text.toUpperCase();
    setText(newText1);
  };

  const handleCopy = () => {
    let newText2 = document.getElementById("exampleFormControlTextarea1");
    newText2.select();
    {
      navigator.clipboard && navigator.clipboard.writeText(newText2.value);
    }
  };
  const handleExtraSpaces = () => {
    let newText3 = text.split(/\s+/);
    setText(newText3.join(" "));
  };
  const handleClear = () => {
    setText("");
  };

  const handleCap = () => {
    let strArr = text.split(/\s+/);
    // console.log(strArr);
    let capitalizedWords = strArr.map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    });
    setText(capitalizedWords.join(" "));
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container my-2">
        <h4>{props.heading}</h4>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-success mx-1 my-1"
          id="myBtn"
          onClick={handleUpClick}
        >
          Convert To
          <b> UPPERCASE</b>
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-success  mx-1 my-1"
          id="myBtn"
          onClick={handleLowClick}
        >
          Convert To
          <b> lowercase</b>
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-success  mx-1 my-1"
          id="myBtn"
          onClick={handleCap}
        >
          <b>Capitalize</b> First Letter
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-success mx-1 my-1"
          id="myBtn"
          onClick={handleCopy}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <b>Copy</b> The Text
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  TextUtils
                </h5>
              </div>
              <div className="modal-body" id="exampleModalLabel">
                Text Copied To Clipboard
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-success  mx-1 my-1"
          id="myBtn"
          onClick={handleExtraSpaces}
        >
          Remove <b> Extra Spaces</b>
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-success mx- my-1"
          id="myBtn"
          onClick={handleClear}
        >
          <b>Clear </b> The Text
        </button>
      </div>
      <hr className="hr" style={{ backgroundColor: "gray", height: "1px" }} />
      <div className="container my-2">
        <h4>About Your Text</h4>
        <p>
          Your Text Contains{" "}
          {
            text.split(/\s+/).filter((elem) => {
              return elem.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <h4>Preview Your Text</h4>
        <p className="container">{text}</p>
      </div>
    </>
  );
}

export default Textarea;
