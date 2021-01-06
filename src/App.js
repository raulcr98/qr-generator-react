import { useState } from "react";
import QRCode from "react-qr-code";
import './App.css';

function App() {
  const [text, setText] = useState("Hola Mundo");

  return (
    <div className="App">
      <header className="App-header">
        <QRCode value={text} size={256} bgColor="#282c34" fgColor="#fff" level="H" />
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
      </header>
    </div>
  );
}

export default App;
