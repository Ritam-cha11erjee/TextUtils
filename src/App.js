import './App.css';
import TextForms from './Components/TextForms'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Alert from './Components/Alert'
import React, {useState, useRef} from 'react'
// import {BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
    let intervalID;
    const[mode,setMode] = useState('light');
    const[theme,setTheme] = useState({primary: 'white', secondary: '#f8f9fa', tertiary: "black"});
    function changeMode(){
      if(mode === 'light'){
        setMode('dark');
        setTheme({primary: "#101213", secondary: 'black', tertiary: 'white'});
        document.body.style.backgroundColor="#101213";
        // showAlert("Set theme to Dark Mode!", 'success');
        document.title = "Dark";
      }
      else{
        setMode('light');
        setTheme({primary: "white", secondary: '#f8f9fa', tertiary: 'black'});
        document.body.style.backgroundColor= "white";
        // showAlert("Set theme to Light Mode!", 'success');
        document.title = "Light";

      }
    }

    function redTheme(){
      setMode('dark');
      setTheme({
        primary: "#120000",
        secondary: "#240404",
        tertiary: "white"
      });
     document.body.style.backgroundColor = "#120000";
    }
    function greenTheme(){
      setMode('dark');
      setTheme({
        primary: "#001000",
        secondary: "#001a00",
        tertiary: "white"
      });
     document.body.style.backgroundColor = "#001000";
    }

    const[alert,setAlert] = useState(null);
  function showAlert(message,type){
    setAlert({
      message: message,
      type: type
    });
    if(intervalID){
      clearTimeout(intervalID); // doesnt work
    }
    intervalID = setTimeout(() => setAlert(null), 1500);
  }

  return (
    <>
          {/* <BrowserRouter> */}
      <Navbar mode={mode} toggleMode={changeMode} theme={theme}/>
      <Alert alert={alert}/>
{/* 
          <Routes>
            <Route exact path="/" element={<TextForms mode={mode} showAlert={showAlert} redTheme={redTheme} greenTheme={greenTheme} theme={theme} toggleMode={changeMode}/>}>
            </Route>
            <Route exact path="about" element={<About/>}>
            </Route>
          </Routes> */}
        {/* </BrowserRouter> */}

        <TextForms mode={mode} showAlert={showAlert} redTheme={redTheme} greenTheme={greenTheme} theme={theme} toggleMode={changeMode}/>
    </>
  );
}

export default App;
