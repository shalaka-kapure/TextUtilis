import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

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
  
  return (
    <>
      <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          heading="Enter your text here"
          mode={mode}
          showAlert={showAlert}
        />
       
      </div>      
    </>
  );
}



export default App;
