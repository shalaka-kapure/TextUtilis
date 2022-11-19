import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/about";
import TextForm from "./components/textForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#212121";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212121";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  //document.title = "" can be used to write title of the page after shifting from one page to other

  return (
    <>
      <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
      {/*aboutText="About"*/}
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter your text here"
          mode={mode}
          showAlert={showAlert}
        />
       {/*<About mode={mode} /> */} 
      </div>

      {/*     <Router>
        <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
        {/*aboutText="About"*/}
      {/* <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
       </div>
      </Router> */}
    </>
  );
}

export default App;
