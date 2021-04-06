import {useState} from 'react'
import './App.css';


function App() {
  const [randomCount, setRandomCount] = useState(0)
  const updateNumber = () => {
    setRandomCount(Math.floor(Math.random() * 100))
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <button className="btn" onClick={updateNumber}>{randomCount}</button>
      </header>
    </div>
  );
}

export default App;
