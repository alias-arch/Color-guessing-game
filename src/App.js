import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [backColor, setBackColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  function handlebutton(ans) {
    if (ans === backColor) {
      setResult(true);
      const actualColor = generateColor();
      setBackColor(actualColor);
      setAnswers([actualColor, generateColor(), generateColor()].sort())

      console.log(ans);
    }
    else {
      setResult(false)
    }
  }
  function generateColor() {
    const letters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const color = new Array(6).fill("").map(() => letters[Math.floor(Math.random() * letters.length)]).join("");
    return `#${color}`;

  }
  useEffect(() => {
    const actualColor = generateColor();
    setBackColor(actualColor);
    setAnswers([actualColor, generateColor(), generateColor()].sort())
  }, [])
  return (
    <div className="App">
      <div className="guess">
        <div className="bcolor" style={{ background: backColor }}>
        </div>
        <div className="choices">
          {answers.map((answer) => <button onClick={() => handlebutton(answer)} className='btn'> {answer}</button>)}
        </div>
        {result && <div className="right">you are correct</div>}
        {!result && <div className="wrong">you are wrong</div>}
      </div>
    </div >
  );
}

export default App;
