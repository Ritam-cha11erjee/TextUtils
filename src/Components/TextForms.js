import React, {useState} from 'react'
let newText;
let count = 0;
let wordArray2 = [];

export default function(props){

    const [text, setText] = useState("Hello World!");
    let frontArr = [];
    let backArr = [];
    const [theme,setTheme] = useState({
        color: "black",
        backgroundColor: "white",
    });
    const [themeIcon,setThemeIcon] = useState("🌙");

    function changeTheme(){
        if(theme.color == "black"){setTheme({
            color: "white",
            backgroundColor: "black",
        });

        setThemeIcon("☀️");
        }
        else{
        setTheme({
            color: "black",
            backgroundColor: "white",
        });
        setThemeIcon("🌙");

        }
    }


    function handleChangeEvent(event){
        setText(event.target.value);
    }
    function handleClickEvent(){
        newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Changed text to UPPER CASE!", 'success');

    }
    function handleLcEvent(){
        newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Changed text to lower case!", 'success');

    }
    function handleTcEvent(){
        let wordArray = text.split(' ');
        let newArray = [];
        wordArray.forEach((word) => {
           word = word.charAt(0).toUpperCase() + word.slice(1);
            newArray.push(word);
        });
        setText(newArray.join(' '));
        props.showAlert("Changed text to Title Case!", 'success');

    }
    function clear(){
        setText("");
        props.showAlert("Cleared!", 'success');

    }
    function handleInvertEvent(){
        frontArr = [];
        backArr = [];
        for(let i = 0; i<=(text.length-1)/2; i++){
            frontArr.push(text.charAt(text.length-i-1));
        }
        for(let i = Math.ceil(text.length/2); i<text.length; i++){
            backArr.push(text.charAt(text.length-i-1));
        }
        console.log(frontArr);
        console.log(backArr);
        setText(frontArr.join('')+backArr.join(''));
        props.showAlert("Text inverted!", 'success');
    }
    function calculateWords(){
        count = 0;
        if(text === ''){
            return 0;
        }
        wordArray2 = text.split(/\s+/);
        console.log(wordArray2);
        wordArray2.forEach(word => {
            if(word === ''){}
            else{
                count++;
            }
        });
        return count;
    }

    return(
        <>
         <div className = 'container my-2'>
            {/* <div className="mb-3" style={theme}> */}
            <div className="mb-3" style = {props.mode === 'dark'? {color: 'white'}: {color: 'black'}}>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text below:</label>
            {/* <textarea className="form-control" style={theme} onChange={handleChangeEvent} id="exampleFormControlTextarea1" rows="8" value = {text}></textarea> */}
            <textarea className="form-control" style = {{backgroundColor: props.theme.secondary, color: props.theme.tertiary}} onChange={handleChangeEvent} id="exampleFormControlTextarea1" rows="8" value = {text}></textarea>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleClickEvent}>Convert to upper case</button>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleLcEvent}>Convert to lower case</button>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleTcEvent}>Convert to Title case</button>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={handleInvertEvent}>Invert text</button>
            <button type="button" className="btn btn-primary my-2 mx-1" onClick={clear}>Clear</button>
            </div>
            <div className='container' style = {props.mode === 'dark'? {color: 'white'}: {color: 'black'}}>
                <h3>Your text summary:</h3>
                <p>Number of words: {calculateWords()} characters: {text.length}</p>
                <p>Preview: {text}</p>
            </div>
            <button type = "button" className = "btn btn-dark mx-1" onClick={props.toggleMode}>{themeIcon}</button>
            <button type = "button" className = "btn btn-dark mx-1" onClick={props.redTheme}>🔴</button>
            <button type = "button" className = "btn btn-dark mx-1" onClick={props.greenTheme}>🟢</button>
      </div>
        </>
    );
}

