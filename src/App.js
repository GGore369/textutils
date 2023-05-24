// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react';


function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = "#042743";
      showAlert('dark mode is enabled','success');
      document.title = "Textutils - dark";
      // setInterval(() => {
      //   document.title = "Textutils is an amazing mode";
      // },1500);
      // setInterval(() => {
      //   document.title = "Install textutils Now !";
      // }, 2000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert('light mode is enabled','success')
      document.title = "Textutils - light";
    }
  }

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
  })

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not\
  const [alert, setAlert] = useState(null);

  return (
    <>
      {/* <Navbar title = "Textutils" about = "About Textutils" /> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container" >
        <Textform heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
