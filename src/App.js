//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react'
import Footer from './components/Footer';
function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  return (

    <div className="App" style={{ fontFamily: 'Poppins, sanSerif' }}>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

      <Textarea heading="Enter Your Text Here" />

      <Footer />

    </div>

  );
}

export default App;
