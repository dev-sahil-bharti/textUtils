import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from './components/About';
import Footer from './components/Footer';
import Alert from './components/Alert';
import { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggelMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#3a5197ff';
      document.body.style.color = 'black';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggelMode={toggelMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about" element={<About mode={mode}/>} /> */}
        {/* // <Route exact path="/" element={ */}
        <Textform heading="Enter to the text Analyze Below" mode={mode} showAlert={showAlert} />
        {/* </Routes> */}
      </div>

      {/* <Footer mode={mode} /> */}
      {/* </Router> */}
    </>
  );
}

export default App;
