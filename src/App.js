import React from 'react';
import './App.css';
import Navbar from './componet/Navbar';
import Textarea from './componet/Textarea';
import Alert from './componet/Alert';
function App() {
  const [mode, setMode] = React.useState('light');
  const [alert, setAlert] = React.useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(showAlert, 5000)
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
      showAlert("Enabled dark mode", "info");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled light mode", "info");
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Textarea showAlert={showAlert} mode={mode} />
    </>
  );
}

export default App;
